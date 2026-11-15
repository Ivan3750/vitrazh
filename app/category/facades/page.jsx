import PageHero from "@/app/components/site/PageHero";
import ProductList from "@/app/components/ProductList";
import b from "@/app/assets/images-webp/hero/furnitura.webp";
import f1 from "@/app/assets/images/products/facades/vorne.png";
import f2 from "@/app/assets/images/products/facades/maco.png";
import f3 from "@/app/assets/images/products/facades/siegenia.png";

export const metadata = {
  alternates: { canonical: "/category/facades/" },
  title: "Фурнітура для вікон - якість та надійність | Вітраж",
  description: "Пропонуємо широкий вибір фурнітури для металопластикових вікон: VORNE, MACO, SIEGENIA та інші. Надійні комплектуючі для комфортного використання ваших вікон.",
  keywords: "фурнітура для вікон, VORNE, MACO, SIEGENIA, комплектуючі для вікон, якісна фурнітура, віконна фурнітура купити",
  openGraph: {
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    title: "Фурнітура для вікон - якість та надійність",
    description: "Обирайте якісну фурнітуру VORNE, MACO, SIEGENIA для металопластикових вікон. Надійність і довговічність в кожній деталі.",
    url: "https://vitrazh.com.ua/category/facades",
  },
  twitter: {
    card: "summary_large_image",
    title: "Фурнітура для вікон - якість та надійність",
    description: "Надійна фурнітура для металопластикових вікон за вигідною ціною.",
  },
};


const Facades = () => {
  const products = [
    {
      id: 1,
      name: "Фурнітура для вікон VORNE",
      img: f1,
      link: "/category/facades/vorne",
    },
    {
      id: 2,
      name: "Фурнітура для вікон MACO",
      img: f2,
      link: "/category/facades/maco",
    },
    {
      id: 3,
      name: "Фурнітура для вікон SIEGENIA",
      img: f3,
      link: "/category/facades/siegenia",
    },
  ];
  return (
    <>
      <PageHero image={b}>Фурнітура для вікон</PageHero>

      <ProductList products={products} gridN={3} />
    </>
  );
};

export default Facades;
