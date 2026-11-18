"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { unitCalc } from "@/lib/shop";
import { fmt } from "@/lib/pricing";
import { useCart } from "./CartProvider";
import ProductArt from "./ProductArt";
import Icon from "./Icon";

const clamp = (v, a, b) => Math.min(b, Math.max(a, Math.round(+v || a)));

export default function ProductConfigurator({ product, onAdded }) {
  const pr = product.pricing;
  const { add } = useCart();
  const [w, setW] = useState(pr.defaultW ?? 0);
  const [h, setH] = useState(pr.defaultH ?? 0);
  const [length, setLength] = useState(pr.defaultLength ?? 0);
  const [choices, setChoices] = useState(() => Object.fromEntries((product.options ?? []).map((o) => [o.id, o.choices[0].id])));
  const [extras, setExtras] = useState([]);
  const [qty, setQty] = useState(1);

  const calc = useMemo(() => unitCalc(product, { w: +w, h: +h, length: +length, choices, extras }), [product, w, h, length, choices, extras]);

  const label = (o) => o.choices.find((c) => c.id === choices[o.id])?.label;
  const details = [
    ...(pr.type === "area" ? [`Розмір: ${w}×${h} мм`] : pr.type === "length" ? [`Довжина: ${length} мм`] : []),
    ...(product.options ?? []).map((o) => `${o.label}: ${label(o)}`),
    ...(product.extras ?? []).filter((e) => extras.includes(e.id)).map((e) => e.label),
  ];
  const key = [product.id, w, h, length, JSON.stringify(choices), extras.join(",")].join("|");

  function addToCart() {
    add({ key, kind: product.category, title: product.title, details, image: product.image, unitPrice: Math.round(calc.unit), meta: { product: product.id } }, qty);
    onAdded?.();
  }

  const num = (label, val, set, min, max) => (
    <label className="block text-sm">
      <span className="text-text-2">{label} <span className="text-xs">({min}–{max} мм)</span></span>
      <input type="number" inputMode="numeric" className="field mt-1" min={min} max={max} value={val} onChange={(e) => set(e.target.value === "" ? "" : +e.target.value)} onBlur={(e) => set(clamp(e.target.value, min, max))} />
    </label>
  );

  return (
    <div className="grid gap-8 md:grid-cols-[240px_1fr]">
      <div className="hidden md:block">
        <div className="relative aspect-square bg-soft">
          {product.image ? <Image src={product.image} alt={product.title} fill sizes="220px" className="object-cover" /> : <ProductArt className="w-full h-full" />}
        </div>
        <p className="text-sm text-text-2 mt-4 leading-relaxed">{product.description}</p>
        {product.features && <ul className="mt-4 flex flex-col gap-2 text-sm">{product.features.map((f) => <li key={f} className="flex gap-2"><Icon name="check" size={16} className="text-accent-fg shrink-0 mt-0.5" />{f}</li>)}</ul>}
      </div>
      <div className="space-y-5">
        {pr.type === "area" && (
          <div className="grid grid-cols-2 gap-3">
            {num("Ширина", w, setW, pr.minW, pr.maxW)}
            {num("Висота", h, setH, pr.minH, pr.maxH)}
          </div>
        )}
        {pr.type === "length" && <div>{num("Довжина", length, setLength, pr.minLength, pr.maxLength)}</div>}

        {(product.options ?? []).map((o) => (
          <fieldset key={o.id}>
            <legend className="text-sm font-semibold text-ink mb-2">{o.label}: <span className="font-normal text-text-2">{label(o)}</span></legend>
            <div className="flex flex-wrap gap-2">
              {o.choices.map((c) => {
                const active = choices[o.id] === c.id;
                const visual = c.swatch || c.image;
                return (
                  <button key={c.id} type="button" onClick={() => setChoices((s) => ({ ...s, [o.id]: c.id }))} aria-pressed={active} title={c.label}
                    className={`transition-all ${active ? "ring-2 ring-sel" : "bg-surface-2 hover:ring-2 hover:ring-ink/30"} ${visual ? "p-1" : "px-3 py-2 text-sm font-medium"}`}>
                    {c.swatch && <span className="block w-8 h-8" style={{ background: c.swatch }} />}
                    {c.image && <Image src={c.image} alt={c.label} width={36} height={36} className="block w-9 h-9 object-cover" />}
                    {!visual && c.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}

        {(product.extras ?? []).map((e) => (
          <label key={e.id} className="flex items-center gap-3 text-sm cursor-pointer">
            <input type="checkbox" className="accent-accent w-4 h-4" checked={extras.includes(e.id)} onChange={() => setExtras((a) => (a.includes(e.id) ? a.filter((x) => x !== e.id) : [...a, e.id]))} />
            {e.label} <span className="text-text-2">+{fmt(e.price)}</span>
          </label>
        ))}

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <div>
            <p className="text-xs text-text-2">Ціна за 1 шт.</p>
            <p className="text-3xl font-bold text-ink">{fmt(calc.unit)}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-surface-2">
              <button type="button" className="w-10 h-11 grid place-items-center hover:bg-soft" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Менше"><Icon name="minus" size={16} /></button>
              <span className="w-8 text-center font-bold">{qty}</span>
              <button type="button" className="w-10 h-11 grid place-items-center hover:bg-soft" onClick={() => setQty((q) => Math.min(99, q + 1))} aria-label="Більше"><Icon name="plus" size={16} /></button>
            </div>
            <button type="button" className="btn btn-primary" onClick={addToCart}><Icon name="bag" size={18} /> В кошик</button>
          </div>
        </div>
      </div>
    </div>
  );
}
