"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import "react-multi-carousel/lib/styles.css";
import { slides } from "@/data/slides";

const responsive = {
  desktop: { breakpoint: { max: 5000, min: 1024 }, items: 1 },
  laptop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
  tablet: { breakpoint: { max: 768, min: 480 }, items: 1 },
  mobile: { breakpoint: { max: 480, min: 0 }, items: 1 },
};

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:inline-flex absolute top-1/2 right-6 -translate-y-1/2
               bg-primary text-white p-3 rounded-full shadow-md
               hover:bg-opacity-80 transition"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    /* same hidden-on-small rule */
    className="hidden md:inline-flex absolute top-1/2 left-6 -translate-y-1/2
               bg-primary text-white p-3 rounded-full shadow-md
               hover:bg-opacity-80 transition"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const CustomDot = ({ onClick, active }) => (
  <button
    onClick={onClick}
    className={`mx-1 text-3xl transition-all duration-300 ${
      active ? "text-primary scale-125" : "text-gray-400 hover:text-primary"
    }`}
  >
    •
  </button>
);

const HomeCarousel = () => {
  const router = useRouter();

  const handleSlideClick = (slug) => {
    router.push(`/article/${slug}`);
  };

  return (
    <div className="relative w-full h-[90vh] md:h-screen">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={2000}
        transitionDuration={400}
        customTransition="transform 400ms ease-in-out"
        showDots
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        customDot={<CustomDot />}
        className="relative"
        dotListClass="absolute bottom-6 left-0 right-0 flex justify-center"
      >
        {slides.map((slide) => (
          <div
            key={slide.slug}
            onClick={() => handleSlideClick(slide.slug)}
            className="relative h-[90vh] md:h-screen flex items-center justify-center bg-cover bg-center cursor-pointer transition-all duration-700 ease-in-out bg-no-repeat"
            style={{ backgroundImage: `url(${slide.background})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>

            <motion.div
              className="text-center text-white z-10 px-6 md:px-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            >
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                className="text-3xl sm:text-4xl md:text-6xl font-bold"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.3 },
                }}
                className="mt-4 text-base sm:text-lg md:text-xl"
              >
                {slide.description}
              </motion.p>
            </motion.div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
