"use client";
import { useEffect, useRef } from "react";

// Поява блоку при прокрутці. variant: up | left | right | scale. delay — мс (каскад).
export default function Reveal({ as: Tag = "div", delay = 0, variant = "up", left = false, className = "", children, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("in"); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const v = left ? "left" : variant;
  const cls = v === "left" ? "reveal-left" : v === "right" ? "reveal-right" : v === "scale" ? "reveal-scale" : "";
  return (
    <Tag ref={ref} className={`reveal ${cls} ${className}`} style={{ "--d": `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}
