import Product from "../components/Product";

/* import b from "@/app/assets/hero"
 */

const Calc = () => {
  return (
    <>
      <section className="relative h-[600px] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          /*  style={{
            backgroundImage: `url(${b.src})`,
          }} */
        />
        <h1 className="relative text-white text-4xl font-bold z-10">
          Розрахуйте вартість
        </h1>
      </section>
      <section className="mc">
        <h2 className="text-[40px]">Тип Профілю</h2>
        <div>
            <div className="w-full max-w-[320px] transition-transform duration-300 hover:scale-[1.03]  cursor-pointer">
                  <div className="bg-[#F8F7F0] aspect-[1/1] flex items-center justify-center overflow-hidden rounded">
                    <Image
                      src={img}
                      alt={name}
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-center text-[#0F0F0F] text-[20px] mt-4">{name}</h2>
                </div>
                  <div className="w-full max-w-[320px] transition-transform duration-300 hover:scale-[1.03]  cursor-pointer">
                        <div className="bg-[#F8F7F0] aspect-[1/1] flex items-center justify-center overflow-hidden rounded">
                          <Image
                            src={img}
                            alt={name}
                            width={320}
                            height={320}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h2 className="text-center text-[#0F0F0F] text-[20px] mt-4">{name}</h2>
                      </div>
                        <div className="w-full max-w-[320px] transition-transform duration-300 hover:scale-[1.03]  cursor-pointer">
                              <div className="bg-[#F8F7F0] aspect-[1/1] flex items-center justify-center overflow-hidden rounded">
                                <Image
                                  src={img}
                                  alt={name}
                                  width={320}
                                  height={320}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <h2 className="text-center text-[#0F0F0F] text-[20px] mt-4">{name}</h2>
                            </div>
                              <div className="w-full max-w-[320px] transition-transform duration-300 hover:scale-[1.03]  cursor-pointer">
                                    <div className="bg-[#F8F7F0] aspect-[1/1] flex items-center justify-center overflow-hidden rounded">
                                      <Image
                                        src={img}
                                        alt={name}
                                        width={320}
                                        height={320}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <h2 className="text-center text-[#0F0F0F] text-[20px] mt-4">{name}</h2>
                                  </div>
                                    <div className="w-full max-w-[320px] transition-transform duration-300 hover:scale-[1.03]  cursor-pointer">
                                          <div className="bg-[#F8F7F0] aspect-[1/1] flex items-center justify-center overflow-hidden rounded">
                                            <Image
                                              src={img}
                                              alt={name}
                                              width={320}
                                              height={320}
                                              className="w-full h-full object-cover"
                                            />
                                          </div>
                                          <h2 className="text-center text-[#0F0F0F] text-[20px] mt-4">{name}</h2>
                                        </div>
                                          <div className="w-full max-w-[320px] transition-transform duration-300 hover:scale-[1.03]  cursor-pointer">
                                                <div className="bg-[#F8F7F0] aspect-[1/1] flex items-center justify-center overflow-hidden rounded">
                                                  <Image
                                                    src={img}
                                                    alt={name}
                                                    width={320}
                                                    height={320}
                                                    className="w-full h-full object-cover"
                                                  />
                                                </div>
                                                <h2 className="text-center text-[#0F0F0F] text-[20px] mt-4">{name}</h2>
                                              </div>
        </div>
      </section>
      <div className="flex mc border justify-between py-[30px] mb-[50px] px-[45px] rounded-2xl">
        <div className="flex gap-[15px] items-center">
          <div className="w-[50px] h-[50px] rounded-full bg-[#D8F422] flex items-center justify-center text-[25px]">
            <p>1</p>
          </div>
          <div>
            <p className="text-[22px]">Тип профілю</p>
          </div>
        </div>
        <div className="flex gap-[15px] items-center">
          <div className="w-[50px] h-[50px] rounded-full bg-[#D8F422] flex items-center justify-center text-[25px]">
            <p>2</p>
          </div>
          <div>
            <p className="text-[22px]">Параметри вікна </p>
          </div>
        </div>
        <div className="flex gap-[15px] items-center">
          <div className="w-[50px] h-[50px] rounded-full bg-[#D8F422] flex items-center justify-center text-[25px]">
            <p>3</p>
          </div>
          <div>
            <p className="text-[22px]">Оформлення замовлення</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calc;
