"use client";

import { useEffect, useState, useRef } from "react";
import { FaCalculator } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { FaViber, FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa";

import localFont from "next/font/local";

import Logo from "../public/logo.png";
import "./globals.css";
import Button from "./components/Button";

const lalithabai = localFont({
  src: "./assets/fonts/Lalithabai.ttf",
  variable: "--font-lalithabai",
  display: "swap",
});

export default function RootLayout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
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

  // ✅ одразу перевіряємо при завантаженні
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
            <Image src={Logo} alt="Лого" width={180} height={80} />
          </Link>

          <nav className="hidden md:flex text-[18px] gap-[20px] uppercase">
            <Link href={"/"}>Головна</Link>
            <Link href={"/about"}>Про нас</Link>

            {/* Категорії з випадаючим меню */}
           <div className="relative group" ref={categoryRef}>
  <button className="uppercase">
    Категорії
  </button>

  <div
    className={`absolute top-full left-0 mt-2 bg-[#1e1e1e] shadow-lg rounded-md overflow-hidden transition-all duration-300 z-50
      opacity-0 invisible -translate-y-2
      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
    `}
  >
    <Link
      href="/category/windows"
      className="block px-4 py-2 hover:bg-[#333] whitespace-nowrap"
    >
      Вікна
    </Link>
    <Link
      href="/category/window-blinds"
      className="block px-4 py-2 hover:bg-[#333] whitespace-nowrap"
    >
      Віконні жалюзі
    </Link>
    <Link
      href="/category/aluminium-systems"
      className="block px-4 py-2 hover:bg-[#333] whitespace-nowrap"
    >
      Алюмінієві системи
    </Link>
    <Link
      href="/category/gates-and-rolls"
      className="block px-4 py-2 hover:bg-[#333] whitespace-nowrap"
    >
      Ворота та ролети
    </Link>
    <Link
      href="/category/screens"
      className="block px-4 py-2 hover:bg-[#333] whitespace-nowrap"
    >
      Сітки
    </Link>
    <Link
      href="/category/facades"
      className="block px-4 py-2 hover:bg-[#333] whitespace-nowrap"
    >
      Фасади
    </Link>
  </div>
</div>


            <Link href={"/recovery"}>єВідновлення</Link>
            <Link href={"/service"}>Обслуговування</Link>
            <Link href={"/faq"}>FAQ</Link>
          </nav>

          <div className="flex gap-2">
            <Link
              href="/calc"
              className="p-[10px] min-w-min bg-white text-black rounded-full text-[30px] flex justify-center items-center"
            >
              <FaCalculator />
            </Link>
            <Link
              href="/contact"
              className="px-[20px] py-[16px] rounded-sm bg-white text-black"
            >
              Подзвонити
            </Link>
          </div>
        </header>

        <main>{children}</main>
        <footer className="bg-[#0F0F0F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-center border-b-2  pb-10">
              <h3 className="text-3xl md:text-5xl  text-center md:text-left text-white">
                Якість, якій нам довіряють
              </h3>
              <Button link="/contact" name="Напишіть нам" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
              <div className="space-y-4 text-white text-[20px]">
                <Image src={Logo} alt="Лого" width={180} height={80} />
                <div>
                  <p className="">Адреса:</p>
                  <p>Київ, проспект Академіка Глушкова, 30</p>
                </div>
                <div>
                  <p className=" text-white">Пошта:</p>
                  <p>
                    <a
                      href="mailto:kyiv@vitrazh.com.ua"
                      className="hover:underline"
                    >
                      kyiv@vitrazh.com.ua
                    </a>
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-white text-[20px]">
                <p className="">Посилання</p>
                <ul className="space-y-1">
                  <li>
                    <a href="/service" className="hover:underline">
                      Сервіс
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:underline">
                      Про нас
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="hover:underline">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 text-white">
                <p className="text-[20px]">Ми в соцмережах</p>
                <div className="flex space-x-4">
                  <FaViber className="text-[24px]" />
                  <FaWhatsapp className="text-[24px]" />
                  <FaTelegram className="text-[24px]" />
                  <FaInstagram className="text-[24px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-white  border-t-2 py-[40px] border-[#171717] text-[18px]">
            © {new Date().getFullYear()} Vitrazh. Всі права захищені.
          </div>
        </footer>
      </body>
    </html>
  );
}
