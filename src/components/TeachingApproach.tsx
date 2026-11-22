import {
  BookOpenCheck,
  ClipboardCheck,
  MessageCircleQuestion,
  UserCheck,
} from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const approachIcons = {
  'individual-attention': UserCheck,
  'patient-explanations': BookOpenCheck,
  'regular-tests': ClipboardCheck,
  'doubt-clarification': MessageCircleQuestion,
} as const;

export function TeachingApproach() {
  const { teachingApproach } = businessConfig;

  return (
    <section id="approach" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#356AE6]">Teaching Approach</p>
          <h2 className="mt-2 font-display text-3xl leading-tight font-bold tracking-tight text-balance text-[#172B4D] sm:text-4xl">
            {teachingApproach.heading}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:gap-8">
          {teachingApproach.items.map((item) => {
            const Icon = approachIcons[item.id as keyof typeof approachIcons] ?? UserCheck;
            return (
              <div
                key={item.id}
                className="flex flex-col rounded-2xl border border-[#172B4D]/10 bg-white p-7 transition-colors duration-150 hover:border-[#356AE6]/35 sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#356AE6]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-[#172B4D]">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-base leading-relaxed text-[#657184]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
