import check from "@/app/assets/images/icons/check.svg";
import s5 from "@/app/assets/images/products/mosquito/5-new.jpg";
import j1 from "@/app/assets/images/jobs/screens/aj1.jpg";
import j2 from "@/app/assets/images/jobs/screens/aj2.jpg";
import j3 from "@/app/assets/images/jobs/screens/aj3.jpg";
import j4 from "@/app/assets/images/jobs/screens/aj4.jpg";
import j5 from "@/app/assets/images/jobs/screens/aj5.jpg";
import white from "@/app/assets/images/products/mosquito/rollo/Rollo_profil_white.png";
import brown from "@/app/assets/images/products/mosquito/rollo/Rollo_profil_brown.png";
import anthracite from "@/app/assets/images/products/mosquito/rollo/Rollo_profil_anthracite.png";
import img from "@/app/assets/images/products/mosquito/alyuminiievi/moskitiera.jpg";
import DynamicCalculator from "@/app/components/DynamicCalculator";
import Link from "next/link";
import PlisseScreens from "@/app/components/PlisseScreens";
import blackF from "@/app/assets/images/products/mosquito/rollo/Black.png";
import fiberglass from "@/app/assets/images/gallery/Fiberglass.webp";
import ultraView from "@/app/assets/images/gallery/UltraView.webp";
import antipul from "@/app/assets/images/gallery/antipul.webp";
import anticat from "@/app/assets/images/gallery/anticat.webp";
import hero from "@/app/assets/images/hero/aluminium_sitka.jpg"

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
          Для Алюмінієвих Вікон
        </h1>
      </section>
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="w-[300px] h-[400px] relative">
              <img
                src={s5.src}
                alt="Сітка для Алюмінієвих Вікон"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-[36px] md:text-[42px] mb-4">
              Сітка для Алюмінієвих Вікон{" "}
            </h2>
            <p className="text-[#555555] text-[18px] leading-relaxed">
              Система фіксованих москітних сіток MRSZ - це рішення, призначене
              для вико- ристання на лицьових алюмінієвих вікнах. Такі москітні
              сітки характеризуються високою естетикою та якістю деталей. Усі
              елементи конструкції MRSZ виготовлені з екструдованого алюмінію,
              що забезпечує їм стійкість від дії погодних умов, забез- печуючи
              надійне користування продуктом протягом багатьох років. Раму
              москітної сітки MRSZ можна з'єднати за допомогою алюмінієвих
              внутрішніх обтискних або гвинтових куточків, що робить її
              естетично привабливою і гармонійно поєднується за кольором з
              віконною рамою. Продумана конструкція системи дозволяє виготовляти
              великі розміри (2000×2000 мм без з'єднувального профілю, а з
              з'єднувальним профілем 2000×3000 мм). Використання рамної
              москітної сітки жодним чином не обмежує функціональність вікна.
              Кріплення москітної сітки сумісні з усіма віконними системами, які
              пропонує Aluprof.
            </p>
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
      { [
    { key: "Профіль", value: "Якісний алюмінієвий профіль ALUPROF" },
    { key: "Щільність", value: "Ворс по периметру для щільного прилягання" },
    { key: "Кріплення", value: "Без пластикових частин – тільки метал" },
    { key: "Ручки", value: "Надійні, довговічні ручки" },
    { key: "Сумісність", value: "Спеціальне кріплення під алюмінієве вікно" },
    { key: "Полотно", value: "Звичайне, «невидимка», антипил, антикішка" },
    { key: "Фарбування", value: "Під колір віконного профілю" },
  ].map((row, i) => (
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
        <PlisseScreens
          profileColors={[
            { src: white, label: "Білий" },
            { src: brown, label: "Коричневий" },
            { src: anthracite, label: "Антрацит" },
          ]}
          furnitureColors={[{ src: blackF, label: "Чорний" }]}
          products={[
            {
              id: "MRSZ — фіксована сітка.",
              img: img,
            },
          ]}
        />
     
      
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
      </section>      <section className="px-6 py-12 max-w-6xl mx-auto">
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

      <DynamicCalculator productType={"alyuminiievi-sitky"}></DynamicCalculator>
    </>
  );
}
