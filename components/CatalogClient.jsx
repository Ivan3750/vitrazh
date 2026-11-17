"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { buildCatalog, getConfig, PVC_PROFILES } from "@/lib/catalog";
import { GLASS, COLORS, fmt } from "@/lib/pricing";
import WindowDiagram from "./WindowDiagram";
import { useCart } from "./CartProvider";
import Reveal from "./Reveal";
import Icon from "./Icon";

const ALL = buildCatalog();
const PRICE_MAX = Math.ceil(Math.max(...ALL.map((i) => i.price)) / 1000) * 1000;
const PAGE = 12;

const toggle = (set, v) => { const n = new Set(set); n.has(v) ? n.delete(v) : n.add(v); return n; };

function Group({ title, children }) {
  return (
    <fieldset className="border-b border-line pb-4">
      <legend className="font-bold text-ink text-sm mb-2">{title}</legend>
      <div className="space-y-1.5">{children}</div>
    </fieldset>
  );
}

function Check({ label, checked, onChange, count }) {
  return (
    <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-brand">
      <input type="checkbox" checked={checked} onChange={onChange} className="accent-[#0878c0] w-4 h-4" />
      <span className="flex-1">{label}</span>
      {count != null && <span className="text-xs text-text-2">{count}</span>}
    </label>
  );
}

