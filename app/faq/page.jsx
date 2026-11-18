import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import faqs from "@/lib/faq.json";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Часті запитання про металопластикові вікна",
  description: "Відповіді на найпоширеніші запитання: конденсат, склопакети, монтаж, передоплата, підготовка приміщення, зимовий монтаж.",
  alternates: { canonical: "/faq/" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero title="Часті запитання" lead={`${faqs.length} відповідей на те, що нас питають найчастіше. Не знайшли своє — зателефонуйте: ${SITE.phone}.`} crumbs={[["FAQ"]]} />
      <section className="section"><div className="container-x max-w-4xl"><FAQ /></div></section>
    </>
  );
}
