/* app/services/energy/components/EnergyHeroSection.js */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    image: "/image/energyImg4.jpg",
    title: "KERBEROS ENERGY SERVICES",
    description:
      "Driving sustainability & innovation across Africa’s energy landscape.",
    link: "/services/consulting/energy-info",
  },
  {
    image: "/image/HeroImage.svg",
    title: "Clean Energy Solutions",
    description:
      "Helping organisations transition to greener, more resilient operations.",
    link: "/services/consulting/energy-info",
  },
  {
    image: "/image/energyImg3.jpg",
    title: "Oil & Gas Optimisation",
    description:
      "Maximising efficiency and profitability through advanced advisory.",
    link: "/services/consulting/energy-info",
  },
];

export default function EnergyHeroSection() {
  const [current, setCurrent] = useState(0);

  /* auto‑cycle every 5 s */
  useEffect(() => {
    const id = setInterval(
      () => setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1)),
      5_000
    );
    return () => clearInterval(id);
  }, []);

  /* smooth‑scroll trigger */
  const scrollNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-[85vh] md:h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <Link
          href={slides[current].link}
          key={current}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full cursor-pointer"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-cover brightness-75"
            />
          </motion.div>
        </Link>
      </AnimatePresence>

      {/* overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white pointer-events-none">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {slides[current].title}
        </h1>
        <p className="text-lg md:text-xl mt-2">{slides[current].description}</p>
      </div>

      {/* scroll‑down arrow */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollNext}
          className="p-3 bg-white/30 backdrop-blur-md rounded-full hover:bg-white/50 transition"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
}
