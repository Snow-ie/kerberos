"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email.trim() !== "") {
      setIsActive(true);
      setTimeout(() => setIsActive(false), 200);
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gray-50 text-gray-800 py-12 border-t">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-600">
              {[
                "Business Strategy Consulting",
                "Financial Advisory",
                "Operational Efficiency",
                "IT & Digital Transformation",
                "Risk Management",
              ].map((service, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-primary transition-all">
                    {service}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#" className="hover:text-primary transition-all">
                  Explore All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              {["About Us", "Our Team", "Insights"].map((item, index) => (
                <li key={index}>
                  <Link
                    href="/about"
                    className="hover:text-primary transition-all"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-2">
                <FiPhone className="text-primary" />
                <Link href="tel:+15551234567" className="hover:text-primary">
                  +1 (555) 123-4567
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FiMapPin className="text-primary" />
                <Link
                  href="https://maps.google.com/?q=4 Pakali Close, Off Aminu Kano Crescent, Wuse 2, Abuja, Nigeria"
                  target="_blank"
                  className="hover:text-primary"
                >
                  4 Pakali Close, Off Aminu Kano Crescent, Wuse 2, Abuja,
                  Nigeria
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FiClock className="text-primary" />
                <span>Mon-Fri: 9 AM - 6 PM</span>
              </li>
            </ul>

            <h3 className="font-semibold text-lg mt-6 mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaLinkedinIn, href: "#" },
                { icon: FaTiktok, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="text-primary text-xl hover:scale-110 transition-all"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-center gap-3 w-full max-w-lg mx-auto">
          <div className="w-full md:w-auto flex-grow">
            <input
              type="email"
              placeholder="Subscribe to Our Newsletter"
              value={email}
              onChange={handleInputChange}
              className="w-full md:w-[350px] lg:w-[400px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
          <button
            onClick={handleSubscribe}
            disabled={!email.trim()}
            className={`px-6 py-3 rounded-lg transition-all ${
              email.trim()
                ? `bg-primary text-white hover:bg-primary-dark ${
                    isActive ? "scale-95" : "scale-100"
                  }`
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Subscribe
          </button>
        </div>

        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row md:items-center md:justify-center text-gray-600 text-sm text-center">
          <p>© 2024 Consulting Firm. All rights reserved.</p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map(
              (item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="hover:text-primary transition-all"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
