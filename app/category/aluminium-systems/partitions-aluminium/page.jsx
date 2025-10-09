import check from "@/app/assets/images/icons/check.svg";
import a5 from "@/app/assets/images/products/aluminium/a51.jpg";
import {
  FaBuilding,
  FaUtensils,
  FaHome,
  FaUniversity,
  FaIndustry,
  FaSpa,
} from "react-icons/fa";
import j1 from  "@/app/assets/images/products/aluminium/aliminium (1).jpg"
import j2 from  "@/app/assets/images/products/aluminium/aliminium (2).jpg"
import j3 from  "@/app/assets/images/products/aluminium/aliminium (3).jpg"
import j4 from  "@/app/assets/images/products/aluminium/aliminium (4).jpg"
import j5 from  "@/app/assets/images/products/aluminium/aliminium (5).jpg"
import j6 from  "@/app/assets/images/products/aluminium/aliminium (6).jpg"
import Link from "next/link";

export const metadata = {
  title: "Алюмінієві перегородки – продаж та монтаж",
  description:
    "Алюмінієві перегородки — практичне рішення для зонування приміщень. Міцність, естетика, шумоізоляція до 40 дБ. Монтаж у Києві та по Україні.",
  keywords:
    "алюмінієві перегородки, офісні перегородки, скляні системи, Reynaers, SCHUCO, алюмінієві конструкції",
};

export default function AluminumPartitionsPage() {
  const data = {
    title: "Алюмінієві перегородки",
    name: "Алюмінієві перегородки",
    description: [
      `Алюмінієві перегородки — це сучасне та практичне рішення для зонування приміщень. Такі конструкції відрізняються високою міцністю, довговічністю, стійкістю до вологи та перепадів температур, а також дозволяють перекривати великі отвори.`,
      `Вони активно застосовуються в офісах, торгових центрах, житлових квартирах і котеджах. Завдяки акуратному дизайну й можливості фарбування у будь-який колір RAL алюмінієві перегородки гармонійно вписуються в будь-який інтер’єр.`,
    ],
    specs: [
      {
        key: "Профільні системи",
        value: "Reynaers, SCHUCO, Balkan, Alutech, Зеніт, Талісман, Rescara",
      },
      { key: "Заповнення", value: "скло, склопакет, сендвіч-панель" },
      { key: "Ущільнювачі", value: "гумові з EPDM (Німеччина)" },
      { key: "Фарбування", value: "будь-який колір за каталогом RAL" },
      { key: "Декорування", value: "під структуру дерева" },
      {
        key: "Інтеграція",
        value: "вікна і двері з різними типами відкривання",
      },
    ],
    img: a5,
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
      title: "Міцність і довговічність",
      desc: "Каркас конструкцій виготовлений зі сплаву алюмінію, що забезпечує високу міцність і стійкість до механічних навантажень.",
    },
    {
      title: "Стійкість до негативного впливу навколишнього середовища",
      desc: "Алюмінієвий профіль анодують або фарбують порошковою фарбою, тому він не піддається корозії.",
    },
    {
      title: "Високий рівень екологічності",
      desc: "Матеріал не окислюється, не виділяє шкідливих речовин і абсолютно безпечний для здоров’я.",
    },
    {
      title: "Відмінна звукоізоляція",
      desc: "У комбінації зі звукоізолюючим склопакетом перегородки забезпечують високий рівень шумоізоляції.",
    },
    {
      title: "Безпека",
      desc: "Перегородки виготовляються із загартованого скла — воно надзвичайно міцне і безпечне при розбитті.",
    },
    {
      title: "Максимум природного освітлення",
      desc: "Конструкція не перешкоджає проникненню світла, забезпечуючи легке та світле зонування приміщення.",
    },
  ];

  const priceList = [
    "Ціни на монтаж алюмінієвих перегородок залежать від обсягу проекту та особливостей установки.",
    "Вартість нижча, якщо замовляєте виготовлення конструкцій у нашій компанії.",
    "Точна ціна озвучується після розрахунку кошторису.",
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
          Алюмінієві перегородки для будь-яких приміщень
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
          Алюмінієві перегородки — універсальне рішення для поділу простору без
          втрати світла та комфорту.
        </p>
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

      {/* Оформлення скла */}
      <section className="px-6 py-16 bg-[#F8F7F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-5">
            Оформлення скла алюмінієвих перегородок під будь-який дизайн
            інтер'єру
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            У нас можна замовити виготовлення алюмінієвих перегородок з прозорим
            або матовим склом, із нанесенням малюнка лазерним гравіюванням.
            Можливе фарбування профілю під дерево, графіт чи будь-який колір
            RAL, а також тонування скла під бронзу чи графіт.
          </p>
        </div>
      </section>

      {/* Виробництво */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-5">
          Виробництво алюмінієвих перегородок
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Власне високотехнологічне виробництво, співпраця з виробниками
          надійних профільних систем, систем скління і фурнітури, а також великий
          досвід роботи дозволяють нам реалізовувати проекти будь-якої складності
          за розумними цінами.
        </p>
      </section>

      {/* Ціна */}
      <section className="px-6 py-16 bg-[#F8F7F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Ціна на установку алюмінієвих перегородок
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
