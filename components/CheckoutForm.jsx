"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "./CartProvider";
import { ItemThumb } from "./CartView";
import { fmt } from "@/lib/pricing";
import { SITE } from "@/lib/site";

const DELIVERY = [
  { id: "pickup", label: "Самовивіз", hint: SITE.address },
  { id: "kyiv", label: "Доставка по Києву", hint: "вартість уточнить менеджер" },
  { id: "region", label: "Доставка по області / Новою поштою", hint: "вартість уточнить менеджер" },
];
const PAYMENT = [
  { id: "cash", label: "Готівкою або карткою при отриманні" },
  { id: "invoice", label: "Безготівковий розрахунок за рахунком" },
];

function Radio({ name, value, current, onChange, label, hint }) {
  const active = current === value;
  return (
    <label className={`flex items-start gap-3 border-2 p-3 cursor-pointer transition-colors ${active ? "border-brand bg-brand/5" : "border-line hover:border-navy"}`}>
      <input type="radio" name={name} value={value} checked={active} onChange={() => onChange(value)} className="mt-1 accent-[#0878c0]" />
      <span className="text-sm"><span className="font-semibold text-navy">{label}</span>{hint && <span className="block text-muted text-xs mt-0.5">{hint}</span>}</span>
    </label>
  );
}

