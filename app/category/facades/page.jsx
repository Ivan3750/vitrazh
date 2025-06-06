import ProductList from "@/app/components/ProductList";
import b from "@/app/assets/images/products/mosquito/background.jpg";
import f1 from "@/app/assets/images/products/facades/vorne.png";
import f2 from "@/app/assets/images/products/facades/maco.png";
import f3 from "@/app/assets/images/products/facades/siegenia.png";

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
