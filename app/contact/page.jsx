"use client";
import { useState } from "react";
import go from "@/app/assets/images/icons/go.svg";
import b from "@/app/assets/images/hero/bg.jpg";
import contact from "@/app/assets/images/icons/Contact Icon.svg";
import mail from "@/app/assets/images/icons/mail.svg";
import map from "@/app/assets/images/icons/map.svg";
import time from "@/app/assets/images/icons/time.svg";
import Image from "next/image";
import { FaViber, FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa";

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

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("Сталася помилка.");

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

    const data = await res.json();

    if (data.success) {
      setModalMessage("Повідомлення надіслано!");
      setShowModal(true);
      form.reset();
    } else {
      setModalMessage("Сталася помилка. Спробуйте ще раз.");
      setShowModal(true);
    }
  };

  return (
    <>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        message={modalMessage}
      />

      <section className="relative h-[600px] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${b.src})` }}
        />
        <h1 className="relative text-white text-4xl font-bold z-10">
          Зв'яжіться з нами
        </h1>
      </section>

      <section>
        <div className="mc">
          <div className="flex justify-between gap-[15px] py-[150px] ">
            {[
              {
                icon: contact,
                label: "Тел. Номер",
                value: "+38 095 109 90 40",
              },
              { icon: mail, label: "Пошта", value: "kyiv@vitrazh.com.ua" },
              {
                icon: map,
                label: "Адреса",
                value: "Київ, проспект Академіка Глушкова, 30",
              },
              {
                icon: time,
                label: "Розклад роботи",
                value: "9:00 - 12:00 Пн-Пт",
              },
            ].map(({ icon, label, value }, idx) => (
              <div
                key={idx}
                className="bg-[#F8F7F0] p-[32px] rounded-sm flex flex-col justify-between gap-[50px] w-[310px]"
              >
                <div>
                  <Image src={icon} alt={label} />
                </div>
                <div>
                  <p className="text-[#555] text-[16px]">{label}</p>
                  <p className="text-[20px]">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 📨 Форма */}
          <div className="bg-[#F8F7F0] py-[56px] px-[80px]">
            <h2 className="text-[64px]">Напишіть нам</h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[24px] max-w-[600px]"
            >
              <input
                type="text"
                name="name"
                placeholder="Ім'я"
                className="bg-white py-[18px] px-[24px] rounded-sm"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Телефон"
                className="bg-white py-[18px] px-[24px] rounded-sm"
                required
              />
              <textarea
                name="message"
                placeholder="Повідомлення"
                className="bg-white py-[18px] px-[24px] rounded-sm"
                required
              />
              <div className="flex items-center gap-[30px] flex-wrap">
                <button
                  type="submit"
                  className="bg-[#D8F422] py-[18px] px-[24px] rounded-sm uppercase font-semibold flex min-w-[200px] gap-[5px] justify-between hover:bg-[#0f0f0f] hover:text-white"
                >
                  Надіслати
                  <Image src={go} alt="go" />
                </button>
                <div className="flex gap-[15px] text-[35px] text-[#555]">
                  <FaViber />
                  <FaWhatsapp />
                  <FaTelegram />
                  <FaInstagram />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
