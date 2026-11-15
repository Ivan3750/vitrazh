import Product from "./Product";

// Явні класи, бо Tailwind не бачить динамічно зібраних назв (lg:grid-cols-${n})
const cols = { 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" };

const ProductList = ({ products, gridN = 3 }) => {
  return (
    <div className="w-full bg-white py-10">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${cols[gridN] || cols[3]} gap-5 px-4 sm:px-6 max-w-[1320px] mx-auto`}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <Product key={product.id} img={product.img} name={product.name} link={product.link} />
          ))
        ) : (
          <p className="col-span-full text-center text-ink/50">
            Наразі товарів немає. Очікуйте оновлення!
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
