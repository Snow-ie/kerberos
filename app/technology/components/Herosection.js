"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const slides = [
  {
    image: "/image/techImg2.jpg",
    title: "KERBEROS TECHNOLOGIES",
    description: "Transforming businesses through innovation.",
    link: "/services/consulting/technology-info",
  },
  {
    image: "/image/techImg3.jpg",
    title: "Cybersecurity Excellence",
    description: "Safeguarding your digital assets with world‑class solutions.",
    link: "/services/consulting/technology-info",
  },
];

export default function TechHeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1)),
      5_000
    );
    return () => clearInterval(id);
  }, []);

  const scrollDown = () =>
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });

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

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white pointer-events-none">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {slides[current].title}
        </h1>
        <p className="text-lg md:text-xl mt-2">{slides[current].description}</p>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollDown}
          className="p-3 bg-white/30 backdrop-blur-md rounded-full hover:bg-white/50 transition"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
}
