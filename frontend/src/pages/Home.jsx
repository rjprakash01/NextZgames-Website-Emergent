import { useRef } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users, Smartphone, Layers, Compass, ShieldCheck, Headphones,
  Lock, Database, CreditCard, Scale, Gift, Zap, ArrowRight, ArrowUpRight,
} from "lucide-react";
import { Chapter, Reveal, DownloadButton } from "../components/bits";
import { PhoneMockup } from "../components/PhoneMockup";
import {
  POKER_FEATURES, PREDICTION_STEPS, WHY_CARDS, TRUST_ITEMS,
  HOW_IT_WORKS_STEPS, PROMOTIONS, FAQ_GROUPS,
} from "../data/content";
import { track } from "../lib/track";
import { usePageMeta } from "../lib/meta";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "../components/ui/accordion";

const WHY_ICONS = { users: Users, smartphone: Smartphone, layers: Layers, compass: Compass, shield: ShieldCheck, headphones: Headphones };
const TRUST_ICONS = { lock: Lock, database: Database, card: CreditCard, scale: Scale };
const PROMO_ICONS = { gift: Gift, users: Users, zap: Zap };

const MaskedLine = ({ children, delay, className = "" }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const phoneR = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={ref} data-testid="hero-section" className="relative overflow-hidden bg-[#284525]">
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[560px] w-[560px] rounded-full glow-gold" />
      <motion.span
        style={{ y: bgY }}
        aria-hidden
        className="txt-outline-gold pointer-events-none absolute -bottom-8 left-0 select-none whitespace-nowrap font-heading text-[22vw] font-extrabold leading-none opacity-40"
      >
        NEXTZ
      </motion.span>
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-28 md:pt-36 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:pb-28">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center gap-4"
          >
            <span className="font-heading text-xs font-bold tracking-[0.3em] text-[#D4C942]">01</span>
            <span className="h-px w-12 bg-[#D4C942]/60" />
            <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#D4C942]/90">Discover</span>
          </motion.div>
          <h1 className="mt-7 font-heading font-extrabold tracking-tight leading-[0.98] text-[clamp(2.75rem,7.5vw,5.6rem)]">
            <MaskedLine delay={0.25} className="text-white">Poker.</MaskedLine>
            <MaskedLine delay={0.38} className="text-white">Predictions.</MaskedLine>
            <MaskedLine delay={0.51} className="text-[#D4C942]">Your Next Move.</MaskedLine>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-6 max-w-lg text-base md:text-lg text-white/70"
          >
            Experience Poker and Predictions through the NextZGames app — built for players who want more from every game.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <DownloadButton testid="hero-download-btn" source="hero" />
            <Link to="/poker" data-testid="hero-explore-poker-btn" onClick={() => track("cta_click", { source: "hero_poker" })} className="btn-outline">
              Explore Poker
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-6 text-xs uppercase tracking-[0.25em] text-white/40"
          >
            Android & iOS — Launching Soon
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto"
        >
          <motion.div style={{ y: phoneY, rotate: phoneR }}>
            <div className="float-slow">
              <PhoneMockup screen="table" testid="hero-phone" className="w-[240px] md:w-[270px]" />
            </div>
          </motion.div>
          <div className="pointer-events-none absolute inset-x-0 -bottom-8 mx-auto h-8 w-3/4 rounded-full bg-black/50 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

const Ticker = () => (
  <div className="border-y border-[#D4C942]/20 bg-[#1f361d] py-5" data-testid="ticker">
    <Marquee speed={35} gradient={false} pauseOnHover>
      {["Poker", "Predictions", "Your Next Move", "One App", "Mobile First", "Download NextZGames"].map((t) => (
        <span key={t} className="mx-8 flex items-center gap-8 font-heading text-xl md:text-2xl font-extrabold uppercase tracking-[0.2em]">
          <span className="txt-outline-gold">{t}</span>
          <span className="inline-block h-2 w-2 rotate-45 bg-[#D4C942]" />
        </span>
      ))}
    </Marquee>
  </div>
);

const BrandStatement = () => (
  <section className="section-light relative py-28 md:py-36" data-testid="brand-statement">
    <div className="mx-auto max-w-5xl px-6">
      <Chapter n="02" label="The Brand" tone="light" />
      <Reveal delay={0.1}>
        <h2 className="mt-8 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1f361d]">
          Built for the <span className="gold-strong">Next Move.</span>
        </h2>
      </Reveal>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="gold-line mt-10 w-56 origin-left"
      />
      <Reveal delay={0.25}>
        <p className="mt-10 max-w-2xl text-base md:text-lg text-[#1f361d]/65">
          NextZGames brings Poker and Predictions together in a modern mobile experience designed around the way players play today.
        </p>
      </Reveal>
    </div>
  </section>
);

const PokerSection = () => (
  <section className="relative overflow-hidden bg-[#1f361d] py-28 md:py-36" data-testid="poker-section">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <Chapter n="03" label="Poker" />
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Experience Poker<br />Like Never Before
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-base md:text-lg text-white/70">
              From strategy to every decision at the table, discover a Poker experience designed for the mobile generation.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-4">
            <Link to="/poker" data-testid="poker-section-explore-btn" onClick={() => track("cta_click", { source: "home_poker" })} className="btn-outline">Explore Poker</Link>
            <DownloadButton testid="poker-section-download-btn" source="home_poker" />
          </Reveal>
        </div>
        <Reveal delay={0.15} className="relative mx-auto">
          <div className="pointer-events-none absolute inset-0 -m-16 rounded-full glow-gold" />
          <PhoneMockup screen="poker" className="relative w-[240px] md:w-[260px] rotate-2" />
        </Reveal>
      </div>
      <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {POKER_FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={0.08 * i}>
            <div className="card-green h-full p-7" data-testid={`poker-feature-${i}`}>
              <span className="font-heading text-xs font-bold tracking-[0.3em] text-[#D4C942]">0{i + 1}</span>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/60">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.15} className="mt-16 text-center">
        <p className="font-heading text-xl md:text-2xl font-bold text-white">Ready for the table?</p>
        <div className="mt-6">
          <DownloadButton testid="poker-ready-download-btn" source="poker_ready" label="Download the NextZGames App" />
        </div>
      </Reveal>
    </div>
  </section>
);

const PredictionsSection = () => (
  <section className="section-light relative overflow-hidden py-28 md:py-36" data-testid="predictions-section">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal delay={0.15} className="relative order-2 mx-auto lg:order-1">
          <div className="pointer-events-none absolute inset-0 -m-16 rounded-full glow-gold" />
          <PhoneMockup screen="predictions" className="relative w-[240px] md:w-[260px] -rotate-2" />
        </Reveal>
        <div className="order-1 lg:order-2">
          <Chapter n="04" label="Predictions" tone="light" />
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1f361d]">
              Predict the Outcome.<br /><span className="gold-strong">Own the Moment.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-base md:text-lg text-[#1f361d]/65">
              Follow the action and explore Predictions through the NextZGames mobile experience.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-4">
            <Link to="/predictions" data-testid="predictions-section-explore-btn" onClick={() => track("cta_click", { source: "home_predictions" })} className="btn-outline-dark">Explore Predictions</Link>
            <DownloadButton testid="predictions-section-download-btn" source="home_predictions" />
          </Reveal>
        </div>
      </div>
      <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PREDICTION_STEPS.map((s, i) => (
          <Reveal key={s.n} delay={0.08 * i}>
            <div className="card-light h-full p-7" data-testid={`prediction-step-${s.n}`}>
              <span className="font-heading text-3xl font-extrabold gold-strong">{s.n}</span>
              <h3 className="mt-4 font-heading text-lg font-bold text-[#1f361d]">{s.title}</h3>
              <p className="mt-2 text-sm text-[#1f361d]/60">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const WhySection = () => (
  <section className="bg-[#1f361d] py-28 md:py-36" data-testid="why-section">
    <div className="mx-auto max-w-7xl px-6">
      <Chapter n="05" label="Why NextZGames" />
      <Reveal delay={0.1}>
        <h2 className="mt-8 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          Why <span className="text-[#D4C942]">NextZGames?</span>
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_CARDS.map((c, i) => {
          const Icon = WHY_ICONS[c.icon];
          return (
            <Reveal key={c.title} delay={0.06 * i}>
              <div className="card-green group h-full p-8" data-testid={`why-card-${i}`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4C942]/30 bg-[#D4C942]/10 text-[#D4C942] transition-colors duration-300 group-hover:bg-[#D4C942] group-hover:text-[#1f361d]">
                  <Icon size={20} />
                </span>
                <h3 className="mt-6 font-heading text-lg font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-white/60">{c.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

const AppShowcase = () => {
  const screens = [
    { s: "home", label: "App Home" },
    { s: "poker", label: "Poker Lobby" },
    { s: "table", label: "Poker Table" },
    { s: "predictions", label: "Predictions" },
    { s: "wallet", label: "Wallet" },
  ];
  return (
    <section className="section-light relative overflow-hidden py-28 md:py-36" data-testid="app-showcase">
      <div className="relative mx-auto max-w-7xl px-6">
        <Chapter n="06" label="The App Experience" tone="light" />
        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-3xl font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1f361d]">
            Everything. Right in <span className="gold-strong">Your Hands.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base md:text-lg text-[#1f361d]/65">
            One App. Multiple Experiences. Discover Poker and Predictions from one simple mobile experience.
          </p>
        </Reveal>
        <div className="mt-16 flex snap-x snap-mandatory gap-8 overflow-x-auto pb-10 lg:justify-center lg:overflow-visible">
          {screens.map(({ s, label }, i) => (
            <Reveal key={s} delay={0.08 * i} className="snap-center">
              <div className={i === 2 ? "lg:-translate-y-6 lg:scale-110" : "lg:translate-y-4"}>
                <PhoneMockup screen={s} testid={`showcase-phone-${s}`} className="w-[200px] md:w-[215px]" />
                <p className="mt-5 text-center text-xs uppercase tracking-[0.25em] text-[#1f361d]/45">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-12 text-center">
          <DownloadButton testid="showcase-download-btn" source="app_showcase" />
        </Reveal>
      </div>
    </section>
  );
};

const PromotionsSection = () => (
  <section className="bg-[#1f361d] py-28 md:py-36" data-testid="promotions-section">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Chapter n="07" label="Promotions" />
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              More Reasons <span className="text-[#D4C942]">to Play</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <Link to="/promotions" data-testid="promotions-view-all" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#D4C942]">
            View all promotions
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {PROMOTIONS.map((p, i) => {
          const Icon = PROMO_ICONS[p.icon];
          return (
            <Reveal key={p.slug} delay={0.08 * i}>
              <div className="card-green group relative h-full overflow-hidden p-8" data-testid={`promo-card-${p.slug}`}>
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full glow-gold" />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4C942]/30 bg-[#D4C942]/10 text-[#D4C942]">
                  <Icon size={20} />
                </span>
                <h3 className="mt-6 font-heading text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 text-sm text-white/60">{p.desc}</p>
                <p className="mt-5 text-[11px] uppercase tracking-[0.25em] text-[#D4C942]/80">{p.validity}</p>
                <Link
                  to="/promotions"
                  data-testid={`promo-view-${p.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-[#D4C942]"
                >
                  View Promotion <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>
      <Reveal delay={0.2}>
        <p className="mt-8 text-xs text-white/40">Sample promotions shown for preview. Final offers, eligibility and terms will be published before launch.</p>
      </Reveal>
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section className="section-light py-28 md:py-36" data-testid="how-it-works-section">
    <div className="mx-auto max-w-7xl px-6">
      <Chapter n="08" label="Getting Started" tone="light" />
      <Reveal delay={0.1}>
        <h2 className="mt-8 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1f361d]">
          Getting Started <span className="gold-strong">Is Simple</span>
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {HOW_IT_WORKS_STEPS.slice(0, 4).map((s, i) => (
          <Reveal key={s.n} delay={0.08 * i}>
            <div className="relative h-full border-l border-[#A3962A]/30 pl-6" data-testid={`how-step-${s.n}`}>
              <span className="font-heading text-4xl font-extrabold gold-strong">{s.n}</span>
              <h3 className="mt-4 font-heading text-lg font-bold text-[#1f361d]">{s.title}</h3>
              <p className="mt-2 text-sm text-[#1f361d]/60">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.25} className="mt-14">
        <Link to="/how-it-works" data-testid="how-it-works-more" className="btn-outline-dark">See How It Works</Link>
      </Reveal>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="bg-[#1f361d] py-28 md:py-36" data-testid="trust-section">
    <div className="mx-auto max-w-7xl px-6">
      <Chapter n="09" label="Trust & Responsible Gaming" />
      <div className="mt-8 grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div>
          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Play With <span className="text-[#D4C942]">Confidence</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-base text-white/70">
              NextZGames is built around secure systems, clear rules and responsible play. Gaming should stay entertainment — set limits, take breaks, and never chase losses.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-8">
            <Link to="/responsible-gaming" data-testid="trust-responsible-gaming-link" className="btn-outline">Responsible Gaming</Link>
          </Reveal>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {TRUST_ITEMS.map((t, i) => {
            const Icon = TRUST_ICONS[t.icon];
            return (
              <Reveal key={t.title} delay={0.07 * i}>
                <div className="card-green h-full p-7" data-testid={`trust-card-${i}`}>
                  <Icon size={20} className="text-[#D4C942]" />
                  <h3 className="mt-4 font-heading text-base font-bold text-white">{t.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{t.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

const FaqSection = () => (
  <section className="section-light py-28 md:py-36" data-testid="faq-section">
    <div className="mx-auto max-w-4xl px-6">
      <Chapter n="10" label="FAQ" tone="light" />
      <Reveal delay={0.1}>
        <h2 className="mt-8 font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1f361d]">
          Common <span className="gold-strong">Questions</span>
        </h2>
      </Reveal>
      <Reveal delay={0.2} className="mt-10">
        <Accordion type="single" collapsible className="w-full">
          {FAQ_GROUPS[0].items.slice(0, 5).map((f, i) => (
            <AccordionItem key={f.q} value={`home-faq-${i}`} className="border-[#284525]/15">
              <AccordionTrigger data-testid={`home-faq-q-${i}`} className="text-left font-heading text-base font-bold text-[#1f361d] hover:text-[#A3962A] hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#1f361d]/65">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
      <Reveal delay={0.3} className="mt-10">
        <Link to="/faq" data-testid="faq-view-all" className="btn-outline-dark">View All FAQs</Link>
      </Reveal>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="relative overflow-hidden bg-[#284525] py-32 md:py-44" data-testid="final-cta">
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full glow-gold" />
    <span aria-hidden className="txt-outline-gold pointer-events-none absolute -top-6 right-0 select-none font-heading text-[18vw] font-extrabold leading-none opacity-30">
      PLAY
    </span>
    <div className="relative mx-auto max-w-4xl px-6 text-center">
      <Reveal>
        <span className="font-heading text-xs font-bold tracking-[0.35em] text-[#D4C942]">11 — DOWNLOAD</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-8 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
          Your Next Move<br />Starts <span className="text-[#D4C942]">Here.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mx-auto mt-6 max-w-xl text-base md:text-lg text-white/70">
          Download NextZGames and discover Poker and Predictions in one mobile experience.
        </p>
      </Reveal>
      <Reveal delay={0.3} className="mt-10">
        <DownloadButton testid="final-download-btn" source="final_cta" className="!px-10 !py-5 !text-sm" />
      </Reveal>
    </div>
  </section>
);

export default function Home() {
  usePageMeta("NextZGames — Poker. Predictions. Your Next Move.", "Experience Poker and Predictions through the NextZGames app — built for players who want more from every game.");
  return (
    <>
      <Hero />
      <Ticker />
      <BrandStatement />
      <PokerSection />
      <PredictionsSection />
      <WhySection />
      <AppShowcase />
      <PromotionsSection />
      <HowItWorksSection />
      <TrustSection />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
