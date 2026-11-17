"use client";
import { useMemo, useState } from "react";
import { buildCatalog, PVC_PROFILES, CONFIGS, PROFILE_TAGS, itemPrice } from "@/lib/catalog";
import { fmt } from "@/lib/pricing";
import WindowCard from "./WindowCard";
import WindowQuickView from "./WindowQuickView";
import Modal from "./Modal";
import Reveal from "./Reveal";
import Icon from "./Icon";
import ShopTabs from "./ShopTabs";

const ALL = buildCatalog();
const PRICES = ALL.map((i) => itemPrice(i, "g2", "white"));
const PRICE_MAX = Math.ceil(Math.max(...PRICES) / 1000) * 1000;
const PAGE = 12;

const toggle = (set, v) => { const n = new Set(set); n.has(v) ? n.delete(v) : n.add(v); return n; };

function Group({ title, children }) {
  return (
    <fieldset className="border-b border-line pb-5 last:border-0">
      <legend className="eyebrow !text-text-3 mb-4 before:hidden">{title}</legend>
      <div className="flex flex-col gap-2.5">{children}</div>
    </fieldset>
  );
}

function Check({ label, checked, onChange, count }) {
  return (
    <label className="flex items-center gap-3 text-sm cursor-pointer min-h-8 text-text-2 hover:text-ink transition-colors">
      <input type="checkbox" checked={checked} onChange={onChange} className="w-4 h-4 accent-[#d8f422]" />
      <span className="flex-1">{label}</span>
      {count != null && <span className="text-xs text-text-3 num">{count}</span>}
    </label>
  );
}

