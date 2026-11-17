"use client";
import { useState } from "react";
import Image from "next/image";
import { minPrice } from "@/lib/shop";
import Modal from "./Modal";
import ProductConfigurator from "./ProductConfigurator";
import ProductArt from "./ProductArt";
import Reveal from "./Reveal";
import Icon from "./Icon";

const nf = (n) => new Intl.NumberFormat("uk-UA", { maximumFractionDigits: 0 }).format(n).replace(/ /g, " ");

export default function ShopGrid({ products }) {
  const [active, setActive] = useState(null);
  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <Reveal as="li" key={p.id} delay={(i % 3) * 80}>
            <article className="card group flex flex-col h-full overflow-hidden">
              <button type="button" onClick={() => setActive(p)} className="zoom-img relative block aspect-[4/3] bg-surface-2 text-left overflow-hidden" aria-label={`Налаштувати: ${p.title}`}>
                {p.image ? <Image src={p.image} alt={p.title} fill sizes="(min-width:1024px) 400px, (min-width:640px) 50vw, 100vw" className="object-cover" /> : <ProductArt className="absolute inset-0 w-full h-full" />}
                {p.badge && <span className="badge absolute left-4 top-4 z-10">{p.badge}</span>}
                <span className="absolute inset-x-0 bottom-0 z-10 bg-deep/80 text-white text-xs font-semibold tracking-widest uppercase px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">Налаштувати <Icon name="arrow" size={14} /></span>
              </button>
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="h3">{p.title}</h3>
                  <p className="small">{p.short}</p>
                </div>
                {p.features && (
                  <ul className="flex flex-col gap-2 text-sm text-text-2">
                    {p.features.slice(0, 3).map((f) => <li key={f} className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-accent shrink-0 shadow-[0_0_0_1px_rgba(0,0,0,.25)]" />{f}</li>)}
                  </ul>
                )}
                <div className="mt-auto flex items-end justify-between gap-3 pt-2">
                  <div><p className="meta">від</p><p className="num text-3xl leading-none mt-1 whitespace-nowrap">{nf(minPrice(p))}<span className="text-base text-text-2 ml-1.5">грн</span></p></div>
                  <button type="button" className="btn btn-primary btn-sm" onClick={() => setActive(p)}>Обрати</button>
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
