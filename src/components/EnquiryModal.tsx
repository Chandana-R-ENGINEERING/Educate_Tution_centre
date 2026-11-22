import { useEffect } from 'react';
import { Phone, X } from 'lucide-react';
import { businessConfig, ClassLevel } from '../config/businessConfig';
import { EnquiryForm } from './EnquiryForm';

interface EnquiryModalProps {
  isOpen: boolean;
  initialClass?: ClassLevel | '';
  onClose: () => void;
}

export function EnquiryModal({ isOpen, initialClass = '', onClose }: EnquiryModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#172B4D]/60 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-xl rounded-2xl border border-[#172B4D]/15 bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#172B4D]/10 pb-4">
          <div>
            <p className="text-xs font-semibold text-[#356AE6]">
              {businessConfig.businessName}
            </p>
            <h2
              id="enquiry-modal-title"
              className="mt-1 font-display text-2xl font-bold text-[#172B4D]"
            >
              Admissions &amp; Tuition Enquiry
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close enquiry modal"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-[#172B4D]/15 text-[#172B4D] transition-colors hover:bg-[#EAF2FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356AE6]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5">
          <EnquiryForm initialClass={initialClass} compact />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-[#172B4D]/10 pt-4 text-xs text-[#657184]">
          <span>Prefer speaking directly?</span>
          <a
            href={businessConfig.phone.telHref}
            className="inline-flex items-center gap-1.5 font-semibold text-[#172B4D] hover:text-[#356AE6]"
          >
            <Phone className="h-3.5 w-3.5 text-[#356AE6]" aria-hidden="true" />
            <span className="tabular-nums">{businessConfig.phone.display}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
