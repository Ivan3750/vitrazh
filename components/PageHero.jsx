import Link from "next/link";

// Верхній блок внутрішніх сторінок: темний, із сіткою, світлом і паралаксом
export default function PageHero({ title, lead, crumbs = [], children }) {
  return (
    <section className="theme-dark relative overflow-hidden border-b border-line bg-deep">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div className="container-x relative pt-12 md:pt-16 pb-12 md:pb-20 flex flex-col gap-5">
        <nav className="small anim-rise" aria-label="Хлібні крихти">
          <Link href="/" className="hover:text-accent-fg transition-colors inline-block py-2">Головна</Link>
          {crumbs.map(([label, href]) => (
            <span key={label}> <span className="text-text-3">/</span> {href ? <Link href={href} className="hover:text-accent-fg transition-colors">{label}</Link> : <span className="text-ink">{label}</span>}</span>
          ))}
        </nav>
        <h1 className="display !text-[clamp(2.25rem,6vw,4.5rem)] max-w-4xl anim-rise [animation-delay:80ms]">{title}</h1>
        {lead && <p className="lead max-w-2xl anim-rise [animation-delay:160ms]">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
