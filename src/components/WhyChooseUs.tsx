import { Check } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';
import { ResponsiveImage } from './ResponsiveImage';

export function WhyChooseUs() {
  const { whyChooseUs } = businessConfig;

  return (
    <section className="bg-[#EAF2FF]/65 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Content & Six Highlights */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-sm font-semibold text-[#356AE6]">Why Parents Choose EDUCATE</p>
            <h2 className="mt-2 font-display text-3xl leading-tight font-bold tracking-tight text-balance text-[#172B4D] sm:text-4xl">
              {whyChooseUs.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#657184] sm:text-lg">
              {whyChooseUs.description}
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {whyChooseUs.highlights.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 rounded-xl border border-[#172B4D]/10 bg-white px-4 py-3.5"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#EAF2FF] text-[#356AE6]">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-[#172B4D]">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Study Space Image */}
          <div className="lg:col-span-6">
            <div className="h-full overflow-hidden rounded-2xl border border-[#172B4D]/10 bg-white p-2 shadow-[0_18px_40px_-24px_rgba(23,43,77,0.2)]">
              <ResponsiveImage
                src={whyChooseUs.imagePath}
                alt={whyChooseUs.imageAlt}
                loading="lazy"
                fallbackTitle="Quiet Study Environment"
                containerClassName="h-full w-full rounded-xl aspect-[4/3] lg:aspect-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
