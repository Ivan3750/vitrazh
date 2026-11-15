"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Єдиний hero для внутрішніх сторінок: велика вузька типографіка зліва,
 * фото у заокругленій рамці справа. Заголовок передається дітьми.
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
                <motion.span
                  className={`inline-block ${i === words.length - 1 ? "text-brand-orange" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.07, ease: EASE }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          {image && (
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
              className="relative aspect-[16/9] overflow-hidden bg-paper"
            >
              <motion.img
                src={image.src}
                alt={String(children)}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, ease: EASE }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
