"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV, SITE } from "@/lib/site";
import { SHOP_CATEGORIES } from "@/lib/shop";
import { useCart } from "./CartProvider";
import Icon from "./Icon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, bump } = useCart();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const cats = [{ href: "/catalog/", title: "Металопластикові вікна" }, ...SHOP_CATEGORIES.map((c) => ({ href: `/shop/${c.id}/`, title: c.title }))];

  const CartLink = ({ className = "" }) => (
    <Link href="/cart/" aria-label={`Кошик, товарів: ${count}`} className={`relative grid place-items-center w-11 h-11 hover:bg-white/10 transition-colors ${className}`}>
      <Icon name="cart" size={22} />
      {count > 0 && (
        <span key={bump} className="anim-bump absolute -top-0.5 -right-0.5 min-w-5 h-5 px-1 grid place-items-center bg-accent text-white text-[11px] font-bold">{count}</span>
      )}
    </Link>
  );

  return (
    <header className={`sticky top-0 z-50 bg-ink text-white transition-shadow ${scrolled ? "shadow-[0_6px_24px_rgba(0,0,0,.35)]" : ""}`}>
      <div className={`hidden md:block bg-navy-2 text-xs text-white/75 overflow-hidden transition-all duration-300 ${scrolled ? "max-h-0" : "max-h-10"}`}>
        <div className="container-x flex justify-between items-center py-2">
          <span className="flex items-center gap-2"><Icon name="pin" size={13} className="text-lime" /> {SITE.address}</span>
          <span className="flex items-center gap-5">
            <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
            <a href={SITE.phoneHref} className="font-bold text-white hover:text-lime">{SITE.phone}</a>
          </span>
        </div>
      </div>
      <div className="container-x flex items-center justify-between h-[72px]">
        <Link href="/" aria-label="ВІТРАЖ — на головну" className="shrink-0">
          <Image src="/logo.png" alt="ВІТРАЖ" width={120} height={64} priority className="h-14 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-stretch h-full text-[14px] font-semibold uppercase tracking-wide" aria-label="Головне меню">
          <div className="relative group h-full flex items-center">
            <Link href="/catalog/" className="link-u px-4 flex items-center gap-1.5 hover:text-lime transition-colors">Каталог <Icon name="down" size={15} /></Link>
            <div className="absolute left-0 top-full w-72 bg-ink border-t-4 border-accent shadow-2xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 transition-all duration-200">
              {cats.map((c) => (
                <Link key={c.href} href={c.href} className="block px-5 py-3 normal-case text-[15px] font-medium border-b border-white/10 hover:bg-navy-2 hover:text-lime hover:pl-7 transition-all">{c.title}</Link>
              ))}
            </div>
          </div>
          {NAV.filter((n) => n.href !== "/catalog/").map((n) => (
            <Link key={n.href} href={n.href} className="px-4 flex items-center link-u hover:text-lime transition-colors">{n.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a href={SITE.phoneHref} className="hidden xl:block font-bold mr-3 hover:text-lime">{SITE.phone}</a>
          <CartLink />
          <Link href="/calc/" className="btn btn-accent btn-sm hidden md:inline-flex ml-2">Розрахувати</Link>
          <button className="lg:hidden w-11 h-11 grid place-items-center hover:bg-white/10" onClick={() => setOpen(!open)} aria-label={open ? "Закрити меню" : "Відкрити меню"} aria-expanded={open}>
            <Icon name={open ? "x" : "menu"} size={26} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-ink max-h-[calc(100vh-72px)] overflow-y-auto">
          <nav className="container-x flex flex-col py-2" aria-label="Мобільне меню">
            {cats.map((c) => (
              <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="py-3 border-b border-white/10 text-lg">{c.title}</Link>
            ))}
            {NAV.filter((n) => n.href !== "/catalog/").map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 border-b border-white/10 text-lg text-lime">{n.label}</Link>
            ))}
            <a href={SITE.phoneHref} className="py-4 font-bold text-xl">{SITE.phone}</a>
          </nav>
        </div>
      )}
    </header>
  );
}
