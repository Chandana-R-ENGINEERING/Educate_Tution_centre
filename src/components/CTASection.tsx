import { ArrowRight } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

interface CTASectionProps {
  onContactClick: () => void;
}

export function CTASection({ onContactClick }: CTASectionProps) {
  const { ctaSection } = businessConfig;

  return (
    <section className="bg-[#172B4D] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <div className="h-0.5 w-12 bg-[#E9B96E]" aria-hidden="true" />
            <h2 className="mt-5 font-display text-3xl leading-tight font-bold tracking-tight text-balance text-white sm:text-4xl">
              {ctaSection.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              {ctaSection.description}
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onContactClick();
              }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#356AE6] px-6 py-3 text-base font-semibold whitespace-nowrap text-white transition-colors duration-150 hover:bg-[#2856C7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9B96E]"
            >
              <span>{ctaSection.ctaLabel}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
