"use client";

import { useState } from "react";
import Image from "next/image";
import go from "@/app/assets/images/icons/go.svg";


const Modal = ({ show, onClose, message }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0a0a0ab8] bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
        <p className="text-lg text-center mb-4">{message}</p>
        <button
          onClick={onClose}
          className="block mx-auto bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Закрити
        </button>
      </div>
    </div>
  );
};

const Summary = ({ data, prevStep }) => {
  const { profile, window } = data;
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone, message }),
    });

    const result = await res.json();

    if (result.success) {
      setModalMessage("Повідомлення надіслано успішно! Очікуйте");
      form.reset();
    } else {
      setModalMessage("Сталася помилка. Спробуйте ще раз.");
    }
    setShowModal(true);
  };




  return (
    <div className="space-y-6 relative px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">Підсумок замовлення</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#F8F7F0] py-10 px-6 sm:px-10 rounded-md w-full">
          <h2 className="text-[30px] sm:text-[28px] mb-4">Деталі</h2>

          {[
            ["Профіль", profile?.name],
            ["Форма вікна", window.shape],
            ["Розміри", `${window.width} x ${window.height} см`],
            ["Фурнітура", window.hardware],
            ["Колір", window.color],
          ].map(([label, value]) => (
            <div key={label} className="p-2 flex justify-between border-b border-gray-200">
              <h3 className="font-semibold">{label}:</h3>
              <p>{value || "—"}</p>
            </div>
          ))}

          <div className="p-2 border-b border-gray-200">
            <h3 className="font-semibold mb-1">Склопакет:</h3>
            <ul className="list-disc ml-5 text-sm">
              {window.glass?.length
                ? window.glass.map((g, i) => <li key={i}>{g}</li>)
                : <li>—</li>}
            </ul>
          </div>

          <div className="p-2 border-b border-gray-200">
            <h3 className="font-semibold mb-1">Послуги:</h3>
            <ul className="list-disc ml-5 text-sm">
              {window.services?.length
                ? window.services.map((s, i) => <li key={i}>{s}</li>)
                : <li>—</li>}
            </ul>
          </div>
        </div>

        {/* Форма */}
        <div className="bg-[#F8F7F0] py-10 px-6 sm:px-10 rounded-md w-full">
          <h2 className="text-[30px] sm:text-[28px] mb-4">Напишіть нам</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Ім'я"
              className="bg-white py-4 px-6 rounded-sm"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              pattern="^\+38\s?\d{10}$"
              title="Формат: +38 095 109 9040"
              required
              className="bg-white py-4 px-6 rounded-sm"
            />
            <textarea
              name="message"
              placeholder="Повідомлення"
              className="bg-white py-4 px-6 rounded-sm resize-none h-32"
              required
            />
            <button
              type="submit"
              className="bg-[#D8F422] py-4 px-6 rounded-sm uppercase flex items-center justify-center gap-2 min-w-[200px] hover:bg-[#0f0f0f] hover:text-white transition-colors"
            >
              Надіслати
              <Image src={go} alt="go" />
            </button>
          </form>
        </div>
      </div>

    <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        message={modalMessage}
      />
    </div>
  );
};

export default Summary;
