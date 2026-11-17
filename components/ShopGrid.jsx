"use client";
import { useState } from "react";
import Image from "next/image";
import { minPrice } from "@/lib/shop";
import { fmt } from "@/lib/pricing";
import Modal from "./Modal";
import ProductConfigurator from "./ProductConfigurator";
import ProductArt from "./ProductArt";
import Reveal from "./Reveal";

export default function ShopGrid({ products }) {
  const [active, setActive] = useState(null);
  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <Reveal as="li" key={p.id} delay={(i % 3) * 90} className="card flex flex-col group">
            <button type="button" onClick={() => setActive(p)} className="zoom-img relative block aspect-[4/3] bg-soft text-left" aria-label={`Налаштувати: ${p.title}`}>
              {p.image ? <Image src={p.image} alt={p.title} fill sizes="(min-width:1024px) 380px, 90vw" className="object-cover" /> : <ProductArt className="absolute inset-0 w-full h-full" />}
            </button>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-navy">{p.title}</h3>
              <p className="text-sm text-muted mt-1">{p.short}</p>
              <div className="mt-auto pt-4 flex items-end justify-between gap-3">
                <p className="text-sm text-muted">від <b className="text-xl text-navy">{fmt(minPrice(p))}</b></p>
                <button type="button" className="btn btn-accent btn-sm" onClick={() => setActive(p)}>Обрати</button>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title ?? ""} wide>
        {active && <ProductConfigurator key={active.id} product={active} onAdded={() => setActive(null)} />}
      </Modal>
      <p className="mt-8 text-xs text-muted">Ціни орієнтовні. Остаточну вартість підтвердить менеджер після оформлення замовлення.</p>
    </>
  );
}
