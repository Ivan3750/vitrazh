"use client";
import { useState } from "react";
import Link from "next/link";
import { getProfile, itemPrice, specOf, PROFILE_TAGS, GLASS_SHORT } from "@/lib/catalog";
import { COLORS } from "@/lib/pricing";
import { useCart } from "./CartProvider";
import WindowDiagram from "./WindowDiagram";
import Icon from "./Icon";

const GLASS_CHOICES = ["g1", "g2", "g2e"];
const nf = (n) => new Intl.NumberFormat("uk-UA", { maximumFractionDigits: 0 }).format(n).replace(/ /g, " ");

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
  const tag = PROFILE_TAGS[item.profile];
  const price = itemPrice(item, glass, color);
  const choices = item.profile === "lider-58" ? ["g1", "g2"] : GLASS_CHOICES;
  const stats = [
    ["Глибина", specOf(profile, "Монтажна глибина")?.replace(" мм", "")],
    ["Камер", specOf(profile, "Кількість камер")?.replace(/\s/g, "")],
    ["Uf", specOf(profile, "Коефіцієнт теплопередачі")?.replace(" Вт/м²K", "").replace(" Вт/Км²", "")],
  ];

  return (
    <article className="card flex flex-col h-full group overflow-hidden">
      <div className="relative panel h-64 grid place-items-center p-6">
        {tag && <span className="badge absolute left-4 top-4 z-10">{tag.tag}</span>}
        <span className="absolute right-4 top-4 z-10 meta num !text-[.75rem]">{item.width} × {item.height}</span>
        <button type="button" onClick={() => onQuick?.(item, glass, color)} className="relative z-10 transition-transform duration-500 group-hover:scale-105" aria-label={`Швидкий перегляд: ${item.configLabel} ${item.width}×${item.height}`}>
          <WindowDiagram cols={item.cols} width={item.width} height={item.height} color={color} maxW={240} maxH={190} />
        </button>
      </div>

      <div className="p-6 flex-1 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <Link href={`/catalog/${item.profile}/`} className="meta hover:!text-ink transition-colors self-start py-1 -my-1">{item.profileName}</Link>
          <h3 className="h3">{item.configLabel} вікно</h3>
        </div>

        <dl className="grid grid-cols-3 gap-2">
          {stats.map(([k, v]) => (
            <div key={k} className="bg-surface-2 px-3 py-2.5">
              <dd className="num text-xl leading-none">{v}</dd>
              <dt className="meta !text-[.625rem] mt-1.5">{k}</dt>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex gap-2" role="radiogroup" aria-label="Колір">
              {COLORS.map((c) => (
                <button key={c.id} type="button" role="radio" aria-checked={color === c.id} aria-label={c.label} title={c.label} onClick={() => setColor(c.id)}
                  className={`w-8 h-8 transition-all shadow-[inset_0_0_0_1px_rgba(0,0,0,.18)] ${color === c.id ? "ring-2 ring-sel ring-offset-2 ring-offset-surface scale-105" : "hover:scale-110"}`} style={{ background: c.swatch }} />
              ))}
            </div>
            <span className="meta">{COLORS.find((c) => c.id === color)?.label}</span>
          </div>
          <div className="flex gap-1 bg-surface-2 p-1" role="radiogroup" aria-label="Склопакет">
            {choices.map((g) => (
              <button key={g} type="button" role="radio" aria-checked={glass === g} onClick={() => setGlass(g)}
                className={`flex-1 h-9 text-[11px] font-semibold transition-colors ${glass === g ? "bg-ink text-bg" : "text-text-2 hover:text-ink"}`}>{GLASS_SHORT[g]}</button>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <p className="num text-4xl leading-none whitespace-nowrap">{nf(price)}<span className="text-base text-text-2 ml-1.5">грн</span></p>
            <span className="meta">за конструкцію</span>
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-2">
            <button className={`btn ${added ? "btn-dark" : "btn-primary"}`} onClick={() => { add(cartItemFor(item, glass, color)); setAdded(true); setTimeout(() => setAdded(false), 1200); }}>
              {added ? <><Icon name="check" size={16} /> Додано</> : <><Icon name="bag" size={16} /> В кошик</>}
            </button>
            <button className="btn btn-outline btn-icon !w-12" onClick={() => onQuick?.(item, glass, color)} aria-label="Швидкий перегляд" title="Швидкий перегляд"><Icon name="search" size={18} /></button>
          </div>
        </div>
      </div>
    </article>
  );
}
