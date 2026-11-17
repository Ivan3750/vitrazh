import Link from "next/link";
import Image from "next/image";
import { PROFILE_PRICE_M2, calcPrice, fmt } from "@/lib/pricing";

const KEY = ["Монтажна глибина профілю", "Кількість камер (рама / стулка)", "Коефіцієнт теплопередачі профілю (Uf)"];
const SHORT = { "Монтажна глибина профілю": "Глибина", "Кількість камер (рама / стулка)": "Камер", "Коефіцієнт теплопередачі профілю (Uf)": "Uf" };
const TINTS = ["tint-brand", "tint-accent", "tint-lime"];

export default function ProfileCard({ p, i = 0 }) {
  const specs = KEY.map((k) => p.specs.find((s) => s[0] === k)).filter(Boolean);
  const from = p.slug in PROFILE_PRICE_M2 ? calcPrice({ profile: p.slug, width: 800, height: 1300, sashes: 1, glass: "g2" }).total : null;
  return (
    <Link href={`/catalog/${p.slug}/`} className="card group flex flex-col h-full">
      <div className={`${TINTS[i % 3]} h-56 relative zoom-img`}>
        <Image src={p.image} alt={p.name} fill sizes="(min-width:1024px) 380px, 90vw" className="object-contain p-8" />
      </div>
      <div className="p-6 flex-1 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="small !text-text-3">{p.group === "pvc" ? "ПВХ-профіль" : "Алюмінієва система"}</p>
          <h3 className="h3">{p.name}</h3>
          <p className="small line-clamp-2">{p.tagline}</p>
        </div>
        <dl className="text-sm divide-y divide-line border-y border-line">
          {specs.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-3 py-2">
              <dt className="text-text-2">{SHORT[k]}</dt>
              <dd className="font-semibold text-right">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-auto flex items-center justify-between">
          {from ? <span className="small">від <b className="text-ink text-base">{fmt(from)}</b></span> : <span className="small">Ціна за запитом</span>}
          <span className="text-brand font-semibold text-sm">Детальніше →</span>
        </div>
      </div>
    </Link>
  );
}
