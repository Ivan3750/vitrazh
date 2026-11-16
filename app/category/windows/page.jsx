import WindowsCatalog from "@/app/components/WindowsCatalog";
import SectionContact from "@/app/components/SectionContact";
import b from "@/app/assets/bg-wds-6s.jpg";
import wds5s from "@/app/assets/images/products/windows/catalog/wds-5s.webp";
import wds76md from "@/app/assets/images/products/windows/catalog/wds-76md.webp";
import wds76ad from "@/app/assets/images/products/windows/catalog/wds-76ad.webp";
import rehauE60 from "@/app/assets/images/products/windows/catalog/rehau-euro-design-60.webp";
import rehauE70 from "@/app/assets/images/products/windows/catalog/rehau-euro-design-70.webp";
import rehauSMD from "@/app/assets/images/products/windows/catalog/rehau-synego-md.webp";
import { goodwinProducts } from "./goodwin/goodwinData";

export const metadata = {
  title: "Вікна: ПВХ та алюмінієві системи Goodwin, REHAU, WDS | Вітраж",
  description:
    "Пропонуємо широкий вибір металопластикових вікон: WDS, REHAU та інші. Надійні вікна для дому та офісу за вигідною ціною.",
  keywords:
    "металопластикові вікна, WDS 5S, WDS 6S, REHAU Euro-Design, пластикові вікна, вікна купити, якісні вікна",
  openGraph: {
    title: "Металопластикові вікна - широкий вибір та якість",
    description:
      "Обирайте надійні металопластикові вікна WDS, REHAU за вигідною ціною. Якість, сервіс та швидка доставка.",
    url: "https://vitrazh.com.ua/category/windows",
  },
  twitter: {
    card: "summary_large_image",
    title: "Металопластикові вікна - широкий вибір та якість",
    description:
      "Обирайте надійні металопластикові вікна WDS, REHAU за вигідною ціною.",
  },
};

const otherProducts = [
  {
    id: "rehau-60",
    brand: "REHAU",
    material: "pvc",
    name: "REHAU Euro-Design 60",
    img: rehauE60,
    link: "/category/windows/rehau/euro-design-60",
    specs: [
      ["Монтажна глибина", "60 мм"],
      ["Кількість камер", "3"],
      ["Склопакет", "до 33 мм"],
    ],
  },
  {
    id: "rehau-70",
    brand: "REHAU",
    material: "pvc",
    name: "REHAU Euro-Design 70",
    img: rehauE70,
    link: "/category/windows/rehau/euro-design-70",
    specs: [
      ["Монтажна глибина", "70 мм"],
      ["Кількість камер", "5"],
      ["Склопакет", "до 41 мм"],
    ],
  },
  {
    id: "rehau-synego",
    brand: "REHAU",
    material: "pvc",
    name: "REHAU Synego MD",
    img: rehauSMD,
    link: "/category/windows/rehau/synego",
    specs: [
      ["Монтажна глибина", "80 мм"],
      ["Кількість камер", "7 / 6"],
      ["Склопакет", "до 51 мм"],
    ],
  },
  {
    id: "wds-5s",
    brand: "WDS",
    material: "pvc",
    name: "WDS 5S",
    img: wds5s,
    link: "/category/windows/wds/5s",
    specs: [
      ["Монтажна глибина", "60 мм"],
      ["Кількість камер", "5"],
      ["Склопакет", "до 32 мм"],
    ],
  },
  {
    id: "wds-76ad",
    brand: "WDS",
    material: "pvc",
    name: "WDS 76AD",
    img: wds76ad,
    link: "/category/windows/wds/76ad",
    specs: [
      ["Монтажна глибина", "76 мм"],
      ["Кількість камер", "5"],
      ["Склопакет", "до 48 мм"],
    ],
  },
  {
    id: "wds-76md",
    brand: "WDS",
    material: "pvc",
    name: "WDS 76MD",
    img: wds76md,
    link: "/category/windows/wds/76md",
    specs: [
      ["Монтажна глибина", "76 мм"],
      ["Кількість камер", "6"],
      ["Склопакет", "до 48 мм"],
    ],
  },
];

const goodwinCatalog = goodwinProducts.map((p) => ({
  id: p.slug,
  brand: p.brand,
  material: p.material,
  name: p.name,
  img: p.img,
  link: `/category/windows/goodwin/${p.slug}`,
  specs: p.cardSpecs.slice(0, 3),
}));

const products = [...goodwinCatalog, ...otherProducts];

const WindowPage = () => {
  return (
    <>
      <section className="relative h-[340px] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${b.src})` }}
        />
        <div className="relative z-10 px-4 text-center">
          <h1 className="text-white font-bold">Вікна</h1>
          <p className="text-white/80 text-[18px] mt-3 max-w-[640px]">
            Профільні системи ПВХ та алюмінію для вікон, дверей і фасадів:
            Goodwin, REHAU, WDS, Aluprof, KMD.
          </p>
        </div>
      </section>

      <WindowsCatalog products={products} />

      <section className="max-w-[1000px] mx-auto px-4 sm:px-6 pb-4 text-[#555555] text-[17px] leading-relaxed">
        <h2 className="text-[28px] text-[#0F0F0F] mb-4">
          Як обрати профільну систему
        </h2>
        <p className="mb-4">
          Тепло, тиша та безпека вікна залежать від профілю: кількості камер,
          монтажної глибини та максимальної товщини склопакета. Для квартир
          із центральним опаленням достатньо 5-камерних систем глибиною
          60–70 мм, для приватних будинків і регіонів із суворою зимою
          краще обирати 76–80 мм із широким склопакетом.
        </p>
        <p>
          Алюмінієві системи Aluprof та KMD підходять для великих
          засклених поверхонь, терас і фасадів, де потрібні тонкі видимі
          контури та висока несуча здатність. Не знаєте, що обрати —
          скористайтеся калькулятором або зв'яжіться з нами.
        </p>
      </section>

      <SectionContact />
    </>
  );
};

export default WindowPage;
