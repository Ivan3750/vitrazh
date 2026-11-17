import Reveal from "./Reveal";
import Icon from "./Icon";
import faqs from "@/lib/faq.json";

// Питання й відповіді — зі старого сайту
export const FAQS = faqs;

export default function FAQ({ limit }) {
  const list = limit ? FAQS.slice(0, limit) : FAQS;
  return (
    <div className="divide-y divide-line border-y border-line">
      {list.map((f, i) => (
        <Reveal as="div" key={f.q} delay={Math.min(i, 6) * 50}>
          <details className="acc group">
            <summary className="flex items-center justify-between gap-6 py-5 md:py-6 text-base md:text-lg font-semibold hover:text-accent-fg transition-colors min-h-[56px]">
              {f.q}
              <span className="acc-icon shrink-0 grid place-items-center w-9 h-9 transition-all duration-300"><Icon name="plus" size={16} /></span>
            </summary>
            <p className="acc-body pb-6 md:pr-14 text-text-2 leading-relaxed">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
