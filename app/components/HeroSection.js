"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import slides from "@/data/slides";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
};

// Custom Dots Component
const CustomDots = ({ onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`mx-1 text-2xl ${active ? "text-secondary" : "text-gray-400"}`}
    >
      •
    </button>
  );
};

const HeroCarousel = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        keyBoardControl
        transitionDuration={500}
        showDots
        arrows={false} // Hide default arrows
        customDot={<CustomDots />}
        containerClass="carousel-container"
        dotListClass="absolute bottom-6 left-0 right-0 flex justify-center"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-screen flex items-center justify-center md:justify-start text-center md:text-left px-6 md:px-20"
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              priority
              className="absolute inset-0 w-full h-full"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Text Content */}
            <div className="relative z-10 text-white max-w-2xl">
              <h2 className="text-5xl font-bold text-white">{slide.title}</h2>
              <p className="mt-4 text-lg text-white-text leading-relaxed">
                {slide.description}
              </p>
              <button className="mt-6 px-6 py-3 bg-secondary text-white rounded-lg shadow-lg hover:bg-secondary-hover transition">
                SERVICES
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
