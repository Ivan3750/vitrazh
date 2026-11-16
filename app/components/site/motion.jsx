"use client";
import { useEffect, useRef } from "react";

/*
 * Анімації без framer-motion: CSS-переходи + один спільний IntersectionObserver.
 * Це прибирає ~50 КБ JS зі сторінок і десятки окремих спостерігачів.
 * Стилі (.reveal, .split, .image-reveal-*) — у globals.css.
 */

const observers = new Map();

function getObserver(margin) {
  let o = observers.get(margin);
  if (!o) {
    o = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            o.unobserve(e.target);
          }
        }
      },
      { rootMargin: `0px 0px -${margin}px 0px` }
    );
    observers.set(margin, o);
  }
  return o;
}

/** Додає клас `is-in`, коли елемент потрапляє у вʼюпорт (один раз). */
function useInViewOnce(margin = 60) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in");
      return;
    }
    const o = getObserver(margin);
    o.observe(el);
    return () => o.unobserve(el);
  }, [margin]);
  return ref;
}

/** Поява блоку при скролі. */
export function Reveal({ children, delay = 0, y = 40, className = "", as: Comp = "div" }) {
  const ref = useInViewOnce(80);
  return (
    <Comp ref={ref} className={`reveal ${className}`} style={{ "--reveal-y": `${y}px`, "--reveal-delay": `${delay}s` }}>
      {children}
    </Comp>
  );
}

/** Заголовок, що з'являється по словах (маска знизу). */
export function SplitHeading({ text, className = "", delay = 0, as: Comp = "h2", classes = {} }) {
  const ref = useInViewOnce(60);
  return (
    <Comp ref={ref} className={`split ${className}`} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="split-word inline-block overflow-hidden align-bottom pb-[0.08em] mr-[0.25em]" aria-hidden>
          <span className={classes[w] || ""} style={{ "--word-delay": `${delay + i * 0.07}s` }}>
            {w}
          </span>
        </span>
      ))}
    </Comp>
  );
}

/** Лічильник, що рахує до значення, коли потрапляє у вʼюпорт. */
export function Counter({ to, suffix = "", className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = (v) => {
      el.textContent = Math.round(v).toLocaleString("uk-UA") + suffix;
    };
    if (typeof IntersectionObserver === "undefined") {
      show(to);
      return;
    }
    let raf;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1800;
        const tick = (now) => {
          const p = Math.min(1, (now - start) / dur);
          show(to * (1 - Math.pow(1 - p, 4)));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, suffix]);
  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

/** Зображення, що «відкривається» (clip-path) при появі. */
export function ImageReveal({ src, alt, className = "", imgClassName = "" }) {
  const ref = useInViewOnce(60);
  return (
    <div ref={ref} className={className}>
      <div className="image-reveal-clip w-full h-full overflow-hidden">
        <img src={src} alt={alt} loading="lazy" decoding="async" className={`image-reveal-img w-full h-full object-cover ${imgClassName}`} />
      </div>
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
