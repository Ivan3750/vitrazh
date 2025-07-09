"use client"

import { useState } from "react";

export default function DynamicCalculator({ productType }) {
  const [form, setForm] = useState({
    width: "",
    height: "",
    quantity: 1,
    meshType: "fiberglass",
    color: "white",
    hasBrake: false,
  });

  const isDoorMesh = productType === "dverni-sitky";
  const isRollet = productType === "rolovi-sitky";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Відправлено форму:", form);
    alert("Дякуємо! Ми з вами зв'яжемося найближчим часом.");
  };

  return (
    <div className="bg-[#f8f7f0] px-6 py-10 rounded-md max-w-2xl mx-auto mt-10">
      <h3 className="text-2xl mb-6 text-center">Розрахувати замовлення</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="width">Ширина (мм):</label>
          <input
            type="number"
            name="width"
            value={form.width}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="height">Висота (мм):</label>
          <input
            type="number"
            name="height"
            value={form.height}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="quantity">Кількість:</label>
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            className="p-2 border rounded"
            min={1}
          />
        </div>

        {isDoorMesh && (
          <div className="flex flex-col">
            <label htmlFor="meshType">Тип сітки:</label>
            <select
              name="meshType"
              value={form.meshType}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="PL1">PL1</option>
              <option value="PL2">PL2</option>
              <option value="PL3">PL3</option>
              <option value="PL4">PL4</option>
              <option value="PL5">PL5</option>
            </select>
          </div>
        )}

        {isRollet && (
          <>
            <div className="flex flex-col">
              <label htmlFor="color">Колір:</label>
              <select
                name="color"
                value={form.color}
                onChange={handleChange}
                className="p-2 border rounded"
              >
                <option value="white">Білий</option>
                <option value="brown">Коричневий</option>
                <option value="brown">Антрацит</option>
                <option value="brown">Золотий дуб структурний</option>
                <option value="brown">Чорний матовий</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="color">Тип сітки</label>
              <select
                name="color"
                value={form.color}
                onChange={handleChange}
                className="p-2 border rounded"
              >
                <option value="white">Вертикальна</option>
                <option value="brown">Горизонтальна</option>
                
              </select>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="hasBrake"
                checked={form.hasBrake}
                onChange={handleChange}
              />
              <label htmlFor="hasBrake">Гальмо</label>
            </div>
          </>
        )}

        <button
          type="submit"
          className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
        >
          Відправити
        </button>
      </form>
    </div>
  );
}
