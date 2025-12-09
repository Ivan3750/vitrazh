import check from "@/app/assets/images/icons/check.svg";
import wds5s from "@/app/assets/images/products/windows/wds-5s-t.png";
import wds6s from "@/app/assets/images/products/windows/wds-6s-t.png";
import wds76md from "@/app/assets/images/products/windows/wds-76MD-t.png";
import wds76ad from "@/app/assets/images/products/windows/wds-76AD-t.png";
import SectionContact from "@/app/components/SectionContact";
import wdsHero from "@/app/assets/images/hero/wds.jpg";
import wdsC5s from "@/app/assets/images/products/windows/5s.png"
import wdsCAD from "@/app/assets/images/products/windows/ad.png";
import wdsCMD from "@/app/assets/images/products/windows/md.png";
import FreeSize  from "@/app/components/FreeSize";




export async function generateMetadata({ params }) {
  const data = windowsData[params.window];

  if (!data) {
    return {
      title: "Вікна — WDS",
      description: "Оберіть сучасні енергоефективні вікна для вашого дому чи офісу.",
    };
  }

  const metaTitle = `${data.name} | ${data.title} — Купити в Україні`;
  const metaDescription = data.description.slice(0, 160);

  
  return {
    title: metaTitle,
    description: metaDescription,
    
  };
}


