import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import Icon from "@/components/Icon";

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
      <section className="bg-navy text-white">
        <div className="container-x py-12 md:py-16">
          <nav className="text-sm text-white/60" aria-label="Хлібні крихти"><Link href="/" className="hover:text-white">Головна</Link> / Про компанію</nav>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold">Про компанію ВІТРАЖ</h1>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-4 text-muted leading-relaxed text-[17px]">
            <p className="text-ink text-xl font-semibold">Компанія ВІТРАЖ — офіційний партнер заводу {SITE.factory} в Україні.</p>
            <p>Ми продаємо та встановлюємо металопластикові вікна для квартир, будинків і комерційних приміщень у Києві та області. Допомагаємо обрати профільну систему, склопакет і фурнітуру під ваш бюджет та вимоги до тепла, тиші й безпеки.</p>
            <p>Виробництво конструкцій здійснюється на заводі — з використанням європейських (Aluplast) та українських (Viknaland) профільних систем. Це дає змогу пропонувати рішення для будь-якого бюджету без втрати якості сервісу.</p>
            <p>Ми супроводжуємо замовлення на кожному етапі: від консультації та заміру до доставки, монтажу й сервісу.</p>
          </div>
          <Image src="/img/photo/dark-grey.webp" alt="Сучасні вікна" width={894} height={596} className="rounded-2xl w-full h-auto" />
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x">
          <h2 className="h2">Наші переваги</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FACTS.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white p-6 border border-line">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-brand text-white"><Icon name={f.icon} size={24} /></span>
                <h3 className="mt-4 font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{f.text}</p>
              </div>
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
