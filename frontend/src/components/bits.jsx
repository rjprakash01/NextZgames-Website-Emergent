import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { track } from "../lib/track";

export const Reveal = ({ children, delay = 0, className = "", y = 22 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Chapter = ({ n, label, tone = "dark" }) => (
  <Reveal>
    <div
      data-testid={`chapter-${(n || label).toString().toLowerCase().replace(/\s+/g, "-")}`}
      className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 ${
        tone === "light"
          ? "border-[#254F1F]/20 bg-white text-[#A3941F]"
          : "border-[#EFE35F]/30 bg-[#EFE35F]/8 text-[#EFE35F]"
      }`}
    >
      {n && (
        <>
          <span className="font-heading text-[11px] font-extrabold tracking-[0.2em]">{n}</span>
          <span className={`h-2.5 w-px ${tone === "light" ? "bg-[#254F1F]/25" : "bg-[#EFE35F]/40"}`} />
        </>
      )}
      <span className="text-[10px] font-semibold uppercase tracking-[0.28em]">{label}</span>
    </div>
  </Reveal>
);

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
  <section className="relative overflow-hidden bg-[#254F1F] pt-20 pb-8 md:pt-24 md:pb-10">
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
