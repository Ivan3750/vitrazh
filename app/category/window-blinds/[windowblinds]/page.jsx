import check from "@/app/assets/images/icons/check.svg";
import z1 from "@/app/assets/images/products/blinds/z1.jpg";
import z2 from "@/app/assets/images/products/blinds/z2.jpg";
import z3 from "@/app/assets/images/products/blinds/z3.jpg";
import z4 from "@/app/assets/images/products/blinds/z4.jpg";
import z6 from "@/app/assets/images/products/blinds/z6.jpg";
import z7 from "@/app/assets/images/products/blinds/z7.jpg";
import z8 from "@/app/assets/images/products/blinds/z8.jpg";
import z9 from "@/app/assets/images/products/blinds/z9.jpg";
import aj1 from "@/app/assets/images/jobs/blinds/aj1.jpg";
import aj2 from "@/app/assets/images/jobs/blinds/aj2.jpg";
import aj3 from "@/app/assets/images/jobs/blinds/aj3.jpg";
import aj4 from "@/app/assets/images/jobs/blinds/aj4.jpg";
import aj5 from "@/app/assets/images/jobs/blinds/aj5.jpg";
import vj1 from "@/app/assets/images/jobs/blinds/vj1.jpg";
import vj2 from "@/app/assets/images/jobs/blinds/vj2.jpg";
import vj3 from "@/app/assets/images/jobs/blinds/vj3.jpg";
import vj4 from "@/app/assets/images/jobs/blinds/vj4.jpg";
import vj5 from "@/app/assets/images/jobs/blinds/vj5.jpg";
import tj1 from "@/app/assets/images/jobs/blinds/tj1.jpg";
import tj2 from "@/app/assets/images/jobs/blinds/tj2.jpg";
import tj3 from "@/app/assets/images/jobs/blinds/tj3.jpg";
import tj4 from "@/app/assets/images/jobs/blinds/tj4.jpg";
import tj5 from "@/app/assets/images/jobs/blinds/tj5.jpg";
import dj1 from "@/app/assets/images/jobs/blinds/dj1.jpg";
import dj2 from "@/app/assets/images/jobs/blinds/dj2.jpg";
import dj3 from "@/app/assets/images/jobs/blinds/dj3.jpg";
import dj4 from "@/app/assets/images/jobs/blinds/dj4.jpg";
import dj5 from "@/app/assets/images/jobs/blinds/dj5.jpg";
import dej1 from "@/app/assets/images/jobs/blinds/dej1.jpg";
import dej2 from "@/app/assets/images/jobs/blinds/dej2.jpg";
import dej3 from "@/app/assets/images/jobs/blinds/dej3.jpg";
import dej4 from "@/app/assets/images/jobs/blinds/dej4.jpg";
import dej5 from "@/app/assets/images/jobs/blinds/dej5.jpg";
import rj1 from "@/app/assets/images/jobs/blinds/rj1.jpg";
import rj2 from "@/app/assets/images/jobs/blinds/rj2.jpg";
import rj3 from "@/app/assets/images/jobs/blinds/rj3.jpg";
import rj4 from "@/app/assets/images/jobs/blinds/rj4.jpg";
import rj5 from "@/app/assets/images/jobs/blinds/rj5.jpg";
import pj1 from "@/app/assets/images/jobs/blinds/pj1.jpg";
import pj2 from "@/app/assets/images/jobs/blinds/pj2.jpg";
import pj3 from "@/app/assets/images/jobs/blinds/pj3.jpg";
import pj4 from "@/app/assets/images/jobs/blinds/pj4.jpg";
import pj5 from "@/app/assets/images/jobs/blinds/pj5.jpg";
import avj1 from "@/app/assets/images/jobs/blinds/avj1.jpg";
import avj2 from "@/app/assets/images/jobs/blinds/avj2.jpg";
import avj3 from "@/app/assets/images/jobs/blinds/avj3.jpg";
import avj4 from "@/app/assets/images/jobs/blinds/avj4.jpg";
import avj5 from "@/app/assets/images/jobs/blinds/avj5.jpg";
import DynamicCalculator from "@/app/components/DynamicCalculator";
import h1 from "@/app/assets/images/hero/alyuminiievi.jpg";
import h2 from "@/app/assets/images/hero/vertical.jpg";
import h3 from "@/app/assets/images/hero/rulloni.jpg";
import h4 from "@/app/assets/images/hero/daynight.jpg";
import h6 from "@/app/assets/images/hero/derevjani.jpg";
import h7 from "@/app/assets/images/hero/rumski.jpg";
import h8 from "@/app/assets/images/hero/plisse.jpg";
import h9 from "@/app/assets/images/hero/automatica.jpg";
import FabricGrid from "@/app/components/FabricGrid";
import plisse from "@/data/plisse.json"
import derevyani from "@/data/derevyani.json"
import tkanynni from "@/data/tkanynni.json"
import rumski from "@/data/rumski.json"



