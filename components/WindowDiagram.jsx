// Схематичне зображення вікна за конфігурацією. Пропорції відповідають розмірам.
export default function WindowDiagram({ cols = ["T"], width = 1000, height = 1300, className = "", maxW = 220, maxH = 220 }) {
  const ratio = width / height;
  let vw = 100;
  let vh = 100 / ratio;
  if (vh > 100) { vh = 100; vw = 100 * ratio; }
  const frame = Math.max(3.5, Math.min(vw, vh) * 0.07);
  const n = cols.length;
  const innerW = vw - frame * 2;
  const innerH = vh - frame * 2;
  const colW = innerW / n;
  const gap = 1.4;
  return (
    <svg viewBox={`-2 -2 ${vw + 4} ${vh + 4}`} className={className} style={{ maxWidth: maxW, maxHeight: maxH, width: "100%", height: "auto" }} role="img" aria-label="Схема вікна">
      <rect x="0" y="0" width={vw} height={vh} rx="1.5" fill="#fff" stroke="#8da2b5" strokeWidth="1.2" />
      {cols.map((c, i) => {
        const x = frame + i * colW + (i > 0 ? gap / 2 : 0);
        const w = colW - (i > 0 ? gap / 2 : 0) - (i < n - 1 ? gap / 2 : 0);
        const y = frame;
        const h = innerH;
        const left = i < n / 2; // ручка ближче до центру
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height={h} fill="#d9ecf8" stroke="#8da2b5" strokeWidth="0.8" />
            <rect x={x + 3} y={y + 3} width={w - 6} height={h - 6} fill="#eaf5fc" stroke="#b7cbdb" strokeWidth="0.5" />
            {c === "T" && (
              <>
                {/* позначка відкривання: поворот (бік петель) + відкидання */}
                <polyline
                  points={left ? `${x + w - 3},${y + h / 2} ${x + 3},${y + 3} ${x + 3},${y + h - 3} ${x + w - 3},${y + h / 2}` : `${x + 3},${y + h / 2} ${x + w - 3},${y + 3} ${x + w - 3},${y + h - 3} ${x + 3},${y + h / 2}`}
                  fill="none" stroke="#1d7cc4" strokeWidth="0.7" strokeDasharray="2 1.6"
                />
                <polyline points={`${x + 3},${y + h - 3} ${x + w / 2},${y + 3} ${x + w - 3},${y + h - 3}`} fill="none" stroke="#f26b2a" strokeWidth="0.7" strokeDasharray="2 1.6" />
                <rect x={left ? x + w - 3.2 : x + 1.4} y={y + h / 2 - 3} width="1.8" height="6" rx=".8" fill="#5d6b79" />
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}
