import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import Icon from "@/components/Icon";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Доставка й оплата",
  description: "Як отримати замовлення: самовивіз, доставка по Києву та області, оплата при отриманні чи за рахунком, передоплата для виробів на замовлення, монтаж.",
  alternates: { canonical: "/delivery/" },
};

const BLOCKS = [
  { icon: "pin", title: "Самовивіз", text: `Для товарів у наявності: ${SITE.address}.` },
  { icon: "truck", title: "Доставка по Києву", text: "Доставимо вікна та супутні товари за узгодженою датою. Вартість залежить від об'єму та адреси — уточнить менеджер." },
  { icon: "truck", title: "По області та Україні", text: "Відправляємо Новою поштою або власним транспортом. Вартість і терміни уточнюються під час підтвердження замовлення." },
  { icon: "badge", title: "Оплата", text: "Готівкою або карткою при отриманні, а також безготівковий розрахунок за рахунком для організацій." },
  { icon: "award", title: "Передоплата за вікна", text: "Передоплата становить 80% від суми замовлення. Решту 20% ви сплачуєте в день доставки та підписання акту прийому-передачі." },
  { icon: "wrench", title: "Монтаж", text: "Монтаж виконують досвідчені майстри, взимку — з професійною зимовою піною-герметиком (до −12 °C). Вивезення сміття — додаткова послуга." },
];

export default function DeliveryPage() {
  return (
    <>
      <PageHero title="Доставка й оплата" lead="Прозорі умови: від оформлення замовлення до монтажу. Усі деталі менеджер узгодить із вами по телефону." crumbs={[["Доставка й оплата"]]} />
      <section className="section">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BLOCKS.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 80} className="card p-7 flex flex-col gap-4">
                <span className="grid place-items-center w-12 h-12 text-accent-fg"><Icon name={b.icon} size={22} /></span>
                <h3 className="h3">{b.title}</h3><p className="small">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container-x flex flex-col gap-8 items-start">
          <SectionHead eyebrow="Готові замовити?" title="Додайте вікна в кошик — решту ми узгодимо" />
          <div className="flex flex-wrap gap-3"><Link href="/catalog/" className="btn btn-primary">Каталог вікон <Icon name="arrow" size={18} /></Link><Link href="/faq/" className="btn btn-outline">Часті запитання</Link></div>
        </div>
      </section>
    </>
  );
}
