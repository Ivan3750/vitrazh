"use client";
import { useRef, useState } from "react";
import { SITE } from "@/lib/site";

/**
 * Форма заявки. Відправляє JSON на PHP-ендпоінт (public/api/order.php).
 * `payload` — довільні дані замовлення (вікно, розмір, ціна), які додаються до листа.
 */
export default function OrderForm({ payload = {}, subject = "Заявка з сайту", submitLabel = "Надіслати заявку", compact = false, onDone }) {
  const [state, setState] = useState({ status: "idle", msg: "" });
  const startedAt = useRef(Date.now());

  async function onSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const body = {
      subject,
      name: f.elements.name.value.trim(),
      phone: f.elements.phone.value.trim(),
      message: f.elements.message?.value.trim() ?? "",
      honeypot: f.elements.website.value,
      elapsed: Date.now() - startedAt.current,
      payload,
    };
    if (body.name.length < 2 || body.phone.replace(/\D/g, "").length < 9) {
      setState({ status: "error", msg: "Вкажіть ім'я та коректний номер телефону." });
      return;
    }
    setState({ status: "loading", msg: "" });
    try {
      const res = await fetch(SITE.orderEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Помилка");
      setState({ status: "ok", msg: "" });
      onDone?.();
    } catch {
      setState({ status: "error", msg: `Не вдалося надіслати заявку. Зателефонуйте нам: ${SITE.phone}` });
    }
  }

  if (state.status === "ok") {
    return (
      <div role="status" className="bg-accent/15 p-6 text-center">
        <p className="text-lg font-semibold text-ok">Дякуємо! Заявку отримано.</p>
        <p className="text-text-2 mt-1">Менеджер зателефонує вам найближчим часом.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <input name="name" className="field" placeholder="Ваше ім'я" autoComplete="name" required />
      <input name="phone" className="field" placeholder="Телефон, напр. +38 0XX XXX XX XX" type="tel" autoComplete="tel" required />
      {!compact && <textarea name="message" className="field min-h-24" placeholder="Коментар (необов'язково)" />}
      {/* honeypot */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {state.status === "error" && <p role="alert" className="text-sm text-danger">{state.msg}</p>}
      <button type="submit" className="btn btn-primary w-full" disabled={state.status === "loading"}>
        {state.status === "loading" ? "Надсилаємо…" : submitLabel}
      </button>
      <p className="text-xs text-text-2">Надсилаючи заявку, ви погоджуєтесь на обробку персональних даних.</p>
    </form>
  );
}
