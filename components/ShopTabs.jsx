import Link from "next/link";
import { SHOP_CATEGORIES } from "@/lib/shop";

// Перемикач розділів магазину (вікна + супутні товари)
export default function ShopTabs({ active = "windows" }) {
  const tabs = [{ id: "windows", title: "Вікна", href: "/catalog/" }, ...SHOP_CATEGORIES.map((c) => ({ id: c.id, title: c.title, href: `/shop/${c.id}/` }))];
  return (
    <nav className="flex gap-2 overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0 pb-1" aria-label="Розділи магазину">
      {tabs.map((t) => (
        <Link key={t.id} href={t.href} aria-current={t.id === active ? "page" : undefined}
          className={`shrink-0 h-11 px-5 inline-flex items-center text-sm font-semibold transition-colors ${t.id === active ? "bg-ink text-bg" : "bg-surface text-text-2 hover:text-ink hover:bg-surface-2"}`}>{t.title}</Link>
      ))}
    </nav>
  );
}
