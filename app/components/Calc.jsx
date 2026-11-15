"use client";
import PageHero from "@/app/components/site/PageHero";
import { useState, useEffect } from "react";
import StepNavigation from "../components/StepNavigation";
import ProfileSelector from "../components/ProfileSelector";
import WindowParameters from "../components/WindowParameters";
import Summary from "../components/Summary";
import prices from "../../data/price.json";
import Price from "../components/Price";
import bg from "../assets/images/hero/calc.jpg";

const Calc = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    profile: null,
    window: {
      width: 0,
      height: 0,
      type: null,
    },
    order: {
      name: "",
      phone: "",
    },
    total: 0,
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    if (step === 3) {
      calculateTotal();
    }
  }, [step]);

  const calculateTotal = () => {
    const { profile, window } = data;
    if (!profile || !window.type || !window.width || !window.height) return;

    const profilePrice = prices.profiles[profile] || 0;
    const typePrice = prices.types[window.type] || 0;
    const area = Number(window.width) * Number(window.height) / 10000;
    if (isNaN(area) || area <= 0) return;

    const total = Math.round((profilePrice + typePrice) * area);
    setData((prev) => ({ ...prev, total }));
  };

  const canGoNext = () => {
    if (step === 0) return data.profile !== null;
    if (step === 1) return data.window.type !== null && data.window.width > 0 && data.window.height > 0;
    if (step === 2) return data.order.name.trim() !== "" && data.order.phone.trim() !== "";
    return true;
  };

  return (
    <>
      <PageHero image={bg}>Розрахуйте вартість</PageHero>

      <section className="mc py-[50px]">
        {step === 0 && <ProfileSelector data={data} setData={setData} />}
        {step === 1 && <WindowParameters data={data} setData={setData} />}
        {step === 2 && <Summary data={data} setData={setData} />}

        <StepNavigation
          step={step}
          nextStep={nextStep}
          prevStep={prevStep}
          canGoNext={canGoNext()}
        />
        <Price></Price>
      </section>
    </>
  );
};

export default Calc;
