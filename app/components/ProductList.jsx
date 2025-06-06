import Product from "./Product";




const ProductList = ({products}) => {
  return (
    <div className="w-full">

    <div className="flex flex-wrap justify-start gap-5 py-10 bg-white max-w-[90%] my-0 m-auto">
      {products.map((product) => (
          <Product key={product.id} img={product.img} name={product.name} link={product.link} />
        ))}
    </div>
        </div>
  );
};

export default ProductList;
