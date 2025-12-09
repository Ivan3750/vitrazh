"use client";

import { useState } from "react";
import Modal from "@/app/components/Modal";

export default function DynamicCalculator({ productType }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    width: "",
    height: "",
    quantity: 1,
    meshType: "standard",
    color: "",
    type: "",
    hasBrake: false,
    fabricTransparency: "",
    fabricStructure: "",
    motorType: "",
    fabricType: "",
    lamellaSize: "",
    canvasType: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("Сталася помилка.");

  const isFrame = productType === "ramna-sitka";
  const isDoorMesh = productType === "dverni-sitky";
  const isAlyumin = productType === "alyuminiievi-sitky";
  const isPlisse = productType === "plisse-sitky";
  const isRollet = productType === "rolovi-sitky";
  const isVidkatna = productType === "vidkatna-sitka";
  const isZhalizi = productType === "alyuminiievi-zhalyuzi";
  const isVertykalni = productType === "vertykalni-tkanovi-zhalyuzi";
  const isTkanevi = productType === "rulonni-shtory-tkanovi-rolete";
  const isDeniNich = productType === "den-nich-tkanovi-rolete";
  const isDoorZhalizi = productType === "derevyani-zhalyuzi";
  const isRamka = productType === "rymski-shtory";
  const isPlisseNew = productType === "zhalyuzi-plysse";
  const isAutomatica = productType === "avtomatyka-zhalyuzi";

  const getRequiredFields = () => {
    const base = ["name", "phone", "width", "height", "quantity"];

    if (isFrame || isDoorMesh || isAlyumin || isVidkatna) {
      base.push("meshType", "color");
    }

    if (isVidkatna) base.push("type");
    if (isZhalizi) base.push("type", "canvasType", "color");
    if (isVertykalni) base.push("type", "lamellaSize");
    if (isTkanevi || isDeniNich) base.push("type", "color", "fabricType");
    if (isDoorZhalizi) base.push("type", "canvasType", "color");
    if (isRamka) base.push("type", "color");
    if (isPlisseNew) base.push("fabricTransparency", "fabricStructure");
    if (isAutomatica) base.push("motorType", "fabricTransparency");

    return base;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const required = getRequiredFields();
    const missing = required.filter(
      (f) => !form[f] || form[f].toString().trim() === ""
    );

    if (missing.length > 0) {
      setModalMessage("Будь ласка, заповніть всі обов’язкові поля.");
      setShowModal(true);
      return;
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setModalMessage("Вкажіть коректний e-mail.");
      setShowModal(true);
      return;
    }

    fetch("/api/order_mosquito.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.ok ? res.json() : Promise.reject())
      .then((data) => {
        if (data.success) {
          setForm({
            name: "",
            phone: "",
            email: "",
            width: "",
            height: "",
            quantity: 1,
            meshType: "standard",
            color: "",
            type: "",
            hasBrake: false,
            fabricTransparency: "",
            fabricStructure: "",
            motorType: "",
            fabricType: "",
            lamellaSize: "",
            canvasType: "",
          });
          window.location.href = data.redirect;
        } else {
          setModalMessage(data.message || "Сталася помилка. Спробуйте ще раз.");
          setShowModal(true);
        }
      })
      .catch(() => {
        setModalMessage("Сталася помилка з сервером.");
        setShowModal(true);
      });
  };

  const renderColors = (options) =>
    options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ));

  return (
    <section className="p-4">
      {showModal && (
        <Modal message={modalMessage} onClose={() => setShowModal(false)} />
      )}

      <div className="bg-[#f8f7f0] px-4 sm:px-6 py-8 sm:py-10 rounded-md max-w-2xl mx-auto mt-10">
        <h3 className="text-xl sm:text-2xl mb-6 text-center">Розрахувати замовлення</h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label>Ім’я:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label>Телефон:</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label>E-mail:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </div>

          <div className="flex flex-col">
            <label>Ширина (мм):</label>
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
            <label>Висота (мм):</label>
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
            <label>Кількість:</label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              className="p-2 border rounded"
              min={1}
            />
          </div>

          {isVidkatna && (
            <div className="flex flex-col">
              <label>Тип</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="p-2 border rounded"
              >
                <option value="">Оберіть</option>
                <option value="istZ">Slide IST Z</option>
                <option value="istE">Slide IST E</option>
              </select>
            </div>
          )}

          {(isFrame || isDoorMesh || isAlyumin || isVidkatna) && (
            <>
              <div className="flex flex-col">
                <label>Тип полотна:</label>
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

              <div className="flex flex-col">
                <label>Колір:</label>
                <select
                  name="color"
                  value={form.color}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  {renderColors([
                    { value: "white", label: "Білий" },
                    { value: "brown", label: "Коричневий" },
                    { value: "anthracite", label: "Антрацит" },
                  ])}
                </select>
              </div>
            </>
          )}

          {isZhalizi && (
            <>
              <div className="flex flex-col">
                <label>Тип:</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  <option value="mini">MINI</option>
                  <option value="mini-standart">MINI STANDART</option>
                  <option value="standart">STANDART</option>
                  <option value="venus">VENUS</option>
                  <option value="magnus">MAGNUS</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label>Тип полотна:</label>
                <select
                  name="canvasType"
                  value={form.canvasType}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  <option value="16mm">16мм</option>
                  <option value="25mm">25мм</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label>Колір:</label>
                <select
                  name="color"
                  value={form.color}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  {renderColors([
                    { value: "white", label: "Білий" },
                    { value: "color", label: "Кольоровий" },
                  ])}
                </select>
              </div>
            </>
          )}

          {isVertykalni && (
            <>
              <div className="flex flex-col">
                <label>Тип:</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  <option value="budget">Вертикальні жалюзі Бюджет</option>
                  <option value="tulle">Вертикальні жалюзі ТЮЛЬС</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label>Ламель:</label>
                <select
                  name="lamellaSize"
                  value={form.lamellaSize}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  <option value="89mm">89мм</option>
                  <option value="127mm">127мм</option>
                </select>
              </div>
            </>
          )}

          {(isTkanevi || isDeniNich) && (
            <>
              <div className="flex flex-col">
                <label>Тип:</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  <option value="open">Відкрита система</option>
                  <option value="box">Коробкова система</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label>Колір:</label>
                <select
                  name="color"
                  value={form.color}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  {renderColors([
                    { value: "white", label: "Білий" },
                    { value: "brown", label: "Коричневий" },
                    ...(isTkanevi
                      ? [{ value: "grey", label: "Сірий" }]
                      : []),
                  ])}
                </select>
              </div>

              <div className="flex flex-col">
                <label>Тканина:</label>
                <select
                  name="fabricType"
                  value={form.fabricType}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  <option value="plain">Однотонна</option>
                  <option value="pattern">З малюнком</option>
                  <option value="blackout">Black-out</option>
                </select>
              </div>
            </>
          )}

          {isDoorZhalizi && (
            <>
              <div className="flex flex-col">
                <label>Тип:</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  <option value="bamboo">Бамбук</option>
                  <option value="wood">Дерево</option>
                  <option value="paulownia">Павлонія</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label>Тип полотна:</label>
                <select
                  name="canvasType"
                  value={form.canvasType}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  <option value="25mm">25мм</option>
                  <option value="50mm">50мм</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label>Колір:</label>
                <select
                  name="color"
                  value={form.color}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  {renderColors([
                    { value: "natural", label: "Natural" },
                    { value: "white", label: "White" },
                    { value: "grey", label: "Grey" },
                    { value: "wenge", label: "Wenge" },
                  ])}
                </select>
              </div>
            </>
          )}

          {isRamka && (
            <>
              <div className="flex flex-col">
                <label>Тип:</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  <option value="classic">Classic</option>
                  <option value="elegance">Elegance</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label>Колір:</label>
                <select
                  name="color"
                  value={form.color}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  <option value="white">White</option>
                  <option value="natural">Natural</option>
                  <option value="grey">Grey</option>
                </select>
              </div>
            </>
          )}

          {isPlisseNew && (
            <>
              <div className="flex flex-col">
                <label>Світлопропускна здатність:</label>
                <select
                  name="fabricTransparency"
                  value={form.fabricTransparency}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  <option value="transparent">Прозора</option>
                  <option value="semi-transparent">Напівпрозора</option>
                  <option value="dim">Затемнююча</option>
                  <option value="opaque">Непрозора</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label>Будова тканини:</label>
                <select
                  name="fabricStructure"
                  value={form.fabricStructure}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  <option value="single">Одношарова</option>
                  <option value="honeycomb">Сотова тканина</option>
                </select>
              </div>
            </>
          )}

          {isAutomatica && (
            <>
              <div className="flex flex-col">
                <label>Двигун:</label>
                <select
                  name="motorType"
                  value={form.motorType}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  <option value="france">France</option>
                  <option value="china">China</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label>Тканина:</label>
                <select
                  name="fabricTransparency"
                  value={form.fabricTransparency}
                  onChange={handleChange}
                  className="p-2 border rounded"
                >
                  <option value="">Оберіть</option>
                  <option value="transparent">Прозора</option>
                  <option value="semi-transparent">Напівпрозора</option>
                  <option value="dim">Затемнююча</option>
                  <option value="opaque">Непрозора</option>
                </select>
              </div>
            </>
          )}

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#D8F422] text-black py-3 px-6 rounded-md text-lg font-semibold uppercase hover:bg-black hover:text-white transition"
            >
              Надіслати
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
