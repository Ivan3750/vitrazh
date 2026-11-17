import Link from "next/link";
import Image from "next/image";
import { PVC_PROFILES } from "@/lib/catalog";
import { SHOP_CATEGORIES } from "@/lib/shop";
import { SITE } from "@/lib/site";
import ProfileCard from "@/components/ProfileCard";
import FeaturedWindows from "@/components/FeaturedWindows";
import OrderForm from "@/components/OrderForm";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import CountUp from "@/components/CountUp";
import ProductArt from "@/components/ProductArt";
import WindowDiagram from "@/components/WindowDiagram";
import FAQ from "@/components/FAQ";
import Icon from "@/components/Icon";

const BRANDS = ["Aluplast", "Viknaland", "Aluprof", "KMD", "Roto", "Siegenia"];

const TILE_TINT = { screens: "tint-lime", sills: "tint-brand", blinds: "tint-accent", shutters: "tint-soft" };

const STATS = [
  { to: 20, suffix: "+", label: "років досвіду заводу-виробника" },
  { to: 1200, suffix: "", label: "виробів на добу — потужність заводу" },
  { to: 5, suffix: "", label: "профільних систем у каталозі" },
  { to: 45, suffix: " дБ", label: "до такого рівня знижується шум" },
];

const BENEFITS = [
  { icon: "thermo", tint: "tint-accent", title: "Тепло в оселі", text: "Багатокамерні профілі та енергозберігаючі склопакети зменшують тепловтрати й витрати на опалення." },
  { icon: "sound", tint: "tint-brand", title: "Тиша", text: "Шумозахисне скління знижує вуличний шум — комфорт навіть біля жвавої дороги." },
  { icon: "lock", tint: "tint-lime", title: "Безпека", text: "Посилені профілі та фурнітура із захистом від зламу до класу RC2." },
  { icon: "sun", tint: "tint-soft", title: "Довговічність", text: "ПВХ-профіль не потребує фарбування та складного догляду, не жовтіє з часом." },
];

const STEPS = [
  { n: 1, title: "Оберіть вікно", text: "Підберіть у каталозі чи калькуляторі — або зателефонуйте нам." },
  { n: 2, title: "Безкоштовний замір", text: "Замірник виміряє отвори та допоможе обрати конфігурацію." },
  { n: 3, title: "Виготовлення", text: "Замовлення виготовляється на заводі за вашими розмірами." },
  { n: 4, title: "Доставка і монтаж", text: "Привеземо, встановимо, налаштуємо фурнітуру та приберемо." },
];

