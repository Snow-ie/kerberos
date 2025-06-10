"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    image: "/image/consultingImg4.jpg",
    title: "KERBEROS CONSULTING",
    description: "Providing innovative business solutions to drive success.",
    link: "/services/consulting/consulting-info",
  },
  {
    image: "/image/HeroImage3.svg",
    title: "Strategic Planning",
    description: "Helping businesses craft and execute effective strategies.",
    link: "/services/consulting/consulting-info",
  },
];

export default function ConsultingHeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1)),
      5_000
    );
    return () => clearInterval(id);
  }, []);

  const scrollToNextSection = () => {
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
              className="brightness-75 object-cover"
            />
          </motion.div>
        </Link>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white pointer-events-none">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {slides[current].title}
        </h1>
        <p className="text-lg md:text-xl mt-2">{slides[current].description}</p>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToNextSection}
          className="p-3 bg-white bg-opacity-30 rounded-full backdrop-blur-md hover:bg-opacity-50 transition"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
}
