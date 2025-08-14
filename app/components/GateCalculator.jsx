'use client';
import { useState } from "react";

import gateSpring from "@/app/assets/images/calc/gate_type_springs.png"
import gateMechanism from "@/app/assets/images/calc/gate_type_mechanism.png"
import gatePro from "@/app/assets/images/calc/gate_type_pro.png"

import liftVertical from "@/app/assets/images/calc/gate_lift_vertical.jpg"
import liftLow from "@/app/assets/images/calc/gate_lift_low.jpg"
import liftStandard from "@/app/assets/images/calc/gate_lift_standart.jpg"
import liftHigh from "@/app/assets/images/calc/gate_lift_high.jpg"

const gateTypes = [
  {
    value: "springs",
    label: "Gant PR з пружинами розтягу",
    img: gateSpring.src,
    liftTypes: [
      { label: "Низький монтаж", img: liftLow.src },
    ],
  },
  {
    value: "mechanism",
    label: "Gant Plus з торсіонно-пружинним механізмом",
    img: gateMechanism.src,
    liftTypes: [
      { label: "Низький монтаж", img: liftLow.src },
    ],
  },
  {
    value: "pro",
    label: "Gant Prom (промислові)",
    img: gatePro.src,
    liftTypes: [
      { label: "Високий (підвищений) монтаж (від 520 мм)", img: liftHigh.src },
      { label: "Стандартний монтаж (450мм)", img: liftStandard.src },
      { label: "Вертикальний монтаж (висота воріт + 600мм)", img: liftVertical.src },
    ],
  },
  {
    value: "prom_auto",
    label: "Prom Gant Prom Auto",
    img: gatePro.src,
    liftTypes: [
  { label: "Високий (підвищений) монтаж (від 520 мм)", img: liftHigh.src },
      { label: "Стандартний монтаж (450мм)", img: liftStandard.src },
      { label: "Вертикальний монтаж (висота воріт + 600мм)", img: liftVertical.src },    ],
  },
  {
    value: "prom_smart_auto",
    label: "Gant Prom Smart Auto",
    img: gatePro.src,
    liftTypes: [
  { label: "Високий (підвищений) монтаж (від 520 мм)", img: liftHigh.src },
      { label: "Стандартний монтаж (450мм)", img: liftStandard.src },
      { label: "Вертикальний монтаж (висота воріт + 600мм)", img: liftVertical.src },    ],
  },
];

export default function GateCalculator() {
  const [width, setWidth] = useState(2000);
  const [height, setHeight] = useState(2000);
  const [gateType, setGateType] = useState("");
  const [liftType, setLiftType] = useState("");
  const [color, setColor] = useState("");
  const [extras, setExtras] = useState({});

  const selectedGate = gateTypes.find((g) => g.value === gateType);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setExtras((prev) => ({ ...prev, [name]: checked }));
  };

