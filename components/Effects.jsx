"use client";
import { useEffect, useRef } from "react";

/**
 * Глобальні ефекти (легкі, один набір слухачів):
 *  — 3D-нахил [data-tilt] на пристроях із мишею;
 *  — прогрес прокрутки (transform смуги виставляється напряму, без змін CSS-змінних на <html>).
 */
export default function Effects() {
  const bar = useRef(null);
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    let move, leave;
    if (fine && !reduce) {
      let raf = 0;
      move = (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          const t = e.target.closest?.("[data-tilt]");
          if (!t) return;
          const r = t.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          t.style.transform = `perspective(900px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg) translateZ(0)`;
        });
      };
      leave = (e) => { const t = e.target.closest?.("[data-tilt]"); if (t) t.style.transform = ""; };
      document.addEventListener("pointermove", move, { passive: true });
      document.addEventListener("pointerout", leave, { passive: true });
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (move) { document.removeEventListener("pointermove", move); document.removeEventListener("pointerout", leave); }
    };
  }, []);
  return <div ref={bar} className="progress-bar fixed top-0 left-0 right-0 h-[3px] bg-accent z-(--z-progress) pointer-events-none" aria-hidden="true" />;
}
