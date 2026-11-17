import check from "@/app/assets/images/icons/check.svg";
import vorneImage from "@/app/assets/images/products/facades/vorne-logo.png";
import macoImage from "@/app/assets/images/products/facades/maco-logo.png";
import siegeniaImage from "@/app/assets/images/products/facades/siegenia-logo.png";
import macabg from "@/app/assets/images/hero/maca-bg.jpg";
import siegeniabg from "@/app/assets/images/hero/siegenia-bg.jpg";
import vornebg from "@/app/assets/images/hero/vorne-bg.jpg";
import SectionContact from "@/app/components/SectionContact";
import facadesHero from "@/app/assets/images/hero/furnitura.jpg"

export async function generateMetadata({ params }) {
  const furnitureData = {
    vorne: {
      title: "VORNE – фурнітура для металопластикових вікон",
      description:
        "Сучасна фурнітура VORNE – висока якість, надійність і доступна ціна. Ідеально підходить для житлових і комерційних приміщень.",
      keywords: [
        "VORNE",
        "фурнітура VORNE",
        "металопластикові вікна",
        "поворотно-відкидна фурнітура",
        "антикорозійне покриття"
      ],
    },
    maco: {
      title: "MACO – австрійська фурнітура преміум якості",
      description:
        "Фурнітура MACO з Австрії – інноваційність, надійність і безпека. Підходить для металопластикових та дерев’яних вікон.",
      keywords: [
        "MACO",
        "австрійська фурнітура",
        "фурнітура для вікон",
        "поворотно-відкидна",
        "розсувна фурнітура"
      ],
    },
    siegenia: {
      title: "SIEGENIA – німецька фурнітура преміум класу",
      description:
        "Фурнітура SIEGENIA – високотехнологічні рішення з Німеччини. Підвищена безпека, енергоефективність та довговічність.",
      keywords: [
        "SIEGENIA",
        "німецька фурнітура",
        "преміальна фурнітура",
        "захист від злому",
        "мікровентиляція"
      ],
    },
  };

  const item = furnitureData[params.facades] || {};

  return {
    title: "Фурнітура для вікон",
    description: item.description || "Великий вибір якісної віконної фурнітури.",
    keywords: item.keywords?.join(", ") || "фурнітура, вікна, двері",

  };
}
  

const furnitureData = {
  vorne: {
    title: "VORNE",
    name: "Фурнітура VORNE",
    image: vorneImage,
    description: `VORNE - це сучасна фурнітура для металопластикових вікон, що відзначається високою якістю, надійністю та оптимальною ціною. Продукція відповідає європейським стандартам, забезпечує плавність роботи та довговічність. Ідеальний вибір для тих, хто цінує комфорт і безпеку.`,
    specs: [
      { key: "Тип фурнітури", value: "Металопластикова" },
      { key: "Виробник", value: "Туреччина" },
      { key: "Вид відкривання", value: "Поворотно-відкидний, Поворотний" },
      { key: "Матеріал", value: "Сталь з антикорозійним покриттям" },
    ],
    usage: `Ідеально підходить для житлових та комерційних приміщень з помірним кліматом. Відмінний варіант для заміни старої фурнітури.`,
    advantages: [
      "Висока надійність і довговічність",
      "Антикорозійне покриття деталей",
      "Плавна робота механізмів",
    ],
    hero: vornebg
  },

  maco: {
    title: "MACO",
    name: "Фурнітура MACO",
    image: macoImage,
    description: `MACO - австрійський бренд, який вже десятиліттями задає стандарти якості у світі віконної фурнітури. Надійність, інноваційність і максимальна функціональність - все це робить MACO одним з лідерів на ринку.`,
    specs: [
      { key: "Тип фурнітури", value: "Металопластикова / Дерев'яна" },
      { key: "Виробник", value: "Австрія" },
      {
        key: "Вид відкривання",
        value: "Поворотно-відкидний, Поворотний, Розсувний",
      },
      {
        key: "Особливості",
        value: "Система безпеки проти випадкового відкривання",
      },
    ],
    usage: `Рекомендується для новобудов та приміщень з підвищеними вимогами до безпеки та зручності. Підходить для різних типів вікон.`,
    advantages: [
      "Передові системи безпеки",
      "Широкий вибір варіантів відкривання",
      "Інноваційні рішення для комфорту",
    ],
    hero: macabg
  },

  siegenia: {
    title: "SIEGENIA",
    name: "Фурнітура SIEGENIA",
    image: siegeniaImage,
    description: `SIEGENIA - німецька фурнітура преміум-класу, що пропонує широкий спектр рішень для будь-яких типів вікон. Її відмінність - високотехнологічні механізми, довговічність та інновації.`,
    specs: [
      { key: "Тип фурнітури", value: "Металопластикова / Алюмінієва" },
      { key: "Виробник", value: "Німеччина" },
      {
        key: "Вид відкривання",
        value: "Поворотно-відкидний, Поворотний, Відсувний",
      },
      { key: "Функції", value: "Мікровентиляція, Захист від злому" },
    ],
    usage: `Оптимальна для преміум класу житла та бізнес-центрів. Підвищена безпека та енергозбереження.`,
    advantages: [
      "Підвищений рівень безпеки",
      "Висока енергоефективність",
      "Преміальна якість з Німеччини",
    ],
    hero: siegeniabg
  },
};

