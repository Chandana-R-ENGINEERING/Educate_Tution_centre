import { businessConfig, ClassLevel } from '../config/businessConfig';

export type FormCurriculum = 'Karnataka State' | 'CBSE';

export interface EnquiryPayload {
  parentName: string;
  studentName: string;
  phoneNumber: string;
  studentClass: ClassLevel | '';
  curriculum: FormCurriculum | '';
  message: string;
}

export interface EnquirySubmissionResult {
  status: 'delivered' | 'prepared_local';
  formattedSummary: string;
  referenceNote: string;
}

export interface EnquiryValidationErrors {
  parentName?: string;
  studentName?: string;
  phoneNumber?: string;
  studentClass?: string;
  curriculum?: string;
  message?: string;
}

/**
 * Normalizes and validates an Indian 10-digit mobile number.
 * Accepts optional +91, 91, or leading 0, plus spaces or hyphens.
 */
export function normalizeIndianPhone(raw: string): string {
  const digitsOnly = raw.replace(/[^\d]/g, '');
  if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
    return digitsOnly.slice(2);
  }
  if (digitsOnly.length === 11 && digitsOnly.startsWith('0')) {
    return digitsOnly.slice(1);
  }
  return digitsOnly;
}

export function isValidIndianPhone(raw: string): boolean {
  const normalized = normalizeIndianPhone(raw);
  return /^[6-9]\d{9}$/.test(normalized);
}

export function validateEnquiry(payload: EnquiryPayload): EnquiryValidationErrors {
  const errors: EnquiryValidationErrors = {};

  if (!payload.parentName.trim()) {
    errors.parentName = 'Please enter the parent or guardian name.';
  } else if (payload.parentName.trim().length < 2) {
    errors.parentName = 'Parent name must be at least 2 characters.';
  }

  if (!payload.studentName.trim()) {
    errors.studentName = 'Please enter the student name.';
  } else if (payload.studentName.trim().length < 2) {
    errors.studentName = 'Student name must be at least 2 characters.';
  }

  if (!payload.phoneNumber.trim()) {
    errors.phoneNumber = 'Please enter a valid 10-digit Indian mobile number.';
  } else if (!isValidIndianPhone(payload.phoneNumber)) {
    errors.phoneNumber =
      'Enter a valid 10-digit Indian phone number (starting with 6–9, e.g. +91 98450 12345).';
  }

  if (!payload.studentClass) {
    errors.studentClass = 'Please select Class 8, 9 or 10.';
  }

  if (!payload.curriculum) {
    errors.curriculum = 'Please select Karnataka State or CBSE.';
  }

  if (!payload.message.trim()) {
    errors.message = 'Please include a short note about your enquiry.';
  } else if (payload.message.trim().length < 8) {
    errors.message = 'Please share a few more words so the centre can assist you.';
  }

  return errors;
}

export function formatEnquirySummary(payload: EnquiryPayload): string {
  const normalizedPhone = normalizeIndianPhone(payload.phoneNumber);
  const formattedPhone = normalizedPhone ? `+91 ${normalizedPhone}` : payload.phoneNumber.trim();
  return [
    `Admissions Enquiry — ${businessConfig.businessName}`,
    `Parent Name: ${payload.parentName.trim()}`,
    `Student Name: ${payload.studentName.trim()}`,
    `Phone: ${formattedPhone}`,
    `Class: Class ${payload.studentClass}`,
    `Curriculum: ${payload.curriculum}`,
    `Message: ${payload.message.trim()}`,
  ].join('\n');
}

/**
 * Integration-ready submission function.
 * If `businessConfig.enquiryIntegration.apiEndpoint` is configured, submits JSON via POST.
 * Otherwise returns `prepared_local` honestly without pretending remote delivery occurred.
 */
export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquirySubmissionResult> {
  const summary = formatEnquirySummary(payload);
  const endpoint = businessConfig.enquiryIntegration.apiEndpoint.trim();

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload,
        normalizedPhone: `+91${normalizeIndianPhone(payload.phoneNumber)}`,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Unable to send enquiry right now. Please call the centre directly.');
    }

    return {
      status: 'delivered',
      formattedSummary: summary,
      referenceNote: 'Your enquiry has been sent to EDUCATE Tuition Centre.',
    };
  }

  // Brief natural processing pause for smooth UX feedback
  await new Promise((resolve) => setTimeout(resolve, 250));

  return {
    status: 'prepared_local',
    formattedSummary: summary,
    referenceNote:
      'Your enquiry details are validated and ready. Online auto-delivery is not yet connected on this site — please call EDUCATE Tuition Centre directly or copy your enquiry summary below.',
  };
}
