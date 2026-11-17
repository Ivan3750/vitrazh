import Calc from "../components/Calc";

export const metadata = {
  title: "Калькулятор вартості вікон",
  description:
    "Онлайн-калькулятор VitraZH допоможе швидко розрахувати вартість металопластикових вікон у Києві та області. Точний прорахунок, зручність та прозорі ціни.",
  keywords:
    "калькулятор вікон, розрахунок вартості вікон Київ, ціна металопластикових вікон, прорахунок вікон онлайн, VitraZH калькулятор",
  robots: "index, follow",
  openGraph: {
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
