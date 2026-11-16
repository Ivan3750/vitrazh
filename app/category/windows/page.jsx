import PageHero from "@/app/components/site/PageHero";
import ProductList from "@/app/components/ProductList";
import b from "@/app/assets/bg-wds-6s.jpg";
import wds5s from "@/app/assets/images-webp/products/windows/wds-5s-t.webp";
import wds76md from "@/app/assets/images-webp/products/windows/wds-76MD-t.webp";
import wds76ad from "@/app/assets/images-webp/products/windows/wds-76AD-t.webp";
import rehauE60 from "@/app/assets/images-webp/products/windows/REHAU_Euro-Design_60-t.webp";
import rehauE70 from "@/app/assets/images-webp/products/windows/REHAU_Euro-Design_70-t.webp";
import rehauSMD from "@/app/assets/images-webp/products/windows/REHAU_Synego_MD-t.webp";
import wds from "@/app/assets/images-webp/icons/wds.webp";
import rehau from "@/app/assets/images-webp/icons/rehau.webp";


export const metadata = {
  alternates: { canonical: "/category/windows/" },
  title: "Металопластикові вікна - широкий вибір та якість | Вітраж",
  description:
    "Пропонуємо широкий вибір металопластикових вікон: WDS, REHAU та інші. Надійні вікна для дому та офісу за вигідною ціною.",
  keywords:
    "металопластикові вікна, WDS 5S, WDS 6S, REHAU Euro-Design, пластикові вікна, вікна купити, якісні вікна",
  openGraph: {
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
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

const WindowPage = () => {
  const productsWDS = [
    {
      id: 1,
      name: "WDS 5S",
      img: wds5s,
      link: "/category/windows/wds/5s",
    },
    /*   {
    id: 2,
    name: "WDS 6S",
    img: wds6s,
    link:"/category/windows/wds-6s"
  }, */
    {
      id: 3,
      name: "WDS 76AD",
      img: wds76ad,
      link: "/category/windows/wds/76ad",
    },
    {
      id: 4,
      name: "WDS 76MD",
      img: wds76md,
      link: "/category/windows/wds/76md",
    },
  ];
  const productsRehau = [
    {
      id: 5,
      name: "REHAU Euro-Design 60",
      img: rehauE60,
      link: "/category/windows/rehau/euro-design-60",
    },
    {
      id: 6,
      name: "REHAU Euro-Design 70",
      img: rehauE70,
      link: "/category/windows/rehau/euro-design-70",
    },
    {
      id: 7,
      name: "REHAU Synego MD",
      img: rehauSMD,
      link: "/category/windows/rehau/synego",
    },
  ];
  return (
    <>
      <PageHero image={b}>Металопластикові вікна</PageHero>
      <div className="my-[20px] flex justify-center">
        <img loading="lazy" decoding="async"
          src={rehau.src}
          alt="Rehau Logo"
          width={"400px"}
          height={"500px"}
        />
      </div>
      <ProductList products={productsRehau} gridN={3} />
      <div className="my-[20px] flex justify-center">
        <img loading="lazy" decoding="async" src={wds.src} alt="WDS Logo" width={"400px"} height={"500px"} />
      </div>
      <ProductList products={productsWDS} gridN={3} />
    </>
  );
};

export default WindowPage;
