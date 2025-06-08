import Home from "./components/Home";


export const metadata = {
  title: "Вікна, двері, скління під ключ — VitraZH | Київ та область",
  description: "Продаж та монтаж металопластикових вікон, дверей, балконів та аксесуарів у Києві та області. Замір, доставка, монтаж — все під ключ. Гарантія якості від VitraZH.",
  keywords: "вікна Київ, металопластикові вікна, двері, балкони, скління, VitraZH, встановлення вікон, замовити вікна",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "VitraZH — Вікна, двері, балкони під ключ у Києві",
    description: "Металопластикові вікна та двері з установкою. Гарантія, якість, сервіс. Безкоштовний замір!",
    url: "https://vitrazh.com.ua/",
    siteName: "VitraZH",
  },
  twitter: {
    card: "summary_large_image",
    title: "VitraZH — Вікна, двері, балкони під ключ у Києві",
    description: "Продаж та монтаж вікон, дверей, балконів. Працюємо по Києву та області.",
  },
  alternates: {
    canonical: "https://vitrazh.com.ua/",
  }
};



const HomePage = () => {
  return ( <><Home></Home></> );
}
 
export default HomePage;