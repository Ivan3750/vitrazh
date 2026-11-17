// Загальні дані компанії — єдине місце, де змінюються контакти та назва.
export const SITE = {
  name: "ВІТРАЖ",
  url: "https://vitrazh.com.ua",
  phone: "+38 095 109 90 40",
  phoneHref: "tel:+380951099040",
  email: "kyiv@vitrazh.com.ua",
  address: "Київ, проспект Академіка Глушкова, 30",
  telegram: "https://t.me/+380951099040",
  whatsapp: "https://wa.me/380951099040",
  viber: "viber://chat?number=+380951099040",
  instagram: "https://www.instagram.com/vitrazh.com.ua/",
  // Ендпоінт форми (PHP на хостингу). Файл лежить у public/api/order.php
  orderEndpoint: "/api/order.php",
  // Назва заводу — використовується ТІЛЬКИ на сторінці «Про компанію».
  // У скопійованих текстах каталогу цього слова немає (прохання клієнта).
  factory: "Goodwin",
};

export const NAV = [
  { href: "/catalog/", label: "Каталог" },
  { href: "/calc/", label: "Калькулятор" },
  { href: "/about/", label: "Про компанію" },
  { href: "/contacts/", label: "Контакти" },
];

// Розділи, які клієнт додасть пізніше.
export const COMING_SOON = [
  { title: "Москітні сітки", icon: "bug" },
  { title: "Підвіконня", icon: "layers" },
  { title: "Тканеві жалюзі", icon: "blinds" },
  { title: "Захисні ролети", icon: "shield" },
  { title: "Ворота", icon: "door" },
];
