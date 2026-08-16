import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { track } from "../lib/track";

export const Reveal = ({ children, delay = 0, className = "", y = 22 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Chapter = () => null;

export const DownloadButton = ({ testid = "download-btn", label = "Download the App", className = "", source = "site" }) => (
  <Link
    to="/download"
    data-testid={testid}
    onClick={() => track("download_cta_click", { source })}
    className={`btn-gold ${className}`}
  >
    {label}
    <ArrowRight size={15} strokeWidth={2.5} />
  </Link>
);

export const PageHero = ({ chapter, label, title, sub, children }) => (
  <section className="relative overflow-hidden bg-[#122A0E] pt-20 pb-8 md:pt-24 md:pb-10">
    <div className="relative mx-auto max-w-6xl px-6">
      <Chapter n={chapter} label={label} />
      <Reveal delay={0.1}>
        <h1 className="mt-4 max-w-3xl font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          {title}
        </h1>
      </Reveal>
      {sub && (
        <Reveal delay={0.2}>
          <p className="mt-3 max-w-xl text-sm md:text-base text-white/70">{sub}</p>
        </Reveal>
      )}
      {children}
    </div>
  </section>
);
