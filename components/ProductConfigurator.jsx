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
      <span className="text-muted">{label} <span className="text-xs">({min}–{max} мм)</span></span>
      <input type="number" inputMode="numeric" className="field mt-1" min={min} max={max} value={val} onChange={(e) => set(e.target.value === "" ? "" : +e.target.value)} onBlur={(e) => set(clamp(e.target.value, min, max))} />
    </label>
  );

  return (
    <div className="grid gap-6 md:grid-cols-[220px_1fr]">
      <div className="hidden md:block">
        <div className="relative aspect-square bg-soft">
          {product.image ? <Image src={product.image} alt={product.title} fill sizes="220px" className="object-cover" /> : <ProductArt className="w-full h-full" />}
        </div>
        <p className="text-sm text-muted mt-3 leading-relaxed">{product.description}</p>
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
            <legend className="text-sm font-semibold text-navy mb-2">{o.label}: <span className="font-normal text-muted">{label(o)}</span></legend>
            <div className="flex flex-wrap gap-2">
              {o.choices.map((c) => {
                const active = choices[o.id] === c.id;
                const visual = c.swatch || c.image;
                return (
                  <button key={c.id} type="button" onClick={() => setChoices((s) => ({ ...s, [o.id]: c.id }))} aria-pressed={active} title={c.label}
                    className={`border-2 transition-all ${active ? "border-brand shadow-[3px_3px_0_var(--color-lime)]" : "border-line hover:border-navy"} ${visual ? "p-1" : "px-3 py-2 text-sm font-medium"}`}>
                    {c.swatch && <span className="block w-8 h-8 border border-line" style={{ background: c.swatch }} />}
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
            <input type="checkbox" className="accent-[#0878c0] w-4 h-4" checked={extras.includes(e.id)} onChange={() => setExtras((a) => (a.includes(e.id) ? a.filter((x) => x !== e.id) : [...a, e.id]))} />
            {e.label} <span className="text-muted">+{fmt(e.price)}</span>
          </label>
        ))}

        <div className="flex flex-wrap items-center justify-between gap-4 border-t-2 border-navy pt-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted">Ціна за 1 шт.</p>
            <p className="text-3xl font-extrabold text-navy">{fmt(calc.unit)}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center border-2 border-line">
              <button type="button" className="w-10 h-11 grid place-items-center hover:bg-soft" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Менше"><Icon name="minus" size={16} /></button>
              <span className="w-8 text-center font-bold">{qty}</span>
              <button type="button" className="w-10 h-11 grid place-items-center hover:bg-soft" onClick={() => setQty((q) => Math.min(99, q + 1))} aria-label="Більше"><Icon name="plus" size={16} /></button>
            </div>
            <button type="button" className="btn btn-accent" onClick={addToCart}><Icon name="cart" size={18} /> В кошик</button>
          </div>
        </div>
      </div>
    </div>
  );
}
