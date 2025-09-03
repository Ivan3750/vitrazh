import Image from "next/image";
import check from "@/app/assets/images/icons/check.svg";
import Ukraine from "@/app/assets/images/products/decor/Ukraine.svg";
import wds5s from "@/app/assets/images/products/windows/wds-5s-t.png";
import wds6s from "@/app/assets/images/products/windows/wds-6s-t.png";
import wds76ad from "@/app/assets/images/products/windows/wds-76MD-t.png";
import wds76md from "@/app/assets/images/products/windows/wds-76AD-t.png";
import rehauE60 from "@/app/assets/images/products/windows/REHAU_Euro-Design_60-t.png";
import rehauE70 from "@/app/assets/images/products/windows/REHAU_Euro-Design_70-t.png";
import rehauSMD from "@/app/assets/images/products/windows/REHAU_Synego_MD-t.png";
import SectionContact from "@/app/components/SectionContact";
import rehauHero from "@/app/assets/images/hero/rehau.jpg";
import wdsHero from "@/app/assets/images/hero/wds.jpg";

export async function generateMetadata({ params }) {
  const data = windowsData[params.window];

  if (!data) {
    return {
      title: "Вікна — Каталог",
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
"wds-5s": {
  title: "WDS",
  name: "WDS 5S",
  image: wds5s,
  description: `WDS 5S — це універсальна п’ятикамерна профільна система, яка поєднує високу міцність, ефективну теплоізоляцію та сучасний дизайн за доступною ціною. Монтажна глибина 60 мм забезпечує комфортний мікроклімат у приміщенні в будь-яку пору року. Профіль ідеально підходить для житлових квартир, приватних будинків, балконів і офісних приміщень. Міцна конструкція гарантує довговічність, а продумана геометрія рам і стулок додає привабливий зовнішній вигляд. Ламінація дозволяє вибрати один із 8 стандартних кольорів або будь-який відтінок під замовлення.`,
  specs: [
    { key: "Кількість камер", value: "5" },
    { key: "Монтажна глибина", value: "60 мм" },
    { key: "Теплоізоляція", value: "до Rw=0,77 м²·°C/Вт" },
    { key: "Шумоізоляція", value: "до 40 дБ" },
    { key: "Склопакет", value: "до 32 мм" }
  ],
  hero: wdsHero
},


"wds-6s": {
  title: "WDS",
  name: "WDS 6S",
  image: wds6s,
  description: `WDS 6S — вдосконалена шестикамерна профільна система з підвищеними показниками енергоефективності. Монтажна глибина 70 мм та покращена герметичність зменшують тепловтрати, дозволяючи економити на опаленні та кондиціонуванні. Профіль забезпечує високу міцність, комфортну шумоізоляцію і сучасний зовнішній вигляд. Ідеальний вибір для приватних будинків, новобудов та великих віконних прорізів. Ламінація дозволяє обрати 8 стандартних кольорів або понад 30 варіантів під замовлення.`,
  specs: [
    { key: "Кількість камер", value: "6" },
    { key: "Монтажна глибина", value: "70 мм" },
    { key: "Теплоізоляція", value: "до Rw=0,84 м²·°C/Вт" },
    { key: "Шумоізоляція", value: "до 43 дБ" },
    { key: "Склопакет", value: "до 40 мм" }
  ],
  hero: wdsHero
},


"wds-76ad": {
  title: "WDS",
  name: "WDS 76AD",
  image: wds76ad,
  description: `WDS 76AD — це п’ятикамерна профільна система з монтажною глибиною 76 мм та подвійним контуром ущільнення, що забезпечує високі показники тепло- та шумоізоляції. Система підтримує склопакети до 48 мм завтовшки, що дозволяє досягти коефіцієнта теплопровідності Uw до 0,79 W/m²K. Завдяки зменшеній висоті з'єднання рами та стулки, вікна пропускають більше природного світла, створюючи комфортну атмосферу у приміщенні. Ідеально підходить для енергоефективного житла, що відповідає сучасним вимогам комфорту, безпеки та дизайну.`,
  specs: [
    { key: "Кількість камер", value: "5" },
    { key: "Монтажна глибина", value: "76 мм" },
    { key: "Теплоізоляція", value: "до Uw=0,79 W/m²·K" },
    { key: "Шумоізоляція", value: "до Rw=38 дБ" },
    { key: "Склопакет", value: "до 48 мм" },
    { key: "Кількість контурів ущільнення", value: "2" }
  ],
  hero: wdsHero
},

"wds-76md": {
  title: "WDS",
  name: "WDS 76MD",
  image: wds76md,
  description: `WDS 76MD — преміальна шестикамерна профільна система нового покоління з трьома контурами ущільнення (MD), що забезпечує максимальну герметичність, високу тепло- та шумоізоляцію. Система рекомендована для регіонів з суворими зимами та для будинків поблизу транспортних магістралей. Монтажна глибина 76 мм і можливість встановлення склопакетів до 48 мм гарантують комфорт, тишу та тепло на довгі роки.`,
  specs: [
    { key: "Кількість камер", value: "6" },
    { key: "Монтажна глибина", value: "76 мм" },
    { key: "Теплоізоляція", value: "до Rw=0,94 м²·°C/Вт" },
    { key: "Шумоізоляція", value: "до 46 дБ" },
    { key: "Склопакет", value: "до 48 мм" },
    { key: "Кількість контурів ущільнення", value: "3" }
  ],
  hero: wdsHero
},

"rehau-euro-design-60": {
  title: "REHAU",
  name: "REHAU - Euro Design 60",
  image: rehauE60,
  description: `REHAU Euro-Design 60 — класична трикамерна система з монтажною глибиною 60 мм, що ідеально підходить для стандартного житла. Вона поєднує німецьку якість, привабливий дизайн і надійність. Профіль забезпечує належний рівень енергозбереження та комфорту, добре витримує коливання температур і підходить для багатоповерхового будівництва, котеджів та офісів. Система оптимальна для засклення балконів, лоджій та міжетажних маршів багатоквартирних будинків, а також для житла з центральною системою опалення.`,
  specs: [
    { key: "Кількість камер", value: "3" },
    { key: "Монтажна глибина", value: "60 мм" },
    { key: "Теплоізоляція", value: "до Rw=0,62 м²·°C/Вт" },
    { key: "Шумоізоляція", value: "до 41 дБ" },
    { key: "Склопакет", value: "до 33 мм" },
    { key: "Клас зламобезпеки", value: "до RC2 (ENV 1627)" },
    { key: "Контури ущільнення", value: "2 (EPDM)" },
    { key: "Повітропроникність", value: "клас 4 (EN 12207)" },
    { key: "Водонепроникність", value: "до класу 9А (EN 12208)" },
  ],
  hero: rehauHero
},
"rehau-euro-design-70": {
  title: "REHAU",
  name: "REHAU - Euro Design 70",
  image: rehauE70,
  description: `REHAU Euro-Design 70 — енергозберігаюча п’ятикамерна профільна система з монтажною глибиною 70 мм, яка забезпечує високий рівень тепло- та шумоізоляції, комфорт у приміщенні та зменшення витрат на опалення. Вікна цієї системи мають вишуканий дизайн, який легко інтегрується в будь-який архітектурний стиль. Ідеальний вибір для будинків з центральним опаленням, термомодернізації старого житлового фонду, приватного та комерційного будівництва.`,
  specs: [
    { key: "Кількість камер", value: "5" },
    { key: "Монтажна глибина", value: "70 мм" },
    { key: "Теплоізоляція", value: "до Rw=0,975 м²·°C/Вт" },
    { key: "Шумоізоляція", value: "до 43 дБ" },
    { key: "Склопакет", value: "до 40 мм" },
    { key: "Енергозберігаючий склопакет", value: "2-камерний, заповнений аргоном, скла з енергозберігаючим напиленням 4i-14Ar-4-14Ar-4i" },
    { key: "Відповідність ДБН", value: "Rw min ≥ 0,90 м²·°C/Вт (I температурна зона)" }
  ],
  hero: rehauHero
},


 "rehau-synego": {
  title: "REHAU",
  name: "REHAU SYNEGO",
  image: rehauSMD,
  description: `REHAU SYNEGO — високотехнологічна профільна система нового покоління з сімома камерами у рамі та шістьма у стулці, розроблена для максимальної тепло- та шумоізоляції, а також підвищеної безпеки. Глибина монтажу 80 мм і підтримка склопакетів до 51 мм забезпечують виняткову енергоефективність. Профіль відповідає стандартам пасивного будівництва, а вікна з маркуванням EcoPuls містять понад 40% перероблених матеріалів, що робить їх екологічно відповідальним вибором. Ідеальний варіант для сучасних екодомів і тих, хто прагне знизити витрати на енергію.`,
  specs: [
    { key: "Кількість камер", value: "7 (рама), 6 (стулка)" },
    { key: "Монтажна глибина", value: "80 мм" },
    { key: "Теплоізоляція", value: "до Rw=1,0 м²·°C/Вт" },
    { key: "Шумоізоляція", value: "до 46 дБ" },
    { key: "Склопакет", value: "до 51 мм" },
    { key: "Енергоефективність", value: "Uw до 0,76 Вт/м²·К (з додатковим середнім ущільненням)" },
    { key: "Відповідність стандартам пасивного будинку", value: "ift-Richtlinien" },
    { key: "Екологічність", value: "понад 40% перероблених матеріалів (EcoPuls)" }
  ],
  hero: rehauHero
},

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

      <section className="px-6 py-12 gap-[30px] justify-between mc mx-auto text-sm flex space-y-6">
        <div>
          <h2 className="text-xl mb-2">{data.name}</h2>
          <p className="text-[#555555] text-[18px] max-w-[500px] mb-5">
            Профіль REHAU Euro-Design 60 має трьохкамерну будову з монтажною глибиною 60 мм. За вимогами ДСТУ система рекомендована до застосування в ІІ температурній зоні України (Південь країни та Закарпаття). В І температурній зоні така система застосовується для технічних та нежитлових приміщень.
          </p>
          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <div className="bg-transperant p-[8px] border-[#d8f422] border-2 rounded-full">
                <div className="w-[29px] h-[29px] bg-[#D8F422] rounded-full" />
              </div>
              <p className="text-[16px]">EURO-DESIGN 70</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-transperant p-[8px] border-[#F8F7F0] border-2 rounded-full">
                <div className="w-[29px] h-[29px] bg-[#F8F7F0] rounded-full" />
              </div>
              <p className="text-[16px]">EURO-DESIGN 60</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div>
            <img src={Ukraine.src} alt="Карта України" width={690} height={460} />
          </div>
        </div>
      </section>
      <SectionContact />
    </>
  );
}
