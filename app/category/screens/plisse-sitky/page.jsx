import PageHero from "@/app/components/site/PageHero";
import Image from "next/image";
import check from "@/app/assets/images/icons/check.svg";
import s1 from "@/app/assets/images-webp/products/mosquito/1.webp";
import s2 from "@/app/assets/images-webp/products/mosquito/2.webp";
import s3 from "@/app/assets/images-webp/products/mosquito/3-new.webp";
import s4 from "@/app/assets/images-webp/products/mosquito/4.webp";
import s5 from "@/app/assets/images-webp/products/mosquito/5-new.webp";
import s6 from "@/app/assets/images-webp/products/mosquito/6-new.webp";
import j1 from "@/app/assets/images-webp/jobs/screens/pj1.webp";
import j2 from "@/app/assets/images-webp/jobs/screens/pj2.webp";
import j3 from "@/app/assets/images-webp/jobs/screens/pj3.webp";
import j4 from "@/app/assets/images-webp/jobs/screens/pj4.webp";
import j5 from "@/app/assets/images-webp/jobs/screens/pj5.webp";
import gold from "@/app/assets/images-webp/products/mosquito/plise/Plisse_profil_gold_oak.webp";
import white from "@/app/assets/images-webp/products/mosquito/plise/Plisse_profil_white.webp";
import brown from "@/app/assets/images-webp/products/mosquito/plise/Plisse_profil_brown.webp";
import black from "@/app/assets/images-webp/products/mosquito/plise/Plisse_profil_black.webp";
import anthracite from "@/app/assets/images-webp/products/mosquito/plise/Plisse_profil_anthracite.webp";
import screen from "@/app/assets/images-webp/products/mosquito/plise/plisse_sitka.webp"
import pl1 from "@/app/assets/images/products/mosquito/plise/PL_1.gif";
import pl2 from "@/app/assets/images/products/mosquito/plise/PL_2.gif";
import pl3 from "@/app/assets/images-webp/products/mosquito/plise/PL_3.webp";
import pl4 from "@/app/assets/images-webp/products/mosquito/plise/PL_4.webp";
import pl5 from "@/app/assets/images/products/mosquito/plise/PL_5.gif";
import blackF from "@/app/assets/images-webp/products/mosquito/rollo/Black.webp"
import size1 from "@/app/assets/images-webp/products/mosquito/plise/Rozmir (1).webp"
import DynamicCalculator from "@/app/components/DynamicCalculator";
import Link from "next/link";
import PlisseScreens from "@/app/components/PlisseScreens";
import hero from "@/app/assets/images-webp/hero/plisse_sitka.webp"

export const metadata = {
  alternates: { canonical: "/category/screens/plisse-sitky/" },
  title: "PLISSE Сітки | Антимоскітні сітки для дверей та балконів",
  description:
    "Купити PLISSE сітки для дверей та балконів. Гармошкоподібні антимоскітні сітки з алюмінієвим профілем. Надійний захист від комах і пилу.",
  keywords:
    "PLISSE сітки, антимоскітні сітки, сітки гармошка, сітки для дверей, сітки для балконів, купити PLISSE, Україна",
  openGraph: {
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    title: "PLISSE Сітки | Антимоскітні сітки для дверей та балконів",
    description:
      "Гармошкоподібні PLISSE сітки з алюмінієвим профілем для дверей та балконів. Легка конструкція, що легко складається в паз, ефективний захист від комах.",
    url: "https://vitrazh.com.ua/category/plisse-sitky",
  },
  twitter: {
    title: "PLISSE Сітки | Антимоскітні сітки для дверей та балконів",
    description:
      "PLISSE сітки для дверей та балконів. Гармошкоподібні, алюмінієвий профіль, захист від комах. Легке відкривання і компактне зберігання.",
  },
};


