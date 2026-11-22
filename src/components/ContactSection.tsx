import { MapPin, Navigation, Phone } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';
import { EnquiryForm } from './EnquiryForm';

export function ContactSection() {
  const { contactSection, businessName, location, phone, googleListing } = businessConfig;

  return (
    <section id="contact" className="bg-[#FFF9EF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#356AE6]">Contact &amp; Visit</p>
          <h2 className="mt-2 font-display text-3xl leading-tight font-bold tracking-tight text-balance text-[#172B4D] sm:text-4xl">
            {contactSection.heading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#657184]">
            {contactSection.description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Centre Information, Actions & Map Embed */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-[#172B4D]/10 bg-white p-7 sm:p-8">
              <h3 className="font-display text-xl font-bold text-[#172B4D]">
                {businessName}
              </h3>
              {businessConfig.isWomenOwned && (
                <p className="mt-1 text-xs font-medium text-[#657184]">
                  {businessConfig.womenOwnedNote}
                </p>
              )}

              <div className="mt-6 space-y-5 border-t border-[#172B4D]/10 pt-6">
                <div className="flex items-start gap-3.5">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#356AE6]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-semibold text-[#657184]">Address</p>
                    <address className="mt-1 text-sm leading-relaxed text-[#172B4D] not-italic">
                      {location.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#356AE6]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-semibold text-[#657184]">Phone</p>
                    <a
                      href={phone.telHref}
                      className="mt-1 inline-block text-base font-bold text-[#172B4D] tabular-nums transition-colors hover:text-[#356AE6]"
                    >
                      {phone.display}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={phone.telHref}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#356AE6] px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-[#2856C7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356AE6]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>Call Now</span>
                </a>

                <a
                  href={googleListing.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#172B4D]/20 bg-white px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-[#172B4D] transition-colors hover:bg-[#EAF2FF]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356AE6]"
                >
                  <Navigation className="h-4 w-4 text-[#356AE6]" aria-hidden="true" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Map Embed Area */}
            <div className="overflow-hidden rounded-2xl border border-[#172B4D]/10 bg-white">
              <div className="relative aspect-[16/10] w-full bg-[#EAF2FF]/50">
                <iframe
                  title="Map showing EDUCATE Tuition Centre in Rajajinagar, Bengaluru"
                  src={googleListing.embedMapUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-[#172B4D]/10 px-5 py-3 text-xs text-[#657184]">
                <span>Dr Rajkumar Road, Rajajinagar</span>
                <a
                  href={googleListing.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#356AE6] hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="rounded-2xl border border-[#172B4D]/10 bg-white p-7 shadow-[0_12px_32px_-20px_rgba(23,43,77,0.16)] sm:p-9 lg:col-span-7">
            <div className="border-b border-[#172B4D]/10 pb-5">
              <h3 className="font-display text-xl font-bold text-[#172B4D]">
                Send an Enquiry
              </h3>
              <p className="mt-1.5 text-sm text-[#657184]">
                Fill in the details below for Classes 8, 9 or 10 (Karnataka State Board or CBSE).
              </p>
            </div>

            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
