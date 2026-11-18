import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

export const metadata = {
  title: "Про компанію",
  description: "ВІТРАЖ — офіційний партнер заводу-виробника металопластикових вікон в Україні. Продаж, замір і монтаж вікон у Києві та області.",
  alternates: { canonical: "/about/" },
};

const FACTS = [
  { icon: "handshake", tint: "panel", title: "Офіційний партнер", text: `Працюємо напряму із заводом ${SITE.factory}: оригінальні профільні системи та заводська якість конструкцій.` },
  { icon: "factory", tint: "panel", title: "Повний цикл виробництва", text: "Завод самостійно виробляє конструкції з профілю та склопакети. Сучасне обладнання та зварювання «нульового» шва." },
  { icon: "ruler", tint: "panel", title: "Замір і монтаж", text: "Безкоштовний виїзд замірника, виготовлення за вашими розмірами, професійний монтаж." },
  { icon: "award", tint: "panel", title: "Сервіс", text: "Супровід після встановлення: налаштування фурнітури, заміна комплектуючих, консультації." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="Про компанію ВІТРАЖ" lead={`Офіційний партнер заводу ${SITE.factory} в Україні.`} crumbs={[["Про компанію"]]} />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <Reveal className="flex flex-col gap-6">
            <span className="eyebrow">Хто ми</span>
            <h2 className="h2">Вікна, які ми знаємо зсередини</h2>
            <div className="flex flex-col gap-4 lead">
              <p>Компанія ВІТРАЖ — офіційний партнер заводу {SITE.factory} в Україні. Ми продаємо та встановлюємо металопластикові вікна для квартир, будинків і комерційних приміщень у Києві та області.</p>
              <p>Допомагаємо обрати профільну систему, склопакет і фурнітуру під ваш бюджет та вимоги до тепла, тиші й безпеки. Виробництво конструкцій здійснюється на заводі з використанням європейських (Aluplast) та українських (Viknaland) профільних систем.</p>
              <p>Ми супроводжуємо замовлення на кожному етапі: від консультації та заміру до доставки, монтажу й сервісу.</p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/catalog/" className="btn btn-primary">Перейти до каталогу <Icon name="arrow" size={18} /></Link>
              <Link href="/contacts/" className="btn btn-outline">Зв&apos;язатися з нами</Link>
            </div>
          </Reveal>
          <Reveal delay={100} className="relative aspect-[4/3] bg-soft overflow-hidden zoom-img">
            <Image src="/img/photo/dark-grey.webp" alt="Сучасні вікна в інтер'єрі" fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Переваги" title="Чому з нами зручно" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FACTS.map((f, i) => (
              <Reveal key={f.title} delay={i * 70} className="card p-6 flex flex-col gap-4">
                <span className={`${f.tint} grid place-items-center w-12 h-12`}><Icon name={f.icon} size={24} /></span>
                <h3 className="h3">{f.title}</h3>
                <p className="small">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Наші роботи" title="Реалізовані об'єкти" />
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {[3, 5, 8, 6].map((n, i) => (
              <Reveal key={n} delay={i * 70} className="zoom-img relative aspect-[4/3] bg-soft overflow-hidden">
                <Image src={`/img/works/${n}.webp`} alt="Наша робота — встановлені вікна" fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
