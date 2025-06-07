// Calc.tsx

"use client"
import { useState } from "react";
import StepNavigation from "../components/StepNavigation";
import ProfileSelector from "../components/ProfileSelector";
import WindowParameters from "../components/WindowParameters";
/* import OrderForm from "../components/OrderForm";
import Summary from "../components/Summary";
 */
const Calc = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    profile: null,
    window: {},
    order: {},
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <>
       <section className="relative h-[600px] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          /*  style={{
            backgroundImage: `url(${b.src})`,
          }} */
        />
        <h1 className="relative text-white text-4xl font-bold z-10">
          Розрахуйте вартість
        </h1>
      </section>
     
      <section className="mc py-10">
        {step === 1 && <ProfileSelector data={data} setData={setData} nextStep={nextStep} />}
        {step === 2 && <WindowParameters data={data} setData={setData} nextStep={nextStep} prevStep={prevStep} />}
{/*         {step === 3 && <OrderForm data={data} setData={setData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <Summary data={data} prevStep={prevStep} />} */}
      </section>

       <StepNavigation step={step} />
    </>
  );
};

export default Calc;
