import { businessConfig } from '../config/businessConfig';
import { ResponsiveImage } from './ResponsiveImage';

export function AboutSection() {
  const { about } = businessConfig;

  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Educational Photograph */}
          <div className="lg:col-span-6">
            <div className="h-full overflow-hidden rounded-2xl border border-[#172B4D]/10 bg-[#FFF9EF] p-2">
              <ResponsiveImage
                src={about.imagePath}
                alt={about.imageAlt}
                loading="lazy"
                fallbackTitle="Guided Study at EDUCATE"
                containerClassName="h-full w-full rounded-xl aspect-[4/3] lg:aspect-auto"
              />
            </div>
          </div>

          {/* Right Column: About Content & Three Highlights */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-sm font-semibold text-[#356AE6]">About EDUCATE</p>
            <h2 className="mt-2 font-display text-3xl leading-tight font-bold tracking-tight text-balance text-[#172B4D] sm:text-4xl">
              {about.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#657184] sm:text-lg">
              {about.description}
            </p>

            <div className="mt-8 divide-y divide-[#172B4D]/10 border-y border-[#172B4D]/10">
              {about.highlights.map((item) => (
                <div
                  key={item.index}
                  className="flex items-start gap-4 py-4 sm:gap-5 sm:py-5"
                >
                  <span className="font-display text-sm font-bold text-[#356AE6] tabular-nums">
                    {item.index}.
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-[#172B4D]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#657184]">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