const windowsData = {
"5s": {
  title: "WDS",
  name: "WDS 5S",
  image: wds5s,
  description: `WDS 5S — це універсальна п’ятикамерна профільна система, яка поєднує міцність, теплоізоляцію та сучасний дизайн. Монтажна ширина 60 мм і максимальна товщина склопакета 32 мм забезпечують комфортний мікроклімат у квартирах і будинках.`,
  specs: [
    { key: "Кількість камер", value: "5" },
    { key: "Монтажна глибина", value: "60 мм" },
    { key: "Теплоізоляція", value: "0,80–0,87 м²·K/Вт (з енергоефективним склопакетом)" },
    { key: "Шумоізоляція", value: "до 40 дБ" },
    { key: "Склопакет", value: "до 32 мм" },
    { key: "Призначення", value: "квартири з центральним опаленням, балкони, офісні перегородки" },
    { key: "Ламінація", value: "8 стандартних відтінків + кольори під замовлення" }
  ],
  hero: wdsHero,
  construction: wdsC5s,
  extraPoints: [
    {
      title: "Профіль та конструкція",
      text: "П’ятикамерна система з монтажною шириною 60 мм. Висока жорсткість профілю забезпечує довговічність і стабільну роботу фурнітури."
    },
    {
      title: "Тепло- та шумоізоляція",
      text: "Коефіцієнт опору теплопередачі — 0,80–0,87 м²·K/Вт при використанні енергоефективного склопакета. Шумоізоляція до 40 дБ."
    },
    {
      title: "Максимальна товщина склопакета",
      text: "До 32 мм, що дозволяє встановлювати двокамерні енергоефективні склопакети."
    },
    {
      title: "Переваги дизайну",
      text: "Гладка поверхня профілю легко очищується. Продумана геометрія рам і стулок додає привабливий зовнішній вигляд."
    },
    {
      title: "Ламінація та кольори",
      text: "Доступні 8 стандартних кольорів і будь-який відтінок під замовлення, включаючи імітацію натурального дерева."
    },
    {
      title: "Призначення",
      text: "Ідеально підходить для квартир з центральним опаленням, балконів, лоджій та офісних приміщень."
    },
    {
      title: "Доступна ціна",
      text: "Оптимальне співвідношення вартості та якості при високих експлуатаційних показниках."
    }
  ]
}
,
"6s": {
  title: "WDS",
  name: "WDS 6S",
  image: wds6s,
  description: `WDS 6S — це сучасна шестикамерна профільна система з покращеною теплоізоляцією та підвищеною жорсткістю конструкції. Монтажна ширина 70 мм і можливість встановлення склопакетів товщиною до 40 мм роблять її оптимальним рішенням для приватних будинків і енергоефективних квартир.`,
  specs: [
    { key: "Кількість камер", value: "6" },
    { key: "Монтажна глибина", value: "70 мм" },
    { key: "Теплоізоляція", value: "0,92–1,00 м²·K/Вт (з енергоефективним склопакетом)" },
    { key: "Шумоізоляція", value: "до 45 дБ" },
    { key: "Склопакет", value: "до 40 мм" },
    { key: "Призначення", value: "приватні будинки, енергоефективні квартири, котеджі" },
    { key: "Ламінація", value: "10 стандартних відтінків + індивідуальні кольори" }
  ],
  hero: wdsHero,
  construction: wdsC5s,
  extraPoints: [
    {
      title: "Профіль та конструкція",
      text: "Шестикамерний профіль з монтажною шириною 70 мм забезпечує високу жорсткість, стабільність та довговічність конструкції."
    },
    {
      title: "Тепло- та шумоізоляція",
      text: "Підвищений опір теплопередачі 0,92–1,00 м²·K/Вт та шумоізоляція до 45 дБ роблять систему ідеальною для енергоефективного житла."
    },
    {
      title: "Максимальна товщина склопакета",
      text: "Підтримка товщини склопакета до 40 мм, у тому числі мультифункціональних та енергозберігаючих рішень."
    },
    {
      title: "Переваги дизайну",
      text: "Сучасний прямолінійний дизайн, гладка поверхня профілю та естетичні пропорції стулок і рам."
    },
    {
      title: "Ламінація та кольори",
      text: "10 стандартних кольорів, включно з текстурами дерева, а також можливість замовлення індивідуальних відтінків."
    },
    {
      title: "Призначення",
      text: "Рекомендовано для приватних будинків, котеджів та квартир з високими вимогами до теплоізоляції."
    },
    {
      title: "Висока енергоефективність",
      text: "Оптимальне рішення для проектів, де важлива мінімальна тепловтрата та максимальний комфорт."
    }
  ]
}
,


"76ad": {
  title: "WDS",
  name: "WDS 76AD",
  image: wds76ad,
  description: `WDS 76AD — це п’ятикамерна профільна система з монтажною глибиною 76 мм та подвійним контуром ущільнення, яка забезпечує високий рівень тепло- та шумоізоляції. Вікна пропускають більше світла завдяки оптимізованій конструкції, а ширина склопакета до 48 мм дозволяє використовувати енергоефективні двокамерні скла.`,
  specs: [
    { key: "Кількість камер", value: "5" },
    { key: "Монтажна глибина", value: "76 мм" },
    { key: "Теплоізоляція", value: "до Uw=0,79 W/m²·K" },
    { key: "Шумоізоляція", value: "до Rw=38 дБ" },
    { key: "Склопакет", value: "до 48 мм" },
    { key: "Кількість контурів ущільнення", value: "2" }
  ],
  hero: wdsHero,
  construction: wdsCAD,
  extraPoints: [
    {
      title: "Профіль та конструкція",
      text: "П’ятикамерна система з монтажною глибиною 76 мм, що забезпечує міцність та стабільність конструкції."
    },
    {
      title: "Теплоізоляція",
      text: "До Uw=0,79 W/m²·K завдяки подвійним контурам ущільнення та якісним камерам профілю."
    },
    {
      title: "Шумоізоляція",
      text: "Звукоізоляція до 38 дБ, що забезпечує комфортне перебування у приміщенні."
    },
    {
      title: "Призначення",
      text: "Підходить для квартир, балконів, офісних та комерційних приміщень."
    },
    {
      title: "Дизайн та естетика",
      text: "Оптимізована геометрія рам і стулок пропускає більше природного світла та створює сучасний зовнішній вигляд."
    }
  ]
},

"76md": {
  title: "WDS",
  name: "WDS 76MD",
  image: wds76md,
  description: `WDS 76MD — преміальна шестикамерна профільна система з монтажною глибиною 76 мм і трьома контурами ущільнення (MD), що забезпечує максимальну герметичність, високу тепло- та шумоізоляцію. Система рекомендована для регіонів з суворими зимами та для будинків поблизу транспортних магістралей. Ширина склопакета до 48 мм гарантує комфорт, тишу та тепло на довгі роки.`,
  specs: [
    { key: "Кількість камер", value: "6" },
    { key: "Монтажна глибина", value: "76 мм" },
    { key: "Теплоізоляція", value: "до Rw=0,94 м²·°C/Вт" },
    { key: "Шумоізоляція", value: "до 46 дБ" },
    { key: "Склопакет", value: "до 48 мм" },
    { key: "Кількість контурів ущільнення", value: "3" }
  ],
  hero: wdsHero,
  construction: wdsCMD,
  extraPoints: [
    {
      title: "Профіль та конструкція",
      text: "Шестикамерна система з монтажною глибиною 76 мм і трьома контурами ущільнення забезпечує максимальну герметичність та стабільність."
    },
    {
      title: "Теплоізоляція",
      text: "До Rw=0,94 м²·°C/Вт завдяки збільшеній кількості камер і додатковому ущільненню."
    },
    {
      title: "Шумоізоляція",
      text: "Звукоізоляція до 46 дБ — ефективний захист від шуму з вулиці."
    },
    {
      title: "Призначення",
      text: "Рекомендована для регіонів із суворими зимами, котеджів, приватних будинків і будинків поблизу магістралей."
    },
    {
      title: "Дизайн та естетика",
      text: "Сучасний зовнішній вигляд та можливість встановлення великих панорамних склопакетів."
    }
  ]
}



};
export async function generateStaticParams() {
  return Object.keys(windowsData).map((key) => ({ window: key }));
}