export default function CatalogClient() {
  const { add } = useCart();
  const [q, setQ] = useState("");
  const [profiles, setProfiles] = useState(new Set());
  const [sashes, setSashes] = useState(new Set());
  const [glass, setGlass] = useState(new Set());
  const [colors, setColors] = useState(new Set());
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX);
  const [sort, setSort] = useState("price-asc");
  const [shown, setShown] = useState(PAGE);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [added, setAdded] = useState(null);

  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    let r = ALL.filter((i) =>
      (!profiles.size || profiles.has(i.profile)) &&
      (!sashes.size || sashes.has(i.sashes)) &&
      (!glass.size || glass.has(i.glass)) &&
      (!colors.size || colors.has(i.color)) &&
      i.price <= maxPrice &&
      (!t || `${i.profileName} ${i.configLabel} ${i.width}x${i.height} ${i.width}×${i.height} ${i.glassLabel} ${i.colorLabel}`.toLowerCase().includes(t))
    );
    return [...r].sort((a, b) => sort === "price-asc" ? a.price - b.price : sort === "price-desc" ? b.price - a.price : a.profileName.localeCompare(b.profileName) || a.price - b.price);
  }, [q, profiles, sashes, glass, colors, maxPrice, sort]);

  const reset = () => { setQ(""); setProfiles(new Set()); setSashes(new Set()); setGlass(new Set()); setColors(new Set()); setMaxPrice(PRICE_MAX); setShown(PAGE); };
  const upd = (fn) => (v) => { fn((s) => toggle(s, v)); setShown(PAGE); };
  const count = (key, val) => ALL.filter((i) => i[key] === val).length;
  const activeCount = profiles.size + sashes.size + glass.size + colors.size + (maxPrice < PRICE_MAX ? 1 : 0);

  function addItem(i) {
    const cfg = getConfig(i.config);
    add({
      key: i.id,
      kind: "window",
      title: `Вікно ${i.profileName} ${i.width}×${i.height} мм`,
      details: [i.configLabel, i.glassLabel, `Колір: ${i.colorLabel}`],
      unitPrice: i.price,
      meta: { cols: cfg.cols, width: i.width, height: i.height },
    });
    setAdded(i.id);
    setTimeout(() => setAdded((a) => (a === i.id ? null : a)), 1200);
  }

  const filters = (
    <div className="space-y-4">
      <Group title="Профільна система">
        {PVC_PROFILES.filter((p) => ALL.some((i) => i.profile === p.slug)).map((p) => (
          <Check key={p.slug} label={p.name} checked={profiles.has(p.slug)} onChange={() => upd(setProfiles)(p.slug)} count={count("profile", p.slug)} />
        ))}
      </Group>
      <Group title="Кількість стулок">
        {[1, 2, 3].map((n) => (
          <Check key={n} label={n === 1 ? "Одностулкове" : n === 2 ? "Двостулкове" : "Тристулкове"} checked={sashes.has(n)} onChange={() => upd(setSashes)(n)} count={count("sashes", n)} />
        ))}
      </Group>
      <Group title="Склопакет">
        {GLASS.filter((g) => ALL.some((i) => i.glass === g.id)).map((g) => (
          <Check key={g.id} label={g.label} checked={glass.has(g.id)} onChange={() => upd(setGlass)(g.id)} count={count("glass", g.id)} />
        ))}
      </Group>
      <Group title="Колір">
        {COLORS.filter((c) => ALL.some((i) => i.color === c.id)).map((c) => (
          <Check key={c.id} label={c.label} checked={colors.has(c.id)} onChange={() => upd(setColors)(c.id)} count={count("color", c.id)} />
        ))}
      </Group>
      <div>
        <p className="font-bold text-ink text-sm mb-2">Ціна до: <span className="text-brand">{fmt(maxPrice)}</span></p>
        <input type="range" min={3000} max={PRICE_MAX} step={500} value={maxPrice} onChange={(e) => { setMaxPrice(+e.target.value); setShown(PAGE); }} className="w-full accent-[#0878c0]" aria-label="Максимальна ціна" />
      </div>
      <button onClick={reset} className="btn btn-outline btn-sm w-full">Скинути фільтри</button>
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="hidden lg:block self-start sticky top-28 border border-line bg-white p-6">{filters}</aside>

      <div>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="relative flex-1 min-w-[200px]">
            <Icon name="search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-2" />
            <input type="search" value={q} onChange={(e) => { setQ(e.target.value); setShown(PAGE); }} placeholder="Пошук: профіль, розмір, колір…" className="field !pl-10" aria-label="Пошук по каталогу" />
          </div>
          <button className="lg:hidden btn btn-outline btn-sm" onClick={() => setFiltersOpen(true)}>
            <Icon name="filter" size={16} /> Фільтри{activeCount ? ` (${activeCount})` : ""}
          </button>
          <label className="sr-only" htmlFor="sort">Сортування</label>
          <select id="sort" className="field !w-auto" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="price-asc">Спочатку дешевші</option>
            <option value="price-desc">Спочатку дорожчі</option>
            <option value="name">За назвою</option>
          </select>
        </div>
        <p className="text-sm text-text-2 mb-4">Знайдено: <b className="text-ink">{list.length}</b></p>

        {list.length === 0 ? (
          <div className="border border-line p-10 text-center">
            <p className="font-bold text-ink">За вибраними параметрами нічого не знайдено</p>
            <button onClick={reset} className="btn btn-primary mt-4">Скинути фільтри</button>
          </div>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {list.slice(0, shown).map((i, idx) => (
              <Reveal as="li" key={i.id} delay={(idx % 3) * 70} className="card flex flex-col">
                <div className={`${["tint-brand","tint-accent","tint-lime","tint-soft"][i.profile.length % 4]} h-48 grid place-items-center p-6`}>
                  <WindowDiagram cols={getConfig(i.config).cols} width={i.width} height={i.height} maxW={190} maxH={150} />
                </div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <Link href={`/catalog/${i.profile}/`} className="small !text-text-3 hover:text-ink">{i.profileName}</Link>
                    <h3 className="h3 !text-base">{i.configLabel} вікно {i.width}×{i.height} мм</h3>
                    <p className="small">{i.glassLabel} · {i.colorLabel}</p>
                  </div>
                  <p className="mt-auto text-2xl font-bold tracking-tight">{fmt(i.price)}</p>
                  <div className="grid grid-cols-[1fr_auto] gap-2">
                    <button className={`btn btn-sm ${added === i.id ? "btn-dark" : "btn-primary"}`} onClick={() => addItem(i)}>
                      {added === i.id ? <><Icon name="check" size={16} /> Додано</> : <><Icon name="cart" size={16} /> В кошик</>}
                    </button>
                    <Link href={`/calc/?profile=${i.profile}&config=${i.config}&w=${i.width}&h=${i.height}&glass=${i.glass}&color=${i.color}`} className="btn btn-outline btn-sm btn-icon" aria-label="Змінити параметри в калькуляторі" title="Змінити параметри">
                      <Icon name="calc" size={16} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        )}

        {shown < list.length && (
          <div className="text-center mt-8">
            <button className="btn btn-outline" onClick={() => setShown((s) => s + PAGE)}>Показати ще ({list.length - shown})</button>
          </div>
        )}
        <p className="mt-8 text-xs text-text-2">Ціни орієнтовні, вказані за конструкцію без монтажу. Остаточну вартість після заміру розрахує менеджер.</p>
      </div>

      {filtersOpen && (
        <div className="lg:hidden fixed inset-0 z-[90] bg-white overflow-y-auto p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-bold text-ink">Фільтри</p>
            <button onClick={() => setFiltersOpen(false)} aria-label="Закрити"><Icon name="x" size={26} /></button>
          </div>
          {filters}
          <button className="btn btn-primary w-full mt-5" onClick={() => setFiltersOpen(false)}>Показати {list.length}</button>
        </div>
      )}
    </div>
  );
}
