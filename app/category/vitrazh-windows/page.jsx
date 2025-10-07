"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import check from "@/app/assets/images/icons/check.svg";
import vitrazhType1 from "@/app/assets/images/products/vitrazh/vitrazh-type-1.jpg";
import vitrazhType2 from "@/app/assets/images/products/vitrazh/vitrazh-type-2.jpg";
import vitrazhType3 from "@/app/assets/images/products/vitrazh/vitrazh-type-3.jpg";
import SectionContact from "@/app/components/SectionContact";
import bg from "@/app/assets/images/hero/vitrazhi-banner.jpg";

import slider1 from "@/app/assets/images/gallery/vitrazh/banner-slide-1.jpg";
import slider2 from "@/app/assets/images/gallery/vitrazh/banner-slide-2.jpg";
import slider3 from "@/app/assets/images/gallery/vitrazh/banner-slide-3.jpg";
import slider4 from "@/app/assets/images/gallery/vitrazh/banner2-slide-1.jpg";
import slider5 from "@/app/assets/images/gallery/vitrazh/banner2-slide-2.jpg";
import slider6 from "@/app/assets/images/gallery/vitrazh/banner2-slide-3.jpg";
import slider7 from "@/app/assets/images/gallery/vitrazh/banner3-slide-1.jpg";
import slider8 from "@/app/assets/images/gallery/vitrazh/banner3-slide-2.jpg";
import slider9 from "@/app/assets/images/gallery/vitrazh/banner3-slide-3.jpg";

import facet from "@/app/assets/images/products/vitrazh/facet.jpg";
import diamond from "@/app/assets/images/products/vitrazh/diamond.jpg";

