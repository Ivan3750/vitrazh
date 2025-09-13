import ProductList from "@/app/components/ProductList";
import b from "@/app/assets/images/products/mosquito/background.jpg";
import g1 from "@/app/assets/images/products/gates/gates-sectional.png";
import g2 from "@/app/assets/images/products/gates/protective-rolls.jpg";
import g3 from "@/app/assets/images/products/gates/roll-gates.jpg";
import Head from "next/head"; // Для класичного підходу

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
      <Head>
        <title>Ворота та ролети | Купити гаражні та ролетні ворота в Україні</title>
        <meta name="description" content="Продаж гаражних воріт, ролетних воріт та захисних ролет на вікна. Якісні ворота від провідних виробників для дому та бізнесу." />
        <meta name="keywords" content="ворота, гаражні ворота, ролетні ворота, захисні ролети, купити ворота, Україна" />
        <meta property="og:title" content="Ворота та ролети | Купити гаражні та ролетні ворота в Україні" />
        <meta property="og:description" content="Продаж гаражних воріт, ролетних воріт та захисних ролет на вікна. Якісні ворота від провідних виробників для дому та бізнесу." />
        <meta property="og:image" content={b.src} />
        <meta property="og:type" content="website" />
      </Head>

      <section className="relative h-[600px] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${b.src})`,
          }}
        />
        <h1 className="relative text-white text-4xl font-bold z-10">
          Ворота та ролети
        </h1>
      </section>

      <ProductList products={products} gridN={3}/>
    </>
  );
};

export default WindowPage;
