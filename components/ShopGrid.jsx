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
            <div className="p-6 flex-1 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="h3">{p.title}</h3>
                <p className="small">{p.short}</p>
              </div>
              <div className="mt-auto flex items-center justify-between gap-3">
                <p className="small">від <b className="text-xl text-ink">{fmt(minPrice(p))}</b></p>
                <button type="button" className="btn btn-primary btn-sm" onClick={() => setActive(p)}>Обрати</button>
              </div>
            </div>
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
