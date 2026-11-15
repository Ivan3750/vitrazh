"use client";
import Button from "./Button";
import { Reveal } from "./site/motion";

// Лаймовий блок із закликом до калькулятора. Проп img залишено для сумісності зі сторінками, але не використовується.
const SectionContact = ({
  title = "Хочете дізнатися точну вартість?",
  text = "Розрахуйте вартість вашого проєкту за кілька кроків - зручний калькулятор покаже точну суму.",
  name = "Розрахувати",
}) => {
  return (
    <section className="py-6 px-4 sm:px-6">
      <Reveal className="max-w-[1320px] mx-auto">
        <div className="rounded-[2rem] bg-brand-lime text-ink p-7 sm:p-10 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-end">
          <h2 className="font-display text-3xl sm:text-5xl uppercase leading-[0.95]">{title}</h2>
          <div>
            {text && <p className="text-ink/75 mb-6 text-lg">{text}</p>}
            <Button name={name} link="/calc" />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default SectionContact;
