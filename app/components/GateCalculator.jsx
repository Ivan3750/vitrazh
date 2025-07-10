// app/components/GateCalculator.jsx
'use client';

import { useState } from "react";

const gateTypes = [
  {
    value: "springs",
    label: "Пружинні",
    img: "/images/springs.jpg",
    liftTypes: ["Вертикальний", "Низький"]
  },
  {
    value: "mechanism",
    label: "Механізм",
    img: "/images/mechanism.jpg",
    liftTypes: ["Вертикальний"]
  },
  {
    value: "pro",
    label: "Pro",
    img: "/images/pro.jpg",
    liftTypes: ["Низький", "Стандарт"]
  },
  {
    value: "prom_auto",
    label: "Prom Auto",
    img: "/images/prom_auto.jpg",
    liftTypes: ["Автоматичний"]
  },
  {
    value: "prom_smart_auto",
    label: "Smart Auto",
    img: "/images/prom_smart_auto.jpg",
    liftTypes: ["Автоматичний"]
  },
];

export default function GateCalculator() {
  const [width, setWidth] = useState(2000);
  const [height, setHeight] = useState(2000);
  const [gateType, setGateType] = useState("");
  const [liftType, setLiftType] = useState("");
  const [color, setColor] = useState("");
  const [extras, setExtras] = useState({});
  const [comment, setComment] = useState("");

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setExtras((prev) => ({ ...prev, [name]: checked }));
  };

  const selectedGate = gateTypes.find((g) => g.value === gateType);

  const handleSubmit = () => {
    const formData = {
      width,
      height,
      gateType,
      liftType,
      color,
      extras,
      comment,
    };
    console.log("Submitted Data:", formData);
    alert("Дані відправлені. З вами зв'яжемося!");
  };

  return (
    <div className="bg-[#f8f7f0] px-6 py-10 rounded-md max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Калькулятор воріт</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Ширина (мм)</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Висота (мм)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Тип воріт</h3>
        {gateTypes.map(({ value, label, img }) => (
          <label key={value} className="flex items-center space-x-3 mb-2">
            <input
              type="radio"
              name="gateType"
              value={value}
              checked={gateType === value}
              onChange={() => {
                setGateType(value);
                setLiftType("");
              }}
              className="mr-2"
            />
            <img src={img} alt={label} className="w-16 h-16 object-cover rounded" />
            <span>{label}</span>
          </label>
        ))}
      </div>

      {selectedGate && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Тип підйому</h3>
          {selectedGate.liftTypes.map((type) => (
            <label key={type} className="block mb-1">
              <input
                type="radio"
                name="liftType"
                value={type}
                checked={liftType === type}
                onChange={() => setLiftType(type)}
                className="mr-2"
              />
              {type}
            </label>
          ))}
        </div>
      )}

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Колір</h3>
        {[
          { value: "white", label: "Білий" },
          { value: "grey", label: "Сірий" },
          { value: "brown", label: "Коричневий" },
          { value: "anthracite", label: "Антрацит" },
          { value: "dark_oak", label: "Темний дуб" },
        ].map(({ value, label }) => (
          <label key={value} className="block mb-1">
            <input
              type="radio"
              name="color"
              value={value}
              checked={color === value}
              onChange={() => setColor(value)}
              className="mr-2"
            />
            {label}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Додаткові опції</h3>
        {[
          { name: "bolt", label: "Засув" },
          { name: "door_lock_kit", label: "Комплект замків" },
          { name: "garage_handle", label: "Ручка" },
          { name: "angled_plastic_leg", label: "Нахилена ніжка" },
          { name: "exterior_painting", label: "Зовнішнє фарбування" },
        ].map(({ name, label }) => (
          <label key={name} className="block mb-1">
            <input
              type="checkbox"
              name={name}
              checked={extras[name] || false}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            {label}
          </label>
        ))}
      </div>

     <button
          onClick={handleSubmit}
          className="bg-[#D8F422] py-[18px] px-[24px] rounded-sm uppercase font-semibold flex min-w-[200px] max-w-[250px] gap-[5px] justify-between hover:bg-[#0f0f0f] hover:text-white"
        >
          Передзвоніть мені
        </button>
    </div>
  );
}
