import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { track } from "../lib/track";

export const Reveal = ({ children, delay = 0, className = "", y = 28 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Chapter = ({ n, label }) => (
  <Reveal>
    <div className="flex items-center gap-4" data-testid={`chapter-${n}`}>
      <span className="font-heading text-xs font-bold tracking-[0.3em] text-[#D4C942]">{n}</span>
      <span className="h-px w-12 bg-[#D4C942]/60" />
      <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#D4C942]/90">{label}</span>
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

export const OutlineLink = ({ to, testid, children, source }) => (
  <Link to={to} data-testid={testid} onClick={() => source && track("cta_click", { source })} className="btn-outline">
    {children}
  </Link>
);

export const PageHero = ({ chapter, label, title, sub, children }) => (
  <section className="relative overflow-hidden bg-[#284525] pt-36 pb-20 md:pt-44 md:pb-28">
    <div className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full glow-gold" />
    <div className="relative mx-auto max-w-6xl px-6">
      <Chapter n={chapter} label={label} />
      <Reveal delay={0.1}>
        <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-3xl">
          {title}
        </h1>
      </Reveal>
      {sub && (
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base md:text-lg text-white/70">{sub}</p>
        </Reveal>
      )}
      {children}
    </div>
  </section>
);
