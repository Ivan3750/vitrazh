"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/** Поява блоку при скролі. */
export function Reveal({ children, delay = 0, y = 40, className = "", as = "div" }) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Comp>
  );
}

/** Заголовок, що з'являється по словах (маска знизу). */
export function SplitHeading({ text, className = "", delay = 0, as = "h2", classes = {} }) {
  const Comp = motion[as];
  const words = text.split(" ");
  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.07, delayChildren: delay }}
      className={className}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] mr-[0.25em]" aria-hidden>
          <motion.span
            className={`inline-block ${classes[w] || ""}`}
            variants={{ hidden: { y: "110%" }, show: { y: 0 } }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}

/** Лічильник, що рахує до значення, коли потрапляє у вʼюпорт. */
export function Counter({ to, suffix = "", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString("uk-UA") + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);
  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

/** Зображення, що «відкривається» (clip-path) при появі. Спостерігаємо за необрізаною обгорткою. */
export function ImageReveal({ src, alt, className = "", imgClassName = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={false}
        animate={{ clipPath: inView ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)" }}
        transition={{ duration: 1.1, ease: EASE }}
        className="w-full h-full overflow-hidden"
      >
        <motion.img
          initial={false}
          animate={{ scale: inView ? 1 : 1.25 }}
          transition={{ duration: 1.4, ease: EASE }}
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${imgClassName}`}
        />
      </motion.div>
    </div>
  );
}

/** Нескінченна біжуча стрічка. */
export function Marquee({ items, className = "" }) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden>
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display uppercase text-3xl md:text-5xl px-8">{t}</span>
            <span className="w-3 h-3 bg-brand-orange" />
          </span>
        ))}
      </div>
    </div>
  );
}
