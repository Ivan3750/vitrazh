import Link from "next/link";

/**
 * Єдиний hero для внутрішніх сторінок: велика вузька типографіка зліва,
 * фото справа. Заголовок передається дітьми. Анімація — чистий CSS (без JS).
 */
export default function PageHero({ children, image, crumb }) {
  const words = String(children ?? "").split(" ");
  return (
    <section className="bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 pt-5 sm:pt-7 pb-5">
        <nav className="text-sm text-ink/50 mb-4 uppercase tracking-[0.12em]" aria-label="Хлібні крихти">
          <Link href="/" className="hover:text-ink">Головна</Link>
          {crumb && (
            <>
              {" / "}
              <span className="text-ink font-semibold">{crumb}</span>
            </>
          )}
        </nav>

        <div className="grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] gap-6 items-end">
          <h1
            className="font-display !text-[40px] sm:!text-[68px] lg:!text-[88px] uppercase !leading-[0.92]"
            aria-label={String(children)}
          >
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.06em] mr-[0.22em]" aria-hidden>
                <span
                  className={`hero-word ${i === words.length - 1 ? "text-brand-orange" : ""}`}
                  style={{ "--word-delay": `${0.1 + i * 0.07}s` }}
                >
                  {w}
                </span>
              </span>
            ))}
          </h1>

          {image && (
            <div className="hero-clip relative aspect-[16/9] overflow-hidden bg-paper">
              <img
                src={image.src}
                alt={String(children)}
                fetchPriority="high"
                decoding="async"
                className="hero-zoom absolute inset-0 w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
