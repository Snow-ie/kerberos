"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "lucide-react";
import mainLogo from "@/public/image/mainLogo.svg";
import textLogo from "@/public/image/textLogo.svg";
import navItems from "@/data/navItems";
import services from "@/data/services";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setMobileDropdownOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-primary py-4 shadow-sm">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={mainLogo} alt="Kerberos Logo" width={32} height={32} />
          <Image src={textLogo} alt="Kerberos Text" width={96} height={24} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navItems.slice(0, 1).map((item) => (
            <NavLink key={item.href} {...item} pathname={pathname} />
          ))}

          {/* Services Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen((prev) => !prev)}
              className="flex items-center py-2 px-4 text-gray-900 hover:text-primary"
            >
              Services
              <ChevronDownIcon
                className={`ml-1 w-5 h-5 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg transition-all transform ${
                servicesOpen
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
            >
              <div className="p-4 space-y-2">
                {services.map((service) => (
                  <DropdownItem
                    key={service.href}
                    {...service}
                    onClick={() => setServicesOpen(false)}
                  />
                ))}
              </div>
            </div>
          </div>

          {navItems.slice(1).map((item) => (
            <NavLink key={item.href} {...item} pathname={pathname} />
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden transition-transform hover:scale-110"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <MobileMenu
            onClose={() => {
              setMobileMenuOpen(false);
              setMobileDropdownOpen(false);
            }}
            dropdownOpen={mobileDropdownOpen}
            setDropdownOpen={setMobileDropdownOpen}
          />
        )}
      </div>
    </nav>
  );
}

// NavLink Component
function NavLink({ href, label, pathname }) {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`relative py-2 px-4 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full hover:text-primary ${
        isActive ? "text-primary font-semibold after:w-full" : "text-gray-900"
      }`}
    >
      {label}
    </Link>
  );
}

// Dropdown Item
function DropdownItem({ href, label, icon, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50 transition-colors"
    >
      <span className="text-primary">{icon}</span>
      <span className="text-gray-800 font-medium">{label}</span>
    </Link>
  );
}

// Mobile Menu
function MobileMenu({ onClose, dropdownOpen, setDropdownOpen }) {
  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center space-y-6 z-50">
      <button onClick={onClose} aria-label="Close Menu">
        <CloseIcon />
      </button>

      <Link
        href="/"
        className="text-gray-900 hover:text-primary text-lg"
        onClick={onClose}
      >
        Home
      </Link>

      <button
        className="text-gray-900 hover:text-primary text-lg flex items-center"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        Services <ChevronDownIcon className="ml-1 w-5 h-5" />
      </button>

      {dropdownOpen && (
        <div className="flex flex-col space-y-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="text-gray-900 hover:text-primary text-lg"
              onClick={onClose}
            >
              {service.label}
            </Link>
          ))}
        </div>
      )}

      <Link
        href="/about"
        className="text-gray-900 hover:text-primary text-lg"
        onClick={onClose}
      >
        About Us
      </Link>
      <Link
        href="/contact"
        className="text-gray-900 hover:text-primary text-lg"
        onClick={onClose}
      >
        Contact Us
      </Link>
    </div>
  );
}

// Icons
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
