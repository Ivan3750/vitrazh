import { Oswald, Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/site/Header";
import Footer from "./components/site/Footer";
import FloatingContactButton from "./components/FloatingContactButton";

// Oswald — вузькі виразні заголовки (архітектурна подача), Manrope — текст. Обидва з кирилицею.
const oswald = Oswald({
  subsets: ["cyrillic", "latin"],
  variable: "--font-oswald",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={`${oswald.variable} ${manrope.variable} bg-white text-ink`}>
        <Header />
        <main className="pt-[76px]">{children}</main>
        <FloatingContactButton />
        <Footer />
      </body>
    </html>
  );
}
