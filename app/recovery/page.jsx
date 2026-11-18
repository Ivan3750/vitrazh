import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import OrderForm from "@/components/OrderForm";
import Icon from "@/components/Icon";

export const metadata = {
  title: "єВідновлення — державна підтримка пошкодженого житла",
  description: "Допомагаємо з програмою єВідновлення: консультація, замір, підбір вікон і дверей, офіційні документи для Дії, виготовлення та монтаж під ключ.",
  alternates: { canonical: "/recovery/" },
};

const HELP = [
  { icon: "chat", title: "Консультація", text: "Пояснюємо умови єВідновлення та супроводжуємо на кожному етапі." },
  { icon: "ruler", title: "Точне вимірювання", text: "Підбираємо вікна та двері відповідно до технічних вимог." },
  { icon: "badge", title: "Офіційні документи", text: "Готуємо договір та повний пакет документів, які приймає платформа Дія." },
  { icon: "truck", title: "Повний сервіс", text: "Виготовлення, доставка та монтаж — усе під ключ." },
  { icon: "insta", title: "Фото-звіт", text: "Робимо фото до і після для звітування в єВідновленні." },
  { icon: "handshake", title: "Спокій та впевненість", text: "Прозора співпраця, якісні матеріали та жодних прихованих витрат." },
];
const STEPS = [
  ["Заявка та консультація", "Безкоштовний виїзд на замір і прорахунок вартості. Індивідуальні поради щодо найкращих рішень."],
  ["Підтвердження та договір", "Узгоджуємо замовлення, фіксуємо деталі та строки. Повторний замір перед підписанням договору."],
  ["Виготовлення та монтаж", "Вироби виготовляються на заводі. Монтаж виконується сертифікованими спеціалістами."],
  ["Гарантія та сервіс", "Гарантія на продукцію та післямонтажне обслуговування."],
];

export default function RecoveryPage() {
  return (
    <>
      <PageHero title="єВідновлення" lead="Державна програма підтримки українців, чиї домівки були пошкоджені внаслідок війни. Допоможемо з вікнами та дверима від документів до монтажу." crumbs={[["єВідновлення"]]} />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <Reveal className="flex flex-col gap-6">
            <span className="eyebrow">Про програму</span>
            <h2 className="h2">Що таке єВідновлення?</h2>
            <p className="lead">єВідновлення — це державна програма підтримки українців, чиї домівки були пошкоджені або зруйновані внаслідок повномасштабної війни. Програма реалізується через застосунок Дія та передбачає як фінансову допомогу, так і можливість отримати будівельні послуги напряму від підрядників.</p>
          </Reveal>
          <Reveal variant="right" className="relative aspect-[4/3] overflow-hidden zoom-img">
            <Image src="/img/decor/recovery.webp" alt="" fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Допомога" title="Як ми можемо допомогти" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HELP.map((h, i) => (
              <Reveal key={h.title} delay={(i % 3) * 80} className="card p-7 flex flex-col gap-4">
                <span className="grid place-items-center w-12 h-12 text-accent-fg"><Icon name={h.icon} size={22} /></span>
                <h3 className="h3">{h.title}</h3><p className="small">{h.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr] items-start">
          <div>
            <SectionHead eyebrow="Послідовність" title="Як це відбувається" />
            <ol className="flex flex-col border-l border-line-2">
              {STEPS.map(([t, d], i) => (
                <Reveal as="li" key={t} delay={i * 90} className="relative pl-8 pb-10 last:pb-0">
                  <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 bg-accent" />
                  <p className="small !text-text-3">Крок {i + 1}</p><h3 className="h3 mt-1">{t}</h3><p className="small mt-2 max-w-lg">{d}</p>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal variant="right" className="bg-surface p-8 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="flex flex-col gap-1"><h2 className="h3">Отримати консультацію</h2><p className="small">Залиште номер — підкажемо, з чого почати.</p></div>
            <OrderForm subject="Консультація: єВідновлення" compact submitLabel="Передзвоніть мені" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
