"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
import slides from "@/data/slides";

// Responsive settings for different devices
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
};

// Custom Dots Component for Navigation
const CustomDots = ({ onClick, active }) => (
  <button
    onClick={onClick}
    className={`mx-1 text-2xl ${
      active ? "text-primary" : "text-gray-400"
    } hover:text-primary-hover`}
  >
    •
  </button>
);

const HeroCarousel = () => {
  return (
    <div className="relative w-full h-[85vh] md:h-screen overflow-hidden">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        keyBoardControl
        transitionDuration={500}
        showDots
        arrows={false}
        customDot={<CustomDots />}
        containerClass="carousel-container"
        dotListClass="absolute bottom-6 left-0 right-0 flex justify-center"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-[85vh] md:h-screen flex flex-col items-center justify-center md:items-start text-center md:text-left px-6"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Text Content */}
            <div className="relative z-10 text-white-text max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                {slide.title}
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                {slide.description}
              </p>
              {/* Show button only if `link` and `buttonText` exist */}
              {slide.link && slide.buttonText && (
                <Link href={slide.link} passHref>
                  <button className="mt-6 px-6 py-3 bg-secondary text-white-text rounded-lg shadow-lg hover:bg-secondary-hover transition">
                    {slide.buttonText}
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
