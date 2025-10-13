"use client";

import { useState } from "react";
import go from "@/app/assets/images/icons/go.svg";
import Modal from "@/app/components/Modal";

const Summary = ({ data, prevStep }) => {
  const { profile, window: windowConfig } = data; // rename to avoid shadowing

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("Сталася помилка.");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const windowsData = {
      profile,
      windowData: windowConfig, // send renamed window data
      user: userData,
    };

    try {
      const res = await fetch("/api/order_windows.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(windowsData),
      });

      const resData = await res.json();

      if (resData.success) {
        if (typeof window !== "undefined") {
          window.location.href = resData.redirect;  
        }
      } else {
        setModalMessage(resData.message || "Сталася помилка. Спробуйте ще раз.");
        setShowModal(true);
      }
    } catch (error) {
      setModalMessage("Сталася помилка з сервером.");
      setShowModal(true);
      console.error(error);
    }
  };

  return (
    <div className="space-y-6 relative px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">Підсумок замовлення</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#F8F7F0] py-10 px-6 sm:px-10 rounded-md w-full">
          <h2 className="text-[30px] sm:text-[28px] mb-4">Деталі</h2>

          {[
            ["Профіль", profile?.name],
            ["Форма вікна", windowConfig.config],
            ["Розміри", `${windowConfig.width} x ${windowConfig.height} см`],
            ["Фурнітура", windowConfig.hardware],
            ["Колір", windowConfig.color],
          ].map(([label, value]) => (
            <div key={label} className="p-2 flex justify-between border-b border-gray-200">
              <h3 className="font-semibold">{label}:</h3>
              <div>
                {label === "Форма вікна" && value ? (
                  <img src={value} alt={label} className="w-16 h-16 object-contain" />
                ) : (
                  <p>{value || "—"}</p>
                )}
              </div>
            </div>
          ))}

          <div className="p-2 border-b border-gray-200">
            <h3 className="font-semibold mb-1">Склопакет:</h3>
            <ul className="list-disc ml-5 text-sm">
              {windowConfig.glass?.length ? windowConfig.glass.map((g, i) => <li key={i}>{g}</li>) : <li>—</li>}
            </ul>
          </div>

          <div className="p-2 border-b border-gray-200">
            <h3 className="font-semibold mb-1">Послуги:</h3>
            <ul className="list-disc ml-5 text-sm">
              {windowConfig.services?.length ? windowConfig.services.map((s, i) => <li key={i}>{s}</li>) : <li>—</li>}
            </ul>
          </div>
        </div>

        <div className="bg-[#F8F7F0] py-10 px-6 sm:px-10 rounded-md w-full">
          <h2 className="text-[30px] sm:text-[28px] mb-4">Напишіть нам</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Ім'я"
              value={userData.name}
              onChange={handleChange}
              className="bg-white py-4 px-6 rounded-sm"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              pattern="^\+38\s?\d{10}$"
              title="Формат: +38 095 109 9040"
              value={userData.phone}
              onChange={handleChange}
              required
              className="bg-white py-4 px-6 rounded-sm"
            />
            <textarea
              name="message"
              placeholder="Повідомлення"
              value={userData.message}
              onChange={handleChange}
              className="bg-white py-4 px-6 rounded-sm resize-none h-32"
              required
            />
            <button
              type="submit"
              className="bg-[#D8F422] py-4 px-6 rounded-sm uppercase flex items-center justify-center gap-2 min-w-[200px] hover:bg-[#0f0f0f] hover:text-white transition-colors"
            >
              Надіслати
              <img src={go.src} alt="go" />
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
