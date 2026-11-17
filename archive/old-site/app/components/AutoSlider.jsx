"use client";

import { useRef, useEffect, useState, Children, cloneElement } from "react";

export default function AutoSlider({ children, speed = 80 }) {
  const sliderRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const items = Children.toArray(children);

  const doubledItems = [
    ...items,
    ...items.map((child, i) =>
      cloneElement(child, {
        key: `clone-${child.key ?? i}`,
      })
    ),
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let lastTime = performance.now();
    let rafId;

    const tick = (now) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (!paused) {
        slider.scrollLeft += speed * delta;

        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [speed, paused]);

  return (
    <div className="relative overflow-hidden">
       <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <div
        ref={sliderRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="flex gap-6 overflow-x-hidden select-none"
      >
        {doubledItems}
      </div>
    </div>
  );
}
