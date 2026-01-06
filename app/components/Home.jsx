"use client";
import w from "@/app/assets/images/products/category/window-cat.png";
import al from "@/app/assets/images/products/category/2.webp";
import fw from "@/app/assets/images/products/category/4.webp";
import vitrazh from "@/app/assets/images/hero/vitrazhi-banner.jpg";
import blinds from "@/app/assets/images/products/category/5.png";
import gates from "@/app/assets/images/products/category/9.webp";
import check from "@/app/assets/images/icons/check.svg";
import job1 from "@/app/assets/images/jobs/job (1).jpg";
import job2 from "@/app/assets/images/jobs/job (2).jpg";
import job3 from "@/app/assets/images/jobs/job (3).jpg";
import job4 from "@/app/assets/images/jobs/job (4).jpg";
import AutoSlider from "@/app/components/AutoSlider";
import WorkProcess from "@/app/assets/images/homepage/Work Process Banner.png";
import color1 from "@/app/assets/images/homepage/color1.png";
import color2 from "@/app/assets/images/homepage/color2.png";
import color3 from "@/app/assets/images/homepage/color3.png";
import color4 from "@/app/assets/images/homepage/color4.png";
import color5 from "@/app/assets/images/homepage/color5.png";
import color6 from "@/app/assets/images/homepage/color6.png";
import house1 from "@/app/assets/images/homepage/lamination/1.jpg";
import house2 from "@/app/assets/images/homepage/lamination/2.jpg";
import house3 from "@/app/assets/images/homepage/lamination/3.jpg";
import house4 from "@/app/assets/images/homepage/lamination/4.jpg";
import house5 from "@/app/assets/images/homepage/lamination/5.jpg";
import house6 from "@/app/assets/images/homepage/lamination/6.jpg";
import painting from "@/app/assets/images/homepage/painting.jpg";
import adv1 from "@/app/assets/images/homepage/1.svg";
import adv2 from "@/app/assets/images/homepage/2.svg";
import adv3 from "@/app/assets/images/homepage/3.svg";
import adv4 from "@/app/assets/images/homepage/4.svg";
import window from "@/app/assets/images/homepage/window.jpg";
import trekantwindow from "@/app/assets/images/homepage/trekantwindow.png";
import cirklewindow from "@/app/assets/images/homepage/cirklewindow.png";
import arrowwindow from "@/app/assets/images/homepage/arrowwindow.png";
import { useState } from "react";
import Link from "next/link";
import HomeSlider from "./HomeSlider";
import StatsSection from "./StatsSection";






