"use client";
import { useState } from "react";
import Image from "next/image";

const COLORS = [
  { n: 1, label: "Світлий метал" },
  { n: 2, label: "Графіт" },
  { n: 3, label: "Темний горіх" },
  { n: 4, label: "Вишня" },
  { n: 5, label: "Золотий дуб" },
  { n: 6, label: "Світлий дуб" },
];

// Візуалізатор ламінації: вибір кольору плівки змінює вигляд будинку
export default function LaminationViewer() {
  const [n, setN] = useState(1);
  return (
    <div className="grid gap-10 lg:grid-cols-2 items-center">
      <div className="flex flex-col gap-6 order-2 lg:order-1">
        <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Колір ламінації">
          {COLORS.map((c) => (
            <button key={c.n} type="button" role="radio" aria-checked={n === c.n} aria-label={c.label} title={c.label} onClick={() => setN(c.n)}
              className={`relative w-14 h-14 overflow-hidden transition-all ${n === c.n ? "ring-2 ring-sel ring-offset-2 ring-offset-bg scale-105" : "hover:scale-105"}`}>
              <Image src={`/img/decor/swatch-${c.n}.webp`} alt="" fill sizes="56px" className="object-cover" />
            </button>
          ))}
        </div>
        <p className="small">Обрано: <b className="text-ink">{COLORS[n - 1].label}</b></p>
        <p className="lead">36 кольорів ламінації від світового лідера — компанії RENOLIT (Німеччина). Плівкам не страшні ні сонце, ні вітер, ні дощ. Вони облагороджують вікна, балконні, міжкімнатні та вхідні двері, зимові сади, підсилюють захисні властивості, енергоефективність та збільшують термін служби конструкцій.</p>
      </div>
      <div className="relative aspect-[5/4] order-1 lg:order-2 bg-surface overflow-hidden">
        {COLORS.map((c) => (
          <Image key={c.n} src={`/img/decor/house-${c.n}.webp`} alt={`Будинок із ламінацією: ${c.label}`} fill sizes="(min-width:1024px) 600px, 100vw" className={`object-cover transition-opacity duration-700 ${n === c.n ? "opacity-100" : "opacity-0"}`} />
        ))}
      </div>
    </div>
  );
}
