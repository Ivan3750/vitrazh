"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";

const CartCtx = createContext(null);
const KEY = "vitrazh-cart-v2";

export const useCart = () => useContext(CartCtx);

/**
 * Позиція кошика:
 * { key, title, details: string[], image?, unitPrice, qty, kind, meta? }
 * key — унікальний ідентифікатор конфігурації; однакові позиції збільшують qty.
 */
export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState(null);
  const [bump, setBump] = useState(0);

  useEffect(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || "[]");
      if (Array.isArray(raw)) setItems(raw.filter((i) => i && i.key && i.unitPrice >= 0 && i.qty > 0));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  }, [items, ready]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  const add = useCallback((item, qty = 1) => {
    setItems((cur) => {
      const found = cur.find((i) => i.key === item.key);
      if (found) return cur.map((i) => (i.key === item.key ? { ...i, qty: Math.min(99, i.qty + qty) } : i));
      return [...cur, { ...item, qty }];
    });
    setToast(item.title);
    setBump((b) => b + 1);
  }, []);

  const setQty = useCallback((key, qty) => {
    setItems((cur) => cur.map((i) => (i.key === key ? { ...i, qty: Math.max(1, Math.min(99, qty)) } : i)));
  }, []);
  const remove = useCallback((key) => setItems((cur) => cur.filter((i) => i.key !== key)), []);
  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(() => {
    const count = items.reduce((s, i) => s + i.qty, 0);
    const total = items.reduce((s, i) => s + i.qty * i.unitPrice, 0);
    return { items, count, total, add, setQty, remove, clear, ready, bump };
  }, [items, add, setQty, remove, clear, ready, bump]);

  return (
    <CartCtx.Provider value={value}>
      {children}
      {toast && (
        <div role="status" className="theme-dark anim-slide fixed right-4 left-4 bottom-[calc(72px+env(safe-area-inset-bottom))] lg:bottom-6 lg:right-6 lg:left-auto z-(--z-toast) bg-deep text-ink shadow-[0_24px_48px_-12px_rgba(0,0,0,.45)] lg:w-[360px]">
          <div className="flex items-start gap-3 p-4">
            <span className="grid place-items-center w-8 h-8 bg-accent text-ink shrink-0"><Icon name="check" size={18} /></span>
            <div className="text-sm min-w-0">
              <p className="font-semibold">Додано в кошик</p>
              <p className="text-text-2 truncate">{toast}</p>
              <Link href="/cart/" className="inline-block mt-2 font-semibold text-accent-fg link-u" onClick={() => setToast(null)}>Перейти до кошика →</Link>
            </div>
          </div>
        </div>
      )}
    </CartCtx.Provider>
  );
}
