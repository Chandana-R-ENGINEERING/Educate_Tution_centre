import { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'eager' | 'lazy';
  fallbackTitle?: string;
}

export function ResponsiveImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  loading = 'lazy',
  fallbackTitle = 'EDUCATE Tuition Centre',
}: ResponsiveImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EAF2FF] via-[#FFF9EF] to-[#EAF2FF] p-8 text-center ${containerClassName}`}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-[#172B4D]/10 bg-white text-[#356AE6] shadow-sm">
          <BookOpen className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="font-display text-sm font-semibold text-[#172B4D]">{fallbackTitle}</p>
        <p className="mt-1 max-w-xs text-xs text-[#657184]">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-[#EAF2FF]/40 ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={loading === 'eager' ? 'sync' : 'async'}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover ${className}`}
      />
    </div>
  );
}
