"use client";

import { useEffect, useState, useRef } from "react";
import { FaCalculator } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { FaViber, FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import localFont from "next/font/local";
import Logo from "../public/logo.png";
import "./globals.css";
import Button from "./components/Button";
import Loader from "./components/Loader";

const lalithabai = localFont({
  src: "./assets/fonts/Lalithabai.ttf",
  variable: "--font-lalithabai",
  display: "swap",
});

export default function RootLayout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
 
 
  const categoryRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="uk">
      <body className={lalithabai.variable}>
        <header
          className={`fixed top-0 left-0 w-full h-[100px] z-50 flex items-center text-white px-4 py-1 
           justify-between transition-colors duration-300
          ${scrolled ? "bg-[#0F0F0F]" : "bg-transparent"}`}
        >
          <Link href={"/"}>
            <img src={Logo.src} alt="Лого" width={180} height={80} />
          </Link>

          <nav className="hidden md:flex text-[16px] gap-[20px] uppercase">
            <Link href={"/"}>Головна</Link>

            <div className="relative group" ref={categoryRef}>
              <button className="uppercase flex items-center gap-[5px ]">
                Категорії <RiArrowDownSLine className="text-[20px]" />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 bg-[#1e1e1e] shadow-lg rounded-md overflow-hidden transition-all duration-300 z-50
                opacity-0 invisible -translate-y-2
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0`}
              >
                <Link
                  href="/category/windows"
                  className="block px-4 py-2 hover:bg-[#333] whitespace-nowrap"
                >
                  Вікна
                </Link>
                <Link
                  href="/category/screens"
                  className="block px-4 py-2 hover:bg-[#333] whitespace-nowrap"
                >
                  Сітки
                </Link>
                <Link
                  href="/category/window-blinds"
                  className="block px-4 py-2 hover:bg-[#333] whitespace-nowrap"
                >
                  Віконні жалюзі
                </Link>
                <Link
                  href="/category/vitrazh-windows"
                  className="block px-4 py-2 hover:bg-[#333] whitespace-nowrap"
                >
                  Вітражні Вікна
                </Link>
                <Link
                  href="/category/aluminium-systems"
                  className="block px-4 py-2 hover:bg-[#333] whitespace-nowrap"
                >
                  Офісні перегородки
                </Link>
                <Link
                  href="/category/gates-and-rolls"
                  className="block px-4 py-2 hover:bg-[#333] whitespace-nowrap"
                >
                  Ворота та ролети
                </Link>
                
                <Link
                  href="/category/facades"
                  className="block px-4 py-2 hover:bg-[#333] whitespace-nowrap"
                >
                Фурнітура для вікон
                </Link>
                
              </div>
            </div>

            <Link href={"/recovery"}>єВідновлення</Link>
            <Link href={"/service"}>Обслуговування</Link>
            <Link href={"/faq"}>FAQ</Link>
            <Link href={"/calc"}>Калькулятор</Link>

          </nav>

          {/* Mobile toggle button */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>

          <div className="hidden md:flex gap-2">
          
            <Link
              href="/contact"
              className="px-[16px] py-[10px] rounded-sm bg-white text-black text-md uppercase"
            >
              Написати
            </Link>
          </div>
        </header>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-[#0F0F0F] z-[99] text-white flex flex-col items-left justify-center p-6 space-y-6 text-[20px] md:hidden overflow-y-auto">
            {/* Закрити меню */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-4xl"
              aria-label="Закрити меню"
            >
              &times;
            </button>

            {/* Навігація */}
            <nav className="flex flex-col items-left gap-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Головна
              </Link>
              <Link
                href="/category/windows"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Вікна
              </Link>
              
              <Link
                href="/category/vitrazh-windows"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                      Вітражні вікна
                  
              </Link>
              
              <Link
                href="/category/window-blinds"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Віконні жалюзі
              </Link>
              <Link
                href="/category/aluminium-systems"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Офісні перегородки
              </Link>
              <Link
                href="/category/gates-and-rolls"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ворота та ролети
              </Link>
              <Link
                href="/category/screens"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Сітки
              </Link>
              <Link
                href="/category/facades"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Фурнітура для вікон
              </Link>
              <Link href="/recovery" onClick={() => setIsMobileMenuOpen(false)}>
                єВідновлення
              </Link>
              <Link href="/service" onClick={() => setIsMobileMenuOpen(false)}>
                Обслуговування
              </Link>
              <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)}>
                FAQ
              </Link>
              <Link href="/calc" onClick={() => setIsMobileMenuOpen(false)}>
                Калькулятор
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Написати
              </Link>
            </nav>
          </div>
        )}

        <main>{children}</main>

        <footer className="bg-[#0F0F0F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-center border-b-2 pb-10 gap-6">
              <h3 className="text-3xl md:text-5xl text-center md:text-left text-white">
                Якість - якій Довіряють
              </h3>
              <Button link="/contact" name="Напишіть нам" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm">
              <div className="space-y-4 text-white text-base">
                <img src={Logo.src} alt="Лого" width={180} height={80} />
                <div>
                  <p>Адреса:</p>
                  <p>Київ, проспект Академіка Глушкова, 30</p>
                </div>
                <div>
                  <p>Пошта:</p>
                  <a
                    href="mailto:kyiv@vitrazh.com.ua"
                    className="hover:underline"
                  >
                    kyiv@vitrazh.com.ua
                  </a>
                </div>
              </div>

              <div className="space-y-2 text-white text-base">
                <p className="font-semibold">Посилання</p>
                <ul className="space-y-1">
                  <li>
                    <a href="/service" className="hover:underline">
                      Сервіс
                    </a>
                  </li>
                  <li>
                    <a href="/service" className="hover:underline">
                      Обслуговування
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="hover:underline">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2 text-white text-base">
                <p className="font-semibold">Категорії</p>
                <ul className="space-y-1">
                  <li>
                    <a href="/category/windows" className="hover:underline">
                      Вікна
                    </a>
                  </li>
                  <li>
                    <a href="/category/screens" className="hover:underline">
                      Сітки
                    </a>
                  </li>
                  <li>
                    <a href="/category/window-blinds" className="hover:underline">
                      Віконні жалюзі
                    </a>
                  </li>
                  <li>
                    <a href="/category/vitrazh-windows" className="hover:underline">
                      Вітражні вікна
                    </a>
                  </li>
                  <li>
                    <a href="/category/aluminium-systems" className="hover:underline">
                    Офісні перегородки
                    </a>
                  </li>
                  <li>
                    <a href="/category/gates-and-rolls" className="hover:underline">
                      Ворота та ролети
                    </a>
                  </li>
                  <li>
                    <a href="/category/facades" className="hover:underline">
                Фурнітура для вікон
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 text-white">
                <p className="text-base font-semibold">Ми в соцмережах</p>
                <div className="flex space-x-4 text-2xl">
                  <a href="https://t.me/+380951099040">
                  <FaTelegram />
                  </a>
                  <a href="https://wa.me/380951099040">
                  <FaWhatsapp />
                  </a>
                  <a href="viber://chat?number=+380951099040">
                  <FaViber />
                  </a>
                  <a href="https://www.instagram.com/vitrazh.com.ua/">
                  <FaInstagram />
                  </a>
                </div>
                
              </div>
                 <div className="text-white space-y-2">
    <p className="text-base font-semibold">Ми на мапі</p>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10180.20131706194!2d30.449779!3d50.365616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8513a365d09%3A0x1e460aad6b3ad88e!2z0L_RgNC-0YHQv9C10LrRgiDQkNC60LDQtNC10LzRltC60LAg0JPQu9GD0YjQutC-0LLQsCwgMzAsINCa0LjRl9CyLCDQo9C60YDQsNGX0L3QsCwgMDIwMDA!5e0!3m2!1suk!2sdk!4v1751716113735!5m2!1suk!2sdk"
      width="100%"
      height="150"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-md"
    ></iframe>
  </div>
            </div>
          </div>
          <div className="text-center text-white border-t-2 py-10 border-[#171717] text-sm">
            © {new Date().getFullYear()} Vitrazh. Всі права захищені.
          </div>
        </footer>
      </body>
    </html>
  );
}
