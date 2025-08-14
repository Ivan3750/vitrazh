import Image from 'next/image';
/*             meshOptions={[{ src: '/images/mesh.png', label: 'PLISSE' }]}
 */
export default function PlisseScreens({
  profileColors = [],
  furnitureColors = [],
  meshOptions = [],
  products = [],
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-[#f8f7f0]">
      {products.map((product, idx) => (
        <div
          key={idx}
          className=" p-6"
        >
          {product.id && (
            <h2 className="text-3xl md:text-4xl text-center text-gray-800 mb-6">
              {product.id}
            </h2>
          )}

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {product.img && (
              <img
                src={product.img.src}
                alt={product.id || 'product image'}
                width={500}
                height={500}
                className="rounded-xl w-full object-cover"
              />
            )}

            <div>
              {profileColors.length > 0 && (
                <>
                  <h3 className="text-xl font-medium text-gray-700 mb-3">
                    Доступні кольори профілів:
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-6">
                    {profileColors.map((color, i) => (
                      <div key={i} className="text-center w-24">
                        <img
                          src={color.src}
                          alt={color.label}
                          width={100}
                          height={100}
                          className="rounded-md mx-auto"
                        />
                        <p className="text-sm mt-1 text-gray-600">{color.label}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {(furnitureColors.length > 0 || meshOptions.length > 0) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {furnitureColors.length > 0 && (
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-2">Фурнітура:</h4>
                      <div className="flex flex-wrap justify-start gap-4">
                        {furnitureColors.map((item, i) => (
                          <div key={i} className="text-center w-24">
                            <img
                              src={item.src}
                              alt={item.label}
                              width={100}
                              height={100}
                              className="mx-auto rounded-md"
                            />
                            <p className="text-xs mt-1 text-gray-600">{item.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {meshOptions.length > 0 && (
                    <div>
                      <h4 className="text-lg font-medium text-gray-700 mb-2">Полотно:</h4>
                      <div className="flex flex-wrap justify-start gap-4">
                        {meshOptions.map((item, i) => (
                          <div key={i} className="text-center w-24">
                            <img
                              src={item.src}
                              alt={item.label}
                              width={100}
                              height={100}
                              className="mx-auto rounded-md"
                            />
                            <p className="text-xs mt-1 text-gray-600">{item.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

     
    </div>
  );
}
