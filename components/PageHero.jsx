import Link from "next/link";

// Верхній блок внутрішніх сторінок: хлібні крихти, заголовок, кутасті фігури з логотипа
export default function PageHero({ title, lead, crumbs = [] }) {
  return (
    <section className="relative bg-ink text-white overflow-hidden on-dark">
      <div className="absolute -right-10 -top-16 w-72 h-72 bg-brand/35 shard-a anim-drift" aria-hidden="true" />
      <div className="absolute right-52 top-10 w-32 h-32 bg-accent/60 shard-b anim-drift [animation-delay:-3s]" aria-hidden="true" />
      <div className="absolute right-24 bottom-0 w-24 h-24 bg-lime/70 shard-c anim-drift [animation-delay:-5s]" aria-hidden="true" />
      <div className="container-x relative py-14 md:py-20">
        <nav className="text-sm text-white/60 anim-rise" aria-label="Хлібні крихти">
          <Link href="/" className="hover:text-white">Головна</Link>
          {crumbs.map(([label, href]) => (
            <span key={label}> / {href ? <Link href={href} className="hover:text-white">{label}</Link> : <span className="text-white/90">{label}</span>}</span>
          ))}
        </nav>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight anim-rise [animation-delay:80ms]">{title}</h1>
        {lead && <p className="mt-4 text-lg text-white/80 max-w-2xl anim-rise [animation-delay:160ms]">{lead}</p>}
        <div className="mt-8 h-1 w-24 bg-accent origin-left" style={{ animation: "lineGrow .8s .3s both" }} />
      </div>
    </section>
  );
}
