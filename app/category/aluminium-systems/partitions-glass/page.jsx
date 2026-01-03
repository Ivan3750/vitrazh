import check from "@/app/assets/images/icons/check.svg";
import g1 from "@/app/assets/images/products/aluminium/glass (1).jpg";
import g2 from "@/app/assets/images/products/aluminium/glass (2).jpg";
import g3 from "@/app/assets/images/products/aluminium/glass (3).jpg";
import g4 from "@/app/assets/images/products/aluminium/glass (4).jpg";
import g5 from "@/app/assets/images/products/aluminium/glass (5).jpg";
import g6 from "@/app/assets/images/products/aluminium/glass (6).jpg";
import gGraphite from "@/app/assets/images/products/aluminium/glass/xgrafit.jpg";
import gBronze from "@/app/assets/images/products/aluminium/glass/xbronza.jpg";
import gFloat from "@/app/assets/images/products/aluminium/glass/xclasic-float.jpg";
import gDiamond from "@/app/assets/images/products/aluminium/glass/diamont.jpg";
import gTriplex from "@/app/assets/images/products/aluminium/glass/tripleks.jpg";
import gCryzet from "@/app/assets/images/products/aluminium/glass/kryzet.jpg";
import gGraphiteSatyn from "@/app/assets/images/products/aluminium/glass/grafit-satyn.jpg";
import gBronzeSatyn from "@/app/assets/images/products/aluminium/glass/bronza-satyn.jpg";
import gMatte from "@/app/assets/images/products/aluminium/glass/slassic-matte.jpg";
import gArtistic from "@/app/assets/images/products/aluminium/glass/artistic-matting.jpg";
import gFlutes from "@/app/assets/images/products/aluminium/glass/glass-flutes.jpg";
import gArmored from "@/app/assets/images/products/aluminium/glass/armored.jpg";
import p from "@/app/assets/images/products/aluminium/glass.jpg";
import {
  FaBuilding,
  FaUtensils,
  FaHome,
  FaUniversity,
  FaIndustry,
  FaSpa,
} from "react-icons/fa";
import b from "@/app/assets/images/hero/glass-a-bg.jpg"

export const metadata = {
  title: "Скляні перегородки – продаж та монтаж",
  description:
    "Скляні перегородки - сучасне рішення для зонування приміщень. Міцність, безпека, максимум світла. Виготовлення та монтаж у Києві та по Україні.",
  keywords:
    "скляні перегородки, суцільноскляні системи, офісні перегородки, перегородки зі скла, монтаж скляних перегородок",
};

export default function GlassPartitionsPage() {
  const data = {
    title: "Скляні перегородки",
    name: "Скляні перегородки",
    description: [
      `Скляна перегородка – це сучасна, універсальна і багатофункціональна конструкція, яка дозволяє створювати відкритий простір, зберігаючи при цьому індивідуальність кожної зони.`,
      `Вони активно використовуються в офісах, торгових центрах, салонах краси, житлових приміщеннях і навіть у ресторанах. Скляні перегородки чудово поєднують естетику, функціональність і надійність.`,
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

  const featureList = [
    {
      title: "Надійність і довговічність",
      desc: "Сучасні суцільноскляні перегородки витримують значні навантаження, адже при їх виготовленні використовують високоміцне загартоване скло, яке буде служити довгі роки.",
    },
    {
      title: "Простота в експлуатації і догляді",
      desc: "Для очищення достатньо звичайного засобу для миття вікон і простої ганчірки або щітки.",
    },
    {
      title: "Максимум природного світла",
      desc: "Скляні перегородки не перешкоджають проникненню світла, дозволяючи зберегти відчуття простору та легкості.",
    },
    {
      title: "Різноманіття конструкцій",
      desc: "Ми реалізуємо будь-які дизайнерські рішення завдяки сучасним профільним системам і технологіям у сфері скління.",
    },
    {
      title: "Безпека",
      desc: "Загартоване скло - надзвичайно міцне і безпечне: при розбитті воно не утворює гострих уламків.",
    },
    {
      title: "Сучасне рішення",
      desc: "Скло - екологічний, довговічний матеріал, який чудово вписується в будь-який інтер’єр і не піддається корозії чи плісняві.",
    },
  ];

  const benefits = [
    "Індивідуальні рішення будь-якої складності",
    "Власне виробництво і монтаж",
    "Доступна ціна на ексклюзивні проекти",
  ];

  const priceList = [
    "Ціни на монтаж скляних перегородок залежать від обсягу проекту, умов і особливостей установки конструкцій на об’єкті.",
    "Вартість нижча, якщо замовляєте виготовлення конструкцій у нашій компанії.",
    "Точна вартість встановлення суцільноскляних перегородок озвучується після розрахунку кошторису.",
  ];

  return (
    <>
      {/* Hero Section */}
<section className="relative h-[600px] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${b.src})`,
          }}
        />
        <h1 className="relative text-white text-4xl font-bold z-10">
              {data.title}
        </h1>
      </section>

      {/* Content Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-start justify-between">
          <div className="w-full md:max-w-[320px] flex-shrink-0">
            <img
              src={data.img.src}
              alt={data.name}
              className="rounded-md object-cover w-full h-[350px] md:h-[400px]"
            />
          </div>
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
          Скляні перегородки для будь-яких приміщень
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
        <p className="text-center text-gray-600 mt-10 max-w-3xl mx-auto leading-relaxed">
          Скляні перегородки - ідеальне рішення для створення відкритого простору
          без втрати освітлення та комфорту.
        </p>
      </section>
{/* Варіанти скла */}
<section className="px-6 py-16 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-semibold mb-10">
      Варіанти скла
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[
        { title: "Графіт", img: gGraphite },
        { title: "Бронза", img: gBronze },
        { title: "Класичне флоат", img: gFloat },
        { title: 'Надпрозоре "Діамант"', img: gDiamond },
        { title: "Триплекс", img: gTriplex },
        { title: "Скло Кризет", img: gCryzet },
        { title: "Графіт Сатин", img: gGraphiteSatyn },
        { title: "Бронза Сатин", img: gBronzeSatyn },
        { title: "Класичне матове", img: gMatte },
        { title: "Художнє матування", img: gArtistic },
        { title: "Скло Флутс", img: gFlutes },
        { title: "Армоване", img: gArmored },
      ].map((item, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-[#F8F7F0]"
        >
          <img
            src={item.img.src}
            alt={item.title}
            className="w-full h-[200px] md:h-[220px] object-cover"
          />
          <h5 className="text-lg font-medium text-gray-800 py-4">
            {item.title}
          </h5>
        </div>
      ))}
    </div>
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

      {/* Виробництво */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-5">
          Виробництво скляних перегородок
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Власне високотехнологічне виробництво скляних перегородок, співпраця з
          виробниками надійних і сучасних профільних систем, систем скління і
          фурнітури, а також великий досвід роботи дозволяє нам втілювати ідеї
          клієнтів за розумними цінами.
        </p>
      </section>

      {/* Ціна */}
      <section className="px-6 py-16 bg-[#F8F7F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Ціна на установку скляних перегородок
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
          {[g1, g2, g3, g4, g5, g6].map((img, index) => (
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
