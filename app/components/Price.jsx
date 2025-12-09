"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import windowType1 from "@/app/assets/images/products/windows/windowType1.png";
import windowType2 from "@/app/assets/images/products/windows/windowType2.png";
import windowType3 from "@/app/assets/images/products/windows/windowType3.png";

const imagesMap = {
  windowType1,
  windowType2,
  windowType3,
};

const Price = () => {
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    fetch("/data/price.json")
      .then((res) => res.json())
      .then((data) => setPriceData(data))
      .catch(() => {});
  }, []);

  if (priceData.length === 0) {
    return <p className="text-center py-10">Завантаження цінових варіантів...</p>;
  }

  return (
    <section className="px-6 py-12 max-w-[1200px] mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Цінові варіанти</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {priceData.map(({ id, name, size, profile, glass, hardware, price, imgKey, link }) => {
          const img = imagesMap[imgKey];

          return (
            <Link
              href={link}
              key={id}
              className="cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
            >
              <div
                className="bg-[#F8F7F0] rounded-md p-6 flex flex-col items-center"
                style={{ flex: "1 1 280px", maxWidth: "350px" }}
              >
                <div className="w-full max-w-[300px]">
                  <div className="bg-[#F8F7F0] aspect-square flex items-center justify-center overflow-hidden rounded">
                    <img
                      src={img.src}
                      alt={name}
                      width={320}
                      height={320}
                      className="w-full h-full object-cover min-w-[300px]"
                    />
                  </div>

                  <h2 className="text-center text-[#0F0F0F] text-[20px] mt-4">
                    {name}
                  </h2>
                </div>

                <div className="mt-4 w-full">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Розмір:</span> {size}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Профіль:</span> {profile}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Склопакет:</span> {glass}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Фурнітура:</span> {hardware}
                  </p>
                </div>

                <p className="mt-4 text-3xl font-extrabold text-[#bed62f]">
                  {price}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Price;
