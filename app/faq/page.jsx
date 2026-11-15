import PageHero from "@/app/components/site/PageHero";
import b from "@/app/assets/images-webp/gallery/work/installers.webp";

import { faqs } from "@/app/data/faq";
import JsonLd from "@/app/components/site/JsonLd";

export const metadata = {
  alternates: { canonical: "/faq/" },
  title: "Часті запитання про пластикові вікна: монтаж, догляд, склопакети | Вітраж",
  description: "Відповіді на найпоширеніші питання щодо пластикових вікон: монтаж, догляд, вибір склопакетів та інше.",
};

const FAQ = () => {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
      <PageHero image={b}>Часті запитання</PageHero>

      <section className="max-w-[1100px] mx-auto py-8 px-4 sm:px-6">
        <div className="border-t border-ink/15">
          {faqs.map((faq, index) => (
            <details key={index} className="group border-b border-ink/15 py-1">
              <summary className="cursor-pointer flex items-center justify-between gap-6 py-5 font-display text-2xl sm:text-3xl uppercase leading-tight">
                {faq.question}
                <span className="shrink-0 w-11 h-11 bg-ink text-white grid place-items-center text-2xl transition-transform duration-300 group-open:rotate-45 group-open:bg-brand-orange">
                  +
                </span>
              </summary>
              <p className="pb-6 pr-14 text-ink/70 text-lg">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;
