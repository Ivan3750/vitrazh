import StatusPage from "@/app/components/site/StatusPage";

export const metadata = {
  title: "Дякуємо за заявку | Вітраж",
  robots: { index: false, follow: false },
};

export default function Thanks() {
  return (
    <StatusPage
      big="Дякуємо!"
      accent="text-brand-blue"
      title="Вашу заявку успішно надіслано"
      text="Ми зв’яжемось із вами найближчим часом, щоб відповісти на запит або уточнити деталі."
    />
  );
}
