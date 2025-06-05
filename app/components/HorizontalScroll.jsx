"use client";

import { useRef, useEffect } from "react";

export default function HorizontalScroll({ children }) {
  const scrollRef = useRef(null);
  const scrollAmount = 1; // пікселів за кадр

  useEffect(() => {
    if (!scrollRef.current) return;

    let animationFrameId;
    const scrollContainer = scrollRef.current;

    const step = () => {
      if (!scrollContainer) return;

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0; // зациклюємо
      } else {
        scrollContainer.scrollLeft += scrollAmount; // рухаємось вправо
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
   <div
  ref={scrollRef}
  className="flex gap-5 overflow-x-auto scrollbar-hide cursor-default select-none items-start"
  style={{ scrollBehavior: "smooth" }}
>
  {children}
</div>
  );
}
