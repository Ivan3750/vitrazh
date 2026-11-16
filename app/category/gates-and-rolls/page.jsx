import PageHero from "@/app/components/site/PageHero";
import ProductList from "@/app/components/ProductList";
import b from "@/app/assets/images-webp/products/gates/protective-rolls.webp";
import g1 from "@/app/assets/images-webp/products/gates/gates-sectional.webp";
import g2 from "@/app/assets/images-webp/products/gates/protective-rolls.webp";
import g3 from "@/app/assets/images-webp/products/gates/roll-gates.webp";


export const metadata = {
  alternates: { canonical: "/category/gates-and-rolls/" },
  title: "Ворота та ролети | Купити гаражні та ролетні ворота в Україні",
  description: " Продаж гаражних воріт, ролетних воріт та захисних ролет на вікна. Якісні ворота від провідних виробників для дому та бізнесу.",
  keywords: "ворота, гаражні ворота, ролетні ворота, захисні ролети, купити ворота, Україна",
  openGraph: {
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    title: "Ворота та ролети | Купити гаражні та ролетні ворота в Україні",
    description: "родаж гаражних воріт, ролетних воріт та захисних ролет на вікна. ",
    url: "https://vitrazh.com.ua/category/window-blinds",
  },
  twitter: {
    title: "Ворота та ролети | Купити гаражні та ролетні ворота в Україні",
    description: "родаж гаражних воріт, ролетних воріт та захисних ролет на вікна. ",
  },
};


const WindowPage = () => {
  const products = [
    {
      id: 1,
      name: "Гаражні ворота",
      img: g1,
      link:"/category/gates-and-rolls/gates-sectional"
    },
    {
      id: 2,
      name: "Захисні ролети на вікна",
      img: g2,
      link:"/category/gates-and-rolls/protective-rolls"
    },
    {
      id: 3,
      name: "Ролетні ворота",
      img: g3,
      link:"/category/gates-and-rolls/roll-gates"
    },
  ];


  
  return (
    <>
  

      <PageHero image={b}>Ворота та ролети</PageHero>

      <ProductList products={products} gridN={3}/>
    </>
  );
};

export default WindowPage;
