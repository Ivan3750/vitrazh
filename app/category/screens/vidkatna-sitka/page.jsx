import image from "next/image";
import check from "@/app/assets/images/icons/check.svg";
import s1 from "@/app/assets/images/products/mosquito/1.jpg";
import s2 from "@/app/assets/images/products/mosquito/2.jpg";
import s3 from "@/app/assets/images/products/mosquito/3-new.jpg";
import s4 from "@/app/assets/images/products/mosquito/4.jpg";
import s5 from "@/app/assets/images/products/mosquito/5-new.jpg";
import s6 from "@/app/assets/images/products/mosquito/6-new.jpg";
import j1 from "@/app/assets/images/jobs/screens/vj1.jpg";
import j2 from "@/app/assets/images/jobs/screens/vj2.jpg";
import j3 from "@/app/assets/images/jobs/screens/vj3.jpg";
import j4 from "@/app/assets/images/jobs/screens/vj4.jpg";
import j5 from "@/app/assets/images/jobs/screens/vj5.jpg";
import DynamicCalculator from "@/app/components/DynamicCalculator";
import Link from "next/link";
import z from "@/app/assets/images/products/mosquito/vidkatna/ist-z.jpg.webp"
import e from "@/app/assets/images/products/mosquito/vidkatna/ist-e.jpg.webp"
import hero from "@/app/assets/images/hero/vidkatna_sitka.jpg"


  const systems = [
    {
      title: "Розсувна система Slide з основою IST Z",
      image: z.src,
      description: `Раму сітки можна використовувати для підйомно-зсувних конструкцій, дверей зимових садів, балконів та багатосекційних вікон. Ефективний захист, що практично невидимий. Доступний у різних виконаннях.`,
      sizes: {
        minWidth: 1200,
        minHeight: 500,
        maxWidth: 5000,
        maxHeight: 4000,
        maxArea: 9,
      },
    },
    {
      title: "Розсувна система Slide з направляючими IST E",
      image: e.src,
      description: `Ідеально інтегрована сітка для вікон, балконів, зимових садів і складних склопакетів. Не потребує ручок. Надійний захист при мінімальній видимості.`,
      sizes: {
        minWidth: 600,
        minHeight: 500,
        maxWidth: 2500,
        maxHeight: 4000,
        maxArea: 9,
      },
    },
  ];
export default function WindowPage({ params }) {
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
Відкатні Сітки            </h1>
            </section>
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="w-[300px] h-[400px] relative">
              <img
                src={s4.src}
                alt="Відкатна Антимоскітна Сітка"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-[36px] md:text-[42px] mb-4">
              Відкатна Антимоскітна Сітка{" "}
            </h2>
            <p className="text-[#555555] text-[18px] leading-relaxed">
              Висока несуча здатність профілів дає можливість виготовляти дійсно
              габаритні конструкції, а продумана ергономіка системи робить її
              непомітною і комфортною в експлуатації. Велике різноманіття
              направляючих шин дозволяє встановлювати дану систему не тільки
              безпосередньо на світлопрозору конструкцію, а й автономно, як
              окремий елемент. Такий вид конструкції найчастіше використовується
              в отворах великого розміру - балкони, тераси, лоджії, альтанки
              тощо.
            </p>
          </div>
        </div>
      </section>
<section className=" py-16 px-4">
  <h2 className="text-4xl text-center  mb-14 text-black">
    Варіанти кріплень рамних москітних сіток
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
    {systems.map((sys, idx) => (
      <div
        key={idx}
        className="bg-[#f8f7f0] rounded-md  flex flex-col md:flex-row"
        style={{ minHeight: "250px" }}
      >
        {/* Зображення зліва */}
        <img
          src={sys.image.src}
          alt={sys.title}
          className="w-full md:w-48 object-contain p-4"
          loading="lazy"
        />

        {/* Текстовий блок праворуч */}
        <div className="p-6 flex flex-col justify-center">
          <h3 className="text-2xl   mb-3 text-black">{sys.title}</h3>
          <p className="text-gray-700 mb-4">{sys.description}</p>
          <ul className="text-gray-600 mb-6 list-disc list-inside text-sm">
            <li>Мін. ширина: <strong>{sys.sizes.minWidth} мм</strong></li>
            <li>Мін. висота: <strong>{sys.sizes.minHeight} мм</strong></li>
            <li>Макс. ширина: <strong>{sys.sizes.maxWidth} мм</strong></li>
            <li>Макс. висота: <strong>{sys.sizes.maxHeight} мм</strong></li>
            <li>Макс. площа: <strong>{sys.sizes.maxArea} м²</strong></li>
          </ul>
  
        </div>
      </div>
    ))}
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
      <DynamicCalculator productType={"vidkatna-sitka"}></DynamicCalculator>
    </>
  );
}
