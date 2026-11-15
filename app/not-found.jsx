import StatusPage from "./components/site/StatusPage";

export default function NotFound() {
  return (
    <StatusPage
      big="404"
      title="Не знайдено"
      text="Сторінка, яку ви шукаєте, не існує або була переміщена."
    />
  );
}
