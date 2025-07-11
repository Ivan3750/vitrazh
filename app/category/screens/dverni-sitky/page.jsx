import Image from "next/image";
import check from "@/app/assets/images/icons/check.svg";
import s1 from "@/app/assets/images/products/mosquito/1.jpg";
import s2 from "@/app/assets/images/products/mosquito/2.jpg";
import s3 from "@/app/assets/images/products/mosquito/3-new.jpg";
import s4 from "@/app/assets/images/products/mosquito/4.jpg";
import s5 from "@/app/assets/images/products/mosquito/5-new.jpg";
import s6 from "@/app/assets/images/products/mosquito/6-new.jpg";
import j1 from "@/app/assets/images/jobs/screens/1.png";
import j2 from "@/app/assets/images/jobs/screens/2.png";
import j3 from "@/app/assets/images/jobs/screens/3.png";
import j4 from "@/app/assets/images/jobs/screens/4.png";
import j5 from "@/app/assets/images/jobs/screens/5.png";
import j6 from "@/app/assets/images/products/mosquito/10.jpg";
import j7 from "@/app/assets/images/products/mosquito/11.jpg";
import white from "@/app/assets/images/products/mosquito/dverni/Profil_White.png";
import brown from "@/app/assets/images/products/mosquito/dverni/Profil_Brown.png";
import anthracite from "@/app/assets/images/products/mosquito/dverni/Profil_Antrachite.png";
import ramka from "@/app/assets/images/products/mosquito/dverni/Ramka.jpg";
import whiteF from "@/app/assets/images/products/mosquito/dverni/White.png";
import brownF from "@/app/assets/images/products/mosquito/dverni/Brown.png";
import anthraciteF from "@/app/assets/images/products/mosquito/dverni/Anthracite.png";
import size1 from "@/app/assets/images/products/mosquito/dverni/Rozmir.png";
import DynamicCalculator from "@/app/components/DynamicCalculator";
import Link from "next/link";
import PlisseScreens from "@/app/components/PlisseScreens";
import fiberglass from "@/app/assets/images/gallery/Fiberglass.webp";
import ultraView from "@/app/assets/images/gallery/UltraView.webp";
import antipul from "@/app/assets/images/gallery/antipul.webp";
import anticat from "@/app/assets/images/gallery/anticat.webp";
import SectionContact from "@/app/components/SectionContact";
const windowsData = {
  "vidkatna-sitka": {
    title: "Відкатні Сітки",
    name: "Відкатна Антимоскітна Сітка",
    image: s4,
    description: `Відкатна антимоскітна сітка — ідеальна для великих прорізів, терас, балконів. Рухається по напрямних, як розсувні двері. Надійна, довговічна, не заважає огляду. Працює плавно, витримує інтенсивне використання.`,
    specs: [
      { key: "Тип відкривання", value: "Розсувна (вбік)" },
      { key: "Профіль", value: "Алюміній" },
      { key: "Механізм", value: "Роликові направляючі" },
      { key: "Застосування", value: "Балкони, тераси, двері" },
      { key: "Колір", value: "Антрацит, білий, на замовлення" },
    ],
  },

  "alyuminiievi-sitky": {
    title: "Для Алюмінієвих Вікон",
    name: "Сітка для Алюмінієвих Вікон",
    image: s5,
    description: `Антимоскітна сітка для алюмінієвих вікон — це легка рамна конструкція, яка щільно прилягає до вікна. Спеціально адаптована для алюмінієвих систем. Легка в монтажі, забезпечує надійний захист без втрати естетики.`,
    specs: [
      { key: "Тип", value: "Рамна" },
      { key: "Матеріал", value: "Алюмінієвий профіль + фіберглас" },
      { key: "Кріплення", value: "Зовнішнє, з фіксаторами" },
      { key: "Сумісність", value: "Алюмінієві вікна" },
      { key: "Колір", value: "Під замовлення" },
    ],
  },

  "ramna-sitka": {
    title: "Рамна Сітка",
    name: "Рамна Антимоскітна Сітка",
    image: s6,
    description: `Класична рамна антимоскітна сітка — просте, надійне та економічне рішення для захисту від комах. Встановлюється зовні вікна за допомогою поворотних кріплень. Підходить для пластикових і дерев'яних вікон.`,
    specs: [
      { key: "Тип", value: "Рамна" },
      { key: "Матеріал", value: "Профіль + сітка з фібергласу" },
      { key: "Монтаж", value: "Зовнішній" },
      { key: "Сумісність", value: "ПВХ, дерево" },
      { key: "Колір", value: "Білий, коричневий" },
    ],
  },
};

