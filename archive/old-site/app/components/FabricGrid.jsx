"use client"
import { useState } from "react";

const FabricGrid = ({ products }) => {
  // Видаляємо дублі по Name + Color
  const uniqueProducts = Array.from(
    new Map((products || []).map(p => [`${p.Name}-${p.Color}`, p])).values()
  );

  // Скільки показувати спочатку
  const [visibleCount, setVisibleCount] = useState(30);

  const showMore = () => {
    setVisibleCount((prev) => prev + 28); // показуємо ще 30
  };

  return (
    <div className="p-6">
      <h2 className="text-[50px] mb-4 text-center">Варіанти кольорів</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {uniqueProducts.slice(0, visibleCount).map((product, index) => (
          <div
            key={index}
            className="flex flex-col w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] 
            lg:w-[calc(14%-1.5rem)] rounded-xl p-2 bg-white"
          >
            <div className="relative w-full h-[175px] flex items-center justify-center bg-gray-50">
              {product.FotoLocal ? (
                <img
                  src={`${product.FotoLocal}`}
                  alt={product.Name}
                  className="object-contain h-full w-full"
                />
              ) : (
                <span className="text-gray-400">No image</span>
              )}
            </div>

            <h3 className="mt-2 text-lg font-semibold">{product.Name}</h3>
            <p className="text-sm text-gray-600">
              {product.Color} {product.Color2 ? ` / ${product.Color2}` : ""}
            </p>
            <p className="text-sm text-gray-600">{product.Type}</p>
          </div>
        ))}
      </div>

      {/* Кнопка Показати більше */}
      {visibleCount < uniqueProducts.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={showMore}
            className="px-6 py-4 bg-[#D8F422] rounded-sm uppercase font-semibold flex   justify-between hover:bg-[#0f0f0f] hover:text-white"
          >
            Показати більше
          </button>
        </div>
      )}s
    </div>
  );
};

export default FabricGrid;
