import Link from "next/link";
import Image from "next/image";
import { PVC_PROFILES } from "@/lib/catalog";
import { SHOP_CATEGORIES } from "@/lib/shop";
import { SITE } from "@/lib/site";
import ProfileCard from "@/components/ProfileCard";
import FeaturedWindows from "@/components/FeaturedWindows";
import OrderForm from "@/components/OrderForm";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import ProductArt from "@/components/ProductArt";
import Icon from "@/components/Icon";

const MARQUEE = ["Офіційний партнер заводу", "Безкоштовний замір", "Монтаж під ключ", "Онлайн-калькулятор", "Замовлення в кілька кліків", "Київ та область", "Aluplast · Viknaland"];

const STATS = [
  { to: 20, suffix: "+", label: "років досвіду заводу-виробника" },
  { to: 1200, suffix: "", label: "виробів на добу — потужність заводу" },
  { to: 5, suffix: "", label: "профільних систем у каталозі" },
  { to: 45, suffix: " дБ", label: "рівень шумоізоляції (до)" },
];

const BENEFITS = [
  { icon: "thermo", title: "Тепло в оселі", text: "Багатокамерні профілі та енергозберігаючі склопакети зменшують тепловтрати й витрати на опалення." },
  { icon: "sound", title: "Тиша", text: "Шумозахисне скління знижує вуличний шум до 45 дБ — комфорт навіть біля жвавої дороги." },
  { icon: "lock", title: "Безпека", text: "Посилені профілі та фурнітура із захистом від зламу до класу RC2." },
  { icon: "sun", title: "Довговічність", text: "ПВХ-профіль не потребує фарбування та складного догляду, не жовтіє з часом." },
];

const STEPS = [
  { n: "01", title: "Оберіть і додайте в кошик", text: "Підберіть вікно в каталозі чи калькуляторі — або зателефонуйте нам." },
  { n: "02", title: "Безкоштовний замір", text: "Замірник приїде, виміряє отвори та допоможе обрати конфігурацію." },
  { n: "03", title: "Виготовлення", text: "Замовлення виготовляється на заводі за вашими розмірами." },
  { n: "04", title: "Доставка та монтаж", text: "Привеземо, встановимо, налаштуємо фурнітуру та приберемо після себе." },
];

