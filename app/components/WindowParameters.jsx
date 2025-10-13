"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const configs = {
  conf1: ["01", "02", "03", "04"],
  conf2: ["09", "10", "11", "12"],
  conf3: ["17", "18", "19", "20"],
  conf4: ["25", "26"],
};

const hardwareOptions = ["Vorne", "Maco", "Siegenia"];
const glassOptions = ["Енергозберігаюче", "Сонцезахисне", "Тепла дистанція", "Мультифункціональне"];
const colorOptions = ["Білий", "Ламінація зовн.", "Ламінація внутр.", "Двостороння", "В масі"];
const serviceOptions = ["Монтаж", "Демонтаж"];

const WindowParameters = ({ data, setData, setValid }) => {
  const [form, setForm] = useState({
    shape: data.window.shape || "",
    width: data.window.width || "",
    height: data.window.height || "",
    hardware: data.window.hardware || "",
    glass: data.window.glass || [],
    color: data.window.color || "",
    services: data.window.services || [],
    config: data.window.config || null,
  });

  const [activeMain, setActiveMain] = useState("conf3");
  const [selected, setSelected] = useState(data.window.config || null);

  // Обробник вибору конфігурації
  const handleSelect = (conf, index) => {
    const selectedNum = configs[conf][index];
    const newSelectedUrl = `/calc/windows_sprite_${selectedNum}.png`;
    setSelected(newSelectedUrl);
    setForm((prev) => ({ ...prev, config: newSelectedUrl }));
  };

  // Обробник чекбоксів
  const handleCheckbox = (field, value) => {
    setForm((prev) => {
      const current = new Set(prev[field]);
      current.has(value) ? current.delete(value) : current.add(value);
      return { ...prev, [field]: Array.from(current) };
    });
  };

  // Перевірка чи заповнена вся форма
  const isComplete =
    form.config &&
    form.width > 0 &&
    form.height > 0 &&
    form.hardware &&
    form.glass.length > 0 &&
    form.color &&
    form.services.length > 0;

  // Синхронізація з батьківським компонентом
  useEffect(() => {
    if (!setData) return;
    setData((prev) => ({ ...prev, window: { ...form } }));
    setValid?.(isComplete);
  }, [form, isComplete, setData, setValid]);

  return (
    <section className="space-y-6 mx-6">
      <motion.h2
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Вибір параметрів вікна
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-10 md:justify-between justify-center">
        {/* Конфігурації */}
        <div>
          <p className="font-semibold mb-2">Конфігурація:</p>
          <ul className="flex gap-4 flex-wrap">
            {Object.keys(configs).map((conf) => (
              <motion.li
                key={conf}
                onClick={() => setActiveMain(conf)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`cursor-pointer border-2 rounded-md p-2 ${
                  activeMain === conf ? "border-[#D8F422]" : "border-transparent"
                }`}
              >
                <img
                  src={`/calc/windows_sprite_${configs[conf][0]}.png`}
                  alt={`Конфігурація ${configs[conf][0]}`}
                  width={70}
                  height={70}
                />
              </motion.li>
            ))}
          </ul>

          <AnimatePresence mode="wait">
            <motion.ul
              key={activeMain}
              className="flex gap-4 flex-wrap mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {configs[activeMain]?.map((num, index) => {
                const imgUrl = `/calc/windows_sprite_${num}.png`;
                return (
                  <motion.li
                    key={index}
                    onClick={() => handleSelect(activeMain, index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`cursor-pointer border-2 rounded-md p-2 ${
                      selected === imgUrl ? "border-[#D8F422]" : "border-transparent"
                    }`}
                  >
                    <img src={imgUrl} alt={`Конфігурація ${num}`} width={70} height={70} />
                  </motion.li>
                );
              })}
            </motion.ul>
          </AnimatePresence>
        </div>

        {/* Поля форми */}
        <div className="flex flex-col gap-6 w-full max-w-md">
          {/* Розміри */}
          <div>
            <label className="font-semibold block mb-2">Розмір вікна:</label>
            <div className="flex gap-4">
              <input
                type="number"
                min="0"
                max="500"
                value={form.width}
                placeholder="Ширина, см"
                onChange={(e) => setForm({ ...form, width: Number(e.target.value) })}
                className="border-b border-[#CED3DB] p-2 focus:outline-0 w-full"
              />
              <input
                type="number"
                min="0"
                max="500"
                value={form.height}
                placeholder="Висота, см"
                onChange={(e) => setForm({ ...form, height: Number(e.target.value) })}
                className="border-b border-[#CED3DB] p-2 focus:outline-0 w-full"
              />
            </div>
          </div>

          {/* Фурнітура */}
          <div>
            <label className="font-semibold block mb-2">Фурнітура:</label>
            <div className="flex gap-2 flex-wrap">
              {hardwareOptions.map((opt) => (
                <motion.label key={opt} className="flex items-center gap-2" whileTap={{ scale: 0.95 }}>
                  <input
                    type="radio"
                    name="hardware"
                    value={opt}
                    checked={form.hardware === opt}
                    onChange={(e) => setForm({ ...form, hardware: e.target.value })}
                    className="accent-blue-600"
                  />
                  {opt}
                </motion.label>
              ))}
            </div>
          </div>

          {/* Склопакет */}
          <div>
            <label className="font-semibold block mb-2">Склопакет:</label>
            <div className="flex flex-wrap gap-3">
              {glassOptions.map((g) => (
                <motion.label key={g} className="flex items-center gap-2" whileTap={{ scale: 0.95 }}>
                  <input
                    type="checkbox"
                    checked={form.glass.includes(g)}
                    onChange={() => handleCheckbox("glass", g)}
                  />
                  {g}
                </motion.label>
              ))}
            </div>
          </div>

          {/* Колір */}
          <div>
            <label className="font-semibold block mb-2">Колір:</label>
            <div className="flex gap-2 flex-wrap">
              {colorOptions.map((c) => (
                <motion.label key={c} className="flex items-center gap-2" whileTap={{ scale: 0.95 }}>
                  <input
                    type="radio"
                    name="color"
                    value={c}
                    checked={form.color === c}
                    onChange={(e) => setForm({ ...form, color: e.target.value })}
                    className="accent-blue-600"
                  />
                  {c}
                </motion.label>
              ))}
            </div>
          </div>

          {/* Послуги */}
          <div>
            <label className="font-semibold block mb-2">Послуги:</label>
            <div className="flex flex-wrap gap-3">
              {serviceOptions.map((s) => (
                <motion.label key={s} className="flex items-center gap-2" whileTap={{ scale: 0.95 }}>
                  <input
                    type="checkbox"
                    checked={form.services.includes(s)}
                    onChange={() => handleCheckbox("services", s)}
                  />
                  {s}
                </motion.label>
              ))}
            </div>
          </div>

          {/* Повідомлення про незаповнені поля */}
          {!isComplete && (
            <p className="text-red-600 font-semibold mt-4">⚠ Заповніть усі параметри!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default WindowParameters;
