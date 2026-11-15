import Calc from "../components/Calc";

export const metadata = {
  alternates: { canonical: "/calc/" },
  title: "Калькулятор вартості вікон",
  description:
    "Онлайн-калькулятор VitraZH допоможе швидко розрахувати вартість металопластикових вікон у Києві та області. Точний прорахунок, зручність та прозорі ціни.",
  keywords:
    "калькулятор вікон, розрахунок вартості вікон Київ, ціна металопластикових вікон, прорахунок вікон онлайн, VitraZH калькулятор",
  robots: "index, follow",
  openGraph: {
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    type: "website",
    title: "Калькулятор вартості вікон VitraZH",
    description:
      "Розрахуйте онлайн вартість металопластикових вікон. Безкоштовний прорахунок від VitraZH у Києві та області.",
    siteName: "VitraZH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Онлайн-калькулятор вікон VitraZH",
    description:
      "Зручний калькулятор для прорахунку вартості вікон, у Києві та області. Прозорі ціни та якісний монтаж.",
  },
};

export default function CalcPage() {
  return <Calc />;
}
