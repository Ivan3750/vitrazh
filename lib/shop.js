// ============================================================================
// Каталог супутніх товарів (не вікна): москітні сітки, підвіконня, жалюзі, ролети.
// УВАГА: ЦІНИ ТИМЧАСОВІ — підставте реальні. Структура даних описує і ціну, і
// опції, які вибирає покупець, тому картка товару та кошик працюють автоматично.
//
// pricing.type:
//   "area"   — ціна за м² (ширина × висота, мм), мінімальна площа min
//   "length" — ціна за погонний метр (довжина, мм)
//   "fixed"  — ціна за штуку
// options: [{ id, label, choices: [{ id, label, add?, k?, swatch?, image? }] }]
//   add — доплата (за м² для "area", за пог. м для "length", за шт. для "fixed")
//   k   — множник ціни
// ============================================================================
import fabrics from "./fabrics.json";

export const SHOP_CATEGORIES = [
  { id: "screens", title: "Москітні сітки", lead: "Захист від комах і пилу без обмеження провітрювання. Виготовляємо за вашими розмірами.", image: "/img/shop/screen-ramna.webp", icon: "bug" },
  { id: "sills", title: "Підвіконня", lead: "Підвіконня різної глибини та кольорів: довговічне покриття, стійке до вологи та подряпин.", image: null, icon: "layers" },
  { id: "blinds", title: "Тканеві жалюзі та ролети", lead: "Тканеві ролети, день-ніч, плісе, римські штори та жалюзі — понад 300 тканин у каталозі.", image: "/img/shop/blind-roller.webp", icon: "blinds" },
  { id: "shutters", title: "Захисні ролети", lead: "Захист від злому, шуму та сонця для вікон, дверей і вітрин.", image: "/img/shop/shutter.webp", icon: "shield" },
];

const FRAME_COLORS = {
  id: "frame",
  label: "Колір рамки",
  choices: [
    { id: "white", label: "Білий", swatch: "#ffffff" },
    { id: "brown", label: "Коричневий", swatch: "#5a3a26", k: 1.08 },
    { id: "anthracite", label: "Антрацит", swatch: "#383e42", k: 1.08 },
  ],
};
const MESH = {
  id: "mesh",
  label: "Полотно",
  choices: [
    { id: "fiberglass", label: "Fiberglass (стандарт)", add: 0 },
    { id: "ultraview", label: "UltraView (прозоре)", add: 160 },
    { id: "antipul", label: "Антипил", add: 220 },
    { id: "anticat", label: "Антикіт (посилене)", add: 300 },
  ],
};

const SILL_COLORS = {
  id: "color",
  label: "Колір",
  choices: [
    { id: "white", label: "Білий", swatch: "#ffffff" },
    { id: "golden-oak", label: "Золотий дуб", swatch: "#b97a35", k: 1.15 },
    { id: "anthracite", label: "Антрацит", swatch: "#383e42", k: 1.15 },
    { id: "marble", label: "Мармур", swatch: "#d8d6d0", k: 1.2 },
  ],
};
const sill = (depth, perM) => ({
  id: `sill-${depth}`,
  category: "sills",
  title: `Підвіконня ПВХ ${depth} мм`,
  short: `Глибина ${depth} мм`,
  description: `Підвіконня глибиною ${depth} мм із міцного ПВХ із ламінованою поверхнею. Стійке до вологи, подряпин і вигоряння, не потребує спеціального догляду.`,
  image: null,
  art: "sill",
  pricing: { type: "length", perM, minLength: 500, maxLength: 4000, defaultLength: 1300 },
  options: [SILL_COLORS],
  extras: [{ id: "caps", label: "Заглушки (пара)", price: 90 }],
});

const FABRIC_OPTION = {
  id: "fabric",
  label: "Тканина (зразки з каталогу)",
  choices: fabrics.map((f) => ({ id: f.id, label: f.label, image: `/img/fabrics/${f.id}.webp`, k: f.type === "Натуральні" ? 1.15 : f.type === "Функціональні" ? 1.1 : 1 })),
};
const CONTROL = {
  id: "control",
  label: "Керування",
  choices: [
    { id: "chain", label: "Ланцюжок", add: 0 },
    { id: "spring", label: "Пружинний механізм", add: 90 },
    { id: "motor", label: "Електропривід", add: 1600 },
  ],
};

