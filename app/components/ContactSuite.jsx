"use client";
import { useState } from "react";
import go from "@/app/assets/images/icons/go.svg";
import Button from "./Button";
import Modal from "@/app/components/Modal";
import FreeSizeImg from "@/app/assets/images/decoration/freesize-bg.jpg";

const ContactSuite = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("Сталася помилка.");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const res = await fetch("/api/contact.php", {
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

      <section className="px-6 py-20 max-w-6xl mx-auto">

        {/* Заголовок */}
        <div className="text-center mb-14">
          <h2 className="text-[32px] sm:text-[42px] lg:text-[48px]">
            Потрібна консультація або розрахунок?
          </h2>
          <p className="mt-4 text-lg text-[#555] max-w-2xl mx-auto">
            Оберіть зручний спосіб — швидкий розрахунок вартості або безкоштовний виїзд спеціаліста для вимірів.
          </p>
        </div>

        {/* Контейнер */}
        <div className="grid lg:grid-cols-2 gap-12 bg-[#F8F7F0] p-10 rounded-2xl">

          {/* Ліва сторона — кнопка */}
          <div className="flex flex-col items-center text-center justify-center">
            <h3 className="text-3xl font-semibold mb-6">Хочете дізнатись точну вартість?</h3>
            <p className="text-lg text-[#555] mb-8">
              Отримайте попередній розрахунок за 1 хвилину, відповівши на декілька запитань.
            </p>

            <Button name="Розрахувати" link="/calc" />
          </div>

          {/* Права сторона — форма */}
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-center lg:text-left">
              Замовити безкоштовний замір
            </h3>

            <img
              src={FreeSizeImg.src}
              className="w-full h-64 object-cover rounded-md mb-8"
              alt="Замір"
            />

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                placeholder="Ім’я"
                className="bg-white py-4 px-6 rounded-sm w-full"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                pattern="^\+38\s?\d{10}$"
                title="Формат: +38 095 109 90 40"
                className="bg-white py-4 px-6 rounded-sm w-full"
                required
              />

              <textarea
                name="message"
                placeholder="Ваше повідомлення"
                className="bg-white py-4 px-6 resize-none rounded-sm h-32"
                required
              />

              <button
                type="submit"
                className="bg-[#D8F422] py-4 px-6 rounded-sm uppercase flex items-center justify-center gap-2 
                           hover:bg-[#0f0f0f] hover:text-white transition-colors w-full"
              >
                Надіслати
                <img src={go.src} alt="go" />
              </button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default ContactSuite;
