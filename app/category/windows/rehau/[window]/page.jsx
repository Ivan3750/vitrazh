import check from "@/app/assets/images/icons/check.svg";
import Ukraine from "@/app/assets/images/products/decor/Ukraine.svg";
import rehauE60 from "@/app/assets/images/products/windows/REHAU_Euro-Design_60-t.png";
import rehauE70 from "@/app/assets/images/products/windows/REHAU_Euro-Design_70-t.png";
import rehauSMD from "@/app/assets/images/products/windows/REHAU_Synego_MD-t.png";
import SectionContact from "@/app/components/SectionContact";
import rehauHero from "@/app/assets/images/hero/rehau.jpg";

export async function generateMetadata({ params }) {
  const data = windowsData[params.window];

  if (!data) {
    return {
      title: "Вікна — REHAU",
      description:
        "Оберіть сучасні енергоефективні вікна для вашого дому чи офісу.",
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
  "euro-design-60": {
    title: "REHAU",
    name: "REHAU - Euro Design 60",
    image: rehauE60,
    description: `REHAU Euro-Design 60 — класична трикамерна система з монтажною глибиною 60 мм, що ідеально підходить для стандартного житла. Вона поєднує німецьку якість, привабливий дизайн і надійність. Профіль забезпечує належний рівень енергозбереження та комфорту, добре витримує коливання температур і підходить для багатоповерхового будівництва, котеджів та офісів. Система оптимальна для засклення балконів, лоджій та міжетажних маршів багатоквартирних будинків, а також для житла з центральною системою опалення.`,
    specs: [
      { key: "Кількість камер", value: "3" },
      { key: "Конструктивна глибина", value: "60 мм" },
      { key: "Максимальна товщина склопакету", value: "до 33 мм" },
      { key: "Висота пакету профілів (рама + стулка)", value: "117 мм" },
      { key: "Коефіцієнт теплопередачі", value: "Uf = 1,6 Вт/м²К" },
      { key: "Коефіцієнт опору теплопередачі", value: "Rf = 0,65 м²К/Вт" },
      { key: "Теплоізоляція", value: "до Rw=0,62 м²·°C/Вт" },
      { key: "Звукоізоляція", value: "Rw,P = 41 дБ" },
      { key: "Клас зламобезпеки", value: "до RC2 (ENV 1627)" },
      { key: "Повітропроникність", value: "клас 4 (EN 12207)" },
      { key: "Водонепроникність", value: "до класу 9А (EN 12208)" },
      { key: "Ущільнення притвору", value: "EPDM / 2 контури" },
      { key: "Колір профілю", value: "білий, кольоровий, 'під дерево'" },
    ],
    hero: rehauHero,
     extraPoints: [
      {
        title: "Профіль та конструкція",
        text: "Трикамерний профіль з монтажною глибиною 60 мм забезпечує надійність та стабільність конструкції."
      },
      {
        title: "Теплоізоляція",
        text: "До Rw=0,62 м²·°C/Вт завдяки правильно спроектованим камерам профілю та ущільненню."
      },
      {
        title: "Звукоізоляція",
        text: "Захист від шуму до 41 дБ — комфорт у квартирі та офісі."
      },
      {
        title: "Призначення",
        text: "Ідеально для квартир, балконів, лоджій, міжетажних маршів та офісних приміщень."
      },
      {
        title: "Естетика та дизайн",
        text: "Гладка поверхня профілю легко очищується, можливість ламінації та вибору кольору під замовлення."
      }
    ]
  },
  "euro-design-70": {
    title: "REHAU",
    name: "REHAU - Euro Design 70",
    image: rehauE70,
    description: `REHAU Euro-Design 70 — енергозберігаюча п’ятикамерна профільна система з монтажною глибиною 70 мм, яка забезпечує високий рівень тепло- та шумоізоляції, комфорт у приміщенні та зменшення витрат на опалення. Вікна цієї системи мають вишуканий дизайн, який легко інтегрується в будь-який архітектурний стиль. Ідеальний вибір для будинків з центральним опаленням, термомодернізації старого житлового фонду, приватного та комерційного будівництва.`,
    specs: [
      { key: "Кількість камер", value: "5" },
      { key: "Монтажна глибина", value: "70 мм" },
      { key: "Максимальна товщина склопакету", value: "до 41 мм" },
      {
        key: "Енергозберігаючий склопакет",
        value:
          "2-камерний, заповнений аргоном, скла з енергозберігаючим напиленням 4i-14Ar-4-14Ar-4i",
      },
      {
        key: "Товщина пакету профілів (рама + стулка)",
        value: "стандарт = 116 мм, звужена = 110 мм",
      },
      { key: "Коефіцієнт теплопередачі", value: "Uf = 1,3–1,2 Вт/(м²K)" },
      { key: "Коефіцієнт опору теплопередачі", value: "Rf = 0,77–0,80 м²K/Вт" },
      { key: "Теплоізоляція", value: "до Rw = 0,975 м²·°C/Вт" },
      {
        key: "Відповідність ДБН",
        value: "Rw min ≥ 0,90 м²·°C/Вт (I температурна зона)",
      },
      { key: "Звукоізоляція", value: "до Rw,P = 43 дБ" },
      { key: "Зламобезпека", value: "до класу RC 3 (EN 1627)" },
      {
        key: "Опір до вітрових навантажень",
        value: "до класу C5/B5 (EN 12210)",
      },
      { key: "Водонепроникність", value: "до класу 9A (EN 12208)" },
      { key: "Повітропроникність", value: "клас 4 (EN 12207)" },
      { key: "Ущільнення", value: "EPDM" },
      { key: "Кількість контурів ущільнення", value: "2" },
    ],
    hero: rehauHero,
     extraPoints: [
      {
        title: "Профіль та конструкція",
        text: "П’ятикамерний профіль з монтажною глибиною 70 мм для надійності та довговічності."
      },
      {
        title: "Теплоізоляція",
        text: "До Rw=0,975 м²·°C/Вт, енергоефективний двокамерний склопакет заповнений аргоном."
      },
      {
        title: "Звукоізоляція",
        text: "До 43 дБ — зменшення шуму від вулиці та сусідів."
      },
      {
        title: "Призначення",
        text: "Ідеально для приватних будинків, квартир із центральним опаленням, комерційного будівництва."
      },
      {
        title: "Естетика та дизайн",
        text: "Високоякісна ламінація, сучасний зовнішній вигляд, можливість інтеграції у будь-який архітектурний стиль."
      }
    ]
  },

  synego: {
    title: "REHAU",
    name: "REHAU SYNEGO",
    image: rehauSMD,
    description: `REHAU SYNEGO — високотехнологічна профільна система нового покоління з сімома камерами у рамі та шістьма у стулці, розроблена для максимальної тепло- та шумоізоляції, а також підвищеної безпеки. Глибина монтажу 80 мм і підтримка склопакетів до 51 мм забезпечують виняткову енергоефективність. Профіль відповідає стандартам пасивного будівництва, а вікна з маркуванням EcoPuls містять понад 40% перероблених матеріалів, що робить їх екологічно відповідальним вибором. Ідеальний варіант для сучасних екодомів і тих, хто прагне знизити витрати на енергію.`,
    specs: [
      { key: "Кількість камер", value: "7 (рама), 6 (стулка)" },
      { key: "Монтажна глибина", value: "80 мм" },
      { key: "Висота профілів (рама + стулка)", value: "від 109 мм" },
      { key: "Максимальна товщина склопакету", value: "до 51 мм" },
      {
        key: "Енергоефективність",
        value: "Uw до 0,76 Вт/м²·К (з додатковим середнім ущільненням)",
      },
      { key: "Коефіцієнт теплопередачі", value: "Uf до 0,94 Вт/(м²K)" },
      { key: "Коефіцієнт опору теплопередачі", value: "Rf = 1,06 м²K/Вт" },
      { key: "Теплоізоляція", value: "до Rw = 1,0 м²·°C/Вт" },
      { key: "Звукоізоляція", value: "до Rw,P = 47 дБ" },
      { key: "Зламобезпека", value: "до класу RC 3 (EN 1627)" },
      {
        key: "Опір до вітрових навантажень",
        value: "до класу C5/B5 (EN 12210)",
      },
      { key: "Водонепроникність", value: "до класу 9A (EN 12208)" },
      { key: "Повітропроникність", value: "клас 4 (EN 12207)" },
      {
        key: "Відповідність стандартам пасивного будинку",
        value: "ift-Richtlinien",
      },
      {
        key: "Екологічність",
        value: "понад 40% перероблених матеріалів (EcoPuls)",
      },
    ],
    hero: rehauHero,
    extraPoints: [
      {
        title: "Профіль та конструкція",
        text: "Сім камер у рамі та шість у стулці, монтажна глибина 80 мм забезпечують максимальну герметичність та надійність."
      },
      {
        title: "Теплоізоляція",
        text: "До Uw=0,76 Вт/м²·К із додатковим середнім ущільненням — для пасивного будівництва."
      },
      {
        title: "Звукоізоляція",
        text: "До 47 дБ — оптимальний захист від зовнішнього шуму."
      },
      {
        title: "Призначення",
        text: "Для сучасних екодомів, регіонів з холодним кліматом, енергозберігаючого житла та офісних приміщень."
      },
      {
        title: "Екологічність",
        text: "Використання понад 40% перероблених матеріалів (EcoPuls) робить систему екологічно відповідальною."
      }
    ]
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
            <img
              src={data.image.src}
              alt={data.name}
              width={300}
              height={100}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-[50px] mb-4">{data.name}</h2>
            <p className="text-[#555555] text-[18px]">{data.description}</p>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto rounded-md  max-w-full">
          <h3 className="text-3xl font-semibold mb-8 text-center">
            Технічні характеристики
          </h3>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "гладка поверхня, що легко очищається",
            "система профілів екологічна, підлягає вторинній переробці",
            "скошений фальц рами і тулки, що забезпечує довідведення",
          ].map((title, i) => (
            <div
              key={i}
              className="flex bg-[#F8F7F0] py-[60px] px-[40px] gap-5 rounded-md"
            >
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
            Профіль REHAU Euro-Design 60 має трьохкамерну будову з монтажною
            глибиною 60 мм. За вимогами ДСТУ система рекомендована до
            застосування в ІІ температурній зоні України (Південь країни та
            Закарпаття). В І температурній зоні така система застосовується для
            технічних та нежитлових приміщень.
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
            <img
              src={Ukraine.src}
              alt="Карта України"
              width={690}
              height={460}
            />
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
    </>
  );
}
