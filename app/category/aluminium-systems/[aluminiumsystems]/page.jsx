import check from "@/app/assets/images/icons/check.svg";
import a1 from "@/app/assets/images/products/aluminium/a11.jpg";
import a2 from "@/app/assets/images/products/aluminium/a21.jpg";
import a3 from "@/app/assets/images/products/aluminium/a31.jpg";
import a4 from "@/app/assets/images/products/aluminium/a41.jpg";
import a5 from "@/app/assets/images/products/aluminium/a51.jpg";
import {
  FaBuilding,
  FaUtensils,
  FaHome,
  FaStore,
  FaUniversity,
  FaIndustry,
  FaSpa,
} from "react-icons/fa";
import SectionContact from "@/app/components/SectionContact";

export async function generateMetadata({ params }) {
  const seoData = {
    "entrance-groups": {
      title: "Вхідні групи з алюмінієвих фасадних систем",
      description:
        "Стильні та міцні вхідні групи з алюмінію. Висока довговічність, різні варіанти заповнення та декорування під дерево.",
      keywords: [
        "вхідні групи",
        "алюмінієві двері",
        "фасадні системи",
        "алюміній під дерево",
        "Reynaers",
        "SCHUCO",
      ],
      image: "/images/og/entrance-groups.jpg",
    },
    "partitions-plastic": {
      title: "Вхідні групи з алюмінієвих фасадних систем",
      description:
        "Стильні та міцні вхідні групи з алюмінію. Висока довговічність, різні варіанти заповнення та декорування під дерево.",
      keywords: [
        "вхідні групи",
        "алюмінієві двері",
        "фасадні системи",
        "алюміній під дерево",
        "Reynaers",
        "SCHUCO",
      ],
      image: "/images/og/entrance-groups.jpg",
    },
    "partitions-aluminium": {
      title: "Вхідні групи з алюмінієвих фасадних систем",
      description:
        "Стильні та міцні вхідні групи з алюмінію. Висока довговічність, різні варіанти заповнення та декорування під дерево.",
      keywords: [
        "вхідні групи",
        "алюмінієві двері",
        "фасадні системи",
        "алюміній під дерево",
        "Reynaers",
        "SCHUCO",
      ],
      image: "/images/og/entrance-groups.jpg",
    },
    "partitions-glass": {
      title: "Вхідні групи з алюмінієвих фасадних систем",
      description:
        "Стильні та міцні вхідні групи з алюмінію. Висока довговічність, різні варіанти заповнення та декорування під дерево.",
      keywords: [
        "вхідні групи",
        "алюмінієві двері",
        "фасадні системи",
        "алюміній під дерево",
        "Reynaers",
        "SCHUCO",
      ],
      image: "/images/og/entrance-groups.jpg",
    },
  };

  const item = seoData[params.aluminiumsystems] || {};

  return {
    title: item.title || "Офісні перегородки – продаж та монтаж",
    description:
      item.description ||
      "Великий вибір алюмінієвих систем для офісів, балконів, фасадів та вхідних груп.",
    keywords:
      item.keywords?.join(", ") || "алюміній, системи, перегородки, фасад",
  };
}

const aluminumData = {
  "partitions-plastic": {
    title: "partitions",
    name: "Пластикові перегородки",
    description: [
      `Пластикові перегородки – перевірена альтернатива іншим аналогам. Пластик досить простий у застосуванні і монтажі і набагато дешевше алюмінієвих або скляних перегородок. Пластикові перегородки володіють підвищеною шумоізоляцією та міцністю.`,
      `Пластикові перегородки використовуються для зонування простору офісу, для створення окремого приміщення-«акваріума», для створення додаткового повітряного прошарку між входом і приміщенням, що значно зменшує тепловтрати. До того ж пластик простий в плані догляду, не схильний до корозії і іржі. Перегородки пластикові можна використовувати в комплекті зі склопакетами для підвищення рівня шумо- і теплоізоляції.`,
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
  },
  "partitions-aluminium": {
    title: "Алюмінієві перегородки",
    name: "Алюмінієві перегородки",
    description: [`Алюмінієві перегородки в світі затребувані як практичний варіант зонування приміщення. Перегородки з алюмінієвого профілю відрізняються своєю високою міцністю, довговічністю, стійкістю до перепадів температур і вологи, а також здатністю перекривати отвори великих розмірів. Перегородки з алюмінію легкі в експлуатації, мають хорошу звукоізоляцію до 40дБ.
`,`
Алюмінієві перегородки в Києві затребувані як в офісних, так і в житлових приміщеннях і дозволяють розширювати приміщення, підвищувати комфортність і додавати ексклюзивність в інтер’єр.`],
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
  },
  "partitions-glass": {
    title: "Скляні перегородки",
    name: "Скляні перегородки ",
    description: [`Скляна перегородка – це сучасна, універсальна і багатофункціональна конструкція, яка істотно змінює планування приміщення, одночасно зберігаючи природне освітлення і підкреслюючи існуючий дизайн кімнати.
`,`
Скляні перегородки активно використовуються в приватних будинках і квартирах, офісах і торгових центрах. Це чудова сучасна альтернатива металевим, пластиковим аналогам для зонування офісного або житлового простору. Профіль може бути забарвлений в будь-який колір.`],
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
  },
};

export async function generateStaticParams() {
  return Object.keys(aluminumData).map((key) => ({ aluminiumsystems: key }));
}

export default function AluminumPage({ params }) {
  const data = aluminumData[params.aluminiumsystems];
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" />
        <h1 className="relative text-white text-3xl md:text-4xl  z-10 text-center">
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
              width={500}
              height={350}
              className="rounded-md object-cover w-full h-[350px] md:h-[400px]"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>

          {/* Text Block */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl  mb-4 text-balance">
              {data.name}
            </h2>
            <p className="text-[#555555] text-lg leading-relaxed max-w-[500px] text-balance w-full">
              {data.description[0]}
            </p>
            <p className="text-[#555555] mt-5 text-lg leading-relaxed max-w-[500px] text-balance w-full">
              {data.description[1]}
            </p>
          </div>
        </div>

        {/* Specs Table */}
        <div className="mt-12 overflow-x-auto rounded-md border border-gray-200">
          <h3 className="text-xl  text-center mb-4">Технічні характеристики</h3>
          <table className="w-full min-w-[320px] text-left text-base border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-5 py-3 text-gray-700 border-b border-gray-300">
                  Параметр
                </th>
                <th className="px-5 py-3 text-gray-700 border-b border-gray-300">
                  Значення
                </th>
              </tr>
            </thead>
            <tbody>
              {data.specs.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-5 py-3 border-b border-gray-200 text-gray-800">
                    {row.key}
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 text-gray-800">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>


    <section className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Сучасні скляні перегородки для будь-яких цілей
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start bg-[#F8F7F0] py-8 px-6 gap-4 "
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
        Скляні перегородки — це універсальне рішення для зонування простору без
        втрати світла та комфорту. Ми створюємо конструкції для будь-яких
        потреб — від стильних офісів до затишних домівок, поєднуючи
        естетику, міцність і функціональність.
      </p>
    </section>
      {/* Benefits Section */}
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

 
    </>
  );
}
