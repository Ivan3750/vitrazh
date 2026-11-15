"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { windows, materials, brands, depths, sortOptions, badgeOf, toneClass } from "./data/windows";

const toggle = (list, v) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

function Check({ checked, onChange, label, count }) {
  return (
    <label className="flex items-center gap-3 py-1.5 cursor-pointer group">
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
      <span className="w-5 h-5 rounded-md border-2 border-ink/25 grid place-items-center text-[11px] text-transparent peer-checked:bg-brand-orange peer-checked:border-brand-orange peer-checked:text-white peer-focus-visible:ring-2 ring-ink transition-colors">
        ✓
      </span>
      <span className="flex-1 text-[15px] group-hover:text-brand-orange transition-colors">{label}</span>
      <span className="text-xs text-ink/40">{count}</span>
    </label>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div className="py-5 border-t border-ink/10 first:border-t-0 first:pt-0">
      <p className="font-display uppercase text-lg mb-2">{title}</p>
      {children}
    </div>
  );
}

export default function CatalogGrid() {
  const [mats, setMats] = useState([]);
  const [brs, setBrs] = useState([]);
  const [deps, setDeps] = useState([]);
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("default");
  const [open, setOpen] = useState(false);

  const items = useMemo(() => {
    let r = windows.filter(
      (w) =>
        (!mats.length || mats.includes(w.material)) &&
        (!brs.length || brs.includes(w.brand)) &&
        (!deps.length || (w.depth && deps.includes(w.depth))) &&
        (!q.trim() || (w.name + " " + w.system).toLowerCase().includes(q.trim().toLowerCase()))
    );
    if (sort === "depth-asc") r = [...r].sort((a, b) => (a.depth ?? 999) - (b.depth ?? 999));
    if (sort === "depth-desc") r = [...r].sort((a, b) => (b.depth ?? -1) - (a.depth ?? -1));
    if (sort === "name") r = [...r].sort((a, b) => a.name.localeCompare(b.name, "uk"));
    return r;
  }, [mats, brs, deps, q, sort]);

  const active = mats.length + brs.length + deps.length + (q ? 1 : 0);
  const reset = () => {
    setMats([]);
    setBrs([]);
    setDeps([]);
    setQ("");
  };
  const cnt = (fn) => windows.filter(fn).length;

  const filters = (
    <>
      <FilterGroup title="Пошук">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Назва системи"
          className="w-full rounded-full bg-white border border-ink/15 px-5 py-3 outline-none focus:border-ink"
        />
      </FilterGroup>
      <FilterGroup title="Тип системи">
        {materials.map((m) => (
          <Check key={m.id} checked={mats.includes(m.id)} onChange={() => setMats(toggle(mats, m.id))} label={m.label} count={cnt((w) => w.material === m.id)} />
        ))}
      </FilterGroup>
      <FilterGroup title="Профільна система">
        {brands.map((b) => (
          <Check key={b} checked={brs.includes(b)} onChange={() => setBrs(toggle(brs, b))} label={b} count={cnt((w) => w.brand === b)} />
        ))}
      </FilterGroup>
      <FilterGroup title="Глибина, мм">
        {depths.map((d) => (
          <Check key={d} checked={deps.includes(d)} onChange={() => setDeps(toggle(deps, d))} label={`${d} мм`} count={cnt((w) => w.depth === d)} />
        ))}
      </FilterGroup>
      {active > 0 && (
        <button onClick={reset} className="mt-2 text-sm font-semibold uppercase tracking-wider underline underline-offset-4 hover:text-brand-orange">
          Скинути фільтри ({active})
        </button>
      )}
    </>
  );

  return (
    <section className="max-w-[1320px] mx-auto px-4 sm:px-6 py-6 pb-12">
      <div className="grid lg:grid-cols-[270px_1fr] gap-8 items-start">
        {/* Фільтри: на десктопі — бокова панель, на мобільному — згортається */}
        <aside className="lg:sticky lg:top-24">
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-full flex items-center justify-between rounded-full bg-ink text-white px-6 py-3 font-semibold uppercase tracking-wider"
            aria-expanded={open}
          >
            Фільтри {active > 0 && `(${active})`}
            <span>{open ? "−" : "+"}</span>
          </button>
          <div className={`${open ? "block" : "hidden"} lg:block mt-3 lg:mt-0 rounded-3xl bg-paper p-6`}>{filters}</div>
        </aside>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <p className="text-ink/60 uppercase text-sm tracking-[0.14em]">
              Знайдено: <span className="text-ink font-semibold">{items.length}</span> з {windows.length}
            </p>
            <label className="flex items-center gap-3 text-sm">
              <span className="text-ink/60 uppercase tracking-[0.14em]">Сортування</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-full border border-ink/20 bg-white px-4 py-2 outline-none focus:border-ink"
              >
                {sortOptions.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {items.length === 0 ? (
            <div className="rounded-3xl bg-paper p-10 text-center">
              <p className="font-display text-3xl uppercase">Нічого не знайдено</p>
              <p className="mt-2 text-ink/60">Спробуйте змінити фільтри.</p>
              <button onClick={reset} className="mt-5 rounded-full bg-ink text-white hover:bg-brand-orange transition-colors px-7 py-3 font-semibold uppercase tracking-wider">
                Скинути фільтри
              </button>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {items.map((w) => {
                  const badge = badgeOf(w);
                  return (
                    <motion.article
                      layout
                      key={w.slug}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="group flex flex-col rounded-3xl bg-paper overflow-hidden"
                    >
                      <Link href={`/catalog/vikna/${w.slug}/`} className="relative block aspect-[4/5] bg-white m-3 rounded-2xl p-5 overflow-hidden">
                        <span className={`absolute top-4 left-4 z-10 rounded-full text-xs font-semibold uppercase tracking-widest px-3 py-1.5 ${toneClass[badge.tone]}`}>
                          {badge.label}
                        </span>
                        <img src={w.image.src} alt={`${w.name} — профільна система`} loading="lazy" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                      </Link>

                      <div className="flex flex-col flex-1 px-5 pb-5 pt-2 gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.14em] text-ink/50">{w.brand}</p>
                          <h2 className="font-display text-3xl uppercase leading-none mt-1">{w.name}</h2>
                          <p className="text-ink/60 text-sm mt-2">{w.tagline}</p>
                        </div>

                        <dl className="grid grid-cols-3 gap-2">
                          {w.cardSpecs.map((s) => (
                            <div key={s.key} className="rounded-xl bg-white px-2.5 py-2">
                              <dt className="text-[10px] uppercase tracking-[0.1em] text-ink/50 leading-tight">{s.key}</dt>
                              <dd className="font-display text-base mt-0.5 leading-tight">{s.value}</dd>
                            </div>
                          ))}
                        </dl>

                        <div className="mt-auto pt-2 flex gap-3">
                          <Link href={`/catalog/vikna/${w.slug}/`} className="flex-1 text-center rounded-full border-2 border-ink hover:bg-ink hover:text-white transition-colors py-3 uppercase text-sm font-semibold tracking-wider">
                            Деталі
                          </Link>
                          <Link href={`/contact/?product=${encodeURIComponent(w.name)}`} className="flex-1 text-center rounded-full bg-brand-orange text-white hover:bg-ink transition-colors py-3 uppercase text-sm font-semibold tracking-wider">
                            Замовити
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
