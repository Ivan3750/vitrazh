import Image from "next/image";
import check from "@/app/assets/images/icons/check.svg";
import Ukraine from "@/app/assets/images/products/decor/Ukraine.svg";

const windowsData = {
  "wds-5s": {
    title: "WDS",
    name: "WDS 5S",
    image: "/images/wds-5s.jpg",
    description: `WDS 5S — п'ятикамерна профільна система з високим рівнем тепло- та шумоізоляції. Ідеальний вибір для житлових приміщень.`,
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
    image: "/images/wds-6s.jpg",
    description: `WDS 6S — шестикамерна система з підвищеними показниками енергоефективності та надійності.`,
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
    image: "/images/wds-76ad.jpg",
    description: `WDS 76AD — це сучасна енергоефективна система з ущільненням по притвору (AD).`,
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
    image: "/images/wds-76md.jpg",
    description: `WDS 76MD — модернізована система з трьома контурами ущільнення (MD) для максимальної герметичності.`,
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
    image: "/images/rehau.jpg",
    description: `REHAU Euro-Design 60 — це класична трикамерна профільна система, яка поєднує перевірену німецьку якість, витончену естетику та оптимальні технічні характеристики.`,
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
    image: "/images/rehau-70.jpg",
    description: `REHAU Euro-Design 70 — п’ятикамерна система з високою теплоізоляцією та сучасним дизайном.`,
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
    image: "/images/synego.jpg",
    description: `REHAU SYNEGO — це інноваційна система з чудовою енергоефективністю, безпекою та звукоізоляцією.`,
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
  return Object.keys(windowsData).map((key) => ({ window: key }));
}

export default function WindowPage({ params }) {
  const data = windowsData[params.window];

  return (
    <>
      <section className="relative h-[400px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" />
        <h1 className="relative text-white text-4xl z-10">{data.title}</h1>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <Image src={data.image} alt={data.name} width={500} height={300} />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl mb-4">{data.name}</h2>
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
            "гладка поверхня, що легко очищається",
            "система профілів екологічна, підлягає вторинній переробці",
            "скошений фальц рами і тулки, що забезпечує довідведення;",
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

      <section className="px-6 py-12 gap-[30px] justify-between mc mx-auto text-sm flex space-y-6">
        <div>
          <h2 className="text-xl  mb-2">{data.name}</h2>
          <p className="text-[#555555] text-[18px] max-w-[500px] mb-5">
            Профіль REHAU Euro-Design 60 має трьохкамерну будову з монтажною
            глибиною 60 мм. За вимогами ДСТУ система рекомендована до
            застосування в ІІ температурній зоні України (Південь країни та
            Закарпаття). В І температурній зоні така система застосовується для
            технічних та нежитлових приміщень.
          </p>
            <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <div className="bg-transperant p-[8px] border-[#d8f422] border-2 rounded-full">
                <div className="w-[29px] h-[29px] bg-[#D8F422]  rounded-full" />
              </div>
              <p className="text-[16px]">EURO-DESIGN 70</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-transperant p-[8px] border-[#F8F7F0] border-2 rounded-full">
                <div className="w-[29px] h-[29px] bg-[#F8F7F0]  rounded-full" />
              </div>
              <p className="text-[16px]">EURO-DESIGN 60</p>
            </div>
          </div>
        </div>

        <div className="flex   gap-4 items-center">
        
          <div>
            <Image src={Ukraine} alt="Карта України" width={690} height={460} />
          </div>
        </div>
      </section>
      
    </>
  );
}