export async function generateMetadata({ params }) {
  const data = blindsData[params.windowblinds];

  if (!data) {
    return {
      title: "Жалюзі — Ваш надійний вибір",
      description: "Великий вибір жалюзі для дому та офісу: алюмінієві, дерев'яні, тканинні, автоматичні.",
    };
  }

  return {
    title: `${data.name} | ${data.title} — Купити в Україні`,
    description: data.description.slice(0, 160),
    keywords: [
      "жалюзі", 
      "ролети", 
      "алюмінієві жалюзі", 
      "дерев'яні жалюзі", 
      "тканинні ролети", 
      "ДЕНЬ-НІЧ", 
      "римські штори", 
      data.name
    ].join(", "),
  
  };
}


const blindsData = {
  "alyuminiievi-zhalyuzi": {
    title: "Жалюзі",
    name: "Алюмінієві жалюзі",
    image: z1,
    hero: h1,
    description: `Класичні алюмінієві жалюзі — це не просто елемент декору, а надійне й довговічне рішення для захисту від сонячних променів у будь-яких приміщеннях. Завдяки легкій вазі алюмінію, вони легко встановлюються і вимагають мінімального догляду, що робить їх оптимальним вибором для офісів, квартир і будинків. Матеріал стійкий до корозії та впливу вологи, тому алюмінієві жалюзі можна без побоювань використовувати у ванних кімнатах і кухнях, де підвищена вологість і перепади температур. Вони дозволяють точно регулювати рівень освітлення, створюючи комфортні умови для роботи, відпочинку або навчання. Вибір кольору й фактури ламелей дає змогу адаптувати жалюзі під будь-який інтер’єр — від мінімалізму до класики. Важливою перевагою є також можливість монтажу на різні типи поверхонь: безпосередньо на раму вікна, стелю або стіну, що забезпечує максимальну гнучкість у дизайні приміщення. Крім того, ручне управління гарантує простоту й надійність у використанні, а довгий термін служби робить цю модель вигідною інвестицією в затишок вашого дому.`,
    specs: [
      { key: "Матеріал", value: "Алюміній" },
      { key: "Тип управління", value: "Ручне" },
      { key: "Колір", value: "На вибір" },
      { key: "Монтаж", value: "На вікно, стелю або стіну" },
    ],
    jobs: [aj1, aj2, aj3, aj4, aj5],
  },

  "vertykalni-tkanovi-zhalyuzi": {
    title: "Жалюзі",
    name: "Вертикальні тканьові жалюзі",
    image: z2,
    hero: h2,
    description: `Сучасні Жалюзі "Тюльс" (Tulls) - це поєднання функціональності вертикальних жалюзі та естетики тканинних штор або тюлю. Вони складаються з тканинних ламелей, які, на відміну від звичайних вертикальних жалюзі, не з'єднані між собою знизу, а лише зверху біля карниза. Це дозволяє ламелям рухатися по карнизу, обертатися навколо своєї осі та забезпечує легкість та прозорість, як у тюлю`,
    specs: [
      { key: "Матеріал", value: "Тканина" },
      { key: "Тип управління", value: "Ланцюжок + шнур" },
      { key: "Ширина ламелей", value: "89 мм / 127 мм" },
    ],
    jobs: [vj1, vj2, vj3, vj4, vj5],
          materials: tkanynni

  },

  "rulonni-shtory-tkanovi-rolete": {
    title: "Жалюзі",
    name: "Рулонні штори тканьові ролети",
    image: z3,
    hero: h3,
    description: `Рулонні штори тканьові ролети — це сучасне й стильне рішення для тих, хто цінує мінімалізм і функціональність у своєму інтер’єрі. Вони щільно прилягають до вікна, що дозволяє максимально зберігати тепло у холодну пору року та ефективно захищає від сонячного світла, створюючи комфортні умови для роботи, відпочинку та сну. Система управління може бути як ручною, так і пружинною, що робить використання зручним і безпечним навіть для дитячих кімнат. Тканина може бути звичайною або blackout — остання повністю блокуватиме проникнення світла, що важливо для спальніх приміщень чи офісів з необхідністю затемнення. Великий вибір кольорів і фактур дозволяє вписати ролети в будь-який стиль інтер’єру — від сучасного хай-тек до класики або скандинавського мінімалізму. Рулонні штори легко монтуються і не займають багато місця, тому вони стануть ідеальним вибором для невеликих кімнат або вікон зі складною конструкцією. Окрім практичності, вони слугують стильним декоративним елементом, що підкреслить індивідуальність вашого простору.`,
    specs: [
      { key: "Механізм", value: "Ручний або пружинний" },
      { key: "Тип тканини", value: "Звичайна, blackout" },
      { key: "Колір", value: "Великий вибір" },
    ],
    jobs: [tj1, tj2, tj3, tj4, tj5],
      materials: tkanynni
  },

  "den-nich-tkanovi-rolete": {
    title: "Жалюзі",
    name: "ДЕНЬ - НІЧ тканьові ролети",
    image: z4,
    hero: h4,
    description: `Жалюзі День-Ніч — це унікальна інноваційна система, що дозволяє гнучко регулювати рівень освітлення у приміщенні завдяки чергуванню прозорих і непрозорих смуг тканини. Такий дизайн забезпечує комфортну атмосферу, дає змогу одночасно насолоджуватися природним світлом і зберігати приватність. Ця модель чудово підходить для віталень, кабінетів, дитячих кімнат та офісів, де важливо регулювати освітлення залежно від часу доби та потреб користувачів. Ланцюговий механізм управління простий і зручний, а ширина смуг (50 мм або 75 мм) дає змогу вибрати найбільш оптимальний варіант для конкретного інтер’єру. Матеріали, що використовуються, стійкі до вигорання та забруднень, що гарантує довготривале збереження яскравості кольорів. Крім того, тканинні ролети День-Ніч легко чистяться, підтримуючи гігієну приміщення. Ця модель — ідеальний компроміс між традиційними шторами і жалюзі, що відкриває нові горизонти в організації освітлення та декору.`,
    specs: [
      { key: "Механізм", value: "Ланцюговий" },
      { key: "Ширина смуг", value: "50 мм / 75 мм" },
    ],
    jobs: [dj1, dj2, dj3, dj4, dj5],
      materials: tkanynni
  },

  "derevyani-zhalyuzi": {
    title: "Жалюзі",
    name: "Дерев'яні жалюзі",
    image: z6,
    hero: h6,
    description: `Дерев'яні жалюзі — це не просто практичний елемент, а справжній акцент у створенні екологічного та природного інтер’єру. Вони виготовлені з натурального дерева, що надає приміщенню тепла, затишку та вишуканої краси. Ширина ламелей — 25 мм або 50 мм — дозволяє регулювати інтенсивність світла і створювати потрібний настрій в кімнаті. Такі жалюзі ідеально пасують до класичних, рустикальних, скандинавських або навіть сучасних інтер’єрів, де цінується натуральність і екостиль. Вони мають натуральну текстуру з видимою деревною структурою, що додає глибини й особливого шарму. Дерево обробляється спеціальними захисними складами, які роблять жалюзі стійкими до вологи, пилу і ультрафіолету, продовжуючи термін їх експлуатації. Управління такими жалюзі ручне, що забезпечує простоту і довговічність. Вони чудово підходять для віталень, спалень, кабінетів і дитячих кімнат, створюючи комфорт і гармонію в будинку.`,
    specs: [
      { key: "Матеріал", value: "Натуральне дерево" },
      { key: "Ширина ламелей", value: "25 мм / 50 мм" },
    ],
    jobs: [dej1, dej2, dej3, dej4, dej5],
      materials: derevyani
  },

  "rymski-shtory": {
    title: "Жалюзі",
    name: "Римські штори",
    image: z7,
    hero: h7,
    description: `Римські штори — це стильне і водночас функціональне рішення для вікон, яке поєднує в собі класичну елегантність і сучасні технології. Вони створюють м’який, акуратний вигляд завдяки рівним горизонтальним складкам, що піднімаються вгору, не порушуючи загальної гармонії інтер’єру. Ідеально підходять для віталень, спалень, дитячих кімнат, офісів та ресторанів, де важливий не лише захист від сонця, а й естетика. Тканини бувають світлопрозорими для м’якого розсіювання світла або затемнюючими blackout, які гарантують повне затемнення кімнати. Управління здійснюється за допомогою ланцюга або моторизованого механізму, що додає комфорту і зручності. Римські штори виготовляються на замовлення з урахуванням розмірів вікон і стилю інтер’єру, що дозволяє створити індивідуальний дизайн. Вони прості у догляді і довговічні, а також чудово поєднуються з іншими видами штор або жалюзі.`,
    specs: [
      { key: "Тип тканини", value: "Світлопрозора / затемнююча" },
      { key: "Управління", value: "Ланцюг або мотор" },
    ],
    jobs: [rj1, rj2, rj3, rj4, rj5],
      materials: rumski
  },

  "zhalyuzi-plysse": {
    title: "Жалюзі",
    name: "Жалюзі Плиссе",
    image: z8,
    hero: h8,
    description: `Жалюзі Плиссе — це оригінальне рішення у вигляді складок гармошки, що дозволяє декорувати вікна будь-якої форми — від стандартних прямокутних до аркових, трапецієподібних або круглих. Вони створюють унікальну гру світла і тіні, надаючи приміщенню сучасного та стильного вигляду. Такі жалюзі не тільки захищають від сонця, а й дозволяють економити простір завдяки компактному складанню тканини при піднятті. Монтаж здійснюється на штапик або раму, що дозволяє легко встановлювати їх навіть на нестандартні вікна. Матеріали — стійкі до вигорання, пилу та вологи, що забезпечує довговічність і простоту догляду. Жалюзі Плиссе можуть бути виконані у різних кольорах і фактурах, що дозволяє гармонійно вписати їх у будь-який інтер’єр — від офісу до житлової кімнати. Ця модель ідеальна для тих, хто цінує інноваційність, комфорт і стиль.`,
    specs: [
      { key: "Форма", value: "Стандартна або нестандартна" },
      { key: "Монтаж", value: "На штапик або раму" },
    ],
    jobs: [pj1, pj2, pj3, pj4, pj5],
    materials: plisse
  },

"avtomatyka-zhalyuzi": {
  title: "Жалюзі",
  name: "Автоматика Жалюзі",
  image: z9,
  hero: h9,
  description: `Автоматизовані жалюзі забезпечують максимальний комфорт у будь-якому приміщенні. Вони працюють на сонячних батареях або акумуляторах і не потребують дротів живлення. Керування здійснюється через пульт, смартфон або систему "розумний дім". Завдяки вбудованим електроприводам можна автоматизувати важкодоступні місця та великі ролети. Ця система дозволяє легко програмувати режим роботи, регулювати освітлення та створювати ефект присутності для безпеки заміського будинку. Ідеальний вибір для тих, хто цінує комфорт, сучасні технології та естетику.`,
  specs: [
    { key: "Тип приводу", value: "Електропривід" },
    { key: "Управління", value: "Пульт, смартфон, голос" },
    { key: "Живлення", value: "Сонячна батарея або акумулятор" },
    { key: "Автоматизація", value: "Можливість підключення до Smart Home" },
    { key: "Призначення", value: "Для важкодоступних місць і великих ролет" },
  ],
  jobs: [avj1, avj2, avj3, avj4, avj5],
},

};



