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
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const cats = [{ href: "/catalog/", title: "Металопластикові вікна", note: "Каталог і ціни" }, ...SHOP_CATEGORIES.map((c) => ({ href: `/shop/${c.id}/`, title: c.title, note: null }))];
  const links = NAV.filter((n) => n.href !== "/catalog/");

  return (
    <header className={`sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b transition-colors duration-300 ${scrolled ? "border-line" : "border-transparent"}`}>
      <div className="container-x flex items-center justify-between h-[72px] gap-6">
        <Link href="/" aria-label="ВІТРАЖ — на головну" className="shrink-0">
          <Image src="/logo-dark.png" alt="ВІТРАЖ" width={120} height={60} priority className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-[15px] font-medium" aria-label="Головне меню">
          <div className="relative group">
            <Link href="/catalog/" className="h-10 px-3 flex items-center gap-1 text-text-2 hover:text-ink hover:bg-soft transition-colors">Каталог <Icon name="down" size={15} className="transition-transform group-hover:rotate-180" /></Link>
            <div className="absolute left-0 top-full pt-2 w-[300px] opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 transition-all duration-200">
              <div className="bg-white border border-line shadow-[0_24px_48px_-16px_rgba(25,25,25,.25)] p-2">
                {cats.map((c) => (
                  <Link key={c.href} href={c.href} className="flex items-center justify-between px-3 h-11 text-text-2 hover:text-ink hover:bg-soft transition-colors">
                    {c.title}{c.note && <span className="text-xs text-text-3">{c.note}</span>}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {links.map((n) => (
            <Link key={n.href} href={n.href} className="h-10 px-3 flex items-center text-text-2 hover:text-ink hover:bg-soft transition-colors">{n.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={SITE.phoneHref} className="hidden xl:block text-[15px] font-semibold mr-2 hover:text-brand transition-colors">{SITE.phone}</a>
          <Link href="/cart/" aria-label={`Кошик, товарів: ${count}`} className="relative btn btn-outline btn-sm btn-icon">
            <Icon name="cart" size={18} />
            {count > 0 && <span key={bump} className="anim-bump absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 grid place-items-center bg-accent text-white text-[11px] font-bold leading-none">{count}</span>}
          </Link>
          <Link href="/calc/" className="btn btn-dark btn-sm hidden md:inline-flex">Розрахувати</Link>
          <button className="lg:hidden btn btn-outline btn-sm btn-icon" onClick={() => setOpen(!open)} aria-label={open ? "Закрити меню" : "Відкрити меню"} aria-expanded={open}>
            <Icon name={open ? "x" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-white max-h-[calc(100vh-72px)] overflow-y-auto anim-fade">
          <nav className="container-x flex flex-col py-4" aria-label="Мобільне меню">
            {cats.map((c) => <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="py-3 text-lg border-b border-line">{c.title}</Link>)}
            {links.map((n) => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-lg border-b border-line text-text-2">{n.label}</Link>)}
            <a href={SITE.phoneHref} className="py-4 text-lg font-semibold">{SITE.phone}</a>
            <Link href="/calc/" onClick={() => setOpen(false)} className="btn btn-dark btn-block">Розрахувати вартість</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
