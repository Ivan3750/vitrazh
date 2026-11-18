

"use client";
import Button from "./Button";
import helpImg from "@/app/assets/images/decoration/solution_help.png";

const SectionContact = ({
  title = "Хочете дізнатися точну вартість?",
  text = "Розрахуйте вартість вашого проєкту за кілька кроків - зручний калькулятор покаже точну суму.",
  name = "Розрахувати",
  img = helpImg,
}) => {
  return (
    <section className="py-16 px-4">
      <div
        className="px-6 py-20 max-w-[1200px] mx-auto rounded-2xl bg-container bg-center md:bg-top bg-no-repeat  relative overflow-hidden"
        style={{
          backgroundImage: `url(${img.src})`,
          height: "520px",
        }}
      >
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>

        <div className="relative z-10 max-w-xl mt-[30px]">
          <h2 className="text-[22px] sm:text-[32px] text-white lg:text-[40px] font-semibold mb-4">
            {title}
          </h2>

          {text && (
            <p className="mt-4 text-lg leading-relaxed text-white text-white/90 text-balance">
              {text}
            </p>
          )}

          <div className="mt-6">
            <Button name={name} link="/calc" />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
