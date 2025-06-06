import Image from "next/image";
import Link from "next/link";

const Product = ({ img, name, link = "/", key }) => {
  return (
    <Link href={link} key={key}>
    <div className="w-[320px]">
      <div className="bg-[#F8F7F0] h-[330px] flex items-center justify-center">
        <Image src={img} alt={name} width={320} height={330} className="w-full h-full object-cover" />
      </div>
      <div>
        <h2 className="text-center text-[#0F0F0F] text-[22px] mt-4">{name}</h2>
      </div>
    </div>
    </Link>
  );
};

export default Product;
