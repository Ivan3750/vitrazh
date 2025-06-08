import ProductList from "@/app/components/ProductList";
import b from "@/app/assets/images/products/blinds/background.jpg";
import z1 from "@/app/assets/images/products/blinds/z1.jpg";
import z2 from "@/app/assets/images/products/blinds/z2.jpg";
import z3 from "@/app/assets/images/products/blinds/z3.jpg";
import z4 from "@/app/assets/images/products/blinds/z4.jpg";
import z5 from "@/app/assets/images/products/blinds/z5.jpg";
import z6 from "@/app/assets/images/products/blinds/z6.jpg";
import z7 from "@/app/assets/images/products/blinds/z7.jpg";
import z8 from "@/app/assets/images/products/blinds/z8.jpg";
import z9 from "@/app/assets/images/products/blinds/z9.jpg";


export const metadata = {
  title: "Штори та жалюзі — стиль та комфорт для вашого дому | Vitrazh",
  description: "Пропонуємо широкий вибір штор та жалюзі: рулонні, вертикальні, горизонтальні та тканинні. Ідеальне рішення для будь-якого інтер'єру.",
  keywords: "штори, жалюзі, рулонні штори, вертикальні жалюзі, горизонтальні жалюзі, тканинні штори, купити штори, жалюзі для дому",
  openGraph: {
    title: "Штори та жалюзі — стиль та комфорт для вашого дому",
    description: "Обирайте якісні штори та жалюзі різних видів. Стиль, комфорт та зручність для кожного приміщення.",
    url: "https://vitrazh.com.ua/category/window-blinds",
  },
  twitter: {
    title: "Штори та жалюзі — стиль та комфорт для вашого дому",
    description: "Обирайте якісні штори та жалюзі різних видів за вигідною ціною.",
  },
};



const WindowPage = () => {
  const products = [
  {
    id: 1,
    name: "Алюмінієві жалюзі",
    img: z1,
    link:"/"
  },
  {
    id: 2,
    name: "Вертикальні тканьові жалюзі",
    img: z2,
    link:"/"
  },
  {
    id: 3,
    name: "Рулонні штори тканьові ролети",
    img: z3,
    link:"/"
  },
  {
    id: 4,
    name: "ДЕНЬ - НІЧ тканьові ролети",
    img: z4,
    link:"/"
  },
  {
    id: 5,
    name: "Преміум концепт",
    img: z5,
    link:"/"
  },
  {
    id: 6,
    name: "Дерев'яні жалюзі",
    img: z6,
    link:"/"
  },
  {
    id: 7,
    name: "Римскькі штори",
    img: z7,
    link:"/"
  },
  {
    id: 8,
    name: "Жалюзі Плиссе",
    img: z8,
    link:"/"
  },
  {
    id: 9,
    name: "Автоматика Жалюзі",
    img: z9,
    link:"/"
  },
];
  return (
    <>
      <section className="relative h-[600px] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${b.src})`,
          }}
        />
        <h1 className="relative text-white text-4xl font-bold z-10">
          Віконні жалюзі та ролети
        </h1>
      </section>

      <ProductList products={products} />
    </>
  );
};

export default WindowPage;
