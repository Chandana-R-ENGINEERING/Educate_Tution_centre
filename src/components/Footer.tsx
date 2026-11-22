import { ExternalLink, MapPin, Phone } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

export function Footer() {
  const { businessName, brandMark, navigation, classes, phone, location, googleListing } =
    businessConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#172B4D] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Summary */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-flex flex-col leading-none">
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                {brandMark.primary}
              </span>
              <span className="mt-1 font-display text-[10px] font-semibold tracking-[0.18em] text-[#E9B96E]">
                {brandMark.secondary}
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
              A women-owned tuition centre in Rajajinagar, Bengaluru supporting students in
              Classes 8, 9 and 10 with patient guidance and individual attention.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold text-white">Navigation</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-[#E9B96E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9B96E]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes Offered */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold text-white">Classes Offered</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              {classes.items.map((program) => (
                <li key={program.level}>
                  <a
                    href="#classes"
                    className="transition-colors hover:text-[#E9B96E]"
                  >
                    {program.title} · Karnataka State &amp; CBSE
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold text-white">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-white/75">
              <a
                href={phone.telHref}
                className="flex items-center gap-2.5 font-semibold text-white transition-colors hover:text-[#E9B96E]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#E9B96E]" aria-hidden="true" />
                <span className="tabular-nums">{phone.display}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E9B96E]" aria-hidden="true" />
                <address className="leading-relaxed not-italic">
                  {location.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <a
                href={googleListing.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 pt-1 font-medium text-[#E9B96E] transition-colors hover:text-white"
              >
                <span>Google Maps Directions</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>
            © {currentYear} {businessName}. All rights reserved.
          </p>
          <p>{location.shortArea}</p>
        </div>
      </div>
    </footer>
  );
}
