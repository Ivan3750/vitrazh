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
      <section className="bg-navy text-white">
        <div className="container-x py-12 md:py-16 grid gap-8 md:grid-cols-[1fr_auto] items-center">
          <div>
            <nav className="text-sm text-white/60" aria-label="Хлібні крихти">
              <Link href="/" className="hover:text-white">Головна</Link> / <Link href="/catalog/" className="hover:text-white">Каталог</Link> / {p.name}
            </nav>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold">{p.name}</h1>
            <p className="mt-3 text-lg text-white/85 max-w-2xl">{p.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {sellable && <Link href={`/calc/?profile=${p.slug}`} className="btn btn-accent">Розрахувати вартість</Link>}
              <a href="#order" className="btn btn-ghost-light">Замовити консультацію</a>
            </div>
            {from && <p className="mt-4 text-white/70 text-sm">Вікно 800×1300 мм від <b className="text-white">{fmt(from)}</b> (орієнтовно)</p>}
          </div>
          <div className="hidden md:block relative bg-white rounded-2xl w-72 h-72">
            <Image src={p.image} alt={p.name} fill sizes="288px" className="object-contain p-5" priority />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_420px]">
          <div>
            <h2 className="h2">Опис системи {p.name}</h2>
            <div className="mt-4 space-y-3 text-muted leading-relaxed">
              {p.lead.map((t) => <p key={t} className="text-ink font-medium">{t}</p>)}
              {p.description.map((t) => <p key={t}>{t}</p>)}
            </div>

            <h2 className="h2 mt-12">Технічні характеристики</h2>
            <dl className="mt-5 rounded-2xl border border-line overflow-hidden">
              {p.specs.map(([k, v], i) => (
                <div key={k} className={`grid grid-cols-[1fr_1fr] gap-4 px-5 py-3 text-sm ${i % 2 ? "bg-white" : "bg-soft"}`}>
                  <dt className="text-muted">{k}</dt>
                  <dd className="font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>

            {p.features.length > 0 && (
              <>
                <h2 className="h2 mt-12">Додаткові можливості</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <div key={f.title} className="rounded-2xl bg-soft p-5">
                      <p className="flex items-center gap-2 font-bold text-navy"><Icon name="check" size={18} className="text-brand" />{f.title}</p>
                      <p className="mt-2 text-sm text-muted leading-relaxed">{f.text}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside id="order" className="self-start lg:sticky lg:top-28 rounded-2xl border border-line p-6 shadow-sm">
            <h2 className="text-xl font-bold text-navy">Замовити розрахунок</h2>
            <p className="text-sm text-muted mt-1 mb-4">Залиште контакти — підготуємо пропозицію на {p.name}.</p>
            <OrderForm subject={`Заявка: ${p.name}`} payload={{ Профіль: p.name }} submitLabel="Замовити прорахунок" compact />
          </aside>
        </div>
      </section>
    </>
  );
}
