"use client";
import { useState } from "react";
import Link from "next/link";
import { getProfile, itemPrice, specOf, PROFILE_TAGS, GLASS_SHORT } from "@/lib/catalog";
import { COLORS, fmt } from "@/lib/pricing";
import { useCart } from "./CartProvider";
import WindowDiagram from "./WindowDiagram";
import Icon from "./Icon";

const GLASS_CHOICES = ["g1", "g2", "g2e"];
const TAG_BY_PROFILE = PROFILE_TAGS;

export function cartItemFor(item, glass, color, hardware = "axor") {
  const glassLabel = { g1: "Однокамерний 24 мм", g2: "Двокамерний 32 мм", g2e: "Двокамерний енергозберігаючий 40 мм", g2n: "Двокамерний шумозахисний" }[glass];
  const colorLabel = COLORS.find((c) => c.id === color)?.label;
  return {
    key: `${item.id}|${glass}|${color}|${hardware}`,
    kind: "window",
    title: `Вікно ${item.profileName} ${item.width}×${item.height} мм`,
    details: [item.configLabel, glassLabel, `Колір: ${colorLabel}`],
    unitPrice: itemPrice(item, glass, color, hardware),
    meta: { cols: item.cols, width: item.width, height: item.height, color },
  };
}

export default function WindowCard({ item, onQuick, initialGlass = "g2", initialColor = "white" }) {
  const { add } = useCart();
  const [glass, setGlass] = useState(initialGlass);
  const [color, setColor] = useState(initialColor);
  const [added, setAdded] = useState(false);
  const profile = getProfile(item.profile);
  const tag = TAG_BY_PROFILE[item.profile];
  const price = itemPrice(item, glass, color);
  const choices = item.profile === "lider-58" ? ["g1", "g2"] : GLASS_CHOICES;

  return (
    <article className="card flex flex-col h-full group">
      <div className="relative panel h-60 grid place-items-center p-5 overflow-hidden" data-tilt-host>
        {tag && <span className="badge absolute left-4 top-4 z-10">{tag.tag}</span>}
        <button type="button" onClick={() => onQuick?.(item, glass, color)} className="relative z-10 transition-transform duration-500 group-hover:scale-105" aria-label={`Швидкий перегляд: ${item.configLabel} ${item.width}×${item.height}`}>
          <WindowDiagram cols={item.cols} width={item.width} height={item.height} color={color} maxW={230} maxH={180} />
        </button>
        <span className="absolute right-4 top-4 z-10 small !text-text-3 num">{item.width}×{item.height}</span>
      </div>

      <div className="p-6 flex-1 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Link href={`/catalog/${item.profile}/`} className="small !text-text-3 hover:!text-accent-fg transition-colors py-1.5 -my-1.5 self-start">{item.profileName}</Link>
          <h3 className="h3 !text-base">{item.configLabel} вікно</h3>
        </div>

        <ul className="flex flex-wrap gap-1.5 text-xs">
          {[specOf(profile, "Монтажна глибина"), `${specOf(profile, "Кількість камер")} камер`, `Uf ${specOf(profile, "Коефіцієнт теплопередачі")?.replace(" Вт/м²K", "")}`].filter(Boolean).map((t) => (
            <li key={t} className="px-2 py-1 border border-line text-text-2">{t}</li>
          ))}
        </ul>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex gap-1" role="radiogroup" aria-label="Колір">
              {COLORS.map((c) => (
                <button key={c.id} type="button" role="radio" aria-checked={color === c.id} aria-label={c.label} title={c.label} onClick={() => setColor(c.id)}
                  className={`w-8 h-8 border transition-all ${color === c.id ? "border-sel ring-2 ring-sel/40 scale-110" : "border-line-2 hover:border-ink"}`} style={{ background: c.swatch }} />
              ))}
            </div>
            <span className="small !text-text-3">{COLORS.find((c) => c.id === color)?.label}</span>
          </div>
          <div className="grid gap-px bg-line border border-line" style={{ gridTemplateColumns: `repeat(${choices.length}, 1fr)` }} role="radiogroup" aria-label="Склопакет">
            {choices.map((g) => (
              <button key={g} type="button" role="radio" aria-checked={glass === g} onClick={() => setGlass(g)}
                className={`h-9 text-[11px] font-semibold transition-colors ${glass === g ? "bg-accent text-on-accent" : "bg-surface text-text-2 hover:text-ink"}`}>{GLASS_SHORT[g]}</button>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-2 flex flex-col gap-3">
          <p className="text-2xl font-bold tracking-tight num">{fmt(price)}</p>
          <div className="grid grid-cols-[1fr_auto] gap-2">
            <button className={`btn btn-sm ${added ? "btn-dark" : "btn-primary"}`} onClick={() => { add(cartItemFor(item, glass, color)); setAdded(true); setTimeout(() => setAdded(false), 1200); }}>
              {added ? <><Icon name="check" size={16} /> Додано</> : <><Icon name="cart" size={16} /> В кошик</>}
            </button>
            <button className="btn btn-outline btn-sm btn-icon" onClick={() => onQuick?.(item, glass, color)} aria-label="Швидкий перегляд" title="Швидкий перегляд"><Icon name="search" size={16} /></button>
          </div>
        </div>
      </div>
    </article>
  );
}