const WORKS = ["1", "4", "6", "7", "9", "2"];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-16 md:pt-24 pb-20 md:pb-28 bg-[radial-gradient(60%_50%_at_85%_0%,var(--color-brand-50)_0%,transparent_70%),radial-gradient(40%_40%_at_0%_30%,var(--color-lime-50)_0%,transparent_70%)]">
        <div className="container-x">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="chip anim-rise self-start"><span className="w-2 h-2 bg-lime" /> Офіційний партнер заводу в Україні</span>
            <h1 className="display anim-rise [animation-delay:80ms]">Металопластикові вікна <span className="mark">під ключ</span></h1>
            <p className="lead max-w-xl anim-rise [animation-delay:160ms]">Каталог із цінами, онлайн-калькулятор і замовлення в кілька кліків. Безкоштовний замір, доставка та монтаж у Києві та області.</p>
            <div className="flex flex-wrap gap-3 pt-2 anim-rise [animation-delay:240ms]">
              <Link href="/catalog/" className="btn btn-primary">Купити вікна <Icon name="arrow" size={18} /></Link>
              <Link href="/calc/" className="btn btn-outline">Розрахувати вартість</Link>
            </div>
            <ul className="flex flex-wrap gap-x-8 gap-y-2 small anim-rise [animation-delay:320ms]">
              {["Безкоштовний замір", "Монтаж під ключ", "Ціни онлайн"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Icon name="check" size={16} className="text-brand" />{t}</li>
              ))}
            </ul>
          </div>

          {/* Знімок-«інтерфейс»: фото + плаваючі картки */}
          <div className="relative mt-16 anim-rise [animation-delay:400ms]">
            <div className="relative aspect-[16/8] md:aspect-[1800/710] bg-soft border border-line overflow-hidden">
              <Image src="/img/photo/room-frames.webp" alt="Світла кімната з віконними рамами" fill priority sizes="(min-width:1200px) 1136px, 100vw" className="object-cover" />
            </div>

            <div className="hidden md:block absolute left-6 -bottom-8 w-[300px] bg-white border border-line shadow-[0_24px_48px_-16px_rgba(25,25,25,.3)] p-4 anim-float">
              <div className="flex gap-4">
                <div className="tint-brand w-20 h-24 grid place-items-center shrink-0"><WindowDiagram cols={["T", "T"]} width={1300} height={1400} maxW={56} maxH={64} /></div>
                <div className="flex flex-col gap-1 min-w-0">
                  <p className="text-sm font-semibold leading-snug">Двостулкове вікно 1300×1400</p>
                  <p className="small !text-text-3">Двокамерний склопакет</p>
                  <p className="text-lg font-bold mt-auto">від 8 300 грн</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex absolute right-6 top-6 bg-white border border-line shadow-[0_16px_32px_-12px_rgba(25,25,25,.25)] px-4 py-3 items-center gap-3 anim-float [animation-delay:-2s]">
              <span className="grid place-items-center w-9 h-9 bg-lime text-ink"><Icon name="ruler" size={18} /></span>
              <div><p className="text-sm font-semibold leading-tight">Безкоштовний замір</p><p className="small !text-text-3">Київ та область</p></div>
            </div>
            <div className="hidden md:flex absolute right-10 -bottom-6 bg-ink text-white px-4 py-3 items-center gap-6 shadow-[0_16px_32px_-12px_rgba(0,0,0,.4)] anim-float [animation-delay:-4s]">
              <div><p className="text-xs text-white/60">Теплопередача Uf</p><p className="font-bold">1,2 Вт/м²K</p></div>
              <div><p className="text-xs text-white/60">Захист від злому</p><p className="font-bold">до RC2</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ПРОФІЛЬНІ СИСТЕМИ — рядок брендів */}
      <section className="border-y border-line bg-white py-6 overflow-hidden scroll-row" aria-label="Системи та комплектуючі заводу">
        <div className="scroll-track flex" aria-hidden="true">
          {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((b, i) => (
            <span key={i} className="px-10 text-xl font-semibold tracking-tight text-text-3 whitespace-nowrap">{b}</span>
          ))}
        </div>
      </section>

      {/* КАТЕГОРІЇ */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Магазин" title="Усе для ваших вікон в одному місці" lead="Вікна на замовлення та супутні товари — з однаковим рівнем сервісу, доставкою та монтажем." />
          <div className="grid gap-6 md:grid-cols-4 md:auto-rows-[280px]">
            <Reveal className="md:col-span-2 md:row-span-2 md:h-full">
              <Link href="/catalog/" className="card group flex flex-col h-full min-h-[420px] overflow-hidden">
                <div className="relative flex-1 zoom-img">
                  <Image src="/img/photo/window-2.webp" alt="" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6 flex items-center justify-between gap-4 border-t border-line">
                  <div><h3 className="h3">Металопластикові вікна</h3><p className="small mt-1">5 профільних систем, калькулятор, ціни</p></div>
                  <span className="btn btn-dark btn-sm btn-icon shrink-0"><Icon name="arrow" size={18} /></span>
                </div>
              </Link>
            </Reveal>
            {SHOP_CATEGORIES.map((c, i) => (
              <Reveal key={c.id} delay={(i + 1) * 70} className="md:h-full">
                <Link href={`/shop/${c.id}/`} className={`card group flex flex-col h-full min-h-[280px] overflow-hidden ${TILE_TINT[c.id]}`}>
                  <div className="relative flex-1 zoom-img">
                    {c.image ? <Image src={c.image} alt="" fill sizes="(min-width:768px) 25vw, 100vw" className="object-cover" /> : <ProductArt className="absolute inset-0 w-full h-full" />}
                  </div>
                  <div className="p-5 flex items-center justify-between gap-3 bg-white border-t border-line">
                    <h3 className="h3 !text-base">{c.title}</h3>
                    <Icon name="arrow" size={18} className="text-text-3 group-hover:text-ink group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6 flex flex-wrap items-center gap-3 border border-dashed border-line-2 px-6 py-4 small">
            <Icon name="door" size={18} className="text-brand" /> <span><b className="text-ink">Ворота</b> — скоро в магазині. Попередній розрахунок: <a href={SITE.phoneHref} className="font-semibold text-ink link-u">{SITE.phone}</a></span>
          </Reveal>
        </div>
      </section>

      {/* ПОПУЛЯРНІ ВІКНА */}
      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Хіти" title="Популярні вікна" action={<Link href="/catalog/" className="btn btn-outline">Весь каталог <Icon name="arrow" size={18} /></Link>} />
          <FeaturedWindows />
        </div>
      </section>

      {/* КАЛЬКУЛЯТОР */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <Reveal className="flex flex-col gap-6">
            <span className="eyebrow">Калькулятор</span>
            <h2 className="h2">Налаштуйте вікно за хвилину</h2>
            <p className="lead">Оберіть профіль, конфігурацію й розміри, склопакет, колір та фурнітуру — вартість оновлюється одразу. Готовий розрахунок додайте в кошик.</p>
            <ul className="flex flex-col gap-3">
              {["Профільні системи з характеристиками", "Схема вікна відповідає вашим розмірам", "Послуги: замір, монтаж, підвіконня, сітка"].map((t) => (
                <li key={t} className="flex items-center gap-3"><span className="grid place-items-center w-6 h-6 bg-brand-50 text-brand"><Icon name="check" size={14} /></span>{t}</li>
              ))}
            </ul>
            <div><Link href="/calc/" className="btn btn-dark">Відкрити калькулятор <Icon name="arrow" size={18} /></Link></div>
          </Reveal>
          <Reveal delay={120} className="tint-brand p-6 md:p-10">
            <div className="bg-white border border-line shadow-[0_24px_48px_-20px_rgba(8,120,192,.35)]">
              <div className="flex items-center justify-between px-5 py-4 border-b border-line"><p className="font-semibold">Ваш розрахунок</p><span className="chip">IDEAL 4000</span></div>
              <div className="grid grid-cols-[1fr_1.2fr] gap-6 p-5 items-center">
                <div className="tint-soft h-40 grid place-items-center"><WindowDiagram cols={["F", "T", "F"]} width={1900} height={1400} maxW={150} maxH={110} /></div>
                <dl className="text-sm flex flex-col gap-2">
                  {[["Розмір", "1900×1400 мм"], ["Склопакет", "Двокамерний 40 мм"], ["Колір", "Білий"], ["Фурнітура", "Maco"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-3"><dt className="text-text-2">{k}</dt><dd className="font-semibold text-right">{v}</dd></div>
                  ))}
                </dl>
              </div>
              <div className="flex items-center justify-between px-5 py-4 bg-ink text-white"><span className="small !text-white/60">Орієнтовна вартість</span><span className="text-xl font-bold">14 150 грн</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ПЕРЕВАГИ */}
      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Переваги" title="Чому обирають наші вікна" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 70} className="card p-6 flex flex-col gap-4">
                <span className={`${b.tint} grid place-items-center w-12 h-12 text-ink`}><Icon name={b.icon} size={24} /></span>
                <h3 className="h3">{b.title}</h3>
                <p className="small">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ПРОФІЛІ */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Профільні системи" title="Виберіть свою систему" lead="Від базових рішень до енергоефективних систем глибиною 76 мм." action={<Link href="/catalog/" className="btn btn-outline">Усі вікна з цінами <Icon name="arrow" size={18} /></Link>} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PVC_PROFILES.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 70}><ProfileCard p={p} i={i} /></Reveal>)}
          </div>
        </div>
      </section>

      {/* ЦИФРИ */}
      <section className="bg-ink text-white on-dark">
        <div className="container-x py-20 grid gap-10 grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="flex flex-col gap-2">
              <p className="text-4xl md:text-5xl font-bold tracking-tight"><CountUp to={s.to} suffix={s.suffix} /></p>
              <p className="small !text-white/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* НАШІ РОБОТИ */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Наші роботи" title="Реалізовані об'єкти" />
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
            {WORKS.map((n, i) => (
              <Reveal key={n} delay={(i % 3) * 70} className="zoom-img relative aspect-[4/3] bg-soft border border-line overflow-hidden">
                <Image src={`/img/works/${n}.webp`} alt="Встановлені вікна — наша робота" fill sizes="(min-width:768px) 33vw, 50vw" className="object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ЕТАПИ */}
      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Як ми працюємо" title="Від замовлення до готових вікон" />
          <ol className="grid gap-6 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 90} className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="grid place-items-center w-10 h-10 bg-ink text-white font-bold shrink-0">{s.n}</span>
                  <span className="h-px flex-1 bg-line-2 hidden md:block" />
                </div>
                <h3 className="h3">{s.title}</h3>
                <p className="small">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ПРО КОМПАНІЮ */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <Reveal className="relative aspect-square max-h-[520px] bg-soft border border-line overflow-hidden zoom-img">
            <Image src="/img/photo/house.webp" alt="Сучасний будинок з великими вікнами" fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-6">
            <span className="eyebrow">Про компанію</span>
            <h2 className="h2">ВІТРАЖ — офіційний партнер заводу {SITE.factory} в Україні</h2>
            <p className="lead">Ми працюємо напряму із заводом-виробником, тому пропонуємо заводську якість конструкцій і зрозумілі ціни. Допоможемо підібрати вікно під ваш бюджет — від економ-варіантів до енергоефективних систем.</p>
            <div><Link href="/about/" className="btn btn-outline">Дізнатись більше <Icon name="arrow" size={18} /></Link></div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-soft">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHead eyebrow="FAQ" title="Часті запитання" lead="Відповіді на те, що нас питають найчастіше. Не знайшли своє — зателефонуйте." />
          <FAQ />
        </div>
      </section>

      {/* ЗАЯВКА */}
      <section className="section" id="order">
        <div className="container-x">
          <div className="relative overflow-hidden bg-ink text-white on-dark grid gap-12 lg:grid-cols-2 p-8 md:p-16 items-center">
            <Image src="/img/photo/window-dark.webp" alt="" fill sizes="100vw" className="object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
            <Reveal className="relative flex flex-col gap-4">
              <span className="eyebrow">Консультація</span>
              <h2 className="h2">Залишіть заявку — ми передзвонимо</h2>
              <p className="lead">Розрахуємо вартість, підберемо профіль і запишемо на безкоштовний замір. Або зателефонуйте: <a className="font-semibold text-white link-u" href={SITE.phoneHref}>{SITE.phone}</a></p>
            </Reveal>
            <Reveal delay={100} className="relative bg-white text-ink p-6 md:p-8">
              <OrderForm subject="Заявка на консультацію (головна)" submitLabel="Передзвоніть мені" compact />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
