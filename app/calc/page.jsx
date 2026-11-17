import Link from "next/link";
import Calculator from "@/components/Calculator";

export const metadata = {
  title: "Калькулятор вартості вікон онлайн",
  description: "Розрахуйте вартість металопластикових вікон онлайн: оберіть профіль, конфігурацію, розміри, склопакет, колір, фурнітуру та послуги монтажу.",
  alternates: { canonical: "/calc/" },
};

export default function CalcPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-x py-12 md:py-16">
          <nav className="text-sm text-white/60" aria-label="Хлібні крихти"><Link href="/" className="hover:text-white">Головна</Link> / Калькулятор</nav>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold">Калькулятор вікон</h1>
          <p className="mt-3 text-white/80 max-w-2xl">Налаштуйте вікно крок за кроком — вартість оновлюється одразу. Готовий розрахунок можна надіслати нам однією кнопкою.</p>
        </div>
      </section>
      <section className="py-10 md:py-14 bg-soft">
        <div className="container-x"><Calculator /></div>
      </section>
    </>
  );
}
