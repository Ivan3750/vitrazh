"use client";
import { useMemo, useState } from "react";
import { buildCatalog, getConfig } from "@/lib/catalog";
import { fmt } from "@/lib/pricing";
import { useCart } from "./CartProvider";
import WindowDiagram from "./WindowDiagram";
import Reveal from "./Reveal";
import Icon from "./Icon";

const PICKS = [
  "lider-58-2tt-1300x1400-g2-white",
  "76-ad-1t-800x1300-g2-white",
  "ideal-4000-2tt-1300x1400-g2e-white",
  "neo-76-ad-2ft-1100x1300-g2e-white",
];
const TINTS = ["tint-brand", "tint-accent", "tint-lime", "tint-soft"];

export default function FeaturedWindows() {
  const { add } = useCart();
  const [added, setAdded] = useState(null);
  const items = useMemo(() => {
    const all = buildCatalog();
    return PICKS.map((id) => all.find((i) => i.id === id)).filter(Boolean);
  }, []);

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((i, idx) => {
        const cfg = getConfig(i.config);
        return (
          <Reveal as="li" key={i.id} delay={idx * 80} className="card flex flex-col">
            <div className={`${TINTS[idx]} h-48 grid place-items-center p-6`}>
              <WindowDiagram cols={cfg.cols} width={i.width} height={i.height} maxW={170} maxH={130} />
            </div>
            <div className="p-6 flex-1 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="small !text-text-3">{i.profileName}</p>
                <h3 className="h3 !text-base">{i.configLabel} {i.width}×{i.height}</h3>
                <p className="small">{i.glassLabel}</p>
              </div>
              <p className="mt-auto text-2xl font-bold tracking-tight">{fmt(i.price)}</p>
              <button
                className={`btn btn-sm btn-block ${added === i.id ? "btn-dark" : "btn-primary"}`}
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
