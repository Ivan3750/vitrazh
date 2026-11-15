import { site } from "./data/site";
import { windows } from "./catalog/data/windows";

export const dynamic = "force-static";

const pages = [
  ["/", 1.0],
  ["/catalog/vikna/", 0.9],
  ["/calc/", 0.8],
  ["/contact/", 0.8],
  ["/service/", 0.7],
  ["/recovery/", 0.7],
  ["/faq/", 0.6],
  ["/category/vitrazh-windows/", 0.7],
  ["/category/screens/", 0.6],
  ["/category/screens/alyuminiievi-sitky/", 0.5],
  ["/category/screens/dverni-sitky/", 0.5],
  ["/category/screens/plisse-sitky/", 0.5],
  ["/category/screens/ramna-sitka/", 0.5],
  ["/category/screens/rolovi-sitky/", 0.5],
  ["/category/screens/vidkatna-sitka/", 0.5],
  ["/category/window-blinds/", 0.6],
  ["/category/window-blinds/alyuminiievi-zhalyuzi/", 0.5],
  ["/category/window-blinds/avtomatyka-zhalyuzi/", 0.5],
  ["/category/window-blinds/den-nich-tkanovi-rolete/", 0.5],
  ["/category/window-blinds/derevyani-zhalyuzi/", 0.5],
  ["/category/window-blinds/rulonni-shtory-tkanovi-rolete/", 0.5],
  ["/category/window-blinds/rymski-shtory/", 0.5],
  ["/category/window-blinds/vertykalni-tkanovi-zhalyuzi/", 0.5],
  ["/category/window-blinds/zhalyuzi-plysse/", 0.5],
  ["/category/aluminium-systems/", 0.6],
  ["/category/aluminium-systems/partitions-aluminium/", 0.5],
  ["/category/aluminium-systems/partitions-glass/", 0.5],
  ["/category/aluminium-systems/partitions-plastic/", 0.5],
  ["/category/gates-and-rolls/", 0.6],
  ["/category/gates-and-rolls/gates-sectional/", 0.5],
  ["/category/gates-and-rolls/protective-rolls/", 0.5],
  ["/category/gates-and-rolls/roll-gates/", 0.5],
  ["/category/facades/", 0.6],
  ["/category/facades/maco/", 0.5],
  ["/category/facades/siegenia/", 0.5],
  ["/category/facades/vorne/", 0.5],
  ["/category/windows/", 0.5],
  ["/category/windows/rehau/euro-design-60/", 0.4],
  ["/category/windows/rehau/euro-design-70/", 0.4],
  ["/category/windows/rehau/synego/", 0.4],
  ["/category/windows/wds/5s/", 0.4],
  ["/category/windows/wds/6s/", 0.4],
  ["/category/windows/wds/76ad/", 0.4],
  ["/category/windows/wds/76md/", 0.4],
];

export default function sitemap() {
  const now = new Date();
  const products = windows.map((w) => [`/catalog/vikna/${w.slug}/`, 0.8]);
  return [...pages, ...products].map(([path, priority]) => ({
    url: site.url + path,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority,
  }));
}
