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
import gold from "@/app/assets/images/products/mosquito/plise/Plisse_profil_gold_oak.png";
import white from "@/app/assets/images/products/mosquito/plise/Plisse_profil_white.png";
import brown from "@/app/assets/images/products/mosquito/plise/Plisse_profil_brown.png";
import black from "@/app/assets/images/products/mosquito/plise/Plisse_profil_black.png";
import anthracite from "@/app/assets/images/products/mosquito/plise/Plisse_profil_anthracite.png";
import screen from "@/app/assets/images/products/mosquito/plise/plisse_sitka.jpg"
import pl1 from "@/app/assets/images/products/mosquito/plise/PL_1.gif";
import pl2 from "@/app/assets/images/products/mosquito/plise/PL_2.gif";
import pl3 from "@/app/assets/images/products/mosquito/plise/PL_3.gif";
import pl4 from "@/app/assets/images/products/mosquito/plise/PL_4.gif";
import pl5 from "@/app/assets/images/products/mosquito/plise/PL_5.gif";
import blackF from "@/app/assets/images/products/mosquito/rollo/Black.png"
import size1 from "@/app/assets/images/products/mosquito/plise/Rozmir (1).png"
import DynamicCalculator from "@/app/components/DynamicCalculator";
import Link from "next/link";
import PlisseScreens from "@/app/components/PlisseScreens";

