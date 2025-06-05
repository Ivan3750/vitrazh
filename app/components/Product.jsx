import Image from "next/image";

const Product = ({ img, name }) => {
  return (
    <div className="w-[320px]">
      <div className="bg-lightyellow h-[330px] flex items-center justify-center">
        <Image src={img} alt={name} width={320} height={330} className="w-full h-full object-cover" />
      </div>
      <div>
        <h2 className="text-center text-[#0F0F0F] text-[24px] mt-4">{name}</h2>
      </div>
    </div>
  );
};

export default Product;
