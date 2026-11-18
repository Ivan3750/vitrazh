import PageHero from "@/components/PageHero";
import CheckoutForm from "@/components/CheckoutForm";

export const metadata = { title: "Оформлення замовлення", robots: { index: false } };

export default function CheckoutPage() {
  return (
    <>
      <PageHero title="Оформлення замовлення" crumbs={[["Кошик", "/cart/"], ["Оформлення"]]} />
      <section className="py-12 md:py-16 bg-soft">
        <div className="container-x"><CheckoutForm /></div>
      </section>
    </>
  );
}
