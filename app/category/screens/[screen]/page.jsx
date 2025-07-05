import Image from "next/image";
import check from "@/app/assets/images/icons/check.svg";
import wds5s from "@/app/assets/images/products/windows/wds-5s-t.png";
import wds6s from "@/app/assets/images/products/windows/wds-6s-t.png";
import wds76ad from "@/app/assets/images/products/windows/wds-76MD-t.png";
import wds76md from "@/app/assets/images/products/windows/wds-76AD-t.png";
import rehauE60 from "@/app/assets/images/products/windows/REHAU_Euro-Design_60-t.png";
import rehauE70 from "@/app/assets/images/products/windows/REHAU_Euro-Design_70-t.png";
import rehauSMD from "@/app/assets/images/products/windows/REHAU_Synego_MD-t.png";
import fiberglass from "@/app/assets/images/gallery/Fiberglass.webp";
import ultraView from "@/app/assets/images/gallery/UltraView.webp";
import antipul from "@/app/assets/images/gallery/antipul.webp";
import anticat from "@/app/assets/images/gallery/anticat.webp";
import SectionContact from "@/app/components/SectionContact";
import j1 from "@/app/assets/images/jobs/screens/1.png"
import j2 from "@/app/assets/images/jobs/screens/2.png"
import j3 from "@/app/assets/images/jobs/screens/3.png"
import j4 from "@/app/assets/images/jobs/screens/4.png"
import j5  from "@/app/assets/images/jobs/screens/5.png"
const windowsData = {
  "wds-5s": {
    title: "WDS",
    name: "WDS 5S",
    image: wds5s,
    description: `WDS 5S — це універсальна п’ятикамерна профільна система, яка поєднує в собі ефективну теплоізоляцію, естетичний вигляд та доступну ціну. Завдяки глибині монтажу 60 мм, система забезпечує комфортний мікроклімат у приміщенні в будь-яку пору року. Ідеально підходить для житлових квартир, приватних будинків або дач. Міцна конструкція гарантує тривалий термін експлуатації, а сучасний дизайн — привабливий зовнішній вигляд вікон.`,
    specs: [
      { key: "Кількість камер", value: "5" },
      { key: "Монтажна глибина", value: "60 мм" },
      { key: "Теплоізоляція", value: "до Rw=0,77 м²·°C/Вт" },
      { key: "Шумоізоляція", value: "до 40 дБ" },
      { key: "Склопакет", value: "до 32 мм" },
    ],
  },

  "wds-6s": {
    title: "WDS",
    name: "WDS 6S",
    image: wds6s,
    description: `WDS 6S — вдосконалена шестикамерна система з підвищеними показниками енергоефективності. Завдяки монтажній глибині 70 мм та покращеній герметичності, ця система зменшує тепловтрати до мінімуму, що дозволяє суттєво економити на опаленні взимку та кондиціонуванні влітку. Ідеальний варіант для тих, хто цінує тишу, тепло та сучасний вигляд свого дому. Особливо добре показує себе у приватних будинках та новобудовах.`,
    specs: [
      { key: "Кількість камер", value: "6" },
      { key: "Монтажна глибина", value: "70 мм" },
      { key: "Теплоізоляція", value: "до Rw=0,84 м²·°C/Вт" },
      { key: "Шумоізоляція", value: "до 43 дБ" },
      { key: "Склопакет", value: "до 40 мм" },
    ],
  },

  "wds-76ad": {
    title: "WDS",
    name: "WDS 76AD",
    image: wds76ad,
    description: `WDS 76AD — це сучасна п’ятикамерна профільна система з системою ущільнення AD (по притвору), яка створює ідеальний баланс між високими теплоізоляційними властивостями та доступною ціною. Монтажна глибина 76 мм забезпечує додатковий комфорт і захист від зовнішніх факторів, таких як холод, вітер або шум. Ідеальне рішення для енергоефективного житла, що відповідає сучасним вимогам комфорту, безпеки та дизайну.`,
    specs: [
      { key: "Кількість камер", value: "5" },
      { key: "Монтажна глибина", value: "76 мм" },
      { key: "Теплоізоляція", value: "до Rw=0,85 м²·°C/Вт" },
      { key: "Шумоізоляція", value: "до 44 дБ" },
      { key: "Склопакет", value: "до 48 мм" },
    ],
  },

  "wds-76md": {
    title: "WDS",
    name: "WDS 76MD",
    image: wds76md,
    description: `WDS 76MD — преміальна шестикамерна система нового покоління з трьома контурами ущільнення (MD), яка забезпечує максимальну герметичність, шумо- та теплоізоляцію. Рекомендована для використання в регіонах з суворими зимами, а також у місцях з підвищеним рівнем шуму (поблизу доріг, аеропортів, залізничних колій). Завдяки глибині монтажу 76 мм та потужному склопакету до 48 мм, система гарантує комфорт, тишу і тепло в оселі на довгі роки.`,
    specs: [
      { key: "Кількість камер", value: "6" },
      { key: "Монтажна глибина", value: "76 мм" },
      { key: "Теплоізоляція", value: "до Rw=0,94 м²·°C/Вт" },
      { key: "Шумоізоляція", value: "до 46 дБ" },
      { key: "Склопакет", value: "до 48 мм" },
    ],
  },

  "rehau-euro-design-60": {
    title: "REHAU",
    name: "REHAU - Euro Design 60",
    image: rehauE60,
    description: `REHAU Euro-Design 60 — класична трикамерна система з монтажною глибиною 60 мм, яка ідеально підходить для стандартного житла. Вона об'єднує перевірену часом німецьку якість, привабливий дизайн та надійність. Профіль забезпечує належний рівень енергозбереження та комфорту, а також чудово витримує коливання температур. Завдяки універсальності та довговічності, ця система часто використовується у багатоповерховому будівництві, котеджах, офісах.`,
    specs: [
      { key: "Кількість камер", value: "3" },
      { key: "Монтажна глибина", value: "60 мм" },
      { key: "Теплоізоляція", value: "до Rw=0,62 м²·°C/Вт" },
      { key: "Шумоізоляція", value: "до 40 дБ" },
      { key: "Склопакет", value: "до 32 мм" },
    ],
  },

  "rehau-euro-design-70": {
    title: "REHAU",
    name: "REHAU - Euro Design 70",
    image: rehauE70,
    description: `REHAU Euro-Design 70 — це енергозберігаюча п’ятикамерна профільна система з монтажною глибиною 70 мм, яка відповідає сучасним вимогам до теплоефективності та дизайну. Вікна з цієї системи забезпечують чудову шумоізоляцію, комфорт у приміщенні та знижують витрати на опалення. Вишуканий зовнішній вигляд дозволяє легко інтегрувати її в будь-який архітектурний стиль. Ідеальний вибір для тих, хто цінує якість, тишу та німецьку надійність.`,
    specs: [
      { key: "Кількість камер", value: "5" },
      { key: "Монтажна глибина", value: "70 мм" },
      { key: "Теплоізоляція", value: "до Rw=0,85 м²·°C/Вт" },
      { key: "Шумоізоляція", value: "до 43 дБ" },
      { key: "Склопакет", value: "до 40 мм" },
    ],
  },

  "rehau-synego": {
    title: "REHAU",
    name: "REHAU SYNEGO",
    image: rehauSMD,
    description: `REHAU SYNEGO — це високотехнологічна система нового покоління з сімома камерами у рамі та шістьма у стулці, розроблена для максимальної теплоізоляції, шумоізоляції та безпеки. Глибина монтажу 80 мм і можливість встановлення склопакетів до 51 мм гарантують виняткову енергоефективність. Профіль відповідає стандартам пасивного будівництва і рекомендується для сучасних екодомів. Ідеальний варіант для тих, хто хоче максимально знизити витрати на енергію та жити в повному комфорті.`,
    specs: [
      { key: "Кількість камер", value: "7 (рама), 6 (стулка)" },
      { key: "Монтажна глибина", value: "80 мм" },
      { key: "Теплоізоляція", value: "до Rw=1,0 м²·°C/Вт" },
      { key: "Шумоізоляція", value: "до 46 дБ" },
      { key: "Склопакет", value: "до 51 мм" },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(windowsData).map((key) => ({ screen: key }));
}

export default function WindowPage({ params }) {
  const data = windowsData[params.screen];

  return (
    <>
      <section className="relative h-[400px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" />
        <h1 className="relative text-white text-4xl z-10">{data.title}</h1>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <Image src={data.image} alt={data.name} width={300} height={100} />
          </div>
          <div className="flex-1">
            <h2 className="text-[50px] mb-4">{data.name}</h2>
            <p className="text-[#555555] text-[18px]">{data.description}</p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl mb-4">Технічні характеристики</h3>
          <table className="w-full border border-gray-300 text-left text-sm">
            <thead>
              <tr>
                <th className="border-b border-b-[#555555]    px-4 py-2 text-[18px]">
                  Параметр
                </th>
                <th className="border-b border-b-[#555555]    px-4 py-2 text-[18px]">
                  Значення
                </th>
              </tr>
            </thead>
            <tbody>
              {data.specs.map((row, i) => (
                <tr key={i}>
                  <td className="border-b  border-b-[#555555]  px-4 py-2 text-[18px]">
                    {row.key}
                  </td>
                  <td className="border-b border-b-[#555555]   px-4 py-2 text-[18px]">
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
          {[
            "Ідеальне рішення для дверей і великих прорізів",
            "Захист від комах без втрати комфорту",
            "Надійність і довговічність",
          ].map((title, i) => (
            <div
              key={i}
              className="flex bg-[#F8F7F0] py-[60px] px-[40px] gap-5 rounded-md"
            >
              <div className="p-2 rounded-full bg-[#D8F422] w-9 h-9 flex items-center justify-center">
                <Image src={check} alt="Перевага" width={22} height={22} />
              </div>
              <p className="text-[16px] md:text-[18px]">{title}</p>
            </div>
          ))}
        </div>
      </section>

   <section className="px-6 py-12 max-w-6xl mx-auto">
  <h2 className="text-4xl md:text-[48px]  mb-10 text-center">Типи полотна</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Fiberglass */}
    <div className="flex flex-col items-center text-center">
      <Image src={fiberglass} alt="Сітка Fiberglass" className="w-full h-auto  mb-1 object-contain" />
      <h3 className="text-xl font-normal mb-2">Стандарт «Fiberglass»</h3>
      <p className="text-[#555555] text-[16px]">
        Базовий оптимальний варіант, який пропонує високе співвідношення якості та ціни, а також має високі характеристики міцності. 
        Ця москітна сітка підходить для всіх систем, забезпечуючи надійний захист від комах.
      </p>
    </div>

    {/* Ultra View */}
    <div className="flex flex-col items-center text-center">
      <Image src={ultraView} alt="Сітка Ultra View" className="w-full h-auto  mb-1 object-contain" />
      <h3 className="text-xl font-normal mb-2">Невидимка «Ultra View»</h3>
      <p className="text-[#555555] text-[16px]">
        Ця сітка має тоншу нитку, що робить її прозорою та майже невидимою на вікнах. Вона пропускає на 25% більше світла та повітряного потоку.
      </p>
    </div>

    {/* Antipil */}
    <div className="flex flex-col items-center text-center">
      <Image src={antipul} alt="Сітка Антипил" className="w-full h-auto  mb-1 object-contain" />
      <h3 className="text-xl font-normal mb-2">Антипил</h3>
      <p className="text-[#555555] text-[16px]">
        Забезпечує надійний захист від великого та дрібного пилу, а також від комарів та інших комах. 
        Застосовується на нижніх поверхах житлових приміщень.
      </p>
    </div>

    {/* Anticat */}
    <div className="flex flex-col items-center text-center">
      <Image src={anticat} alt="Сітка Антикішка" className="w-full h-auto  mb-1 object-contain" />
      <h3 className="text-xl font-normal mb-2">Антикішка</h3>
      <p className="text-[#555555] text-[16px]">
        Замість звичайного полотна використовується металева сітка, яка виступає перешкодою для птахів та домашніх тварин. 
        Її міцність дозволяє витримати навіть вагу невеликої тварини.
      </p>
    </div>
  </div>
</section>
<section className="px-6 py-12 mx-auto">
  <h2 className="text-4xl md:text-[48px] mb-10 text-center ">Типи полотна</h2>

  <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mx-auto">
    {[j1, j2, j3, j4, j5].map((img, index) => {
      // Відповідні класи translate-y з md:
      const translateClasses = [
        'md:translate-y-0',
        'md:-translate-y-7',  // -28px приблизно
        'md:translate-y-5',   // 20px
        'md:-translate-y-4',  // -16px
        'md:translate-y-6'    // 24px
      ];

      return (
        <div
          key={index}
          className={`rounded-md transform transition-transform duration-300 ${translateClasses[index]}`}
        >
          <Image
            src={img}
            alt={`j${index + 1}`}
            className="h-[250px] md:h-[300px] xl:h-[350px] w-auto max-w-none object-cover rounded-md"
          />
        </div>
      );
    })}
  </div>
</section>
<SectionContact/>





    </>
  );
}
