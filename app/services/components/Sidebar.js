"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const NAVBAR_H = 64;
const DRAWER_W = 256;

const links = [
  { href: "/services/consulting", label: "Introduction" },
  {
    href: "/services/consulting/consulting-info",
    label: "Kerberos Consulting Limited.",
  },
  {
    href: "/services/consulting/technology-info",
    label: "Kerberos Technologies Limited.",
  },
  {
    href: "/services/consulting/energy-info",
    label: "Kerberos Energy Services Limited.",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const navItems = links.map(({ href, label }) => {
    const active = pathname === href || pathname.startsWith(`${href}#`);
    return (
      <Link
        key={href}
        href={href}
        className={`group relative flex items-center gap-3 rounded-md
                    px-4 py-2 text-sm font-medium transition-colors
                    ${
                      active
                        ? "bg-indigo-600/10 text-indigo-700"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
      >
        <span
          className={`absolute left-0 top-0 h-full w-1 rounded-r-md transition-opacity
                      ${
                        active
                          ? "bg-indigo-600"
                          : "bg-gray-300 opacity-0 group-hover:opacity-50"
                      }`}
        />
        <ChevronRight
          className={`w-4 h-4 transition-transform
                      ${
                        active
                          ? "rotate-90 text-indigo-600"
                          : "text-gray-400 group-hover:text-gray-500"
                      }`}
        />
        <span className="truncate">{label}</span>
      </Link>
    );
  });

  /* ---------- component ---------- */
  return (
    <>
      {/* Arrow toggle (mobile only) */}
      <button
        aria-label="Toggle sidebar"
        onClick={() => setOpen((o) => !o)}
        className="fixed z-[60] md:hidden p-2 rounded-full bg-white/90 backdrop-blur shadow
                   transition-[left,transform] duration-300"
        style={{
          top: NAVBAR_H + 8,
          left: open ? DRAWER_W : 0,
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
        }}
      >
        {/* ChevronRight always rendered, we rotate it */}
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Dark overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 md:hidden bg-black/40 backdrop-blur-sm"
          style={{ top: NAVBAR_H }}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed left-0 z-50 w-64
                    h-[calc(100vh-${NAVBAR_H}px)]
                    bg-white/90 backdrop-blur border-r shadow
                    transition-transform duration-300
                    ${open ? "translate-x-0" : "-translate-x-full"}
                    md:translate-x-0 md:relative md:top-0 md:h-full md:z-auto`}
        style={{ top: NAVBAR_H }}
      >
        <div className="px-6 py-8">
          <h2 className="text-xl font-bold tracking-wide mb-6">
            Kerberos&nbsp;Group
          </h2>
          <nav className="flex flex-col gap-1">{navItems}</nav>
        </div>
      </aside>
    </>
  );
}
