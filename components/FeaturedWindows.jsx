"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { buildCatalog, getConfig } from "@/lib/catalog";
import { fmt } from "@/lib/pricing";
import { useCart } from "./CartProvider";
import WindowDiagram from "./WindowDiagram";
import Reveal from "./Reveal";
import Icon from "./Icon";

// Кілька популярних позицій для головної: різні профілі та конфігурації
const PICKS = [
  "lider-58-2tt-1300x1400-g2-white",
  "76-ad-1t-800x1300-g2-white",
  "ideal-4000-2tt-1300x1400-g2e-white",
  "neo-76-ad-2ft-1100x1300-g2e-white",
];

export default function FeaturedWindows() {
  const { add } = useCart();
  const [added, setAdded] = useState(null);
  const items = useMemo(() => {
    const all = buildCatalog();
    return PICKS.map((id) => all.find((i) => i.id === id)).filter(Boolean);
  }, []);

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((i, idx) => {
        const cfg = getConfig(i.config);
        return (
          <Reveal as="li" key={i.id} delay={idx * 90} className="card flex flex-col bg-white">
            <div className="bg-[linear-gradient(135deg,#eef3f6_0%,#f8f8f0_100%)] h-44 grid place-items-center p-5 relative overflow-hidden">
              <span className="absolute -left-6 -bottom-6 w-24 h-24 bg-accent/30 shard-c" aria-hidden="true" />
              <WindowDiagram cols={cfg.cols} width={i.width} height={i.height} maxW={170} maxH={130} className="relative" />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <p className="eyebrow">{i.profileName}</p>
              <h3 className="mt-2 font-bold text-navy leading-snug">{i.configLabel} {i.width}×{i.height}</h3>
              <p className="text-sm text-muted mt-1">{i.glassLabel}</p>
              <p className="mt-3 text-2xl font-extrabold text-navy">{fmt(i.price)}</p>
              <button
                className={`btn btn-sm mt-3 ${added === i.id ? "btn-lime" : "btn-accent"}`}
                onClick={() => {
                  add({ key: i.id, kind: "window", title: `Вікно ${i.profileName} ${i.width}×${i.height} мм`, details: [i.configLabel, i.glassLabel, `Колір: ${i.colorLabel}`], unitPrice: i.price, meta: { cols: cfg.cols, width: i.width, height: i.height } });
                  setAdded(i.id); setTimeout(() => setAdded(null), 1200);
                }}
              >
                {added === i.id ? <><Icon name="check" size={16} /> Додано</> : <><Icon name="cart" size={16} /> В кошик</>}
              </button>
            </div>
          </Reveal>
        );
      })}
    </ul>
  );
}
