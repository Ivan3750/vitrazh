import ProductList from "@/app/components/ProductList";
import b from "@/app/assets/images/products/aluminium/background.jpg";
import a1 from "@/app/assets/images/products/aluminium/a11.jpg";
import a2 from "@/app/assets/images/products/aluminium/a21.jpg";
import a3 from "@/app/assets/images/products/aluminium/a31.jpg";
import a4 from "@/app/assets/images/products/aluminium/a41.jpg";
import a5 from "@/app/assets/images/products/aluminium/a51.jpg";



const WindowPage = () => {
  const products = [
  {
    id: 1,
    name: "міжкімнатні перегородки",
    img: a1,
    link:"/"
  },
  {
    id: 2,
    name: "Розсувні системи без термомосту",
    img: a2,
    link:"/"
  },
  {
    id: 3,
    name: "Розсувні системи з термомостом",
    img: a3,
    link:"/"
  },
  {
    id: 4,
    name: "Стійко-ригельні скління фасадів",
    img: a4,
    link:"/"
  },
  {
    id: 5,
    name: "Вхідна группа",
    img: a5,
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
          Алюмінієві системи
        </h1>
      </section>

      <ProductList products={products} />
    </>
  );
};

export default WindowPage;
