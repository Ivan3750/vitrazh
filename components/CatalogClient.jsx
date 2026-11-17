"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { buildCatalog, getConfig, PVC_PROFILES } from "@/lib/catalog";
import { GLASS, COLORS, fmt } from "@/lib/pricing";
import WindowDiagram from "./WindowDiagram";
import Modal from "./Modal";
import OrderForm from "./OrderForm";
import Icon from "./Icon";

const ALL = buildCatalog();
const PRICE_MAX = Math.ceil(Math.max(...ALL.map((i) => i.price)) / 1000) * 1000;
const PAGE = 12;

function toggle(set, v) {
  const n = new Set(set);
  n.has(v) ? n.delete(v) : n.add(v);
  return n;
}

function Group({ title, children }) {
  return (
    <fieldset className="border-b border-line pb-4">
      <legend className="font-semibold text-navy text-sm mb-2">{title}</legend>
      <div className="space-y-1.5">{children}</div>
    </fieldset>
  );
}

function Check({ label, checked, onChange, count }) {
  return (
    <label className="flex items-center gap-2 text-sm cursor-pointer">
      <input type="checkbox" checked={checked} onChange={onChange} className="accent-[#1d7cc4] w-4 h-4" />
      <span className="flex-1">{label}</span>
      {count != null && <span className="text-xs text-muted">{count}</span>}
    </label>
  );
}

export default function CatalogClient() {
  const [profiles, setProfiles] = useState(new Set());
  const [sashes, setSashes] = useState(new Set());
  const [glass, setGlass] = useState(new Set());
  const [colors, setColors] = useState(new Set());
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX);
  const [sort, setSort] = useState("price-asc");
  const [shown, setShown] = useState(PAGE);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [order, setOrder] = useState(null);

  const list = useMemo(() => {
    let r = ALL.filter((i) =>
      (!profiles.size || profiles.has(i.profile)) &&
      (!sashes.size || sashes.has(i.sashes)) &&
      (!glass.size || glass.has(i.glass)) &&
      (!colors.size || colors.has(i.color)) &&
      i.price <= maxPrice
    );
    r = [...r].sort((a, b) => sort === "price-asc" ? a.price - b.price : sort === "price-desc" ? b.price - a.price : a.profileName.localeCompare(b.profileName) || a.price - b.price);
    return r;
  }, [profiles, sashes, glass, colors, maxPrice, sort]);

  const reset = () => { setProfiles(new Set()); setSashes(new Set()); setGlass(new Set()); setColors(new Set()); setMaxPrice(PRICE_MAX); setShown(PAGE); };
  const upd = (fn) => (v) => { fn((s) => toggle(s, v)); setShown(PAGE); };
  const count = (key, val) => ALL.filter((i) => i[key] === val).length;
  const activeCount = profiles.size + sashes.size + glass.size + colors.size + (maxPrice < PRICE_MAX ? 1 : 0);

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
        <p className="font-semibold text-navy text-sm mb-2">Ціна до: <span className="text-brand">{fmt(maxPrice)}</span></p>
        <input type="range" min={3000} max={PRICE_MAX} step={500} value={maxPrice} onChange={(e) => { setMaxPrice(+e.target.value); setShown(PAGE); }} className="w-full accent-[#1d7cc4]" aria-label="Максимальна ціна" />
      </div>
      <button onClick={reset} className="btn btn-outline w-full !py-2">Скинути фільтри</button>
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[270px_1fr]">
      <aside className="hidden lg:block self-start sticky top-28 rounded-2xl border border-line p-5">{filters}</aside>

      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <p className="text-sm text-muted">Знайдено: <b className="text-ink">{list.length}</b></p>
          <div className="flex items-center gap-2">
            <button className="lg:hidden btn btn-outline !py-2" onClick={() => setFiltersOpen(true)}>
              <Icon name="filter" size={16} /> Фільтри{activeCount ? ` (${activeCount})` : ""}
            </button>
            <label className="sr-only" htmlFor="sort">Сортування</label>
            <select id="sort" className="field !w-auto !py-2" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="price-asc">Спочатку дешевші</option>
              <option value="price-desc">Спочатку дорожчі</option>
              <option value="name">За назвою</option>
            </select>
          </div>
        </div>

        {list.length === 0 ? (
          <div className="rounded-2xl border border-line p-10 text-center">
            <p className="font-semibold text-navy">За вибраними фільтрами нічого не знайдено</p>
            <button onClick={reset} className="btn btn-brand mt-4">Скинути фільтри</button>
          </div>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {list.slice(0, shown).map((i) => (
              <li key={i.id} className="flex flex-col rounded-2xl border border-line bg-white overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-soft h-48 grid place-items-center p-5">
                  <WindowDiagram cols={ALL_CFG(i.config)} width={i.width} height={i.height} maxW={190} maxH={150} />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <Link href={`/catalog/${i.profile}/`} className="eyebrow hover:underline">{i.profileName}</Link>
                  <h3 className="mt-1 font-bold text-navy leading-snug">{i.configLabel} вікно {i.width}×{i.height} мм</h3>
                  <ul className="mt-2 text-sm text-muted space-y-0.5">
                    <li>Склопакет: {i.glassLabel}</li>
                    <li>Колір: {i.colorLabel}</li>
                  </ul>
                  <p className="mt-3 text-2xl font-bold text-navy">{fmt(i.price)}</p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <button className="btn btn-accent !px-3" onClick={() => setOrder(i)}>Замовити</button>
                    <Link href={`/calc/?profile=${i.profile}&config=${i.config}&w=${i.width}&h=${i.height}&glass=${i.glass}&color=${i.color}`} className="btn btn-outline !px-3">Змінити</Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {shown < list.length && (
          <div className="text-center mt-8">
            <button className="btn btn-outline" onClick={() => setShown((s) => s + PAGE)}>Показати ще ({list.length - shown})</button>
          </div>
        )}
        <p className="mt-8 text-xs text-muted">Ціни орієнтовні, вказані за конструкцію без монтажу. Остаточну вартість після заміру розрахує менеджер.</p>
      </div>

      {filtersOpen && (
        <div className="lg:hidden fixed inset-0 z-[90] bg-white overflow-y-auto p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-bold text-navy">Фільтри</p>
            <button onClick={() => setFiltersOpen(false)} aria-label="Закрити"><Icon name="x" size={26} /></button>
          </div>
          {filters}
          <button className="btn btn-accent w-full mt-5" onClick={() => setFiltersOpen(false)}>Показати {list.length}</button>
        </div>
      )}

      <Modal open={!!order} onClose={() => setOrder(null)} title="Замовити вікно">
        {order && (
          <>
            <p className="text-sm text-muted mb-4">{order.profileName}, {order.configLabel.toLowerCase()} {order.width}×{order.height} мм, {order.glassLabel}, {order.colorLabel} — <b className="text-navy">{fmt(order.price)}</b></p>
            <OrderForm
              subject="Замовлення вікна з каталогу"
              compact
              payload={{ Профіль: order.profileName, Конфігурація: order.configLabel, "Розмір, мм": `${order.width}×${order.height}`, Склопакет: order.glassLabel, Колір: order.colorLabel, "Орієнтовна ціна": fmt(order.price) }}
            />
          </>
        )}
      </Modal>
    </div>
  );
}


function ALL_CFG(id) { return getConfig(id).cols; }
