import Link from "next/link";
import Image from "next/image";
import { NAV, SITE } from "@/lib/site";
import { PVC_PROFILES } from "@/lib/catalog";
import { SHOP_CATEGORIES } from "@/lib/shop";
import Icon from "./Icon";

const H = ({ children }) => <p className="text-sm font-semibold text-ink mb-4">{children}</p>;
const A = ({ href, children }) => <Link href={href} className="text-text-2 hover:text-ink link-u">{children}</Link>;

export default function Footer() {
  return (
    <footer className="bg-soft border-t border-line">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <Image src="/logo-dark.png" alt="ВІТРАЖ" width={120} height={60} className="h-12 w-auto self-start" />
          <p className="small max-w-xs">Офіційний партнер заводу в Україні. Металопластикові вікна та супутні товари з доставкою і монтажем.</p>
          <div className="flex gap-2">
            {[["send", SITE.telegram, "Telegram"], ["chat", SITE.whatsapp, "WhatsApp"], ["insta", SITE.instagram, "Instagram"]].map(([ic, href, label]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="btn btn-outline btn-sm btn-icon"><Icon name={ic} size={18} /></a>
            ))}
          </div>
        </div>
        <div>
          <H>Магазин</H>
          <ul className="flex flex-col gap-3 text-sm">
            <li><A href="/catalog/">Металопластикові вікна</A></li>
            {SHOP_CATEGORIES.map((c) => <li key={c.id}><A href={`/shop/${c.id}/`}>{c.title}</A></li>)}
            <li><A href="/calc/">Калькулятор вікон</A></li>
          </ul>
        </div>
        <div>
          <H>Профільні системи</H>
          <ul className="flex flex-col gap-3 text-sm">
            {PVC_PROFILES.map((p) => <li key={p.slug}><A href={`/catalog/${p.slug}/`}>{p.name}</A></li>)}
          </ul>
        </div>
        <div>
          <H>Контакти</H>
          <ul className="flex flex-col gap-3 text-sm text-text-2">
            <li className="flex gap-3"><Icon name="phone" size={16} className="mt-0.5 shrink-0 text-text-3" /><a href={SITE.phoneHref} className="text-ink font-semibold hover:text-brand">{SITE.phone}</a></li>
            <li className="flex gap-3"><Icon name="mail" size={16} className="mt-0.5 shrink-0 text-text-3" /><a href={`mailto:${SITE.email}`} className="hover:text-ink">{SITE.email}</a></li>
            <li className="flex gap-3"><Icon name="pin" size={16} className="mt-0.5 shrink-0 text-text-3" />{SITE.address}</li>
            {NAV.filter((n) => ["/about/", "/contacts/"].includes(n.href)).map((n) => <li key={n.href} className="pl-7"><A href={n.href}>{n.label}</A></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x py-6 flex flex-wrap justify-between gap-2 small text-text-3">
          <span>© {new Date().getFullYear()} {SITE.name}. Всі права захищені.</span>
          <span>Київ, Україна</span>
        </div>
      </div>
    </footer>
  );
}
