import Link from "next/link";
import { SITE } from "@/lib/site";
import Icon from "@/components/Icon";

export const metadata = { title: "Дякуємо за замовлення", robots: { index: false } };

export default function ThanksPage() {
  return (
    <section className="section bg-[radial-gradient(50%_60%_at_50%_0%,var(--color-lime-50)_0%,transparent_70%)]">
      <div className="container-x max-w-xl flex flex-col items-center gap-6 text-center">
        <span className="anim-pop grid place-items-center w-16 h-16 bg-lime text-ink"><Icon name="check" size={32} /></span>
        <h1 className="display !text-[clamp(2rem,4.4vw,3rem)] anim-rise [animation-delay:100ms]">Замовлення прийнято</h1>
        <p className="lead anim-rise [animation-delay:180ms]">Дякуємо! Менеджер зателефонує найближчим часом, уточнить деталі та узгодить замір і доставку.</p>
        <p className="small anim-rise [animation-delay:240ms]">Питання? <a className="text-brand font-semibold" href={SITE.phoneHref}>{SITE.phone}</a></p>
        <div className="flex flex-wrap justify-center gap-3 anim-rise [animation-delay:300ms]">
          <Link href="/" className="btn btn-dark">На головну</Link>
          <Link href="/catalog/" className="btn btn-outline">Продовжити покупки</Link>
        </div>
      </div>
    </section>
  );
}
