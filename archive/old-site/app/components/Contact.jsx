"use client";
import { useState } from "react";
import go from "@/app/assets/images/icons/go.svg";
import b from "@/app/assets/images/hero/bg.jpg";
import contact from "@/app/assets/images/icons/Contact Icon.svg";
import mail from "@/app/assets/images/icons/mail.svg";
import map from "@/app/assets/images/icons/map.svg";
import time from "@/app/assets/images/icons/time.svg";
import { FaViber, FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa";
import Modal from "@/app/components/Modal";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("Сталася помилка.");
  const [formTime] = useState(Date.now());

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const honeypot = form.email_confirm.value;

    const res = await fetch("/api/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, message, honeypot, t: formTime }),
    });

    let data;
    try {
      data = await res.json();
    } catch {
      window.location.href = "/err";
      return;
    }

    if (data.redirect) {
      window.location.href = data.redirect;
    } else {
      window.location.href = "/err";
    }
  };

  return (
    <>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        message={modalMessage}
      />

      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${b.src})` }}
        />
        <h1 className="relative text-white text-2xl sm:text-3xl md:text-4xl z-10 px-4 text-center">
          Зв'яжіться з нами
        </h1>
      </section>

      <section>
        <div className="mc px-4 sm:px-6 md:px-10 max-w-[1200px] mx-auto">
          <div className="flex flex-wrap justify-between gap-6 py-[80px] sm:py-[120px]">
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
                className="bg-[#F8F7F0] p-6 rounded-sm flex flex-col justify-between gap-10 w-full sm:w-[45%] md:w-[22%]"
              >
                <div>
                  <img src={icon.src} alt={label} />
                </div>
                <div>
                  <p className="text-[#555] text-base">{label}</p>
                  <p className="text-lg ">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#F8F7F0] py-10 px-6 sm:px-10 rounded-md max-w-[600px] mx-auto mb-[80px]">
            <h2 className="text-[36px] sm:text-[48px] mb-8 text-center">
              Напишіть нам
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                name="email_confirm"
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

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
                title="Формат: +38 095 109 90 40"
                required
                className="bg-white py-4 px-6 rounded-sm"
              />

              <textarea
                name="message"
                placeholder="Повідомлення"
                className="bg-white py-4 px-6 rounded-sm resize-none h-32"
                required
              />
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button
                  type="submit"
                  className="bg-[#D8F422] py-4 px-6 rounded-sm uppercase  flex items-center justify-center gap-2 min-w-[200px] hover:bg-[#0f0f0f] hover:text-white transition-colors"
                >
                  Надіслати
                  <img src={go.src} alt="go" />
                </button>
                <div className="flex gap-5 text-3xl text-[#555]">
                  <a
                    href="https://t.me/+380951099040"
                    aria-label="Написати нам у Telegram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegram />
                  </a>
                  <a
                    href="https://wa.me/380951099040"
                    aria-label="Написати нам у WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="viber://chat?number=+380951099040"
                    aria-label="Написати нам у Viber"
                  >
                    <FaViber />
                  </a>
                  <a
                    href="https://www.instagram.com/vitrazh.com.ua/"
                    aria-label="Перейти на Instagram сторінку Вітраж"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
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