export default function CheckoutForm() {
  const { items, total, ready, clear } = useCart();
  const router = useRouter();
  const startedAt = useRef(Date.now());
  const [delivery, setDelivery] = useState("kyiv");
  const [payment, setPayment] = useState("cash");
  const [measure, setMeasure] = useState(true);
  const [state, setState] = useState({ status: "idle", msg: "" });

  if (!ready) return <p className="text-muted">Завантаження…</p>;
  if (items.length === 0) {
    return (
      <div className="bg-white border border-line p-10 text-center">
        <p className="text-lg font-semibold text-navy">У кошику немає товарів</p>
        <Link href="/catalog/" className="btn btn-accent mt-5">До каталогу</Link>
      </div>
    );
  }
  const hasWindows = items.some((i) => i.kind === "window");

  async function onSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget.elements;
    const body = {
      kind: "order",
      subject: "Нове замовлення з сайту",
      honeypot: f.website.value,
      elapsed: Date.now() - startedAt.current,
      name: f.name.value.trim(),
      phone: f.phone.value.trim(),
      email: f.email.value.trim(),
      city: f.city.value.trim(),
      address: f.address.value.trim(),
      delivery: DELIVERY.find((d) => d.id === delivery)?.label,
      payment: PAYMENT.find((p) => p.id === payment)?.label,
      measure: measure ? "Потрібен виїзд замірника" : "Замір не потрібен",
      message: f.message.value.trim(),
      items: items.map((i) => ({ title: i.title, details: i.details, qty: i.qty, unitPrice: i.unitPrice })),
      total,
    };
    if (body.name.length < 2 || body.phone.replace(/\D/g, "").length < 9) {
      setState({ status: "error", msg: "Вкажіть ім'я та коректний номер телефону." });
      return;
    }
    setState({ status: "loading", msg: "" });
    try {
      const res = await fetch(SITE.orderEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      try { sessionStorage.setItem("vitrazh-last-order", JSON.stringify({ n: items.length, total })); } catch {}
      clear();
      router.push("/thanks/");
    } catch {
      setState({ status: "error", msg: `Не вдалося оформити замовлення. Зателефонуйте нам: ${SITE.phone}` });
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8 lg:grid-cols-[1fr_380px] items-start" noValidate>
      <div className="space-y-6">
        <section className="bg-white border border-line p-5 md:p-7">
          <h2 className="text-lg font-extrabold text-navy">1. Контактні дані</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <input name="name" className="field" placeholder="Ім'я та прізвище *" autoComplete="name" required />
            <input name="phone" className="field" placeholder="Телефон *" type="tel" autoComplete="tel" required />
            <input name="email" className="field sm:col-span-2" placeholder="E-mail (необов'язково)" type="email" autoComplete="email" />
          </div>
        </section>

        <section className="bg-white border border-line p-5 md:p-7">
          <h2 className="text-lg font-extrabold text-navy">2. Доставка</h2>
          <div className="mt-4 grid gap-3">
            {DELIVERY.map((d) => <Radio key={d.id} name="delivery" value={d.id} current={delivery} onChange={setDelivery} label={d.label} hint={d.hint} />)}
          </div>
          {delivery !== "pickup" && (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input name="city" className="field" placeholder="Місто" defaultValue="Київ" autoComplete="address-level2" />
              <input name="address" className="field" placeholder="Адреса / відділення" autoComplete="street-address" />
            </div>
          )}
          {delivery === "pickup" && (<><input type="hidden" name="city" value="Київ" /><input type="hidden" name="address" value="Самовивіз" /></>)}
          {hasWindows && (
            <label className="mt-4 flex items-center gap-3 text-sm cursor-pointer">
              <input type="checkbox" checked={measure} onChange={(e) => setMeasure(e.target.checked)} className="w-4 h-4 accent-[#0878c0]" />
              Потрібен безкоштовний виїзд замірника
            </label>
          )}
        </section>

        <section className="bg-white border border-line p-5 md:p-7">
          <h2 className="text-lg font-extrabold text-navy">3. Оплата</h2>
          <div className="mt-4 grid gap-3">
            {PAYMENT.map((p) => <Radio key={p.id} name="payment" value={p.id} current={payment} onChange={setPayment} label={p.label} />)}
          </div>
          {hasWindows && <p className="mt-3 text-sm text-muted">Для виробів на замовлення (вікна) передбачена передоплата 80%, решту 20% сплачуєте в день доставки та підписання акту прийому-передачі.</p>}
        </section>

        <section className="bg-white border border-line p-5 md:p-7">
          <h2 className="text-lg font-extrabold text-navy">4. Коментар</h2>
          <textarea name="message" className="field mt-4 min-h-24" placeholder="Побажання, зручний час дзвінка, поверх, ліфт тощо" />
        </section>
        <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      </div>

      <aside className="bg-white border-t-4 border-accent p-6 lg:sticky lg:top-28">
        <h2 className="text-xl font-extrabold text-navy">Ваше замовлення</h2>
        <ul className="mt-4 divide-y divide-line">
          {items.map((i) => (
            <li key={i.key} className="py-3 flex gap-3">
              <ItemThumb item={i} size={56} />
              <div className="flex-1 min-w-0 text-sm">
                <p className="font-semibold text-navy leading-snug">{i.title}</p>
                <p className="text-xs text-muted line-clamp-2">{i.details.join(" · ")}</p>
                <p className="text-xs text-muted mt-0.5">{i.qty} × {fmt(i.unitPrice)}</p>
              </div>
              <p className="font-bold text-sm whitespace-nowrap">{fmt(i.qty * i.unitPrice)}</p>
            </li>
          ))}
        </ul>
        <div className="mt-4 bg-navy text-white p-4 flex items-end justify-between">
          <span className="text-xs text-white/70 uppercase tracking-wider">Разом</span>
          <span className="text-2xl font-extrabold">{fmt(total)}</span>
        </div>
        {state.status === "error" && <p className="mt-3 text-sm text-red-600">{state.msg}</p>}
        <button type="submit" className="btn btn-accent w-full mt-4" disabled={state.status === "loading"}>
          {state.status === "loading" ? "Оформлюємо…" : "Підтвердити замовлення"}
        </button>
        <p className="mt-3 text-xs text-muted">Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних. Менеджер зателефонує для підтвердження.</p>
        <Link href="/cart/" className="block text-center mt-3 text-sm text-brand link-u">← Повернутись до кошика</Link>
      </aside>
    </form>
  );
}
