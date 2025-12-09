"use client";
import { useState } from "react";
import go from "@/app/assets/images/icons/go.svg";
import Modal from "@/app/components/Modal";
import FreeSizeImg from "@/app/assets/images/decoration/freesize-bg.jpg";

const FreeSize = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("Сталася помилка.");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const res = await fetch("/api/free-size.php", {
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

      <section className="py-20 px-4">

        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] mb-4">
            Замовити безкоштовний замір
          </h2>

          <p className="text-lg text-[#555] leading-relaxed">
            Наш спеціаліст приїде у зручний час, зробить точні виміри та надасть консультацію щодо конструкцій і матеріалів.
          </p>
        </div>

        <div className="bg-[#F8F7F0] px-6 py-10 max-w-6xl mx-auto rounded-2xl 
                        flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

          <div className="w-full lg:w-1/2">
            <img
              src={FreeSizeImg.src}
              alt="Free size measure"
              className="w-full h-[280px] sm:h-[320px] lg:h-[420px] object-cover rounded-md"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              <input
                type="text"
                name="name"
                placeholder="Ім'я"
                className="bg-white py-4 px-6 rounded-sm w-full"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                pattern="^\+38\s?\d{10}$"
                title="Формат: +38 095 109 90 40"
                required
                className="bg-white py-4 px-6 rounded-sm w-full"
              />

              <textarea
                name="message"
                placeholder="Ваше повідомлення"
                className="bg-white py-4 px-6 rounded-sm resize-none h-32 w-full"
                required
              />

              <button
                type="submit"
                className="bg-[#D8F422] py-4 px-6 rounded-sm uppercase flex items-center justify-center gap-2 min-w-[200px] 
                           hover:bg-[#0f0f0f] hover:text-white transition-colors mx-auto lg:mx-0"
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

export default FreeSize;
