import Link from "next/link";

const Product = ({ img, name, link = "/" }) => {
  return (
    <Link href={link} className="group block bg-paper overflow-hidden">
      <div className="aspect-square m-3 bg-white overflow-hidden grid place-items-center">
        <img
          src={img.src}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between gap-3 px-6 pb-6 pt-2">
        <h2 className="font-display text-2xl sm:text-3xl uppercase leading-tight">{name}</h2>
        <span className="shrink-0 w-11 h-11 bg-ink text-white grid place-items-center group-hover:bg-brand-orange group-hover:translate-x-1 transition-all">
          →
        </span>
      </div>
    </Link>
  );
};

export default Product;
