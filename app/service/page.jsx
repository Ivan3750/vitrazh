import PageHero from "@/app/components/site/PageHero";
import React from "react";
import b from "@/app/assets/images-webp/hero/bg-service.webp"


const prices = {
  visits: [
    {
      description:
        "Виїзд техніка, діагностика, кошторис по м Київ (з 9.00 до 18.00 в робочі дні)",
      price: "1000 грн",
    },
    {
      description:
        "Виїзд техніка та діагностика по м Київ (у вихідні та святкові дні, а так само після 18.00 в робочі дні)",
      price: "1500 грн",
    },
    {
      description:
        "Виїзд техніка та діагностика за м Київ (з 9.00 до 18.00 в робочі дні, до 50км)",
      price: "2000 грн",
    },
  ],

  windowRepair: [
    {
      description: "Регулювання металопластикового вікна (проста)",
      price: "200 грн",
    },
    { description: "Мастило вузлів фурнітури", price: "100 грн" },
    {
      description: "Заміна ущільнювача (із матеріалом)",
      price: "100 грн / м.пог",
    },
    {
      description: "Заміна віконної ручки (з матеріалом)",
      price: "від 500 грн",
    },
    {
      description: "Ремонт вікна із заміною фурнітури (без матеріалу)",
      price: "від 2000 грн",
    },
    {
      description:
        "Заміна склопакета (глухе вікно, без матеріалу, S ≤ 1.0 кв.м.)",
      price: "500 грн*",
    },
    {
      description: "Заміна склопакета (стулка, без матеріалу, S ≤ 1.0 кв.м.)",




      price: "1000 грн*",
    },
    { description: "Складне регулювання стулки", price: "1000 грн*" },
    { description: "Встановлення додаткової середньої петлі", price: "800 грн" },






    { description: "Установка відливу (без матеріалу)", price: "250 грн*" },
    { description: "Установка козирка (без матеріалу)", price: "600 грн*" },
    { description: "Установка підвіконня (без матеріалу)", price: "500 грн*" },

    {
      description: "Герметизація зовнішнього монтажного шва герметиком",
      price: "200 грн / м.пог",
    },
    {
      description: "Герметизація внутрішнього монтажного шва герметиком",
      price: "300 грн / м.пог",
    },
  ],

  doorRepair: [
    {
      description: "Встановлення доводчика (без матеріалу)",
      price: "300 грн / стулка",
    },
    {
      description: "Регулювання вхідних дверей ПВХ або Алюміній",
      price: "1500 грн / стулка",
    },
    {
      description: "Заміна замка (без матеріалу)",
      price: "1000 грн / шт",
    },
    {
      description: "Заміна фурнітури (без матеріалу)",
      price: "1000 грн / стулка",
    },
    {
      description: "Заміна циліндра (без матеріалу)",
      price: "500 грн / шт",
    },
    {
      description:
        "Заміна або переустановлення склопакета на двері (без матеріалу, S ≤ 1.0 кв.м.)",
      price: "1000 грн* / м²",
    },
    {
      description: "Заміна ущільнювача (із матеріалом)",
      price: "100 грн / м.пог",
    },
    {
      description: "Заміна петель (без матеріалу)",
      price: "2000 грн / стулка",
    },
  ],
};

export const metadata = {
  title: "Прайс на ремонт вікон та дверей у Києві - Вітраж",
  description:
    "Актуальні ціни на ремонт пластикових вікон, дверей, склопакетів, ущільнювачів, виїзд майстра у Києві та області. Надійність та гарантія!",
  keywords: [
    "ремонт вікон Київ",
    "ціни на ремонт вікон",
    "виїзд майстра",
    "заміна ущільнювача",
    "регулювання вікон",
    "сервіс вікон",
    "ремонт склопакетів",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "/service/",
    title: "Ремонт вікон Київ - Актуальні ціни | Вітраж",
    description:
      "Дивіться актуальний прайс на ремонт вікон та дверей у Києві. Виїзд майстра, заміна ущільнювача, склопакетів, ручок - професійно та доступно!",
    siteName: "VitraZH",
    images: [
      {
        url: "https://vitrazh.com.ua/images/og-price.jpg",
        width: 1200,
        height: 630,
        alt: "Ціни на ремонт вікон у Києві - Вітраж",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ціни на ремонт вікон - Вітраж",
    description:
      "Перевірте ціни на ремонт вікон у Києві. Надійні майстри, доступні тарифи, оперативний виїзд.",
    images: ["https://vitrazh.com.ua/images/og-price.jpg"],
  },
  alternates: {
    canonical: "/service/",
  },
};


const Rows = ({ title, items }) => (
  <section className="mb-16">
    <h2 className="font-display text-5xl sm:text-7xl uppercase leading-[0.95] mb-8">{title}</h2>
    <ul className="border-t border-ink/15">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-8 py-5 border-b border-ink/15"
        >
          <span className="text-base md:text-lg max-w-3xl">{item.description}</span>
          <span className="font-display text-2xl sm:text-3xl text-brand-orange whitespace-nowrap">{item.price}</span>
        </li>
      ))}
    </ul>
  </section>
);

const PriceList = () => {
  return (
    <>
      <PageHero image={b}>Ремонт і Обслуговування</PageHero>
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-8">
        <section className="mb-16">
          <h2 className="font-display text-5xl sm:text-7xl uppercase leading-[0.95] mb-8">Виїзд на адресу</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {prices.visits.map((item, idx) => (
              <div key={idx} className="bg-paper p-7 flex flex-col justify-between gap-8">
                <p className="text-lg text-balance">{item.description}</p>
                <p className="font-display text-5xl text-brand-orange">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        <Rows title="Ремонт віконної групи" items={prices.windowRepair} />
        <Rows title="Ремонт вхідної групи" items={prices.doorRepair} />

        <p className="text-sm text-ink/55 max-w-3xl">
          * Складна форма (арка, трапеція, еркер, трикутник або площа &gt;1м²) - націнка +50%.
          <br />
          Вартість робіт може змінюватися залежно від умов та уточнюється майстром після огляду.
        </p>
      </div>
    </>
  );
};

export default PriceList;