export const PRODUCTS = [
  // --- Москітні сітки ---
  { id: "screen-ramna", category: "screens", title: "Рамна москітна сітка", short: "Для відкривних вікон", description: "Класична рамкова москітна сітка на Z-кріпленнях або кутах. Швидко знімається для миття та зберігання.", image: "/img/shop/screen-ramna.webp", pricing: { type: "area", perM2: 760, minArea: 0.25, minW: 200, maxW: 1600, minH: 200, maxH: 2200, defaultW: 700, defaultH: 1300 }, options: [FRAME_COLORS, MESH] },
  { id: "screen-door", category: "screens", title: "Дверна москітна сітка", short: "Для балконних дверей", description: "Дверна сітка на петлях із магнітним замиканням: вільний прохід на балкон і захист від комах.", image: "/img/shop/screen-door.webp", pricing: { type: "area", perM2: 1250, minArea: 1.2, minW: 500, maxW: 1200, minH: 1500, maxH: 2500, defaultW: 800, defaultH: 2100 }, options: [FRAME_COLORS, MESH] },
  { id: "screen-slide", category: "screens", title: "Відкатна москітна сітка", short: "Для розсувних дверей і великих вікон", description: "Відкатна сітка рухається по напрямній: підходить для розсувних дверей, терас і панорамного скління.", image: "/img/shop/screen-slide.webp", pricing: { type: "area", perM2: 1500, minArea: 1.5, minW: 600, maxW: 3500, minH: 1000, maxH: 2600, defaultW: 1500, defaultH: 2100 }, options: [FRAME_COLORS, MESH] },
  { id: "screen-plisse", category: "screens", title: "Москітна сітка плісе", short: "Складається гармошкою", description: "Сітка-плісе складається гармошкою і займає мінімум місця. Для вікон, дверей і нестандартних отворів.", image: "/img/shop/screen-plisse.webp", pricing: { type: "area", perM2: 2100, minArea: 1.0, minW: 400, maxW: 2400, minH: 500, maxH: 2800, defaultW: 900, defaultH: 2100 }, options: [FRAME_COLORS] },
  { id: "screen-alu", category: "screens", title: "Сітка для алюмінієвих вікон", short: "Під алюмінієві системи", description: "Москітна сітка під алюмінієві віконні системи: точний підбір кріплення та профілю.", image: "/img/shop/screen-alu.webp", pricing: { type: "area", perM2: 1100, minArea: 0.3, minW: 200, maxW: 1800, minH: 200, maxH: 2400, defaultW: 800, defaultH: 1300 }, options: [FRAME_COLORS, MESH] },

  // --- Підвіконня ---
  sill(150, 260), sill(200, 310), sill(250, 370), sill(300, 430), sill(350, 500), sill(400, 570),

  // --- Тканеві жалюзі та ролети ---
  { id: "blind-roller", category: "blinds", title: "Тканеві ролети", short: "Рулонні штори", description: "Рулонні штори з тканини на вікно: компактні, легко чиститься. Великий вибір тканин — від прозорих до повного затемнення.", image: "/img/shop/blind-roller.webp", pricing: { type: "area", perM2: 1250, minArea: 0.8, minW: 300, maxW: 2400, minH: 300, maxH: 3000, defaultW: 700, defaultH: 1300 }, options: [FABRIC_OPTION, CONTROL] },
  { id: "blind-daynight", category: "blinds", title: "Ролети день-ніч", short: "Зебра", description: "Дві тканини в одному полотні: змінюйте положення смуг і регулюйте освітлення від прозорого до затемненого.", image: "/img/shop/blind-daynight.webp", pricing: { type: "area", perM2: 1700, minArea: 0.8, minW: 300, maxW: 2400, minH: 300, maxH: 3000, defaultW: 700, defaultH: 1300 }, options: [FABRIC_OPTION, CONTROL] },
  { id: "blind-plisse", category: "blinds", title: "Штори плісе", short: "Для мансардних і нестандартних вікон", description: "Плісе складаються гармошкою та фіксуються в будь-якому положенні. Підходять для скошених і арочних вікон.", image: "/img/shop/blind-plisse.webp", pricing: { type: "area", perM2: 2000, minArea: 0.8, minW: 250, maxW: 1800, minH: 300, maxH: 3000, defaultW: 700, defaultH: 1300 }, options: [FABRIC_OPTION] },
  { id: "blind-roman", category: "blinds", title: "Римські штори", short: "М'які складки", description: "Римські штори з тканини збираються в акуратні складки. Додають затишку кухні, спальні та вітальні.", image: "/img/shop/blind-roman.webp", pricing: { type: "area", perM2: 2400, minArea: 1.0, minW: 400, maxW: 2000, minH: 500, maxH: 2800, defaultW: 900, defaultH: 1400 }, options: [FABRIC_OPTION] },
  { id: "blind-horizontal", category: "blinds", title: "Горизонтальні жалюзі", short: "Алюмінієві", description: "Алюмінієві горизонтальні жалюзі: регулювання світла поворотом ламелей, легко мити.", image: "/img/shop/blind-horizontal.webp", pricing: { type: "area", perM2: 980, minArea: 0.8, minW: 300, maxW: 2400, minH: 300, maxH: 2400, defaultW: 800, defaultH: 1300 }, options: [{ id: "color", label: "Колір ламелей", choices: [{ id: "white", label: "Білий", swatch: "#ffffff" }, { id: "silver", label: "Срібло", swatch: "#b9bdc2" }, { id: "graphite", label: "Графіт", swatch: "#4c5156", k: 1.05 }] }] },
  { id: "blind-vertical", category: "blinds", title: "Вертикальні жалюзі", short: "Для великих вікон", description: "Вертикальні жалюзі з тканинних ламелей — рішення для широких вікон, офісів і панорамного скління.", image: "/img/shop/blind-vertical.webp", pricing: { type: "area", perM2: 1150, minArea: 1.0, minW: 400, maxW: 4000, minH: 500, maxH: 3000, defaultW: 1500, defaultH: 1800 }, options: [FABRIC_OPTION] },

  // --- Захисні ролети ---
  { id: "shutter-window", category: "shutters", title: "Захисні ролети на вікна", short: "Захист від злому, шуму, сонця", description: "Захисні ролети з алюмінієвих ламелей із наповненням піною: додаткова теплоізоляція та захист вікон.", image: "/img/shop/shutter.webp", pricing: { type: "area", perM2: 3300, minArea: 1.2, minW: 500, maxW: 3500, minH: 500, maxH: 3000, defaultW: 1300, defaultH: 1400 }, options: [{ id: "color", label: "Колір ламелей", choices: [{ id: "white", label: "Білий", swatch: "#ffffff" }, { id: "brown", label: "Коричневий", swatch: "#5a3a26" }, { id: "anthracite", label: "Антрацит", swatch: "#383e42" }] }, { id: "drive", label: "Привід", choices: [{ id: "belt", label: "Ремінь / ручний", add: 0 }, { id: "motor", label: "Електропривід", add: 2200 }] }] },
  { id: "shutter-door", category: "shutters", title: "Ролети на двері та вітрини", short: "Для входу та комерційних приміщень", description: "Ролети для вхідних груп, балконних дверей і вітрин. Підвищена стійкість до зламу.", image: "/img/shop/shutter-roll.webp", pricing: { type: "area", perM2: 3800, minArea: 2, minW: 800, maxW: 4000, minH: 1500, maxH: 3500, defaultW: 1200, defaultH: 2200 }, options: [{ id: "color", label: "Колір ламелей", choices: [{ id: "white", label: "Білий", swatch: "#ffffff" }, { id: "brown", label: "Коричневий", swatch: "#5a3a26" }, { id: "anthracite", label: "Антрацит", swatch: "#383e42" }] }, { id: "drive", label: "Привід", choices: [{ id: "belt", label: "Ручний", add: 0 }, { id: "motor", label: "Електропривід", add: 2400 }] }] },
];

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);
export const productsIn = (cat) => PRODUCTS.filter((p) => p.category === cat);
export const getShopCategory = (id) => SHOP_CATEGORIES.find((c) => c.id === id);

