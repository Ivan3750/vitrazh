"use client";
import { useState } from "react";
import Modal from "@/app/components/Modal";
import { Reveal, SplitHeading } from "./motion";

const CONTACT_WAYS = ["Телефон", "Viber", "Telegram", "WhatsApp"];

const field =
  "w-full bg-paper border border-transparent px-5 py-4 text-ink placeholder:text-ink/40 outline-none focus:border-ink focus:bg-white transition-colors";

// Форма замовлення профільної системи. Надсилає JSON на /api/order_product.php (php/order_product.php).
export default function OrderForm({ product, colors = [] }) {
  const [formStart] = useState(() => Math.floor(Date.now() / 1000));
  const [sending, setSending] = useState(false);
  const [modal, setModal] = useState({ show: false, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    const f = new FormData(e.target);

    setSending(true);
    try {
      const res = await fetch("/api/order_product.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product,
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
        }),
      });
      const data = await res.json();
      if (data.success) {
        window.location.href = data.redirect || "/thanks/";
        return;
      }
      setModal({ show: true, message: data.message || "Сталася помилка. Спробуйте ще раз." });
    } catch {
      setModal({
        show: true,
        message: "Не вдалося надіслати заявку. Спробуйте ще раз або зателефонуйте нам.",
      });
    }
    setSending(false);
  };

  return (
    <>
      <Modal show={modal.show} onClose={() => setModal({ show: false, message: "" })} message={modal.message} />

      <section id="order" className="bg-paper py-12 px-4 sm:px-6 scroll-mt-28">
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14">
          <div>
            <SplitHeading text="Замовити систему" className="font-display text-5xl sm:text-6xl uppercase leading-[0.92]" />
            <Reveal delay={0.2}>
              <p className="mt-5 text-lg text-ink/65">
                Залиште заявку — менеджер зателефонує, уточнить розміри та комплектацію, розрахує вартість і
                запропонує безкоштовний замір.
              </p>
              <div className="mt-6 bg-white p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-ink/50">Ви замовляєте</p>
                <p className="font-display text-3xl uppercase mt-1">{product}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-9 grid sm:grid-cols-2 gap-4">
              <input type="text" name="email_confirm" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

              <input type="text" name="name" placeholder="Ім'я *" required maxLength={100} autoComplete="name" className={field} />
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
              <input type="email" name="email" placeholder="Email (необов'язково)" autoComplete="email" className={field} />
              <input type="text" name="city" placeholder="Місто / адреса об'єкта" maxLength={150} autoComplete="address-level2" className={field} />

              <div className="sm:col-span-2 grid grid-cols-3 gap-4">
                {[
                  ["width", "Ширина, мм", "1300", 200, 9999],
                  ["height", "Висота, мм", "1400", 200, 9999],
                ].map(([name, label, ph, min, max]) => (
                  <label key={name} className="flex flex-col gap-1 text-xs uppercase tracking-[0.1em] text-ink/50">
                    {label}
                    <input type="number" name={name} min={min} max={max} inputMode="numeric" placeholder={ph} className={field + " text-base normal-case tracking-normal"} />
                  </label>
                ))}
                <label className="flex flex-col gap-1 text-xs uppercase tracking-[0.1em] text-ink/50">
                  Кількість, шт.
                  <input type="number" name="quantity" min="1" max="999" defaultValue={1} inputMode="numeric" className={field + " text-base normal-case tracking-normal"} />
                </label>
              </div>

              <div>
                <input type="text" name="color" list="order-colors" placeholder="Колір / ламінація" maxLength={100} className={field} />
                {colors.length > 0 && (
                  <datalist id="order-colors">
                    {colors.map((c) => (
                      <option key={c} value={c} />
                    ))}
                  </datalist>
                )}
              </div>
              <select name="contact_via" defaultValue="Телефон" aria-label="Як з вами зв'язатися" className={field + " cursor-pointer"}>
                {CONTACT_WAYS.map((w) => (
                  <option key={w} value={w}>
                    Зв'язатися: {w}
                  </option>
                ))}
              </select>

              <textarea name="comment" placeholder="Коментар: тип відкривання, склопакет, терміни…" maxLength={1500} className={field + " sm:col-span-2 resize-none h-28"} />

              <label className="sm:col-span-2 flex items-center gap-3 cursor-pointer">
                <input type="checkbox" name="need_measure" defaultChecked className="w-5 h-5" />
                <span>Потрібен безкоштовний замір</span>
              </label>

              <button
                type="submit"
                disabled={sending}
                className="sm:col-span-2 bg-brand-orange text-white hover:bg-ink transition-colors px-10 py-4 uppercase font-semibold tracking-wider disabled:opacity-60"
              >
                {sending ? "Надсилаємо…" : "Надіслати заявку"}
              </button>
              <p className="sm:col-span-2 text-sm text-ink/50">
                Натискаючи «Надіслати заявку», ви погоджуєтесь на обробку контактних даних для зв'язку щодо замовлення.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
