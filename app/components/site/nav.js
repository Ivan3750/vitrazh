// Категорії каталогу. «Вікна» ведуть на нову сторінку каталогу; решта — наявні розділи сайту.
export const CATEGORIES = [
  { href: "/catalog/vikna/", label: "Вікна", desc: "ПВХ, алюмінієві та фасадні системи" },
  { href: "/category/vitrazh-windows/", label: "Вітражні вікна", desc: "Вітражі та декоративне скління" },
  { href: "/category/screens/", label: "Сітки", desc: "Москітні сітки для вікон і дверей" },
  { href: "/category/window-blinds/", label: "Віконні жалюзі", desc: "Жалюзі, рулонні та тканинні штори" },
  { href: "/category/aluminium-systems/", label: "Офісні перегородки", desc: "Алюмінієві, скляні, пластикові" },
  { href: "/category/gates-and-rolls/", label: "Ворота та ролети", desc: "Секційні ворота та захисні ролети" },
  { href: "/category/facades/", label: "Фурнітура для вікон", desc: "Фурнітура та комплектуючі" },
];

export const NAV = [
  { href: "/", label: "Головна" },
  { href: "/catalog/vikna/", label: "Каталог", children: CATEGORIES, match: ["/catalog", "/category"] },
  { href: "/recovery/", label: "єВідновлення" },
  { href: "/service/", label: "Обслуговування" },
  { href: "/faq/", label: "FAQ" },
  { href: "/calc/", label: "Калькулятор" },
  { href: "/contact/", label: "Контакти" },
];
