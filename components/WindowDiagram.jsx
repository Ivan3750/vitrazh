const FRAMES = {
  white: { a: "#f7f7f3", b: "#e6e6e0", edge: "#8a8a84" },
  anthracite: { a: "#454b51", b: "#383e43", edge: "#16181a" },
  brown: { a: "#6b4632", b: "#573828", edge: "#2a1a10" },
  "golden-oak": { a: "#cf9a55", b: "#b9843f", edge: "#6e4614" },
};

/**
 * Креслення-візуалізація вікна. Пропорції відповідають розмірам, колір рами — вибраному кольору.
 * cols: "F" — глуха стулка, "T" — поворотно-відкидна. dims — показати розміри.
 */
export default function WindowDiagram({ cols = ["T"], width = 1000, height = 1300, color = "white", dims = false, className = "", maxW = 220, maxH = 220 }) {
    const f = FRAMES[color] ?? FRAMES.white;
  const ratio = width / height;
  let vw = 100;
  let vh = 100 / ratio;
  if (vh > 100) { vh = 100; vw = 100 * ratio; }
  const pad = dims ? 9 : 2;
  const frame = Math.max(4, Math.min(vw, vh) * 0.075);
  const n = cols.length;
  const innerW = vw - frame * 2;
  const innerH = vh - frame * 2;
  const colW = innerW / n;
  const mull = 2.2; // імпост
  const sash = Math.max(2.4, frame * 0.55);
  return (
    <svg viewBox={`${-pad} ${-pad} ${vw + pad * 2} ${vh + pad * 2}`} className={className} style={{ maxWidth: maxW, maxHeight: maxH, width: "100%", height: "auto" }} role="img" aria-label={`Вікно ${width}×${height} мм`}>
      {/* зовнішня рама */}
      <rect x="0" y="0" width={vw} height={vh} fill={f.a} stroke={f.edge} strokeWidth=".6" />
      <rect x={frame * 0.32} y={frame * 0.32} width={vw - frame * 0.64} height={vh - frame * 0.64} fill="none" stroke={f.edge} strokeOpacity=".35" strokeWidth=".35" />
      {cols.map((c, i) => {
        const x = frame + i * colW + (i > 0 ? mull / 2 : 0);
        const w = colW - (i > 0 ? mull / 2 : 0) - (i < n - 1 ? mull / 2 : 0);
        const y = frame;
        const h = innerH;
        const left = i < n / 2;
        const open = c === "T";
        const gx = x + (open ? sash : 1.6);
        const gy = y + (open ? sash : 1.6);
        const gw = w - (open ? sash * 2 : 3.2);
        const gh = h - (open ? sash * 2 : 3.2);
        return (
          <g key={i}>
            {open && <rect x={x} y={y} width={w} height={h} fill={f.b} stroke={f.edge} strokeWidth=".5" />}
            <rect x={gx} y={gy} width={gw} height={gh} fill="#bfe3fa" stroke={f.edge} strokeOpacity=".7" strokeWidth=".4" />
            <polygon points={`${gx},${gy} ${gx + gw * 0.55},${gy} ${gx},${gy + gh * 0.5}`} fill="#fff" opacity=".6" />
            <polygon points={`${gx + gw},${gy + gh} ${gx + gw * 0.55},${gy + gh} ${gx + gw},${gy + gh * 0.62}`} fill="#7fc0ec" opacity=".35" />
            {open && (
              <>
                <polyline points={left ? `${gx + gw},${gy + gh / 2} ${gx},${gy} ${gx},${gy + gh} ${gx + gw},${gy + gh / 2}` : `${gx},${gy + gh / 2} ${gx + gw},${gy} ${gx + gw},${gy + gh} ${gx},${gy + gh / 2}`} fill="none" stroke="#0a0a0a" strokeOpacity=".75" strokeWidth=".55" strokeDasharray="2.2 1.8" />
                <polyline points={`${gx},${gy + gh} ${gx + gw / 2},${gy} ${gx + gw},${gy + gh}`} fill="none" stroke="#0a0a0a" strokeOpacity=".4" strokeWidth=".5" strokeDasharray="2.2 1.8" />
                <rect x={left ? x + w - sash * 0.78 : x + sash * 0.1} y={y + h / 2 - 3.2} width={sash * 0.68} height="6.4" fill="#d9d9d2" stroke="#555" strokeWidth=".25" />
              </>
            )}
          </g>
        );
      })}
      {dims && (
        <g fill="currentColor" fillOpacity=".6" stroke="currentColor" strokeOpacity=".4" strokeWidth=".35" fontSize="4.2" fontFamily="system-ui">
          <line x1="0" y1={vh + 4} x2={vw} y2={vh + 4} />
          <line x1="0" y1={vh + 2.4} x2="0" y2={vh + 5.6} /><line x1={vw} y1={vh + 2.4} x2={vw} y2={vh + 5.6} />
          <text x={vw / 2} y={vh + 8.4} textAnchor="middle" stroke="none">{width}</text>
          <line x1={vw + 4} y1="0" x2={vw + 4} y2={vh} />
          <line x1={vw + 2.4} y1="0" x2={vw + 5.6} y2="0" /><line x1={vw + 2.4} y1={vh} x2={vw + 5.6} y2={vh} />
          <text x={vw + 8.2} y={vh / 2} textAnchor="middle" stroke="none" transform={`rotate(90 ${vw + 8.2} ${vh / 2})`}>{height}</text>
        </g>
      )}
    </svg>
  );
}
