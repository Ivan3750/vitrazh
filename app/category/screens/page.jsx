import ProductList from "@/app/components/ProductList";
import b from "@/app/assets/images/products/mosquito/background.jpg";
import s1 from "@/app/assets/images/products/mosquito/1.jpg";
import s2 from "@/app/assets/images/products/mosquito/2.jpg";
import s3 from "@/app/assets/images/products/mosquito/3.jpg";
import s4 from "@/app/assets/images/products/mosquito/4.jpg";
import s5 from "@/app/assets/images/products/mosquito/5.jpg";
import s6 from "@/app/assets/images/products/mosquito/6.jpg";
 
export const metadata = {
  title: "Москітні сітки — захист та свіжість у вашому домі | Вітраж",
  description: "Якісні москітні сітки для вікон та дверей. Надійний захист від комах та пилу, легкий монтаж і довговічність.",
  keywords: "москітні сітки, сітки на вікна, захист від комах, сітки на двері, москітна сітка купити, антимоскітні сітки",
  openGraph: {
    title: "Москітні сітки — захист та свіжість у вашому домі",
    description: "Обирайте якісні москітні сітки для надійного захисту від комах. Легко, швидко та ефективно.",
    url: "https://vitrazh.com.ua/category/screens",
  },
  twitter: {
    card: "summary_large_image",
    title: "Москітні сітки — захист та свіжість у вашому домі",
    description: "Надійний захист від комах із якісними москітними сітками за вигідною ціною.",
  },
};


const WindowPage = () => {
  const products = [
  {
    id: 1,
    name: "Ролові Антимоскітн сітки",
    img: s1,
    link:"/"
  },
  {
    id: 2,
    name: "Антимоскітні сітки PLISSE",
    img: s2,
    link:"/"
  },
  {
    id: 3,
    name: "Дверні Атимоскитні Сітки",
    img: s3,
    link:"/"
  },
  {
    id: 4,
    name: "Відкатна Антимоскітна сітка",
    img: s4,
    link:"/"
  },
  {
    id: 5,
    name: "Сітка для Алюмінієвих вікон",
    img: s5,
    link:"/"
  },
  {
    id: 6,
    name: "Рамна Антимоскітна сітка",
    img: s6,
    link:"/"
  }
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
          Москітні сітки
        </h1>
      </section>

      <ProductList products={products} />
    </>
  );
};

export default WindowPage;
