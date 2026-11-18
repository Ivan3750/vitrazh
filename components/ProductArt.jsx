// Ілюстрація для товарів без фото (підвіконня) — пласка, світло-блакитне скло
export default function ProductArt({ className = "" }) {
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label="Підвіконня" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#e9e8e1" />
      <rect x="70" y="36" width="260" height="124" fill="#f4f4ef" stroke="#8a8a84" strokeWidth="2" />
      <rect x="82" y="48" width="112" height="100" fill="#bfe3fa" />
      <rect x="206" y="48" width="112" height="100" fill="#bfe3fa" />
      <polygon points="82,48 150,48 82,110" fill="#fff" opacity=".55" />
      <polygon points="206,48 274,48 206,110" fill="#fff" opacity=".55" />
      <rect x="36" y="160" width="328" height="24" fill="#f4f4ef" stroke="#8a8a84" strokeWidth="2" />
      <rect x="36" y="184" width="328" height="6" fill="#bdbdb5" />
      <rect x="60" y="190" width="280" height="70" fill="#d6d5cd" />
      <rect x="36" y="160" width="328" height="3" fill="#d8f422" />
    </svg>
  );
}