export default function Home() {
  const [selectedImage, setSelectedImage] = useState(house1);

  
  const colors = [
    { thumb: color1, house: house1 },
    { thumb: color2, house: house2 },
    { thumb: color3, house: house3 },
    { thumb: color4, house: house4 },
    { thumb: color5, house: house5 },
    { thumb: color6, house: house6 },
  ];
  return (
    <>
<HomeSlider/>

<section className="bg-[#F8F7F0] py-[100px]">
  <div className="mc">
    <h2 className="mb-[70px] text-[42px] sm:text-[56px] md:text-[64px]">
      Каталог Товару
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {[
        { href: "/category/windows", src: w, title: "Вікна" },
        { href: "/category/vitrazh-windows", src: vitrazh, title: "Вітражні вікна" }, 
        { href: "/category/aluminium-systems", src: al, title: "Офісні перегородки" },
        { href: "/category/facades", src: fw, title: "Фурнітура" },
        { href: "/category/gates-and-rolls", src: gates, title: "Ролети та ворота" },
        { href: "/category/window-blinds", src: blinds, title: "Жалюзі" },
       ].map(({ href, src, title }, i) => (
        <Link href={href} key={i} className="group block rounded-sm overflow-hidden">
          <div className="relative">
            <img
              src={src.src}
              alt={`Зображення: ${title}`}
              width={380}
              height={380}
                loading="lazy"
  decoding="async"
              className="w-full h-[300px] sm:h-[340px] lg:h-[380px] object-cover rounded-sm transition-transform group-hover:scale-[0.98]"
            />
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-30 transition-opacity rounded-sm"></div>
          </div>
           <div className="mt-3 text-center">
            <span className="text-xl sm:text-xl font-semibold text-gray-900">{title}</span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

<StatsSection/>

      <section className="py-[100px]">
        <div className="mc">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <h2 className="text-[40px] sm:text-[48px] lg:text-[64px]  leading-tight">
              Чому обирають нас?
            </h2>
            <img
              src={gates.src}
              width={645}
              height={375}
              alt="Чому нас"
              className="rounded-sm w-full max-w-[645px] h-auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Індивідуальні рішення",
                text: "Підбираємо вікна, двері та скління під конкретні потреби вашого проєкту",
              },
              {
                title: "Надійні конструкції",
                text: "Ми використовуємо сертифіковані матеріали та профільні системи, що витримують час і погодні умови.",
              },
              {
                title: "Професійне встановлення",
                text: "Досвідчені майстри виконують монтаж точно, акуратно та в узгоджені терміни.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex bg-[#F8F7F0] p-6 gap-5 rounded-sm"
              >
                <div className="p-[7px] rounded-full bg-[#D8F422] w-9 h-9 flex items-center justify-center">
                  <img
                    src={check.src}
                    alt="Перевага"
                    width={22}
                    height={22}
                    className="w-[22px] h-[22px]"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[22px] md:text-[26px] ">{item.title}</h3>
                  <p className="text-[16px] md:text-[18px] text-[#555] mt-2">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16">
  <AutoSlider speed={100}>
    {[job1, job2, job3, job4].map((img, i) => (
      <div
        key={i}
        className="relative flex-shrink-0 min-w-[300px] aspect-[4/3]"
      >
        <img
          src={img.src}
          alt="Робота"
          className=" w-full h-[500px]"
             loading="lazy"
  decoding="async"

        />
      </div>
    ))}
  </AutoSlider>
</section>

      <section className="bg-[#F8F7F0]">
        <div className="mc flex flex-col lg:flex-row py-[100px] gap-[60px] lg:gap-[100px] px-4 sm:px-6 md:px-10">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] leading-tight">
              Послідовність Замовлення
            </h2>
            <img
              src={WorkProcess.src}
              alt="Процес роботи"
               loading="lazy"
  decoding="async"
              className="mt-[40px] w-full max-w-[600px] mx-auto lg:mx-0"
            />
          </div>

          <div className="flex-1 flex flex-col gap-[40px] border-l-0 lg:border-l border-dashed border-[#C7C6C2] pl-0 lg:pl-[40px] relative">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className="max-w-[350px] relative mx-auto lg:mx-0"
              >
                <div className="hidden lg:block absolute -left-[46px] top-[10px] w-[12px] h-[12px] bg-[#0F0F0F] rounded-full"></div>
                <span className="hidden lg:block absolute -left-[106px] top-[5px] text-[#0F0F0F]  text-[16px] whitespace-nowrap">
                  Крок {step}
                </span>
                <h3 className="text-[22px] sm:text-[24px] lg:text-[28px] text-[#0F0F0F] mb-[8px]">
                  {
                    {
                      1: "Заявка та консультація",
                      2: "Підтвердження та договір",
                      3: "Виготовлення та монтаж",
                      4: "Гарантія та сервіс",
                    }[step]
                  }
                </h3>
                <p className="text-[16px] sm:text-[18px] text-[#555555]">
                  {
                    {
                      1: "Безкоштовний виїзд на замір і прорахунок вартості. Індивідуальні поради щодо найкращих рішень для вашого будинку.",
                      2: "Узгоджуємо замовлення, фіксуємо деталі та строки. Проводимо повторний замір перед підписанням договору.",
                      3: "Вироби виготовляються на заводі. Монтаж виконується сертифікованими спеціалістами з дотриманням усіх норм.",
                      4: "Після завершення проєкту ми забезпечуємо гарантійне обслуговування та підтримку при потребі.",
                    }[step]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[50px] px-4">
        <div className="mc flex flex-col gap-[40px] items-center">
          <div className="flex flex-col lg:flex-row justify-between gap-[40px] items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-[32px] md:text-[40px] lg:text-[45px] !capitalize mb-4">
                Ламінація
              </h2>

              <div className="flex gap-2 flex-wrap justify-center lg:justify-start mb-4">
                {colors.map((color, index) => (
                  <img
                    key={index}
                    src={color.thumb.src}
                    alt={`Колір ${index + 1}`}
                    width={54}
                    height={54}
                     loading="lazy"
  decoding="async"
                    onClick={() => setSelectedImage(color.house)}
                    className="cursor-pointer border border-transparent hover:border-black rounded transition"
                  />
                ))}
              </div>

              <p className="mb-6 max-w-xl text-[16px] md:text-[18px] text-[#555555] mx-auto lg:mx-0">
                36 кольорів ламінації від світового лідера - компанії RENOLIT
                (Німеччина). Плівкам RENOLIT не страшні ні сонце, ні вітер, ні
                дощ. Плівки RENOLIT облагороджують вікна, балконні, міжкімнатні
                та вхідні двері, зимові сади, підсилюють захисні властивості,
                енергоефективність та збільшують термін служби конструкцій.{" "}
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <img
                src={selectedImage.src}
                alt="Дім з вибраним кольором ламінації"
                width={600}
                height={400}
                 loading="lazy"
  decoding="async"
                className="rounded object-cover w-full max-w-[600px] h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row justify-between gap-[40px] items-center">
            <div className="w-full lg:w-auto">
              <img
                src={painting.src}
                width={600}
                height={400}
                 loading="lazy"
  decoding="async"
                alt="Фарбування"
                className="rounded object-cover w-full max-w-[600px] h-auto"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-[32px] md:text-[40px] lg:text-[45px] !capitalize mb-4">
                Фарбування
              </h2>
              <p className="my-10 max-w-xl text-[16px] md:text-[18px] text-[#555555] mx-auto lg:mx-0">
                Дозволяє надати ПВХ-профілю практично будь-який колір за шкалою
                RAL, в тому числі і «металік». Застосовуються сучасні,
                довговічні та екологічно безпечні фарби Zobel Chemie з високою
                атмосфероустойчива покриттів.{" "}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                {[adv1, adv2, adv3, adv4].map((img, i) => (
                  <div className="w-[100px] text-center" key={i}>
                    <img
                      src={img.src}
                      width={60}
                      height={60}
                      alt={`adv-${i}`}
                       loading="lazy"
  decoding="async"
                      className="mx-auto"
                    />
                    <p className="text-[14px] text-[#555555]">
                      {
                        [
                          "Яскравий дизайн",
                          "Стійкість і міцність покриття",
                          "Збільшення терміну служби",
                          "Посилення енергозбереження",
                        ][i]
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-[40px] items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-[32px] md:text-[40px] lg:text-[45px] !capitalize mb-4">
                Декор скла
              </h2>
              <p className="mb-6 max-w-xl text-[16px] md:text-[18px] text-[#555555] mx-auto lg:mx-0">
                Плівкова вітраж за англійською технологією вставляється
                всередину склопакета і створює унікальний стиль вікна,
                зберігаючи при цьому всі властивості склопакета і простоту
                догляду. Гарантія 5 років.{" "}
              </p>
              <p className="mb-6 max-w-xl text-[16px] md:text-[18px] text-[#555555] mx-auto lg:mx-0">
                Декоративна розкладка - спеціальний профіль, який розмежовує
                простір скла, надаючи вікнам благородний вид.{" "}
              </p>
              <p className="mb-6 max-w-xl text-[16px] md:text-[18px] text-[#555555] mx-auto lg:mx-0">
                Алмазне гравірування - фігурна різьба по склу за допомогою
                фрезеровочного верстата. Наноситься як на звичайне скло, так і
                забарвлене, матове, дзеркальне.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <img
                src={window.src}
                width={600}
                 loading="lazy"
  decoding="async"
                height={400}
                alt="Декор скла"
                className="rounded object-cover w-full max-w-[600px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] px-[20px]">
        <div className="mc">
          <h2 className="text-[40px] md:text-[48px] lg:text-[64px] mb-10 text-center">
            Нестандартні вікна
          </h2>
          <div className="flex flex-col lg:flex-row justify-between gap-[40px] items-center lg:items-stretch">
            <div className="text-center lg:text-left">
              <img
                src={trekantwindow.src}
                width={425}
                height={360}
                 loading="lazy"
  decoding="async"
                className="mx-auto lg:mx-0 max-w-full h-auto"
                alt="трикутне вікно"
              />
              <h3 className="text-[24px] md:text-[28px] mt-4 capitalize">
                Трикутні, трапецієподібні
              </h3>
              <p className="text-[#555555] text-[18px] md:text-[20px] mt-2 max-w-[400px] mx-auto lg:mx-0">
                Гострота кута для трикутних і трапецієподібних вікон - не менше
                30 градусів.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <img
                src={cirklewindow.src}
                width={425}
                height={360}
                 loading="lazy"
  decoding="async"
                className="mx-auto lg:mx-0 max-w-full h-auto"
                alt="кругле вікно"
              />
              <h3 className="text-[24px] md:text-[28px] mt-4 capitalize">
                Арочні, круглі, напівкруглі
              </h3>
              <p className="text-[#555555] text-[18px] md:text-[20px] mt-2 max-w-[400px] mx-auto lg:mx-0">
                Мінімальний радіус згину профілю для вікна, що не відкривається
                - 400 мм, для відкривається - 440 мм.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <img
                src={arrowwindow.src}
                width={425}
                height={360}
                 loading="lazy"
  decoding="async"
                className="mx-auto lg:mx-0 max-w-full h-auto"
                alt="стрілчасте вікно"
              />
              <h3 className="text-[24px] md:text-[28px] mt-4 capitalize">
                Стрілчасті
              </h3>
              <p className="text-[#555555] text-[18px] md:text-[20px] mt-2 max-w-[400px] mx-auto lg:mx-0">
                Складний вид арочних вікон, що поєднує гнутий профіль і гострий
                кут у верхній частині вікна.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
