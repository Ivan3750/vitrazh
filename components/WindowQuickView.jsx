"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProfile, itemPrice, specOf, PROFILE_TAGS } from "@/lib/catalog";
import { COLORS, GLASS, HARDWARE, fmt } from "@/lib/pricing";
import { useCart } from "./CartProvider";
import { cartItemFor } from "./WindowCard";
import WindowDiagram from "./WindowDiagram";
import Icon from "./Icon";

const Seg = ({ label, children }) => (
  <fieldset className="flex flex-col gap-2"><legend className="small !text-text-3 mb-2">{label}</legend>{children}</fieldset>
);

export default function WindowQuickView({ item, initialGlass = "g2", initialColor = "white", onDone }) {
  const { add } = useCart();
  const [glass, setGlass] = useState(initialGlass);
  const [color, setColor] = useState(initialColor);
  const [hardware, setHardware] = useState("axor");
  const [qty, setQty] = useState(1);
  const profile = getProfile(item.profile);
  const tag = PROFILE_TAGS[item.profile];
  const price = itemPrice(item, glass, color, hardware);
  const rows = [
    ["Профільна система", profile.name],
    ["Монтажна глибина", specOf(profile, "Монтажна глибина")],
    ["Камер (рама / стулка)", specOf(profile, "Кількість камер")],
    ["Теплопередача Uf", specOf(profile, "Коефіцієнт теплопередачі")],
    ["Захист від злому", specOf(profile, "Захист від злому")],
    ["Макс. склопакет", specOf(profile, "Максимальна товщина")],
  ].filter((r) => r[1]);

  return (
    <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
      <div className="flex flex-col gap-4">
        <div className="panel relative grid place-items-center p-8 min-h-[280px]">
          {tag && <span className="badge absolute left-4 top-4">{tag.tag}</span>}
          <WindowDiagram cols={item.cols} width={item.width} height={item.height} color={color} dims maxW={260} maxH={260} />
        </div>
        <dl className="divide-y divide-line text-sm">
          {rows.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 px-4 py-2.5"><dt className="text-text-2">{k}</dt><dd className="font-semibold text-right">{v}</dd></div>
          ))}
        </dl>
      </div>

      <div className="flex flex-col gap-6">
        <p className="small">{item.configLabel} вікно {item.width}×{item.height} мм. {profile.tagline}</p>
        <Seg label="Склопакет">
          <div className="grid gap-px bg-line">
            {GLASS.filter((g) => item.profile !== "lider-58" || g.id === "g1" || g.id === "g2").map((g) => (
              <button key={g.id} type="button" onClick={() => setGlass(g.id)} aria-pressed={glass === g.id} className={`flex justify-between px-4 h-11 items-center text-sm font-medium text-left transition-colors ${glass === g.id ? "bg-accent text-on-accent" : "bg-surface text-text-2 hover:text-ink"}`}>
                {g.label}{g.addM2 ? <span className="text-xs opacity-70">+{g.addM2} грн/м²</span> : null}
              </button>
            ))}
          </div>
        </Seg>
        <Seg label="Колір профілю">
          <div className="flex flex-wrap gap-2">
            {COLORS.map((c) => (
              <button key={c.id} type="button" onClick={() => setColor(c.id)} aria-pressed={color === c.id} className={`h-10 px-3 flex items-center gap-2 text-sm font-medium transition-all ${color === c.id ? "ring-2 ring-sel bg-accent/15 text-ink" : "bg-surface-2 text-text-2 hover:text-ink"}`}>
                <span className="w-4 h-4" style={{ background: c.swatch }} />{c.label}
              </button>
            ))}
          </div>
        </Seg>
        <Seg label="Фурнітура">
          <select className="field" value={hardware} onChange={(e) => setHardware(e.target.value)} aria-label="Фурнітура">
            {HARDWARE.map((h) => <option key={h.id} value={h.id}>{h.label}</option>)}
          </select>
        </Seg>

        <div className="mt-auto flex flex-col gap-4 border-t border-line pt-6">
          <div className="flex items-end justify-between gap-4">
            <div><p className="small !text-text-3">Орієнтовна ціна</p><p className="text-3xl font-bold tracking-tight num">{fmt(price * qty)}</p></div>
            <div className="flex items-center">
              <button type="button" className="w-10 h-11 grid place-items-center hover:bg-surface-2" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Менше"><Icon name="minus" size={16} /></button>
              <span className="w-8 text-center font-bold num">{qty}</span>
              <button type="button" className="w-10 h-11 grid place-items-center hover:bg-surface-2" onClick={() => setQty((q) => Math.min(99, q + 1))} aria-label="Більше"><Icon name="plus" size={16} /></button>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <button className="btn btn-primary" onClick={() => { add(cartItemFor(item, glass, color, hardware), qty); onDone?.(); }}><Icon name="bag" size={18} /> Додати в кошик</button>
            <Link className="btn btn-outline" href={`/calc/?profile=${item.profile}&config=${item.config}&w=${item.width}&h=${item.height}&glass=${glass}&color=${color}`}><Icon name="calc" size={18} /> Змінити розмір</Link>
          </div>
          <Link href={`/catalog/${item.profile}/`} className="small link-u self-start hover:!text-accent-fg">Докладніше про {profile.name} →</Link>
        </div>
      </div>
    </div>
  );
}
