"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";
import { useCart } from "./CartProvider";
import Icon from "./Icon";

// Нижня панель швидких дій на телефонах і планшетах
export default function MobileBar() {
  const { count } = useCart();
  const path = usePathname();
  if (path?.startsWith("/checkout")) return null;
  const item = "flex-1 flex flex-col items-center justify-center gap-1 text-[11px] font-semibold text-text-2 active:text-accent-fg min-h-[56px]";
  return (
    <nav className="theme-dark lg:hidden fixed bottom-0 inset-x-0 z-[90] bg-deep/92 backdrop-blur-lg border-t border-line pb-[env(safe-area-inset-bottom)]" aria-label="Швидкі дії">
      <div className="flex">
        <a href={SITE.phoneHref} className={item}><Icon name="phone" size={20} />Дзвінок</a>
        <Link href="/catalog/" className={item}><Icon name="search" size={20} />Каталог</Link>
        <Link href="/calc/" className={item}><Icon name="calc" size={20} />Розрахунок</Link>
        <Link href="/cart/" className={`${item} relative`}>
          <span className="relative"><Icon name="bag" size={20} />{count > 0 && <span className="absolute -top-2 -right-3 min-w-[18px] h-[18px] px-1 grid place-items-center bg-accent text-on-accent text-[10px] font-bold">{count}</span>}</span>Кошик
        </Link>
      </div>
    </nav>
  );
}