export default function WindowPage({ params }) {
  return (
    <>
            <PageHero image={hero}>PLISSE Сітки</PageHero>
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="w-[300px] h-[400px] relative">
              <img loading="lazy" decoding="async"
                src={s2.src}
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
          { src: white.src, label: "Білий глянець" },
          { src: brown.src, label: "Коричневий глянець" },
          { src: black.src, label: "Чорний матовий" },
          { src: anthracite.src, label: "Антрацит глянець" },
          { src: gold.src, label: "Золотий дуб структурний" },
        ]}
        furnitureColors={[{ src: blackF.src, label: "Чорний" }]}
        meshOptions={[{ src: screen.src, label: "Сітка PLISSE" }]}
        products={[
          {
            id: "PL5",
            img: pl5,
            desc: "Великий профіль, вертикальне відкривання",
          },
        ]}
      />
       <div className="flex max-w-4xl gap-20px justify-between my-10 mx-auto">
                <img loading="lazy" decoding="async" src={size1.src} alt="Розміри" width={1000} height={300}/>
        </div>  
      <PlisseScreens
        profileColors={[
          { src: white.src, label: "Білий глянець" },
          { src: brown.src, label: "Коричневий глянець" },
          { src: black.src, label: "Чорний матовий" },
          { src: anthracite.src, label: "Антрацит глянець" },
          { src: gold.src, label: "Золотий дуб структурний" },
        ]}
        furnitureColors={[{ src: blackF.src, label: "Чорний" }]}
        meshOptions={[{ src: screen.src, label: "Сітка PLISSE" }]}
        products={[
          {
            id: "PL4",
            img: pl4,
            desc: "Великий профіль, вертикальне відкривання",
          },
        ]}
      />
      <div className="flex max-w-4xl gap-20px justify-between my-10 mx-auto">
                <img loading="lazy" decoding="async" src={size1.src} alt="Розміри" width={1000} height={300}/>
        </div>  
      <PlisseScreens
        profileColors={[
          { src: white.src, label: "Білий глянець" },
          { src: brown.src, label: "Коричневий глянець" },
          { src: black.src, label: "Чорний матовий" },
          { src: anthracite.src, label: "Антрацит глянець" },
          { src: gold.src, label: "Золотий дуб структурний" },
        ]}
        furnitureColors={[{ src: blackF.src, label: "Чорний" }]}
        meshOptions={[{ src: screen.src, label: "Сітка PLISSE" }]}
        products={[
          {
            id: "PL3",
            img: pl3,
            desc: "Великий профіль, вертикальне відкривання",
          },
        ]}
      />
      <div className="flex max-w-4xl gap-20px justify-between my-10 mx-auto">
                <img loading="lazy" decoding="async" src={size1.src} alt="Розміри" width={1000} height={300}/>
        </div>  
      <PlisseScreens
        profileColors={[
          { src: white.src, label: "Білий глянець" },
          { src: brown.src, label: "Коричневий глянець" },
          { src: black.src, label: "Чорний матовий" },
          { src: anthracite.src, label: "Антрацит глянець" },
          { src: gold.src, label: "Золотий дуб структурний" },
        ]}
        furnitureColors={[{ src: blackF.src, label: "Чорний" }]}
        meshOptions={[{ src: screen.src, label: "Сітка PLISSE" }]}
        products={[
          {
            id: "PL2",
            img: pl2,
            desc: "Великий профіль, вертикальне відкривання",
          },
        ]}
      />
      <div className="flex max-w-4xl gap-20px justify-between my-10 mx-auto">
                <img loading="lazy" decoding="async" src={size1.src} alt="Розміри" width={1000} height={300}/>
        </div>  
      <PlisseScreens
        profileColors={[
          { src: white.src, label: "Білий глянець" },
          { src: brown.src, label: "Коричневий глянець" },
          { src: black.src, label: "Чорний матовий" },
          { src: anthracite.src, label: "Антрацит глянець" },
          { src: gold.src, label: "Золотий дуб структурний" },
        ]}
        furnitureColors={[{ src: blackF.src, label: "Чорний" }]}
        meshOptions={[{ src: screen.src, label: "Сітка PLISSE" }]}
        products={[
          {
            id: "PL1",
            img: pl1,
            desc: "Великий профіль, вертикальне відкривання",
          },
        ]}
      />
      <div className="flex max-w-4xl gap-20px justify-between my-10 mx-auto">
                <img loading="lazy" decoding="async" src={size1.src} alt="Розміри" width={1000} height={300}/>
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
              className="flex bg-paper py-[60px] px-[40px] gap-5"
            >
              <div className="p-2 bg-brand-lime w-9 h-9 flex items-center justify-center">
                <img loading="lazy" decoding="async" src={check.src} alt="Перевага" width={22} height={22} />
              </div>
              <p className="text-[16px] md:text-[18px]">{title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 py-12 mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
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
                  className={` transform transition-transform duration-300 hover:scale-[0.995] ${translateClasses[index]}`}
                >
                  <img loading="lazy" decoding="async"
                    src={img.src}
                    alt={`j${index + 1}`}
                    className="h-[250px] md:h-[300px] xl:h-[350px] w-auto max-w-none object-cover"
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
  