import { Star } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

export function TrustSection() {
  const { googleListing } = businessConfig;

  const stats = [
    {
      value: `${googleListing.rating}/${googleListing.ratingScale}`,
      label: 'Google Rating',
      hasStar: true,
    },
    {
      value: `${googleListing.reviewCount}`,
      label: 'Google Reviews',
      hasStar: false,
    },
    {
      value: 'Individual',
      label: 'Student Attention',
      hasStar: false,
    },
    {
      value: 'State & CBSE',
      label: 'Classes 8, 9 & 10',
      hasStar: false,
    },
  ];

  return (
    <section
      aria-label="Trust and Reputation Highlights"
      className="border-y border-[#172B4D]/10 bg-white py-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col border-[#172B4D]/10 lg:border-r lg:pr-6 lg:last:border-r-0 lg:last:pr-0"
            >
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl font-bold tracking-tight text-[#172B4D] tabular-nums sm:text-3xl">
                  {stat.value}
                </span>
                {stat.hasStar && (
                  <Star
                    className="h-5 w-5 fill-[#E9B96E] text-[#E9B96E]"
                    aria-hidden="true"
                  />
                )}
              </div>
              <span className="mt-1 text-sm font-medium text-[#657184]">{stat.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 border-t border-[#172B4D]/8 pt-4 text-xs text-[#657184]">
          {googleListing.attributionLabel}
        </p>
      </div>
    </section>
  );
}
