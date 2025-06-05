"use client";
import Image from "next/image";
import HeroImg from "./assets/medium-shot-man-holding-drill.jpg";
import Mark from "@/app/assets/Marquee Icon.svg";
const items = ["Вікна", "Двері", "Ролети", "Жалюзі", "Ворота"];
import WDS from "@/app/assets/images/products/category/1.png";
import w from "@/app/assets/images/products/category/window-cat.jpg";
import al from "@/app/assets/images/products/category/2.jpg";
import rehau from "@/app/assets/images/products/category/3.jpg";
import fw from "@/app/assets/images/products/category/4.png";
import r from "@/app/assets/images/products/category/5.jpg";
import it from "@/app/assets/images/products/category/6.png";
import fix from "@/app/assets/images/products/category/7.jpg";
import blinds from "@/app/assets/images/products/category/8.jpg";
import gates from "@/app/assets/images/products/category/9.jpg";
import check from "@/app/assets/images/icons/check.svg";
import job1 from "@/app/assets/images/jobs/1.jpg";
import job2 from "@/app/assets/images/jobs/2.jpg";
import job3 from "@/app/assets/images/jobs/3.jpg";
import job4 from "@/app/assets/images/jobs/4.jpg";
import job5 from "@/app/assets/images/jobs/5.jpg";
import job6 from "@/app/assets/images/jobs/6.jpg";
import job7 from "@/app/assets/images/jobs/7.jpg";
import job8 from "@/app/assets/images/jobs/8.jpg";
import job9 from "@/app/assets/images/jobs/9.jpg";
import HorizontalScroll from "./components/HorizontalScroll";
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
      <section className="bg-[#0F0F0F] h-[100vh] text-[#fff] pt-[100px] flex justify-evenly items-center">
        <div>
          <h1 className="max-w-3xl my-[40px]">
            Вікна, двері та ворота під ключ
          </h1>
          <p className="max-w-xl text-[20px]">
            Пропонуємо енергоефективні вікна, надійні двері та сучасні фасадні
            системи з професійним монтажем. Працюємо по всій Україні для
            приватних будинків, квартир та бізнес-об’єктів.
          </p>
        </div>
        <div>
          <Image
            src={HeroImg}
            alt="Вікна"
            width={537}
            height={590}
            className="rounded-sm"
          />
        </div>
      </section>
      <div className="relative overflow-hidden w-full h-[90px] bg-[#d8f422] flex items-center">
        {/* Контейнер, який рухається */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...items, ...items].map((text, idx) => (
            <div key={idx} className="flex items-center gap-[20px] px-[70px]">
              <Image
                src={Mark}
                alt="Marquee Icon"
                width={25}
                height={25}
                className="marquee-icon"
                priority
              />
              <p className="marquee-title text-black font-semibold uppercase text-lg md:text-2xl">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <section className="bg-[#F8F7F0] py-[100px]">
        <div className="mc">
          <h2 className="mb-[70px]">Каталог Товару</h2>
          <div className="flex flex-wrap gap-4 justify-between">
            <Link href="/category/windows">
              <Image
                src={w}
                alt="wds"
                width={380}
                height={380}
                className="object-cover rounded-sm hover:scale-[0.98] cursor-pointer w-[380px] h-[380px]"
              />
            </Link>
            <Link href="/category/aluminium-systems">
              <Image
                src={al}
                alt="wds"
                width={380}
                height={380}
                className="object-cover rounded-sm hover:scale-[0.98] cursor-pointer w-[380px] h-[380px]"
              />
            </Link>
       {/*      <Link href="/category/windows">
              <Image
                src={rehau}
                alt="wds"
                width={380}
                height={380}
                className="object-cover rounded-sm hover:scale-[0.98] cursor-pointer"
              />
            </Link> */}
            <Link href="/category/facades">
              <Image
                src={fw}
                alt="wds"
                width={380}
                height={380}
                className="object-cover rounded-sm hover:scale-[0.98] cursor-pointer w-[380px] h-[380px]"
              />
            </Link>
            <Link href="/category/gates-and-rolls">
              <Image
                src={r}
                alt="wds"
                width={380}
                height={380}
                className="object-cover rounded-sm hover:scale-[0.98] cursor-pointer w-[380px] h-[380px]"
              />
            </Link>
           {/*  <Link href="/">
              <Image
                src={it}
                alt="wds"
                width={380}
                height={380}
                className="object-cover rounded-sm hover:scale-[0.98] cursor-pointer"
              />
            </Link> */}
         {/*    <Link href="/maintenance">
              <Image
                src={fix}
                alt="wds"
                width={380}
                height={380}
                className="object-cover rounded-sm hover:scale-[0.98] cursor-pointer"
              />
            </Link> */}
            <Link href="/category/window-blinds">
              <Image
                src={blinds}
                alt="wds"
                width={380}
                height={380}
                className="object-cover rounded-sm hover:scale-[0.98] cursor-pointer w-[380px] h-[380px]"
              />
            </Link>
            <Link href="/category/gates-and-rolls">
              <Image
                src={gates}
                alt="wds"
                width={380}
                height={380}
                className="object-cover rounded-sm hover:scale-[0.98] cursor-pointer w-[380px] h-[380px]"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="mc flex justify-between py-[70px]">
          <div>
            <h3 className="text-[70px]  leading-[70px] text-white">
              13<span className="text-[30px]">тис</span>
            </h3>
            <p className="text-white uppercase text-xl">завершених проектів</p>
          </div>
          <div>
            <h3 className="text-[70px] leading-[70px] text-white">
              10<span className="text-[30px]">тис</span>
            </h3>
            <p className="text-white uppercase text-xl">задоволених клієнтів</p>
          </div>
          <div>
            <h3 className="text-[70px] leading-[70px] text-white">94%</h3>
            <p className="text-white uppercase text-xl">рівень успішності</p>
          </div>
          <div>
            <h3 className="text-[70px] leading-[70px] text-white">150+</h3>
            <p className="text-white uppercase text-xl">професіоналів</p>
          </div>
        </div>
      </section>
      <section className="py-[150px]">
        <div className="mc">
          <div className="flex items-center">
            <div>
              <h2>Чому обирають нас?</h2>
            </div>
            <div>
              <Image
                src={gates}
                width={645}
                height={375}
                alt="Чому нас"
                className="rounded-sm"
              />
            </div>
          </div>
          <div className="flex gap-[24px] justify-between py-[40px]">
            <div className="flex bg-[#F8F7F0] p-[30px] gap-[20px]">
              <div className="p-[7px] rounded-full bg-[#D8F422] box-border w-[36px] h-[36px] ">
                <Image
                  src={check}
                  alt="Перевага"
                  width={22}
                  height={22}
                ></Image>
              </div>
              <div>
                <h3 className="text-[28px]">Індивідуальні рішення</h3>
                <p className="text-[20px] text-[#555555]">
                  Підбираємо вікна, двері та скління під конкретні потреби
                  вашого проєкту{" "}
                </p>
              </div>
            </div>
            <div className="flex bg-[#F8F7F0] p-[30px] gap-[20px]">
              <div className="p-[7px] rounded-full bg-[#D8F422] box-border w-[36px] h-[36px] ">
                <Image
                  src={check}
                  alt="Перевага"
                  width={22}
                  height={22}
                ></Image>
              </div>
              <div>
                <h3 className="text-[28px]">Індивідуальні рішення</h3>
                <p className="text-[20px] text-[#555555]">
                  Підбираємо вікна, двері та скління під конкретні потреби
                  вашого проєкту{" "}
                </p>
              </div>
            </div>
            <div className="flex bg-[#F8F7F0] p-[30px] gap-[20px]">
              <div className="p-[7px] rounded-full bg-[#D8F422] box-border w-[36px] h-[36px] ">
                <Image
                  src={check}
                  alt="Перевага"
                  width={22}
                  height={22}
                ></Image>
              </div>
              <div>
                <h3 className="text-[28px]">Індивідуальні рішення</h3>
                <p className="text-[20px] text-[#555555]">
                  Підбираємо вікна, двері та скління під конкретні потреби
                  вашого проєкту{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16">
        <HorizontalScroll>
          <Image
            src={job3}
            width={456}
            height={360}
            className="h-[360px] object-cover rounded-sm"
            alt="Робота"
          />
          <Image
            src={job4}
            width={456}
            height={520}
            className="h-[520px]  object-cover rounded-sm"
            alt="Робота"
          />
          <Image
            src={job5}
            width={456}
            height={360}
            className="h-[360px]  object-cover rounded-sm"
            alt="Робота"
          />
          <Image
            src={job6}
            width={456}
            height={520}
            className="h-[520px]  object-cover rounded-sm"
            alt="Робота"
          />
          <Image
            src={job7}
            width={456}
            height={360}
            className="h-[360px]  object-cover rounded-sm"
            alt="Робота"
          />
          <Image
            src={job8}
            width={456}
            height={520}
            className="h-[520px]  object-cover rounded-sm"
            alt="Робота"
          />
          <Image
            src={job9}
            width={456}
            height={360}
            className="h-[360px]  object-cover rounded-sm"
            alt="Робота"
          />
          <Image
            src={job2}
            width={456}
            height={520}
            className="h-[520px]  object-cover rounded-sm"
            alt="Робота"
          />
          <Image
            src={job1}
            width={456}
            height={360}
            className="h-[360px]  object-cover rounded-sm"
            alt="Робота"
          />
        </HorizontalScroll>
      </section>
      <section className="bg-[#F8F7F0]">
        <div className="mc flex py-[150px] justify-between">
          <div>
            <h2>Послідовність Замовлення</h2>
            <Image src={WorkProcess} alt="Процес роботи" />
          </div>

          <div className="flex gap-[70px] flex-col border-dashed border-l-2 pl-[40px] relative">
            {[
              "Заявка та консультація",
              "Замір і прорахунок",
              "Підписання договору",
              "Виготовлення та монтаж",
            ].map((title, index) => (
              <div className="max-w-[350px] spa relative" key={index}>
                <div className="absolute -left-[45px] top-[10px] w-[12px] h-[12px] bg-[#0F0F0F] rounded-full"></div>
                <span className="absolute -left-[105px] top-[5px] text-[#0F0F0F] font-bold text-[16px] whitespace-nowrap">
                  Крок {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-[28px] text-[#0F0F0F]">{title}</h3>
                <p className="text-[18px] text-[#555555]">
                  Безкоштовний виїзд на замір і прорахунок вартості.
                  Індивідуальні поради щодо найкращих рішень для вашого будинку.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" py-[50px]">
        <div className="mc flex flex-col gap-[40px]">
          <div className="flex justify-between gap-[40px]">
            <div>
              <h2 className="text-[45px] !capitalize mb-4">Ламінація</h2>

              <div className="flex gap-2 flex-wrap mb-4">
                {colors.map((color, index) => (
                  <Image
                    key={index}
                    src={color.thumb}
                    alt={`Колір ${index + 1}`}
                    width={54}
                    height={54}
                    onClick={() => setSelectedImage(color.house)}
                    className="cursor-pointer border border-transparent hover:border-black rounded transition"
                  />
                ))}
              </div>
              <p className="mb-6 max-w-xl text-[18px] text-[#555555]">
                36 кольорів ламінації від світового лідера - компанії RENOLIT
                (Німеччина). Плівкам RENOLIT не страшні ні сонце, ні вітер, ні
                дощ. Плівки RENOLIT облагороджують вікна, балконні, міжкімнатні
                та вхідні двері, зимові сади, підсилюють захисні властивості,
                енергоефективність та збільшують термін служби конструкцій.
              </p>
            </div>
            <div>
              <Image
                src={selectedImage}
                alt="Дім з вибраним кольором ламінації"
                width={600}
                height={400}
                className="rounded object-cover"
              />
            </div>
          </div>
          <div className="flex justify-between gap-[40px]">
            <div>
              <Image
                src={painting}
                width={600}
                height={400}
                alt="Фарбування"
                className="rounded object-cover"
              />
            </div>
            <div className="">
              <h2 className="text-[45px] !capitalize mb-4">Фарбування</h2>
              <p className="mb-6 max-w-xl text-[18px] text-[#555555]">
                Дозволяє надати ПВХ-профілю практично будь-який колір за шкалою
                RAL, в тому числі і «металік». Застосовуються сучасні,
                довговічні та екологічно безпечні фарби Zobel Chemie з високою
                атмосфероустойчива покриттів.
              </p>
              <div className="flex justify-between">
                <div className="w-[100px]">
                  <Image src={adv1} width={60} height={60} />
                  <p className="text-[14px] text-[#555555]">Яскравий дизайн</p>
                </div>
                <div className="w-[100px]">
                  <Image src={adv2} width={60} height={60} />
                  <p className="text-[14px] text-[#555555]">
                    Стійкість і міцність покриття
                  </p>
                </div>
                <div className="w-[100px]">
                  <Image src={adv3} width={60} height={60} />
                  <p className="text-[14px] text-[#555555]">
                    Збільшення терміну служби
                  </p>
                </div>
                <div className="w-[100px]">
                  <Image src={adv4} width={60} height={60} />
                  <p className="text-[14px] text-[#555555]">
                    Посилення енергозбереження
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[40px]">
            <div>
              <h2 className="text-[45px] !capitalize mb-4">Декор скла</h2>
              <p className="mb-6 max-w-xl text-[18px] text-[#555555]">
                Плівкова вітраж за англійською технологією вставляється
                всередину склопакета і створює унікальний стиль вікна,
                зберігаючи при цьому всі властивості склопакета і простоту
                догляду. Гарантія 5 років.
              </p>
              <p className="mb-6 max-w-xl text-[18px] text-[#555555]">
                Декоративна розкладка - спеціальний профіль, який розмежовує
                простір скла, надаючи вікнам благородний вид.
              </p>
              <p className="mb-6 max-w-xl text-[18px] text-[#555555]">
                Алмазне гравірування - фігурна різьба по склу за допомогою
                фрезеровочного верстата. Наноситься як на звичайне скло, так і
                забарвлене, матове, дзеркальне.
              </p>
            </div>
            <div>
              <Image
                src={window}
                width={600}
                height={400}
                alt="Декор скла"
                className="rounded object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-[100px]">
        <div className="mc">
          <h2>Нестандартні вікна</h2>
          <div className="flex justify-between gap-[20px]">
            <div>
              <Image
                src={trekantwindow}
                width={425}
                height={360}
                className="w-[425px] h-[360px]"
                alt="трикутне вікно"
              />
              <h3 className="text-[28px] capitalize">
                Трикутні, трапецієподібні
              </h3>
              <p className="text-[#555555] text-[20px] w-[400px]">
                Гострота кута для трикутних і трапецієподібних вікон - не менше
                30 градусів.
              </p>
            </div>
            <div>
              <Image
                src={cirklewindow}
                width={425}
                height={360}
                className="w-[425px] h-[360px]"
                alt="кругле вікно"
              />
              <h3 className="text-[28px] capitalize">
                Арочні, круглі, напівкруглі
              </h3>
              <p className="text-[#555555] text-[20px] w-[400px]">
                Мінімальний радіус згину профілю для вікна вікна, що не
                відкривається 400 мм, для відкривається - 440 мм.
              </p>
            </div>
            <div>
              <Image
                src={arrowwindow}
                width={425}
                height={360}
                className="w-[425px] h-[360px]"
                alt="стрілчасте вікно"
              />
              <h3 className="text-[28px] capitalize">Стрілчасті</h3>
              <p className="text-[#555555] text-[20px] w-[400px]">
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
