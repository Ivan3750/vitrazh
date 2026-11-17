import profiles from "./profiles.json";
import { calcPrice, GLASS, COLORS, PROFILE_PRICE_M2 } from "./pricing";

export const PROFILES = profiles;
export const PVC_PROFILES = profiles.filter((p) => p.group === "pvc");
export const ALU_PROFILES = profiles.filter((p) => p.group === "alu");
export const getProfile = (slug) => profiles.find((p) => p.slug === slug);

// Конфігурації вікон. Колонки: "F" — глухе, "T" — поворотно-відкидне (ліве/праве за позицією).
export const CONFIGS = [
  { id: "1f", label: "Глухе", cols: ["F"] },
  { id: "1t", label: "Одностулкове", cols: ["T"] },
  { id: "2ft", label: "Двостулкове (одна глуха)", cols: ["F", "T"] },
  { id: "2tt", label: "Двостулкове", cols: ["T", "T"] },
  { id: "3ftf", label: "Тристулкове (центр відкривається)", cols: ["F", "T", "F"] },
  { id: "3ttf", label: "Тристулкове", cols: ["T", "T", "F"] },
];
export const getConfig = (id) => CONFIGS.find((c) => c.id === id);
export const sashesOf = (cfg) => cfg.cols.filter((c) => c === "T").length;

// Типові розміри для карток каталогу, мм
const PRESETS = [
  { config: "1f", width: 600, height: 1300 },
  { config: "1t", width: 800, height: 1300 },
  { config: "1t", width: 600, height: 900 },
  { config: "2ft", width: 1100, height: 1300 },
  { config: "2tt", width: 1300, height: 1400 },
  { config: "2tt", width: 1500, height: 1400 },
  { config: "3ftf", width: 1900, height: 1400 },
  { config: "3ttf", width: 2100, height: 1400 },
];

const CATALOG_COLORS = ["white", "anthracite", "golden-oak"];
const CATALOG_GLASS = ["g1", "g2", "g2e"];

export function buildCatalog() {
  const items = [];
  for (const p of PVC_PROFILES) {
    if (!(p.slug in PROFILE_PRICE_M2)) continue;
    for (const pr of PRESETS) {
      const cfg = getConfig(pr.config);
      for (const glass of CATALOG_GLASS) {
        // Щоб каталог не роздувався: однокамерний — лише для базових профілів
        if (glass === "g1" && !["lider-58", "76-ad"].includes(p.slug)) continue;
        if (glass === "g2e" && p.slug === "lider-58") continue;
        for (const color of CATALOG_COLORS) {
          if (color !== "white" && glass !== "g2") continue;
          const sashes = sashesOf(cfg);
          const { total } = calcPrice({ profile: p.slug, width: pr.width, height: pr.height, sashes, glass, color });
          items.push({
            id: `${p.slug}-${pr.config}-${pr.width}x${pr.height}-${glass}-${color}`,
            profile: p.slug,
            profileName: p.name,
            config: pr.config,
            configLabel: cfg.label,
            sashes: cfg.cols.length,
            openSashes: sashes,
            width: pr.width,
            height: pr.height,
            glass,
            glassLabel: GLASS.find((g) => g.id === glass).label,
            color,
            colorLabel: COLORS.find((c) => c.id === color).label,
            price: Math.round(total / 10) * 10,
          });
        }
      }
    }
  }
  return items;
}
