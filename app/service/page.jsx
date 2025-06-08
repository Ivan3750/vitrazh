import React from "react";

const prices = {
  visits: [
    {
      description:
        "Виїзд техніка, діагностика, кошторис по м Київ (з 9.00 до 18.00 в робочі дні)",
      price: "500 грн",
    },
    {
      description:
        "Виїзд техніка та діагностика по м Київ (у вихідні та святкові дні, а так само після 18.00 в робочі дні)",
      price: "1000 грн",
    },
    {
      description:
        "Виїзд техніка та діагностика за м Київ (з 9.00 до 18.00 в робочі дні, до 50км)",
      price: "1000 грн",
    },
  ],
  windowRepair: [
    {
      description: "Регулювання металопластикового вікна (проста)",
      price: "100 грн",
    },
    { description: "Мастило вузлів фурнітури", price: "50 грн" },
    {
      description: "Заміна ущільнювача (із матеріалом)",
      price: "60 грн / м.пог",
    },
    {
      description: "Заміна віконної ручки (з матеріалом)",
      price: "від 400 грн",
    },
    {
      description: "Ремонт вікна із заміною фурнітури (без матеріалу)",
      price: "від 800 грн",
    },
    {
      description:
        "Заміна склопакета (глухе вікно, без матеріалу, S ≤ 1.0 кв.м.)",
      price: "500 грн*",
    },
    {
      description: "Заміна склопакета (стулка, без матеріалу, S ≤ 1.0 кв.м.)",
      price: "800 грн*",
    },
    {
      description: "Складне регулювання / ремонт фурнітури",
      price: "1000 грн*",
    },
    {
      description: "Установка металевого обмежувача відкриття",
      price: "800 грн",
    },
    { description: "Установка балконної клямки", price: "від 500 грн" },
    { description: "Встановлення додаткової петелі", price: "800 грн" },
    { description: "Москітна сітка Anwis (внутрішня)", price: "100 грн" },
    { description: "Москітна сітка Sinax (зовнішня)", price: "800 грн" },
    { description: "Установка відливу (без матеріалу)", price: "250 грн*" },
    { description: "Установка козирка (без матеріалу)", price: "600 грн*" },
    { description: "Установка підвіконня (без матеріалу)", price: "400 грн*" },
    { description: "Герметизація підвіконня", price: "50 грн / м.пог" },
    {
      description: "Герметизація зовнішнього монтажного шва",
      price: "180 грн / м.пог",
    },
  ],

  
};

export const metadata = {
  title: "Прайс на ремонт вікон та дверей у Києві — Вітраж",
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
    url: "https://vitrazh.com.ua/service",
    title: "Ремонт вікон Київ — Актуальні ціни | Вітраж",
    description:
      "Дивіться актуальний прайс на ремонт вікон та дверей у Києві. Виїзд майстра, заміна ущільнювача, склопакетів, ручок — професійно та доступно!",
    siteName: "VitraZH",
    images: [
      {
        url: "https://vitrazh.com.ua/images/og-price.jpg",
        width: 1200,
        height: 630,
        alt: "Ціни на ремонт вікон у Києві — Вітраж",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ціни на ремонт вікон — Вітраж",
    description:
      "Перевірте ціни на ремонт вікон у Києві. Надійні майстри, доступні тарифи, оперативний виїзд.",
    images: ["https://vitrazh.com.ua/images/og-price.jpg"],
  },
  alternates: {
    canonical: "https://vitrazh.com.ua/service",
  },
};


const PriceList = () => {
  return (
    <>
      <section className="relative h-[600px] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          /* style={{
               backgroundImage: `url(${b.src})`,
             }} */
        />
        <h1 className="relative text-white text-4xl font-bold z-10">
          Ремонт і Обслуговування
        </h1>
      </section>

      <div className="mc py-[100] px-[20px]">
        <section className="mb-12">
          <h2 className="text-[54px] mb-4  captalize">
            Виїзд на адресу
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prices.visits.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8F7F0] p-5 "
              >
                <p className="text-lg text-[#555] font-medium mb-2 text-balance">{item.description}</p>
                <p className="text-xl font-bold text-[#bed62f]">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-[54px] mb-4  captalize">
            Ремонт віконної групи
          </h2>
          <ul className="space-y-4">
            {prices.windowRepair.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-start border-b border-gray-300 pb-3"
              >
                <span className="text-base md:text-lg font-medium">
                  {item.description}
                </span>
                <span className="text-[#bed62f] font-bold text-lg whitespace-nowrap">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <p className="text-sm text-gray-500 mt-10">
          * Складна форма (арка, трапеція, еркер, трикутник або площа &gt;1м²) —
          націнка +50%.
          <br />
          Вартість робіт може змінюватися залежно від умов та уточнюється
          майстром після огляду.
        </p>
      </div>
    </>
  );
};

export default PriceList;
