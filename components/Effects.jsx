"use client";
import { useEffect } from "react";

/**
 * Глобальні ефекти (легкі, один набір слухачів):
 *  — підсвітка карток за курсором (.card → --mx/--my);
 *  — 3D-нахил [data-tilt] на пристроях із мишею;
 *  — прогрес прокрутки (--progress) і зсув для паралаксу (--sy) на <html>.
 */
export default function Effects() {
  useEffect(() => {
    const root = document.documentElement;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Прокрутка
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        root.style.setProperty("--progress", max > 0 ? String(Math.min(1, y / max)) : "0");
        if (!reduce && y < 1800) root.style.setProperty("--sy", String(y));
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Курсор
    let move;
    if (fine && !reduce) {
      let raf = 0;
      move = (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          const card = e.target.closest?.(".card");
          if (card) {
            const r = card.getBoundingClientRect();
            card.style.setProperty("--mx", `${e.clientX - r.left}px`);
            card.style.setProperty("--my", `${e.clientY - r.top}px`);
          }
          const t = e.target.closest?.("[data-tilt]");
          if (t) {
            const r = t.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            t.style.transform = `perspective(900px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg) translateZ(0)`;
          }
        });
      };
      const leave = (e) => {
        const t = e.target.closest?.("[data-tilt]");
        if (t) t.style.transform = "";
      };
      document.addEventListener("pointermove", move, { passive: true });
      document.addEventListener("pointerout", leave, { passive: true });
      move.leave = leave;
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (move) {
        document.removeEventListener("pointermove", move);
        document.removeEventListener("pointerout", move.leave);
      }
    };
  }, []);
  return <div className="progress-bar fixed top-0 left-0 right-0 h-[3px] bg-accent z-[200] pointer-events-none" aria-hidden="true" />;
}
