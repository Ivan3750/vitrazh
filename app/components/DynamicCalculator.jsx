"use client";

import { useState } from "react";

export default function DynamicCalculator({ productType }) {
  const [form, setForm] = useState({
    width: "",
    height: "",
    quantity: 1,
    meshType: "standard",
    color: "white",
    type: "istZ",
    hasBrake: false,
  });

  const isFrame = productType === "ramni-sitky";
  const isDoorMesh = productType === "dverni-sitky";
  const isAlyumin = productType === "alyuminiievi-sitky";
  const isPlisse = productType === "plisse-sitky";
  const isRollet = productType === "rolovi-sitky";
  const isVidkatna = productType === "vidkatna-sitka";

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

  const renderColors = (options) =>
    options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ));

  return (
    <div className="bg-[#f8f7f0] px-6 py-10 rounded-md max-w-2xl mx-auto mt-10">
      <h3 className="text-2xl mb-6 text-center">Розрахувати замовлення</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Width */}
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

        {/* Height */}
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

        {/* Quantity */}
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

        {/* Type */}
        {(isVidkatna) && (
          <div className="flex flex-col">
            <label htmlFor="type">Тип</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="istZ">Slide IST Z</option>
              <option value="istE">Slide IST E</option>

            </select>
          </div>
        )}
        {(isVidkatna) && (
          <div className="flex flex-col">
            <label htmlFor="meshType">Тип полотна:</label>
            <select
              name="meshType"
              value={form.meshType}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="standard">Стандарт</option>
              <option value="nevidymka">Невидимка</option>
              <option value="antypyl">Антипил</option>
              <option value="antycat">Антикішка</option>
            </select>
          </div>
        )}

        {/* Color */}
        {(isFrame || isDoorMesh || isAlyumin || isVidkatna) && (
          <div className="flex flex-col">
            <label htmlFor="color">Колір:</label>
            <select
              name="color"
              value={form.color}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              {renderColors([
                { value: "white", label: "Білий" },
                { value: "brown", label: "Коричневий" },
                { value: "anthracite", label: "Антрацит" },
              ])}
            </select>
          </div>
        )}

        {/* PLISSE */}
        {isPlisse && (
          <>
            <div className="flex flex-col">
              <label htmlFor="meshType">Тип сітки:</label>
              <select
                name="meshType"
                value={form.meshType}
                onChange={handleChange}
                className="p-2 border rounded"
              >
                {["PL1", "PL2", "PL3", "PL4", "PL5"].map((pl) => (
                  <option key={pl} value={pl}>
                    {pl}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="color">Колір:</label>
              <select
                name="color"
                value={form.color}
                onChange={handleChange}
                className="p-2 border rounded"
              >
                {renderColors([
                  { value: "white-glossy", label: "Білий глянець" },
                  { value: "brown", label: "Коричневий" },
                  { value: "anthracite", label: "Антрацит" },
                  { value: "golden-oak", label: "Золотий дуб структурний" },
                  { value: "black-matte", label: "Чорний матовий" },
                ])}
              </select>
            </div>
          </>
        )}

        {/* Rollet */}
        {isRollet && (
          <>
            <div className="flex flex-col">
              <label htmlFor="meshType">Тип сітки:</label>
              <select
                name="meshType"
                value={form.meshType}
                onChange={handleChange}
                className="p-2 border rounded"
              >
                <option value="vertical">Вертикальна</option>
                <option value="horizontal">Горизонтальна</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="color">Колір:</label>
              <select
                name="color"
                value={form.color}
                onChange={handleChange}
                className="p-2 border rounded"
              >
                {renderColors([
                  { value: "white", label: "Білий" },
                  { value: "brown", label: "Коричневий" },
                  { value: "anthracite", label: "Антрацит" },
                  { value: "golden-oak", label: "Золотий дуб структурний" },
                  { value: "black-matte", label: "Чорний матовий" },
                ])}
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

        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="bg-[#D8F422] text-black py-4 px-6 rounded-md text-lg font-semibold uppercase hover:bg-black hover:text-white transition"
          >
            Надіслати
          </button>
        </div>
      </form>
    </div>
  );
}
