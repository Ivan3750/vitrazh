"use client";
import { useState } from "react";
import Image from "next/image";
import { minPrice } from "@/lib/shop";
import { fmt } from "@/lib/pricing";
import Modal from "./Modal";
import ProductConfigurator from "./ProductConfigurator";
import ProductArt from "./ProductArt";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function ShopGrid({ products }) {
  const [active, setActive] = useState(null);
  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <Reveal as="li" key={p.id} delay={(i % 3) * 80}>
            <article className="card group flex flex-col h-full">
              <button type="button" onClick={() => setActive(p)} className="zoom-img relative block aspect-[4/3] bg-surface-2 text-left overflow-hidden" aria-label={`Налаштувати: ${p.title}`}>
                {p.image ? <Image src={p.image} alt={p.title} fill sizes="(min-width:1024px) 400px, (min-width:640px) 50vw, 100vw" className="object-cover" /> : <ProductArt className="absolute inset-0 w-full h-full" />}
                {p.badge && <span className="badge absolute left-4 top-4 z-10">{p.badge}</span>}
              </button>
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="h3">{p.title}</h3>
                  <p className="small">{p.short}</p>
                </div>
                {p.features && (
                  <ul className="flex flex-col gap-2 text-sm text-text-2">
                    {p.features.slice(0, 3).map((f) => <li key={f} className="flex gap-2"><Icon name="check" size={16} className="text-accent-fg shrink-0 mt-0.5" />{f}</li>)}
                  </ul>
                )}
                <div className="mt-auto pt-2 flex items-center justify-between gap-3 border-t border-line">
                  <p className="small pt-4">від <b className="text-xl text-ink num">{fmt(minPrice(p))}</b></p>
                  <button type="button" className="btn btn-primary btn-sm mt-4" onClick={() => setActive(p)}>Обрати</button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title ?? ""} wide>
        {active && <ProductConfigurator key={active.id} product={active} onAdded={() => setActive(null)} />}
      </Modal>
      <p className="mt-12 small !text-text-3">Ціни орієнтовні. Остаточну вартість підтвердить менеджер після оформлення замовлення.</p>
    </>
  );
}
