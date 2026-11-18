import PageHero from "@/components/PageHero";
import CartView from "@/components/CartView";

export const metadata = { title: "Кошик", robots: { index: false } };

export default function CartPage() {
  return (
    <>
      <PageHero title="Кошик" crumbs={[["Кошик"]]} />
      <section className="py-12 md:py-16 bg-soft min-h-[50vh]">
        <div className="container-x"><CartView /></div>
      </section>
    </>
  );
}