const windowsData = {
  "rolovi-sitky": {
    title: "Ролетні Сітки",
    name: "Ролові Антимоскітні Сітки",
    image: s1,
    description: `Ролетна антимоскітна сітка – зручне рішення, яке ховається в алюмінієвий короб, коли не використовується. Механізм працює вертикально або горизонтально, сітка опускається за допомогою пружинного механізму. Підходить для вікон і дверей. Захищає від комах, легко чиститься і не займає багато місця.`,
    specs: [
      { key: "Тип відкривання", value: "Вертикальне/горизонтальне" },
      { key: "Короб", value: "Алюмінієвий, компактний" },
      { key: "Управління", value: "Пружинний механізм" },
      { key: "Колір", value: "Білий, коричневий, антрацит" },
      { key: "Монтаж", value: "На вікна та двері" },
    ],
  },

  "plisse-sitky": {
    title: "PLISSE Сітки",
    name: "Антимоскітні сітки PLISSE",
    image: s2,
    description: ``,
    specs: [
      { key: "Тип конструкції", value: "Гармошка (пліссе)" },
      { key: "Керування", value: "З обох сторін" },
      { key: "Матеріал профілю", value: "Алюміній" },
      { key: "Монтаж", value: "Без демонтажу на зиму" },
      { key: "Колір", value: "Білий, антрацит, на замовлення" },
    ],
  },

  "dverni-sitky": {
    title: "Дверні Сітки",
    name: "Дверні Антимоскітні Сітки",
    image: s3,
    description: `Дверна антимоскітна сітка – це алюмінієва рамна конструкція з петлями, імпостом та магнітами. Встановлюється на дверні прорізи, легко відкривається і щільно фіксується. Популярна в приватних будинках, забезпечує ефективний захист від комах.`,
    specs: [
      { key: "Тип конструкції", value: "Рамна з петлями" },
      { key: "Фіксація", value: "Магнітна + щітка по периметру" },
      { key: "Матеріал", value: "Алюміній + сітка з фібергласу" },
      { key: "Колір", value: "Білий, коричневий, інші під замовлення" },
      { key: "Монтаж", value: "На дверні прорізи" },
    ],
  },

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
        <h1 className="relative text-white text-4xl z-10">PLISSE Сітки</h1>
      </section>
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="w-[300px] h-[400px] relative">
              <Image
                src={s2}
                alt="Антимоскітні сітки PLISSE"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-[36px] md:text-[42px] mb-4">
              Антимоскітні сітки PLISSE
            </h2>
            <p className="text-[#555555] text-[18px] leading-relaxed">
              PLISSE – це гармошкоподібна антимоскітна сітка, яка розсувається
              вбік. Профіль із алюмінію, легка конструкція, що ідеально
              підходить для балконів, дверей і великих прорізів. Сітка
              складається в непомітний паз і не потребує зняття взимку.{" "}
            </p>
          </div>
        </div>
      </section>
      <PlisseScreens
        profileColors={[
          { src: white, label: "Білий глянець" },
          { src: brown, label: "Коричневий глянець" },
          { src: black, label: "Чорний матовий" },
          { src: anthracite, label: "Антрацит глянець" },
          { src: gold, label: "Золотий дуб структурний" },
        ]}
        furnitureColors={[{ src: blackF, label: "Чорний" }]}
        meshOptions={[{ src: screen, label: "Сітка PLISSE" }]}
        products={[
          {
            id: "PL5",
            img: pl5,
            desc: "Великий профіль, вертикальне відкривання",
          },
        ]}
      />
       <div className="flex max-w-4xl gap-20px justify-between my-10 mx-auto">
                <Image src={size1} alt="Розміри" width={1000} height={300}></Image>
        </div>  
      <PlisseScreens
        profileColors={[
          { src: white, label: "Білий глянець" },
          { src: brown, label: "Коричневий глянець" },
          { src: black, label: "Чорний матовий" },
          { src: anthracite, label: "Антрацит глянець" },
          { src: gold, label: "Золотий дуб структурний" },
        ]}
        furnitureColors={[{ src: blackF, label: "Чорний" }]}
        meshOptions={[{ src: screen, label: "Сітка PLISSE" }]}
        products={[
          {
            id: "PL4",
            img: pl4,
            desc: "Великий профіль, вертикальне відкривання",
          },
        ]}
      />
      <div className="flex max-w-4xl gap-20px justify-between my-10 mx-auto">
                <Image src={size1} alt="Розміри" width={1000} height={300}></Image>
        </div>  
      <PlisseScreens
        profileColors={[
          { src: white, label: "Білий глянець" },
          { src: brown, label: "Коричневий глянець" },
          { src: black, label: "Чорний матовий" },
          { src: anthracite, label: "Антрацит глянець" },
          { src: gold, label: "Золотий дуб структурний" },
        ]}
        furnitureColors={[{ src: blackF, label: "Чорний" }]}
        meshOptions={[{ src: screen, label: "Сітка PLISSE" }]}
        products={[
          {
            id: "PL3",
            img: pl3,
            desc: "Великий профіль, вертикальне відкривання",
          },
        ]}
      />
      <div className="flex max-w-4xl gap-20px justify-between my-10 mx-auto">
                <Image src={size1} alt="Розміри" width={1000} height={300}></Image>
        </div>  
      <PlisseScreens
        profileColors={[
          { src: white, label: "Білий глянець" },
          { src: brown, label: "Коричневий глянець" },
          { src: black, label: "Чорний матовий" },
          { src: anthracite, label: "Антрацит глянець" },
          { src: gold, label: "Золотий дуб структурний" },
        ]}
        furnitureColors={[{ src: blackF, label: "Чорний" }]}
        meshOptions={[{ src: screen, label: "Сітка PLISSE" }]}
        products={[
          {
            id: "PL2",
            img: pl2,
            desc: "Великий профіль, вертикальне відкривання",
          },
        ]}
      />
      <div className="flex max-w-4xl gap-20px justify-between my-10 mx-auto">
                <Image src={size1} alt="Розміри" width={1000} height={300}></Image>
        </div>  
      <PlisseScreens
        profileColors={[
          { src: white, label: "Білий глянець" },
          { src: brown, label: "Коричневий глянець" },
          { src: black, label: "Чорний матовий" },
          { src: anthracite, label: "Антрацит глянець" },
          { src: gold, label: "Золотий дуб структурний" },
        ]}
        furnitureColors={[{ src: blackF, label: "Чорний" }]}
        meshOptions={[{ src: screen, label: "Сітка PLISSE" }]}
        products={[
          {
            id: "PL1",
            img: pl1,
            desc: "Великий профіль, вертикальне відкривання",
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
      <section className="px-6 py-12 mx-auto">
        <h2 className="text-4xl md:text-[48px] mb-10 text-center ">
          Типи москітних сіток
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mx-auto">
          {[j1, j2, j3, j4, j5].map((img, index) => {
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
                  className={`rounded-md transform transition-transform duration-300 hover:scale-[0.995] ${translateClasses[index]}`}
                >
                  <Image
                    src={img}
                    alt={`j${index + 1}`}
                    className="h-[250px] md:h-[300px] xl:h-[350px] w-auto max-w-none object-cover rounded-md"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <DynamicCalculator productType={"plisse-sitky"}></DynamicCalculator>
    </>
  );
}
  