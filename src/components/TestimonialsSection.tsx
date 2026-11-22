import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Quote, Star } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

export function TestimonialsSection() {
  const { feedback, googleListing } = businessConfig;
  const items = feedback.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const [showReviewsNotice, setShowReviewsNotice] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const currentItem = items[activeIndex];
  const nextItem = items[(activeIndex + 1) % items.length];

  return (
    <section id="feedback" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Row with Google Listing Rating Summary */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#172B4D]/10 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#356AE6]">Parent &amp; Student Feedback</p>
            <h2 className="mt-2 font-display text-3xl leading-tight font-bold tracking-tight text-balance text-[#172B4D] sm:text-4xl">
              {feedback.heading}
            </h2>
            <p className="mt-3 text-base text-[#657184]">{feedback.subheading}</p>
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1" aria-label={`Rated ${googleListing.rating} out of ${googleListing.ratingScale}`}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-[#E9B96E] text-[#E9B96E]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="font-display text-base font-bold text-[#172B4D] tabular-nums">
                {googleListing.rating}/{googleListing.ratingScale}
              </span>
              <span aria-hidden="true" className="text-[#172B4D]/30">
                ·
              </span>
              <span className="text-sm font-medium text-[#657184] tabular-nums">
                {googleListing.reviewCount} reviews
              </span>
            </div>
            <p className="text-xs text-[#657184]">{googleListing.attributionLabel}</p>
          </div>
        </div>

        {/* Interactive Paraphrased Feedback Themes Carousel */}
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[currentItem, nextItem].map((item, cardIdx) => (
              <article
                key={`${item.id}-${cardIdx}`}
                className={`flex flex-col justify-between rounded-2xl border border-[#172B4D]/10 bg-[#FFF9EF]/70 p-7 sm:p-8 ${
                  cardIdx === 1 ? 'hidden lg:flex' : 'flex'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold text-[#356AE6]">
                      {item.focusArea}
                    </span>
                    <Quote className="h-5 w-5 text-[#E9B96E]" aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-[#172B4D]">
                    {item.theme}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-[#657184]">
                    {item.summary}
                  </p>
                </div>

                <p className="mt-6 border-t border-[#172B4D]/10 pt-4 text-xs font-medium text-[#657184]">
                  Paraphrased theme from customer feedback
                </p>
              </article>
            ))}
          </div>

          {/* Carousel Controls & Configurable Google Reviews Action */}
          <div className="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous feedback theme"
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-[#172B4D]/15 bg-white text-[#172B4D] transition-colors hover:bg-[#EAF2FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356AE6]"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-2" role="tablist" aria-label="Select feedback theme">
                {items.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={idx === activeIndex}
                    aria-label={`View theme ${idx + 1}: ${item.theme}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2.5 cursor-pointer rounded-sm transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356AE6] ${
                      idx === activeIndex
                        ? 'w-7 bg-[#356AE6]'
                        : 'w-2.5 bg-[#172B4D]/20 hover:bg-[#172B4D]/40'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next feedback theme"
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-[#172B4D]/15 bg-white text-[#172B4D] transition-colors hover:bg-[#EAF2FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356AE6]"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>

              <span className="ml-2 text-xs font-medium text-[#657184] tabular-nums">
                {activeIndex + 1} / {items.length}
              </span>
            </div>

            {googleListing.reviewsUrl ? (
              <a
                href={googleListing.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#172B4D]/20 bg-white px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-[#172B4D] transition-colors hover:border-[#356AE6] hover:text-[#356AE6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356AE6]"
              >
                <span>View Google Reviews</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setShowReviewsNotice((prev) => !prev)}
                className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#172B4D]/20 bg-white px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-[#172B4D] transition-colors hover:border-[#356AE6] hover:text-[#356AE6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356AE6]"
              >
                <span>View Google Reviews</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>

          {!googleListing.reviewsUrl && showReviewsNotice && (
            <div
              role="status"
              className="mt-4 flex flex-col justify-between gap-3 rounded-xl border border-[#172B4D]/15 bg-[#EAF2FF]/60 p-4 text-sm text-[#172B4D] sm:flex-row sm:items-center"
            >
              <p className="text-[#657184]">
                The direct Google Reviews URL is configurable and awaiting confirmation from the
                centre. You can locate EDUCATE Tuition Centre on Google Maps below.
              </p>
              <a
                href={googleListing.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 font-semibold whitespace-nowrap text-[#356AE6] hover:underline"
              >
                <span>Open Google Maps Listing</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
