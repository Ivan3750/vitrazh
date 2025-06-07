const StepNavigation = ({ step }) => {
  const steps = ["Тип профілю", "Параметри вікна", "Оформлення замовлення", "Підсумок"];

  return (
    <div className="flex mc border justify-between py-[30px] mb-[50px] px-[45px] rounded-2xl">
      {steps.map((label, index) => (
        <div key={index} className="flex gap-[15px] items-center">
          <div className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-[25px] ${step === index + 1 ? "bg-[#D8F422]" : "bg-gray-300"}`}>
            <p>{index + 1}</p>
          </div>
          <p className="text-[22px]">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default StepNavigation;
