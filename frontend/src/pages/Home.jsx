import { useRef } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users, Smartphone, Layers, Compass, ShieldCheck, Headphones,
  Lock, Database, CreditCard, Scale, Gift, Zap, ArrowRight, ArrowUpRight,
} from "lucide-react";
import { Chapter, Reveal, DownloadButton } from "../components/bits";
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
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 110]);

  return (
    <section ref={ref} data-testid="hero-section" className="relative overflow-hidden bg-[#1B3A17]">
      <div className="relative mx-auto grid max-w-6xl gap-8 px-6 pb-8 pt-20 md:pt-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <h1 className="mt-5 font-heading font-extrabold tracking-tight leading-[1.02] text-[clamp(2.4rem,5.8vw,4.3rem)]">
            <MaskedLine delay={0.25} className="text-gold-gradient">Your Next Move.</MaskedLine>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-4 max-w-md text-sm md:text-base text-white/70"
          >
            Experience Poker and Predictions through the NextZGames app — one home for players who read the game before they play it.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <DownloadButton testid="hero-download-btn" source="hero" />
            <Link to="/poker" data-testid="hero-explore-poker-btn" onClick={() => track("cta_click", { source: "hero_poker" })} className="btn-outline">
              Explore Poker
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-4 text-[10px] uppercase tracking-[0.25em] text-white/40"
          >
            Android & iOS — Launching Soon
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto"
        >
          <motion.div style={{ y: phoneY }}>
            <img
              src="/creative-poker.jpg"
              alt="NextZGames Poker app — cash games and tournaments"
              data-testid="hero-phone"
              className="w-[260px] md:w-[320px] rounded-[2rem] border border-white/15 shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-x-0 -bottom-6 mx-auto h-7 w-3/4 rounded-full bg-black/50 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

const Ticker = () => (
  <div className="bg-[#1B3A17] border-y border-[#EFE35F]/20 py-3" data-testid="ticker">
    <Marquee speed={40} gradient={false} pauseOnHover>
      {["Fair Play", "Instant Withdrawals", "RNG Certified", "Secure Transactions", "Data Privacy", "Account Protection"].map((t) => (
        <span key={t} className="mx-7 flex items-center gap-7 font-heading text-base md:text-lg font-extrabold tracking-[0.08em] text-[#EFE35F]">
          {t}
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#EFE35F]" />
        </span>
      ))}
    </Marquee>
  </div>
);

const BrandStatement = () => (
  <section className="section-light py-8 md:py-12" data-testid="brand-statement">
    <div className="mx-auto max-w-5xl px-6">
      <Chapter label="The Brand" tone="light" />
      <Reveal delay={0.1}>
        <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1B3A17]">
          Built for the <span className="gold-strong">Next Move.</span>
        </h2>
      </Reveal>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="gold-line mt-5 w-44 origin-left"
      />
      <Reveal delay={0.25}>
        <p className="mt-5 max-w-2xl text-sm md:text-base text-[#1B3A17]/70">
          NextZGames brings Poker and Predictions together in one crafted mobile experience. Poker rewards patience; predictions reward instinct — we built a home for both, fast to learn and deep enough to master.
        </p>
      </Reveal>
    </div>
  </section>
);

const PokerSection = () => (
  <section className="relative overflow-hidden bg-[#1B3A17] py-8 md:py-12" data-testid="poker-section">
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <Chapter label="Poker" />
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Experience Poker<br />Like Never Before
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 max-w-md text-sm md:text-base text-white/70">
              Cash games, tournaments and classic formats at every stake — every hand plays fast, fair and beautifully on your phone. This is poker built for the mobile generation.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-5 flex flex-wrap gap-3">
            <Link to="/poker" data-testid="poker-section-explore-btn" onClick={() => track("cta_click", { source: "home_poker" })} className="btn-outline">Explore Poker</Link>
            <DownloadButton testid="poker-section-download-btn" source="home_poker" />
          </Reveal>
        </div>
        <Reveal delay={0.15} className="relative mx-auto">
          <img src="/creative-poker.jpg" alt="NextZGames Poker lobby — cash games and tournaments" loading="lazy" className="relative w-[240px] md:w-[280px] rounded-[1.8rem] border border-white/15 rotate-2 shadow-[0_30px_60px_rgba(0,0,0,0.45)]" />
        </Reveal>
      </div>
      <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        {POKER_FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={0.07 * i}>
            <div className="border-t-2 border-[#EFE35F]/60 pt-4" data-testid={`poker-feature-${i}`}>
              <h3 className="font-heading text-base font-bold text-white">{f.title}</h3>
              <p className="mt-1.5 text-sm text-white/60">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.15} className="mt-7 text-center">
        <p className="font-heading text-lg md:text-xl font-bold text-white">Ready for the table?</p>
        <div className="mt-4">
          <DownloadButton testid="poker-ready-download-btn" source="poker_ready" label="Download the NextZGames App" />
        </div>
      </Reveal>
    </div>
  </section>
);

