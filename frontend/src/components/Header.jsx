import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, MOBILE_EXTRA_LINKS } from "../data/content";
import { track } from "../lib/track";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? "bg-[#122A0E]/90 backdrop-blur-md border-b border-[#EFE35F]/15"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                    isActive ? "text-[#EFE35F]" : "text-white/75 hover:text-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <Link
                to="/download"
                data-testid="header-download-btn"
                onClick={() => track("download_cta_click", { source: "header" })}
                className="btn-gold !px-5 !py-2.5 !text-[11px]"
              >
                <Download size={14} strokeWidth={2.5} />
                <span className="hidden sm:inline">Download App</span>
                <span className="sm:hidden">Get App</span>
              </Link>
              <span data-testid="header-launch-note" className="hidden sm:block whitespace-nowrap text-[9px] uppercase tracking-[0.18em] text-white/45">Android & iOS — Launching Soon</span>
            </div>
            <button
              data-testid="mobile-menu-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-300 hover:border-[#EFE35F]/60"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[72px] z-40 lg:hidden bg-[#122A0E]/95 backdrop-blur-md border-b border-[#EFE35F]/15"
          >
            <nav className="flex flex-col px-6 py-6" aria-label="Mobile">
              {[...NAV_LINKS, ...MOBILE_EXTRA_LINKS].map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                >
                  <NavLink
                    to={l.to}
                    data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-white/10 py-4 font-heading text-lg font-bold tracking-wide ${
                        isActive ? "text-[#EFE35F]" : "text-white"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
