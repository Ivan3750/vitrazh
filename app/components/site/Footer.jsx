import Link from "next/link";
import { FaViber, FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa";
import Logo from "@/public/logo.png";
import { NAV, CATEGORIES } from "./nav";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-8">
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] uppercase max-w-3xl">
            Якість, якій <span className="text-brand-orange">довіряють</span>
          </h2>
          <Link
            href="/contact/"
            className="self-start md:self-auto bg-brand-lime text-ink hover:bg-white transition-colors px-8 py-4 uppercase font-semibold tracking-wider"
          >
            Напишіть нам
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white/70">
          <div className="space-y-4">
            <img src={Logo.src} alt="Вітраж" className="h-14 w-auto -ml-2" />
            <p>Київ, проспект Академіка Глушкова, 30</p>
            <a href="mailto:kyiv@vitrazh.com.ua" className="block hover:text-white">
              kyiv@vitrazh.com.ua
            </a>
            <a href="tel:+380951099040" className="block hover:text-white">
              +38 095 109 90 40
            </a>
          </div>

          <div className="space-y-3">
            <p className="text-white font-semibold uppercase text-sm tracking-[0.14em]">Меню</p>
            <ul className="space-y-2">
              {NAV.filter((n) => !n.children).map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-white font-semibold uppercase text-sm tracking-[0.14em]">Категорії</p>
            <ul className="space-y-2">
              {CATEGORIES.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-white font-semibold uppercase text-sm tracking-[0.14em]">Ми в соцмережах</p>
            <div className="flex gap-3 text-xl">
              {[
                { href: "https://t.me/+380951099040", label: "Telegram", Icon: FaTelegram },
                { href: "https://wa.me/380951099040", label: "WhatsApp", Icon: FaWhatsapp },
                { href: "viber://chat?number=+380951099040", label: "Viber", Icon: FaViber },
                { href: "https://www.instagram.com/vitrazh.com.ua/", label: "Instagram", Icon: FaInstagram },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-white/25 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 text-sm text-white/40">
          © {new Date().getFullYear()} Вітраж. Всі права захищені.
        </div>
      </div>
    </footer>
  );
}
