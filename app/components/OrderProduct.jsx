"use client";
import { useState } from "react";
import Modal from "@/app/components/Modal";

const CONTACT_WAYS = ["Телефон", "Viber", "Telegram", "WhatsApp"];

const field =
  "bg-white py-4 px-5 rounded-sm w-full border border-transparent focus:border-[#0F0F0F] outline-none";

export default function OrderProduct({ product, colors = [] }) {
  const [formStart] = useState(() => Math.floor(Date.now() / 1000));
  const [sending, setSending] = useState(false);
  const [modal, setModal] = useState({ show: false, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    const f = new FormData(e.target);

    const payload = {
      product: product.name,
      url: window.location.href.split("#")[0],
      name: f.get("name"),
      phone: f.get("phone"),
      email: f.get("email"),
      city: f.get("city"),
      quantity: f.get("quantity"),
      width: f.get("width"),
      height: f.get("height"),
      color: f.get("color"),
      contact_via: f.get("contact_via"),
      need_measure: f.get("need_measure") === "on",
      comment: f.get("comment"),
      honeypot: f.get("email_confirm"),
      form_start: formStart,
    };

    setSending(true);
    try {
      const res = await fetch("/api/order_product.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        window.location.href = data.redirect || "/thanks";
        return;
      }
      setModal({
        show: true,
        message: data.message || "Сталася помилка. Спробуйте ще раз.",
      });
    } catch {
      setModal({
        show: true,
        message:
          "Не вдалося надіслати заявку. Спробуйте ще раз або зателефонуйте нам.",
      });
    }
    setSending(false);
  };

  return (
    <>
      <Modal
        show={modal.show}
        onClose={() => setModal({ show: false, message: "" })}
        message={modal.message}
      />

      <section id="order" className="py-16 px-4 scroll-mt-[110px]">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-[32px] sm:text-[42px] mb-4">
            Замовити {product.name}
          </h2>
          <p className="text-lg text-[#555] leading-relaxed">
            Залиште заявку — менеджер зателефонує, уточнить розміри та
            комплектацію, порахує вартість і запропонує безкоштовний замір.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#F8F7F0] px-6 sm:px-10 py-10 max-w-4xl mx-auto rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <input
            type="text"
            name="email_confirm"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          <div className="md:col-span-2 bg-white rounded-sm px-5 py-4 flex justify-between gap-4">
            <span className="text-gray-500">Профільна система</span>
            <strong className="text-right">{product.name}</strong>
          </div>

          <input
            type="text"
            name="name"
            placeholder="Ім'я *"
            required
            maxLength={100}
            autoComplete="name"
            className={field}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон * (+38 0XX XXX XX XX)"
            required
            pattern="\+?[0-9\s\-\(\)]{9,20}"
            title="Формат: +38 095 109 90 40"
            autoComplete="tel"
            className={field}
          />
          <input
            type="email"
            name="email"
            placeholder="Email (необов'язково)"
            autoComplete="email"
            className={field}
          />
          <input
            type="text"
            name="city"
            placeholder="Місто / адреса об'єкта"
            maxLength={150}
            autoComplete="address-level2"
            className={field}
          />

          <div className="grid grid-cols-3 gap-3 md:col-span-2">
            <label className="flex flex-col gap-1 text-[14px] text-gray-500">
              Ширина, мм
              <input
                type="number"
                name="width"
                min="200"
                max="9999"
                inputMode="numeric"
                placeholder="1300"
                className={field + " text-[16px] text-[#0F0F0F]"}
              />
            </label>
            <label className="flex flex-col gap-1 text-[14px] text-gray-500">
              Висота, мм
              <input
                type="number"
                name="height"
                min="200"
                max="9999"
                inputMode="numeric"
                placeholder="1400"
                className={field + " text-[16px] text-[#0F0F0F]"}
              />
            </label>
            <label className="flex flex-col gap-1 text-[14px] text-gray-500">
              Кількість, шт.
              <input
                type="number"
                name="quantity"
                min="1"
                max="999"
                defaultValue={1}
                inputMode="numeric"
                className={field + " text-[16px] text-[#0F0F0F]"}
              />
            </label>
          </div>

          <div>
            <input
              type="text"
              name="color"
              list="order-colors"
              placeholder="Колір / ламінація"
              maxLength={100}
              className={field}
            />
            {colors.length > 0 && (
              <datalist id="order-colors">
                {colors.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            )}
          </div>
          <select
            name="contact_via"
            defaultValue="Телефон"
            className={field + " cursor-pointer"}
            aria-label="Як з вами зв'язатися"
          >
            {CONTACT_WAYS.map((w) => (
              <option key={w} value={w}>
                Зв'язатися: {w}
              </option>
            ))}
          </select>

          <textarea
            name="comment"
            placeholder="Коментар: тип відкривання, склопакет, терміни…"
            maxLength={1500}
            className={field + " md:col-span-2 resize-none h-28"}
          />

          <label className="md:col-span-2 flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="need_measure"
              defaultChecked
              className="w-[20px] h-[20px] accent-[#D8F422]"
            />
            <span>Потрібен безкоштовний замір</span>
          </label>

          <button
            type="submit"
            disabled={sending}
            className="md:col-span-2 bg-[#D8F422] py-[18px] px-6 rounded-sm uppercase font-semibold hover:bg-[#0f0f0f] hover:text-white transition-colors disabled:opacity-60"
          >
            {sending ? "Надсилаємо…" : "Надіслати заявку"}
          </button>
          <p className="md:col-span-2 text-center text-[14px] text-gray-500">
            Натискаючи «Надіслати заявку», ви погоджуєтесь на обробку
            контактних даних для зв'язку щодо замовлення.
          </p>
        </form>
      </section>
    </>
  );
}
