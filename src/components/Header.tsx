import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

interface HeaderProps {
  onEnquireClick: () => void;
}

export function Header({ onEnquireClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Information Bar (non-sticky so mobile sticky height stays compact) */}
      <div className="border-b border-[#172B4D]/10 bg-[#172B4D] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1.5 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white/90">
            <span className="font-semibold text-white">{businessConfig.businessName}</span>
            <span aria-hidden="true" className="text-white/40">
              ·
            </span>
            <span>{businessConfig.location.shortArea}</span>
            {businessConfig.admissionsNotice.confirmed && (
              <>
                <span aria-hidden="true" className="text-white/40">
                  ·
                </span>
                <span className="font-medium text-[#E9B96E]">
                  {businessConfig.admissionsNotice.text}
                </span>
              </>
            )}
          </div>

          <a
            href={businessConfig.phone.telHref}
            className="inline-flex items-center gap-1.5 font-medium text-white transition-colors hover:text-[#E9B96E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9B96E]"
          >
            <Phone className="h-3.5 w-3.5 text-[#E9B96E]" aria-hidden="true" />
            <span className="tabular-nums whitespace-nowrap">{businessConfig.phone.display}</span>
          </a>
        </div>
      </div>

      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-[#172B4D]/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:gap-8 lg:px-8">
          {/* Zone 1: Brand Mark */}
          <a
            href="#home"
            className="group flex shrink-0 flex-col leading-none whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#356AE6]"
          >
            <span className="font-display text-lg font-extrabold tracking-tight text-[#172B4D] sm:text-xl">
              {businessConfig.brandMark.primary}
            </span>
            <span className="mt-0.5 font-display text-[10px] font-semibold tracking-[0.18em] text-[#356AE6]">
              {businessConfig.brandMark.secondary}
            </span>
          </a>

          {/* Zone 2: Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-5 lg:flex xl:gap-7"
          >
            {businessConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative shrink-0 py-1 text-sm font-medium whitespace-nowrap text-[#657184] transition-colors duration-150 hover:text-[#172B4D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#356AE6] after:absolute after:inset-x-0 after:bottom-0 after:h-[1.5px] after:origin-left after:scale-x-0 after:bg-[#356AE6] after:transition-transform after:duration-150 hover:after:scale-x-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={onEnquireClick}
              className="hidden shrink-0 cursor-pointer items-center justify-center rounded-lg bg-[#356AE6] px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition-colors duration-150 hover:bg-[#2856C7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356AE6] sm:inline-flex"
            >
              Enquire Now
            </button>

            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-[#172B4D]/15 text-[#172B4D] transition-colors hover:bg-[#EAF2FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356AE6] lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-[#172B4D]/10 bg-white px-4 pt-3 pb-5 shadow-lg lg:hidden"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
              {businessConfig.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavLinkClick}
                  className="flex min-h-11 items-center rounded-lg px-3 py-2 text-base font-medium text-[#172B4D] transition-colors hover:bg-[#EAF2FF]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#356AE6]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 flex flex-col gap-3 border-t border-[#172B4D]/10 pt-4">
              <a
                href={businessConfig.phone.telHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#172B4D]/20 px-4 py-2.5 text-sm font-semibold text-[#172B4D] transition-colors hover:bg-[#FFF9EF]"
              >
                <Phone className="h-4 w-4 text-[#356AE6]" aria-hidden="true" />
                <span className="tabular-nums">Call {businessConfig.phone.display}</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onEnquireClick();
                }}
                className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-lg bg-[#356AE6] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2856C7]"
              >
                Enquire Now
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
