"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import mainLogo from "@/public/image/mainLogo.svg";
import textLogo from "@/public/image/textLogo.svg";
import { ChevronDown, ChevronUp, AlignJustify, XCircle } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overWhiteSection, setOverWhiteSection] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const whiteSectionRef = useRef(null);

  // Close dropdown & menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect if Navbar is over a white section
  useEffect(() => {
    if (!whiteSectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOverWhiteSection(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(whiteSectionRef.current);

    return () => {
      if (whiteSectionRef.current) observer.unobserve(whiteSectionRef.current);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? overWhiteSection
              ? "bg-white"
              : "bg-opacity-80 backdrop-blur-md bg-transparent "
            : "bg-white"
        }`}
      >
        <div className="max-w-9xl mx-auto p-6">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center">
              <div className="relative w-8 h-8">
                <Image
                  src={mainLogo}
                  alt="Kerberos Logo"
                  fill
                  loading="eager"
                  className="object-contain transition-all duration-300"
                />
              </div>
              <div className="relative w-24 h-6">
                <Image
                  src={textLogo}
                  alt="Kerberos Text Logo"
                  fill
                  loading="eager"
                  className="object-contain transition-all duration-300"
                />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 bg-primary text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary-hover"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? (
                <XCircle className="text-2xl" />
              ) : (
                <AlignJustify className="text-2xl" />
              )}
            </button>

            {/* Navigation Links */}
            <div
              ref={menuRef}
              className={`absolute md:relative top-16 left-0 md:top-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent md:flex md:items-center md:space-x-6 p-5 md:p-0 transition-all ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <Link
                href="/"
                className={`block md:inline py-2 px-4 relative ${
                  pathname === "/" ? "text-primary" : "text-text"
                } hover:text-primary after:block after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Dropdown */}
              <div className="relative md:inline-block dropdown z-50">
                {/* Dropdown Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen((prev) => !prev);
                  }}
                  className="flex items-center text-text hover:text-primary py-2 px-4 relative after:block after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  Services{" "}
                  {isDropdownOpen ? (
                    <ChevronUp className="ml-2 text-lg" />
                  ) : (
                    <ChevronDown className="ml-2 text-lg" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute bg-white text-text shadow-md rounded mt-2 w-40 left-0 z-50">
                    <Link
                      href="/services/energy"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Energy
                    </Link>
                    <Link
                      href="/services/technology"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Technology
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className={`block md:inline py-2 px-4 relative ${
                  pathname === "/about" ? "text-primary" : "text-text"
                } hover:text-primary after:block after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`block md:inline py-2 px-4 relative ${
                  pathname === "/contact" ? "text-primary" : "text-text"
                } hover:text-primary after:block after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* White Section Detector */}
      <div ref={whiteSectionRef} className="h-[100px] bg-white w-full"></div>
    </>
  );
}
