"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, SplitHeading, Counter, Marquee, ImageReveal } from "./motion";
import { windows, badgeOf, toneClass } from "@/app/catalog/data/windows";
import { faqs } from "@/app/data/faq";
import heroImg from "@/app/assets/images-webp/home/hero.webp";
import glassHouse from "@/app/assets/images-webp/home/glass-house.webp";
import installers from "@/app/assets/images-webp/home/installers.webp";
import stained from "@/app/assets/images-webp/home/stained.webp";

const EASE = [0.22, 1, 0.36, 1];

/* ───────────── HERO: суцільна темна панель + велике фото ───────────── */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

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
    { v: <Counter to={70} />, u: "мм", l: "Глибина" },
    { v: <Counter to={5} />, u: "", l: "Камер" },
    { v: <Counter to={45} />, u: "дБ", l: "Тиша" },
    { v: "RC2", u: "", l: "Захист" },
  ];

  return (
    <section ref={ref} className="bg-ink text-white">
      <div className="grid lg:grid-cols-[5fr_7fr] lg:min-h-[calc(100vh-76px)] lg:max-h-[780px]">
        <div className="flex flex-col justify-between px-4 sm:px-8 lg:pl-[max(2rem,calc((100vw-1320px)/2+1.5rem))] lg:pr-10 pt-8 sm:pt-10 pb-0 order-2 lg:order-1">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/80"
            >
              <span className="w-3 h-3 bg-brand-orange" />
              Київ та область · під ключ
            </motion.p>

            <h1 className="font-display mt-5 !text-[48px] sm:!text-[72px] lg:!text-[84px] xl:!text-[96px] !leading-[0.92] uppercase">
              {line("Вікна,", 0.3)}
              {line("що змінюють", 0.42)}
              {line("простір", 0.54, "text-brand-orange")}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-5 max-w-md text-white/70"
            >
              Продаж і монтаж металопластикових та алюмінієвих вікон, вітражів і фурнітури. Безкоштовний
              замір, виготовлення на заводі, акуратний монтаж і гарантійний сервіс.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Link href="/catalog/vikna/" className="group inline-flex items-center gap-4 bg-brand-orange text-white hover:bg-white hover:text-ink transition-colors pl-7 pr-2 py-2 font-semibold uppercase tracking-wider">
                Каталог
                <span className="w-10 h-10 bg-white text-ink grid place-items-center group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link href="/contact/" className="inline-flex items-center border-2 border-white px-7 py-3 font-semibold uppercase tracking-wider hover:bg-white hover:text-ink transition-colors">
                Безкоштовний замір
              </Link>
            </motion.div>
          </div>

          {/* Характеристики-«квадрати» */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 grid grid-cols-4 border-t border-white/20"
          >
            {specs.map((s, i) => (
              <div key={s.l} className={`py-5 ${i ? "border-l border-white/20 pl-4" : ""}`}>
                <div className="font-display text-3xl sm:text-4xl leading-none">
                  {s.v}
                  {s.u && <span className="text-base text-white/50 ml-1">{s.u}</span>}
                </div>
                <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-white/50">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-0 overflow-hidden order-1 lg:order-2">
          <motion.div
            initial={{ clipPath: "inset(0 0 0 100%)" }}
            animate={{ clipPath: "inset(0 0 0 0%)" }}
            transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
            className="absolute inset-0"
          >
            <motion.img
              src={heroImg.src}
              width={heroImg.width}
              height={heroImg.height}
              alt="Сучасний будинок із новими металопластиковими вікнами"
              fetchPriority="high"
              style={{ y: imgY, scale: 1.12 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="absolute right-0 bottom-0 bg-white text-ink p-5 pl-7 w-[230px] sm:w-[290px]"
          >
            <p className="text-[11px] uppercase tracking-[0.16em] text-ink/50">Система</p>
            <p className="font-display text-2xl sm:text-3xl uppercase leading-none mt-1">IDEAL 4000</p>
            <p className="text-sm text-ink/60 mt-2">П'ятикамерний профіль 70 мм</p>
            <span className="absolute left-0 top-0 w-2 h-full bg-brand-orange" />
          </motion.div>
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
          <SplitHeading text="Що ми робимо" className="font-display text-5xl sm:text-7xl uppercase leading-[0.9]" />
          <p className="max-w-sm text-ink/65">Усе для світла у вашому домі: від вибору системи до гарантійного сервісу.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => {
            const Wrap = c.href ? Link : "div";
            return (
              <Reveal key={c.t} delay={i * 0.1}>
                <Wrap {...(c.href ? { href: c.href } : {})} className="group block">
                  <ImageReveal src={c.img.src} alt={c.t} className="aspect-[4/3]" />
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-4xl uppercase">{c.t}</h3>
                      <p className="mt-2 text-ink/65 max-w-xs">{c.d}</p>
                    </div>
                    <span className={`shrink-0 px-3 py-1 text-xs font-semibold uppercase tracking-widest ${c.c}`}>{c.tag}</span>
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

/* ───────────── ІЗ ЧОГО СКЛАДАЄТЬСЯ ВІКНО ───────────── */
function Anatomy() {
  const parts = [
    { n: "01", t: "Профіль", d: "Каркас вікна. Від глибини профілю та кількості камер залежать теплота й міцність: 58 мм і 3 камери для типового житла, 70–76 мм і 5–6 камер для енергоефективних будинків.", k: "58 · 70 · 76 мм" },
    { n: "02", t: "Склопакет", d: "Займає більшу частину площі вікна, тож визначає тепло- та звукоізоляцію. Однокамерний, двокамерний, енергозберігаючий або шумозахисний — під ваші задачі.", k: "24–64 мм" },
    { n: "03", t: "Фурнітура", d: "Механізм відкривання й замикання. Відповідає за плавний хід, провітрювання, притиск стулки та захист від злому.", k: "до класу RC2" },
  ];
  return (
    <section className="bg-paper py-12 sm:py-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_2fr] gap-8">
        <div>
          <p className="text-brand-orange font-semibold uppercase tracking-[0.18em] text-sm mb-3">Корисно знати</p>
          <SplitHeading text="Із чого складається вікно" className="font-display text-5xl sm:text-6xl uppercase leading-[0.92]" />
          <p className="mt-4 text-ink/65 max-w-sm">Три елементи, від яких залежить комфорт у домі. Підкажемо, на чому варто заощадити, а на чому — ні.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-ink/15 border border-ink/15">
          {parts.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.1} className="bg-white p-6 flex flex-col">
              <span className="font-display text-5xl text-brand-orange leading-none">{p.n}</span>
              <h3 className="font-display text-3xl uppercase mt-6">{p.t}</h3>
              <p className="mt-3 text-ink/65 flex-1">{p.d}</p>
              <p className="mt-5 pt-3 border-t border-ink/15 font-display text-lg">{p.k}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── ПОПУЛЯРНІ СИСТЕМИ ───────────── */
function Featured() {
  const featured = windows.slice(0, 4);
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SplitHeading text="Профільні системи" className="font-display text-5xl sm:text-7xl uppercase leading-[0.9]" />
          <Link href="/catalog/vikna/" className="self-start sm:self-auto bg-ink text-white hover:bg-brand-orange transition-colors px-7 py-3 font-semibold uppercase tracking-wider">
            Весь каталог ({windows.length}) →
          </Link>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((w, i) => {
            const badge = badgeOf(w);
            return (
              <Reveal key={w.slug} delay={i * 0.08}>
                <Link href={`/catalog/vikna/${w.slug}/`} className="group block bg-paper overflow-hidden">
                  <div className="aspect-[4/5] p-5 grid place-items-center bg-white m-3">
                    <img src={w.image.src} width={w.image.width} height={w.image.height} loading="lazy" decoding="async" alt={`${w.name} — профільна система`} className="h-full w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="px-5 pb-5 pt-2 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-ink/50">{w.brand}</p>
                      <h3 className="font-display text-2xl uppercase leading-tight">{w.name}</h3>
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-widest ${toneClass[badge.tone]}`}>{badge.label}</span>
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

/* ───────────── ПОРІВНЯННЯ СИСТЕМ ───────────── */
function Compare() {
  const rows = [
    ["LIDER 58", "58 мм", "3 / 3", "1,65", "24–32 мм", "Квартири, балкони, лоджії"],
    ["IDEAL 4000", "70 мм", "5 / 5", "1,3", "32–40 мм", "Житло: нове будівництво та заміна"],
    ["76 AD", "76 мм", "6 / 6", "1,34", "до 44 мм", "Підвищені вимоги до тепла й тиші"],
    ["Neo 76 AD", "76 мм", "5 / 6", "1,2", "до 48 мм", "Будинки, школи, установи"],
    ["Neo 76 MD", "76 мм", "5 / 6", "1,1", "до 48 мм", "Найтепліший варіант, комбіновані конструкції"],
  ];
  const head = ["Система", "Глибина", "Камер", "Uf, Вт/м²К", "Склопакет", "Для чого"];
  return (
    <section className="bg-paper py-12 sm:py-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SplitHeading text="Як обрати профіль" className="font-display text-5xl sm:text-6xl uppercase leading-[0.92]" />
          <p className="max-w-md text-ink/65">Чим менший Uf і більше камер — тим тепліше. Нижче порівняння ПВХ-систем із каталогу.</p>
        </div>
        <Reveal className="mt-8 overflow-x-auto bg-white border border-ink/15">
          <table className="w-full min-w-[720px] text-left">
            <thead>
              <tr>{head.map((h) => <th key={h} className="px-5 py-3">{h}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]} className="border-t border-ink/10">
                  {r.map((c, i) => (
                    <td key={i} className={`px-5 py-4 ${i === 0 ? "font-display text-xl uppercase" : "text-ink/75"}`}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="mt-4 text-sm text-ink/50">Дані виробників профільних систем. Підібрати конфігурацію під ваш об'єкт допоможе менеджер.</p>
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
    <section className="bg-ink text-white overflow-hidden">
      <Marquee items={["Вікна", "Вітражі", "Склопакети", "Фурнітура", "Монтаж", "Гарантія"]} className="py-4 bg-brand-orange text-white" />
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-y-8">
        {stats.map((s, i) => (
          <Reveal key={s.text} delay={i * 0.1} className={`${i ? "lg:border-l border-white/20 lg:pl-8" : ""} ${i % 2 ? "border-l border-white/20 pl-6" : ""}`}>
            <Counter to={s.to} suffix={s.suffix} className="font-display text-5xl sm:text-7xl leading-none" />
            <p className="mt-3 text-white/70 uppercase text-sm tracking-[0.14em]">{s.text}</p>
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
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_1.6fr] gap-10">
        <div className="lg:sticky lg:top-24 self-start">
          <p className="text-brand-orange font-semibold uppercase tracking-[0.18em] text-sm mb-3">Як це працює</p>
          <SplitHeading text="Від заміру до гарантії" className="font-display text-5xl sm:text-6xl uppercase leading-[0.92]" />
        </div>
        <div>
          {steps.map((s, i) => (
            <Reveal key={s.t} y={30}>
              <div className="grid grid-cols-[auto_1fr] gap-6 sm:gap-10 py-5 border-t border-ink/15">
                <span className="font-display text-5xl sm:text-6xl leading-none text-brand-orange">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-3xl sm:text-4xl uppercase">{s.t}</h3>
                  <p className="mt-2 text-ink/65 max-w-lg">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-ink/15" />
        </div>
      </div>
    </section>
  );
}

/* ───────────── ВІД ЧОГО ЗАЛЕЖИТЬ ЦІНА ───────────── */
function Price() {
  const f = [
    ["Розмір і конфігурація", "Кількість стулок, глухі та відкривні частини, нестандартна форма."],
    ["Профільна система", "Глибина профілю, кількість камер і виробник визначають базову вартість."],
    ["Склопакет", "Одно- чи двокамерний, енергозберігаюче або шумозахисне скло, товщина."],
    ["Фурнітура", "Базова, підсилена або протизламна; додаткові функції провітрювання."],
    ["Колір і ламінація", "Білий профіль або декоративна плівка з одного чи двох боків."],
    ["Монтаж і додатки", "Підвіконня, відливи, відкоси, москітні сітки, демонтаж старих вікон."],
  ];
  return (
    <section className="bg-paper py-12 sm:py-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SplitHeading text="Від чого залежить ціна" className="font-display text-5xl sm:text-6xl uppercase leading-[0.92]" />
          <Link href="/calc/" className="self-start md:self-auto bg-ink text-white hover:bg-brand-orange transition-colors px-7 py-3 font-semibold uppercase tracking-wider">
            Розрахувати вартість →
          </Link>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/15 border border-ink/15">
          {f.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 0.08} y={20} className="bg-white p-6">
              <p className="font-display text-sm text-brand-orange">0{i + 1}</p>
              <h3 className="font-display text-2xl uppercase mt-2">{t}</h3>
              <p className="mt-2 text-ink/65">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── ЧОМУ МИ ───────────── */
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
              <div className="h-full bg-paper p-7 border-t-4 border-ink">
                <span className={`block w-10 h-10 ${it.c}`} />
                <h3 className="font-display text-3xl uppercase mt-8">{it.t}</h3>
                <p className="text-ink/65 mt-3">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── FAQ ───────────── */
function FaqPreview() {
  const list = faqs.slice(0, 5);
  return (
    <section className="bg-paper py-12 sm:py-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_2fr] gap-8">
        <div>
          <SplitHeading text="Часті запитання" className="font-display text-5xl sm:text-6xl uppercase leading-[0.92]" />
          <Link href="/faq/" className="mt-6 inline-block border-b-2 border-brand-orange pb-1 font-semibold uppercase tracking-wider hover:text-brand-orange">
            Усі питання ({faqs.length}) →
          </Link>
        </div>
        <div className="border-t border-ink/15">
          {list.map((f) => (
            <details key={f.question} className="group border-b border-ink/15">
              <summary className="cursor-pointer flex items-center justify-between gap-6 py-4 font-display text-xl sm:text-2xl uppercase leading-tight">
                {f.question}
                <span className="shrink-0 w-9 h-9 bg-ink text-white grid place-items-center text-xl transition-transform duration-300 group-open:rotate-45 group-open:bg-brand-orange">+</span>
              </summary>
              <p className="pb-5 pr-12 text-ink/70">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── CTA ───────────── */
function Cta() {
  return (
    <section className="bg-white pb-12 sm:pb-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="bg-brand-blue text-white p-8 sm:p-12 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-end">
            <h2 className="font-display text-4xl sm:text-6xl uppercase leading-[0.92]">Готові змінити своє вікно на світ?</h2>
            <div>
              <p className="text-white/85 mb-6">Залиште заявку — зв'яжемося, домовимося про безкоштовний замір і підготуємо розрахунок.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact/" className="bg-white text-ink hover:bg-ink hover:text-white transition-colors px-8 py-4 font-semibold uppercase tracking-wider">Замовити замір</Link>
                <a href="tel:+380951099040" className="border-2 border-white px-8 py-4 font-semibold uppercase tracking-wider hover:bg-white hover:text-ink transition-colors">Зателефонувати</a>
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
      <Anatomy />
      <Featured />
      <Compare />
      <Stats />
      <Process />
      <Price />
      <Why />
      <FaqPreview />
      <Cta />
    </>
  );
}
