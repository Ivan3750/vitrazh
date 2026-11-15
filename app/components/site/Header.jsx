"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/public/logo-dark.png";
import { NAV } from "./nav";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (item) => {
    if (item.href === "/") return pathname === "/";
    const bases = item.match || [item.href.replace(/\/$/, "")];
    return bases.some((b) => pathname.startsWith(b));
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "border-b border-ink/10" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-[1320px] mx-auto flex items-center justify-between h-[76px] px-4 sm:px-6 gap-6">
          <Link href="/" aria-label="Вітраж — на головну" className="shrink-0 block">
            <img src={Logo.src} alt="Вітраж" className="h-[60px] w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Головне меню">
            {NAV.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="relative py-2 text-[13px] xl:text-sm font-semibold uppercase tracking-[0.12em] text-ink/60 hover:text-ink transition-colors flex items-center gap-1"
                >
                  <span className={isActive(item) ? "text-ink" : ""}>{item.label}</span>
                  {item.children && <span className="text-[10px] transition-transform group-hover:rotate-180">▼</span>}
                  {isActive(item) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-[3px] bg-brand-orange"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                </Link>

                {item.children && (
                  <div className="absolute left-0 top-full pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                    <div className="w-[270px] rounded-2xl bg-white border border-ink/10 shadow-xl p-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] hover:bg-paper hover:text-brand-orange transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+380951099040" className="hidden 2xl:block text-sm font-semibold whitespace-nowrap">
              +38 095 109 90 40
            </a>
            <Link
              href="/contact/"
              className="hidden md:inline-flex whitespace-nowrap rounded-full bg-ink text-white hover:bg-brand-orange transition-colors text-sm font-semibold uppercase tracking-wider px-6 py-3"
            >
              Замовити замір
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Відкрити меню"
              className="lg:hidden w-11 h-11 rounded-full bg-ink flex flex-col items-center justify-center gap-1.5"
            >
              <span className="w-5 h-0.5 bg-white" />
              <span className="w-5 h-0.5 bg-white" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-white flex flex-col justify-center px-8"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Закрити меню"
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-ink text-white text-3xl leading-none"
            >
              &times;
            </button>
            <nav className="flex flex-col gap-1 overflow-y-auto max-h-[75vh] pr-2">
              {NAV.flatMap((item) => (item.children ? item.children : [item])).map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl uppercase leading-tight hover:text-brand-orange transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <a href="tel:+380951099040" className="mt-10 font-semibold">
              +38 095 109 90 40
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