export function unitCalc(product, { w, h, length, choices = {}, extras = [] }) {
  const pr = product.pricing;
  let sizeQty = 1;
  if (pr.type === "area") sizeQty = Math.max(pr.minArea ?? 0, (w / 1000) * (h / 1000));
  if (pr.type === "length") sizeQty = Math.max((pr.minLength ?? 0) / 1000, length / 1000);
  let rate = pr.type === "area" ? pr.perM2 : pr.type === "length" ? pr.perM : pr.price;
  let k = 1;
  let add = 0;
  for (const opt of product.options ?? []) {
    const ch = opt.choices.find((c) => c.id === choices[opt.id]) ?? opt.choices[0];
    if (ch.k) k *= ch.k;
    if (ch.add) add += ch.add;
  }
  const base = (rate * k + add) * sizeQty;
  const ex = (product.extras ?? []).filter((e) => extras.includes(e.id)).reduce((s, e) => s + e.price, 0);
  return { size: sizeQty, unit: base + ex };
}

export function minPrice(product) {
  const pr = product.pricing;
  if (pr.type === "area") return unitCalc(product, { w: pr.defaultW, h: pr.defaultH }).unit;
  if (pr.type === "length") return unitCalc(product, { length: pr.defaultLength }).unit;
  return pr.price;
}


