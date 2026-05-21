import React, { useState } from "react";

const FALLBACK =
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop&q=80";

export default function SafeImage({ src, alt, className = "", ...props }) {
  const [url, setUrl] = useState(src || FALLBACK);

  return (
    <img
      src={url}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setUrl(FALLBACK)}
      className={className}
      {...props}
    />
  );
}
