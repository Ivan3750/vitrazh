import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROFILES, getProfile } from "@/lib/catalog";
import { PROFILE_PRICE_M2, calcPrice, fmt } from "@/lib/pricing";
import OrderForm from "@/components/OrderForm";
import Icon from "@/components/Icon";

export function generateStaticParams() {
  return PROFILES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProfile(slug);
  if (!p) return {};
  return {
    title: `Вікна ${p.name} — характеристики та ціни`,
    description: `${p.tagline}. ${p.lead[0] ?? ""}`.slice(0, 200),
    alternates: { canonical: `/catalog/${p.slug}/` },
  };
}

export default async function ProfilePage({ params }) {
  const { slug } = await params;
  const p = getProfile(slug);
  if (!p) notFound();
  const sellable = p.slug in PROFILE_PRICE_M2;
  const from = sellable ? calcPrice({ profile: p.slug, width: 800, height: 1300, sashes: 1, glass: "g2" }).total : null;

  return (
    <>
      <section className="border-b border-line bg-[linear-gradient(180deg,#fff_0%,var(--color-soft)_100%)]">
        <div className="container-x py-12 md:py-16 grid gap-12 md:grid-cols-[1.3fr_1fr] items-center">
          <div className="flex flex-col gap-4">
            <nav className="small anim-rise" aria-label="Хлібні крихти">
              <Link href="/" className="hover:text-ink">Головна</Link> <span className="text-text-3">/</span> <Link href="/catalog/" className="hover:text-ink">Каталог</Link> <span className="text-text-3">/</span> <span className="text-ink">{p.name}</span>
            </nav>
            <h1 className="display !text-[clamp(2.25rem,4.6vw,3.5rem)] anim-rise [animation-delay:70ms]">{p.name}</h1>
            <p className="lead max-w-xl anim-rise [animation-delay:140ms]">{p.tagline}</p>
            <div className="flex flex-wrap gap-3 pt-2 anim-rise [animation-delay:210ms]">
              {sellable && <Link href={`/calc/?profile=${p.slug}`} className="btn btn-primary">Розрахувати вартість <Icon name="arrow" size={18} /></Link>}
              <a href="#order" className="btn btn-outline">Консультація</a>
            </div>
            {from && <p className="small anim-rise [animation-delay:280ms]">Вікно 800×1300 мм від <b className="text-ink">{fmt(from)}</b> (орієнтовно)</p>}
          </div>
          <div className="tint-brand relative h-72 md:h-96 border border-line anim-rise [animation-delay:200ms]">
            <Image src={p.image} alt={p.name} fill sizes="(min-width:768px) 420px, 100vw" className="object-contain p-10" priority />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_400px]">
          <div className="flex flex-col gap-16 min-w-0">
            <div className="flex flex-col gap-6">
              <h2 className="h2 !text-[1.75rem]">Опис системи {p.name}</h2>
              <div className="flex flex-col gap-4 text-text-2 leading-relaxed">
                {p.lead.map((t) => <p key={t} className="text-ink text-lg font-medium">{t}</p>)}
                {p.description.map((t) => <p key={t}>{t}</p>)}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="h2 !text-[1.75rem]">Технічні характеристики</h2>
              <dl className="border border-line divide-y divide-line">
                {p.specs.map(([k, v], i) => (
                  <div key={k} className={`grid grid-cols-2 gap-6 px-6 py-4 text-sm ${i % 2 ? "bg-white" : "bg-soft"}`}>
                    <dt className="text-text-2">{k}</dt>
                    <dd className="font-semibold text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {p.features.length > 0 && (
              <div className="flex flex-col gap-6">
                <h2 className="h2 !text-[1.75rem]">Додаткові можливості</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {p.features.map((f, i) => (
                    <div key={f.title} className={`${["tint-brand", "tint-accent", "tint-lime", "tint-soft"][i % 4]} p-6 flex flex-col gap-2`}>
                      <p className="h3 !text-base flex items-center gap-2"><Icon name="check" size={18} className="text-brand" />{f.title}</p>
                      <p className="small">{f.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside id="order" className="self-start lg:sticky lg:top-28 border border-line bg-white p-8 flex flex-col gap-4 shadow-[0_24px_48px_-20px_rgba(25,25,25,.2)]">
            <div className="flex flex-col gap-1">
              <h2 className="h3">Замовити розрахунок</h2>
              <p className="small">Залиште контакти — підготуємо пропозицію на {p.name}.</p>
            </div>
            <OrderForm subject={`Заявка: ${p.name}`} payload={{ Профіль: p.name }} submitLabel="Замовити прорахунок" compact />
          </aside>
        </div>
      </section>
    </>
  );
}
