"use client";

import { useRef, useEffect } from "react";

export default function AutoSlider({ children, speed = 5 }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let lastTime = performance.now();
    let animationId;

    const tick = (now) => {
      const delta = (now - lastTime) / 1000; // сек
      lastTime = now;

      slider.scrollLeft += speed * delta; // рухаємо вліво

      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0; // початок
      }

      animationId = requestAnimationFrame(tick);
    };

    animationId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationId);
  }, [speed]);

  return (
    <div
      ref={sliderRef}
      className="flex gap-5 overflow-x-hidden select-none cursor-default"
    >
      {children}
    </div>
  );
}
