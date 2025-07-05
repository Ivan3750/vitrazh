"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const configs = {
  conf1: ["01", "02", "03", "04"],
  conf2: ["09", "10", "11", "12"],
  conf3: ["17", "18", "19", "20"],
  conf4: ["25", "26"],
};

export default function WindowConfigCalculator() {
  const [activeMain, setActiveMain] = useState("conf3");
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ width: "", height: "", total: "" });

  const handleSelect = (conf, index) => {
    setSelected(`${conf}.${index + 1}`);
  };

  return (
    <motion.div
      className="first-calc py-12 px-6 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <motion.span
          className="bg-[#D8F422] text-black px-3 py-1 rounded-full mr-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          1
        </motion.span>
        Конфігурація та система
      </h3>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Ліва панель */}
        <div className="first-calc-left">
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
                <Image
                  src={`/calc/windows_sprite_${configs[conf][0]}.png`}
                  alt="Конфігурація"
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
              {configs[activeMain]?.map((num, index) => (
                <motion.li
                  key={index}
                  onClick={() => handleSelect(activeMain, index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`cursor-pointer border-2 rounded-md p-2 transition-all ${
                    selected === `${activeMain}.${index + 1}`
                      ? "border-[#D8F422] shadow-lg"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={`/calc/windows_sprite_${num}.png`}
                    alt="Конфігурація"
                    width={70}
                    height={70}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        {/* Права панель (форма) */}
        <motion.div
          className="first-calc-right flex flex-col gap-4 w-full max-w-sm"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.input
            type="number"
            placeholder="Ширина (см)"
            name="calc-width"
            value={form.width}
            onChange={(e) => setForm({ ...form, width: e.target.value })}
            className="border px-4 py-2 rounded focus:ring-2 focus:ring-[#D8F422]"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="number"
            placeholder="Висота (см)"
            name="calc-height"
            value={form.height}
            onChange={(e) => setForm({ ...form, height: e.target.value })}
            className="border px-4 py-2 rounded focus:ring-2 focus:ring-[#D8F422]"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="number"
            placeholder="Кількість (шт)"
            name="calc-total"
            value={form.total}
            onChange={(e) => setForm({ ...form, total: e.target.value })}
            className="border px-4 py-2 rounded focus:ring-2 focus:ring-[#D8F422]"
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
