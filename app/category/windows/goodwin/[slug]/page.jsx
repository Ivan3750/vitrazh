import Link from "next/link";
import { notFound } from "next/navigation";
import check from "@/app/assets/images/icons/check.svg";
import OrderProduct from "@/app/components/OrderProduct";
import { goodwinProducts, getGoodwinProduct } from "../goodwinData";

const FACT_PATTERNS = [
  /монтажна глибина|глибина рами|внутрішня видима/i,
  /кількість камер/i,
  /теплопередачі|теплоізоляція|\(uf\)|\(uw\)/i,
  /максимальна товщина склопакета|товщина (скління|заповнення)/i,
  /злому|повітропроникність/i,
];

const getFacts = (tech) => {
  const facts = [];
  for (const re of FACT_PATTERNS) {
    const row = tech.find(
      ([k]) => re.test(k) && !facts.some((f) => f[0] === k)
    );
    if (row) facts.push(row);
  }
  return facts.slice(0, 4);
};

const getColors = (tech) => {
  const row = tech.find(([k]) => /^кольори основи/i.test(k));
  const base = row
    ? row[1].split(",").map((c) => c.trim()).filter(Boolean)
    : [];
  return [...base.map((c) => c[0].toUpperCase() + c.slice(1)), "Ламінація (під замовлення)"];
};

const STEPS = [
  ["Заявка", "Залишаєте заявку на цій сторінці або телефонуєте нам."],
  ["Консультація", "Менеджер уточнює розміри, комплектацію та рахує вартість."],
  ["Замір", "Фахівець приїжджає на об'єкт і робить точні виміри безкоштовно."],
  ["Виробництво і монтаж", "Виготовляємо конструкції та встановлюємо їх."],
];

export async function generateStaticParams() {
  return goodwinProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getGoodwinProduct(slug);
  if (!p) return { title: "Вікна | Вітраж" };

  const description = `${p.lead} ${p.description}`.slice(0, 160);
  return {
    title: `${p.name} - ${p.subtitle} | Вітраж`,
    description,
    openGraph: {
      title: p.name,
      description,
      url: `https://vitrazh.com.ua/category/windows/goodwin/${p.slug}`,
    },
  };
}

