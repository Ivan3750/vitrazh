"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, SplitHeading, Counter, Marquee, ImageReveal } from "./motion";
import { windows, badgeOf, toneClass } from "@/app/catalog/data/windows";
import heroImg from "@/app/assets/images-webp/homepage/1 (1).webp";
import glassHouse from "@/app/assets/images-webp/jobs/9.webp";
import installers from "@/app/assets/images-webp/gallery/work/installers.webp";
import stained from "@/app/assets/images-webp/hero/vitrazhi-banner.webp";

const EASE = [0.22, 1, 0.36, 1];

/* ───────────── HERO ───────────── */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  const line = (text, delay, className = "") => (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: EASE }}
        className={`block ${className}`}
      >
        {text}
      </motion.span>
    </span>
  );

  const specs = [
    { v: <Counter to={70} suffix=" мм" />, l: "Монтажна глибина" },
    { v: <Counter to={5} />, l: "Камер у профілі" },
    { v: <Counter to={45} suffix=" дБ" />, l: "Звукоізоляція" },
    { v: "RC2", l: "Захист від злому" },
  ];

  return (
    <section ref={ref} className="bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 pt-6 sm:pt-8 grid lg:grid-cols-12 gap-6 lg:gap-10">
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em]"
            >
              <span className="w-3 h-3 bg-brand-orange" />
              Київ та область · під ключ
            </motion.p>

            <h1 className="font-display mt-6 !text-[52px] sm:!text-[84px] lg:!text-[104px] xl:!text-[116px] !leading-[0.9] uppercase">
              {line("Вікна,", 0.3)}
              {line("що змінюють", 0.42)}
              {line("простір", 0.54, "text-brand-orange")}
            </h1>
          </div>

          <div className="mt-6 grid sm:grid-cols-[1fr_auto] gap-6 items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="max-w-md text-lg text-ink/70"
            >
              Продаж і монтаж металопластикових вікон та вітражів. Безкоштовний замір,
              виготовлення на заводі, акуратне встановлення та гарантійний сервіс.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="/catalog/vikna/" className="group inline-flex items-center gap-3 rounded-full bg-ink text-white hover:bg-brand-orange transition-colors pl-7 pr-2 py-2 font-semibold uppercase tracking-wider">
                Каталог
                <span className="w-10 h-10 rounded-full bg-white text-ink grid place-items-center group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link href="/contact/" className="inline-flex items-center rounded-full border-2 border-ink px-7 py-3 font-semibold uppercase tracking-wider hover:bg-ink hover:text-white transition-colors">
                Замір
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Візуал + панель характеристик (як у референсі з планом квартири) */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0 round 2rem)" }}
            animate={{ clipPath: "inset(0 0 0% 0 round 2rem)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
            className="relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[420px] overflow-hidden bg-paper"
          >
            <motion.img
              src={heroImg.src}
              alt="Сучасний будинок із новими вікнами"
              style={{ y: imgY, scale: 1.12 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute left-4 bottom-4 right-4 sm:right-auto sm:w-[300px] rounded-2xl bg-ink text-white p-5"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">Система</p>
              <p className="font-display text-3xl uppercase mt-1">IDEAL 4000</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {[["70", "мм"], ["45", "дБ"], ["RC2", ""]].map(([n, u]) => (
                  <div key={n} className="border-t border-white/20 pt-2">
                    <span className="font-display text-xl">{n}</span>
                    <span className="text-xs text-white/50 ml-1">{u}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Рядок характеристик */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 mt-8 pb-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-ink/15">
          {specs.map((s, i) => (
            <div key={s.l} className={`py-5 lg:px-6 ${i ? "lg:border-l border-ink/15" : ""} ${i % 2 ? "border-l lg:border-l border-ink/15 pl-6" : ""}`}>
              <div className="font-display text-5xl sm:text-6xl">{s.v}</div>
              <p className="mt-2 text-sm uppercase tracking-[0.14em] text-ink/55">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── ЩО МИ РОБИМО ───────────── */
function Services() {
  const cards = [
    { img: glassHouse, t: "Вікна", d: "ПВХ та алюмінієві профільні системи — від практичних до максимально теплих.", tag: "Каталог", href: "/catalog/vikna/", c: "bg-brand-lime text-ink" },
    { img: stained, t: "Вітражі", d: "Художнє скло, яке робить вікно акцентом інтер'єру.", tag: "Декор", c: "bg-brand-orange text-white" },
    { img: installers, t: "Монтаж", d: "Сертифіковані майстри: акуратне встановлення в узгоджені терміни.", tag: "Під ключ", c: "bg-brand-blue text-white" },
  ];
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SplitHeading
            text="Що ми робимо"
            className="font-display text-5xl sm:text-7xl uppercase leading-[0.9]"
          />
          <p className="max-w-sm text-ink/65">Усе для світла у вашому домі: від вибору системи до гарантійного сервісу.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => {
            const Wrap = c.href ? Link : "div";
            return (
              <Reveal key={c.t} delay={i * 0.1}>
                <Wrap {...(c.href ? { href: c.href } : {})} className="group block">
                  <ImageReveal src={c.img.src} alt={c.t} className="aspect-[5/4] rounded-[2rem]" imgClassName="transition-transform duration-[1200ms] group-hover:scale-105" />
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-4xl uppercase">{c.t}</h3>
                      <p className="mt-2 text-ink/65 max-w-xs">{c.d}</p>
                    </div>
                    <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${c.c}`}>{c.tag}</span>
                  </div>
                </Wrap>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────── КАТАЛОГ ───────────── */
function Featured() {
  const featured = windows.slice(0, 4);
  return (
    <section className="bg-paper py-12 sm:py-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SplitHeading text="Профільні системи" className="font-display text-5xl sm:text-7xl uppercase leading-[0.9]" />
          <Link href="/catalog/vikna/" className="self-start sm:self-auto rounded-full bg-ink text-white hover:bg-brand-orange transition-colors px-7 py-3 font-semibold uppercase tracking-wider">
            Весь каталог ({windows.length}) →
          </Link>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((w, i) => {
            const badge = badgeOf(w);
            return (
              <Reveal key={w.slug} delay={i * 0.08}>
                <Link href={`/catalog/vikna/${w.slug}/`} className="group block bg-white rounded-3xl overflow-hidden">
                  <div className="aspect-[4/5] p-5 grid place-items-center">
                    <img src={w.image.src} alt={`${w.name} — профільна система`} className="h-full w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5 border-t border-ink/10 flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl uppercase">{w.name}</h3>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${toneClass[badge.tone]}`}>{badge.label}</span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────── ЦИФРИ ───────────── */
function Stats() {
  const stats = [
    { to: 13, suffix: " тис", text: "завершених проєктів" },
    { to: 10, suffix: " тис", text: "задоволених клієнтів" },
    { to: 95, suffix: "%", text: "рівень успішності" },
    { to: 120, suffix: "+", text: "професіоналів" },
  ];
  return (
    <section className="bg-brand-blue text-white overflow-hidden">
      <Marquee items={["Вікна", "Вітражі", "Склопакети", "Фурнітура", "Монтаж", "Гарантія"]} className="py-5 bg-ink text-white" />
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-y-8">
        {stats.map((s, i) => (
          <Reveal key={s.text} delay={i * 0.1} className={`${i ? "lg:border-l border-white/30 lg:pl-8" : ""} ${i % 2 ? "border-l border-white/30 pl-6" : ""}`}>
            <Counter to={s.to} suffix={s.suffix} className="font-display text-5xl sm:text-7xl leading-none" />
            <p className="mt-3 text-white/85 uppercase text-sm tracking-[0.14em]">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ───────────── ПРОЦЕС ───────────── */
function Process() {
  const steps = [
    { t: "Заявка та консультація", d: "Безкоштовний виїзд на замір і прорахунок вартості. Поради щодо найкращих рішень для вашого дому." },
    { t: "Підтвердження та договір", d: "Узгоджуємо замовлення, фіксуємо деталі та строки. Повторний замір перед підписанням договору." },
    { t: "Виготовлення та монтаж", d: "Вироби виготовляються на заводі. Монтаж виконують сертифіковані спеціалісти з дотриманням норм." },
    { t: "Гарантія та сервіс", d: "Після завершення проєкту забезпечуємо гарантійне обслуговування та підтримку." },
  ];
  return (
    <section className="bg-ink text-white py-12 sm:py-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_1.6fr] gap-12">
        <div className="lg:sticky lg:top-24 self-start">
          <p className="text-brand-orange font-semibold uppercase tracking-[0.18em] text-sm mb-4">Як це працює</p>
          <SplitHeading text="Від заміру до гарантії" className="font-display text-5xl sm:text-6xl uppercase leading-[0.92]" />
        </div>

        <div>
          {steps.map((s, i) => (
            <Reveal key={s.t} y={30}>
              <div className="grid grid-cols-[auto_1fr] gap-6 sm:gap-10 py-5 border-t border-white/20">
                <span className="font-display text-5xl sm:text-6xl leading-none text-brand-orange">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-3xl sm:text-4xl uppercase">{s.t}</h3>
                  <p className="mt-3 text-white/65 max-w-lg">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-white/20" />
        </div>
      </div>
    </section>
  );
}

/* ───────────── ЧОМУ МИ + CTA ───────────── */
function Why() {
  const items = [
    { t: "Індивідуальні рішення", d: "Підбираємо вікна та скління під конкретні потреби вашого проєкту.", c: "bg-brand-orange" },
    { t: "Надійні конструкції", d: "Сертифіковані матеріали та профільні системи, що витримують час і погоду.", c: "bg-brand-blue" },
    { t: "Професійний монтаж", d: "Досвідчені майстри виконують монтаж точно, акуратно та в узгоджені терміни.", c: "bg-brand-lime" },
  ];
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <SplitHeading text="Чому обирають нас" className="font-display text-5xl sm:text-7xl uppercase leading-[0.9]" />
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.1}>
              <div className="h-full bg-paper rounded-3xl p-8">
                <span className={`block w-12 h-12 rounded-xl ${it.c}`} />
                <h3 className="font-display text-3xl uppercase mt-10">{it.t}</h3>
                <p className="text-ink/65 mt-3">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="rounded-[2rem] bg-brand-lime text-ink p-8 sm:p-12 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-end">
            <h2 className="font-display text-4xl sm:text-6xl uppercase leading-[0.92]">
              Готові змінити своє вікно на світ?
            </h2>
            <div>
              <p className="text-ink/75 mb-6">
                Залиште заявку — зв'яжемося, домовимося про безкоштовний замір і підготуємо розрахунок.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact/" className="rounded-full bg-ink text-white hover:bg-brand-orange transition-colors px-8 py-4 font-semibold uppercase tracking-wider">
                  Замовити замір
                </Link>
                <a href="tel:+380951099040" className="rounded-full border-2 border-ink px-8 py-4 font-semibold uppercase tracking-wider hover:bg-ink hover:text-white transition-colors">
                  Зателефонувати
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomeNew() {
  return (
    <>
      <Hero />
      <Services />
      <Featured />
      <Stats />
      <Process />
      <Why />
    </>
  );
}
