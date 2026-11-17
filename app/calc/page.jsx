import Link from "next/link";
import Calculator from "@/components/Calculator";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Калькулятор вартості вікон онлайн",
  description: "Розрахуйте вартість металопластикових вікон онлайн: оберіть профіль, конфігурацію, розміри, склопакет, колір, фурнітуру та послуги монтажу.",
  alternates: { canonical: "/calc/" },
};

export default function CalcPage() {
  return (
    <>
      <PageHero title="Калькулятор вікон" lead="Налаштуйте вікно крок за кроком — вартість оновлюється одразу. Готовий розрахунок додайте в кошик або надішліть нам." crumbs={[["Калькулятор"]]} />
      <section className="py-10 md:py-14 bg-soft">
        <div className="container-x"><Calculator /></div>
      </section>
    </>
  );
}
