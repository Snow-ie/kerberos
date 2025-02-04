"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import Image from "next/image";
import mainLogo from "../image/mainLogo.svg";
import textLogo from "../image/textLogo.svg";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

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

  return (
    <nav className="bg-white text-text fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto p-4  lg:p-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src={mainLogo}
              alt="Kerberos Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <Image
              src={textLogo}
              alt="Kerberos Text Logo"
              width={100}
              height={24}
            />
          </div>

          {/* Styled Mobile Menu Button */}
          <button
            className="md:hidden p-3 bg-primary text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary-hover"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <AiOutlineMenu className="text-2xl" />
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
              className={`block md:inline py-2 px-4 rounded ${
                pathname === "/" ? "bg-primary-active text-white" : "text-text"
              } hover:text-text-hover focus:text-text-focus`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Dropdown */}
            <div className="relative md:inline-block dropdown">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownOpen((prev) => !prev);
                }}
                className="flex items-center text-text hover:text-text-hover focus:text-text-focus py-2 px-4"
              >
                Services <AiOutlineDown className="ml-2 text-primary text-lg" />
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white text-text shadow-md rounded mt-2 w-40 left-0">
                  <Link
                    href="/services/energy"
                    className={`block px-4 py-2 ${
                      pathname === "/services/energy"
                        ? "bg-primary-active text-white"
                        : ""
                    } hover:bg-white-hover focus:bg-white-focus`}
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Energy
                  </Link>
                  <Link
                    href="/services/technology"
                    className={`block px-4 py-2 ${
                      pathname === "/services/technology"
                        ? "bg-primary-active text-white"
                        : ""
                    } hover:bg-white-hover focus:bg-white-focus`}
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
              className={`block md:inline py-2 px-4 rounded ${
                pathname === "/about"
                  ? "bg-primary-active text-white"
                  : "text-text"
              } hover:text-text-hover focus:text-text-focus`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`block md:inline py-2 px-4 rounded ${
                pathname === "/contact"
                  ? "bg-primary-active text-white"
                  : "text-text"
              } hover:text-text-hover focus:text-text-focus`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
