import ProductList from "@/app/components/ProductList";
import b from "@/app/assets/bg-wds-6s.jpg";

const WindowPage = () => {
  return (
    <>
      <section className="relative h-[600px] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${b.src})`,
          }}
        />
        <h1 className="relative text-white text-4xl font-bold z-10 ">
          Ворота і ролети
        </h1>
      </section>

      <ProductList />
    </>
  );
};

export default WindowPage;
