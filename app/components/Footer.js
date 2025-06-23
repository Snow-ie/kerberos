"use client";

import Link from "next/link";
import socials from "@/data/socials";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 text-center md:text-left">
          © {year} kerberos.ng — All rights reserved.
        </p>

        <div className="flex items-center justify-center space-x-5">
          {socials.map(({ icon: Icon, href, label }, i) => (
            <Link
              key={i}
              href={href}
              aria-label={label}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
