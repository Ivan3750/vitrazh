import Button from "../Button";

/** Сторінки 404 / «Дякуємо» / помилка: великий вузький напис і одна кнопка. */
export default function StatusPage({ big, title, text, accent = "text-brand-orange" }) {
  return (
    <section className="bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-10 sm:py-14 min-h-[50vh] flex flex-col justify-center">
        <p className={`font-display uppercase leading-[0.85] text-[90px] sm:text-[170px] ${accent}`}>{big}</p>
        <h1 className="font-display !text-[40px] sm:!text-[72px] !leading-[0.95] uppercase mt-4">{title}</h1>
        {text && <p className="mt-6 max-w-xl text-lg text-ink/65">{text}</p>}
        <div className="mt-10">
          <Button link="/" name="На головну" />
        </div>
      </div>
    </section>
  );
}
