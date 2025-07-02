"use client"
import { useState, useEffect } from "react";
import StepNavigation from "../components/StepNavigation";
import ProfileSelector from "../components/ProfileSelector";
import WindowParameters from "../components/WindowParameters";
import Summary from "../components/Summary";
import prices from "../data/price.json";

const Calc = () => {
  const [step, setStep] = useState(1);
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

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  useEffect(() => {
    if (step === 4) {
      calculateTotal();
    }
  }, [step]);

  const calculateTotal = () => {
    const { profile, window } = data;
    if (!profile || !window.type || !window.width || !window.height) return;

    const profilePrice = prices.profiles[profile] || 0;
    const typePrice = prices.types[window.type] || 0;
    const area = (window.width * window.height) / 10000;

    const total = Math.round((profilePrice + typePrice) * area);
    setData((prev) => ({ ...prev, total }));
  };

  return (
    <>
      <section className="relative h-[600px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" />
        <h1 className="relative text-white text-4xl font-bold z-10">
          Розрахуйте вартість
        </h1>
      </section>

      <section className="mc py-[50px]">
        {step === 1 && (
          <ProfileSelector data={data} setData={setData} nextStep={nextStep} />
        )}
        {step === 2 && (
          <WindowParameters
            data={data}
            setData={setData}
           
          />
        )}
         {step === 3 && <Summary data={data} prevStep={prevStep} />}
      <StepNavigation step={step}   nextStep={nextStep}
            prevStep={prevStep}/>
       </section>

    </>
  );
};

export default Calc;
