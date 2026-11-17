import { SITE } from "@/lib/site";
import OrderForm from "@/components/OrderForm";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Контакти",
  description: "Контакти ВІТРАЖ: адреса, телефон та форма зворотного зв'язку. Замовте безкоштовний замір вікон у Києві.",
  alternates: { canonical: "/contacts/" },
};

export default function ContactsPage() {
  const rows = [
    ["phone", "Телефон", SITE.phone, SITE.phoneHref, "tint-brand"],
    ["mail", "Пошта", SITE.email, `mailto:${SITE.email}`, "tint-accent"],
    ["pin", "Адреса", SITE.address, null, "tint-lime"],
  ];
  return (
    <>
      <PageHero title="Контакти" lead="Зателефонуйте, напишіть у месенджер або залиште заявку — відповімо найближчим часом." crumbs={[["Контакти"]]} />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start">
          <div className="flex flex-col gap-8">
            <ul className="grid gap-6 sm:grid-cols-2">
              {rows.map(([ic, label, val, href, tint], i) => (
                <Reveal as="li" key={label} delay={i * 70} className="card p-6 flex flex-col gap-4">
                  <span className={`${tint} grid place-items-center w-12 h-12`}><Icon name={ic} size={22} /></span>
                  <div className="flex flex-col gap-1">
                    <p className="small !text-text-3">{label}</p>
                    {href ? <a href={href} className="font-semibold hover:text-brand transition-colors">{val}</a> : <p className="font-semibold">{val}</p>}
                  </div>
                </Reveal>
              ))}
              <Reveal as="li" delay={210} className="card p-6 flex flex-col gap-4">
                <span className="tint-soft grid place-items-center w-12 h-12"><Icon name="chat" size={22} /></span>
                <div className="flex flex-col gap-3">
                  <p className="small !text-text-3">Месенджери</p>
                  <div className="flex flex-wrap gap-2">
                    <a className="btn btn-outline btn-sm" href={SITE.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
                    <a className="btn btn-outline btn-sm" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    <a className="btn btn-outline btn-sm" href={SITE.viber}>Viber</a>
                  </div>
                </div>
              </Reveal>
            </ul>
            <Reveal className="border border-line overflow-hidden">
              <iframe
                title="Карта: ВІТРАЖ, Київ"
                className="w-full h-80 block"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=%D0%9A%D0%B8%D1%97%D0%B2,%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D0%BA%D0%B0%20%D0%93%D0%BB%D1%83%D1%88%D0%BA%D0%BE%D0%B2%D0%B0,%2030&output=embed"
              />
            </Reveal>
          </div>
          <Reveal delay={100} className="border border-line bg-white p-8 flex flex-col gap-6 shadow-[0_24px_48px_-20px_rgba(25,25,25,.2)] lg:sticky lg:top-28">
            <div className="flex flex-col gap-1">
              <h2 className="h3">Напишіть нам</h2>
              <p className="small">Передзвонимо протягом робочого дня.</p>
            </div>
            <OrderForm subject="Повідомлення зі сторінки «Контакти»" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
