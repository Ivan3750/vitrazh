import { SITE } from "@/lib/site";
import { PROFILES } from "@/lib/catalog";
import { SHOP_CATEGORIES } from "@/lib/shop";
export const dynamic = "force-static";
export default function sitemap() {
  const pages = ["", "catalog", "calc", "about", "contacts", "delivery", "service", "recovery", "faq", ...SHOP_CATEGORIES.map((c) => `shop/${c.id}`), ...PROFILES.map((p) => `catalog/${p.slug}`)];
  return pages.map((p) => ({ url: `${SITE.url}/${p}${p ? "/" : ""}` }));
}