export default function WindowPage({ params }) {
  const data = windowsData[params.window];

  return (
    <>
    <section className="relative h-[600px] flex items-center justify-center bg-black overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                      backgroundImage: `url(${data.hero.src})`,
                    }}
                  />
            <h1 className="relative text-white text-4xl z-10">{data.title}</h1>
          </section>
    

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <img src={data.image.src} alt={data.name} width={300} height={100} />
          </div>
          <div className="flex-1">
            <h2 className="text-[50px] mb-4">{data.name}</h2>
            <p className="text-[#555555] text-[18px]">{data.description}</p>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto rounded-md  max-w-full">
  <h3 className="text-3xl font-semibold mb-8 text-center">Технічні характеристики</h3>
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

    

<section className="px-6 py-12 max-w-6xl mx-auto">
  <div className="relative flex flex-col md:flex-row bg-white rounded-2xl  overflow-hidden">
    
    {/* Лівий блок з картинкою */}
    <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
      <img
        src={data.construction?.src}
        alt="Рекомендована Конфігурація вікна"
        title="Рекомендована Конфігурація вікна"
        className="rounded-lg object-contain opacity-95 w-full max-w-sm"
      />
    </div>

    <div className="md:w-1/2 bg-white p-8 flex flex-col justify-center">
      <h3 className="text-3xl font-bold mb-4 text-gray-800">
        Рекомендована Конфігурація вікна
      </h3>
      <p className="text-gray-500 mb-6">
        Фото прозоре для легшого поєднання з фоном.
      </p>

      <div className="divide-y divide-gray-200">
        <div className="flex justify-between py-3">
          <span className="font-semibold text-gray-700">Профіль</span>
          <span className="text-gray-600">WDS 5S</span>
        </div>

        <div className="flex justify-between py-3">
          <span className="font-semibold text-gray-700">Склопакет</span>
          <span className="text-gray-600 text-right max-w-xs">
            Двокамерний, 32 мм, заповнений аргоном.<br />
            Енергозберігаюче скло: 4i-10Ar-4-10Ar-4i
          </span>
        </div>

        <div className="flex justify-between py-3">
          <span className="font-semibold text-gray-700">Фурнітура</span>
          <span className="text-gray-600">Протизламна</span>
        </div>

        <div className="flex justify-between py-3">
          <span className="font-semibold text-gray-700">Колір</span>
          <span className="text-gray-600">Будь-який з палітри WDS Color</span>
        </div>
      </div>
    </div>
  </div>
</section>




     <section className="px-6 py-12 max-w-6xl mx-auto">
  <h3 className="text-3xl font-semibold mb-8 text-center">Додаткова інформація</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {data.extraPoints.map((item, i) => (
      <div key={i} className="flex gap-3 bg-[#F8F7F0] p-6 rounded-md">
        <img src={check.src} alt="check" className="w-6 h-6 mt-1" />
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
          <p className="text-gray-600">{item.text}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      <SectionContact />
      <FreeSize/>
    </>
  );
}
