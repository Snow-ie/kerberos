"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-10 border-t">
      <div className="container mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  href="/services/business-strategy"
                  className="hover:text-primary transition-all duration-300"
                >
                  Business Strategy Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/financial-advisory"
                  className="hover:text-primary transition-all duration-300"
                >
                  Financial Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services/operational-efficiency"
                  className="hover:text-primary transition-all duration-300"
                >
                  Operational Efficiency
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-transformation"
                  className="hover:text-primary transition-all duration-300"
                >
                  IT & Digital Transformation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/risk-management"
                  className="hover:text-primary transition-all duration-300"
                >
                  Risk Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-all duration-300"
                >
                  Explore All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  href="/industries/technology"
                  className="hover:text-primary transition-all duration-300"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/finance"
                  className="hover:text-primary transition-all duration-300"
                >
                  Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/healthcare"
                  className="hover:text-primary transition-all duration-300"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/retail"
                  className="hover:text-primary transition-all duration-300"
                >
                  Retail
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/manufacturing"
                  className="hover:text-primary transition-all duration-300"
                >
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/government"
                  className="hover:text-primary transition-all duration-300"
                >
                  Government & Public Sector
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-primary transition-all duration-300"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="hover:text-primary transition-all duration-300"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-primary transition-all duration-300"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-primary transition-all duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary transition-all duration-300"
                >
                  Blog/Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-2">
                <FiPhone className="text-primary" />
                <Link
                  href="tel:+15551234567"
                  className="hover:text-primary transition-all duration-300"
                >
                  +1 (555) 123-4567
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FiMapPin className="text-primary" />
                <Link
                  href="https://maps.google.com/?q=123 Business Ave, Suite 500, New York, NY 10001, USA"
                  target="_blank"
                  className="hover:text-primary transition-all duration-300"
                >
                  123 Business Ave, Suite 500, New York, NY 10001, USA
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FiClock className="text-primary" />
                <span>Mon-Fri: 9 AM - 6 PM</span>
              </li>
            </ul>

            {/* Social Media */}
            <h3 className="font-semibold text-lg mt-6 mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-primary text-xl hover:scale-110 transition-all duration-300"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-primary text-xl hover:scale-110 transition-all duration-300"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-primary text-xl hover:scale-110 transition-all duration-300"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                className="text-primary text-xl hover:scale-110 transition-all duration-300"
              >
                <FaTiktok />
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="md:w-2/3">
            <input
              type="email"
              placeholder="Subscribe to Our Newsletter"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-all duration-300">
            Subscribe
          </button>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row md:justify-between text-gray-500 text-sm">
          <p>© 2024 Consulting Firm. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-all duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="hover:text-primary transition-all duration-300"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-primary transition-all duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