export default async function GoodwinProductPage({ params }) {
  const { slug } = await params;
  const p = getGoodwinProduct(slug);
  if (!p) notFound();

  const facts = getFacts(p.tech);
  const colors = getColors(p.tech);
  const related = goodwinProducts
    .filter((x) => x.slug !== p.slug && x.material === p.material)
    .slice(0, 3);

  return (
    <>
      <section className="relative h-[340px] flex items-center justify-center bg-black overflow-hidden">
        <img
          src={p.photo.src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <h1 className="relative z-10 text-white font-bold px-4 text-center">
          {p.name}
        </h1>
      </section>

      <div className="max-w-6xl mx-auto px-6 pt-8 text-[15px] text-gray-500">
        <Link href="/" className="hover:underline">
          Головна
        </Link>
        <span className="mx-2">/</span>
        <Link href="/category/windows" className="hover:underline">
          Вікна
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#0F0F0F]">{p.name}</span>
      </div>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="w-full md:w-1/2 rounded-md aspect-[4/5] bg-gradient-to-b from-[#FBFAF5] to-[#ECEADF]">
            <img
              src={p.img.src}
              alt={`${p.name} — профільна система`}
              width={800}
              height={1000}
              className="w-full h-full object-contain drop-shadow-[0_14px_18px_rgba(0,0,0,0.18)]"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-[14px] uppercase tracking-wide text-gray-400">
              {p.brand}
            </span>
            <h2 className="text-[40px] md:text-[50px] leading-tight mb-3">
              {p.name}
            </h2>
            <p className="text-[20px] text-[#0F0F0F] mb-5">{p.subtitle}</p>
            <p className="text-[#555555] text-[18px] mb-4">{p.lead}</p>
            <p className="text-[#555555] text-[18px] mb-8">{p.description}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#order"
                className="bg-[#D8F422] py-[16px] px-[24px] rounded-sm uppercase font-semibold hover:bg-[#242323] hover:text-white transition-colors"
              >
                Замовити
              </a>
              <Link
                href="/contact"
                className="border border-[#0F0F0F] py-[16px] px-[24px] rounded-sm uppercase font-semibold hover:bg-[#0F0F0F] hover:text-white transition-colors"
              >
                Консультація
              </Link>
            </div>
          </div>
        </div>
      </section>

      {facts.length > 0 && (
        <section className="px-6 pb-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {facts.map(([k, v]) => (
              <div key={k} className="bg-[#F8F7F0] rounded-md p-5">
                <div className="text-[19px] sm:text-[22px] leading-snug text-[#0F0F0F]">
                  {v}
                </div>
                <div className="text-[14px] text-gray-500 mt-2">{k}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          <div className="flex-1">
            <h3 className="text-3xl font-semibold mb-6">Для чого підходить</h3>
            <ul className="flex flex-col gap-4">
              {p.usage.map((u) => (
                <li key={u} className="flex gap-3 items-start text-[18px] text-[#555555]">
                  <span className="shrink-0 mt-1 rounded-full bg-[#D8F422] w-7 h-7 flex items-center justify-center">
                    <img src={check.src} alt="" width={16} height={16} />
                  </span>
                  {u}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 min-h-[260px] rounded-md overflow-hidden">
            <img
              src={p.photo.src}
              alt={`${p.name} — приклад застосування`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8 text-center">
          Технічні характеристики
        </h3>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1 w-full overflow-x-auto">
            <table className="w-full min-w-[320px] text-left text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-5 py-3 text-gray-700 font-semibold border-b border-gray-300">
                    Параметр
                  </th>
                  <th className="px-5 py-3 text-gray-700 font-semibold border-b border-gray-300">
                    Значення
                  </th>
                </tr>
              </thead>
              <tbody>
                {p.tech.map(([k, v], i) => (
                  <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 border-b border-gray-200 text-gray-800">
                      {k}
                    </td>
                    <td className="px-5 py-3 border-b border-gray-200 text-gray-800">
                      {v}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full md:w-[360px] shrink-0 bg-white border border-gray-200 rounded-md p-4">
            <img
              src={p.scheme.src}
              alt={`Переріз профілю ${p.name}`}
              loading="lazy"
              className="w-full object-contain"
            />
            <p className="text-center text-[14px] text-gray-500 mt-2">
              Переріз профільної системи
            </p>
          </div>
        </div>
      </section>

      {p.features.length > 0 && (
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-8 text-center">
            Додаткові можливості
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {p.features.map(([title, text]) => (
              <div key={title} className="flex gap-3 bg-[#F8F7F0] p-6 rounded-md">
                <img src={check.src} alt="" className="w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
                  <p className="text-gray-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8 text-center">Як ми працюємо</h3>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map(([title, text], i) => (
            <li key={title} className="bg-[#F8F7F0] rounded-md p-6">
              <span className="text-[44px] leading-none text-[#D8F422] [text-shadow:0_0_1px_#0F0F0F]">
                {i + 1}
              </span>
              <h4 className="font-semibold text-gray-800 mt-3 mb-1">{title}</h4>
              <p className="text-gray-600">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <OrderProduct product={{ name: p.name, slug: p.slug }} colors={colors} />

      {related.length > 0 && (
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-8 text-center">
            Схожі системи
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/category/windows/goodwin/${r.slug}`}
                className="block transition-transform duration-300 hover:scale-[1.03]"
              >
                <div className="bg-gradient-to-b from-[#FBFAF5] to-[#ECEADF] aspect-[4/5] rounded overflow-hidden">
                  <img
                    src={r.img.src}
                    alt={r.name}
                    loading="lazy"
                    className="w-full h-full object-contain drop-shadow-[0_10px_14px_rgba(0,0,0,0.16)]"
                  />
                </div>
                <h4 className="text-center text-[20px] mt-4">{r.name}</h4>
              </Link>
            ))}
          </div>
        </section>
      )}

    </>
  );
}
