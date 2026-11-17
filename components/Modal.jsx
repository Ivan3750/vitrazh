"use client";
import { useEffect } from "react";
import Icon from "./Icon";

export default function Modal({ open, onClose, title, children, wide = false }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center p-3 md:p-6 bg-ink/75 backdrop-blur-[2px]" onMouseDown={(e) => e.target === e.currentTarget && onClose()} role="dialog" aria-modal="true" aria-label={title}>
      <div className={`anim-rise w-full ${wide ? "max-w-3xl" : "max-w-md"} bg-white border-t-4 border-accent p-5 md:p-7 relative max-h-[92vh] overflow-y-auto`}>
        <button onClick={onClose} className="absolute right-3 top-3 p-1.5 text-muted hover:text-ink" aria-label="Закрити"><Icon name="x" size={22} /></button>
        <h3 className="text-xl font-extrabold text-navy pr-8">{title}</h3>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}
