import Link from "next/link";
import CatalogGrid from "../CatalogGrid";
import { Reveal, SplitHeading } from "../../components/site/motion";

export const metadata = {
  title: "Металопластикові вікна — каталог і замовлення | Вітраж",
  description:
    "Каталог металопластикових вікон: ПВХ-профілі Aluplast і VIKNALAND, алюмінієві системи Aluprof і KMD. Характеристики, фото та замовлення онлайн.",
  openGraph: {
    title: "Металопластикові вікна — каталог",
    url: "https://vitrazh.com.ua/catalog/vikna/",
  },
};

export default function WindowsCatalogPage() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 pt-5 sm:pt-7 pb-1">
          <nav className="text-sm text-ink/50 mb-4 uppercase tracking-[0.12em]" aria-label="Хлібні крихти">
            <Link href="/" className="hover:text-ink">Головна</Link> /{" "}
            <span>Каталог</span> / <span className="text-ink font-semibold">Вікна</span>
          </nav>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-end">
            <SplitHeading
              as="h1"
              text="Каталог вікон"
              classes={{ вікон: "text-brand-orange" }}
              className="font-display !text-[44px] sm:!text-[76px] lg:!text-[96px] uppercase !leading-[0.9]"
            />
            <Reveal delay={0.3}>
              <p className="text-lg text-ink/65 max-w-md">
                Оберіть профільну систему під ваші задачі: від практичних ПВХ-рішень для
                квартир до алюмінієвих і фасадних систем для великих об'єктів.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CatalogGrid />

      <section className="bg-ink text-white py-12 px-4 sm:px-6">
        <Reveal className="max-w-[1320px] mx-auto grid md:grid-cols-[1fr_1.3fr] gap-8 md:gap-16">
          <h2 className="font-display text-5xl sm:text-6xl uppercase leading-[0.95]">Як обрати вікна</h2>
          <p className="text-white/70 text-lg">
            Вікно складається з профілю, склопакета та фурнітури. Від глибини профілю й
            кількості камер залежать теплота в оселі, звукоізоляція та ціна. Не впевнені, що
            обрати — напишіть нам, і ми підберемо рішення під ваш бюджет.{" "}
            <Link href="/contact/" className="text-brand-lime font-semibold underline underline-offset-4">
              Звʼязатися
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
