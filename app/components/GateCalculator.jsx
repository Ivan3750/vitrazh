'use client';
import { useState } from "react";

import gateSpring from "@/app/assets/images/calc/gate_type_springs.png"
import gateMechanism from "@/app/assets/images/calc/gate_type_mechanism.png"
import gatePro from "@/app/assets/images/calc/gate_type_pro.png"

import liftVertical from "@/app/assets/images/calc/gate_lift_vertical.jpg"
import liftLow from "@/app/assets/images/calc/gate_lift_low.jpg"
import liftStandard from "@/app/assets/images/calc/gate_lift_standart.jpg"
import liftHigh from "@/app/assets/images/calc/gate_lift_high.jpg"
import Modal from "@/app/components/Modal";

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
      { label: "Вертикальний монтаж (висота воріт + 600мм)", img: liftVertical.src },
    ],
  },
  {
    value: "prom_smart_auto",
    label: "Gant Prom Smart Auto",
    img: gatePro.src,
    liftTypes: [
      { label: "Високий (підвищений) монтаж (від 520 мм)", img: liftHigh.src },
      { label: "Стандартний монтаж (450мм)", img: liftStandard.src },
      { label: "Вертикальний монтаж (висота воріт + 600мм)", img: liftVertical.src },
    ],
  },
];

export default function GateCalculator() {
  const [width, setWidth] = useState(2000);
  const [height, setHeight] = useState(2000);
  const [gateType, setGateType] = useState("");
  const [liftType, setLiftType] = useState("");
  const [color, setColor] = useState("");
  const [extras, setExtras] = useState({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const selectedGate = gateTypes.find((g) => g.value === gateType);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("Сталася помилка.");
const handleCheckboxChange = (e) => {
  const { name, dataset, checked } = e.target;
  const labelValue = dataset.label; 
  setExtras((prev) => ({ ...prev, [labelValue]: checked }));
};
  const handleSubmit = () => {
    const gateData = {
      width,
      height,
      gateType,
      liftType,
      color,
      extras,
      name,
      phone,
      email,
    };

    fetch('/api/order_gates.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(gateData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        window.location.href = data.redirect;
        e.target.reset(); 
      } else {
        setModalMessage(data.message || "Сталася помилка. Спробуйте ще раз.");
        setShowModal(true);
   } })
    .catch(err => {
  setModalMessage("Сталася помилка з сервером.");
      setShowModal(true);
    });
  };



  return (
    <section className="p-5">
      <div className="bg-[#f8f7f0] px-6 py-10 rounded-md max-w-3xl mx-auto mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Калькулятор воріт</h2>

        {/* Контактні дані */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block font-medium mb-1">Ім’я</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Телефон</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

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

        {/* Тип воріт */}
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
                <img src={img} alt={label} className="w-36 h-36 object-cover rounded mb-3" />
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
                  <img src={img} alt={label} className="w-32 h-32 object-cover rounded mb-3" />
                  <span className="text-sm font-medium text-center">{label}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Колір */}
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

        {/* Додаткові опції */}
       <div className="mb-8">
  <h3 className="font-semibold mb-4 text-lg">Додаткові опції</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
    {[
      { name: "integrated_sectional_door_70", label: "Хвіртка з порогом 25 мм (до 3500 мм)" },
      { name: "integrated_sectional_door_25", label: "Хвіртка з порогом 25 мм (від 3501 мм)" },
      { name: "switching_set_for_connecting_open_wicket_contact", label: "Датчик відкритої хвіртки" },
      { name: "increased_lift_190_1370", label: "Підвищений підйом HR (600–1300 мм)" },
      { name: "vertical_lift_3000", label: "Вертикальний підйом (до 4500 мм)" },
      { name: "painting_panoramic_panel", label: "Панорамна панель фарбована" },
      { name: "reinforcing_profile_4000", label: "Підсилюючий профіль L=5020 мм" },
      { name: "reinforcing_profile_4000_6020", label: "Підсилюючий профіль L=6020 мм" },
      { name: "garage_handle", label: "Ручка врізна" },
      { name: "rope_break_protection", label: "Захист від розриву тросу" },
      { name: "mounting_bracket", label: "Монтажний куток 3 м" },
      { name: "mounting_bracket_15", label: "Монтажний куток від 15 м" },
      { name: "exterior_painting", label: "Фарбування зовнішнє RAL" },
      { name: "increased_lift_1370_2300", label: "Підвищений підйом HR (2301–3000 мм)" },
      { name: "increased_lift_1370_1800", label: "Підвищений підйом HR (1301–2300 мм)" },
      { name: "switching_selection", label: "Комутаційний набір" },
      { name: "window", label: "Акрилове вікно 635x330" },
      { name: "panoramic_panel", label: "Панорамна панель" },
      { name: "remote_lower_shaft", label: "Виносний нижній вал" },
      { name: "manual_chain_drive", label: "Ручний ланцюговий привід до 25 м²" },
      { name: "hand_chain", label: "Ланцюг для ручного приводу" },
      { name: "door_lock_kit", label: "Комплект замка" },
      { name: "collar_cord_set", label: "Комплект шнура" },
      { name: "set_of_hardware", label: "Комплект метизів" },
      { name: "bolt", label: "Засув" },
      { name: "interior_painting", label: "Фарбування внутрішнє RAL" },
    ].map(({ name, label }) => (
      <label key={name} className="flex items-center space-x-2">
        <input
          type="checkbox"
          name={name}
          data-label={label}
          checked={extras[label] || false}
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