import Link from "next/link";
import Image from "next/image";
import { PROFILE_PRICE_M2 } from "@/lib/pricing";
import { fmt } from "@/lib/pricing";
import { calcPrice } from "@/lib/pricing";

const KEY = ["Монтажна глибина профілю", "Кількість камер (рама / стулка)", "Коефіцієнт теплопередачі профілю (Uf)"];

export default function ProfileCard({ p }) {
  const specs = KEY.map((k) => p.specs.find((s) => s[0] === k)).filter(Boolean);
  const from = p.slug in PROFILE_PRICE_M2 ? calcPrice({ profile: p.slug, width: 800, height: 1300, sashes: 1, glass: "g2" }).total : null;
  return (
    <Link href={`/catalog/${p.slug}/`} className="group flex flex-col rounded-2xl border border-line bg-white overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all">
      <div className="bg-soft h-60 relative">
        <Image src={p.image} alt={p.name} fill sizes="(min-width:1024px) 380px, 90vw" className="object-contain p-5 group-hover:scale-105 transition-transform" />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <p className="eyebrow">{p.group === "pvc" ? "ПВХ-профіль" : "Алюмінієва система"}</p>
        <h3 className="mt-1 text-xl font-bold text-navy">{p.name}</h3>
        <p className="mt-1 text-sm text-muted line-clamp-2">{p.tagline}</p>
        <dl className="mt-4 space-y-1 text-sm">
          {specs.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-3 border-b border-line/70 py-1">
              <dt className="text-muted">{k.replace(" профілю", "").replace("Коефіцієнт теплопередачі (Uf)", "Uf")}</dt>
              <dd className="font-medium text-right">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-auto pt-4 flex items-center justify-between">
          {from ? <span className="text-sm text-muted">від <b className="text-navy text-base">{fmt(from)}</b></span> : <span className="text-sm text-muted">Ціна за запитом</span>}
          <span className="text-brand font-semibold text-sm group-hover:underline">Детальніше →</span>
        </div>
      </div>
    </Link>
  );
}
