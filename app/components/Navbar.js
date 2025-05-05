"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { FaTools, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import Image from "next/image";
import mainLogo from "@/public/image/mainLogo.svg";
import textLogo from "@/public/image/textLogo.svg";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsMobileDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-100 shadow-md py-3"
          : "bg-transparent text-primary py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={mainLogo} alt="Kerberos Logo" width={32} height={32} />
          <Image
            src={textLogo}
            alt="Kerberos Text Logo"
            width={96}
            height={24}
          />
        </Link>

        <div className="hidden lg:flex space-x-8">
          <NavLink href="/" label="Home" pathname={pathname} />

          <div className="services-container">
            <button className="relative flex items-center py-2 px-4 text-gray-900 hover:text-primary transition-colors after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Services <ChevronDownIcon />
            </button>

            <div className="services absolute top-[68px] left-0 w-screen bg-white shadow-xl border-t border-gray-200  transition-opacity duration-300 rounded-b-lg">
              <div className="max-w-7xl mx-auto px-8 py-6 grid grid-cols-3 gap-6">
                <DropdownItem
                  href="/consulting"
                  label="Consulting"
                  description="Expert guidance to enhance business performance."
                  icon={<FaTools />}
                />
                <DropdownItem
                  href="/technology"
                  label="Technology"
                  description="Innovative IT solutions for modern businesses."
                  icon={<FaLaptopCode />}
                />
                <DropdownItem
                  href="/energy"
                  label="Energy"
                  description="Sustainable energy solutions and strategies."
                  icon={<FaLightbulb />}
                />
              </div>
            </div>
          </div>

          <NavLink href="/about" label="About Us" pathname={pathname} />
          <NavLink href="/contact" label="Contact Us" pathname={pathname} />
        </div>

        <button
          className="lg:hidden transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <MobileMenu
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            isMobileDropdownOpen={isMobileDropdownOpen}
            setIsMobileDropdownOpen={setIsMobileDropdownOpen}
          />
        )}
      </div>
    </nav>
  );
}

/* Mobile Menu Component */
const MobileMenu = ({
  setIsMobileMenuOpen,
  isMobileDropdownOpen,
  setIsMobileDropdownOpen,
}) => {
  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white/90 backdrop-blur-md flex flex-col items-center justify-center space-y-6 z-50">
      <button onClick={handleCloseMenu} aria-label="Close Menu">
        <CloseIcon />
      </button>

      <Link
        href="/"
        className="text-gray-900 hover:text-primary text-lg transition-colors"
        onClick={handleCloseMenu}
      >
        Home
      </Link>

      <button
        className="text-gray-900 hover:text-primary text-lg flex items-center transition-colors"
        onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
      >
        Services <ChevronDownIcon />
      </button>

      {isMobileDropdownOpen && (
        <div className="flex flex-col space-y-4">
          <Link
            href="/consulting"
            className="text-gray-900 hover:text-primary text-lg transition-colors"
            onClick={handleCloseMenu}
          >
            Consulting
          </Link>
          <Link
            href="/technology"
            className="text-gray-900 hover:text-primary text-lg transition-colors"
            onClick={handleCloseMenu}
          >
            Technology
          </Link>
          <Link
            href="/energy"
            className="text-gray-900 hover:text-primary text-lg transition-colors"
            onClick={handleCloseMenu}
          >
            Energy
          </Link>
        </div>
      )}

      <Link
        href="/about"
        className="text-gray-900 hover:text-primary text-lg transition-colors"
        onClick={handleCloseMenu}
      >
        About Us
      </Link>
      <Link
        href="/contact"
        className="text-gray-900 hover:text-primary text-lg transition-colors"
        onClick={handleCloseMenu}
      >
        Contact Us
      </Link>
    </div>
  );
};

/* Single NavLink with Underline Hover */
const NavLink = ({ href, label, pathname }) => (
  <Link
    href={href}
    className={`relative py-2 px-4 text-gray-900 transition-colors after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:text-primary ${
      pathname === href ? "text-primary font-semibold after:w-full" : ""
    }`}
  >
    {label}
  </Link>
);

/* Dropdown Item Component */
const DropdownItem = ({ href, label, description, icon }) => (
  <Link
    href={href}
    className="flex flex-col items-start text-left p-6 rounded-md hover:bg-gray-50 transition-colors"
  >
    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-3 text-2xl">
      {icon}
    </div>
    <h3 className="text-lg font-semibold">{label}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </Link>
);

/* Menu Icon */
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-8 h-8"
  >
    <path
      d="M4 6h16M4 12h16M4 18h16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/* Close Icon */
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-8 h-8"
  >
    <path
      d="M6 6l12 12M6 18l12-12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/* Chevron Down Icon */
const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path
      d="M19 9l-7 7-7-7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
