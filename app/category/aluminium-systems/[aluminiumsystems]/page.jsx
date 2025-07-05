import Image from "next/image";
import check from "@/app/assets/images/icons/check.svg";
import a1 from "@/app/assets/images/products/aluminium/a11.jpg";
import a2 from "@/app/assets/images/products/aluminium/a21.jpg";
import a3 from "@/app/assets/images/products/aluminium/a31.jpg";
import a4 from "@/app/assets/images/products/aluminium/a41.jpg";
import a5 from "@/app/assets/images/products/aluminium/a51.jpg";


import SectionContact from "@/app/components/SectionContact";

const aluminumData = {
  "office-partitions": {
    title: "Офісні та міжкімнатні перегородження",
    name: "Системи алюмінієвих перегородок",
    description: `Сучасні алюмінієві системи для створення кабінетів, зонування приміщень — конференц-залів, переговорних, кухонь, серверних і торгових залів. Можливість вибору профільних систем, типів відкривання і матеріалів заповнення.`,
    specs: [
      { key: "Профільні системи", value: "ТАЛІСМАН, KURTOGLU, Aldox, Зеніт" },
      { key: "Тип відкривання", value: "орні, розсувні" },
      { key: "Заповнення", value: "скло, склопакет, композитні панелі, сендвіч-панелі, ДСП" },
      { key: "Рівень шумоізоляції", value: "до 40 дБ" },
      { key: "Фарбування", value: "за каталогом RAL (будь-який колір)" },
    ],
    img: a1
  },

  "sliding-cold": {
    title: "Розсувні системи без термомосту",
    name: "Холодний алюмінієвий профіль",
    description: `Ідеальні для неопалюваних приміщень, коли важливий комфорт простору і функціональність, а теплозбереження не в пріоритеті.`,
    specs: [
      { key: "Профільні системи", value: "Зеніт STAR 2000, Balkan 330, Balkan 337" },
      { key: "Висота конструкцій", value: "до 3 м" },
      { key: "Ширина стулки", value: "до 2 м" },
      { key: "Тип відкривання", value: "паралельно-зсувний" },
      { key: "Рама", value: "однорейкова, двохрейкова, трьохрельсова" },
      { key: "Заповнення", value: "скло, склопакет" },
      { key: "Ущільнення", value: "подвійне фетрове" },
    ],
    img: a2
  },

  "sliding-thermal": {
    title: "Розсувні системи з термомостом",
    name: "Теплий алюмінієвий профіль",
    description: `Стильно, сучасно і тепло! Зберігають комфортну температуру і додають естетики будь-якому приміщенню — навіть з великою площею скління.`,
    specs: [
      { key: "Профільні системи", value: "Reynaers, SCHUCO, Balkan, Alumil, ETEM" },
      { key: "Висота конструкцій", value: "до 3 м" },
      { key: "Ширина стулки", value: "до 3 м" },
      { key: "Тип відкривання", value: "підйомно-зсувний" },
      { key: "Рама", value: "однорейкова, двохрейкова, трьохрельсова" },
      { key: "Заповнення", value: "склопакет, сендвіч-панель" },
    ],
    img: a3
  },

  "facade-glazing": {
    title: "Стійково-ригельне скління фасадів",
    name: "Алюмінієві фасадні системи",
    description: `Надійні, міцні та довговічні системи, що витримують будь-які температурні і погодні умови. Відповідають найвищим європейським стандартам якості.`,
    specs: [
      { key: "Профільні системи", value: "Reynaers, SCHUCO, Balkan, Alutech, Зеніт, Талісман, Rescara" },
      { key: "Заповнення", value: "скло, склопакет, сендвіч-панель" },
      { key: "Ущільнювачі", value: "гумові з EPDM (Німеччина)" },
      { key: "Фарбування", value: "будь-який колір за каталогом RAL" },
      { key: "Декорування", value: "під структуру дерева" },
      { key: "Інтеграція", value: "вікна і двері з різними типами відкривання" },
    ],
    img: a4
  },

  "entrance-groups": {
    title: "Вхідні групи",
    name: "Алюмінієві фасадні системи для входів",
    description: `Витривалі і стильні системи для організації вхідних груп, що відповідають європейським стандартам та забезпечують довговічність експлуатації.`,
    specs: [
      { key: "Профільні системи", value: "Reynaers, SCHUCO, Balkan, Alutech, Зеніт, Талісман, Rescara" },
      { key: "Заповнення", value: "скло, склопакет, сендвіч-панель" },
      { key: "Ущільнювачі", value: "гумові з EPDM (Німеччина)" },
      { key: "Фарбування", value: "будь-який колір за каталогом RAL" },
      { key: "Декорування", value: "під структуру дерева" },
      { key: "Інтеграція", value: "вікна і двері з різними типами відкривання" },
    ],
    img: a5
  },
};

export async function generateStaticParams() {
  return Object.keys(aluminumData).map((key) => ({ aluminiumsystems: key }));
}

export default function AluminumPage({ params }) {
  const data = aluminumData[params.aluminiumsystems];

  const benefits = [
    "Гладка поверхня, що легко очищається",
    "Система профілів екологічна, підлягає вторинній переробці",
    "Скошений фальц рами і стулки, що забезпечує водовідведення",
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
      <Image
  src={data.img}
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
      <p className="text-[#555555] text-lg leading-relaxed max-w-[500px]">
        {data.description}
      </p>
    </div>
  </div>

  {/* Specs Table */}
  <div className="mt-12 overflow-x-auto rounded-md border border-gray-200">
    <h3 className="text-xl  text-center mb-4">Технічні характеристики</h3>
    <table className="w-full min-w-[320px] text-left text-base border-collapse">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-5 py-3 text-gray-700 border-b border-gray-300">Параметр</th>
          <th className="px-5 py-3 text-gray-700 border-b border-gray-300">Значення</th>
        </tr>
      </thead>
      <tbody>
        {data.specs.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            <td className="px-5 py-3 border-b border-gray-200 text-gray-800">{row.key}</td>
            <td className="px-5 py-3 border-b border-gray-200 text-gray-800">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
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
                <Image src={check} alt="Перевага" width={22} height={22} />
              </div>
              <p className="text-[16px] md:text-[18px]">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <SectionContact />
    </>
  );
}