import Image from "next/image";
import Link from "next/link";

const Product = ({ img, name, link = "/" }) => {
  return (
    <Link href={link} passHref>
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
    </Link>
  );
};

export default Product;
