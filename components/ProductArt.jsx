// Ілюстрація для товарів без фото (підвіконня) — темна, з лаймовим акцентом
export default function ProductArt({ className = "" }) {
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label="Підвіконня" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="pa-bg" cx=".5" cy="0" r="1"><stop offset="0" stopColor="#2a2a2a" /><stop offset="1" stopColor="#111" /></radialGradient>
        <linearGradient id="pa-gl" x1="0" y1="0" x2=".6" y2="1"><stop offset="0" stopColor="#3b5568" /><stop offset="1" stopColor="#0e141a" /></linearGradient>
        <linearGradient id="pa-sill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f4f4ef" /><stop offset="1" stopColor="#bdbdb5" /></linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#pa-bg)" />
      <rect x="70" y="36" width="260" height="124" fill="#d9d9d2" />
      <rect x="82" y="48" width="112" height="100" fill="url(#pa-gl)" />
      <rect x="206" y="48" width="112" height="100" fill="url(#pa-gl)" />
      <polygon points="82,48 150,48 82,110" fill="#fff" opacity=".18" />
      <polygon points="206,48 274,48 206,110" fill="#fff" opacity=".18" />
      <rect x="36" y="160" width="328" height="24" fill="url(#pa-sill)" />
      <rect x="36" y="184" width="328" height="6" fill="#8a8a84" />
      <rect x="60" y="190" width="280" height="70" fill="#1b1b1b" />
      <rect x="36" y="160" width="328" height="3" fill="#d8f422" />
    </svg>
  );
}
