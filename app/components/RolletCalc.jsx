"use client";

import tap39 from "@/app/assets/images/calc/tap39.png";
import tap55 from "@/app/assets/images/calc/tap55.png";
import tap77 from "@/app/assets/images/calc/tap77.png";
import se45s from "@/app/assets/images/calc/se45s.png";
import sl100 from "@/app/assets/images/calc/sl100.png";
import tax55s from "@/app/assets/images/calc/tax55s.png";
import gg56 from "@/app/assets/images/calc/gg56.png";
import inset from "@/app/assets/images/calc/rollet_mounting_inset.png";
import outset from "@/app/assets/images/calc/rollet_mounting_outset.png";

import { useState } from "react";
import Modal from "./Modal";

const profiles = [
  { id: "TAP39", name: "TAP39", img: tap39 },
  { id: "TAP55", name: "TAP55", img: tap55 },
  { id: "TAP77", name: "TAP77", img: tap77 },
  { id: "SE45S", name: "SE45S", img: se45s },
  { id: "SL100", name: "SL100", img: sl100 },
  { id: "TAX55S", name: "TAX55S", img: tax55s },
  { id: "GG56", name: "GG56", img: gg56 },
];

const montages = [
  { id: "inset", name: "Вмонтований", img: inset },
  { id: "outset", name: "На проєм", img: outset },
];

export default function RolletCalc() {
  const [width, setWidth] = useState(2000);
  const [height, setHeight] = useState(2000);
  const [profile, setProfile] = useState("TAP39");
  const [montage, setMontage] = useState("inset");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = (msg) => {
    setModalMessage(msg);
    setShowModal(true);
  };

  const validate = () => {
    if (!name.trim()) {
      openModal("Вкажіть ім’я.");
      return false;
    }
    if (!phone.trim()) {
      openModal("Вкажіть номер телефону.");
      return false;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      openModal("Вкажіть коректний e-mail.");
      return false;
    }
    if (width < 300 || height < 300) {
      openModal("Мінімальні розміри — 300 × 300 мм.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (loading) return;
    if (!validate()) return;

    setLoading(true);

    const rolletData = {
      width,
      height,
      profile,
      montage,
      name,
      phone,
      email,
    };

    fetch("/api/order_rollets.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rolletData),
    })
      .then(async (res) => {
        let data;
        try {
          data = await res.json();
        } catch {
          throw new Error("Сервер повернув некоректну відповідь");
        }
        return data;
      })
      .then((data) => {
        if (data.success) {
          window.location.href = data.redirect;
        } else {
          openModal("Помилка: " + data.message);
        }
      })
      .catch(() => {
        openModal("Помилка при відправленні форми.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="bg-[#F8F7F0] p-10 rounded-md">
          <h2 className="text-3xl font-bold mb-6 text-center uppercase">Калькулятор роллет</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block mb-2 font-medium">Ім’я:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#D8F422]"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Телефон:</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#D8F422]"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">E-mail:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#D8F422]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block mb-2 font-medium">Ширина (мм):</label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(+e.target.value)}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#D8F422]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Висота (мм):</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(+e.target.value)}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#D8F422]"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block mb-4 text-lg font-semibold">Тип профілю:</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {profiles.map((p) => (
                <label
                  key={p.id}
                  className={`border rounded-md p-4 flex flex-col items-center cursor-pointer transition ${
                    profile === p.id ? "border-[#D8F422] bg-white" : "border-gray-200 bg-gray-50 hover:bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="profile"
                    value={p.id}
                    checked={profile === p.id}
                    onChange={() => setProfile(p.id)}
                    className="hidden"
                  />
                  <img src={p.img.src} alt={p.name} width={60} height={60} />
                  <span className="mt-2 text-sm">{p.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <label className="block mb-4 text-lg font-semibold">Вид монтажу:</label>
            <div className="grid grid-cols-2 gap-6">
              {montages.map((m) => (
                <label
                  key={m.id}
                  className={`border rounded-md p-4 flex flex-col items-center cursor-pointer transition ${
                    montage === m.id ? "border-[#D8F422] bg-white" : "border-gray-200 bg-gray-50 hover:bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="montage"
                    value={m.id}
                    checked={montage === m.id}
                    onChange={() => setMontage(m.id)}
                    className="hidden"
                  />
                  <img src={m.img.src} alt={m.name} width={80} height={80} />
                  <span className="mt-2 text-sm">{m.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`py-4 px-6 rounded-md text-lg font-semibold uppercase transition ${
                loading ? "bg-gray-400 text-white cursor-not-allowed" : "bg-[#D8F422] text-black hover:bg-black hover:text-white"
              }`}
            >
              {loading ? "Відправлення..." : "Надіслати"}
            </button>
          </div>
        </div>
      </section>

      <Modal show={showModal} onClose={() => setShowModal(false)} message={modalMessage} />
    </>
  );
}
