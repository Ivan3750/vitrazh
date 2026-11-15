import StatusPage from "@/app/components/site/StatusPage";

export const metadata = {
  title: "Помилка | Вітраж",
  robots: { index: false, follow: false },
};

export default function ErrorPage() {
  return <StatusPage big="Ой!" title="Виникла помилка" text="Спробуйте знову пізніше або зателефонуйте нам: +38 095 109 90 40." />;
}
