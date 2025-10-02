"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "@/app/assets/images/gallery/home/1.jpg";
import img2 from "@/app/assets/images/gallery/home/2.jpg";
import img3 from "@/app/assets/images/gallery/home/3.jpg";
import img4 from "@/app/assets/images/gallery/home/4.jpg";
 
const slides = [
  {
    heading: "Вікна та Двері WDS",
    subheading: "Надійність, стиль та енергоефективність для вашого дому",
    link: "/category/windows",
    image: img1,
  },
  {
    heading: "Жалюзі вертикальні тканинні",
    subheading: "Практичне рішення для захисту від сонця та створення затишку",
    link: "/category/window-blinds",
    image: img2,
  },
  {
    heading: "Тканинні Ролети на вікна",
    subheading: "Сучасний дизайн та просте керування світлом у кімнаті",
    link: "/category/gates-and-rolls",
    image: img3,
  },
  {
    heading: "Енергозберігаючі вікна",
    subheading: "Зменшення тепловтрат та економія на опаленні",
    link: "/category/windows",
    image: img4,
  },
];


const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 1.05, transition: { duration: 0.8 } },
};

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const paginate = (newIndex) => {
    setCurrent((prev) => (newIndex + slides.length) % slides.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <img
            src={slides[current].image.src}
            alt={slides[current].heading}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={current + "-text"}
          className="relative z-10 text-center px-6"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {slides[current].heading}
          </h1>
          <p className="text-lg sm:text-2xl text-gray-200 mb-8">
            {slides[current].subheading}
          </p>
          <a
            href={slides[current].link}
            className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 text-md sm:text-lg md:text-xl rounded-md font-medium shadow-md hover:bg-gray-200 transition"
          >
            Дізнатися більше
          </a>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              current === idx ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
