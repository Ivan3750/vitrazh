import Link from "next/link";
import { notFound } from "next/navigation";
import { windows, getWindow, badgeOf, toneClass, materialOf } from "../../data/windows";
import { features } from "../../data/features";
import { Reveal } from "../../../components/site/motion";
import JsonLd from "../../../components/site/JsonLd";
import OrderForm from "../../../components/site/OrderForm";
import { site, abs } from "../../../data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return windows.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const w = getWindow(slug);
  if (!w) return { title: "Вікна | Вітраж" };
  return {
    title: `${w.name} — ${w.system}: характеристики та замовлення | Вітраж`,
    description: w.description.slice(0, 160),
    alternates: { canonical: `/catalog/vikna/${w.slug}/` },
    openGraph: {
      type: "website",
      locale: "uk_UA",
      siteName: site.name,
      title: `${w.name} — ${w.system}`,
      description: w.tagline,
      url: `/catalog/vikna/${w.slug}/`,
      images: [{ url: site.ogImage, width: 1200, height: 630 }],
    },
  };
}

const FACT_PATTERNS = [
  /монтажна глибина|глибина рами|внутрішня видима/i,
  /кількість камер|ширина комбінації/i,
  /\(uf\)|теплоізоляція \(uw\)|коефіцієнт теплопередачі|^uf|uw/i,
  /максимальна товщина склопакета|товщина (скління|заповнення)/i,
  /злому|повітропроникність/i,
];

// Ключові цифри: беремо з таблиці характеристик, до 4 різних рядків
function getFacts(specs) {
  const facts = [];
  for (const re of FACT_PATTERNS) {
    const row = specs.find((s) => re.test(s.key) && !facts.some((f) => f.key === s.key));
    if (row) facts.push(row);
  }
  return facts.slice(0, 4);
}

// FAQ під конкретну систему — лише з даних, що вже є в каталозі
function buildFaq(w) {
  const spec = (re) => w.specs.find((s) => re.test(s.key))?.value;
  const faq = [[`Для чого підходить ${w.name}?`, `${w.tagline}. Застосування: ${w.usage.join(", ").toLowerCase()}.`]];
  const params = [
    ["монтажна глибина", spec(/глибина/i)],
    ["камер (рама / стулка)", spec(/кількість камер/i)],
    ["коефіцієнт теплопередачі", spec(/\(uf\)|\buw\b/i)],
    ["максимальна товщина склопакета", spec(/максимальна товщина склопакета|товщина скління/i)],
  ].filter(([, v]) => v);
  if (params.length >= 2) faq.push([`Які основні параметри ${w.name}?`, params.map(([k, v]) => `${k}: ${v}`).join("; ") + "."]);
  const burglary = spec(/злому/i);
  if (burglary) faq.push([`Чи є захист від злому в ${w.name}?`, `Система дозволяє виготовляти конструкції із захистом від злому ${burglary}. Фактичний клас залежить від склопакета, фурнітури та армування — їх підбере менеджер.`]);
  if (w.colors.length) faq.push([`Які кольори доступні для ${w.name}?`, `${w.colors.join(", ")}. Точний перелік оздоблення для вашого проєкту уточнить менеджер.`]);
  faq.push([`Скільки коштує ${w.name}?`, "Вартість залежить від розміру й конфігурації конструкції, склопакета, фурнітури, кольору та монтажу. Залиште заявку — менеджер розрахує точну суму після безкоштовного заміру."]);
  faq.push(["Ви робите замір і монтаж?", "Так. Виїзд на замір безкоштовний, вироби виготовляються на заводі, а монтаж виконують сертифіковані спеціалісти в узгоджені терміни."]);
  return faq;
}

const priceFactors = [
  ["Розмір і конфігурація", "Ширина, висота, кількість стулок і тип відкривання."],
  ["Профільна система", "Глибина, кількість камер і клас теплоізоляції."],
  ["Склопакет", "Кількість камер, товщина, енергозберігаюче чи шумозахисне скло."],
  ["Фурнітура", "Базова або протизламна, додаткові функції."],
  ["Колір і ламінація", "Білий, коричневий, антрацит або декоративна плівка."],
  ["Монтаж", "Демонтаж старих вікон, встановлення, оздоблення відкосів."],
];

