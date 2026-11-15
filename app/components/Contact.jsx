"use client";
import { useEffect, useState } from "react";
import { FaViber, FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa";
import { LuPhone, LuMail, LuMapPin, LuClock } from "react-icons/lu";
import Modal from "@/app/components/Modal";
import { Reveal, SplitHeading } from "./site/motion";

const field =
  "w-full  bg-paper border border-transparent px-5 py-4 text-ink placeholder:text-ink/40 outline-none focus:border-ink focus:bg-white transition-colors";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("Сталася помилка.");
  const [formTime] = useState(Date.now());
  const [product, setProduct] = useState("");

  // Якщо прийшли з картки товару (?product=...), підставляємо її в повідомлення
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("product");
    if (p) setProduct(p);
  }, []);

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

  const cards = [
    { Icon: LuPhone, label: "Телефон", value: "+38 095 109 90 40", href: "tel:+380951099040" },
    { Icon: LuMail, label: "Пошта", value: "kyiv@vitrazh.com.ua", href: "mailto:kyiv@vitrazh.com.ua" },
    { Icon: LuMapPin, label: "Адреса", value: "Київ, проспект Академіка Глушкова, 30" },
    { Icon: LuClock, label: "Розклад роботи", value: "9:00 - 12:00 Пн-Пт" },
  ];
  const accents = ["bg-brand-orange", "bg-brand-blue", "bg-brand-lime", "bg-ink"];

  return (
    <>
      <Modal show={showModal} onClose={() => setShowModal(false)} message={modalMessage} />

      <section className="pb-4 px-4 sm:px-6 bg-white">
        <div className="max-w-[1320px] mx-auto pt-5 sm:pt-7">
          <SplitHeading
            as="h1"
            text="Звʼяжіться з нами"
            classes={{ нами: "text-brand-orange" }}
            className="font-display !text-[44px] sm:!text-[76px] lg:!text-[96px] uppercase !leading-[0.9]"
          />
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-lg text-ink/65">
              Залиште заявку — домовимося про безкоштовний замір і підготуємо розрахунок.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-12 bg-white">
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 content-start">
            {cards.map(({ Icon, label, value, href }, i) => {
              const Wrap = href ? "a" : "div";
              return (
                <Reveal key={label} delay={i * 0.08} y={24}>
                  <Wrap
                    {...(href ? { href } : {})}
                    className="flex items-center gap-5 bg-paper p-5 hover:bg-ink hover:text-white transition-colors group"
                  >
                    <span className={`w-14 h-14 shrink-0  ${accents[i]} grid place-items-center text-2xl ${i === 2 ? "text-ink" : "text-white"}`}>
                      <Icon />
                    </span>
                    <span>
                      <span className="block text-sm opacity-50">{label}</span>
                      <span className="block text-lg">{value}</span>
                    </span>
                  </Wrap>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="bg-paper p-7 sm:p-10">
              <h2 className="font-display text-5xl uppercase mb-8">Напишіть нам</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="email_confirm"
                  style={{ display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
                />
                <input type="text" name="name" placeholder="Ім'я" className={field} required />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон: +38 095 109 90 40"
                  pattern="^\+38\s?\d{10}$"
                  title="Формат: +38 095 109 90 40"
                  className={field}
                  required
                />
                <textarea
                  key={product}
                  name="message"
                  placeholder="Повідомлення"
                  defaultValue={product ? `Цікавить: ${product}. ` : ""}
                  className={`${field} resize-none h-36`}
                  required
                />
                <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-brand-orange text-white hover:bg-ink transition-colors px-10 py-4 uppercase font-semibold tracking-wider"
                  >
                    Надіслати
                  </button>
                  <div className="flex gap-3 text-xl">
                    {[
                      { href: "https://t.me/+380951099040", label: "Telegram", Icon: FaTelegram },
                      { href: "https://wa.me/380951099040", label: "WhatsApp", Icon: FaWhatsapp },
                      { href: "viber://chat?number=+380951099040", label: "Viber", Icon: FaViber },
                      { href: "https://www.instagram.com/vitrazh.com.ua/", label: "Instagram", Icon: FaInstagram },
                    ].map(({ href, label, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="w-11 h-11 bg-white text-ink grid place-items-center hover:bg-brand-orange hover:text-white transition-colors"
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
