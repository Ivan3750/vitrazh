"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV, SITE } from "@/lib/site";
import Icon from "./Icon";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-md">
      <div className="hidden md:block bg-navy-2 text-xs text-white/80">
        <div className="container-x flex justify-between py-1.5">
          <span className="flex items-center gap-1.5"><Icon name="pin" size={13} /> {SITE.address}</span>
          <span className="flex items-center gap-4">
            <a href={SITE.phoneHref} className="font-semibold text-white hover:text-lime">{SITE.phone}</a>
          </span>
        </div>
      </div>
      <div className="container-x flex items-center justify-between h-[68px]">
        <Link href="/" aria-label="ВІТРАЖ — на головну" className="shrink-0">
          <Image src="/logo.png" alt="ВІТРАЖ" width={120} height={64} priority className="h-14 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium" aria-label="Головне меню">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-lime transition-colors">{n.label}</Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link href="/calc/" className="btn btn-accent">Розрахувати вартість</Link>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label={open ? "Закрити меню" : "Відкрити меню"} aria-expanded={open}>
          <Icon name={open ? "x" : "menu"} size={26} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-navy">
          <nav className="container-x flex flex-col py-3" aria-label="Мобільне меню">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 border-b border-white/10 text-lg">{n.label}</Link>
            ))}
            <a href={SITE.phoneHref} className="py-3 font-semibold text-lime">{SITE.phone}</a>
            <Link href="/calc/" onClick={() => setOpen(false)} className="btn btn-accent mt-2">Розрахувати вартість</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
