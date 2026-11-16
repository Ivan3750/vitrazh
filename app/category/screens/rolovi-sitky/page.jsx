import PageHero from "@/app/components/site/PageHero";
import Image from "next/image";
import check from "@/app/assets/images/icons/check.svg";
import s1 from "@/app/assets/images-webp/products/mosquito/1.webp";
import j1 from "@/app/assets/images-webp/jobs/screens/rj1.webp";
import j2 from "@/app/assets/images-webp/jobs/screens/rj2.webp";
import j3 from "@/app/assets/images-webp/jobs/screens/rj3.webp";
import j4 from "@/app/assets/images-webp/jobs/screens/rj4.webp";
import j5 from "@/app/assets/images-webp/jobs/screens/rj5.webp";
import white from "@/app/assets/images-webp/products/mosquito/rollo/Rollo_profil_white.webp";
import brown from "@/app/assets/images-webp/products/mosquito/rollo/Rollo_profil_brown.webp";
import black from "@/app/assets/images-webp/products/mosquito/rollo/Rollo_profil_anthracite (1).webp";
import anthracite from "@/app/assets/images-webp/products/mosquito/rollo/Rollo_profil_anthracite.webp";
import hImg from "@/app/assets/images-webp/products/mosquito/rollo/ROLLO_horyzontalni.webp";
import vImg from "@/app/assets/images-webp/products/mosquito/rollo/ROLLO_vertykalni.webp";
import size1 from "@/app/assets/images-webp/products/mosquito/rollo/size1-roletni.webp";
import size2 from "@/app/assets/images-webp/products/mosquito/rollo/size2-roletni.webp";
import size3 from "@/app/assets/images-webp/products/mosquito/rollo/size3-roletni.webp";
import DynamicCalculator from "@/app/components/DynamicCalculator";
import Link from "next/link";
import PlisseScreens from "@/app/components/PlisseScreens";
import blackF from "@/app/assets/images-webp/products/mosquito/rollo/Black.webp";
import hero from "@/app/assets/images-webp/hero/rolle_sitka.webp"

export const metadata = {
  alternates: { canonical: "/category/screens/rolovi-sitky/" },
  title: "ROLLO Сітки | Ролетні антимоскітні сітки для вікон та дверей",
  description:
    "Купити ролетні антимоскітні сітки ROLLO для вікон та дверей. Компактний алюмінієвий короб, вертикальне або горизонтальне відкривання, легка експлуатація та догляд.",
  keywords:
    "ролетні сітки, ROLLO сітки, антимоскітні сітки, сітки для вікон, сітки для дверей, купити ролети, Україна",
  openGraph: {
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    title: "ROLLO Сітки | Ролетні антимоскітні сітки для вікон та дверей",
    description:
      "Ролетні антимоскітні сітки з алюмінієвим коробом та пружинним механізмом. Вертикальне або горизонтальне відкривання, захист від комах, легка установка.",
    url: "https://vitrazh.com.ua/category/rollo-sitky",
  },
  twitter: {
    title: "ROLLO Сітки | Ролетні антимоскітні сітки для вікон та дверей",
    description:
      "ROLLO сітки – компактне та сучасне рішення для захисту від комах. Просте встановлення, довговічна конструкція, легке обслуговування.",
  },
};



export default function WindowPage({ params }) {
  return (
    <>
          <PageHero image={hero}>ROLLO Сітки</PageHero>
    
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 overflow-hidden">
            <div className="w-[300px] h-[400px] relative">
              <img loading="lazy" decoding="async"
                src={s1.src}
                alt="Антимоскітні сітки ROLLO"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-[36px] md:text-[42px] mb-4">
              Антимоскітні сітки ROLLO
            </h2>
            <p className="text-[#555555] text-[18px] leading-relaxed">
              Ролетна антимоскітна сітка – це сучасне та практичне рішення для
              захисту приміщення від комах. Полотно сітки розміщується в
              компактному алюмінієвому коробі та за потреби опускається вниз або
              вбік (залежно від моделі) за допомогою пружинного механізму.
              Встановлюється як на вікна, так і на дверні прорізи, проста у
              використанні та догляді. Завдяки своїй конструкції дозволяє швидко
              прибирати сітку в короб, коли вона не потрібна, що забезпечує
              додаткову зручність і довговічність виробу.
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <PlisseScreens
          profileColors={[
            { src: white.src, label: "Білий" },
            { src: brown.src, label: "Коричневий" },
            { src: anthracite.src, label: "Антрацит" },
          ]}
          furnitureColors={[{ src: blackF.src, label: "Чорний" }]}
          products={[
            {
              id: "Ролетна Горизонтальна",
              img: hImg,
            },
          ]}
        />
        <div className="flex max-w-4xl gap-20px justify-between my-10 mx-auto">
          <img loading="lazy" decoding="async" src={size1.src} alt="Розміри" width={300} height={300} />
          <img loading="lazy" decoding="async" src={size2.src} alt="Розміри" width={300} height={300} />
          <img loading="lazy" decoding="async" src={size3.src} alt="Розміри" width={300} height={300} />
        </div>
        <PlisseScreens
          profileColors={[
            { src: white.src, label: "Білий" },
            { src: brown.src, label: "Коричневий" },
            { src: anthracite.src, label: "Антрацит" },
            { src: black.src, label: "Чорний" },
          ]}
          furnitureColors={[{ src: blackF.src, label: "Чорний" }]}
          products={[
            {
              id: "Ролетна Вертикальна",
              img: vImg,
            },
          ]}
        />
        <div className="flex max-w-4xl gap-20px justify-between my-10 mx-auto">
          <img loading="lazy" decoding="async" src={size1.src} alt="Розміри" width={300} height={300} />
          <img loading="lazy" decoding="async" src={size2.src} alt="Розміри" width={300} height={300} />
          <img loading="lazy" decoding="async" src={size3.src} alt="Розміри" width={300} height={300} />
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
            const translateClasses = [
              "md:translate-y-0",
              "md:-translate-y-7", 
              "md:translate-y-5", 
              "md:-translate-y-4",
              "md:translate-y-6", 
            ];

            return (
                <div
                  className={` transform transition-transform duration-300 hover:scale-[0.995] ${translateClasses[index]}`}
                >
                  <img loading="lazy" decoding="async"
                    src={img.src}
                    alt={`j${index + 1}`}
                    className="h-[250px] md:h-[300px] xl:h-[350px] w-auto max-w-none object-cover"
                  />
                </div>
            );
          })}
        </div>
      </section>
      <DynamicCalculator productType={"rolovi-sitky"}></DynamicCalculator>
    </>
  );
}
