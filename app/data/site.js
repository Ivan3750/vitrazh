// Єдине джерело даних про компанію: використовується в метаданих, JSON-LD, sitemap і контактах.
export const site = {
  url: "https://vitrazh.com.ua",
  name: "Вітраж",
  legalName: "VitraZH",
  phone: "+380951099040",
  phoneHuman: "+38 095 109 90 40",
  email: "kyiv@vitrazh.com.ua",
  address: {
    street: "проспект Академіка Глушкова, 30",
    city: "Київ",
    country: "UA",
  },
  geo: { lat: 50.365616, lng: 30.449779 },
  hours: "Пн-Пт 09:00-12:00",
  social: [
    "https://t.me/+380951099040",
    "https://wa.me/380951099040",
    "https://www.instagram.com/vitrazh.com.ua/",
  ],
  ogImage: "/og.jpg",
};

export const abs = (path = "/") => (path.startsWith("http") ? path : site.url + path);
