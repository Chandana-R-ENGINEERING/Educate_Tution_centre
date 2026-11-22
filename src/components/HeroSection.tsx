import { ArrowRight } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';
import { ResponsiveImage } from './ResponsiveImage';

interface HeroSectionProps {
  onEnquireClick: () => void;
}

export function HeroSection({ onEnquireClick }: HeroSectionProps) {
  const { hero, location, womenOwnedNote } = businessConfig;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF9EF] via-[#FFF9EF]/70 to-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Editorial Headline, Supporting Copy & CTAs */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-sm font-medium text-[#356AE6]">
              <span>{location.shortArea}</span>
              <span aria-hidden="true" className="mx-2 text-[#172B4D]/30">
                ·
              </span>
              <span className="text-[#657184]">{womenOwnedNote}</span>
            </p>

            <h1 className="mt-4 font-display text-[clamp(2.25rem,3.8vw,3.5rem)] leading-[1.12] font-bold tracking-tight text-balance text-[#172B4D]">
              {hero.headline}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#657184] sm:text-lg">
              {hero.supportingText}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <button
                type="button"
                onClick={onEnquireClick}
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#356AE6] px-6 py-3 text-base font-semibold whitespace-nowrap text-white shadow-sm transition-colors duration-150 hover:bg-[#2856C7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356AE6]"
              >
                <span>{hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href="#classes"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#172B4D]/20 bg-white px-6 py-3 text-base font-semibold whitespace-nowrap text-[#172B4D] transition-colors duration-150 hover:border-[#172B4D]/40 hover:bg-[#EAF2FF]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356AE6]"
              >
                {hero.secondaryCta}
              </a>
            </div>

            {/* Three Trust Indicators (clean unboxed typographic strip, zero-pill discipline) */}
            <div className="mt-9 border-t border-[#172B4D]/10 pt-6">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                {hero.trustIndicators.map((indicator, idx) => (
                  <div key={indicator} className="flex flex-col">
                    <dt className="text-xs font-medium text-[#657184]">
                      0{idx + 1}
                    </dt>
                    <dd className="mt-1 font-display text-sm font-semibold text-[#172B4D]">
                      {indicator}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right Column: Authentic Classroom Visual */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-[#172B4D]/10 bg-white p-2 shadow-[0_20px_45px_-20px_rgba(23,43,77,0.18)] sm:min-h-[380px] lg:min-h-[460px]">
              <ResponsiveImage
                src={hero.imagePath}
                alt={hero.imageAlt}
                loading="eager"
                fallbackTitle="EDUCATE Tuition Centre Classroom"
                containerClassName="h-full w-full rounded-xl aspect-[4/3] lg:aspect-auto"
                className="transition-transform duration-500 ease-out hover:scale-[1.015]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
