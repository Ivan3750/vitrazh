import check from "@/app/assets/images/icons/check.svg";
import p1 from "@/app/assets/images/products/aluminium/a41.jpg";
import {
  FaBuilding,
  FaUtensils,
  FaHome,
  FaUniversity,
  FaIndustry,
  FaSpa,
} from "react-icons/fa";
import j1 from "@/app/assets/images/products/aluminium/plactic (1).jpg";
import j2 from "@/app/assets/images/products/aluminium/plactic (2).jpg";
import j3 from "@/app/assets/images/products/aluminium/plactic (3).jpg";
import j4 from "@/app/assets/images/products/aluminium/plactic (4).jpg";
import j5 from "@/app/assets/images/products/aluminium/plactic (5).jpg";
import j6 from "@/app/assets/images/products/aluminium/plactic (6).jpg";
import p from "@/app/assets/images/products/aluminium/plastic.jpg";


export const metadata = {
  title: "Пластикові перегородки – продаж та монтаж",
  description:
    "Пластикові перегородки — надійне, практичне і доступне рішення для зонування простору. Висока шумоізоляція, довговічність, зручність у догляді. Монтаж по всій Україні.",
  keywords:
    "пластикові перегородки, металопластикові перегородки, офісні перегородки, пластикові конструкції, монтаж перегородок",
};

export default function PlasticPartitionsPage() {
  const data = {
    title: "Пластикові перегородки",
    name: "Пластикові перегородки",
    description: [
      `Пластикові перегородки — перевірена альтернатива іншим матеріалам. Вони прості у монтажі, мають високу шумоізоляцію та міцність, а головне — доступну ціну.`,
      `Такі перегородки використовуються для зонування офісів, створення окремих приміщень, додаткового теплозахисту при вході або вітражних рішеннях. Пластик не схильний до корозії, простий у догляді й може поєднуватися зі склопакетами для ще кращої тепло- і звукоізоляції.`,
    ],
    img: p,
  };

  const items = [
    { title: "Для офісів і бізнес центрів", icon: <FaBuilding /> },
    { title: "Для ресторанів, барів та кафе", icon: <FaUtensils /> },
    { title: "Для будинку, котеджу та квартири", icon: <FaHome /> },
    { title: "Для банків і фінансових установ", icon: <FaUniversity /> },
    { title: "Для виробничих підприємств", icon: <FaIndustry /> },
    { title: "Для салонів краси та медичних центрів", icon: <FaSpa /> },
  ];

  const benefits = [
    "Індивідуальні рішення будь-якої складності",
    "Власне виробництво і монтаж",
    "Доступна ціна на ексклюзивні проекти",
  ];

  const featureList = [
    {
      title: "Надійність і довговічність",
      desc: "Усередині будь-якої пластикової конструкції встановлений металевий каркас, завдяки чому вона є міцною, не деформується і не має «парусності» при відкритті чи закритті дверей.",
    },
    {
      title: "Простота в експлуатації і догляді",
      desc: "Для очищення поверхні достатньо звичайного засобу для миття вікон та м’якої губки — пластик не вимагає спеціального догляду.",
    },
    {
      title: "Доступна ціна",
      desc: "Пластикові перегородки значно дешевші за алюмінієві або скляні аналоги, зберігаючи при цьому чудові експлуатаційні властивості.",
    },
  ];

  const priceList = [
    "Ціни на монтаж пластикових перегородок залежать від обсягу проекту, умов і особливостей установки конструкцій на об’єкті.",
    "Ціна значно нижча, якщо ви замовляєте виготовлення конструкцій у нашій компанії.",
    "Точна вартість установки пластикових перегородок озвучується при розрахунку кошторису.",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" />
        <h1 className="relative text-white text-3xl md:text-4xl z-10 text-center">
          {data.title}
        </h1>
      </section>

      {/* Content Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-start justify-between">
          {/* Image Block */}
          <div className="w-full md:max-w-[320px] flex-shrink-0">
            <img
              src={data.img.src}
              alt={data.name}
              className="rounded-md object-cover w-full h-[350px] md:h-[400px]"
            />
          </div>

          {/* Text Block */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl mb-4">{data.name}</h2>
            {data.description.map((p, i) => (
              <p
                key={i}
                className="text-[#555] text-lg leading-relaxed mb-5 last:mb-0"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Пластикові перегородки для будь-яких приміщень
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start bg-[#F8F7F0] py-8 px-6 gap-4 rounded-md"
            >
              <div className="p-2 rounded-full bg-[#D8F422] w-10 h-10 flex items-center justify-center shrink-0 text-gray-800 text-xl">
                {item.icon}
              </div>
              <p className="text-[16px] md:text-[18px] font-medium text-gray-800">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Характерні переваги */}
      <section className="bg-white px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Характерні переваги
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureList.map((item, i) => (
            <li key={i} className="bg-[#F8F7F0] p-6 rounded-md shadow-sm">
              <p className="font-semibold text-lg mb-2">{item.title}</p>
              <p className="text-gray-700">{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Дизайнерське оформлення */}
      <section className="px-6 py-16 bg-[#F8F7F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-5">
            Дизайнерське оформлення пластикових перегородок
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Пластикові перегородки можуть бути не тільки білими! Ви можете
            обрати ламінований профіль під дерево, графіт або будь-який колір за
            палітрою RAL. Також можливе тонування скла під бронзу чи графіт,
            матування або нанесення декоративного малюнка. Додатково можна
            підібрати форму й колір ручок, петель та іншої фурнітури.
          </p>
        </div>
      </section>

      {/* Виробництво */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-5">
          Виробництво пластикових перегородок
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Ми маємо власне високотехнологічне виробництво і співпрацюємо з
          провідними виробниками профільних систем, фурнітури та склопакетів.
          Наш досвід дозволяє реалізовувати проєкти будь-якої складності за
          розумними цінами.
        </p>
      </section>

      {/* Ціна */}
      <section className="px-6 py-16 bg-[#F8F7F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Ціна на установку пластикових перегородок
          </h2>
          <ul className="space-y-6 text-left">
            {priceList.map((text, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-white p-4 rounded-md shadow-sm"
              >
                <span className="bg-[#D8F422] text-gray-800 font-bold w-8 h-8 flex items-center justify-center rounded-full shrink-0">
                  {i + 1}
                </span>
                <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Загальні переваги */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((title, i) => (
            <div
              key={i}
              className="flex bg-[#F8F7F0] py-[40px] px-[30px] gap-5 rounded-md shadow-sm"
            >
              <div className="p-2 rounded-full bg-[#D8F422] w-9 h-9 flex items-center justify-center">
                <img src={check.src} alt="Перевага" width={22} height={22} />
              </div>
              <p className="text-[16px] md:text-[18px]">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Фото робіт */}
      <section className="px-6 py-12 mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl mb-10 text-center font-semibold">
          Фото робіт
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[j1, j2, j3, j4, j5, j6].map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={img.src}
                alt={`Фото робіт ${index + 1}`}
                className="w-full h-[250px] md:h-[300px] object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
