import { ArrowRight } from 'lucide-react';
import { businessConfig, ClassLevel } from '../config/businessConfig';

interface ClassesSectionProps {
  onEnquireClass: (classLevel: ClassLevel) => void;
}

export function ClassesSection({ onEnquireClass }: ClassesSectionProps) {
  const { classes } = businessConfig;

  return (
    <section id="classes" className="bg-[#FFF9EF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#356AE6]">Classes &amp; Curriculum</p>
          <h2 className="mt-2 font-display text-3xl leading-tight font-bold tracking-tight text-balance text-[#172B4D] sm:text-4xl">
            {classes.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#657184]">
            {classes.subheading}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-12 lg:gap-8">
          {classes.items.map((program) => (
            <article
              key={program.level}
              className="flex flex-col justify-between rounded-2xl border border-[#172B4D]/10 bg-white p-7 shadow-[0_8px_24px_-16px_rgba(23,43,77,0.16)] transition-transform duration-200 hover:-translate-y-0.5 sm:p-8"
            >
              <div>
                <div className="flex items-baseline justify-between border-b border-[#172B4D]/10 pb-4">
                  <span className="font-display text-sm font-semibold text-[#356AE6]">
                    Stage {program.level}
                  </span>
                  <span className="font-display text-4xl font-extrabold tracking-tight text-[#172B4D]/15 tabular-nums">
                    0{program.level}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold text-[#172B4D]">
                  {program.title}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-[#657184]">
                  {program.description}
                </p>

                <div className="mt-6 border-t border-[#172B4D]/10 pt-4">
                  <p className="text-xs font-medium text-[#657184]">Curricula Offered</p>
                  <p className="mt-1.5 text-sm font-semibold text-[#172B4D]">
                    {program.curricula[0]}
                    <span aria-hidden="true" className="mx-2 font-normal text-[#172B4D]/30">
                      ·
                    </span>
                    {program.curricula[1]}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => onEnquireClass(program.level)}
                  className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#172B4D] px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition-colors duration-150 hover:bg-[#356AE6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356AE6]"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