export default function CatalogClient() {
  const [q, setQ] = useState("");
  const [profiles, setProfiles] = useState(new Set());
  const [cfgs, setCfgs] = useState(new Set());
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX);
  const [sort, setSort] = useState("price-asc");
  const [shown, setShown] = useState(PAGE);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [quick, setQuick] = useState(null);

  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    const r = ALL.filter((i) =>
      (!profiles.size || profiles.has(i.profile)) &&
      (!cfgs.size || cfgs.has(i.config)) &&
      itemPrice(i, "g2", "white") <= maxPrice &&
      (!t || `${i.profileName} ${i.configLabel} ${i.width}x${i.height} ${i.width}×${i.height} ${PROFILE_TAGS[i.profile]?.tag ?? ""}`.toLowerCase().includes(t))
    );
    return [...r].sort((a, b) => {
      const pa = itemPrice(a, "g2", "white"), pb = itemPrice(b, "g2", "white");
      return sort === "price-asc" ? pa - pb : sort === "price-desc" ? pb - pa : a.profileName.localeCompare(b.profileName) || pa - pb;
    });
  }, [q, profiles, cfgs, maxPrice, sort]);

  const reset = () => { setQ(""); setProfiles(new Set()); setCfgs(new Set()); setMaxPrice(PRICE_MAX); setShown(PAGE); };
  const upd = (fn) => (v) => { fn((s) => toggle(s, v)); setShown(PAGE); };
  const countBy = (key, val) => ALL.filter((i) => i[key] === val).length;
  const active = profiles.size + cfgs.size + (maxPrice < PRICE_MAX ? 1 : 0);

  const filters = (
    <div className="flex flex-col gap-5">
      <Group title="Профільна система">
        {PVC_PROFILES.filter((p) => ALL.some((i) => i.profile === p.slug)).map((p) => (
          <Check key={p.slug} label={p.name} checked={profiles.has(p.slug)} onChange={() => upd(setProfiles)(p.slug)} count={countBy("profile", p.slug)} />
        ))}
      </Group>
      <Group title="Конфігурація">
        {CONFIGS.map((c) => (
          <Check key={c.id} label={c.label} checked={cfgs.has(c.id)} onChange={() => upd(setCfgs)(c.id)} count={countBy("config", c.id)} />
        ))}
      </Group>
      <div>
        <p className="eyebrow !text-text-3 mb-4 before:hidden">Ціна до: <span className="accent-text normal-case tracking-normal text-sm">{fmt(maxPrice)}</span></p>
        <input type="range" min={3000} max={PRICE_MAX} step={500} value={maxPrice} onChange={(e) => { setMaxPrice(+e.target.value); setShown(PAGE); }} className="w-full accent-[#d8f422]" aria-label="Максимальна ціна" />
      </div>
      <button onClick={reset} className="btn btn-outline btn-sm btn-block">Скинути фільтри</button>
    </div>
  );

  return (
    <div className="flex flex-col gap-8"><ShopTabs active="windows" />
    <div className="grid gap-10 lg:grid-cols-[272px_1fr]">
      <aside className="hidden lg:block self-start sticky top-28 bg-surface p-6">{filters}</aside>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="relative flex-1 min-w-[200px]">
            <Icon name="search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-3" />
            <input type="search" value={q} onChange={(e) => { setQ(e.target.value); setShown(PAGE); }} placeholder="Пошук: профіль, розмір, хіт…" className="field !pl-11" aria-label="Пошук по каталогу" />
          </div>
          <button className="lg:hidden btn btn-outline" onClick={() => setFiltersOpen(true)}>
            <Icon name="filter" size={16} /> Фільтри{active ? ` (${active})` : ""}
          </button>
          <label className="sr-only" htmlFor="sort">Сортування</label>
          <select id="sort" className="field !w-auto" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="price-asc">Спочатку дешевші</option>
            <option value="price-desc">Спочатку дорожчі</option>
            <option value="name">За назвою</option>
          </select>
        </div>
        <p className="small mb-6">Знайдено: <b className="text-ink num">{list.length}</b> · ціни вказані за двокамерний склопакет, білий профіль — змінюйте на картці</p>

        {list.length === 0 ? (
          <div className="bg-surface p-10 text-center flex flex-col items-center gap-4">
            <p className="font-semibold">За вибраними параметрами нічого не знайдено</p>
            <button onClick={reset} className="btn btn-primary">Скинути фільтри</button>
          </div>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {list.slice(0, shown).map((i, idx) => (
              <Reveal as="li" key={i.id} delay={(idx % 3) * 70}><WindowCard item={i} onQuick={(it, g, c) => setQuick({ it, g, c })} /></Reveal>
            ))}
          </ul>
        )}

        {shown < list.length && (
          <div className="text-center mt-10">
            <button className="btn btn-outline" onClick={() => setShown((s) => s + PAGE)}>Показати ще ({list.length - shown})</button>
          </div>
        )}
        <p className="mt-12 small !text-text-3">Ціни орієнтовні, вказані за конструкцію без монтажу. Остаточну вартість після заміру розрахує менеджер.</p>
      </div>

      {filtersOpen && (
        <div className="lg:hidden fixed inset-0 z-[150] bg-bg overflow-y-auto p-5 pb-28 anim-fade">
          <div className="flex items-center justify-between mb-6">
            <p className="h3">Фільтри</p>
            <button onClick={() => setFiltersOpen(false)} className="btn btn-outline btn-sm btn-icon" aria-label="Закрити"><Icon name="x" size={20} /></button>
          </div>
          {filters}
          <div className="fixed bottom-0 inset-x-0 p-4 bg-bg border-t border-line"><button className="btn btn-primary btn-block" onClick={() => setFiltersOpen(false)}>Показати {list.length}</button></div>
        </div>
      )}

      <Modal open={!!quick} onClose={() => setQuick(null)} title={quick ? `${quick.it.profileName} · ${quick.it.configLabel} ${quick.it.width}×${quick.it.height}` : ""} wide>
        {quick && <WindowQuickView key={quick.it.id} item={quick.it} initialGlass={quick.g} initialColor={quick.c} onDone={() => setQuick(null)} />}
      </Modal>
    </div>
    </div>
  );
}
