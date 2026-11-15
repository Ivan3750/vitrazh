import HomeNew from "./components/site/HomeNew";

export const metadata = {
  title: "Вікна у Києві: металопластикові та алюмінієві, вітражі під ключ | Вітраж",
  description:
    "Каталог металопластикових та алюмінієвих вікон, вітражі та фурнітура у Києві та області. Безкоштовний замір, виготовлення, монтаж під ключ і гарантійний сервіс.",
  keywords:
    "вікна Київ, металопластикові вікна, двері, балкони, скління, VitraZH, встановлення вікон, замовити вікна",
  robots: "index, follow",
  openGraph: {
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    type: "website",
    title: "Вікна у Києві: металопластикові та алюмінієві | Вітраж",
    description:
      "Каталог вікон і профільних систем, вітражі, монтаж під ключ. Безкоштовний замір та гарантійний сервіс.",
    url: "/",
    siteName: "Вітраж",
    locale: "uk_UA",
  },
  twitter: {
    card: "summary_large_image",
    title: "VitraZH - Вікна, двері, балкони під ключ у Києві",
    description:
      "Продаж та монтаж вікон, дверей, балконів. Працюємо по Києву та області.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomeNew />;
}
