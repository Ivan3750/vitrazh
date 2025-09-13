import Image from "next/image";
import check from "@/app/assets/images/icons/check.svg";
import s6 from "@/app/assets/images/products/mosquito/6-new.jpg";
import j1 from "@/app/assets/images/jobs/screens/mj1.jpg";
import j2 from "@/app/assets/images/jobs/screens/mj2.jpg";
import j3 from "@/app/assets/images/jobs/screens/mj3.jpg";
import j4 from "@/app/assets/images/jobs/screens/mj4.jpg";
import j5 from "@/app/assets/images/jobs/screens/mj5.jpg";
import white1 from "@/app/assets/images/products/mosquito/ramna/11x32_profil_white.png";
import anthracite1 from "@/app/assets/images/products/mosquito/ramna/11x32_profil_anthracite.png";
import brown1 from "@/app/assets/images/products/mosquito/ramna/11x32_profil_brown.png";
import white2 from "@/app/assets/images/products/mosquito/ramna/Lux_profil_white.png";
import anthracite2 from "@/app/assets/images/products/mosquito/ramna/Lux_profil_anthracite.png";
import brown2 from "@/app/assets/images/products/mosquito/ramna/Lux_profil_brown.png";
import gold2 from "@/app/assets/images/products/mosquito/ramna/Lux_profil_gold_oak.png";
import fiberglass from "@/app/assets/images/gallery/Fiberglass.webp";
import ultraView from "@/app/assets/images/gallery/UltraView.webp";
import antipul from "@/app/assets/images/gallery/antipul.webp";
import anticat from "@/app/assets/images/gallery/anticat.webp";
import whiteF from "@/app/assets/images/products/mosquito/ramna/White.png";
import brownF from "@/app/assets/images/products/mosquito/ramna/Brown.png";
import anthraciteF from "@/app/assets/images/products/mosquito/ramna/Anthracite.png";
import profil1 from "@/app/assets/images/products/mosquito/ramna/11x32_ram.jpg"
import profil2 from "@/app/assets/images/products/mosquito/ramna/Lux_ram.jpg"
import size1 from "@/app/assets/images/products/mosquito/ramna/11x32_rozmir_profil.png";
import size2 from "@/app/assets/images/products/mosquito/ramna/Lux_rozmir_profil.png";
import DynamicCalculator from "@/app/components/DynamicCalculator";
import Link from "next/link";
import PlisseScreens from "@/app/components/PlisseScreens";
import hero from "@/app/assets/images/hero/ramna_sitka.jpg"

export const metadata = {
  title: "Рамні Сітки | Антимоскітні сітки для вікон та дверей",
  description:
    "Купити рамні антимоскітні сітки для вікон та дверей. Легке встановлення, міцна алюмінієва рамка, захист від комах та пилу. Надійні рішення для дому та офісу.",
  keywords:
    "рамні сітки, антимоскітні сітки, сітки для вікон, сітки для дверей, алюмінієві сітки, купити рамні сітки, Україна",
  openGraph: {
    title: "Рамні Сітки | Антимоскітні сітки для вікон та дверей",
    description:
      "Рамні сітки з алюмінієвим профілем та натягнутим полотном сітки. Легке встановлення, зручна експлуатація, ефективний захист від комах.",
    url: "https://vitrazh.com.ua/category/ramna-sitka",
  },
  twitter: {
    title: "Рамні Сітки | Антимоскітні сітки для вікон та дверей",
    description:
      "Купити рамні антимоскітні сітки. Міцна алюмінієва рамка, захист від комах та пилу, легке встановлення та обслуговування.",
  },
};


export default function WindowPage() {
  return (
    <>
          <section className="relative h-[600px] flex items-center justify-center bg-black overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                  backgroundImage: `url(${hero.src})`,
                }}
              />
              <h1 className="relative text-white text-4xl font-bold z-10">
Рамна Сітка       </h1>
            </section>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="w-[300px] h-[400px] relative">
              <img
                src={s6.src}
                alt="Дверні Антимоскітні Сітки"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-[36px] md:text-[42px] mb-4">
              Рамна Антимоскітна Сітка{" "}
            </h2>
            <p className="text-[#555555] text-[18px] leading-relaxed">
              Сітка рамного типу являє собою рамку з алюмінієвого профілю та
              натягнутим на неї полотном сітки. Такий тип сіток дуже легко
              встановлюється, зручний в експлуатації та простой в
              обслуговуванні. Доступна ціна та монтаж на будь який тип вікон
              робить їх найбільш популярним серед антимоскітних сіток. У
              модельному ряду рамного типу сіток представлені вироби з наступних
              профілів:
            </p>
          </div>
        </div>
      </section>
      <PlisseScreens
        profileColors={[
          { src: white1.src, label: "Білий" },
          { src: brown1.src, label: "Коричневий " },
          { src: anthracite1.src, label: "Антрацит" },
        ]}
        furnitureColors={[
          { src: whiteF.src, label: "Білий" },
          { src: brownF.src, label: "Коричневий" },
          { src: anthraciteF.src, label: "Антрацит" },
        ]}
        products={[
          {
            id: "ПРОФІЛЬ 11x32",
            img: profil1,
          },
        ]}
      />
      <div className="flex max-w-4xl gap-20px justify-between my-10 mx-auto">
        <img src={size1.src} alt="Розміри" width={1000} height={300}/>
      </div>
      <PlisseScreens
        profileColors={[
          { src: white2.src, label: "Білий" },
          { src: brown2.src, label: "Коричневий " },
          { src: anthracite2.src, label: "Антрацит" },
          { src: gold2.src, label: "Золотий дуб" },
        ]}
        furnitureColors={[
          { src: whiteF.src, label: "Білий" },
          { src: brownF.src, label: "Коричневий" },
          { src: anthraciteF.src, label: "Антрацит" },
        ]}
        products={[
          {
            id: "ПРОФІЛЬ LUX",
            img: profil2,
          },
        ]}
      />
      <div className="flex max-w-4xl gap-20px justify-between my-10 mx-auto">
        <img src={size2.src} alt="Розміри" width={1000} height={300}/>
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
                <img src={check.src} alt="Перевага" width={22} height={22} />
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
            <img
              src={fiberglass.src}
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
            <img
              src={ultraView.src}
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
            <img
              src={antipul.src}
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
            <img
              src={anticat.src}
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
          {[j1, j2, j3, j4, j5].map((img, index) => {
            // Відповідні класи translate-y з md:
            const translateClasses = [
              "md:translate-y-0",
              "md:-translate-y-7", // -28px 
              "md:translate-y-5", // 
              "md:-translate-y-4", // -
              "md:translate-y-6", 
            ];

            return (
              <Link href="/" key={index}>
                <div
                  className={`rounded-md transform transition-transform duration-300 hover:scale-[0.995] ${translateClasses[index]}`}
                >
                  <img
                    src={img.src}
                    alt={`j${index + 1}`}
                    className="h-[250px] md:h-[300px] xl:h-[350px] w-auto max-w-none object-cover rounded-md"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      
      <DynamicCalculator productType={"ramna-sitka"}></DynamicCalculator>
    </>
  );
}
