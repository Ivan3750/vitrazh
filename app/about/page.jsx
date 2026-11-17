import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Про компанію",
  description: "ВІТРАЖ — офіційний партнер заводу-виробника металопластикових вікон в Україні. Продаж, замір і монтаж вікон у Києві та області.",
  alternates: { canonical: "/about/" },
};

const FACTS = [
  { icon: "handshake", title: "Офіційний партнер", text: `Працюємо напряму із заводом ${SITE.factory}: оригінальні профільні системи, заводська якість конструкцій.` },
  { icon: "factory", title: "Власне виробництво заводу", text: "Повний цикл: профіль, склопакети, фурнітура. Сучасне обладнання та зварювання «нульового» шва." },
  { icon: "ruler", title: "Замір і монтаж", text: "Безкоштовний виїзд замірника, виготовлення за вашими розмірами, професійний монтаж." },
  { icon: "award", title: "Сервіс", text: "Супровід після встановлення: налаштування фурнітури, заміна комплектуючих, консультації." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="Про компанію ВІТРАЖ" crumbs={[["Про компанію"]]} />

      <section className="section">
        <div className="container-x grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-4 text-muted leading-relaxed text-[17px]">
            <p className="text-ink text-xl font-semibold">Компанія ВІТРАЖ — офіційний партнер заводу {SITE.factory} в Україні.</p>
            <p>Ми продаємо та встановлюємо металопластикові вікна для квартир, будинків і комерційних приміщень у Києві та області. Допомагаємо обрати профільну систему, склопакет і фурнітуру під ваш бюджет та вимоги до тепла, тиші й безпеки.</p>
            <p>Виробництво конструкцій здійснюється на заводі — з використанням європейських (Aluplast) та українських (Viknaland) профільних систем. Це дає змогу пропонувати рішення для будь-якого бюджету без втрати якості сервісу.</p>
            <p>Ми супроводжуємо замовлення на кожному етапі: від консультації та заміру до доставки, монтажу й сервісу.</p>
          </div>
          <Reveal className="relative"><div className="absolute -left-4 -bottom-4 w-full h-full bg-lime" aria-hidden="true" /><Image src="/img/photo/dark-grey.webp" alt="Сучасні вікна" width={894} height={596} className="relative w-full h-auto" /></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal><p className="eyebrow">Наші роботи</p><h2 className="h2 mt-3">Реалізовані об&apos;єкти</h2></Reveal>
          <div className="mt-8 grid gap-3 grid-cols-2 md:grid-cols-4">
            {[3, 5, 8, 6].map((n, i) => (
              <Reveal key={n} delay={i * 80} className="zoom-img relative aspect-[4/3] overflow-hidden">
                <Image src={`/img/works/${n}.webp`} alt="Наша робота — встановлені вікна" fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x">
          <h2 className="h2">Наші переваги</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FACTS.map((f) => (
              <Reveal key={f.title} className="card bg-white p-6">
                <span className="grid place-items-center w-12 h-12 bg-brand text-white"><Icon name={f.icon} size={24} /></span>
                <h3 className="mt-4 font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{f.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/catalog/" className="btn btn-accent">Перейти до каталогу</Link>
            <Link href="/contacts/" className="btn btn-outline">Зв&apos;язатися з нами</Link>
          </div>
        </div>
      </section>
    </>
  );
}
