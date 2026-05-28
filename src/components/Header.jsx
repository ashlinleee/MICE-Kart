import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "./Icons";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../logo.png";

const navLinks = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/clients", "Clients"],
  ["/contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isLightState = scrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isLightState
          ? "border-ink-200 bg-white/90 py-3 shadow-card backdrop-blur-md"
          : "border-transparent bg-transparent py-5"
      }`}
    >
      <div className="page-container">
        <div className="grid items-center gap-4 lg:grid-cols-[auto,1fr,auto]">
          <div className="justify-self-start">
            <Link to="/" className="shrink-0">
              <img
                src={logo}
                alt="MICEkart"
                className="h-10 w-auto sm:h-11 rounded-lg"
              />
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-8 lg:flex">
            {navLinks.map(([to, label]) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`border-b-2 px-1 py-2 text-sm font-semibold transition-colors duration-300 ${
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

          <div className="flex items-center justify-self-end gap-4">
            <Link
              to="/contact"
              className="btn-orange hidden !px-5 !py-2.5 text-xs lg:inline-flex"
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
              <div className="flex flex-col gap-1 border-t border-ink-100 py-4 mt-3">
                {navLinks.map(([to, label], i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={to}
                      className={`block rounded-lg px-3 py-3 font-semibold transition-colors ${
                        pathname === to
                          ? "bg-ink-50 text-orange-500"
                          : "text-ink-700 hover:bg-ink-50"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
                <Link to="/contact" className="btn-orange mt-2 text-center">
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