const steps = [
  ["Заявка", "Залишаєте заявку на цій сторінці або телефонуєте нам."],
  ["Консультація", "Менеджер уточнює розміри, комплектацію та рахує вартість."],
  ["Безкоштовний замір", "Фахівець приїжджає на об'єкт і знімає точні розміри."],
  ["Виготовлення та монтаж", "Виготовляємо конструкції та встановлюємо в узгоджені терміни."],
];

export default async function WindowProductPage({ params }) {
  const { slug } = await params;
  const w = getWindow(slug);
  if (!w) notFound();
  const badge = badgeOf(w);
  const others = windows.filter((x) => x.slug !== w.slug);
  const related = [...others.filter((x) => x.material === w.material), ...others.filter((x) => x.material !== w.material)].slice(0, 3);

  const facts = getFacts(w.specs);
  const featureList = features[w.slug] || [];
  const faq = buildFaq(w);

  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Головна", item: abs("/") },
        { "@type": "ListItem", position: 2, name: "Вікна", item: abs("/catalog/vikna/") },
        { "@type": "ListItem", position: 3, name: w.name, item: abs(`/catalog/vikna/${w.slug}/`) },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: w.name,
      description: w.description,
      image: [abs(w.image.src), abs(w.photo.src)],
      url: abs(`/catalog/vikna/${w.slug}/`),
      category: materialOf(w.material).label,
      brand: { "@type": "Brand", name: w.brand },
      additionalProperty: w.specs.map((s) => ({ "@type": "PropertyValue", name: s.key, value: s.value })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    },
  ];

  return (
    <>
      {ld.map((d, i) => (
        <JsonLd key={i} data={d} />
      ))}
      <section className="bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 pt-5 pb-8">
          <nav className="text-sm text-ink/50 mb-4 uppercase tracking-[0.12em]" aria-label="Хлібні крихти">
            <Link href="/" className="hover:text-ink">Головна</Link> /{" "}
            <Link href="/catalog/vikna/" className="hover:text-ink">Вікна</Link> /{" "}
            <span className="text-ink font-semibold">{w.name}</span>
          </nav>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-stretch">
            <Reveal>
              <div className="h-full min-h-[420px] bg-gradient-to-b from-white to-[#dfe3e7] p-6 grid place-items-center">
                <img src={w.image.src} width={w.image.width} height={w.image.height} alt={`${w.name} — профільна система ${w.brand}`} fetchPriority="high" className="max-h-[600px] w-auto max-w-full object-contain" />
              </div>
            </Reveal>

            <Reveal delay={0.15} className="flex flex-col gap-5 justify-center">
              <div className="flex flex-wrap items-center gap-2">
                <span className={` px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${toneClass[badge.tone]}`}>
                  {materialOf(w.material).label}
                </span>
                <span className="text-sm uppercase tracking-[0.14em] text-ink/50">{w.system}</span>
              </div>
              <h1 className="font-display !text-[44px] sm:!text-[76px] !leading-[0.92] uppercase">{w.name}</h1>
              <p className="text-xl text-ink/80">{w.tagline}</p>
              <p className="text-ink/65 max-w-xl">{w.description}</p>

              <ul className="flex flex-wrap gap-2">
                {w.highlights.map((h) => (
                  <li key={h} className="px-4 py-1.5 border border-ink/20 text-sm font-medium">{h}</li>
                ))}
              </ul>

              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-ink/50 mb-2">Застосування</p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1">
                  {w.usage.map((u) => (
                    <li key={u} className="flex gap-2 text-ink/80"><span className="mt-2 w-2 h-2 bg-brand-orange shrink-0" />{u}</li>
                  ))}
                </ul>
              </div>

              {w.colors.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-ink/50 mb-2">Кольори та оздоблення</p>
                  <p className="text-ink/80">{w.colors.join(" · ")}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#order" className="bg-brand-orange text-white hover:bg-ink transition-colors px-9 py-4 uppercase font-semibold tracking-wider">
                  Замовити
                </a>
                <Link href="/calc/" className="border-2 border-ink hover:bg-ink hover:text-white transition-colors px-9 py-4 uppercase font-semibold tracking-wider">
                  Розрахувати вартість
                </Link>
              </div>
              <p className="text-sm text-ink/50">Точну ціну менеджер розрахує під розмір, склопакет, фурнітуру та колір.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {facts.length >= 3 && (
        <section className="bg-white pb-10 px-4 sm:px-6">
          <dl className="max-w-[1320px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/15 border border-ink/15">
            {facts.map((f) => (
              <div key={f.key} className="bg-white p-5 sm:p-6">
                <dd className="font-display text-2xl sm:text-4xl uppercase leading-tight text-ink">{f.value}</dd>
                <dt className="mt-2 text-xs uppercase tracking-[0.12em] text-ink/50">{f.key}</dt>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className="bg-ink text-white py-12 px-4 sm:px-6">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="font-display text-5xl sm:text-6xl uppercase mb-6">Характеристики</h2>
          <dl className="grid md:grid-cols-2 gap-x-14">
            {w.specs.map((s, i) => (
              <Reveal key={s.key} delay={(i % 2) * 0.08} y={20}>
                <div className="flex justify-between items-baseline gap-4 py-4 border-t border-white/20">
                  <dt className="text-white/60">{s.key}</dt>
                  <dd className="text-right font-display text-xl">{s.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-6">
          <Reveal className="relative min-h-[320px] overflow-hidden bg-paper">
            <img src={w.photo.src} alt={`${w.name} — приклад застосування`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="bg-paper p-6 flex flex-col">
            <h2 className="font-display text-3xl uppercase">Переріз профілю</h2>
            <div className="mt-4 flex-1 bg-white p-4 grid place-items-center">
              <img src={w.scheme.src} alt={`Переріз профільної системи ${w.name}`} loading="lazy" className="max-h-[420px] w-auto max-w-full object-contain" />
            </div>
          </Reveal>
        </div>
      </section>

      {featureList.length > 0 && (
        <section className="bg-white pb-12 px-4 sm:px-6">
          <div className="max-w-[1320px] mx-auto">
            <h2 className="font-display text-5xl sm:text-6xl uppercase mb-6">Особливості системи</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {featureList.map((f, i) => (
                <Reveal key={f.title} delay={(i % 2) * 0.08} y={24} className="bg-paper p-6 flex gap-5">
                  <span className="font-display text-4xl text-brand-orange leading-none shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-2xl uppercase leading-tight">{f.title}</h3>
                    <p className="mt-2 text-ink/70">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white pb-12 px-4 sm:px-6">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="font-display text-5xl sm:text-6xl uppercase mb-6">Як замовити</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/15 border border-ink/15">
            {steps.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08} y={20} className="bg-white p-6">
                <p className="font-display text-5xl text-brand-orange leading-none">0{i + 1}</p>
                <h3 className="font-display text-2xl uppercase mt-4">{t}</h3>
                <p className="mt-2 text-ink/65">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-12 px-4 sm:px-6">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="font-display text-5xl sm:text-6xl uppercase mb-6">Що впливає на вартість</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/15 border border-ink/15">
            {priceFactors.map(([t, d]) => (
              <li key={t} className="bg-white p-6">
                <h3 className="font-display text-2xl uppercase">{t}</h3>
                <p className="mt-1 text-ink/65">{d}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-ink/60">Точну ціну менеджер розрахує після безкоштовного заміру — або скористайтеся <Link href="/calc/" className="text-brand-orange font-semibold underline underline-offset-4">калькулятором</Link>.</p>
        </div>
      </section>

      <section className="bg-white pb-12 px-4 sm:px-6">
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-[1fr_2fr] gap-8">
          <h2 className="font-display text-5xl sm:text-6xl uppercase leading-[0.92]">Питання про {w.name}</h2>
          <div className="border-t border-ink/15">
            {faq.map(([q, a]) => (
              <details key={q} className="group border-b border-ink/15">
                <summary className="cursor-pointer flex items-center justify-between gap-6 py-4 font-display text-xl sm:text-2xl uppercase leading-tight">
                  {q}
                  <span className="shrink-0 w-9 h-9 bg-ink text-white grid place-items-center text-xl transition-transform duration-300 group-open:rotate-45 group-open:bg-brand-orange">+</span>
                </summary>
                <p className="pb-5 pr-12 text-ink/70">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <OrderForm product={w.name.startsWith(w.brand) ? w.name : `${w.brand} ${w.name}`} colors={w.colors} />

      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="font-display text-5xl sm:text-6xl uppercase mb-6">Інші системи</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.1}>
                <Link href={`/catalog/vikna/${r.slug}/`} className="group block bg-paper overflow-hidden">
                  <div className="aspect-[4/5] bg-gradient-to-b from-white to-[#dfe3e7] m-3 grid place-items-center overflow-hidden">
                    <img src={r.image.src} alt={r.name} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <p className="px-5 pb-5 pt-2 font-display text-2xl uppercase">{r.name}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
