"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaViber, FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa";
import { LuPhone, LuMapPin, LuClock, LuArrowRight, LuMenu, LuX, LuChevronDown } from "react-icons/lu";
import Logo from "@/public/logo-dark.png";
import { NAV } from "./nav";
import { site } from "@/app/data/site";

const SOCIALS = [
  { href: "https://t.me/+380951099040", label: "Telegram", Icon: FaTelegram },
  { href: "https://wa.me/380951099040", label: "WhatsApp", Icon: FaWhatsapp },
  { href: "viber://chat?number=+380951099040", label: "Viber", Icon: FaViber },
  { href: "https://www.instagram.com/vitrazh.com.ua/", label: "Instagram", Icon: FaInstagram },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Закриваємо мобільне меню при переході на іншу сторінку
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (item) => {
    if (item.href === "/") return pathname === "/";
    const bases = item.match || [item.href.replace(/\/$/, "")];
    return bases.some((b) => pathname.startsWith(b));
  };

  return (
    <>
      {/* Верхня смуга: контакти. Прокручується разом зі сторінкою */}
      <div className="hidden md:block bg-ink text-white/70 text-[13px]">
        <div className="max-w-[1320px] mx-auto h-10 px-4 sm:px-6 flex items-center justify-between gap-6">
          <div className="flex items-center gap-6 min-w-0">
            <span className="flex items-center gap-2 whitespace-nowrap">
              <LuMapPin aria-hidden className="text-brand-orange shrink-0" />
              {site.address.city}, {site.address.street}
            </span>
            <span className="hidden lg:flex items-center gap-2 whitespace-nowrap">
              <LuClock aria-hidden className="text-brand-orange shrink-0" />
              {site.hours}
            </span>
          </div>
          <div className="flex items-center gap-5 shrink-0">
            <a href={`tel:${site.phone}`} className="flex items-center gap-2 text-white font-semibold hover:text-brand-orange transition-colors">
              <LuPhone aria-hidden className="text-brand-orange" />
              {site.phoneHuman}
            </a>
            <span className="w-px h-4 bg-white/20" aria-hidden />
            <ul className="flex items-center gap-3.5">
              {SOCIALS.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[15px] hover:text-brand-orange transition-colors"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_8px_24px_-14px_rgba(19,35,58,0.45)]" : "border-b border-ink/10"
        }`}
      >
        <div className="max-w-[1320px] mx-auto flex items-center justify-between h-[72px] px-4 sm:px-6 gap-4">
          <Link href="/" aria-label="Вітраж — на головну" className="shrink-0 block">
            <img src={Logo.src} alt="Вітраж" width="170" height="60" className="h-[56px] w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-8" aria-label="Головне меню">
            {NAV.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`relative py-2 text-[13px] xl:text-sm font-semibold uppercase tracking-[0.1em] hover:text-ink transition-colors flex items-center gap-1 ${
                    isActive(item) ? "text-ink" : "text-ink/60"
                  }`}
                >
                  {item.label}
                  {item.children && <LuChevronDown aria-hidden className="text-base transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />}
                  <span
                    aria-hidden
                    className={`absolute left-0 right-0 -bottom-0.5 h-[3px] bg-brand-orange origin-left transition-transform duration-300 ${
                      isActive(item) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>

                {item.children && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-[opacity,transform,visibility] duration-200">
                    <div className="w-[720px] bg-white border border-ink/10 shadow-2xl">
                      <ul className="grid grid-cols-2 gap-px bg-ink/10">
                        {item.children.map((c) => (
                          <li key={c.href} className="bg-white">
                            <Link href={c.href} className="group/item flex items-center justify-between gap-4 px-6 py-4 hover:bg-paper transition-colors">
                              <span>
                                <span className="block font-display text-xl uppercase leading-none group-hover/item:text-brand-orange transition-colors">{c.label}</span>
                                <span className="block mt-1.5 text-sm text-ink/55 normal-case tracking-normal font-normal">{c.desc}</span>
                              </span>
                              <LuArrowRight aria-hidden className="shrink-0 text-xl text-ink/25 group-hover/item:text-brand-orange group-hover/item:translate-x-1 transition-all" />
                            </Link>
                          </li>
                        ))}
                        <li className="bg-ink text-white">
                          <Link href="/contact/" className="h-full flex items-center justify-between gap-4 px-6 py-4 hover:bg-brand-orange transition-colors">
                            <span>
                              <span className="block font-display text-xl uppercase leading-none">Не знайшли потрібне?</span>
                              <span className="block mt-1.5 text-sm text-white/70 normal-case tracking-normal font-normal">Підкажемо та організуємо замір</span>
                            </span>
                            <LuArrowRight aria-hidden className="shrink-0 text-xl" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${site.phone}`}
              aria-label={`Зателефонувати: ${site.phoneHuman}`}
              className="xl:hidden w-11 h-11 grid place-items-center border-2 border-ink text-ink hover:bg-ink hover:text-white transition-colors text-lg"
            >
              <LuPhone aria-hidden />
            </a>
            <Link
              href="/contact/"
              className="hidden xl:inline-flex items-center gap-2 whitespace-nowrap bg-brand-orange text-white hover:bg-ink transition-colors text-sm font-semibold uppercase tracking-wider px-6 py-3.5"
            >
              Замовити замір
              <LuArrowRight aria-hidden />
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Відкрити меню"
              aria-expanded={open}
              className="lg:hidden w-11 h-11 bg-ink text-white grid place-items-center text-2xl"
            >
              <LuMenu aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* Мобільне меню: завжди в DOM, показ через CSS-перехід (без JS-анімацій) */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] bg-white flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-y-0 visible" : "-translate-y-full invisible"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Меню"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between h-[72px] px-4 sm:px-6 border-b border-ink/10 shrink-0">
          <Link href="/" onClick={() => setOpen(false)} aria-label="Вітраж — на головну">
            <img src={Logo.src} alt="Вітраж" width="170" height="60" className="h-[56px] w-auto" />
          </Link>
          <button onClick={() => setOpen(false)} aria-label="Закрити меню" className="w-11 h-11 bg-ink text-white grid place-items-center text-2xl">
            <LuX aria-hidden />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 sm:px-6 py-4" aria-label="Мобільне меню">
          <ul>
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-ink/10">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setCatOpen((v) => !v)}
                      aria-expanded={catOpen}
                      className="w-full flex items-center justify-between py-4 font-display text-3xl uppercase text-left"
                    >
                      {item.label}
                      <LuChevronDown aria-hidden className={`transition-transform duration-300 ${catOpen ? "rotate-180" : ""}`} />
                    </button>
                    <ul className={`grid transition-[grid-template-rows] duration-300 ${catOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <li className="overflow-hidden">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="block py-3 pl-4 border-l-4 border-brand-orange mb-2 bg-paper"
                          >
                            <span className="block font-display text-xl uppercase">{c.label}</span>
                            <span className="block text-sm text-ink/55">{c.desc}</span>
                          </Link>
                        ))}
                      </li>
                    </ul>
                  </>
                ) : (
                  <Link href={item.href} onClick={() => setOpen(false)} className={`block py-4 font-display text-3xl uppercase ${isActive(item) ? "text-brand-orange" : ""}`}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="shrink-0 border-t border-ink/10 p-4 sm:p-6 grid gap-3 bg-paper">
          <a href={`tel:${site.phone}`} className="flex items-center justify-center gap-3 bg-ink text-white py-4 font-semibold uppercase tracking-wider">
            <LuPhone aria-hidden /> {site.phoneHuman}
          </a>
          <Link href="/contact/" onClick={() => setOpen(false)} className="flex items-center justify-center gap-3 bg-brand-orange text-white py-4 font-semibold uppercase tracking-wider">
            Замовити замір <LuArrowRight aria-hidden />
          </Link>
          <ul className="flex items-center justify-center gap-5 pt-1 text-2xl">
            {SOCIALS.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} aria-label={label} className="hover:text-brand-orange transition-colors">
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
