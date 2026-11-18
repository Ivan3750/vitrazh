import { notFound } from "next/navigation";
import { SHOP_CATEGORIES, getShopCategory, productsIn } from "@/lib/shop";
import ShopGrid from "@/components/ShopGrid";
import PageHero from "@/components/PageHero";
import ShopTabs from "@/components/ShopTabs";

export function generateStaticParams() {
  return SHOP_CATEGORIES.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const c = getShopCategory(category);
  if (!c) return {};
  return { title: `${c.title} — купити в Києві`, description: c.lead, alternates: { canonical: `/shop/${c.id}/` } };
}

export default async function ShopCategoryPage({ params }) {
  const { category } = await params;
  const c = getShopCategory(category);
  if (!c) notFound();
  return (
    <>
      <PageHero title={c.title} lead={c.lead} crumbs={[["Каталог", "/catalog/"], [c.title]]} />
      <section className="py-10 md:py-14">
        <div className="container-x">
          <div className="mb-10"><ShopTabs active={c.id} /></div>
          <ShopGrid products={productsIn(c.id)} />
        </div>
      </section>
    </>
  );
}
