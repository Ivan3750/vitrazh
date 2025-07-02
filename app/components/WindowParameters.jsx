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

const WindowParameters = ({ data, setData, }) => {
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
        <p className= "font-semibold block mb-2">Розмір вікна</p>
      <div className="flex gap-4">
        <div>
          <input
            type="number"
            min={0}
            max={500}
            value={form.width}
            placeholder="Введіть ширину, см"  
            onChange={(e) => setForm({ ...form, width: e.target.value })}
            className="border-b border-[#CED3DB] p-2  focus:outline-0 w-[200px]"
          />
        </div>
        <div>
          <input
            type="number"
            min={0}
            max={500}
            value={form.height}
            placeholder="Введіть висоту, см"  

            onChange={(e) => setForm({ ...form, height: e.target.value })}
          className="border-b border-[#CED3DB] p-2  focus:outline-0 w-[200px]"          />
        </div>
      </div>

      {/* Фурнітура */}
    <div>
  <label className="font-semibold block mb-2">Фурнітура:</label>
  <div className="flex gap-2">
    {hardwareOptions.map((opt) => (
      <label key={opt} className="flex items-center gap-2">
        <input
          type="radio"
          name="hardware"
          value={opt}
          checked={form.hardware === opt}
          onChange={(e) => setForm({ ...form, hardware: e.target.value })}
          className="accent-blue-600"
        />
        {opt}
      </label>
    ))}
  </div>
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
  <div className="flex gap-2">
    {colorOptions.map((c) => (
      <label key={c} className="flex items-center gap-2">
        <input
          type="radio"
          name="color"
          value={c}
          checked={form.color === c}
          onChange={(e) => setForm({ ...form, color: e.target.value })}
          className="accent-blue-600"
        />
        {c}
      </label>
    ))}
  </div>
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

   
      </div>
      </div>
    </section>
  );
};

export default WindowParameters;
