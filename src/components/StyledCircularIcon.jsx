import { useState } from 'react';
import { ImageOff } from 'lucide-react';

export default function StyledCircularIcon({
  src,
  alt = '',
  background = '#14365e',
  FallbackIcon = ImageOff,
  size = 64,
  className = ''
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <span
      className={`styled-circular-icon ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: background
      }}
      aria-hidden={alt ? undefined : true}
    >
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          loading="lazy"
        />
      ) : (
        <FallbackIcon size={Math.round(size * 0.48)} strokeWidth={2.2} />
      )}
    </span>
  );
}
