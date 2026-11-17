import CatalogClient from "@/components/CatalogClient";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Купити металопластикові вікна в Києві — каталог із цінами",
  description: "Каталог металопластикових вікон: одно-, дво- та тристулкові конструкції на різних профільних системах. Фільтри, ціни, кошик і замовлення онлайн.",
  alternates: { canonical: "/catalog/" },
};

export default function CatalogPage() {
  return (
    <>
      <PageHero title="Металопластикові вікна" lead="Оберіть готову конфігурацію та додайте в кошик або змініть розміри в калькуляторі. Ціни орієнтовні — точну вартість розрахуємо після безкоштовного заміру." crumbs={[["Каталог"]]} />
      <section className="py-10 md:py-14 bg-soft">
        <div className="container-x"><CatalogClient /></div>
      </section>
    </>
  );
}
