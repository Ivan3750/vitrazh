// Ілюстрація для товарів без фото (підвіконня) — у кольорах логотипа
export default function ProductArt({ kind = "sill", className = "" }) {
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label="Підвіконня" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#e9eef1" />
      <polygon points="0,0 170,0 120,300 0,300" fill="#0878c0" opacity=".14" />
      <polygon points="260,0 400,0 400,200 300,300" fill="#f37a3a" opacity=".16" />
      <polygon points="330,300 400,230 400,300" fill="#b8d030" opacity=".5" />
      <rect x="70" y="40" width="260" height="120" fill="#cfe6f5" stroke="#8da2b5" strokeWidth="6" />
      <line x1="200" y1="40" x2="200" y2="160" stroke="#8da2b5" strokeWidth="6" />
      <rect x="40" y="160" width="320" height="22" fill="#fff" stroke="#b7c3cc" strokeWidth="2" />
      <rect x="40" y="182" width="320" height="8" fill="#c9d3da" />
      <rect x="54" y="190" width="292" height="60" fill="#dde4e8" />
    </svg>
  );
}
