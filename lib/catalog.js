import profiles from "./profiles.json";
import { calcPrice, PROFILE_PRICE_M2 } from "./pricing";

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

// Мітки профілів для карток
export const PROFILE_TAGS = {
  "lider-58": { tag: "Економ", note: "Базове рішення" },
  "76-ad": { tag: "Оптимально", note: "6 камер" },
  "ideal-4000": { tag: "Хіт", note: "Захист до RC2" },
  "neo-76-ad": { tag: "Енергоефективне", note: "Скло до 48 мм" },
  "neo-76-md": { tag: "Преміум", note: "Гнучке ущільнення" },
};

export function specOf(profile, key) {
  return profile?.specs.find((s) => s[0].startsWith(key))?.[1];
}

/** Базові позиції каталогу: профіль × типова конфігурація. Склопакет і колір вибираються на картці. */
export function buildCatalog() {
  const items = [];
  for (const p of PVC_PROFILES) {
    if (!(p.slug in PROFILE_PRICE_M2)) continue;
    for (const pr of PRESETS) {
      const cfg = getConfig(pr.config);
      items.push({
        id: `${p.slug}-${pr.config}-${pr.width}x${pr.height}`,
        profile: p.slug,
        profileName: p.name,
        config: pr.config,
        configLabel: cfg.label,
        cols: cfg.cols,
        sashes: cfg.cols.length,
        openSashes: sashesOf(cfg),
        width: pr.width,
        height: pr.height,
      });
    }
  }
  return items;
}

export const GLASS_SHORT = { g1: "1 камера", g2: "2 камери", g2e: "2 кам. енерго", g2n: "Шумозахист" };

/** Ціна позиції каталогу для вибраних скла, кольору і фурнітури */
export function itemPrice(item, glass = "g2", color = "white", hardware = "axor") {
  const { total } = calcPrice({ profile: item.profile, width: item.width, height: item.height, sashes: item.openSashes, glass, color, hardware });
  return Math.round(total / 10) * 10;
}
