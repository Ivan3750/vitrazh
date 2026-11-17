import Link from "next/link";
import Image from "next/image";
import { INFO, SITE } from "@/lib/site";
import { PVC_PROFILES } from "@/lib/catalog";
import { SHOP_CATEGORIES } from "@/lib/shop";
import Icon from "./Icon";

const H = ({ children }) => <p className="eyebrow mb-5">{children}</p>;
const A = ({ href, children }) => <Link href={href} className="text-text-2 hover:text-accent-fg transition-colors inline-flex items-center min-h-9">{children}</Link>;

export default function Footer() {
  return (
    <footer className="theme-dark relative bg-deep border-t border-line overflow-hidden">
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] glow opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="container-x relative pt-16 md:pt-24 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-12 border-b border-line">
          <h2 className="h2 max-w-xl">Готові змінити свої вікна? <span className="accent-text">Зателефонуйте.</span></h2>
          <div className="flex flex-wrap gap-3">
            <a href={SITE.phoneHref} className="btn btn-primary"><Icon name="phone" size={18} /> {SITE.phone}</a>
            <Link href="/contacts/" className="btn btn-outline">Написати нам</Link>
          </div>
        </div>
        <div className="grid gap-12 pt-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <Image src="/logo.png" alt="ВІТРАЖ" width={120} height={60} className="h-14 w-auto self-start" />
            <p className="small max-w-xs">Офіційний партнер заводу в Україні. Металопластикові вікна та супутні товари з доставкою і монтажем.</p>
            <div className="flex gap-2">
              {[["send", SITE.telegram, "Telegram"], ["chat", SITE.whatsapp, "WhatsApp"], ["insta", SITE.instagram, "Instagram"]].map(([ic, href, label]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="btn btn-outline btn-sm btn-icon"><Icon name={ic} size={18} /></a>
              ))}
            </div>
          </div>
          <div>
            <H>Магазин</H>
            <ul className="flex flex-col gap-0.5 text-sm">
              <li><A href="/catalog/">Металопластикові вікна</A></li>
              {SHOP_CATEGORIES.map((c) => <li key={c.id}><A href={`/shop/${c.id}/`}>{c.title}</A></li>)}
              <li><A href="/calc/">Калькулятор</A></li>
            </ul>
          </div>
          <div>
            <H>Профілі</H>
            <ul className="flex flex-col gap-0.5 text-sm">
              {PVC_PROFILES.map((p) => <li key={p.slug}><A href={`/catalog/${p.slug}/`}>{p.name}</A></li>)}
            </ul>
          </div>
          <div>
            <H>Інформація</H>
            <ul className="flex flex-col gap-0.5 text-sm">
              {INFO.map((n) => <li key={n.href}><A href={n.href}>{n.label}</A></li>)}
              <li><A href="/about/">Про компанію</A></li>
              <li><A href="/contacts/">Контакти</A></li>
            </ul>
          </div>
          <div>
            <H>Контакти</H>
            <ul className="flex flex-col gap-3 text-sm text-text-2">
              <li className="flex gap-3"><Icon name="phone" size={16} className="mt-1 shrink-0 text-accent-fg" /><a href={SITE.phoneHref} className="text-ink font-semibold hover:text-accent-fg inline-flex items-center min-h-9">{SITE.phone}</a></li>
              <li className="flex gap-3"><Icon name="mail" size={16} className="mt-1 shrink-0 text-accent-fg" /><a href={`mailto:${SITE.email}`} className="hover:text-accent-fg break-all inline-flex items-center min-h-9">{SITE.email}</a></li>
              <li className="flex gap-3"><Icon name="pin" size={16} className="mt-1 shrink-0 text-accent-fg" />{SITE.address}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-line relative">
        <div className="container-x py-6 flex flex-wrap justify-between gap-2 small !text-text-3">
          <span>© {new Date().getFullYear()} {SITE.name}. Всі права захищені.</span>
          <span>Київ, Україна</span>
        </div>
      </div>
    </footer>
  );
}
