import Link from "next/link";

const Button = ({ link = "/", name }) => {
  return (
    <Link
      href={link}
      className="group inline-flex items-center justify-between gap-4 bg-brand-orange text-white hover:bg-ink transition-colors pl-7 pr-2 py-2 uppercase font-semibold tracking-wider min-w-[200px]"
    >
      {name}
      <span className="w-10 h-10 bg-white text-ink grid place-items-center group-hover:translate-x-1 transition-transform">
        →
      </span>
    </Link>
  );
};

export default Button;
