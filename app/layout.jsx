import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartProvider";
import { SITE } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "ВІТРАЖ — інтернет-магазин металопластикових вікон у Києві",
    template: "%s | ВІТРАЖ",
  },
  description: "Металопластикові вікна від офіційного партнера заводу: каталог із цінами, калькулятор, кошик і оформлення замовлення онлайн. Москітні сітки, підвіконня, жалюзі, захисні ролети. Київ та область.",
  icons: { icon: "/favicon.png" },
  openGraph: { type: "website", siteName: "ВІТРАЖ", locale: "uk_UA", url: SITE.url },
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
