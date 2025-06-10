// app/components/Navbar.js
"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { FaTools, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import mainLogo from "@/public/image/mainLogo.svg";
import textLogo from "@/public/image/textLogo.svg";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  // close mobile dropdown on resize ≥ lg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsMobileDropdownOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // close desktop Services if you click outside it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-primary py-4 transition-all duration-300">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={mainLogo} alt="Kerberos Logo" width={32} height={32} />
          <Image
            src={textLogo}
            alt="Kerberos Text Logo"
            width={96}
            height={24}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8 items-center">
          <NavLink href="/" label="Home" pathname={pathname} />

          {/* Desktop Services dropdown */}
          <div ref={dropdownRef} className="relative inline-block">
            <button
              onClick={() => setServicesOpen((o) => !o)}
              className="flex items-center py-2 px-4 text-gray-900 hover:text-primary transition-colors"
            >
              Services
              <ChevronDownIcon
                className={`ml-1 w-5 h-5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`
                absolute top-full left-0 mt-1 w-64 bg-white
                border border-gray-200 rounded-md shadow-lg origin-top
                transition-all duration-300 ease-out transform
                ${
                  servicesOpen
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible"
                }
              `}
            >
              <div className="p-4 space-y-2">
                <DropdownItem
                  href="/services/consulting/consulting-info"
                  label="Consulting"
                  icon={<FaTools />}
                  onClick={() => setServicesOpen(false)}
                />
                <DropdownItem
                  href="/services/consulting/technology-info"
                  label="Technology"
                  icon={<FaLaptopCode />}
                  onClick={() => setServicesOpen(false)}
                />
                <DropdownItem
                  href="/services/consulting/energy-info"
                  label="Energy"
                  icon={<FaLightbulb />}
                  onClick={() => setServicesOpen(false)}
                />
              </div>
            </div>
          </div>

          <NavLink href="/about" label="About Us" pathname={pathname} />
          <NavLink href="/contact" label="Contact Us" pathname={pathname} />
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMobileMenuOpen((o) => !o)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Mobile Menu */}
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

function NavLink({ href, label, pathname }) {
  return (
    <Link
      href={href}
      className={`relative py-2 px-4 text-gray-900 transition-colors
        after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
        after:bg-primary after:transition-all after:duration-200
        hover:after:w-full hover:text-primary
        ${pathname === href ? "text-primary font-semibold after:w-full" : ""}`}
    >
      {label}
    </Link>
  );
}

function DropdownItem({ href, label, icon, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 transition-colors"
    >
      <div className="text-primary">{icon}</div>
      <span className="font-medium text-gray-800">{label}</span>
    </Link>
  );
}

function MobileMenu({
  setIsMobileMenuOpen,
  isMobileDropdownOpen,
  setIsMobileDropdownOpen,
}) {
  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center space-y-6 z-50">
      <button onClick={handleCloseMenu} aria-label="Close Menu">
        <CloseIcon />
      </button>

      <Link
        href="/"
        className="text-gray-900 hover:text-primary text-lg"
        onClick={handleCloseMenu}
      >
        Home
      </Link>

      <button
        className="text-gray-900 hover:text-primary text-lg flex items-center"
        onClick={() => setIsMobileDropdownOpen((o) => !o)}
      >
        Services <ChevronDownIcon className="ml-1 w-5 h-5" />
      </button>

      {isMobileDropdownOpen && (
        <div className="flex flex-col space-y-4">
          <Link
            href="/services/consulting/consulting-info"
            className="text-gray-900 hover:text-primary text-lg"
            onClick={handleCloseMenu}
          >
            Consulting
          </Link>
          <Link
            href="/services/consulting/technology-info"
            className="text-gray-900 hover:text-primary text-lg"
            onClick={handleCloseMenu}
          >
            Technology
          </Link>
          <Link
            href="/services/consulting/energy-info"
            className="text-gray-900 hover:text-primary text-lg"
            onClick={handleCloseMenu}
          >
            Energy
          </Link>
        </div>
      )}

      <Link
        href="/about"
        className="text-gray-900 hover:text-primary text-lg"
        onClick={handleCloseMenu}
      >
        About Us
      </Link>
      <Link
        href="/contact"
        className="text-gray-900 hover:text-primary text-lg"
        onClick={handleCloseMenu}
      >
        Contact Us
      </Link>
    </div>
  );
}

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
