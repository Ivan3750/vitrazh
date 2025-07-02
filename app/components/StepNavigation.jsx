const StepNavigation = ({ step, nextStep, prevStep  }) => {
  const steps = ["Тип профілю", "Параметри вікна", "Підсумок"];

  return (
    <>
      {/* Кнопки */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          ← Назад
        </button>
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-[#D8F422] rounded hover:bg-yellow-400"
        >
          Далі →
        </button>
      </div>
      <div className="flex mc border justify-between py-[10px] mb-[50px] px-[45px] border-[#edeef2] rounded-2xl">
        {steps.map((label, index) => (
          <div key={index} className="flex gap-[15px] items-center">
            <div
              className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-[25px] ${
                step === index + 1 ? "bg-[#D8F422]" : "bg-gray-300"
              }`}
            >
              <p>{index + 1}</p>
            </div>
            <p className="text-[22px]">{label}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default StepNavigation;
