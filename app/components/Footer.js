"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-4">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-600">
          © {year} kerberos.com | All rights reserved
        </p>

        <div className="mt-3 md:mt-0 flex space-x-6">
          <Link
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            <FaFacebookF className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            <FaTwitter className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            <FaYoutube className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
