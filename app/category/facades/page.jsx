import ProductList from "@/app/components/ProductList";
import b from "@/app/assets/images/products/mosquito/background.jpg";
import f1 from "@/app/assets/images/products/facades/vorne.png";
import f2 from "@/app/assets/images/products/facades/maco.png";
import f3 from "@/app/assets/images/products/facades/siegenia.png";

export const metadata = {
  title: "Фурнітура для вікон — якість та надійність | Вітраж",
  description: "Пропонуємо широкий вибір фурнітури для металопластикових вікон: VORNE, MACO, SIEGENIA та інші. Надійні комплектуючі для комфортного використання ваших вікон.",
  keywords: "фурнітура для вікон, VORNE, MACO, SIEGENIA, комплектуючі для вікон, якісна фурнітура, віконна фурнітура купити",
  openGraph: {
    title: "Фурнітура для вікон — якість та надійність",
    description: "Обирайте якісну фурнітуру VORNE, MACO, SIEGENIA для металопластикових вікон. Надійність і довговічність в кожній деталі.",
    url: "https://vitrazh.com.ua/category/facades",
  },
  twitter: {
    card: "summary_large_image",
    title: "Фурнітура для вікон — якість та надійність",
    description: "Надійна фурнітура для металопластикових вікон за вигідною ціною.",
  },
};


const Facades = () => {
  const products = [
    {
      id: 1,
      name: "Фурнітура для вікон VORNE",
      img: f1,
      link: "/",
    },
    {
      id: 2,
      name: "Фурнітура для вікон MACO",
      img: f2,
      link: "/",
    },
    {
      id: 3,
      name: "Фурнітура для вікон SIEGENIA",
      img: f3,
      link: "/",
    },
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
          Фурнітура для вікон
        </h1>
      </section>

      <ProductList products={products} />
    </>
  );
};

export default Facades;
