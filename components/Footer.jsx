import Link from "next/link";
import Image from "next/image";
import { NAV, SITE } from "@/lib/site";
import { PVC_PROFILES } from "@/lib/catalog";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80 mt-0">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <Image src="/logo.png" alt="ВІТРАЖ" width={120} height={64} className="h-14 w-auto" />
          <p className="text-sm leading-relaxed">Металопластикові вікна: підбір, замір, виготовлення та монтаж у Києві та області.</p>
          <div className="flex gap-3">
            {[["send", SITE.telegram, "Telegram"], ["chat", SITE.whatsapp, "WhatsApp"], ["insta", SITE.instagram, "Instagram"]].map(([ic, href, label]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors">
                <Icon name={ic} size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">Сторінки</p>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">Профільні системи</p>
          <ul className="space-y-2 text-sm">
            {PVC_PROFILES.map((p) => <li key={p.slug}><Link href={`/catalog/${p.slug}/`} className="hover:text-white">{p.name}</Link></li>)}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-white mb-3">Контакти</p>
          <p className="flex gap-2"><Icon name="phone" size={16} className="mt-0.5 shrink-0" /><a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a></p>
          <p className="flex gap-2"><Icon name="mail" size={16} className="mt-0.5 shrink-0" /><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></p>
          <p className="flex gap-2"><Icon name="pin" size={16} className="mt-0.5 shrink-0" />{SITE.address}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {SITE.name}. Всі права захищені.
      </div>
    </footer>
  );
}
