import Link from "next/link";
import Image from "next/image";
import { PROFILE_PRICE_M2, calcPrice, fmt } from "@/lib/pricing";

const KEY = ["Монтажна глибина профілю", "Кількість камер (рама / стулка)", "Коефіцієнт теплопередачі профілю (Uf)"];
const SHORT = { "Монтажна глибина профілю": "Глибина", "Кількість камер (рама / стулка)": "Камер", "Коефіцієнт теплопередачі профілю (Uf)": "Uf" };

export default function ProfileCard({ p }) {
  const specs = KEY.map((k) => p.specs.find((s) => s[0] === k)).filter(Boolean);
  const from = p.slug in PROFILE_PRICE_M2 ? calcPrice({ profile: p.slug, width: 800, height: 1300, sashes: 1, glass: "g2" }).total : null;
  return (
    <Link href={`/catalog/${p.slug}/`} className="card group flex flex-col h-full">
      <div className="bg-[linear-gradient(135deg,#eef3f6_0%,#f8f8f0_100%)] h-60 relative overflow-hidden">
        <span className="absolute -right-8 -top-8 w-32 h-32 bg-lime/40 shard-a" aria-hidden="true" />
        <Image src={p.image} alt={p.name} fill sizes="(min-width:1024px) 380px, 90vw" className="object-contain p-5 group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <p className="eyebrow">{p.group === "pvc" ? "ПВХ-профіль" : "Алюмінієва система"}</p>
        <h3 className="mt-2 text-xl font-extrabold text-navy">{p.name}</h3>
        <p className="mt-1 text-sm text-muted line-clamp-2">{p.tagline}</p>
        <dl className="mt-4 space-y-1 text-sm">
          {specs.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-3 border-b border-line py-1">
              <dt className="text-muted">{SHORT[k]}</dt>
              <dd className="font-semibold text-right">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-auto pt-4 flex items-center justify-between">
          {from ? <span className="text-sm text-muted">від <b className="text-navy text-base">{fmt(from)}</b></span> : <span className="text-sm text-muted">Ціна за запитом</span>}
          <span className="text-brand font-bold text-sm group-hover:underline">Детальніше →</span>
        </div>
      </div>
    </Link>
  );
}
