import PageHero from "@/app/components/site/PageHero";
import ProductList from "@/app/components/ProductList";
import b from "@/app/assets/images-webp/hero/alm-f.webp";
import a1 from "@/app/assets/images-webp/products/aluminium/plastic.webp";
import a2 from "@/app/assets/images-webp/products/aluminium/alm.webp";
import a3 from "@/app/assets/images-webp/products/aluminium/glass.webp";



export const metadata = {
  alternates: { canonical: "/category/aluminium-systems/" },
  title: "Офісні перегородки - сучасність і надійність | Вітраж",
  description: "Високоякісні офісні перегородки для фасадів, вікон і дверей. Легкість, міцність та естетика для будь-яких архітектурних рішень.",
  keywords: "офісні перегородки, алюмінієві фасади, алюмінієві вікна, алюмінієві двері, міцні алюмінієві конструкції",
  openGraph: {
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    title: "Офісні перегородки - сучасність і надійність",
    description: "Обирайте офісні перегородки для вікон, дверей та фасадів. Висока якість, довговічність та стильний дизайн.",
    url: "https://vitrazh.com.ua/category/aluminium-systems",
  },
  twitter: {
    card: "summary_large_image",
    title: "Офісні перегородки - сучасність і надійність",
    description: "Надійні офісні перегородки для будь-яких будівельних потреб за вигідною ціною.",
  },
};


const WindowPage = () => {
  const products = [
  {
  id: 1,
  name: "Пластикові перегородки",
  img: a1,
  link: "/category/aluminium-systems/partitions-plastic",
},
{
  id: 2,
  name: "Алюмінієві перегородки",
  img: a2,
  link: "/category/aluminium-systems/partitions-aluminium",
},
{
  id: 3,
  name: "Скляні перегородки",
  img: a3,
  link: "/category/aluminium-systems/partitions-glass",
},

/*   {
    id: 22,
    name: "Розсувні системи без термомосту",
    img: a2,
    link:"/category/aluminium-systems/sliding-cold"
  },
  {
    id: 32,
    name: "Розсувні системи з термомостом",
    img: a3,
    link:"/category/aluminium-systems/sliding-thermal"
  },
  {
    id: 42,
    name: "Стійко-ригельні скління фасадів",
    img: a4,
    link:"/category/aluminium-systems/facade-glazing"
  },
  {
    id: 52,
    name: "Вхідна группа",
    img: a5,
    link:"/category/aluminium-systems/entrance-groups"
  } */
];
  return (
    <>
      <PageHero image={b}>Офісні перегородки</PageHero>

      <ProductList products={products} gridN={3} />
    </>
  );
};

export default WindowPage;
