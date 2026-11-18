"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { CONFIGS, PVC_PROFILES, getConfig, sashesOf } from "@/lib/catalog";
import { COLORS, GLASS, HARDWARE, SERVICES, PROFILE_PRICE_M2, calcPrice, fmt } from "@/lib/pricing";
import WindowDiagram from "./WindowDiagram";
import OrderForm from "./OrderForm";
import Icon from "./Icon";
import { useCart } from "./CartProvider";

const PROFILES = PVC_PROFILES.filter((p) => p.slug in PROFILE_PRICE_M2);
const LIMITS = { min: 300, max: 3000 };

function Step({ n, title, children }) {
  return (
    <section className=" bg-surface p-6 md:p-8">
      <h2 className="h3 flex items-center gap-3">
        <span className="grid place-items-center w-8 h-8 bg-accent text-on-accent text-sm">{n}</span>{title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

const Choice = ({ active, onClick, children, className = "" }) => (
  <button type="button" onClick={onClick} aria-pressed={active} className={`text-left transition-all ${active ? "ring-2 ring-sel bg-accent/15" : "bg-surface-2 hover:bg-soft"} ${className}`}>
    {children}
  </button>
);

export default function Calculator() {
  const { add } = useCart();
  const [profile, setProfile] = useState(PROFILES[0].slug);
  const [config, setConfig] = useState("2tt");
  const [width, setWidth] = useState(1300);
  const [height, setHeight] = useState(1400);
  const [glass, setGlass] = useState("g2");
  const [color, setColor] = useState("white");
  const [hardware, setHardware] = useState("axor");
  const [services, setServices] = useState(["measure"]);
  const [qty, setQty] = useState(1);

  // Початкові значення з посилання (з каталогу)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const has = (arr, id) => arr.some((x) => (x.slug ?? x.id) === id);
    if (has(PROFILES, q.get("profile"))) setProfile(q.get("profile"));
    if (has(CONFIGS, q.get("config"))) setConfig(q.get("config"));
    if (has(GLASS, q.get("glass"))) setGlass(q.get("glass"));
    if (has(COLORS, q.get("color"))) setColor(q.get("color"));
    const w = +q.get("w"), h = +q.get("h");
    if (w >= LIMITS.min && w <= LIMITS.max) setWidth(w);
    if (h >= LIMITS.min && h <= LIMITS.max) setHeight(h);
  }, []);

  const cfg = getConfig(config);
  const sashes = sashesOf(cfg);
  const clamp = (v) => Math.min(LIMITS.max, Math.max(LIMITS.min, Math.round(+v || LIMITS.min)));
  const price = useMemo(() => calcPrice({ profile, width, height, sashes, glass, color, hardware, services }), [profile, width, height, sashes, glass, color, hardware, services]);
  const total = price.total * qty;
  const p = PROFILES.find((x) => x.slug === profile);

  const payload = {
    Профіль: p.name,
    Конфігурація: cfg.label,
    "Розмір, мм": `${width}×${height}`,
    Кількість: String(qty),
    Склопакет: GLASS.find((g) => g.id === glass).label,
    Колір: COLORS.find((c) => c.id === color).label,
    Фурнітура: HARDWARE.find((h) => h.id === hardware).label,
    Послуги: services.map((s) => SERVICES.find((x) => x.id === s)?.label).join(", ") || "—",
    "Орієнтовна сума": fmt(total),
  };

  function addToCart() {
    const details = Object.entries(payload).filter(([k]) => !["Профіль", "Кількість", "Орієнтовна сума", "Розмір, мм"].includes(k)).map(([k, v]) => `${k}: ${v}`);
    add({
      key: ["calc", profile, config, width, height, glass, color, hardware, services.join(",")].join("|"),
      kind: "window",
      title: `Вікно ${p.name} ${width}×${height} мм`,
      details,
      unitPrice: Math.round(price.total),
      meta: { cols: cfg.cols, width: +width, height: +height },
    }, qty);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px] items-start">
      <div className="flex flex-col gap-6">
        <Step n={1} title="Профільна система">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PROFILES.map((x) => (
              <Choice key={x.slug} active={profile === x.slug} onClick={() => setProfile(x.slug)} className="p-3 flex items-center gap-3">
                <span className="relative w-11 h-14 shrink-0"><Image src={x.image} alt="" fill sizes="44px" className="object-contain" /></span>
                <span>
                  <span className="block font-semibold text-ink leading-tight">{x.name}</span>
                  <span className="block text-xs text-text-2 mt-0.5">{x.specs[0]?.[1]}, камер {x.specs[1]?.[1]}</span>
                </span>
              </Choice>
            ))}
          </div>
        </Step>

        <Step n={2} title="Конфігурація вікна">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CONFIGS.map((c) => (
              <Choice key={c.id} active={config === c.id} onClick={() => setConfig(c.id)} className="p-3 flex flex-col items-center gap-2">
                <WindowDiagram cols={c.cols} width={c.cols.length * 600} height={1200} maxW={110} maxH={90} />
                <span className="text-xs text-center text-text-2 leading-tight">{c.label}</span>
              </Choice>
            ))}
          </div>
          <p className="text-xs text-text-2 mt-3 flex gap-4"><span><i className="inline-block w-4 border-t-2 border-dashed border-sel align-middle mr-1" />поворот</span><span><i className="inline-block w-4 border-t-2 border-dashed border-sel align-middle mr-1" />відкидання</span></p>
        </Step>

        <Step n={3} title="Розміри, мм">
          <div className="grid sm:grid-cols-[1fr_1fr_180px] gap-4 items-center">
            {[["Ширина", width, setWidth], ["Висота", height, setHeight]].map(([label, val, set]) => (
              <label key={label} className="block text-sm">
                <span className="text-text-2">{label}</span>
                <input type="number" inputMode="numeric" className="field mt-1" min={LIMITS.min} max={LIMITS.max} value={val} onChange={(e) => set(e.target.value === "" ? "" : +e.target.value)} onBlur={(e) => set(clamp(e.target.value))} />
              </label>
            ))}
            <div className="hidden sm:grid place-items-center"><WindowDiagram cols={cfg.cols} width={+width || 1000} height={+height || 1000} color={color} maxW={110} maxH={110} /></div>
          </div>
          <p className="text-xs text-text-2 mt-2">Допустимо від {LIMITS.min} до {LIMITS.max} мм. Площа: {price.area.toFixed(2)} м².</p>
        </Step>

        <Step n={4} title="Склопакет">
          <div className="grid gap-3 sm:grid-cols-2">
            {GLASS.map((g) => (
              <Choice key={g.id} active={glass === g.id} onClick={() => setGlass(g.id)} className="px-4 py-3 text-sm font-medium">{g.label}</Choice>
            ))}
          </div>
        </Step>

        <Step n={5} title="Колір профілю">
          <div className="flex flex-wrap gap-3">
            {COLORS.map((c) => (
              <Choice key={c.id} active={color === c.id} onClick={() => setColor(c.id)} className="px-3 py-2 flex items-center gap-2 text-sm font-medium">
                <span className="w-6 h-6" style={{ background: c.swatch }} />{c.label}
              </Choice>
            ))}
          </div>
        </Step>

        <Step n={6} title="Фурнітура">
          <div className="grid gap-3 sm:grid-cols-2">
            {HARDWARE.map((h) => (
              <Choice key={h.id} active={hardware === h.id} onClick={() => setHardware(h.id)} className="px-4 py-3 text-sm font-medium">{h.label}</Choice>
            ))}
          </div>
        </Step>

        <Step n={7} title="Додаткові послуги">
          <div className="grid gap-2 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <label key={s.id} className="flex items-center gap-3 px-4 py-3 text-sm cursor-pointer bg-surface-2 hover:bg-soft transition-colors">
                <input type="checkbox" className="accent-accent w-4 h-4" checked={services.includes(s.id)} onChange={() => setServices((a) => a.includes(s.id) ? a.filter((x) => x !== s.id) : [...a, s.id])} />
                <span className="flex-1">{s.label}</span>
                {s.note && <span className="text-xs text-accent-fg">{s.note}</span>}
              </label>
            ))}
          </div>
        </Step>
      </div>

      <aside className="lg:sticky lg:top-28 bg-surface shadow-[0_32px_64px_-24px_rgba(0,0,0,.8)] p-5 md:p-6">
        <h2 className="text-lg font-bold text-ink">Ваш розрахунок</h2>
        <div className="mt-3 grid place-items-center bg-soft p-4">
          <WindowDiagram cols={cfg.cols} width={+width || 1000} height={+height || 1000} color={color} dims maxW={200} maxH={170} />
        </div>
        <dl className="mt-4 space-y-1.5 text-sm">
          {Object.entries(payload).filter(([k]) => !["Кількість", "Орієнтовна сума"].includes(k)).map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4"><dt className="text-text-2 shrink-0">{k}</dt><dd className="text-right font-medium">{v}</dd></div>
          ))}
        </dl>
        <div className="mt-4 border-t border-line pt-4 space-y-1 text-sm">
          <div className="flex justify-between"><span className="text-text-2">Конструкція (1 шт.)</span><b>{fmt(price.construction)}</b></div>
          {price.lines.filter((l) => l.value > 0).map((l) => (
            <div key={l.id} className="flex justify-between"><span className="text-text-2">{l.label}</span><span>{fmt(l.value)}</span></div>
          ))}
          <div className="flex items-center justify-between pt-2">
            <span className="text-text-2">Кількість, шт.</span>
            <div className="flex items-center gap-2">
              <button type="button" className="w-8 h-8" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Менше">−</button>
              <span className="w-6 text-center font-semibold">{qty}</span>
              <button type="button" className="w-8 h-8" onClick={() => setQty((q) => Math.min(50, q + 1))} aria-label="Більше">+</button>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-deep text-white p-4">
          <p className="text-xs text-white/70">Орієнтовна вартість</p>
          <p className="text-3xl font-bold">{fmt(total)}</p>
        </div>
        <p className="mt-2 text-xs text-text-2">Остаточну вартість розрахує менеджер після заміру.</p>
        <button type="button" className="btn btn-primary w-full mt-4" onClick={addToCart}><Icon name="bag" size={18} /> Додати в кошик</button>
        <div className="mt-5 border-t border-line pt-5">
          <p className="font-bold text-ink mb-3 flex items-center gap-2"><Icon name="calc" size={18} />Або надішліть розрахунок менеджеру</p>
          <OrderForm subject="Заявка з калькулятора вікон" payload={payload} compact submitLabel="Надіслати заявку" />
        </div>
      </aside>
    </div>
  );
}