const PredictionsSection = () => (
  <section className="section-light relative overflow-hidden py-8 md:py-12" data-testid="predictions-section">
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <Reveal delay={0.15} className="relative order-2 mx-auto lg:order-1">
          <img src="/creative-predictions.jpg" alt="NextZGames Predictions — live events and wins" loading="lazy" className="relative w-[240px] md:w-[280px] rounded-[1.8rem] border border-[#1B3A17]/15 -rotate-2 shadow-[0_30px_60px_rgba(24,43,23,0.25)]" />
        </Reveal>
        <div className="order-1 lg:order-2">
          <Chapter label="Predictions" tone="light" />
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1B3A17]">
              Predict the Outcome.<br /><span className="gold-strong">Own the Moment.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 max-w-md text-sm md:text-base text-[#1B3A17]/70">
              You already watch the game — now read it. Back your instincts on live events across cricket, football and more, and turn every match into a moment that matters.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-5 flex flex-wrap gap-3">
            <Link to="/predictions" data-testid="predictions-section-explore-btn" onClick={() => track("cta_click", { source: "home_predictions" })} className="btn-outline-dark">Explore Predictions</Link>
            <DownloadButton testid="predictions-section-download-btn" source="home_predictions" />
          </Reveal>
        </div>
      </div>
      <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        {PREDICTION_STEPS.map((s, i) => (
          <Reveal key={s.n} delay={0.07 * i}>
            <div className="border-t-2 border-[#1B3A17]/30 pt-4" data-testid={`prediction-step-${s.n}`}>
              <h3 className="font-heading text-base font-bold text-[#1B3A17]"><span className="gold-strong">{s.n}.</span> {s.title}</h3>
              <p className="mt-1.5 text-sm text-[#1B3A17]/60">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const WhySection = () => (
  <section className="bg-[#1B3A17] py-8 md:py-12" data-testid="why-section">
    <div className="mx-auto max-w-6xl px-6">
      <Chapter label="Why NextZGames" />
      <Reveal delay={0.1}>
        <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
          Why <span className="text-gold-gradient">NextZGames?</span>
        </h2>
      </Reveal>
      <div className="mt-7 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_CARDS.map((c, i) => {
          const Icon = WHY_ICONS[c.icon];
          return (
            <Reveal key={c.title} delay={0.05 * i}>
              <div className="flex gap-4" data-testid={`why-card-${i}`}>
                <span className="icon-chip shrink-0"><Icon size={19} /></span>
                <div>
                  <h3 className="font-heading text-base font-bold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{c.desc}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

const AppShowcase = () => {
  const creatives = [
    { img: "/creative-poker.jpg", label: "Poker — Cash Games & Tournaments", testid: "showcase-creative-poker" },
    { img: "/creative-predictions.jpg", label: "Predictions — Live Events & Wins", testid: "showcase-creative-predictions" },
  ];
  return (
    <section className="section-light relative overflow-hidden py-8 md:py-12" data-testid="app-showcase">
      <div className="relative mx-auto max-w-6xl px-6">
        <Chapter label="The App Experience" tone="light" />
        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <Reveal delay={0.1}>
            <h2 className="max-w-xl font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1B3A17]">
              Everything. Right in <span className="gold-strong">Your Hands.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm text-[#1B3A17]/70">
              One App. Multiple Experiences. Discover Poker and Predictions from one simple mobile experience.
            </p>
          </Reveal>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 max-w-3xl">
          {creatives.map(({ img, label, testid }, i) => (
            <Reveal key={label} delay={0.08 * i}>
              <div className="group overflow-hidden rounded-3xl border border-[#1B3A17]/10 bg-white shadow-[0_20px_50px_rgba(24,43,23,0.12)]">
                <img
                  src={img}
                  alt={label}
                  loading="lazy"
                  data-testid={testid}
                  className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-3 text-center text-[10px] uppercase tracking-[0.25em] text-[#1B3A17]/45">{label}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-6">
          <DownloadButton testid="showcase-download-btn" source="app_showcase" />
        </Reveal>
      </div>
    </section>
  );
};

const PromotionsSection = () => (
  <section className="bg-[#1B3A17] py-8 md:py-12" data-testid="promotions-section">
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <Chapter label="Promotions" />
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              More Reasons <span className="text-gold-gradient">to Play</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <Link to="/promotions" data-testid="promotions-view-all" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#EFE35F]">
            View all promotions
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {PROMOTIONS.map((p, i) => {
          const Icon = PROMO_ICONS[p.icon];
          return (
            <Reveal key={p.slug} delay={0.07 * i}>
              <div className="card-green group relative h-full overflow-hidden p-5" data-testid={`promo-card-${p.slug}`}>
                <span className="icon-chip"><Icon size={19} /></span>
                <h3 className="mt-3 font-heading text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-1.5 text-sm text-white/60">{p.desc}</p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-[#EFE35F]/80">{p.validity}</p>
                <Link
                  to="/promotions"
                  data-testid={`promo-view-${p.slug}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-[#EFE35F]"
                >
                  View Promotion <ArrowUpRight size={15} />
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>
      <Reveal delay={0.2}>
        <p className="mt-5 text-xs text-white/40">Sample promotions shown for preview. Final offers, eligibility and terms will be published before launch.</p>
      </Reveal>
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section className="section-light py-8 md:py-12" data-testid="how-it-works-section">
    <div className="mx-auto max-w-6xl px-6">
      <Chapter label="Getting Started" tone="light" />
      <Reveal delay={0.1}>
        <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1B3A17]">
          Getting Started <span className="gold-strong">Is Simple</span>
        </h2>
      </Reveal>
      <div className="mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        {HOW_IT_WORKS_STEPS.slice(0, 4).map((s, i) => (
          <Reveal key={s.n} delay={0.07 * i}>
            <div className="border-t-2 border-[#1B3A17]/30 pt-4" data-testid={`how-step-${s.n}`}>
              <h3 className="font-heading text-base font-bold text-[#1B3A17]"><span className="gold-strong">{s.n}.</span> {s.title}</h3>
              <p className="mt-1.5 text-sm text-[#1B3A17]/60">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.25} className="mt-6">
        <Link to="/how-it-works" data-testid="how-it-works-more" className="btn-outline-dark">See How It Works</Link>
      </Reveal>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="bg-[#1B3A17] py-8 md:py-12" data-testid="trust-section">
    <div className="mx-auto max-w-6xl px-6">
      <Chapter label="Trust & Responsible Gaming" />
      <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div>
          <Reveal delay={0.1}>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Play With <span className="text-gold-gradient">Confidence</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-sm md:text-base text-white/70">
              Real-money gaming demands real trust. NextZGames is built on verified accounts, encrypted transactions and clear rules — and on the belief that gaming should stay entertainment. Set limits, take breaks, and never chase losses.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-5">
            <Link to="/responsible-gaming" data-testid="trust-responsible-gaming-link" className="btn-outline">Responsible Gaming</Link>
          </Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {TRUST_ITEMS.map((t, i) => {
            const Icon = TRUST_ICONS[t.icon];
            return (
              <Reveal key={t.title} delay={0.06 * i}>
                <div className="card-green h-full p-5" data-testid={`trust-card-${i}`}>
                  <span className="icon-chip !h-10 !w-10"><Icon size={17} /></span>
                  <h3 className="mt-3 font-heading text-base font-bold text-white">{t.title}</h3>
                  <p className="mt-1.5 text-sm text-white/60">{t.desc}</p>
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
  <section className="section-light py-8 md:py-12" data-testid="faq-section">
    <div className="mx-auto max-w-3xl px-6">
      <Chapter label="FAQ" tone="light" />
      <Reveal delay={0.1}>
        <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1B3A17]">
          Common <span className="gold-strong">Questions</span>
        </h2>
      </Reveal>
      <Reveal delay={0.2} className="mt-6">
        <Accordion type="single" collapsible className="w-full">
          {FAQ_GROUPS[0].items.slice(0, 5).map((f, i) => (
            <AccordionItem key={f.q} value={`home-faq-${i}`} className="border-[#1B3A17]/15">
              <AccordionTrigger data-testid={`home-faq-q-${i}`} className="text-left font-heading text-sm md:text-base font-bold text-[#1B3A17] hover:text-[#1B3A17]/70 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#1B3A17]/65">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
      <Reveal delay={0.3} className="mt-6">
        <Link to="/faq" data-testid="faq-view-all" className="btn-outline-dark">View All FAQs</Link>
      </Reveal>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="relative overflow-hidden bg-[#1B3A17] py-10 md:py-14" data-testid="final-cta">
    <div className="relative mx-auto max-w-3xl px-6 text-center">
      <Reveal delay={0.1}>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          Your Next Move<br />Starts <span className="text-gold-gradient">Here.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mx-auto mt-3 max-w-md text-sm md:text-base text-white/70">
          Download NextZGames and discover Poker and Predictions in one mobile experience.
        </p>
      </Reveal>
      <Reveal delay={0.3} className="mt-6">
        <DownloadButton testid="final-download-btn" source="final_cta" className="!px-9 !py-4 !text-sm" />
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