export default function WindowPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${bg.src})` }}
        />
        <h1 className="relative z-10 text-4xl md:text-5xl  text-white text-center">
          Вітражні вікна
        </h1>
      </section>

      {/* ПЕРЕВАГИ */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h3 className="text-2xl mb-6  text-center md:text-left">
          Переваги вітражів
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Підкреслити стиль будинку",
            "Прикрасити вхідну групу",
            "Закрити прозорість вхідної групи",
          ].map((title, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-[#F8F7F0] py-10 px-6 rounded-xl "
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#D8F422]">
                <img src={check.src} alt="Перевага" width={22} height={22} />
              </div>
              <p className="text-base md:text-lg font-medium">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ПЕРШИЙ СЛАЙДЕР --- */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h3 className="mb-8 text-center text-5xl">Класичні вітражі</h3>
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            navigation
            loop
            spaceBetween={0}
            slidesPerView={1}
            className="rounded-[30px] w-full h-[30vh] md:h-[40vh]"
          >
            {[slider1, slider2, slider3].map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img.src}
                  alt={`Вітраж ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Вітраж надає вашим пластиковим вікнам, дверям, балконним блокам
            унікальності, додає вишуканих деталей. Надихніть ваш будинок,
            додавши декор у вигляді вітражів у кожне вікно. Фацети, діамантова
            грань, вітражний малюнок – безліч варіантів для надання
            індивідуальності вашому будинку. Вітраж може бути непрозорим і
            використовуватися у вхідних дверях, склінні веранд, приміщень, де
            має бути усамітнення. Вітражі це завжди загадково, красиво і додає
            "родзинку" у будь-який інтер'єр.
          </p>
        </div>
      </section>

      {/* ТРИ ВИДИ ВІТРАЖІВ */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h3 className="mb-8 text-center text-5xl">Види вітражів</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <img
              src={vitrazhType1.src}
              alt="Вітраж на цільному шматку скла"
              className="rounded-2xl  mb-4 "
            />
            <h3 className="text-lg ">
              Вітраж виготовляється на цільному шматку скла
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={vitrazhType2.src}
              alt="Вітраж у двокамерному склопакеті"
              className="rounded-2xl  mb-4 "
            />
            <h3 className="text-lg ">
              Вітраж встановлюється середнім склом у двокамерний склопакет
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={vitrazhType3.src}
              alt="Вітраж із захисним склом"
              className="rounded-2xl  mb-4 "
            />
            <h3 className="text-lg ">
              Вітраж захищений зовнішніми скломами, не вимагає спеціального
              догляду
            </h3>
          </div>
        </div>
      </section>

      {/* --- ДРУГИЙ СЛАЙДЕР --- */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h3 className="mb-8 text-center text-5xl">Діамантова грань</h3>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          navigation
          loop
          slidesPerView={1}
          spaceBetween={0}
          className="rounded-[30px] w-full h-[30vh] md:h-[40vh]"
        >
          {[slider4, slider5, slider6].map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img.src}
                alt={`Вітраж ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="max-w-6xl mx-auto px-6 mt-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Такі вітражі робляться за допомогою спеціальної стрічки, що імітує
            гравіювання. При цьому світло потрапляючи на скло заломлюється і дає
            дуже гарні відблиски. Більшість скла залишається прозорою,
            пропускаючи багато світла, а декоративний малюнок створює враження
            витонченості і надає стиль вашій оселі.
          </p>
          <div className="mt-10 bg-[#F8F7F0] rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8 ">
            <div className="flex-shrink-0">
              <img
                src={diamond.src}
                alt="Склад вітражів"
                className="w-[210px] h-[330px] object-cover і"
              />
            </div>

            <div className="flex-1 text-gray-700">
              <h4 className="text-2xl font-semibold mb-4 text-gray-900">
                Склад вітражів
              </h4>
              <ul className="space-y-2 text-base">
                <li>1 – скло без заповнення</li>
                <li>2 – діамантова грань</li>
                <li>3 – діамантова грань</li>
              </ul>

              <div className="mt-6">
                <h5 className="text-lg font-semibold mb-2 text-gray-900">
                  Діамантова грань
                </h5>
                <p className="leading-relaxed">
                  Стрічка “Діамантова грань” наноситься на один бік скла, при
                  цьому вона однаково красиво виглядає з обох боків. Вона
                  розташовується всередині однокамерного або двокамерного
                  склопакета, що захищає її від пошкоджень. Єдине обмеження –
                  неможливість вигину. Термін служби стрічки — не менше 20
                  років.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ТРЕТІЙ СЛАЙДЕР --- */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h3 className="mb-8 text-center text-5xl">Кришталеві елемети</h3>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          navigation
          loop
          slidesPerView={1}
          spaceBetween={0}
          className="rounded-[30px] w-full h-[30vh] md:h-[40vh]"
        >
          {[slider7, slider8, slider9].map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img.src}
                alt={`Вітраж ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="max-w-6xl mx-auto px-6 mt-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Бевіли у вигляді фігурок, символів, орнаменту використовуються для
            прикраси скла. Ніжні та напівпрозорі, кольорові, схожі на маленькі
            кришталеві вкраплення. Виберіть для дитячого метелика, що летить, а
            для вітальні символічний ієрогліф. Такі деталі подарують успіх і
            процвітання вашому будинку, радість чи довголіття
          </p>
        </div>
        <div className="mt-10 bg-[#F8F7F0] rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8 ">
          <div className="flex-shrink-0">
            <img
              src={facet.src}
              alt="Склад вітражів"
              className="w-[210px] h-[330px] object-cover і"
            />
          </div>

          <div className="flex-1 text-gray-700">
            <h4 className="text-2xl font-semibold mb-4 text-gray-900">
              Склад вітражів
            </h4>
            <ul className="space-y-2 text-base">
              <li>1 – плівка рифлена</li>
              <li>2 – протяжка</li>
              <li>3 – скло без заповнення</li>
              <li>4 – фацет (бевель)</li>
            </ul>

            <div className="mt-6">
              <h5 className="text-lg font-semibold mb-2 text-gray-900">
                Бевель
              </h5>
              <p className="leading-relaxed">
                Ограновані шматочки скла. Бевелі створюють тонку гру світла та
                кольору. При складанні двокамерного склопакета вітраж
                розташовується між двома зовнішніми стеклами - це захищає його
                від механічних пошкоджень. Так само існують набірні бевелі - це
                складова композиція з декількох елементів - кришталевий
                візерунок
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ДОДАТКОВИЙ ТЕКСТ */}
      <section className="px-6 py-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl mb-4 ">Декоративна довершеність</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Вітражні вікна — це поєднання художньої краси та сучасних технологій.
          Вони додають фасаду індивідуальності, пропускають м’яке світло та
          створюють унікальну атмосферу затишку. Наші вітражі виготовляються з
          якісних матеріалів і не потребують складного догляду.
        </p>
      </section>
    </>
  );
}
