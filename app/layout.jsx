import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "ВІТРАЖ — металопластикові вікна в Києві: каталог, калькулятор, монтаж",
    template: "%s | ВІТРАЖ",
  },
  description: "Металопластикові вікна від офіційного партнера заводу: каталог із цінами, онлайн-калькулятор, безкоштовний замір і професійний монтаж у Києві та області.",
  icons: { icon: "/favicon.png" },
  openGraph: { type: "website", siteName: "ВІТРАЖ", locale: "uk_UA", url: SITE.url },
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