export async function generateStaticParams() {
  return Object.keys(blindsData).map((key) => ({ windowblinds: key }));
}

export default function WindowPage({ params }) {
  const data = blindsData[params.windowblinds];

  return (
    <>

  <section className="relative h-[600px] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${data.hero.src})`,
          }}
        />
        <h1 className="relative text-white text-4xl font-bold z-10">
         {data.title}
        </h1>
      </section>
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 relative w-[400px] h-[500px] overflow-hidden rounded-sm">
            <img
              src={data.image.src}
              alt={data.name}
              style={{ objectFit: "cover" }}
              sizes="(min-width: 768px) 400px, 100vw"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-[40px] mb-4">{data.name}</h2>
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
            "ламелі з легкого алюмінію або дерева ",
            "матеріали не втрачають кольору",
            "забезпечує надійний захист від вологи та пилу",
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
      <section className="px-6 py-12 mx-auto">
        <h2 className="text-4xl md:text-[48px] mb-10 text-center ">
          Типи москітних сіток
        </h2>

      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mx-auto">
  {data.jobs && data.jobs.map((img, index) => {
    const translateClasses = [
      "md:translate-y-0",
      "md:-translate-y-7",
      "md:translate-y-5",
      "md:-translate-y-4",
      "md:translate-y-6",
    ];

    return (
      <div
        className={`rounded-md transform transition-transform duration-300 hover:scale-[0.995] ${translateClasses[index]}`}
        key={index}
        style={{ width: "250px", height: "380px" }}
      >
        <img
          src={img.src}
          alt={`j${index + 1}`}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    );
  })}
</div>

      </section>
      <DynamicCalculator productType={params.windowblinds}></DynamicCalculator>
      {data.materials && <FabricGrid products={data.materials}></FabricGrid>} 
    </>
  );
}
