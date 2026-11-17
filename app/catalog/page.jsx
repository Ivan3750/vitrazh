import CatalogClient from "@/components/CatalogClient";

export const metadata = {
  title: "Каталог металопластикових вікон з цінами",
  description: "Купити металопластикові вікна в Києві: одно-, дво- та тристулкові конструкції на різних профільних системах. Фільтри за профілем, склопакетом і кольором, орієнтовні ціни.",
  alternates: { canonical: "/catalog/" },
};

export default function CatalogPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-x py-12 md:py-16">
          <nav className="text-sm text-white/60" aria-label="Хлібні крихти"><a href="/" className="hover:text-white">Головна</a> / Каталог вікон</nav>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold">Металопластикові вікна</h1>
          <p className="mt-3 text-white/80 max-w-2xl">Оберіть готову конфігурацію або змініть розміри в калькуляторі. Ціни вказані орієнтовно — точну вартість розрахуємо після безкоштовного заміру.</p>
        </div>
      </section>
      <section className="py-10 md:py-14">
        <div className="container-x"><CatalogClient /></div>
      </section>
    </>
  );
}