const handleSubmit = () => {
    const gateData = {
        width,
        height,
        gateType,
        liftType,
        color,
        extras
    };

    fetch('/order_gates.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(gateData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = data.redirect; // редірект на "Дякую"
        } else {
            alert('Сталася помилка: ' + data.message);
        }
    })
    .catch(err => {
        console.error(err);
        alert('Помилка при відправці заявки.');
    });
};


  return (
    <section className="p-5">
    <div className="bg-[#f8f7f0] px-6 py-10 rounded-md max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Калькулятор воріт</h2>

      {/* Width & Height */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block font-medium mb-1">Ширина (мм)</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Висота (мм)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold mb-4 text-lg">Тип воріт</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gateTypes.map(({ value, label, img }) => (
            <label
              key={value}
              className={`cursor-pointer border rounded-xl p-3 flex flex-col items-center justify-center transition-all  ${
                gateType === value  ? "border-[#D8F422] bg-white"
                    : "border-gray-200 bg-gray-50 hover:bg-white"
              }`}
            >
              <input
                type="radio"
                name="gateType"
                value={value}
                checked={gateType === value}
                onChange={() => {
                  setGateType(value);
                  setLiftType("");
                }}
                className="hidden"
              />
              <img src={img.src} alt={label} className="w-36 h-36 object-cover rounded mb-3" />
              <span className="text-sm font-medium text-center">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {selectedGate && (
        <div className="mb-8">
          <h3 className="font-semibold mb-4 text-lg">Тип підйому</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {selectedGate.liftTypes.map(({ label, img }) => (
              <label
                key={label}
                className={`cursor-pointer border rounded-xl p-3 flex flex-col items-center justify-center transition-all  ${
                  liftType === label  ? "border-[#D8F422] bg-white"
                    : "border-gray-200 bg-gray-50 hover:bg-white" 
                }`}
              >
                <input
                  type="radio"
                  name="liftType"
                  value={label}
                  checked={liftType === label}
                  onChange={() => setLiftType(label)}
                  className="hidden"
                />
                <img src={img.src} alt={label} className="w-32 h-32 object-cover rounded mb-3" />
                <span className="text-sm font-medium text-center">{label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
      <div className="mb-8">
        <h3 className="font-semibold mb-4 text-lg">Колір</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { value: "white", label: "Білий" },
            { value: "grey", label: "Сірий" },
            { value: "brown", label: "Коричневий" },
            { value: "anthracite", label: "Антрацит" },
            { value: "dark_oak", label: "Темний дуб" },
          ].map(({ value, label }) => (
            <label key={value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="color"
                value={value}
                checked={color === value}
                onChange={() => setColor(value)}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold mb-4 text-lg">Додаткові опції</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
  { name: "integrated_sectional_door_70", label: "Хвіртка з порогом 25 мм для воріт шириною до 3500 мм", disabled: false },
  { name: "integrated_sectional_door_25", label: "Хвіртка з порогом 25 мм для воріт шириною від 3501 мм", disabled: false },
  { name: "switching_set_for_connecting_open_wicket_contact", label: "Датчик відкритої хвіртки" },
  { name: "increased_lift_190_1370", label: "Підвищений підйом (вал зверху), HR перемичка (притолока) від 600 до 1300мм" },
  { name: "vertical_lift_3000", label: "Вертикальний підйом при висоті воріт до 4500мм" },
  { name: "painting_panoramic_panel", label: "Панорамна панель фарбована, шт", input: "number" },
  { name: "reinforcing_profile_4000", label: "Дельта-профіль підсилюючий L=5020 (шт.) *Рекомедуємо для воріт шириною від 4500 до 5000 мм", input: "number", disabled: false },
  { name: "reinforcing_profile_4000_6020", label: "Дельта-профіль підсилюючий L=6020 (шт.) *Рекомедуємо для воріт шириною від 5000 до 6000 мм", input: "number", disabled: false },
  { name: "garage_handle", label: "Ручка врізна додатково (є в базовій комплектації)" },
  { name: "rope_break_protection", label: "Захист від розриву тросу додатково (є в базовій комплектації при S воріт від 12 кв.м.)" },
  { name: "mounting_bracket", label: "Додатковий монтажний куток (3,06 м), м.п.", input: "number" },
  { name: "mounting_bracket_15", label: "Додатковий монтажний куток (від 15 м), м.п.", input: "number" },
  { name: "exterior_painting", label: "Фарбування зовнішньої сторони панелей RAL" },
  { name: "increased_lift_1370_2300", label: "Підвищений підйом (вал зверху), HR перемичка (притолока) від 2301 до 3000мм" },
  { name: "increased_lift_1370_1800", label: "Підвищений підйом (вал зверху), HR перемичка (притолока) від 1301 до 2300мм" },
  { name: "switching_selection", label: "Комутаційний набір" },
  { name: "window", label: "Вікно акрилове 635 * 330", input: "number" },
  { name: "panoramic_panel", label: "Панорамна панель, шт", input: "number" },
  { name: "remote_lower_shaft", label: "Додаткова опція до підвищеного або вертикального підйому - виносний нижній вал" },
  { name: "manual_chain_drive", label: "Ручний ланцюговий привід до 25 м кв (бокова відстань 350мм)" },
  { name: "hand_chain", label: "Ланцюг для ручного ланцюгового приводу додатково (м.п.)", input: "number" },
  { name: "door_lock_kit", label: "Комплект замка для гаражних воріт односторонній" },
  { name: "collar_cord_set", label: "Комплект шнура воротного" },
  { name: "set_of_hardware", label: "Комплект метизів для кріплення до проєму додатково (є в базовій комплектації)", input: "number" },
  { name: "bolt", label: "Засув додатково (є в базовій комплектації)" },
  { name: "interior_painting", label: "Фарбування внутрішньої сторони панелей RAL" },
]
.map(({ name, label }) => (
            <label key={name} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name={name}
                checked={extras[name] || false}
                onChange={handleCheckboxChange}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-[#D8F422] py-[18px] px-[24px] rounded-sm uppercase font-semibold flex min-w-[200px] max-w-[250px] gap-[5px] justify-center hover:bg-[#0f0f0f] hover:text-white transition-colors duration-200"
        >
          Надіслати
        </button>
      </div>
    </div>
    </section>
  );
}
