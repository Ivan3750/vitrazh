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
import LaminationViewer from "@/components/LaminationViewer";
import FAQ from "@/components/FAQ";
import Icon from "@/components/Icon";

const BRANDS = ["Aluplast", "Viknaland", "Aluprof", "KMD", "Roto", "Siegenia", "RENOLIT"];

const STATS = [
  { to: 13, suffix: " тис", label: "завершених проєктів" },
  { to: 10, suffix: " тис", label: "задоволених клієнтів" },
  { to: 95, suffix: "%", label: "рівень успішності" },
  { to: 120, suffix: "+", label: "професіоналів" },
];

const WHY = [
  { icon: "ruler", title: "Індивідуальні рішення", text: "Підбираємо вікна, двері та скління під конкретні потреби вашого проєкту." },
  { icon: "lock", title: "Надійні конструкції", text: "Сертифіковані матеріали та профільні системи, що витримують час і погодні умови." },
  { icon: "wrench", title: "Професійне встановлення", text: "Досвідчені майстри виконують монтаж точно, акуратно та в узгоджені терміни." },
  { icon: "thermo", title: "Тепло та тиша", text: "Багатокамерні профілі й енергозберігаючі склопакети: менше витрат на опалення, шум знижується до 45 дБ." },
];

const STEPS = [
  { title: "Заявка та консультація", text: "Безкоштовний виїзд на замір і прорахунок вартості. Індивідуальні поради щодо найкращих рішень для вашого дому." },
  { title: "Підтвердження та договір", text: "Узгоджуємо замовлення, фіксуємо деталі та строки. Повторний замір перед підписанням договору." },
  { title: "Виготовлення та монтаж", text: "Вироби виготовляються на заводі. Монтаж виконується сертифікованими спеціалістами з дотриманням усіх норм." },
  { title: "Гарантія та сервіс", text: "Після завершення проєкту забезпечуємо гарантійне обслуговування та підтримку за потреби." },
];

const WORKS = ["1", "4", "6", "7", "9", "2", "3", "5", "8"];

