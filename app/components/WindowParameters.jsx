import { useState } from "react";

const windowShapes = [
  { label: "Прямокутне", value: "rect", icon: "/shapes/rect.svg" },
  { label: "Арочне", value: "arch", icon: "/shapes/arch.svg" },
  { label: "Трикутне", value: "triangle", icon: "/shapes/triangle.svg" },
];

const hardwareOptions = ["Vorne", "Maco", "Siegenia"];
const glassOptions = ["Енергозберігаюче", "Сонцезахисне", "Тепла дистанція", "Мультифункціональне"];
const colorOptions = ["Білий", "Ламінація зовн.", "Ламінація внутр.", "Двостороння", "В масі"];
const serviceOptions = ["Монтаж", "Демонтаж"];

const WindowParameters = ({ data, setData, nextStep, prevStep }) => {
  const [form, setForm] = useState({
    shape: data.window.shape || "",
    width: data.window.width || "",
    height: data.window.height || "",
    hardware: data.window.hardware || "",
    glass: data.window.glass || [],
    color: data.window.color || "",
    services: data.window.services || [],
  });

  const handleCheckbox = (field, value) => {
    setForm((prev) => {
      const current = new Set(prev[field]);
      current.has(value) ? current.delete(value) : current.add(value);
      return { ...prev, [field]: Array.from(current) };
    });
  };

  const handleNext = () => {
    setData((prev) => ({ ...prev, window: form }));
    nextStep();
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Вибір параметрів вікна</h2>
<div className="flex justify-between">
      {/* SVG типи */}
      <div>
        <p className="font-semibold mb-2">Форма вікна:</p>
        <div className="flex gap-4">
          {windowShapes.map((shape) => (
            <div
              key={shape.value}
              className={`border p-4 rounded cursor-pointer ${form.shape === shape.value ? "border-blue-500" : "border-gray-300"}`}
              onClick={() => setForm((prev) => ({ ...prev, shape: shape.value }))}
            >
              <img src={shape.icon} alt={shape.label} className="w-16 h-16" />
              <p className="text-center">{shape.label}</p>
            </div>
          ))}
        </div>
      </div>
<div>
      {/* Розміри */}
      <div className="flex gap-4">
        <div>
          <label className="block font-semibold">Ширина (см):</label>
          <input
            type="number"
            value={form.width}
            onChange={(e) => setForm({ ...form, width: e.target.value })}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-semibold">Висота (см):</label>
          <input
            type="number"
            value={form.height}
            onChange={(e) => setForm({ ...form, height: e.target.value })}
            className="border rounded p-2 w-full"
          />
        </div>
      </div>

      {/* Фурнітура */}
      <div>
        <label className="font-semibold block mb-2">Фурнітура:</label>
        <select
          value={form.hardware}
          onChange={(e) => setForm({ ...form, hardware: e.target.value })}
          className="border p-2 rounded w-full"
        >
          <option value="">Оберіть...</option>
          {hardwareOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* Енергопакет */}
      <div>
        <p className="font-semibold mb-2">Склопакет:</p>
        <div className="flex flex-wrap gap-3">
          {glassOptions.map((g) => (
            <label key={g} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.glass.includes(g)}
                onChange={() => handleCheckbox("glass", g)}
              />
              {g}
            </label>
          ))}
        </div>
      </div>

      {/* Колір */}
      <div>
        <label className="font-semibold block mb-2">Колір:</label>
        <select
          value={form.color}
          onChange={(e) => setForm({ ...form, color: e.target.value })}
          className="border p-2 rounded w-full"
        >
          <option value="">Оберіть...</option>
          {colorOptions.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Послуги */}
      <div>
        <p className="font-semibold mb-2">Послуги:</p>
        <div className="flex flex-wrap gap-3">
          {serviceOptions.map((s) => (
            <label key={s} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.services.includes(s)}
                onChange={() => handleCheckbox("services", s)}
              />
              {s}
            </label>
          ))}
        </div>
      </div>

      {/* Кнопки */}
      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">← Назад</button>
        <button onClick={handleNext} className="px-4 py-2 bg-[#D8F422] rounded hover:bg-yellow-400">Далі →</button>
      </div>
      </div>
      </div>
    </section>
  );
};

export default WindowParameters;