export async function generateStaticParams() {
  return Object.keys(furnitureData).map((key) => ({ facades: key }));
}

export default function FurniturePage({ params }) {
  const data = furnitureData[params.facades];

  return (
    <>
      {/* Банер */}
      <section className="relative h-[600px] flex items-center justify-center bg-black overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                  backgroundImage: `url(${data.hero.src})`,
                }}
              />
        <h1 className="relative text-white text-4xl z-10">{data.title}</h1>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <img
            src={data.image.src}
            alt={data.name}
            width={350}
            height={250}
            className="rounded-md mix-blend-multiply"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-[48px] mb-6">{data.name}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {data.description}
          </p>
        </div>
      </section>

      <section className="px-6 py-10 max-w-6xl mx-auto ">
        <h3 className="text-2xl  mb-6 text-center">
          Технічні характеристики
        </h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 border border-gray-300">Параметр</th>
              <th className="p-4 border border-gray-300">Значення</th>
            </tr>
          </thead>
          <tbody>
            {data.specs.map((spec, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="p-4 border border-gray-300">{spec.key}</td>
                <td className="p-4 border border-gray-300">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Переваги */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.advantages.map((adv, i) => (
            <div
              key={i}
              className="flex bg-[#F8F7F0] py-[60px] px-[40px] gap-5 rounded-md"
            >
              <div className="p-2 rounded-full bg-[#D8F422] w-9 h-9 flex items-center justify-center">
                <img src={check.src} alt="Перевага" width={22} height={22} />
              </div>
              <p className="text-[16px] md:text-[18px]">{adv}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="my-10">
        <div className="bg-[#F8F7F0] px-6 py-12 max-w-6xl mx-auto rounded-2xl">
          <p className="text-center text-4xl">Особливості застосування</p>
            <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          {data.usage}
        </p>
        </div>
      </section>
      {/* Порівняння брендів */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h3 className="text-3xl mb-8 text-center">
          Порівняння фурнітури
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4 border border-gray-300">Характеристика</th>
                {Object.keys(furnitureData).map((key) => (
                  <th key={key} className="p-4 border border-gray-300">
                    {furnitureData[key].title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                "Тип фурнітури",
                "Вид відкривання",
                "Особливості / Матеріал",
              ].map((param, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="p-4 border border-gray-300 font-semibold">
                    {param}
                  </td>
                  {Object.keys(furnitureData).map((key) => {
                    let val = "";
                    switch (param) {
                      case "Тип фурнітури":
                        val =
                          furnitureData[key].specs.find(
                            (s) => s.key === "Тип фурнітури"
                          )?.value || "-";
                        break;
                      case "Вид відкривання":
                        val =
                          furnitureData[key].specs.find(
                            (s) => s.key === "Вид відкривання"
                          )?.value || "-";
                        break;
                      case "Особливості / Матеріал":
                        // об'єднуємо кілька полів для цієї колонки
                        const material = furnitureData[key].specs.find(
                          (s) => s.key === "Матеріал"
                        )?.value;
                        const features = furnitureData[key].specs.find(
                          (s) => s.key === "Особливості"
                        )?.value;
                        const functions = furnitureData[key].specs.find(
                          (s) => s.key === "Функції"
                        )?.value;
                        val =
                          [material, features, functions]
                            .filter(Boolean)
                            .join(", ") || "-";
                        break;
                      default:
                        val = "-";
                    }
                    return (
                      <td key={key} className="p-4 border border-gray-300">
                        {val}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    
    </>
  );
}
