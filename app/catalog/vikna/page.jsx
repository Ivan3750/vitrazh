import Link from "next/link";
import CatalogGrid from "../CatalogGrid";
import JsonLd from "../../components/site/JsonLd";
import { Reveal, SplitHeading } from "../../components/site/motion";
import { windows, materialOf } from "../data/windows";
import { site, abs } from "../../data/site";

const URL_PATH = "/catalog/vikna/";

export const metadata = {
  title: "Каталог вікон у Києві: ПВХ та алюмінієві профільні системи | Вітраж",
  description:
    "Каталог вікон: ПВХ-профілі Aluplast і VIKNALAND, алюмінієві системи Aluprof і KMD, фасадні рішення. Характеристики, порівняння, фільтри та замовлення із безкоштовним заміром у Києві.",
  alternates: { canonical: URL_PATH },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    siteName: site.name,
    title: "Каталог вікон: ПВХ та алюмінієві профільні системи",
    description: "10 профільних систем із характеристиками, фото та замовленням. Безкоштовний замір у Києві.",
    url: URL_PATH,
    images: [{ url: site.ogImage, width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Яка різниця між ПВХ та алюмінієвими системами?",
    a: "ПВХ-профілі теплі, доступні за ціною й підходять для більшості квартир і будинків. Алюмінієві системи міцніші, дозволяють робити великі та важкі стулки, тонкі видимі профілі, розсувні двері й фасадне скління, тому їх обирають для великих і комерційних об'єктів.",
  },
  {
    q: "Що означає Uf і яке значення краще?",
    a: "Uf — коефіцієнт теплопередачі профілю. Чим він менший, тим менше тепла проходить крізь профіль. У каталозі ПВХ-системи мають Uf від 1,1 до 1,65 Вт/м²К: найтепліша Neo 76 MD, базова LIDER 58 — найекономніша за ціною.",
  },
  {
    q: "Скільки камер у профілі потрібно?",
    a: "Для типових квартир, балконів і лоджій зазвичай достатньо трьох камер. Для приватних будинків та енергоефективного будівництва обирають п'ять-шість камер і глибину 70–76 мм — вони краще утримують тепло й тишу.",
  },
  {
    q: "Які кольори та оздоблення доступні?",
    a: "ПВХ-системи виготовляють у білому, коричневому та антрацитовому кольорах, а також із декоративними плівками (ламінацією). Для окремих систем доступне оздоблення під алюміній і дерево. Точний перелік для вашого проєкту уточнить менеджер.",
  },
  {
    q: "Скільки коштують вікна?",
    a: "Вартість залежить від розміру й конфігурації конструкції, профільної системи, склопакета, фурнітури, кольору та монтажу. Для попередньої суми скористайтеся калькулятором, а точний розрахунок менеджер підготує після безкоштовного заміру.",
  },
  {
    q: "Ви робите замір і монтаж?",
    a: "Так. Виїзд на замір безкоштовний, вироби виготовляються на заводі, а монтаж виконують сертифіковані спеціалісти в узгоджені терміни. Після встановлення діє гарантійне та післягарантійне обслуговування.",
  },
];

const steps = [
  ["Оберіть систему", "Скористайтеся фільтрами за типом, виробником і глибиною або порівняйте системи в таблиці."],
  ["Залиште заявку", "Натисніть «Замовити» на картці або зателефонуйте — домовимося про зручний час заміру."],
  ["Безкоштовний замір", "Фахівець приїде, зніме розміри та підкаже оптимальну конфігурацію й склопакет."],
  ["Виготовлення та монтаж", "Виготовляємо на заводі, доставляємо та встановлюємо в узгоджені терміни."],
];

export default function WindowsCatalogPage() {
  const catalogLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Головна", item: abs("/") },
        { "@type": "ListItem", position: 2, name: "Каталог" },
        { "@type": "ListItem", position: 3, name: "Вікна", item: abs(URL_PATH) },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Каталог вікон",
      url: abs(URL_PATH),
      inLanguage: "uk-UA",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: windows.length,
        itemListElement: windows.map((w, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: abs(`${URL_PATH}${w.slug}/`),
          name: w.name,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      {catalogLd.map((d, i) => (
        <JsonLd key={i} data={d} />
      ))}

      <section className="bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 pt-5 pb-1">
          <nav className="text-sm text-ink/50 mb-4 uppercase tracking-[0.12em]" aria-label="Хлібні крихти">
            <Link href="/" className="hover:text-ink">Головна</Link> /{" "}
            <span>Каталог</span> / <span className="text-ink font-semibold">Вікна</span>
          </nav>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-end">
            <SplitHeading
              as="h1"
              text="Каталог вікон"
              classes={{ вікон: "text-brand-orange" }}
              className="font-display !text-[44px] sm:!text-[76px] lg:!text-[96px] uppercase !leading-[0.9]"
            />
            <Reveal delay={0.3}>
              <p className="text-lg text-ink/65 max-w-md">
                Оберіть профільну систему під ваші задачі: від практичних ПВХ-рішень для квартир до
                алюмінієвих і фасадних систем для великих об'єктів.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CatalogGrid />

      {/* Порівняльна таблиця всіх систем */}
      <section className="bg-paper py-12 px-4 sm:px-6">
        <div className="max-w-[1320px] mx-auto">
          <SplitHeading text="Порівняння систем" className="font-display text-5xl sm:text-6xl uppercase leading-[0.92]" />
          <Reveal className="mt-6 overflow-x-auto bg-white border border-ink/15">
            <table className="w-full min-w-[820px] text-left">
              <thead>
                <tr>
                  {["Система", "Тип", "Профіль", "Ключові параметри", "Застосування"].map((h) => (
                    <th key={h} className="px-5 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {windows.map((w) => (
                  <tr key={w.slug} className="border-t border-ink/10 align-top">
                    <td className="px-5 py-4">
                      <Link href={`${URL_PATH}${w.slug}/`} className="font-display text-xl uppercase hover:text-brand-orange">
                        {w.name}
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-ink/75">{materialOf(w.material).label}</td>
                    <td className="px-5 py-4 text-ink/75">{w.brand}</td>
                    <td className="px-5 py-4 text-ink/75">{w.cardSpecs.map((s) => `${s.key}: ${s.value}`).join(" · ")}</td>
                    <td className="px-5 py-4 text-ink/75">{w.usage.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Як замовити */}
      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-[1320px] mx-auto">
          <SplitHeading text="Як замовити вікна" className="font-display text-5xl sm:text-6xl uppercase leading-[0.92]" />
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/15 border border-ink/15">
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

      {/* SEO-текст */}
      <section className="bg-paper py-12 px-4 sm:px-6">
        <Reveal className="max-w-[1320px] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-14">
          <h2 className="font-display text-4xl sm:text-5xl uppercase leading-[0.95]">Вікна в Києві та області: як обрати систему</h2>
          <div className="text-ink/70 space-y-4 text-lg">
            <p>
              Вікно складається з профілю, склопакета та фурнітури, і кожен елемент впливає на тепло, тишу та
              безпеку в оселі. У каталозі «Вітраж» ви знайдете ПВХ-профілі Aluplast і VIKNALAND, алюмінієві системи
              Aluprof і KMD та фасадні рішення для великих скляних площин.
            </p>
            <p>
              Для квартир, балконів і лоджій зазвичай вистачає базової системи з трьома камерами. Для приватних
              будинків і нового будівництва краще обирати профілі глибиною 70–76 мм з п'ятьма-шістьма камерами:
              вони мають нижчий коефіцієнт теплопередачі та приймають товстіші склопакети. Алюміній — вибір для
              великих стулок, розсувних дверей, вітражів і фасадів.
            </p>
            <p>
              Не знаєте, яка система підійде саме вам? Скористайтеся{" "}
              <Link href="/calc/" className="text-brand-orange font-semibold underline underline-offset-4">калькулятором вартості</Link>,
              ознайомтеся з{" "}
              <Link href="/faq/" className="text-brand-orange font-semibold underline underline-offset-4">відповідями на часті запитання</Link>{" "}
              або{" "}
              <Link href="/contact/" className="text-brand-orange font-semibold underline underline-offset-4">зв'яжіться з нами</Link>{" "}
              — підкажемо рішення та організуємо безкоштовний замір.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-[1fr_2fr] gap-8">
          <SplitHeading text="Питання про вікна" className="font-display text-5xl sm:text-6xl uppercase leading-[0.92]" />
          <div className="border-t border-ink/15">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-ink/15">
                <summary className="cursor-pointer flex items-center justify-between gap-6 py-4 font-display text-xl sm:text-2xl uppercase leading-tight">
                  {f.q}
                  <span className="shrink-0 w-9 h-9 bg-ink text-white grid place-items-center text-xl transition-transform duration-300 group-open:rotate-45 group-open:bg-brand-orange">+</span>
                </summary>
                <p className="pb-5 pr-12 text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
