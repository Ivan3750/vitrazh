import { motion } from 'framer-motion';

const StepNavigation = ({ step, nextStep, prevStep, canGoNext }) => {
  const steps = ["Тип профілю", "Параметри вікна", "Підсумок", "Ціна"];

  const isFirst = step === 0;
  const isLast = step === steps.length - 1;

  return (
    <>
      <div className="flex justify-center gap-5 my-6">
        {!isFirst && (
          <motion.button
            onClick={prevStep}
            className="px-6 py-3 bg-gray-300 rounded-md hover:scale-[0.995] transition-all"
            whileHover={{ scale: 1.05 }}
          >
            Назад
          </motion.button>
        )}

        {!isLast && (
          <motion.button
            onClick={canGoNext ? nextStep : undefined}
            disabled={!canGoNext}
            className={`px-6 py-3 rounded-md hover:scale-[0.995] transition-all ${
              canGoNext
                ? "bg-[#D8F422] text-black"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            whileHover={canGoNext ? { scale: 1.05 } : {}}
          >
            Далі
          </motion.button>
        )}
      </div>

      <motion.div
        className="mc border justify-between py-[10px] mb-[50px] px-[45px] border-[#edeef2] rounded-2xl md:flex hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {steps.map((label, index) => (
          <motion.div
            key={index}
            className="flex gap-[15px] items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: step === index ? 1 : 0.6 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-[25px] font-semibold ${
                step === index ? "bg-[#D8F422]" : "bg-gray-300"
              }`}
              transition={{ duration: 0.3 }}
            >
              {index + 1}
            </motion.div>
            <p
              className={`text-[22px] ${
                step === index ? "text-black" : "text-gray-500"
              }`}
            >
              {label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default StepNavigation;