const WORKS = [
  { src: "/img/works/1.webp", span: "md:col-span-2 md:row-span-2" },
  { src: "/img/works/4.webp", span: "" },
  { src: "/img/works/6.webp", span: "" },
  { src: "/img/works/7.webp", span: "md:col-span-2" },
  { src: "/img/works/9.webp", span: "" },
  { src: "/img/works/2.webp", span: "" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink text-white overflow-hidden on-dark">
        <div className="absolute inset-y-0 right-0 w-full md:w-[60%] md:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]">
          <Image src="/img/photo/hero-window.webp" alt="Світла кімната з металопластиковими вікнами" fill priority sizes="(min-width:768px) 60vw, 100vw" className="object-cover anim-zoom" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent md:from-ink/30 md:via-transparent" />
        </div>
        <div className="absolute left-[46%] top-12 w-24 h-24 bg-lime shard-b anim-drift hidden md:block" aria-hidden="true" />
        <div className="absolute left-[40%] bottom-20 w-16 h-16 bg-accent shard-a anim-drift [animation-delay:-3s] hidden md:block" aria-hidden="true" />
        <div className="absolute left-[53%] bottom-0 w-28 h-28 bg-brand shard-c anim-drift [animation-delay:-5s] hidden md:block" aria-hidden="true" />

        <div className="container-x relative py-20 md:py-32 lg:py-40">
          <div className="max-w-xl">
            <p className="eyebrow light anim-rise">Офіційний партнер заводу в Україні</p>
            <h1 className="mt-5 text-[2.6rem] md:text-6xl font-extrabold leading-[1.02] tracking-tight anim-rise [animation-delay:100ms]">
              Вікна, які <span className="text-lime">змінюють</span> дім
            </h1>
            <p className="mt-6 text-lg text-white/85 anim-rise [animation-delay:200ms]">Інтернет-магазин металопластикових вікон: каталог із цінами, онлайн-калькулятор, безкоштовний замір і монтаж «під ключ» у Києві та області.</p>
            <div className="mt-9 flex flex-wrap gap-3 anim-rise [animation-delay:300ms]">
              <Link href="/catalog/" className="btn btn-accent">Купити вікна <Icon name="arrow" size={18} /></Link>
              <Link href="/calc/" className="btn btn-ghost-light">Калькулятор</Link>
            </div>
          </div>
        </div>
      </section>

      {/* БІЖУЧИЙ РЯДОК */}
      <div className="marquee bg-lime text-ink overflow-hidden border-y-4 border-ink" aria-hidden="true">
        <div className="marquee-track flex">
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span key={i} className="flex items-center gap-8 px-4 py-3 text-sm font-extrabold uppercase tracking-widest whitespace-nowrap">
              {t} <span className="w-2.5 h-2.5 bg-ink rotate-45" />
            </span>
          ))}
        </div>
      </div>

      {/* КАТЕГОРІЇ */}
      <section className="section">
        <div className="container-x">
          <Reveal><p className="eyebrow">Магазин</p><h2 className="h2 mt-3">Що ви можете замовити</h2></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3 md:auto-rows-[260px]">
            <Reveal as="div" className="md:row-span-2 md:h-full">
              <Link href="/catalog/" className="group zoom-img relative block h-72 md:h-full bg-navy overflow-hidden">
                <Image src="/img/photo/window-2.webp" alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute left-0 bottom-0 p-6 text-white">
                  <span className="inline-block bg-accent text-xs font-extrabold uppercase tracking-widest px-2 py-1">Головне</span>
                  <h3 className="mt-3 text-3xl font-extrabold">Металопластикові вікна</h3>
                  <p className="mt-1 text-white/80 text-sm">5 профільних систем, калькулятор, ціни</p>
                  <span className="mt-3 inline-flex items-center gap-2 font-bold text-lime group-hover:gap-4 transition-all">Перейти <Icon name="arrow" size={18} /></span>
                </div>
              </Link>
            </Reveal>
            {SHOP_CATEGORIES.map((c, i) => (
              <Reveal key={c.id} delay={(i + 1) * 90} className="md:h-full">
                <Link href={`/shop/${c.id}/`} className="group zoom-img relative block h-60 md:h-full bg-navy overflow-hidden">
                  {c.image ? <Image src={c.image} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" /> : <ProductArt className="absolute inset-0 w-full h-full" />}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
                  <div className="absolute left-0 bottom-0 p-5 text-white">
                    <h3 className="text-xl font-extrabold">{c.title}</h3>
                    <span className="mt-1 inline-flex items-center gap-2 text-sm font-bold text-lime group-hover:gap-4 transition-all">Дивитись <Icon name="arrow" size={16} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-5 border-2 border-dashed border-line p-4 text-sm text-muted flex flex-wrap items-center gap-3">
            <Icon name="door" size={20} className="text-brand" /> Ворота — скоро в магазині. Попередній розрахунок: <a href={SITE.phoneHref} className="font-bold text-navy link-u">{SITE.phone}</a>
          </Reveal>
        </div>
      </section>

      {/* ПОПУЛЯРНІ ВІКНА */}
      <section className="section bg-soft">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div><p className="eyebrow">Хіти</p><h2 className="h2 mt-3">Популярні вікна</h2></div>
            <Link href="/catalog/" className="btn btn-outline">Весь каталог</Link>
          </Reveal>
          <div className="mt-10"><FeaturedWindows /></div>
        </div>
      </section>

      {/* ЦИФРИ */}
      <section className="bg-navy text-white relative overflow-hidden on-dark">
        <div className="absolute -left-10 top-0 w-60 h-60 bg-brand/30 shard-b" aria-hidden="true" />
        <div className="container-x relative py-16 grid gap-8 grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="border-l-4 border-accent pl-5">
              <p className="text-4xl md:text-5xl font-extrabold text-lime"><CountUp to={s.to} suffix={s.suffix} /></p>
              <p className="mt-2 text-sm text-white/75">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ПЕРЕВАГИ */}
      <section className="section">
        <div className="container-x">
          <Reveal><p className="eyebrow">Переваги</p><h2 className="h2 mt-3 max-w-2xl">Чому обирають наші вікна</h2></Reveal>
          <div className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-line">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 90} className="p-7 border-r border-b border-line hover:bg-navy hover:text-white group transition-colors duration-300">
                <span className="grid place-items-center w-14 h-14 bg-brand text-white group-hover:bg-lime group-hover:text-ink transition-colors"><Icon name={b.icon} size={26} /></span>
                <h3 className="mt-5 font-extrabold text-xl">{b.title}</h3>
                <p className="mt-2 text-sm text-muted group-hover:text-white/75 leading-relaxed">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ПРОФІЛІ */}
      <section className="section bg-soft">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div><p className="eyebrow">Профільні системи</p><h2 className="h2 mt-3">Виберіть свою систему</h2></div>
            <Link href="/catalog/" className="btn btn-outline">Усі вікна з цінами</Link>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PVC_PROFILES.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 90}><ProfileCard p={p} /></Reveal>)}
          </div>
        </div>
      </section>

      {/* НАШІ РОБОТИ */}
      <section className="section">
        <div className="container-x">
          <Reveal><p className="eyebrow">Наші роботи</p><h2 className="h2 mt-3">Реалізовані об&apos;єкти</h2></Reveal>
          <div className="mt-10 grid gap-3 grid-cols-2 md:grid-cols-4 md:auto-rows-[200px]">
            {WORKS.map((w, i) => (
              <Reveal key={w.src} delay={i * 70} className={`zoom-img relative h-44 md:h-auto overflow-hidden ${w.span}`}>
                <Image src={w.src} alt="Встановлені вікна — наша робота" fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" />
                <span className="absolute left-0 bottom-0 w-10 h-1.5 bg-accent" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ЕТАПИ */}
      <section className="section bg-ink text-white on-dark">
        <div className="container-x">
          <Reveal><p className="eyebrow">Як ми працюємо</p><h2 className="h2 !text-white mt-3">Від замовлення до готових вікон</h2></Reveal>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 120} className="relative border-t-4 border-accent pt-5">
                <span className="text-6xl font-extrabold text-white/10 absolute right-0 top-2">{s.n}</span>
                <h3 className="font-extrabold text-xl pr-12">{s.title}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ПРО КОМПАНІЮ */}
      <section className="section">
        <div className="container-x grid gap-10 md:grid-cols-2 items-center">
          <Reveal left>
            <p className="eyebrow">Про компанію</p>
            <h2 className="h2 mt-3">ВІТРАЖ — офіційний партнер заводу {SITE.factory} в Україні</h2>
            <p className="mt-5 text-muted leading-relaxed">Ми працюємо напряму із заводом-виробником, тому пропонуємо заводську якість конструкцій і зрозумілі ціни. Допоможемо підібрати вікно під ваш бюджет — від економ-варіантів до енергоефективних систем.</p>
            <Link href="/about/" className="btn btn-dark mt-7">Дізнатись більше</Link>
          </Reveal>
          <Reveal className="relative">
            <div className="absolute -left-4 -bottom-4 w-full h-full bg-lime" aria-hidden="true" />
            <Image src="/img/photo/dark-grey.webp" alt="Сучасні вікна" width={894} height={596} className="relative w-full h-auto" />
          </Reveal>
        </div>
      </section>

      {/* ЗАЯВКА */}
      <section className="section bg-soft" id="order">
        <div className="container-x grid gap-10 md:grid-cols-2 items-start">
          <Reveal left>
            <p className="eyebrow">Консультація</p>
            <h2 className="h2 mt-3">Залишіть заявку — ми передзвонимо</h2>
            <p className="mt-4 text-muted leading-relaxed">Розрахуємо вартість, підберемо профіль і запишемо на безкоштовний замір. Або зателефонуйте: <a className="font-bold text-brand" href={SITE.phoneHref}>{SITE.phone}</a>.</p>
          </Reveal>
          <Reveal className="bg-white p-6 border-t-4 border-accent shadow-[8px_8px_0_var(--color-lime)]">
            <OrderForm subject="Заявка на консультацію (головна)" submitLabel="Передзвоніть мені" compact />
          </Reveal>
        </div>
      </section>
    </>
  );
}
