"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Icon from "./Icon";

export default function Modal({ open, onClose, title, children, wide = false }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);
  if (!open || !mounted) return null;
  return createPortal(
    <div className="fixed inset-0 z-[100] grid place-items-center p-3 md:p-6 bg-deep/50 backdrop-blur-sm anim-fade" onMouseDown={(e) => e.target === e.currentTarget && onClose()} role="dialog" aria-modal="true" aria-label={title}>
      <div className={`anim-pop w-full ${wide ? "max-w-3xl" : "max-w-md"} bg-surface shadow-[0_32px_64px_-16px_rgba(0,0,0,.35)] p-6 md:p-8 relative max-h-[92vh] overflow-y-auto`}>
        <button onClick={onClose} className="absolute right-4 top-4 btn btn-outline btn-sm btn-icon" aria-label="Закрити"><Icon name="x" size={22} /></button>
        <h3 className="h3 pr-10">{title}</h3>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  , document.body);
}