// Короткі переваги та мітки товарів (для карток і вікна швидкого перегляду)
const EXTRA = {
  "screen-ramna": { badge: "Хіт", features: ["Знімається для миття", "Z-кріплення або кути", "Колір рамки під профіль"] },
  "screen-door": { badge: null, features: ["Магнітне замикання", "Вільний прохід на балкон", "Посилене полотно за бажанням"] },
  "screen-slide": { badge: null, features: ["Для розсувних дверей і терас", "Плавний хід по напрямній", "До 3,5 м завширшки"] },
  "screen-plisse": { badge: "Компактно", features: ["Складається гармошкою", "Для нестандартних отворів", "Не заважає провітрюванню"] },
  "screen-alu": { badge: null, features: ["Під алюмінієві системи", "Точний підбір кріплення", "Стійкий профіль"] },
  "blind-roller": { badge: "Хіт", features: ["Понад 300 тканин у каталозі", "Від прозорих до затемнення", "Ланцюжок, пружина чи електропривід"] },
  "blind-daynight": { badge: null, features: ["Дві тканини в одному полотні", "Регулювання світла", "Сучасний вигляд"] },
  "blind-plisse": { badge: null, features: ["Для мансардних і арочних вікон", "Фіксація в будь-якому положенні", "Широкий вибір тканин"] },
  "blind-roman": { badge: null, features: ["М'які складки", "Затишок для кухні та спальні", "Натуральні тканини"] },
  "blind-horizontal": { badge: "Економ", features: ["Алюмінієві ламелі", "Регулювання поворотом", "Легко мити"] },
  "blind-vertical": { badge: null, features: ["Для широких вікон", "Тканинні ламелі", "Офіси та панорамне скління"] },
  "shutter-window": { badge: "Захист", features: ["Піна всередині ламелей", "Захист від злому та шуму", "Ручний або електропривід"] },
  "shutter-door": { badge: null, features: ["Для входу та вітрин", "Підвищена стійкість до зламу", "Електропривід за бажанням"] },
};
for (const p of PRODUCTS) {
  if (p.category === "sills") Object.assign(p, { badge: p.id === "sill-300" ? "Хіт" : null, features: ["Стійке до вологи покриття", "Не вигорає і не жовтіє", "Заглушки в комплекті за бажанням"] });
  else Object.assign(p, EXTRA[p.id] ?? {});
}
