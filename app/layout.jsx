import { Oswald, Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/site/Header";
import Footer from "./components/site/Footer";
import JsonLd from "./components/site/JsonLd";
import FloatingContactButton from "./components/FloatingContactButton";
import { site, abs } from "./data/site";

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

const DEFAULT_TITLE = "Вітраж — металопластикові та алюмінієві вікна, вітражі у Києві";
const DEFAULT_DESC =
  "Продаж і монтаж металопластикових та алюмінієвих вікон, вітражів і фурнітури у Києві та області. Безкоштовний замір, виготовлення, монтаж і гарантійний сервіс.";

export const metadata = {
  metadataBase: new URL(site.url),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESC,
  applicationName: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    siteName: site.name,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    url: "/",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: "Сучасний будинок із новими вікнами — Вітраж" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [site.ogImage],
  },
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#13233a",
};

// Організація / локальний бізнес — на всіх сторінках
const businessLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  alternateName: site.legalName,
  url: site.url,
  image: abs(site.ogImage),
  logo: abs("/logo-dark.png"),
  telephone: site.phone,
  email: site.email,
  priceRange: "₴₴",
  areaServed: [{ "@type": "City", name: "Київ" }, { "@type": "AdministrativeArea", name: "Київська область" }],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressCountry: site.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "12:00" },
  ],
  sameAs: site.social,
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  inLanguage: "uk-UA",
  publisher: { "@id": `${site.url}/#business` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={`${oswald.variable} ${manrope.variable} bg-white text-ink`}>
        <JsonLd data={businessLd} />
        <JsonLd data={websiteLd} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-ink focus:text-white focus:px-4 focus:py-2">
          Перейти до змісту
        </a>
        <Header />
        <main id="main">{children}</main>
        <FloatingContactButton />
        <Footer />
      </body>
    </html>
  );
}
