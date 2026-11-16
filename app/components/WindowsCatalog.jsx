"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

const MATERIALS = [
  { id: "pvc", label: "ПВХ (металопластикові)" },
  { id: "alu", label: "Алюмінієві вікна та двері" },
  { id: "facade", label: "Фасадні системи" },
];

const SORTS = [
  { id: "default", label: "За замовчуванням" },
  { id: "az", label: "За назвою: А → Я" },
  { id: "za", label: "За назвою: Я → А" },
];

const toggle = (list, value) =>
  list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

const Checkbox = ({ checked, onChange, label, count }) => (
  <label className="flex items-center justify-between gap-3 py-[7px] cursor-pointer group">
    <span className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-[18px] h-[18px] accent-[#D8F422] cursor-pointer"
      />
      <span className="text-[16px] text-[#0F0F0F] group-hover:underline">
        {label}
      </span>
    </span>
    <span className="text-[14px] text-gray-400">{count}</span>
  </label>
);

const ProductCard = ({ p }) => (
  <article className="flex flex-col bg-white border border-gray-200 rounded-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
    <Link
      href={p.link}
      className="group relative block aspect-[4/5] overflow-hidden bg-gradient-to-b from-[#FBFAF5] to-[#ECEADF]"
      aria-label={p.name}
    >
      <img
        src={p.img.src}
        alt={`${p.name} — профільна система`}
        width={800}
        height={1000}
        loading="lazy"
        className="w-full h-full object-contain drop-shadow-[0_14px_18px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:scale-105"
      />
      {p.photo && (
        <img
          src={p.photo.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      )}
    </Link>

    <div className="flex flex-col flex-1 p-5">
      <span className="text-[13px] uppercase tracking-wide text-gray-400">
        {p.brand}
      </span>
      <h2 className="text-[22px] leading-tight text-[#0F0F0F] mt-1 mb-4">
        <Link href={p.link} className="hover:underline">
          {p.name}
        </Link>
      </h2>

      <dl className="text-[15px] divide-y divide-gray-100 mb-5">
        {p.specs.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 py-[7px]">
            <dt className="text-gray-500">{k}</dt>
            <dd className="text-right text-[#0F0F0F]">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-auto grid grid-cols-2 gap-3">
        <Link
          href={p.link}
          className="text-center border border-[#0F0F0F] rounded-sm py-[12px] uppercase text-[14px] font-semibold hover:bg-[#0F0F0F] hover:text-white transition-colors"
        >
          Деталі
        </Link>
        <Link
          href={p.orderLink || p.link}
          className="text-center bg-[#D8F422] rounded-sm py-[12px] uppercase text-[14px] font-semibold hover:bg-[#242323] hover:text-white transition-colors"
        >
          Замовити
        </Link>
      </div>
    </div>
  </article>
);

export default function WindowsCatalog({ products }) {
  const [materials, setMaterials] = useState([]);
  const [brands, setBrands] = useState([]);
  const [sort, setSort] = useState("default");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const brandList = useMemo(
    () => [...new Set(products.map((p) => p.brand))],
    [products]
  );

  const visible = useMemo(() => {
    const list = products.filter(
      (p) =>
        (!materials.length || materials.includes(p.material)) &&
        (!brands.length || brands.includes(p.brand))
    );
    if (sort === "az") list.sort((a, b) => a.name.localeCompare(b.name, "uk"));
    if (sort === "za") list.sort((a, b) => b.name.localeCompare(a.name, "uk"));
    return list;
  }, [products, materials, brands, sort]);

  const active = materials.length + brands.length;
  const reset = () => {
    setMaterials([]);
    setBrands([]);
  };

  const sidebar = (
    <aside
      className={`${filtersOpen ? "block" : "hidden"} lg:block lg:w-[280px] shrink-0`}
    >
      <div className="border border-gray-200 rounded-md p-5 mb-6">
        <h3 className="text-[20px] mb-3">Матеріал</h3>
        {MATERIALS.map((m) => (
          <Checkbox
            key={m.id}
            label={m.label}
            checked={materials.includes(m.id)}
            onChange={() => setMaterials(toggle(materials, m.id))}
            count={products.filter((p) => p.material === m.id).length}
          />
        ))}
      </div>

      <div className="border border-gray-200 rounded-md p-5 mb-6">
        <h3 className="text-[20px] mb-3">Виробник</h3>
        {brandList.map((b) => (
          <Checkbox
            key={b}
            label={b}
            checked={brands.includes(b)}
            onChange={() => setBrands(toggle(brands, b))}
            count={products.filter((p) => p.brand === b).length}
          />
        ))}
      </div>

      {active > 0 && (
        <button
          onClick={reset}
          className="w-full border border-[#0F0F0F] rounded-sm py-[12px] uppercase text-[14px] font-semibold"
        >
          Скинути фільтри ({active})
        </button>
      )}
    </aside>
  );

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-10">
      <nav aria-label="Навігація" className="text-[15px] text-gray-500 mb-8">
        <Link href="/" className="hover:underline">
          Головна
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#0F0F0F]">Вікна</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:hidden">
          <button
            onClick={() => setFiltersOpen((v) => !v)}
            className="w-full border border-[#0F0F0F] rounded-sm py-[12px] uppercase text-[14px] font-semibold"
          >
            {filtersOpen ? "Сховати фільтри" : "Фільтри"}
            {active > 0 && ` (${active})`}
          </button>
        </div>

        {sidebar}

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <p className="text-gray-500">
              Показано {visible.length} з {products.length}{" "}
              {products.length === 1 ? "системи" : "систем"}
            </p>
            <label className="flex items-center gap-3 text-[15px]">
              <span className="text-gray-500">Сортування:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-gray-300 rounded-sm px-3 py-2 bg-white cursor-pointer"
              >
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {visible.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {visible.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500">
              <p className="mb-4">За вибраними фільтрами систем не знайдено.</p>
              <button onClick={reset} className="underline">
                Скинути фільтри
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
