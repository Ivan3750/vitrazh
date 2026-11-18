// ============================================================================
// УВАГА: ЦІНИ ТИМЧАСОВІ (орієнтовні, для демонстрації роботи каталогу та
// калькулятора). Реальні прайс-коефіцієнти надає клієнт — змінюйте лише цей
// файл, весь сайт перераховується автоматично.
// ============================================================================

// Ціна профілю, грн за 1 м² конструкції (рама + глухе скління, 2-камерний склопакет не включено)
export const PROFILE_PRICE_M2 = {
  "lider-58": 2900,
  "76-ad": 3500,
  "ideal-4000": 3700,
  "neo-76-ad": 4200,
  "neo-76-md": 4000,
};

// Доплата за кожну стулку, що відкривається (поворотно-відкидну)
export const SASH_PRICE = 1100;

export const GLASS = [
  { id: "g1", label: "Однокамерний 24 мм", addM2: 0 },
  { id: "g2", label: "Двокамерний 32 мм", addM2: 450 },
  { id: "g2e", label: "Двокамерний енергозберігаючий 40 мм", addM2: 850 },
  { id: "g2n", label: "Двокамерний шумозахисний", addM2: 1250 },
];

export const COLORS = [
  { id: "white", label: "Білий", k: 1, swatch: "#ffffff" },
  { id: "anthracite", label: "Антрацит", k: 1.25, swatch: "#383e42" },
  { id: "brown", label: "Коричневий", k: 1.25, swatch: "#5a3a26" },
  { id: "golden-oak", label: "Золотий дуб", k: 1.3, swatch: "#b97a35" },
];

export const HARDWARE = [
  { id: "axor", label: "Axor (Україна)", add: 0 },
  { id: "vorne", label: "Vorne", add: 250 },
  { id: "maco", label: "Maco (Австрія)", add: 600 },
  { id: "siegenia", label: "Siegenia (Німеччина)", add: 750 },
];

export const SERVICES = [
  { id: "measure", label: "Виїзд замірника", perUnit: 0, note: "безкоштовно" },
  { id: "delivery", label: "Доставка по Києву", perUnit: 0, flat: 400 },
  { id: "install", label: "Монтаж", perUnit: 0, perM2: 650 },
  { id: "dismantle", label: "Демонтаж старого вікна", perUnit: 0, perM2: 250 },
  { id: "sill", label: "Підвіконня", perUnit: 0, perWidthM: 650 },
  { id: "drip", label: "Відлив", perUnit: 0, perWidthM: 350 },
  { id: "screen", label: "Москітна сітка", perUnit: 0, perM2: 450 },
];

export const MIN_AREA_M2 = 0.6;

export const fmt = (n) =>
  new Intl.NumberFormat("uk-UA", { maximumFractionDigits: 0 }).format(Math.round(n)).replace(/ /g, " ") + " грн";

/**
 * @param {object} o
 * @param {string} o.profile  slug профілю
 * @param {number} o.width    мм
 * @param {number} o.height   мм
 * @param {number} o.sashes   кількість стулок, що відкриваються
 * @param {string} o.glass    id склопакета
 * @param {string} o.color    id кольору
 * @param {string} o.hardware id фурнітури
 * @param {string[]} o.services id послуг
 */
export function calcPrice({ profile, width, height, sashes = 0, glass = "g2", color = "white", hardware = "axor", services = [] }) {
  const w = Math.max(0, width) / 1000;
  const h = Math.max(0, height) / 1000;
  const area = Math.max(MIN_AREA_M2, w * h);
  const base = (PROFILE_PRICE_M2[profile] ?? 3500) * area;
  const colorK = COLORS.find((c) => c.id === color)?.k ?? 1;
  const glassAdd = (GLASS.find((g) => g.id === glass)?.addM2 ?? 0) * area;
  const hw = (HARDWARE.find((x) => x.id === hardware)?.add ?? 0) * sashes;
  const sash = SASH_PRICE * sashes;
  const construction = (base * colorK) + glassAdd + sash + hw;

  let extra = 0;
  const lines = [];
  for (const id of services) {
    const s = SERVICES.find((x) => x.id === id);
    if (!s) continue;
    const v = (s.flat ?? 0) + (s.perM2 ?? 0) * area + (s.perWidthM ?? 0) * w;
    extra += v;
    lines.push({ id, label: s.label, value: v });
  }
  return { area, construction, extra, total: construction + extra, lines };
}
