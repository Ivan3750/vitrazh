// Категорії каталогу. «Вікна» ведуть на нову сторінку каталогу; решта — наявні розділи сайту.
export const CATEGORIES = [
  { href: "/catalog/vikna/", label: "Вікна" },
  { href: "/category/vitrazh-windows/", label: "Вітражні вікна" },
  { href: "/category/screens/", label: "Сітки" },
  { href: "/category/window-blinds/", label: "Віконні жалюзі" },
  { href: "/category/aluminium-systems/", label: "Офісні перегородки" },
  { href: "/category/gates-and-rolls/", label: "Ворота та ролети" },
  { href: "/category/facades/", label: "Фурнітура для вікон" },
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
