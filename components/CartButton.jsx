"use client";
import Link from "next/link";
import { useCart } from "./CartProvider";
import Icon from "./Icon";

// Кнопка кошика в шапці: чітка іконка-сумка та лічильник, що не обрізається
export default function CartButton() {
  const { count, bump } = useCart();
  return (
    <Link href="/cart/" aria-label={`Кошик, товарів: ${count}`} className="relative grid place-items-center w-11 h-11 bg-surface-2 text-ink hover:bg-accent hover:text-on-accent transition-colors">
      <Icon name="bag" size={22} />
      {count > 0 && (
        <span key={bump} className="anim-bump absolute -top-2 -right-2 min-w-[22px] h-[22px] px-1.5 grid place-items-center bg-accent text-on-accent text-xs font-bold leading-none ring-2 ring-deep">{count}</span>
      )}
    </Link>
  );
}
