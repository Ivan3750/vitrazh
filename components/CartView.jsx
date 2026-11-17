"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "./CartProvider";
import { fmt } from "@/lib/pricing";
import ProductArt from "./ProductArt";
import WindowDiagram from "./WindowDiagram";
import Icon from "./Icon";

export function ItemThumb({ item, size = 96 }) {
  return (
    <div className="relative shrink-0 bg-soft grid place-items-center" style={{ width: size, height: size }}>
      {item.image ? (
        <Image src={item.image} alt="" fill sizes={`${size}px`} className="object-cover" />
      ) : item.meta?.cols ? (
        <WindowDiagram cols={item.meta.cols} width={item.meta.width} height={item.meta.height} maxW={size - 20} maxH={size - 20} />
      ) : (
        <ProductArt className="w-full h-full" />
      )}
    </div>
  );
}

export default function CartView() {
  const { items, total, count, setQty, remove, clear, ready } = useCart();

  if (!ready) return <p className="text-muted">Завантаження…</p>;

  if (items.length === 0) {
    return (
      <div className="bg-white border border-line p-10 md:p-16 text-center">
        <Icon name="cart" size={44} className="mx-auto text-brand" />
        <h2 className="mt-4 text-2xl font-extrabold text-navy">Кошик порожній</h2>
        <p className="mt-2 text-muted">Оберіть вікна в каталозі або налаштуйте їх у калькуляторі.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/catalog/" className="btn btn-accent">Каталог вікон</Link>
          <Link href="/calc/" className="btn btn-outline">Калькулятор</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px] items-start">
      <div className="space-y-3">
        {items.map((i) => (
          <article key={i.key} className="anim-rise bg-white border border-line p-4 flex gap-4">
            <ItemThumb item={i} />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between gap-3">
                <h2 className="font-bold text-navy leading-snug">{i.title}</h2>
                <button onClick={() => remove(i.key)} className="text-muted hover:text-accent shrink-0" aria-label={`Видалити: ${i.title}`}><Icon name="trash" size={18} /></button>
              </div>
              <ul className="mt-1 text-sm text-muted space-y-0.5">
                {i.details.map((d) => <li key={d}>{d}</li>)}
              </ul>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center border-2 border-line">
                  <button className="w-9 h-9 grid place-items-center hover:bg-soft" onClick={() => setQty(i.key, i.qty - 1)} aria-label="Менше"><Icon name="minus" size={15} /></button>
                  <span className="w-8 text-center font-bold text-sm">{i.qty}</span>
                  <button className="w-9 h-9 grid place-items-center hover:bg-soft" onClick={() => setQty(i.key, i.qty + 1)} aria-label="Більше"><Icon name="plus" size={15} /></button>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted">{fmt(i.unitPrice)} × {i.qty}</p>
                  <p className="text-lg font-extrabold text-navy">{fmt(i.unitPrice * i.qty)}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
        <button onClick={clear} className="text-sm text-muted hover:text-accent link-u">Очистити кошик</button>
      </div>

      <aside className="bg-white border-t-4 border-accent p-6 lg:sticky lg:top-28">
        <h2 className="text-xl font-extrabold text-navy">Разом</h2>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between"><dt className="text-muted">Товарів</dt><dd className="font-semibold">{count} шт.</dd></div>
          <div className="flex justify-between"><dt className="text-muted">Доставка і монтаж</dt><dd className="font-semibold">за тарифами</dd></div>
        </dl>
        <div className="mt-4 bg-navy text-white p-4">
          <p className="text-xs text-white/70 uppercase tracking-wider">Орієнтовна сума</p>
          <p className="text-3xl font-extrabold">{fmt(total)}</p>
        </div>
        <Link href="/checkout/" className="btn btn-accent w-full mt-4">Оформити замовлення</Link>
        <Link href="/catalog/" className="btn btn-outline w-full mt-2">Продовжити покупки</Link>
        <p className="mt-3 text-xs text-muted">Остаточну вартість після заміру підтвердить менеджер.</p>
      </aside>
    </div>
  );
}
