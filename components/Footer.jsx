import Link from "next/link";
import Image from "next/image";
import { NAV, SITE } from "@/lib/site";
import { PVC_PROFILES } from "@/lib/catalog";
import { SHOP_CATEGORIES } from "@/lib/shop";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/75 relative overflow-hidden">
      <div className="absolute -right-24 -top-24 w-80 h-80 bg-brand/20 shard-a" aria-hidden="true" />
      <div className="absolute right-40 bottom-0 w-40 h-40 bg-accent/20 shard-c" aria-hidden="true" />
      <div className="container-x relative py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Image src="/logo.png" alt="ВІТРАЖ" width={120} height={64} className="h-16 w-auto" />
          <p className="text-sm leading-relaxed">Офіційний партнер заводу в Україні. Металопластикові вікна, москітні сітки, підвіконня, жалюзі та захисні ролети — з доставкою і монтажем.</p>
          <div className="flex gap-2">
            {[["send", SITE.telegram, "Telegram"], ["chat", SITE.whatsapp, "WhatsApp"], ["insta", SITE.instagram, "Instagram"]].map(([ic, href, label]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid place-items-center w-10 h-10 bg-white/10 hover:bg-accent hover:text-white transition-colors">
                <Icon name={ic} size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-white uppercase tracking-wider text-sm mb-4">Магазин</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/catalog/" className="link-u hover:text-white">Металопластикові вікна</Link></li>
            {SHOP_CATEGORIES.map((c) => <li key={c.id}><Link href={`/shop/${c.id}/`} className="link-u hover:text-white">{c.title}</Link></li>)}
            <li><Link href="/calc/" className="link-u hover:text-white">Калькулятор вікон</Link></li>
            <li><Link href="/cart/" className="link-u hover:text-white">Кошик</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-white uppercase tracking-wider text-sm mb-4">Профільні системи</p>
          <ul className="space-y-2 text-sm">
            {PVC_PROFILES.map((p) => <li key={p.slug}><Link href={`/catalog/${p.slug}/`} className="link-u hover:text-white">{p.name}</Link></li>)}
            {NAV.filter((n) => ["/about/", "/contacts/"].includes(n.href)).map((n) => <li key={n.href}><Link href={n.href} className="link-u hover:text-white">{n.label}</Link></li>)}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-bold text-white uppercase tracking-wider text-sm mb-4">Контакти</p>
          <p className="flex gap-2"><Icon name="phone" size={16} className="mt-0.5 shrink-0 text-lime" /><a href={SITE.phoneHref} className="hover:text-white font-semibold">{SITE.phone}</a></p>
          <p className="flex gap-2"><Icon name="mail" size={16} className="mt-0.5 shrink-0 text-lime" /><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></p>
          <p className="flex gap-2"><Icon name="pin" size={16} className="mt-0.5 shrink-0 text-lime" />{SITE.address}</p>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {SITE.name}. Всі права захищені.
      </div>
    </footer>
  );
}
