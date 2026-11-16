import PageHero from "@/app/components/site/PageHero";
import ProductList from "@/app/components/ProductList";
import b from "@/app/assets/images-webp/products/blinds/background.webp";
import z1 from "@/app/assets/images-webp/products/blinds/z1.webp";
import z2 from "@/app/assets/images-webp/products/blinds/z2.webp";
import z3 from "@/app/assets/images-webp/products/blinds/z3.webp";
import z4 from "@/app/assets/images-webp/products/blinds/z4.webp";
import z5 from "@/app/assets/images-webp/products/blinds/z5.webp";
import z6 from "@/app/assets/images-webp/products/blinds/z6.webp";
import z7 from "@/app/assets/images/products/blinds/z7.jpg";
import z8 from "@/app/assets/images-webp/products/blinds/z8.webp";
import z9 from "@/app/assets/images-webp/products/blinds/z9.webp";


export const metadata = {
  alternates: { canonical: "/category/window-blinds/" },
  title: "Штори та жалюзі - стиль та комфорт для вашого дому | Вітраж",
  description: "Пропонуємо широкий вибір штор та жалюзі: рулонні, вертикальні, горизонтальні та тканинні. Ідеальне рішення для будь-якого інтер'єру.",
  keywords: "штори, жалюзі, рулонні штори, вертикальні жалюзі, горизонтальні жалюзі, тканинні штори, купити штори, жалюзі для дому",
  openGraph: {
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    title: "Штори та жалюзі - стиль та комфорт для вашого дому",
    description: "Обирайте якісні штори та жалюзі різних видів. Стиль, комфорт та зручність для кожного приміщення.",
    url: "https://vitrazh.com.ua/category/window-blinds",
  },
  twitter: {
    title: "Штори та жалюзі - стиль та комфорт для вашого дому",
    description: "Обирайте якісні штори та жалюзі різних видів за вигідною ціною.",
  },
};



const WindowPage = () => {
    const products = [
    {
      id: 1,
      name: "Алюмінієві жалюзі",
      img: z1,
      link: "/category/window-blinds/alyuminiievi-zhalyuzi"
    },
    {
      id: 2,
      name: "Вертикальні тканьові жалюзі",
      img: z2,
      link: "/category/window-blinds/vertykalni-tkanovi-zhalyuzi"
    },
    {
      id: 3,
      name: "Рулонні штори тканьові ролети",
      img: z3,
      link: "/category/window-blinds/rulonni-shtory-tkanovi-rolete"
    },
    {
      id: 4,
      name: "ДЕНЬ - НІЧ тканьові ролети",
      img: z4,
      link: "/category/window-blinds/den-nich-tkanovi-rolete"
    },
    {
      id: 6,
      name: "Дерев'яні жалюзі",
      img: z6,
      link: "/category/window-blinds/derevyani-zhalyuzi"
    },
    {
      id: 7,
      name: "Римскькі штори",
      img: z7,
      link: "/category/window-blinds/rymski-shtory"
    },
    {
      id: 8,
      name: "Жалюзі Плиссе",
      img: z8,
      link: "/category/window-blinds/zhalyuzi-plysse"
    },
    {
      id: 9,
      name: "Автоматика Жалюзі",
      img: z9,
      link: "/category/window-blinds/avtomatyka-zhalyuzi"
    },
  ];
  return (
    <>
      <PageHero image={b}>Сонцезахисні системи</PageHero>

      <ProductList gridN={3} products={products} />
    </>
  );
};

export default WindowPage;
