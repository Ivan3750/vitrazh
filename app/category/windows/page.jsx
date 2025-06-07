import ProductList from "@/app/components/ProductList";
import b from "@/app/assets/bg-wds-6s.jpg";
import wds5s from "@/app/assets/images/products/windows/wds-5s-t.png";
import wds6s from "@/app/assets/images/products/windows/wds-6s-t.png";
import wds76ad from "@/app/assets/images/products/windows/wds-76MD-t.png";
import wds76md from "@/app/assets/images/products/windows/wds-76AD-t.png";
import rehauE60 from "@/app/assets/images/products/windows/REHAU_Euro-Design_60-t.png";
import rehauE70 from "@/app/assets/images/products/windows/REHAU_Euro-Design_70-t.png";
import rehauSMD from "@/app/assets/images/products/windows/REHAU_Synego_MD-t.png";


const WindowPage = () => {
  const products = [
  {
    id: 1,
    name: "WDS 5S",
    img: wds5s,
    link:"/category/windows/wds-5s"
  },
  {
    id: 2,
    name: "WDS 6S",
    img: wds6s,
    link:"/category/windows/wds-6s"
  },
  {
    id: 3,
    name: "WDS 76AD",
    img: wds76ad,
    link:"/category/windows/wds-76ad"
  },
  {
    id: 4,
    name: "WDS 76MD",
    img: wds76md,
    link:"/category/windows/wds-76md"
  },
  {
    id: 5,
    name: "REHAU Euro-Design 60",
    img: rehauE60,
    link:"/category/windows/rehau-euro-design-60"
  },
  {
    id: 6,
    name: "REHAU Euro-Design 70",
    img: rehauE70,
    link:"/category/windows/rehau-euro-design-70"
  },
  {
    id: 7,
    name: "REHAU Synego MD",
    img: rehauSMD,
    link:"/category/windows/rehau-synego"
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
          Металопластикові вікна
        </h1>
      </section>

      <ProductList products={products} />
    </>
  );
};

export default WindowPage;
