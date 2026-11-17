import Link from "next/link";
import { SITE } from "@/lib/site";
import OrderForm from "@/components/OrderForm";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Контакти",
  description: "Контакти ВІТРАЖ: адреса, телефон, графік роботи та форма зворотного зв'язку. Замовте безкоштовний замір вікон у Києві.",
  alternates: { canonical: "/contacts/" },
};

export default function ContactsPage() {
  const rows = [
    ["phone", "Телефон", SITE.phone, SITE.phoneHref],
    ["mail", "Пошта", SITE.email, `mailto:${SITE.email}`],
    ["pin", "Адреса", SITE.address],
  ];
  return (
    <>
      <PageHero title="Контакти" crumbs={[["Контакти"]]} />
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <ul className="space-y-5">
              {rows.map(([ic, label, val, href]) => (
                <li key={label} className="flex gap-4">
                  <span className="grid place-items-center w-11 h-11 bg-soft text-brand shrink-0"><Icon name={ic} size={20} /></span>
                  <div>
                    <p className="text-sm text-muted">{label}</p>
                    {href ? <a href={href} className="font-semibold text-navy hover:text-brand">{val}</a> : <p className="font-semibold text-navy">{val}</p>}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a className="btn btn-outline" href={SITE.telegram} target="_blank" rel="noopener noreferrer">Telegram</a>
              <a className="btn btn-outline" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a className="btn btn-outline" href={SITE.viber}>Viber</a>
            </div>
            <iframe
              title="Карта: ВІТРАЖ, Київ"
              className="mt-8 w-full h-72 border border-line"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=%D0%9A%D0%B8%D1%97%D0%B2,%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D0%BA%D0%B0%20%D0%93%D0%BB%D1%83%D1%88%D0%BA%D0%BE%D0%B2%D0%B0,%2030&output=embed"
            />
          </div>
          <div className="self-start bg-white border-t-4 border-accent p-6 shadow-[8px_8px_0_var(--color-lime)]">
            <h2 className="text-xl font-bold text-navy">Напишіть нам</h2>
            <p className="text-sm text-muted mt-1 mb-4">Передзвонимо протягом робочого дня.</p>
            <OrderForm subject="Повідомлення зі сторінки «Контакти»" />
          </div>
        </div>
      </section>
    </>
  );
}
