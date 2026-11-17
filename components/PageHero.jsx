import Link from "next/link";

// Верхній блок внутрішніх сторінок: хлібні крихти → заголовок → опис
export default function PageHero({ title, lead, crumbs = [] }) {
  return (
    <section className="border-b border-line bg-[linear-gradient(180deg,#fff_0%,var(--color-soft)_100%)]">
      <div className="container-x pt-12 pb-12 md:pt-16 md:pb-16 flex flex-col gap-4">
        <nav className="small anim-rise" aria-label="Хлібні крихти">
          <Link href="/" className="hover:text-ink">Головна</Link>
          {crumbs.map(([label, href]) => (
            <span key={label}> <span className="text-text-3">/</span> {href ? <Link href={href} className="hover:text-ink">{label}</Link> : <span className="text-ink">{label}</span>}</span>
          ))}
        </nav>
        <h1 className="display !text-[clamp(2.25rem,4.6vw,3.5rem)] anim-rise [animation-delay:70ms]">{title}</h1>
        {lead && <p className="lead max-w-2xl anim-rise [animation-delay:140ms]">{lead}</p>}
      </div>
    </section>
  );
}
