import Image from "next/image";
import check from "@/app/assets/images/icons/check.svg";
import s1 from "@/app/assets/images/products/mosquito/1.jpg";
import j1 from "@/app/assets/images/jobs/screens/rj1.jpg";
import j2 from "@/app/assets/images/jobs/screens/rj2.jpg";
import j3 from "@/app/assets/images/jobs/screens/rj3.jpg";
import j4 from "@/app/assets/images/jobs/screens/rj4.jpg";
import j5 from "@/app/assets/images/jobs/screens/rj5.jpg";
import white from "@/app/assets/images/products/mosquito/rollo/Rollo_profil_white.png";
import brown from "@/app/assets/images/products/mosquito/rollo/Rollo_profil_brown.png";
import black from "@/app/assets/images/products/mosquito/rollo/Rollo_profil_anthracite (1).png";
import anthracite from "@/app/assets/images/products/mosquito/rollo/Rollo_profil_anthracite.png";
import hImg from "@/app/assets/images/products/mosquito/rollo/ROLLO_horyzontalni.gif";
import vImg from "@/app/assets/images/products/mosquito/rollo/ROLLO_vertykalni.gif";
import size1 from "@/app/assets/images/products/mosquito/rollo/size1-roletni.jpg";
import size2 from "@/app/assets/images/products/mosquito/rollo/size2-roletni.jpg";
import size3 from "@/app/assets/images/products/mosquito/rollo/size3-roletni.jpg";
import DynamicCalculator from "@/app/components/DynamicCalculator";
import Link from "next/link";
import PlisseScreens from "@/app/components/PlisseScreens";
import blackF from "@/app/assets/images/products/mosquito/rollo/Black.png";

export default function WindowPage({ params }) {
  return (
    <>
      <section className="relative h-[400px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" />
        <h1 className="relative text-white text-4xl z-10">ROLLO Сітки</h1>
      </section>
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="w-[300px] h-[400px] relative">
              <img
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
            { src: white, label: "Білий" },
            { src: brown, label: "Коричневий" },
            { src: anthracite, label: "Антрацит" },
          ]}
          furnitureColors={[{ src: blackF, label: "Чорний" }]}
          products={[
            {
              id: "Ролетна Горизонтальна",
              img: hImg,
            },
          ]}
        />
        <div className="flex max-w-4xl gap-20px justify-between my-10 mx-auto">
          <img src={size1.src} alt="Розміри" width={300} height={300} />
          <img src={size2.src} alt="Розміри" width={300} height={300} />
          <img src={size3.src} alt="Розміри" width={300} height={300} />
        </div>
        <PlisseScreens
          profileColors={[
            { src: white, label: "Білий" },
            { src: brown, label: "Коричневий" },
            { src: anthracite, label: "Антрацит" },
            { src: black, label: "Чорний" },
          ]}
          furnitureColors={[{ src: blackF, label: "Чорний" }]}
          products={[
            {
              id: "Ролетна Вертикальна",
              img: vImg,
            },
          ]}
        />
        <div className="flex max-w-4xl gap-20px justify-between my-10 mx-auto">
          <img src={size1.src} alt="Розміри" width={300} height={300} />
          <img src={size2.src} alt="Розміри" width={300} height={300} />
          <img src={size3.src} alt="Розміри" width={300} height={300} />
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
      <DynamicCalculator productType={"rolovi-sitky"}></DynamicCalculator>
    </>
  );
}
