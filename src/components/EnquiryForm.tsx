import { useEffect, useId, useState } from 'react';
import { AlertCircle, CheckCircle2, Copy, Loader2, Phone } from 'lucide-react';
import { businessConfig, ClassLevel } from '../config/businessConfig';
import {
  EnquiryPayload,
  EnquirySubmissionResult,
  EnquiryValidationErrors,
  FormCurriculum,
  submitEnquiry,
  validateEnquiry,
} from '../services/enquiryService';

interface EnquiryFormProps {
  initialClass?: ClassLevel | '';
  compact?: boolean;
  onSuccessComplete?: () => void;
}

export function EnquiryForm({
  initialClass = '',
  compact = false,
}: EnquiryFormProps) {
  const formId = useId();
  const [payload, setPayload] = useState<EnquiryPayload>({
    parentName: '',
    studentName: '',
    phoneNumber: '',
    studentClass: initialClass,
    curriculum: '',
    message: '',
  });

  const [errors, setErrors] = useState<EnquiryValidationErrors>({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<EnquirySubmissionResult | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialClass) {
      setPayload((prev) => ({ ...prev, studentClass: initialClass }));
    }
  }, [initialClass]);

  const updateField = <K extends keyof EnquiryPayload>(
    key: K,
    value: EnquiryPayload[K]
  ) => {
    setPayload((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
    if (submitError) {
      setSubmitError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateEnquiry(payload);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const submissionResult = await submitEnquiry(payload);
      setResult(submissionResult);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Could not process the enquiry. Please call the centre directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopySummary = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.formattedSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setCopied(false);
    setErrors({});
    setSubmitError('');
    setPayload({
      parentName: '',
      studentName: '',
      phoneNumber: '',
      studentClass: initialClass,
      curriculum: '',
      message: '',
    });
  };

  if (result) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl border border-[#172B4D]/15 bg-[#EAF2FF]/50 p-6"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2
            className="mt-0.5 h-6 w-6 shrink-0 text-[#356AE6]"
            aria-hidden="true"
          />
          <div>
            <h3 className="font-display text-lg font-bold text-[#172B4D]">
              {result.status === 'delivered'
                ? 'Enquiry Sent Successfully'
                : 'Enquiry Details Validated'}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#657184]">
              {result.referenceNote}
            </p>
          </div>
        </div>

        <pre className="mt-4 overflow-x-auto rounded-lg border border-[#172B4D]/10 bg-white p-4 font-body text-xs leading-relaxed whitespace-pre-wrap text-[#172B4D]">
          {result.formattedSummary}
        </pre>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={businessConfig.phone.telHref}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#356AE6] px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-[#2856C7]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="tabular-nums">Call {businessConfig.phone.display}</span>
          </a>

          <button
            type="button"
            onClick={handleCopySummary}
            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#172B4D]/20 bg-white px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-[#172B4D] transition-colors hover:bg-[#FFF9EF]"
          >
            <Copy className="h-4 w-4 text-[#356AE6]" aria-hidden="true" />
            <span>{copied ? 'Copied Details' : 'Copy Details'}</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex min-h-11 cursor-pointer items-center justify-center px-3 py-2 text-sm font-medium text-[#657184] underline-offset-4 hover:text-[#172B4D] hover:underline"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {submitError && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-3.5 text-sm text-red-800"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{submitError}</span>
        </div>
      )}

      <div className={`grid grid-cols-1 gap-4 ${compact ? 'sm:grid-cols-2' : 'sm:grid-cols-2'}`}>
        {/* Parent Name */}
        <div>
          <label
            htmlFor={`${formId}-parent`}
            className="block text-sm font-semibold text-[#172B4D]"
          >
            Parent Name <span className="text-red-600">*</span>
          </label>
          <input
            id={`${formId}-parent`}
            name="parentName"
            type="text"
            autoComplete="name"
            required
            value={payload.parentName}
            onChange={(e) => updateField('parentName', e.target.value)}
            aria-invalid={Boolean(errors.parentName)}
            aria-describedby={errors.parentName ? `${formId}-parent-err` : undefined}
            placeholder="Enter parent or guardian name"
            className={`mt-1.5 block min-h-11 w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#172B4D] placeholder:text-[#657184]/70 focus:outline-2 focus:outline-offset-0 focus:outline-[#356AE6] ${
              errors.parentName ? 'border-red-500' : 'border-[#172B4D]/20'
            }`}
          />
          {errors.parentName && (
            <p id={`${formId}-parent-err`} className="mt-1.5 text-xs font-medium text-red-700">
              {errors.parentName}
            </p>
          )}
        </div>

        {/* Student Name */}
        <div>
          <label
            htmlFor={`${formId}-student`}
            className="block text-sm font-semibold text-[#172B4D]"
          >
            Student Name <span className="text-red-600">*</span>
          </label>
          <input
            id={`${formId}-student`}
            name="studentName"
            type="text"
            required
            value={payload.studentName}
            onChange={(e) => updateField('studentName', e.target.value)}
            aria-invalid={Boolean(errors.studentName)}
            aria-describedby={errors.studentName ? `${formId}-student-err` : undefined}
            placeholder="Enter student name"
            className={`mt-1.5 block min-h-11 w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#172B4D] placeholder:text-[#657184]/70 focus:outline-2 focus:outline-offset-0 focus:outline-[#356AE6] ${
              errors.studentName ? 'border-red-500' : 'border-[#172B4D]/20'
            }`}
          />
          {errors.studentName && (
            <p id={`${formId}-student-err`} className="mt-1.5 text-xs font-medium text-red-700">
              {errors.studentName}
            </p>
          )}
        </div>
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor={`${formId}-phone`}
          className="block text-sm font-semibold text-[#172B4D]"
        >
          Phone Number <span className="text-red-600">*</span>
        </label>
        <input
          id={`${formId}-phone`}
          name="phoneNumber"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          value={payload.phoneNumber}
          onChange={(e) => updateField('phoneNumber', e.target.value)}
          aria-invalid={Boolean(errors.phoneNumber)}
          aria-describedby={errors.phoneNumber ? `${formId}-phone-err` : undefined}
          placeholder="e.g. +91 98450 12345"
          className={`mt-1.5 block min-h-11 w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#172B4D] tabular-nums placeholder:text-[#657184]/70 focus:outline-2 focus:outline-offset-0 focus:outline-[#356AE6] ${
            errors.phoneNumber ? 'border-red-500' : 'border-[#172B4D]/20'
          }`}
        />
        {errors.phoneNumber && (
          <p id={`${formId}-phone-err`} className="mt-1.5 text-xs font-medium text-red-700">
            {errors.phoneNumber}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Class Select */}
        <div>
          <label
            htmlFor={`${formId}-class`}
            className="block text-sm font-semibold text-[#172B4D]"
          >
            Class <span className="text-red-600">*</span>
          </label>
          <select
            id={`${formId}-class`}
            name="studentClass"
            required
            value={payload.studentClass}
            onChange={(e) => updateField('studentClass', e.target.value as ClassLevel | '')}
            aria-invalid={Boolean(errors.studentClass)}
            aria-describedby={errors.studentClass ? `${formId}-class-err` : undefined}
            className={`mt-1.5 block min-h-11 w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#172B4D] focus:outline-2 focus:outline-offset-0 focus:outline-[#356AE6] ${
              errors.studentClass ? 'border-red-500' : 'border-[#172B4D]/20'
            }`}
          >
            <option value="">Select class</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
          </select>
          {errors.studentClass && (
            <p id={`${formId}-class-err`} className="mt-1.5 text-xs font-medium text-red-700">
              {errors.studentClass}
            </p>
          )}
        </div>

        {/* Curriculum Select */}
        <div>
          <label
            htmlFor={`${formId}-curriculum`}
            className="block text-sm font-semibold text-[#172B4D]"
          >
            Curriculum <span className="text-red-600">*</span>
          </label>
          <select
            id={`${formId}-curriculum`}
            name="curriculum"
            required
            value={payload.curriculum}
            onChange={(e) =>
              updateField('curriculum', e.target.value as FormCurriculum | '')
            }
            aria-invalid={Boolean(errors.curriculum)}
            aria-describedby={errors.curriculum ? `${formId}-curriculum-err` : undefined}
            className={`mt-1.5 block min-h-11 w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#172B4D] focus:outline-2 focus:outline-offset-0 focus:outline-[#356AE6] ${
              errors.curriculum ? 'border-red-500' : 'border-[#172B4D]/20'
            }`}
          >
            <option value="">Select curriculum</option>
            <option value="Karnataka State">Karnataka State</option>
            <option value="CBSE">CBSE</option>
          </select>
          {errors.curriculum && (
            <p
              id={`${formId}-curriculum-err`}
              className="mt-1.5 text-xs font-medium text-red-700"
            >
              {errors.curriculum}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor={`${formId}-message`}
          className="block text-sm font-semibold text-[#172B4D]"
        >
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={compact ? 3 : 4}
          required
          value={payload.message}
          onChange={(e) => updateField('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-err` : undefined}
          placeholder="Share any questions regarding classes, schedule, or student learning goals..."
          className={`mt-1.5 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#172B4D] placeholder:text-[#657184]/70 focus:outline-2 focus:outline-offset-0 focus:outline-[#356AE6] ${
            errors.message ? 'border-red-500' : 'border-[#172B4D]/20'
          }`}
        />
        {errors.message && (
          <p id={`${formId}-message-err`} className="mt-1.5 text-xs font-medium text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#356AE6] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#2856C7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356AE6] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        <span>{isSubmitting ? 'Preparing Enquiry...' : 'Submit Enquiry'}</span>
      </button>
    </form>
  );
}
