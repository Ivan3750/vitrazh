"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV, INFO, SITE } from "@/lib/site";
import { SHOP_CATEGORIES } from "@/lib/shop";
import Icon from "./Icon";
import ProductArt from "./ProductArt";
import CartButton from "./CartButton";

const MEGA = [
  { href: "/catalog/", title: "Металопластикові вікна", note: "5 профільних систем", image: "/img/photo/window-2.webp" },
  ...SHOP_CATEGORIES.map((c) => ({ href: `/shop/${c.id}/`, title: c.title, note: null, image: c.image })),
];

function Drop({ label, href, children, wide }) {
  return (
    <div className="relative group">
      <Link href={href || "#"} className="h-10 px-3 flex items-center gap-1 text-text-2 hover:text-ink transition-colors">
        {label} <Icon name="down" size={15} className="transition-transform duration-300 group-hover:rotate-180" />
      </Link>
      <div className={`absolute top-full pt-3 ${wide ? "left-0" : "left-1/2 -translate-x-1/2"} opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 transition-all duration-200 ${wide ? "w-[min(640px,calc(100vw-48px))]" : "w-[300px]"}`}>
        <div className="bg-surface border border-line-2 shadow-[0_32px_64px_-16px_rgba(0,0,0,.9)] p-2">{children}</div>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = NAV.filter((n) => n.href !== "/catalog/");

  return (
    <header className={`theme-dark sticky top-0 z-(--z-header) border-b border-line transition-shadow duration-300 bg-deep ${scrolled ? "shadow-[0_8px_32px_-8px_rgba(0,0,0,.6)]" : ""}`}>
      <div className="container-x flex items-center justify-between h-[68px] md:h-[76px] gap-4">
        <Link href="/" aria-label="ВІТРАЖ — на головну" className="shrink-0">
          <Image src="/logo.png" alt="ВІТРАЖ" width={120} height={60} priority className="h-11 md:h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-[15px] font-medium" aria-label="Головне меню">
          <Drop label="Каталог" href="/catalog/" wide>
            <div className="grid grid-cols-2 gap-1">
              {MEGA.map((c) => (
                <Link key={c.href} href={c.href} className="group/i flex items-center gap-3 p-2 hover:bg-surface-2 transition-colors">
                  <span className="relative w-14 h-14 shrink-0 bg-surface-2 overflow-hidden">{c.image ? <Image src={c.image} alt="" fill sizes="56px" className="object-cover" /> : <ProductArt className="absolute inset-0 w-full h-full" />}</span>
                  <span className="min-w-0"><span className="block text-sm font-semibold leading-tight group-hover/i:text-accent-fg transition-colors">{c.title}</span>{c.note && <span className="block text-xs text-text-3 mt-0.5">{c.note}</span>}</span>
                </Link>
              ))}
            </div>
          </Drop>
          {links.map((n) => (
            <Link key={n.href} href={n.href} className="h-10 px-3 flex items-center text-text-2 hover:text-ink transition-colors">{n.label}</Link>
          ))}
          <Drop label="Інформація">
            {INFO.map((c) => (
              <Link key={c.href} href={c.href} className="flex flex-col px-3 py-2.5 hover:bg-surface-2 transition-colors">
                <span className="text-sm font-semibold">{c.label}</span><span className="text-xs text-text-3">{c.note}</span>
              </Link>
            ))}
          </Drop>
        </nav>

        <div className="flex items-center gap-2">
          <a href={SITE.phoneHref} className="hidden xl:flex items-center gap-2 text-[15px] font-semibold mr-2 hover:text-accent-fg transition-colors"><span className="relative w-2 h-2"><span className="absolute inset-0 bg-accent" /><span className="absolute inset-0 bg-accent" style={{ animation: "pulse-ring 2s infinite" }} /></span>{SITE.phone}</a>
          <CartButton />
          <Link href="/calc/" className="btn btn-primary btn-sm hidden md:inline-flex">Розрахувати</Link>
          <button className="lg:hidden btn btn-outline btn-sm btn-icon" onClick={() => setOpen(!open)} aria-label={open ? "Закрити меню" : "Відкрити меню"} aria-expanded={open}>
            <Icon name={open ? "x" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-deep overflow-y-auto anim-fade">
          <nav className="container-x flex flex-col py-6 gap-8" aria-label="Мобільне меню">
            <div className="flex flex-col">
              <p className="eyebrow mb-3">Магазин</p>
              {MEGA.map((c) => <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="py-3.5 text-xl font-semibold border-b border-line flex items-center justify-between">{c.title}<Icon name="arrow" size={18} className="text-text-3" /></Link>)}
            </div>
            <div className="flex flex-col">
              <p className="eyebrow mb-3">Компанія та інформація</p>
              {[...links, ...INFO].map((n) => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-lg text-text-2 border-b border-line">{n.label}</Link>)}
            </div>
            <div className="flex flex-col gap-3 pb-8">
              <a href={SITE.phoneHref} className="btn btn-primary btn-block"><Icon name="phone" size={18} /> {SITE.phone}</a>
              <Link href="/calc/" onClick={() => setOpen(false)} className="btn btn-outline btn-block">Розрахувати вартість</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
