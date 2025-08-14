import Image from "next/image";
import check from "@/app/assets/images/icons/check.svg";
import Ukraine from "@/app/assets/images/products/decor/Ukraine.svg";
import SectionContact from "@/app/components/SectionContact";
import g1 from "@/app/assets/images/products/gates/gates-sectional.png";
import g2 from "@/app/assets/images/products/gates/protective-rolls.jpg";
import g3 from "@/app/assets/images/products/gates/roll-gates.jpg";
import RolletCalc from "@/app/components/RolletCalc";
import GateCalculator from "@/app/components/GateCalculator";


const windowsData = {
  "gates-sectional": {
    title: "GANT",
    name: "Гаражні ворота",
    image: g1,
    description:
      "Гаражні секційні ворота — це розділене на частини полотно, яке при відкритті підіймається вгору та ховається під стелею. Їм не потрібен додатковий простір перед будівлею або всередині.",
    specs: [
      { key: "Тип воріт", value: "Секційні" },
      { key: "Конструктивні переваги", value: "Захист пружин, пластини, антиіржові елементи" },
      { key: "Панелі", value: "EUROGANT: гладка, центральний паз, фільонка" },
      { key: "Поверхні", value: "під дерево / Stucco" },
      { key: "Кольори", value: "білий, срібло, коричневий, дуб, венге, антрацит, графіт" },
      { key: "Переваги", value: "Європейські комплектуючі, 25 000 циклів, сендвіч-панелі" },
    ],
  },

  "protective-rolls": {
    title: "GANT",
    name: "Захисні ролети на вікна",
    image: g2,
    description:
      "Сучасні захисні ролети ідеально поєднуються з охоронними системами. Надійні, функціональні, і при цьому естетичні — чудовий вибір для житлових та комерційних приміщень.",
    specs: [
      { key: "Матеріал", value: "Алюміній" },
      { key: "Механізм", value: "Пружинно-інерційний, ручний, електропривід" },
      { key: "Типи монтажу", value: "накладний, вбудований (всередину / назовні)" },
      { key: "Профілі", value: "RH77M, екструдований профіль" },
      { key: "Переваги", value: "енергозбереження, захист від шуму, сонця, злому" },
    ],
  },

  "roll-gates": {
    title: "GANT",
    name: "Ролетні ворота",
    image: g3,
    description:
      "Ролетні ворота — мінімалістичний, стильний і компактний спосіб захистити гараж, вхід чи промислову зону. Зручні, міцні та легко монтуються навіть у складних умовах.",
    specs: [
      { key: "Тип воріт", value: "Ролетні" },
      { key: "Тип управління", value: "ручне, автоматичне, інерційне" },
      { key: "Конструкція", value: "Короб, направляючі, пружини, шків, кінцеві профілі" },
      { key: "Монтаж", value: "накладний / вбудований" },
      { key: "Переваги", value: "економія простору, антивандальність, шумоізоляція" },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(windowsData).map((key) => ({ gatesandrolls: key }));
}

export default function WindowPage({ params }) {
  const data = windowsData[params.gatesandrolls];

  return (
    <>
      <section className="relative h-[400px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" />
        <h1 className="relative text-white text-4xl z-10">{data.title}</h1>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <img src={data.image.src} alt={data.name} width={700} height={500} className="rounded-md"/>
          </div>
          <div className="flex-1">
            <h2 className="text-[50px] mb-4">{data.name}</h2>
            <p className="text-[#555555] text-[18px]">{data.description}</p>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto rounded-md  max-w-full">
  <h3 className="text-xl my-4 font-semibold text-center">Технічні характеристики</h3>
  <table className="w-full min-w-[320px] text-left text-base">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-5 py-3 text-gray-700 font-semibold border-b border-gray-300">
          Параметр
        </th>
        <th className="px-5 py-3 text-gray-700 font-semibold border-b border-gray-300">
          Значення
        </th>
      </tr>
    </thead>
    <tbody>
      {data.specs.map((row, i) => (
        <tr
          key={i}
          className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
        >
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["гладка поверхня, що легко очищається", "система профілів екологічна, підлягає вторинній переробці", "скошений фальц рами і тулки, що забезпечує довідведення"].map((title, i) => (
            <div key={i} className="flex bg-[#F8F7F0] py-[60px] px-[40px] gap-5 rounded-md">
              <div className="p-2 rounded-full bg-[#D8F422] w-9 h-9 flex items-center justify-center">
                <img src={check.src} alt="Перевага" width={22} height={22} />
              </div>
              <p className="text-[16px] md:text-[18px]">{title}</p>
            </div>
          ))}
        </div>
      </section>
  
      {params.gatesandrolls === "protective-rolls" || params.gatesandrolls === "roll-gates" ? (
        <RolletCalc />
      ) : null}

      {params.gatesandrolls === "gates-sectional" ? (
        <GateCalculator />
      ) : null}
    </>
  );
}
