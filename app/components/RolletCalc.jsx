"use client"
import tap39 from "@/app/assets/images/calc/tap39.png"
import tap55 from "@/app/assets/images/calc/tap55.png"
import tap77 from "@/app/assets/images/calc/tap77.png"
import se45s from "@/app/assets/images/calc/se45s.png"
import sl100 from "@/app/assets/images/calc/sl100.png"
import tax55s from "@/app/assets/images/calc/tax55s.png"
import gg56 from "@/app/assets/images/calc/gg56.png"
import inset from "@/app/assets/images/calc/rollet_mounting_inset.png"
import outset from "@/app/assets/images/calc/rollet_mounting_outset.png"
import { useState } from "react";
import Image from "next/image";

const profiles = [
  { id: "TAP39", name: "TAP39", img: tap39 },
  { id: "TAP55", name: "TAP55", img: tap55 },
  { id: "TAP77", name: "TAP77", img: tap77 },
  { id: "SE45S", name: "SE45S", img: se45s },
  { id: "SL100", name: "SL100", img: sl100 },
  { id: "TAX55S", name: "TAX55S", img: tax55s },
  { id: "GG56", name: "GG56", img: gg56 },
];

const montages = [
  { id: "inset", name: "Вмонтований", img: inset},
  { id: "outset", name: "На проєм", img: outset},
];

export default function RolletCalculator() {
  const [width, setWidth] = useState(2000);
  const [height, setHeight] = useState(2000);
  const [profile, setProfile] = useState("TAP39");
  const [montage, setMontage] = useState("inset");

  const handleSubmit = () => {
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4 bg-white rounded-xl shadow-xl">
      <h2 className="text-xl font-bold text-center">Калькулятор роллет</h2>

      <div>
        <label>Ширина (мм):</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(+e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label>Висота (мм):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(+e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block mb-2">Тип профілю:</label>
        <div className="grid grid-cols-3 gap-3">
          {profiles.map((p) => (
            <label key={p.id} className="cursor-pointer border rounded p-2 flex flex-col items-center">
              <input
                type="radio"
                name="profile"
                value={p.id}
                checked={profile === p.id}
                onChange={() => setProfile(p.id)}
                className="mb-2"
              />
              <Image src={p.img} alt={p.name} width={60} height={60} />
              <span>{p.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block mb-2">Вид монтажу:</label>
        <div className="grid grid-cols-2 gap-4">
          {montages.map((m) => (
            <label key={m.id} className="cursor-pointer border rounded p-2 flex flex-col items-center">
              <input
                type="radio"
                name="montage"
                value={m.id}
                checked={montage === m.id}
                onChange={() => setMontage(m.id)}
                className="mb-2"
              />
              <Image src={m.img} alt={m.name} width={80} height={80} />
              <span>{m.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg"
        >
          Передзвоніть мені
        </button>
      </div>
    </div>
  );
}
