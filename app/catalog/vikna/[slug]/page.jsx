import Link from "next/link";
import { notFound } from "next/navigation";
import { windows, getWindow, badgeOf, toneClass, materialOf } from "../../data/windows";
import { Reveal } from "../../../components/site/motion";
import JsonLd from "../../../components/site/JsonLd";
import { site, abs } from "../../../data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return windows.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const w = getWindow(slug);
  if (!w) return { title: "Вікна | Вітраж" };
  return {
    title: `${w.name} — ${w.system}: характеристики та замовлення | Вітраж`,
    description: w.description.slice(0, 160),
    alternates: { canonical: `/catalog/vikna/${w.slug}/` },
    openGraph: {
      type: "website",
      locale: "uk_UA",
      siteName: site.name,
      title: `${w.name} — ${w.system}`,
      description: w.tagline,
      url: `/catalog/vikna/${w.slug}/`,
      images: [{ url: site.ogImage, width: 1200, height: 630 }],
    },
  };
}

export default async function WindowProductPage({ params }) {
  const { slug } = await params;
  const w = getWindow(slug);
  if (!w) notFound();
  const badge = badgeOf(w);
  const others = windows.filter((x) => x.slug !== w.slug);
  const related = [...others.filter((x) => x.material === w.material), ...others.filter((x) => x.material !== w.material)].slice(0, 3);

  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Головна", item: abs("/") },
        { "@type": "ListItem", position: 2, name: "Вікна", item: abs("/catalog/vikna/") },
        { "@type": "ListItem", position: 3, name: w.name, item: abs(`/catalog/vikna/${w.slug}/`) },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: w.name,
      description: w.description,
      image: abs(w.image.src),
      url: abs(`/catalog/vikna/${w.slug}/`),
      category: materialOf(w.material).label,
      brand: { "@type": "Brand", name: w.brand },
      additionalProperty: w.specs.map((s) => ({ "@type": "PropertyValue", name: s.key, value: s.value })),
    },
  ];

  return (
    <>
      {ld.map((d, i) => (
        <JsonLd key={i} data={d} />
      ))}
      <section className="bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 pt-5 pb-8">
          <nav className="text-sm text-ink/50 mb-4 uppercase tracking-[0.12em]" aria-label="Хлібні крихти">
            <Link href="/" className="hover:text-ink">Головна</Link> /{" "}
            <Link href="/catalog/vikna/" className="hover:text-ink">Вікна</Link> /{" "}
            <span className="text-ink font-semibold">{w.name}</span>
          </nav>

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-stretch">
            <Reveal>
              <div className="h-full min-h-[420px] bg-paper p-8 grid place-items-center">
                <img src={w.image.src} width={w.image.width} height={w.image.height} alt={`${w.name} — профільна система ${w.brand}`} fetchPriority="high" className="max-h-[520px] w-auto max-w-full object-contain" />
              </div>
            </Reveal>

            <Reveal delay={0.15} className="flex flex-col gap-5 justify-center">
              <div className="flex flex-wrap items-center gap-2">
                <span className={` px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${toneClass[badge.tone]}`}>
                  {materialOf(w.material).label}
                </span>
                <span className="text-sm uppercase tracking-[0.14em] text-ink/50">{w.system}</span>
              </div>
              <h1 className="font-display !text-[44px] sm:!text-[76px] !leading-[0.92] uppercase">{w.name}</h1>
              <p className="text-xl text-ink/80">{w.tagline}</p>
              <p className="text-ink/65 max-w-xl">{w.description}</p>

              <ul className="flex flex-wrap gap-2">
                {w.highlights.map((h) => (
                  <li key={h} className="px-4 py-1.5 border border-ink/20 text-sm font-medium">{h}</li>
                ))}
              </ul>

              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-ink/50 mb-2">Застосування</p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1">
                  {w.usage.map((u) => (
                    <li key={u} className="flex gap-2 text-ink/80"><span className="mt-2 w-2 h-2 bg-brand-orange shrink-0" />{u}</li>
                  ))}
                </ul>
              </div>

              {w.colors.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-ink/50 mb-2">Кольори та оздоблення</p>
                  <p className="text-ink/80">{w.colors.join(" · ")}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href={`/contact/?product=${encodeURIComponent(w.name)}`} className="bg-brand-orange text-white hover:bg-ink transition-colors px-9 py-4 uppercase font-semibold tracking-wider">
                  Замовити
                </Link>
                <Link href="/calc/" className="border-2 border-ink hover:bg-ink hover:text-white transition-colors px-9 py-4 uppercase font-semibold tracking-wider">
                  Розрахувати вартість
                </Link>
              </div>
              <p className="text-sm text-ink/50">Точну ціну менеджер розрахує під розмір, склопакет, фурнітуру та колір.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white py-12 px-4 sm:px-6">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="font-display text-5xl sm:text-6xl uppercase mb-6">Характеристики</h2>
          <dl className="grid md:grid-cols-2 gap-x-14">
            {w.specs.map((s, i) => (
              <Reveal key={s.key} delay={(i % 2) * 0.08} y={20}>
                <div className="flex justify-between items-baseline gap-4 py-4 border-t border-white/20">
                  <dt className="text-white/60">{s.key}</dt>
                  <dd className="text-right font-display text-xl">{s.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-paper py-12 px-4 sm:px-6">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="font-display text-5xl sm:text-6xl uppercase mb-6">Інші системи</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.1}>
                <Link href={`/catalog/vikna/${r.slug}/`} className="group block bg-white overflow-hidden">
                  <div className="aspect-[4/3] p-4 grid place-items-center">
                    <img src={r.image.src} alt={r.name} className="h-full w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <p className="p-5 border-t border-ink/10 font-display text-2xl uppercase">{r.name}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
