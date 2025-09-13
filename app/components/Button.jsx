import Link from "next/link";
import Image from "next/image";
import go from "@/app/assets/images/icons/go.svg";
import goActive from "@/app/assets/images/icons/go_active.svg";

const Button = ({ link = "/", name }) => {
  return (
    <Link
      href={link}
      className="group bg-[#D8F422] py-[18px] px-[24px] rounded-sm uppercase font-semibold flex min-w-[200px] max-w-[250px] gap-[5px] justify-between items-center hover:bg-[#0f0f0f] hover:text-white transition-colors"
    >
      {name}
      {/* default icon */}
      <Image
        src={go}
        alt="arrow"
        className="block group-hover:hidden"
      />
      {/* hover icon */}
      <Image
        src={goActive}
        alt="arrow active"
        className="hidden group-hover:block"
      />
    </Link>
  );
};

export default Button;
