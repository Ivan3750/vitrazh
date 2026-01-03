import b from "@/app/assets/images/recovery/bg.jpeg";
import dh from "@/app/assets/images/recovery/destroyedhouse.webp";
import card from "@/app/assets/images/recovery/Ecard.png";
import consultation from "@/app/assets/images/icons/consultation.png";
import delivery from "@/app/assets/images/icons/delivery.png";
import document from "@/app/assets/images/icons/document.png";
import relax from "@/app/assets/images/icons/relax.png";
import report from "@/app/assets/images/icons/report.png";
import length from "@/app/assets/images/icons/length.png";
import Image from "next/image";

export const metadata = {
  title: "єВідновлення - Державна підтримка ремонту пошкоджених домівок",
  description:
    "Отримайте допомогу від державної програми єВідновлення для ремонту вікон, дверей, покрівлі та утеплення пошкодженого житла. Консультації, монтаж, офіційні документи.",
  keywords: [
    "єВідновлення",
    "державна програма ремонт житла",
    "ремонт вікон",
    "ремонт дверей",
    "покрівля ремонт",
    "компенсація війна Україна",
    "ремонт після війни",
  ],
  robots: "index, follow",
  openGraph: {
    title: "єВідновлення - допомога у ремонті житла після війни",
    description:
      "Дізнайтесь, як отримати державну підтримку для ремонту домівки через програму єВідновлення. Професійна консультація, заміри, монтаж та повний супровід.",
    url: "https://vitrazh.com.ua/recovery",
    siteName: "Твій сайт",
    images: [
      {
        url: b.src,
        width: 1200,
        height: 630,
        alt: "єВідновлення - ремонт житла після війни",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "єВідновлення - державна допомога ремонту житла",
    description:
      "Отримайте допомогу на ремонт житла через державну програму єВідновлення. Повний супровід від консультації до монтажу.",
    images: [b.src],
  },
  alternates: {
    canonical: "https://vitrazh.com.ua/recovery",
  },
};

const Recovery = () => {
  return (
    <>
      <section className="relative h-[400px] md:h-[600px] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${b.src})` }}
        />
        <h1 className="relative text-white text-3xl md:text-4xl font-bold z-10 text-center px-4">
          єВІДНОВЛЕННЯ
        </h1>
      </section>

      <section className="py-[80px] md:py-[100px] px-4">
        <div className="mc max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-[40px]">
            <div className="flex-1">
              <h2 className="text-[36px] md:text-[48px] lg:text-[64px]">Що таке єВідновлення?</h2>
              <p className="w-full md:w-[600px] text-[18px] md:text-[20px] text-[#555555] mt-4">
                єВідновлення - це державна програма підтримки українців, чиї
                домівки були пошкоджені або зруйновані внаслідок повномасштабної
                війни...
              </p>
              <p className="w-full md:w-[600px] text-[18px] md:text-[20px] text-[#555555] mt-4">
                Програма реалізується через застосунок Дія та передбачає як
                фінансову допомогу, так і можливість отримати будівельні послуги
                напряму від підрядників.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={dh.src}
                alt="Пошкодженне майно"
                width={680}
                height={380}
                className="rounded-sm w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[80px] md:py-[100px] px-4">
        <div className="mc max-w-[1200px] mx-auto">
          <h2 className="text-[36px] md:text-[48px] lg:text-[64px] text-center mb-[40px] md:mb-[50px]">
            Як ми можемо допомогти?
          </h2>
          <div className="bg-[#F8F7F0] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[{ icon: consultation, title: "Консультація", text: "Пояснюємо умови єВідновлення та супроводжуємо на кожному етапі." },
              { icon: length, title: "Точне вимірювання", text: "Підбираємо вікна та двері відповідно до технічних вимог." },
              { icon: document, title: "Офіційні документи", text: "Готуємо договір та повний пакет документів, які приймає платформа Дія." },
              { icon: delivery, title: "Повний сервіс", text: "Виготовлення, доставка та монтаж - все під ключ." },
              { icon: report, title: "Фото-звіт", text: "Робимо фото до і після для звітування в єВідновленні." },
              { icon: relax, title: "Спокій та впевненість", text: "Прозора співпраця, якісні матеріали та жодних прихованих витрат." }]
              .map((item, i) => (
              <div key={i} className="border border-[#E7E7E7] p-6 md:p-[48px] flex flex-col gap-[40px] justify-between">
                <div><img src={item.icon.src} alt={item.title} /></div>
                <div>
                  <h3 className="text-[24px] md:text-[28px]">{item.title}</h3>
                  <p className="text-[16px] md:text-[18px] text-[#555]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mc max-w-[1200px] mx-auto flex flex-col lg:flex-row py-[80px] md:py-[150px] gap-10">
          <div className="flex-1">
            <h2 className="text-[36px] md:text-[48px] lg:text-[64px]">Послідовність Замовлення</h2>
            <img
              src={card.src}
              width={600}
              height={450}
              alt="Процес роботи"
              className="mt-[40px] w-full h-auto object-contain max-w-[300px]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-10 border-dashed border-l-[1px] border-[#C7C6C2] pl-4 md:pl-[40px] relative">
            {[
              { step: "Крок 1", title: "Заявка та консультація", text: "Безкоштовний виїзд на замір і прорахунок вартості. Індивідуальні поради щодо найкращих рішень." },
              { step: "Крок 2", title: "Підтвердження та договір", text: "Узгоджуємо замовлення, фіксуємо деталі та строки. Повторний замір перед підписанням договору." },
              { step: "Крок 3", title: "Виготовлення та монтаж", text: "Вироби виготовляються на заводі. Монтаж виконується сертифікованими спеціалістами." },
              { step: "Крок 4", title: "Гарантія та сервіс", text: "Гарантія на продукцію та післямонтажне обслуговування." }
            ].map((item, i) => (
              <div key={i} className="max-w-[350px] relative">
                <div className="absolute -left-[47px] top-[10px] w-[12px] h-[12px] bg-[#0F0F0F] rounded-full"></div>
                <span className="absolute -left-[106px] top-[5px] text-[#0F0F0F] font-bold text-[14px] md:text-[16px] whitespace-nowrap">
                  {item.step}
                </span>
                <h3 className="text-[24px] md:text-[28px] text-[#0F0F0F]">{item.title}</h3>
                <p className="text-[16px] md:text-[18px] text-[#555555]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Recovery;
