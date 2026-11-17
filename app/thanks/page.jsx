import Link from "next/link";
import { SITE } from "@/lib/site";
import Icon from "@/components/Icon";

export const metadata = { title: "Дякуємо за замовлення", robots: { index: false } };

export default function ThanksPage() {
  return (
    <section className="py-20 md:py-28 bg-soft">
      <div className="container-x max-w-2xl text-center">
        <span className="anim-rise inline-grid place-items-center w-20 h-20 bg-lime text-ink"><Icon name="check" size={40} /></span>
        <h1 className="mt-6 text-3xl md:text-5xl font-extrabold text-navy anim-rise [animation-delay:100ms]">Замовлення прийнято!</h1>
        <p className="mt-4 text-lg text-muted anim-rise [animation-delay:200ms]">Дякуємо! Менеджер зателефонує найближчим часом, уточнить деталі та узгодить замір і доставку.</p>
        <p className="mt-2 text-muted anim-rise [animation-delay:260ms]">Питання? <a className="text-brand font-semibold" href={SITE.phoneHref}>{SITE.phone}</a></p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 anim-rise [animation-delay:320ms]">
          <Link href="/" className="btn btn-accent">На головну</Link>
          <Link href="/catalog/" className="btn btn-outline">Продовжити покупки</Link>
        </div>
      </div>
    </section>
  );
}