export default function WindowPage({ params }) {
  return (
    <>
      <section className="relative h-[400px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" />
        <h1 className="relative text-white text-4xl z-10">Дверні Сітки</h1>
      </section>
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="w-[300px] h-[400px] relative">
              <Image
                src={s3}
                alt="Дверні Антимоскітні Сітки"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-[36px] md:text-[42px] mb-4">
              Дверні Антимоскітні Сітки
            </h2>
            <p className="text-[#555555] text-[18px] leading-relaxed">
              Дверна антимоскітна сітка – це алюмінієва рамна конструкція з
              петлями, імпостом та магнітами. Встановлюється на дверні прорізи,
              легко відкривається і щільно фіксується. Популярна в приватних
              будинках, забезпечує ефективний захист від комах.
            </p>
          </div>
        </div>
      </section>
      <PlisseScreens
        profileColors={[
          { src: white, label: "Білий" },
          { src: brown, label: "Коричневий " },
          { src: anthracite, label: "Антрацит" },
        ]}
        furnitureColors={[{ src: whiteF, label: "Білий" }, { src: brownF, label: "Коричневий" }, { src: anthraciteF, label: "Антрацит" }]}
        products={[
          {
            id: "ПРОФІЛЬ 13*32",
            img: ramka,
          },
        ]}
      />
      <div className="flex max-w-4xl gap-20px justify-between my-10 mx-auto">
        <Image src={size1} alt="Розміри" width={1000} height={300}></Image>
      </div>
   
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
        <h2 className="text-4xl md:text-[48px]  mb-10 text-center">
          Типи полотна
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <Image
              src={fiberglass}
              alt="Сітка Fiberglass"
              className="w-full h-auto  mb-1 object-contain"
            />
            <h3 className="text-xl font-normal mb-2">Стандарт «Fiberglass»</h3>
            <p className="text-[#555555] text-[16px]">
              Базовий оптимальний варіант, який пропонує високе співвідношення
              якості та ціни, а також має високі характеристики міцності. Ця
              москітна сітка підходить для всіх систем, забезпечуючи надійний
              захист від комах.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src={ultraView}
              alt="Сітка Ultra View"
              className="w-full h-auto  mb-1 object-contain"
            />
            <h3 className="text-xl font-normal mb-2">Невидимка «Ultra View»</h3>
            <p className="text-[#555555] text-[16px]">
              Ця сітка має тоншу нитку, що робить її прозорою та майже невидимою
              на вікнах. Вона пропускає на 25% більше світла та повітряного
              потоку.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src={antipul}
              alt="Сітка Антипил"
              className="w-full h-auto  mb-1 object-contain"
            />
            <h3 className="text-xl font-normal mb-2">Антипил</h3>
            <p className="text-[#555555] text-[16px]">
              Забезпечує надійний захист від великого та дрібного пилу, а також
              від комарів та інших комах. Застосовується на нижніх поверхах
              житлових приміщень.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Image
              src={anticat}
              alt="Сітка Антикішка"
              className="w-full h-auto  mb-1 object-contain"
            />
            <h3 className="text-xl font-normal mb-2">Антикішка</h3>
            <p className="text-[#555555] text-[16px]">
              Замість звичайного полотна використовується металева сітка, яка
              виступає перешкодою для птахів та домашніх тварин. Її міцність
              дозволяє витримати навіть вагу невеликої тварини.
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 py-12 mx-auto">
        <h2 className="text-4xl md:text-[48px] mb-10 text-center ">
          Типи москітних сіток
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mx-auto">
          {[j6, j2, j3, j7, j5].map((img, index) => {
            // Відповідні класи translate-y з md:
            const translateClasses = [
              "md:translate-y-0",
              "md:-translate-y-7", // -28px приблизно
              "md:translate-y-5", // 20px
              "md:-translate-y-4", // -16px
              "md:translate-y-6", // 24px
            ];

            return (
              <Link href="/" key={index}>
          <div
  className={`w-[250px] rounded-md transform transition-transform duration-300 hover:scale-[0.995] ${translateClasses[index]}`}
>
  <Image
    src={img}
    alt={`j${index + 1}`}
    className="w-[250px] h-[250px] md:h-[300px] xl:h-[350px] object-cover rounded-md"
  />
</div>


              </Link>
            );
          })}
        </div>
      </section>
     
      <DynamicCalculator productType={"dverni-sitky"}></DynamicCalculator>
    </>
  );
}
