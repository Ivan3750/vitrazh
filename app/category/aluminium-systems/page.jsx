import ProductList from "@/app/components/ProductList";
import b from "@/app/assets/images/products/aluminium/background.jpg";
import a1 from "@/app/assets/images/products/aluminium/a11.jpg";
import a2 from "@/app/assets/images/products/aluminium/a21.jpg";
import a3 from "@/app/assets/images/products/aluminium/a31.jpg";
import a4 from "@/app/assets/images/products/aluminium/a41.jpg";
import a5 from "@/app/assets/images/products/aluminium/a51.jpg";


export const metadata = {
  title: "Офісні перегородки — сучасність і надійність | Вітраж",
  description: "Високоякісні офісні перегородки для фасадів, вікон і дверей. Легкість, міцність та естетика для будь-яких архітектурних рішень.",
  keywords: "офісні перегородки, алюмінієві фасади, алюмінієві вікна, алюмінієві двері, міцні алюмінієві конструкції",
  openGraph: {
    title: "Офісні перегородки — сучасність і надійність",
    description: "Обирайте офісні перегородки для вікон, дверей та фасадів. Висока якість, довговічність та стильний дизайн.",
    url: "https://vitrazh.com.ua/category/aluminium-systems",
  },
  twitter: {
    card: "summary_large_image",
    title: "Офісні перегородки — сучасність і надійність",
    description: "Надійні офісні перегородки для будь-яких будівельних потреб за вигідною ціною.",
  },
};


const WindowPage = () => {
  const products = [
/*   {
    id: 1,
    name: "Міжкімнатні перегородки",
    img: a1,
    link:"/category/aluminium-systems/office-partitions"
  }, */
  {
  id: 1,
  name: "Пластикові перегородки",
  img: a2,
  link: "/category/aluminium-systems/partitions-plastic",
},
{
  id: 2,
  name: "Алюмінієві перегородки",
  img: a3,
  link: "/category/aluminium-systems/partitions-aluminium",
},
{
  id: 3,
  name: "Скляні перегородки",
  img: a4,
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
      <section className="relative h-[600px] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${b.src})`,
          }}
        />
        <h1 className="relative text-white text-4xl font-bold z-10">
          Офісні перегородки
        </h1>
      </section>

      <ProductList products={products} gridN={3} />
    </>
  );
};

export default WindowPage;
