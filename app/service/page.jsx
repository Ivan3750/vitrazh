import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import OrderForm from "@/components/OrderForm";
import { SERVICE_PRICES } from "@/lib/service";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Сервіс і ремонт вікон та дверей у Києві — прайс",
  description: "Актуальні ціни на ремонт пластикових вікон і дверей у Києві та області: виїзд майстра, регулювання, заміна ущільнювача, склопакета, ручок, фурнітури.",
  alternates: { canonical: "/service/" },
};

export default function ServicePage() {
  return (
    <>
      <PageHero title="Сервіс і ремонт" lead="Регулювання, ремонт і заміна комплектуючих вікон та дверей у Києві й області. Прозорий прайс, оперативний виїзд майстра." crumbs={[["Сервіс і ремонт"]]} />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_400px] items-start">
          <div className="flex flex-col gap-16 min-w-0">
            {SERVICE_PRICES.map((g) => (
              <Reveal key={g.title} className="flex flex-col gap-6">
                <h2 className="h2 !text-[1.75rem]">{g.title}</h2>
                <ul className="divide-y divide-line bg-surface">
                  {g.rows.map(([name, price]) => (
                    <li key={name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-6 px-5 py-4 hover:bg-surface-2 transition-colors">
                      <span className="text-sm sm:text-base">{name}</span>
                      <span className="accent-text font-bold tabular-nums whitespace-nowrap">{price}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
            <p className="small !text-text-3">* Ціна орієнтовна, без вартості матеріалів. Точну вартість визначає майстер після діагностики.</p>
          </div>
          <Reveal variant="right" className="lg:sticky lg:top-28 bg-surface p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-1"><h2 className="h3">Викликати майстра</h2><p className="small">Залиште номер — зателефонуємо та узгодимо час. Або: <a className="text-accent-fg font-semibold" href={SITE.phoneHref}>{SITE.phone}</a></p></div>
            <OrderForm subject="Виклик майстра (сервіс)" submitLabel="Викликати майстра" compact />
          </Reveal>
        </div>
      </section>
    </>
  );
}