export default function HomePage() {
  return (
    <>
      {/* HERO: простий — текст і одне фото */}
      <section className="relative overflow-hidden">
        <div className="container-x grid gap-10 lg:grid-cols-2 items-center py-12 md:py-20">
          <div className="flex flex-col gap-7">
            <span className="badge self-start anim-rise">Офіційний партнер заводу</span>
            <h1 className="display">
              <span className="line-mask"><span style={{ "--d": "60ms" }}>Вікна, які</span></span>
              <span className="line-mask"><span style={{ "--d": "180ms" }}><span className="hl">змінюють</span></span></span>
              <span className="line-mask"><span style={{ "--d": "300ms" }}>ваш дім</span></span>
            </h1>
            <p className="lead max-w-md anim-rise [animation-delay:480ms]">Каталог із цінами, калькулятор і замовлення онлайн. Безкоштовний замір, доставка та монтаж у Києві та області.</p>
            <div className="flex flex-wrap gap-3 anim-rise [animation-delay:600ms]">
              <Link href="/catalog/" className="btn btn-primary">Купити вікна <Icon name="arrow" size={16} /></Link>
              <Link href="/calc/" className="btn btn-outline">Калькулятор</Link>
            </div>
          </div>
          <Reveal variant="scale" className="relative aspect-[4/3] lg:aspect-[5/4] border border-line-2 overflow-hidden">
            <Image src="/img/photo/house.webp" alt="Сучасний будинок з панорамними вікнами" fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover anim-kenburns" />
          </Reveal>
        </div>
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-line-2 border-t border-line-2">
            {STATS.map((s) => (
              <div key={s.label} className="py-5 md:py-8 px-3 md:px-8 first:pl-0 flex flex-col items-start sm:flex-row sm:items-center gap-1 sm:gap-5 min-w-0">
                <span className="num text-3xl sm:text-4xl md:text-6xl leading-none"><CountUp to={s.to} suffix={s.suffix} /></span>
                <span className="small sm:max-w-[120px] leading-snug min-w-0">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БРЕНДИ */}
      <section className="theme-dark bg-deep border-y border-line py-7 overflow-hidden scroll-row" aria-label="Системи та комплектуючі заводу">
        <div className="scroll-track flex" aria-hidden="true">
          {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((b, i) => (
            <span key={i} className="px-10 text-2xl font-bold tracking-tight text-white/25 hover:text-accent-fg transition-colors whitespace-nowrap">{b}</span>
          ))}
        </div>
      </section>

      {/* КАТЕГОРІЇ */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Магазин" title="Усе для ваших вікон в одному місці" lead="Вікна на замовлення та супутні товари — з однаковим рівнем сервісу, доставкою та монтажем." />
          <div className="grid gap-5 md:grid-cols-4 md:auto-rows-[300px]">
            <Reveal className="md:col-span-2 md:row-span-2 md:h-full" variant="scale">
              <Link href="/catalog/" className="card group flex flex-col h-full min-h-[420px] overflow-hidden">
                <div className="relative flex-1 zoom-img">
                  <Image src="/img/photo/window-2.webp" alt="" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
                  <span className="badge absolute left-5 top-5">Головне</span>
                </div>
                <div className="p-6 flex items-center justify-between gap-4 relative z-[2]">
                  <div><h3 className="h3 !text-2xl">Металопластикові вікна</h3><p className="small mt-1">5 профільних систем, калькулятор, ціни</p></div>
                  <span className="btn btn-primary btn-sm btn-icon shrink-0"><Icon name="arrow" size={18} /></span>
                </div>
              </Link>
            </Reveal>
            {SHOP_CATEGORIES.map((c, i) => (
              <Reveal key={c.id} delay={(i + 1) * 70} variant="scale" className="md:h-full">
                <Link href={`/shop/${c.id}/`} className="card group flex flex-col h-full min-h-[300px] overflow-hidden">
                  <div className="relative flex-1 zoom-img">
                    {c.image ? <Image src={c.image} alt="" fill sizes="(min-width:768px) 25vw, 100vw" className="object-cover" /> : <ProductArt className="absolute inset-0 w-full h-full" />}
                  </div>
                  <div className="p-5 flex items-center justify-between gap-3 relative z-[2]">
                    <h3 className="h3 !text-base">{c.title}</h3>
                    <Icon name="arrow" size={18} className="text-text-3 group-hover:text-accent-fg group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-5 flex flex-wrap items-center gap-3 border border-dashed border-line-2 px-6 py-4 small">
            <Icon name="door" size={18} className="text-accent-fg" /> <span><b className="text-ink">Ворота</b> — скоро в магазині. Попередній розрахунок: <a href={SITE.phoneHref} className="font-semibold text-ink link-u">{SITE.phone}</a></span>
          </Reveal>
        </div>
      </section>

      {/* ПОПУЛЯРНІ ВІКНА */}
      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Хіти" title="Популярні вікна" lead="Оберіть колір і склопакет прямо на картці — ціна оновиться одразу." action={<Link href="/catalog/" className="btn btn-outline">Весь каталог <Icon name="arrow" size={18} /></Link>} />
          <FeaturedWindows />
        </div>
      </section>

      {/* ЧОМУ МИ */}
      <section className="section theme-dark">
        <div className="container-x">
          <SectionHead eyebrow="Чому обирають нас" title="Надійність, перевірена тисячами об'єктів" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((b, i) => (
              <Reveal key={b.title} delay={i * 80} className="card p-7 flex flex-col gap-5">
                <span className="relative grid place-items-center w-12 h-12 border border-line-2 text-accent-fg"><Icon name={b.icon} size={22} /></span>
                <h3 className="h3">{b.title}</h3>
                <p className="small">{b.text}</p>
                <span className="mt-auto text-5xl font-bold text-white/[.06] num">0{i + 1}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* КАЛЬКУЛЯТОР */}
      <section className="section relative overflow-hidden">
        <div className="container-x relative grid gap-12 lg:grid-cols-2 items-center">
          <Reveal className="flex flex-col gap-6">
            <span className="eyebrow">Калькулятор</span>
            <h2 className="h2">Налаштуйте вікно <span className="accent-text">за хвилину</span></h2>
            <p className="lead">Оберіть профіль, конфігурацію й розміри, склопакет, колір та фурнітуру — вартість оновлюється одразу. Готовий розрахунок додайте в кошик.</p>
            <ul className="flex flex-col gap-3">
              {["Профільні системи з характеристиками", "Схема вікна відповідає вашим розмірам і кольору", "Послуги: замір, монтаж, підвіконня, москітна сітка"].map((t) => (
                <li key={t} className="flex items-center gap-3"><span className="grid place-items-center w-6 h-6 bg-accent text-on-accent shrink-0"><Icon name="check" size={14} /></span>{t}</li>
              ))}
            </ul>
            <div><Link href="/calc/" className="btn btn-primary">Відкрити калькулятор <Icon name="arrow" size={18} /></Link></div>
          </Reveal>
          <Reveal delay={120} variant="right">
            <div className="card shadow-[0_40px_80px_-30px_rgba(0,0,0,.25)]">
              <div className="flex items-center justify-between px-6 py-4 border-b border-line"><p className="font-semibold">Ваш розрахунок</p><span className="chip">IDEAL 4000</span></div>
              <div className="grid sm:grid-cols-2 gap-6 p-6 items-center">
                <div className="panel grid place-items-center p-4 h-48"><WindowDiagram cols={["F", "T", "F"]} width={1900} height={1400} color="anthracite" dims maxW={190} maxH={150} /></div>
                <dl className="text-sm flex flex-col gap-3">
                  {[["Розмір", "1900×1400 мм"], ["Склопакет", "2 камери, 40 мм"], ["Колір", "Антрацит"], ["Фурнітура", "Maco"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-3 border-b border-line pb-2"><dt className="text-text-2">{k}</dt><dd className="font-semibold text-right">{v}</dd></div>
                  ))}
                </dl>
              </div>
              <div className="flex items-center justify-between px-6 py-5 bg-accent text-on-accent"><span className="text-sm font-semibold">Орієнтовна вартість</span><span className="text-2xl font-bold num">17 800 грн</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ПРОФІЛІ */}
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Профільні системи" title="Виберіть свою систему" lead="Від базових рішень до енергоефективних систем глибиною 76 мм." action={<Link href="/catalog/" className="btn btn-outline">Усі вікна з цінами <Icon name="arrow" size={18} /></Link>} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PVC_PROFILES.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 80}><ProfileCard p={p} i={i} /></Reveal>)}
          </div>
        </div>
      </section>

      {/* КАСТОМІЗАЦІЯ: ламінація, фарбування, декор */}
      <section className="section theme-dark">
        <div className="container-x flex flex-col gap-24 md:gap-32">
          <div>
            <SectionHead eyebrow="Ламінація" title="Колір, що підкреслює ваш дім" />
            <Reveal><LaminationViewer /></Reveal>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <Reveal variant="left" className="relative aspect-[4/3] border border-line overflow-hidden zoom-img">
              <Image src="/img/decor/painting.webp" alt="Пофарбований профіль вікна" fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
            </Reveal>
            <Reveal delay={100} className="flex flex-col gap-6">
              <span className="eyebrow">Фарбування</span>
              <h2 className="h2">Будь-який колір за шкалою RAL</h2>
              <p className="lead">Дозволяє надати ПВХ-профілю практично будь-який колір, у тому числі «металік». Застосовуються сучасні, довговічні та екологічно безпечні фарби Zobel Chemie з високою атмосферостійкістю покриття.</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {["Яскравий дизайн", "Стійкість і міцність покриття", "Збільшення терміну служби", "Посилення енергозбереження"].map((t) => (
                  <li key={t} className="flex items-center gap-3 border border-line bg-surface px-4 py-3 text-sm"><Icon name="check" size={16} className="text-accent-fg shrink-0" />{t}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <Reveal className="flex flex-col gap-6 order-2 lg:order-1">
              <span className="eyebrow">Декор скла</span>
              <h2 className="h2">Унікальний стиль вашого вікна</h2>
              <div className="flex flex-col gap-4 lead">
                <p>Плівковий вітраж за англійською технологією вставляється всередину склопакета й зберігає всі його властивості та простоту догляду. Гарантія 5 років.</p>
                <p>Декоративна розкладка — спеціальний профіль, який розмежовує простір скла, надаючи вікнам благородного вигляду.</p>
                <p>Алмазне гравірування — фігурна різьба по склу за допомогою фрезерувального верстата: на звичайне, забарвлене, матове чи дзеркальне скло.</p>
              </div>
            </Reveal>
            <Reveal variant="right" className="relative aspect-[4/3] border border-line overflow-hidden zoom-img order-1 lg:order-2">
              <Image src="/img/decor/glass-decor.webp" alt="Декоративне скло" fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* НАШІ РОБОТИ */}
      <section className="section overflow-hidden">
        <div className="container-x"><SectionHead eyebrow="Наші роботи" title="Реалізовані об'єкти" /></div>
        <div className="scroll-row overflow-hidden" aria-label="Реалізовані об'єкти">
          <div className="scroll-track-fast flex gap-4 pl-4">
            {[...WORKS, ...WORKS].map((n, i) => (
              <div key={i} className="zoom-img relative shrink-0 w-[280px] md:w-[420px] aspect-[4/3] border border-line bg-surface overflow-hidden">
                <Image src={`/img/works/${n}.webp`} alt="Встановлені вікна — наша робота" fill sizes="420px" className="object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЕТАПИ */}
      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Послідовність замовлення" title="Від заявки до готових вікон" />
          <ol className="grid gap-10 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 120} className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <span className="grid place-items-center w-12 h-12 border border-sel text-accent-fg font-bold num shrink-0">0{i + 1}</span>
                  <span className="grow-x h-px flex-1 bg-line-2 hidden md:block" style={{ "--d": `${i * 120 + 300}ms` }} />
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
          <Reveal variant="left" className="relative aspect-square max-h-[560px] border border-line overflow-hidden zoom-img">
            <Image src="/img/photo/house.webp" alt="Сучасний будинок з великими вікнами" fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-6">
            <span className="eyebrow">Про компанію</span>
            <h2 className="h2">ВІТРАЖ — офіційний партнер заводу {SITE.factory} в Україні</h2>
            <p className="lead">Ми працюємо напряму із заводом-виробником, тому пропонуємо заводську якість конструкцій і зрозумілі ціни. Допоможемо підібрати вікно під ваш бюджет — від економ-варіантів до енергоефективних систем.</p>
            <div className="flex flex-wrap gap-3"><Link href="/about/" className="btn btn-outline">Дізнатись більше <Icon name="arrow" size={18} /></Link><Link href="/service/" className="btn btn-outline">Сервіс і ремонт</Link></div>
          </Reveal>
        </div>
      </section>

      {/* єВІДНОВЛЕННЯ */}
      <section className="section-deep border-y border-line relative overflow-hidden">
        <Image src="/img/photo/dark-grey.webp" alt="" fill sizes="100vw" className="object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-deep/80" />
        <div className="container-x relative py-16 md:py-24 grid gap-8 md:grid-cols-[1.4fr_1fr] items-center">
          <Reveal className="flex flex-col gap-5">
            <span className="eyebrow">єВідновлення</span>
            <h2 className="h2">Державна підтримка пошкодженого житла</h2>
            <p className="lead max-w-xl">Допоможемо з документами, підбором вікон і дверей, виготовленням та монтажем «під ключ» за програмою єВідновлення через Дію.</p>
          </Reveal>
          <Reveal delay={100} className="md:justify-self-end"><Link href="/recovery/" className="btn btn-primary">Дізнатись умови <Icon name="arrow" size={18} /></Link></Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.7fr]">
          <div className="flex flex-col gap-6">
            <SectionHead eyebrow="FAQ" title="Часті запитання" lead="Відповіді на те, що нас питають найчастіше. Не знайшли своє — зателефонуйте." />
            <div><Link href="/faq/" className="btn btn-outline">Усі запитання <Icon name="arrow" size={18} /></Link></div>
          </div>
          <FAQ limit={6} />
        </div>
      </section>

      {/* ЗАЯВКА */}
      <section className="section pt-0" id="order">
        <div className="container-x">
          <div className="theme-dark relative overflow-hidden border border-line-2 bg-deep grid gap-10 lg:grid-cols-2 p-6 sm:p-10 md:p-16 items-center">
            <Image src="/img/photo/window-dark.webp" alt="" fill sizes="100vw" className="object-cover opacity-40" loading="lazy" />
            <div className="absolute inset-0 bg-deep/75" />
            <Reveal className="relative flex flex-col gap-5">
              <span className="eyebrow">Консультація</span>
              <h2 className="h2">Залишіть заявку — ми передзвонимо</h2>
              <p className="lead">Розрахуємо вартість, підберемо профіль і запишемо на безкоштовний замір. Або зателефонуйте: <a className="font-semibold text-ink link-u" href={SITE.phoneHref}>{SITE.phone}</a></p>
            </Reveal>
            <Reveal delay={100} variant="right" className="relative bg-surface border border-line-2 p-6 md:p-8">
              <OrderForm subject="Заявка на консультацію (головна)" submitLabel="Передзвоніть мені" compact />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
