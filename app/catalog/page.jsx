import CatalogClient from "@/components/CatalogClient";
import PageHero from "@/components/PageHero";
import ProfileCard from "@/components/ProfileCard";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { ALU_PROFILES, PVC_PROFILES } from "@/lib/catalog";
import { PROFILE_PRICE_M2 } from "@/lib/pricing";

const ON_REQUEST = PVC_PROFILES.filter((p) => !(p.slug in PROFILE_PRICE_M2));

export const metadata = {
  title: "Купити металопластикові вікна в Києві — каталог із цінами",
  description: "Каталог металопластикових вікон: одно-, дво- та тристулкові конструкції на різних профільних системах. Фільтри, ціни, кошик і замовлення онлайн.",
  alternates: { canonical: "/catalog/" },
};

export default function CatalogPage() {
  return (
    <>
      <PageHero title="Металопластикові вікна" lead="Оберіть готову конфігурацію та додайте в кошик або змініть розміри в калькуляторі. Ціни орієнтовні — точну вартість розрахуємо після безкоштовного заміру." crumbs={[["Каталог"]]} />
      <section className="py-10 md:py-14">
        <div className="container-x"><CatalogClient /></div>
      </section>
      {ON_REQUEST.length > 0 && (
        <section className="section">
          <div className="container-x">
            <SectionHead eyebrow="ПВХ" title="Системи під замовлення" lead="Ці системи виготовляємо на замовлення — вартість розрахуємо після заявки." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ON_REQUEST.map((p, i) => <Reveal key={p.slug} delay={i * 70}><ProfileCard p={p} i={i} /></Reveal>)}
            </div>
          </div>
        </section>
      )}
      <section className="section section-soft">
        <div className="container-x">
          <SectionHead eyebrow="Алюміній" title="Алюмінієві системи" lead="Віконно-дверні та фасадні системи для великих конструкцій. Вартість розраховується індивідуально — залиште заявку на сторінці системи." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ALU_PROFILES.map((p, i) => <Reveal key={p.slug} delay={i * 70}><ProfileCard p={p} i={i} /></Reveal>)}
          </div>
        </div>
      </section>
    </>
  );
}
