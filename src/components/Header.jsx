import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "./Icons";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../Images/Micekart_logos/logo.png";

const navLinks = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/clients", "Clients"],
  ["/contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  const isLightState = true;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b ${
        isLightState
          ? "border-ink-200 bg-white/90 py-2 shadow-card backdrop-blur-md"
          : "border-transparent bg-transparent py-5"
      }`}
    >
      <div className="page-container">
        <div className="flex items-center justify-between gap-4">
          <div className="shrink-0">
            <Link to="/" className="shrink-0">
              <img
                src={logo}
                alt="MICEkart"
                className="h-11 w-auto origin-left rounded-lg scale-105 sm:h-12 sm:scale-110"
              />
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-10 lg:flex">
            {navLinks.map(([to, label]) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`border-b-2 px-1 py-2 text-base font-semibold transition-colors duration-300 ${
                    active
                      ? isLightState
                        ? "border-orange-500 text-orange-500"
                        : "border-orange-400 text-orange-400"
                      : isLightState
                        ? "border-transparent text-ink-700 hover:border-orange-500 hover:text-orange-500"
                        : "border-transparent text-white/90 hover:border-white hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="btn-orange hidden !px-6 !py-3 text-sm lg:inline-flex"
            >
              Enquire
            </Link>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className={`rounded-lg p-2 transition-colors duration-300 lg:hidden ${
                isLightState ? "text-ink-800" : "text-white"
              }`}
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-3 rounded-3xl border border-ink-100 bg-white/95 p-3 shadow-card backdrop-blur-md">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {navLinks.map(([to, label], i) => (
                    <motion.div
                      key={to}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className={
                        to === "/contact" ? "col-span-2 sm:col-span-1" : ""
                      }
                    >
                      <Link
                        to={to}
                        className={`block rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                          pathname === to
                            ? "bg-ink-50 text-orange-500"
                            : "text-ink-700 hover:bg-ink-50"
                        }`}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="btn-orange mt-3 w-full text-center"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
