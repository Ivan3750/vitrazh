import Product from "./Product";
import img1 from "@/app/assets/1.jpg";
import img2 from "@/app/assets/2.png";
import img3 from "@/app/assets/3.png";

const products = [
  {
    id: 1,
    name: "Одностулкове вікно",
    img: img1,
  },
  {
    id: 2,
    name: "Двостулкове вікно",
    img: img2,
  },
  {
    id: 3,
    name: "Вікно з фрамугою",
    img: img3,
  },
  {
    id: 3,
    name: "Вікно з фрамугою",
    img: img3,
  },
  {
    id: 3,
    name: "Вікно з фрамугою",
    img: img3,
  },
];

const ProductList = () => {
  return (
    <div className="w-full">

    <div className="flex flex-wrap justify-start gap-5 py-10 bg-white max-w-[90%] my-0 m-auto">
      {products.map((product) => (
          <Product key={product.id} img={product.img} name={product.name} />
        ))}
    </div>
        </div>
  );
};

export default ProductList;
