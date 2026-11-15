import StatusPage from "./components/site/StatusPage";

export const metadata = {
  title: "Сторінку не знайдено | Вітраж",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <StatusPage
      big="404"
      title="Не знайдено"
      text="Сторінка, яку ви шукаєте, не існує або була переміщена."
    />
  );
}
