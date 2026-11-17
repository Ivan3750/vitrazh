import Link from "next/link";
import Image from "next/image";
import { PVC_PROFILES } from "@/lib/catalog";
import { COMING_SOON, SITE } from "@/lib/site";
import ProfileCard from "@/components/ProfileCard";
import OrderForm from "@/components/OrderForm";
import Icon from "@/components/Icon";

const BENEFITS = [
  { icon: "thermo", title: "Тепло в оселі", text: "Багатокамерні профілі та енергозберігаючі склопакети зменшують тепловтрати й витрати на опалення." },
  { icon: "sound", title: "Тиша", text: "Шумозахисне скління знижує вуличний шум до 45 дБ — комфорт навіть біля жвавої дороги." },
  { icon: "lock", title: "Безпека", text: "Посилені профілі та фурнітура з протизламним захистом до класу RC2." },
  { icon: "sun", title: "Довговічність", text: "ПВХ-профіль не потребує фарбування та складного догляду, не жовтіє з часом." },
];

const STEPS = [
  { n: 1, title: "Заявка або розрахунок", text: "Підберіть вікно в каталозі чи калькуляторі або зателефонуйте нам." },
  { n: 2, title: "Безкоштовний замір", text: "Замірник приїде, виміряє отвори та допоможе обрати конфігурацію." },
  { n: 3, title: "Виготовлення", text: "Замовлення виготовляється на заводі за вашими розмірами." },
  { n: 4, title: "Доставка та монтаж", text: "Привеземо, встановимо, налаштуємо фурнітуру та приберемо після себе." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative bg-navy text-white overflow-hidden">
        <Image src="/img/photo/hero-window.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
        <div className="container-x relative py-20 md:py-32 max-w-[1200px]">
          <p className="eyebrow !text-lime">Офіційний партнер заводу в Україні</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-[1.1] max-w-3xl">Металопластикові вікна для вашого дому</h1>
          <p className="mt-5 text-lg text-white/85 max-w-xl">Каталог із цінами, онлайн-калькулятор, безкоштовний замір і монтаж «під ключ» у Києві та області.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/catalog/" className="btn btn-accent">Каталог вікон</Link>
            <Link href="/calc/" className="btn btn-ghost-light">Калькулятор вартості</Link>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/80">
            {["Безкоштовний замір", "Офіційний партнер заводу", "Монтаж під ключ"].map((t) => (
              <li key={t} className="flex items-center gap-2"><Icon name="check" size={16} className="text-lime" />{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <p className="eyebrow">Переваги</p>
          <h2 className="h2 mt-2 max-w-2xl">Чому обирають наші вікна</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-2xl bg-soft p-6">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-brand text-white"><Icon name={b.icon} size={24} /></span>
                <h3 className="mt-4 font-bold text-navy text-lg">{b.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Каталог</p>
              <h2 className="h2 mt-2">Профільні системи</h2>
            </div>
            <Link href="/catalog/" className="btn btn-outline">Усі вікна з цінами</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PVC_PROFILES.map((p) => <ProfileCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <p className="eyebrow">Як ми працюємо</p>
          <h2 className="h2 mt-2">Від заявки до готових вікон</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-4">
            {STEPS.map((s) => (
              <li key={s.n} className="relative rounded-2xl border border-line p-6">
                <span className="text-5xl font-bold text-brand/15 absolute right-4 top-2">{s.n}</span>
                <h3 className="font-bold text-navy text-lg pr-8">{s.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container-x grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="eyebrow !text-lime">Про компанію</p>
            <h2 className="h2 !text-white mt-2">ВІТРАЖ — офіційний партнер заводу {SITE.factory} в Україні</h2>
            <p className="mt-4 text-white/80 leading-relaxed">Ми працюємо напряму із заводом-виробником, тому пропонуємо заводську якість конструкцій і зрозумілі ціни. Допоможемо підібрати вікно під ваш бюджет — від економ-варіантів до енергоефективних систем.</p>
            <Link href="/about/" className="btn btn-ghost-light mt-6">Дізнатись більше</Link>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image src="/img/photo/window-2.webp" alt="Вікно в інтер'єрі" width={744} height={526} className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <p className="eyebrow">Незабаром</p>
          <h2 className="h2 mt-2">Скоро в нашому каталозі</h2>
          <p className="mt-3 text-muted max-w-xl">Ми розширюємо асортимент. Вже зараз можна дізнатись про наявність і ціни за телефоном.</p>
          <ul className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-5">
            {COMING_SOON.map((c) => (
              <li key={c.title} className="rounded-2xl border border-dashed border-line p-5 text-center">
                <span className="mx-auto grid place-items-center w-12 h-12 rounded-full bg-soft text-brand"><Icon name={c.icon} size={22} /></span>
                <p className="mt-3 font-semibold text-navy text-sm">{c.title}</p>
                <p className="text-xs text-muted mt-1">скоро</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-soft" id="order">
        <div className="container-x grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="eyebrow">Консультація</p>
            <h2 className="h2 mt-2">Залишіть заявку — ми передзвонимо</h2>
            <p className="mt-4 text-muted leading-relaxed">Розрахуємо вартість, підберемо профіль і запишемо на безкоштовний замір. Або зателефонуйте: <a className="font-semibold text-brand" href={SITE.phoneHref}>{SITE.phone}</a>.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-line">
            <OrderForm subject="Заявка на консультацію (головна)" submitLabel="Передзвоніть мені" compact />
          </div>
        </div>
      </section>
    </>
  );
}
