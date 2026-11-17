"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { FaTelegram, FaWhatsapp, FaViber, FaInstagram } from "react-icons/fa";
import go from "@/app/assets/images/icons/go.svg";

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  // Антиспам: час завантаження
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        message,
        honeypot,
        t: formTime,
      }),
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
      <button
        onClick={() => setOpen(true)}
        aria-label="Відкрити форму зворотного дзвінка"
        className="
          fixed bottom-6 right-6 z-50 
          w-16 h-16 rounded-full shadow-xl
          flex items-center justify-center
          animate-spin-slow
          hover:scale-110 transition
        "
        style={{ backgroundColor: "#d8f422" }}
      >
        <Phone size={28} className="text-black" />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              bg-[#F8F7F0] 
              rounded-md 
              py-10 px-6 sm:px-10 
              max-w-[600px] w-[90%]
              shadow-xl relative
              animate-fade-in
            "
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-[28px] text-gray-600 hover:text-black transition"
            >
              ×
            </button>

            <h2 className="text-[32px] sm:text-[42px] mb-6 text-center">
              Напишіть нам
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* HONEYPOT */}
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
                className="bg-white py-4 px-6 rounded-sm"
                required
              />

              <textarea
                name="message"
                placeholder="Повідомлення"
                className="bg-white py-4 px-6 rounded-sm resize-none h-32"
                required
              ></textarea>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button
                  type="submit"
                  className="
                    bg-[#D8F422] px-6 py-4 rounded-sm uppercase 
                    flex items-center justify-center gap-2 min-w-[200px]
                    hover:bg-[#0f0f0f] hover:text-white 
                    transition-colors
                  "
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
      )}
    </>
  );
}
