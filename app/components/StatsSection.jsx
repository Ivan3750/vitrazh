import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Досить анімації один раз
        }
      },
      { threshold: 0.3 } // Блок в полі зору на 30%
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: 13, suffix: "тис", text: "завершених проектів" },
    { number: 10, suffix: "тис", text: "задоволених клієнтів" },
    { number: 95, suffix: "%", text: "рівень успішності" },
    { number: 120, suffix: "+", text: "професіоналів" },
  ];

  return (
    <section className="bg-black" ref={sectionRef}>
      <div className="mc flex flex-col sm:flex-row flex-wrap justify-between py-[70px] px-[15px] gap-y-8 sm:gap-y-0">
        {stats.map(({ number, suffix, text }, i) => (
          <div key={i} className="flex flex-col items-center sm:items-start sm:w-[22%]">
            <h3 className="text-[48px] sm:text-[70px] leading-[1] text-white">
              {inView ? (
                <CountUp end={number} duration={2.5} separator=" " />
              ) : (
                0
              )}
              {suffix && (
                <span className="text-[20px] sm:text-[30px] ml-1">{suffix}</span>
              )}
            </h3>
            <p className="text-white uppercase text-base sm:text-xl mt-2 text-center sm:text-left">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
