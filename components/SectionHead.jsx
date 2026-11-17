import Reveal from "./Reveal";

// Єдиний заголовок секції: eyebrow → h2 → lead. `action` — кнопка справа.
export default function SectionHead({ eyebrow, title, lead, action, className = "" }) {
  const head = (
    <div className="section-head">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="h2">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
  return action ? (
    <Reveal className={`section-head-row ${className}`}>{head}{action}</Reveal>
  ) : (
    <Reveal className={className}>{head}</Reveal>
  );
}
