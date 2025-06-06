import Product from "./Product";




const ProductList = ({products}) => {
  return (
<div className="w-full bg-white py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center sm:justify-items-normal md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6 md:px-10 max-w-[1400px] mx-auto">
    {products.length > 0 ? (
      products.map((product) => (
        <Product
          key={product.id}
          img={product.img}
          name={product.name}
          link={product.link}
        />
      ))
    ) : (
      <p className="col-span-full text-center text-gray-500">
        Наразі товарів немає. Очікуйте оновлення!
      </p>
    )}
  </div>
</div>


  );
};

export default ProductList;
