import Link from "next/link";
import go from "@/app/assets/images/icons/go.svg"
import Image from "next/image";

const Button = ({link= "/", name}) => {
    return ( <>
    <Link href={link} className="bg-[#D8F422] py-[18px] px-[24px] rounded-sm uppercase font-semibold flex min-w-[200px] gap-[5px] justify-between hover:bg-[#0f0f0f] hover:text-white">
    {name}
    <Image src={go}/>
    </Link>
    </> );
}
 
export default Button;