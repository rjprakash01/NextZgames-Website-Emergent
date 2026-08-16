import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
  ShieldCheck, Headphones,
  Users, Database, CreditCard, Scale, Gift, Zap, ArrowRight, ArrowUpRight,
} from "lucide-react";
import { Chapter, Reveal, DownloadButton } from "../components/bits";
import {
  POKER_FEATURES, PREDICTION_STEPS, WHY_CARDS,
  PROMOTIONS, FAQ_GROUPS,
} from "../data/content";
import { track } from "../lib/track";
import { usePageMeta } from "../lib/meta";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "../components/ui/accordion";

const WHY_ICONS = { scale: Scale, database: Database, card: CreditCard, zap: Zap, shield: ShieldCheck, headphones: Headphones };
const PROMO_ICONS = { gift: Gift, users: Users, zap: Zap };
const CHIP_COLORS = ["#EFE35F", "#FF7A59", "#5EC8F2", "#9B7FE0", "#4ADE80", "#F2C94C"];
const STEP_COLORS = ["#8C7A0F", "#0E7C6B", "#D65A3A", "#6A4FA3"];
const HOME_STEPS = [
  { n: 1, title: "Download", desc: "Get the official NextZGames app — fast and free." },
  { n: 2, title: "Register", desc: "Create your account in just a few simple steps." },
  { n: 3, title: "Explore", desc: "Discover poker and live prediction events." },
  { n: 4, title: "Play", desc: "Choose your game, make your move, and play your way." },
];


const Hero = () => (
  <section data-testid="hero-section" className="relative overflow-hidden bg-[#0B1D08] pt-[72px]">
    <picture>
      <source media="(min-width: 768px)" srcSet="/hero-desktop.jpg" />
      <img
        src="/hero-mobile.jpg"
        alt="The Thrill of Poker & Predictions — NextZGames app with poker tables, tournaments and game modes"
        data-testid="hero-image"
        className="block h-auto w-full md:h-[78vh] md:object-cover md:object-top"
      />
    </picture>
  </section>
);

const Ticker = () => (
  <div className="bg-[#EFE35F] py-1.5" data-testid="ticker">
    <Marquee speed={40} gradient={false} pauseOnHover>
      {["Fair Play", "Instant Withdrawals", "RNG Certified", "Secure Transactions", "Data Privacy", "Account Protection"].map((t) => (
        <span key={t} className="mx-7 flex items-center gap-7 font-heading text-sm md:text-base font-extrabold tracking-[0.08em] text-[#122A0E]">
          {t}
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#122A0E]" />
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
        <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#122A0E]">
          Built for the <span className="acc-coral">Next Move.</span>
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
        <div className="mt-5 max-w-2xl space-y-3 text-sm md:text-base text-[#122A0E]/70">
          <p>NextZGames is a technology-driven real-money gaming platform built for Poker and Predictions. We combine gaming expertise, technology, and player-focused design to deliver a secure, reliable, and seamless real-money gaming experience.</p>
          <p>From intuitive gameplay and secure account management to protected data, secure transactions, fast withdrawals, and reliable support, every part of our platform is designed with trust and performance in mind.</p>
          <p>Our focus is simple: build better gaming technology, deliver great player experiences, and create a platform players can trust.</p>
          <p className="font-semibold text-[#122A0E]">Technology Driven. Gaming Focused. Built on Trust.</p>
        </div>
      </Reveal>
    </div>
  </section>
);

const PokerSection = () => (
  <section className="relative overflow-hidden bg-[#163311] py-8 md:py-12" data-testid="poker-section">
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <Chapter label="Poker" />
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Experience Poker<br />Like Never Before
            </h2>
          </Reveal>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="gold-line mt-4 w-44 origin-left"
          />
          <Reveal delay={0.2}>
            <p className="mt-3 max-w-md text-sm md:text-base text-white/70">
              Cash games, tournaments and classic formats at every stake — every hand plays fast, fair and beautifully on your phone. This is poker built for the mobile generation.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-5 flex flex-wrap gap-3">
            <Link to="/poker" data-testid="poker-section-explore-btn" onClick={() => track("cta_click", { source: "home_poker" })} className="inline-flex items-center gap-2 rounded-full bg-[#D4C942] px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#e2d84f]">Explore Poker</Link>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="relative mx-auto">
          <img src="/creative-poker.jpg" alt="NextZGames Poker lobby — cash games and tournaments" loading="lazy" className="relative w-[240px] md:w-[280px] rounded-[1.8rem] border border-white/15 rotate-2 shadow-[0_30px_60px_rgba(0,0,0,0.45)]" />
        </Reveal>
      </div>
      <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        {POKER_FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={0.07 * i}>
            <div className="border-t-2 pt-4" style={{ borderColor: CHIP_COLORS[i % CHIP_COLORS.length] }} data-testid={`poker-feature-${i}`}>
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
          <img src="/creative-predictions.jpg" alt="NextZGames Predictions — live events and wins" loading="lazy" className="relative w-[240px] md:w-[280px] rounded-[1.8rem] border border-[#122A0E]/15 -rotate-2 shadow-[0_30px_60px_rgba(24,43,23,0.25)]" />
        </Reveal>
        <div className="order-1 lg:order-2">
          <Chapter label="Predictions" tone="light" />
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#122A0E]">
              Predict the Outcome.<br /><span className="acc-teal">Own the Moment.</span>
            </h2>
          </Reveal>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="gold-line mt-4 w-44 origin-left"
          />
          <Reveal delay={0.2}>
            <p className="mt-3 max-w-md text-sm md:text-base text-[#122A0E]/70">
              You already watch the game — now read it. Back your instincts on live events across cricket, football and more, and turn every match into a moment that matters.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-5 flex flex-wrap gap-3">
            <Link to="/predictions" data-testid="predictions-section-explore-btn" onClick={() => track("cta_click", { source: "home_predictions" })} className="inline-flex items-center gap-2 rounded-full bg-[#D4C942] px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#e2d84f]">Explore Predictions</Link>
          </Reveal>
        </div>
      </div>
      <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        {PREDICTION_STEPS.map((s, i) => (
          <Reveal key={s.n} delay={0.07 * i}>
            <div className="border-t-2 pt-4" style={{ borderColor: STEP_COLORS[i % STEP_COLORS.length] }} data-testid={`prediction-step-${s.n}`}>
              <h3 className="font-heading text-base font-bold text-[#122A0E]">
                <span style={{ color: STEP_COLORS[i % STEP_COLORS.length] }}>{s.n}.</span> {s.title}
              </h3>
              <p className="mt-1.5 text-sm text-[#122A0E]/60">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const WhySection = () => (
  <section className="bg-[#122A0E] py-8 md:py-12" data-testid="why-section">
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
                <span className="icon-chip shrink-0" style={{ background: CHIP_COLORS[i % CHIP_COLORS.length], color: "#122A0E" }}><Icon size={19} /></span>
                <div>
                  <h3 className="font-heading text-base font-bold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-white/65">{c.desc}</p>
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
            <h2 className="max-w-xl font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#122A0E]">
              Everything. Right in <span className="acc-violet">Your Hands.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm text-[#122A0E]/70">
              One App. Multiple Experiences. Discover Poker and Predictions from one simple mobile experience.
            </p>
          </Reveal>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 max-w-3xl">
          {creatives.map(({ img, label, testid }, i) => (
            <Reveal key={label} delay={0.08 * i}>
              <div className="group overflow-hidden rounded-3xl border bg-white shadow-[0_20px_50px_rgba(24,43,23,0.12)]" style={{ borderColor: ["#6A4FA3", "#0E7C6B"][i % 2] }}>
                <img
                  src={img}
                  alt={label}
                  loading="lazy"
                  data-testid={testid}
                  className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-3 text-center text-[10px] uppercase tracking-[0.25em] text-[#122A0E]/45">{label}</p>
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
  <section className="bg-[#0E230B] py-8 md:py-12" data-testid="promotions-section">
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
              <div className="card-light group relative h-full overflow-hidden p-5" data-testid={`promo-card-${p.slug}`}>
                <span className="icon-chip" style={{ background: CHIP_COLORS[i % CHIP_COLORS.length], color: "#122A0E" }}><Icon size={19} /></span>
                <h3 className="mt-3 font-heading text-lg font-bold text-[#122A0E]">{p.title}</h3>
                <p className="mt-1.5 text-sm text-[#122A0E]/60">{p.desc}</p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-[#8C7A0F]">{p.validity}</p>
                <Link
                  to="/promotions"
                  data-testid={`promo-view-${p.slug}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#122A0E] transition-colors duration-300 group-hover:text-[#6A4FA3]"
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
        <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#122A0E]">
          Getting Started <span className="acc-coral">Is Simple</span>
        </h2>
      </Reveal>
      <div className="mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        {HOME_STEPS.map((s, i) => (
          <Reveal key={s.n} delay={0.07 * i}>
            <div className="border-t-2 pt-4" style={{ borderColor: STEP_COLORS[i % STEP_COLORS.length] }} data-testid={`how-step-${s.n}`}>
              <h3 className="font-heading text-base font-bold text-[#122A0E]">
                <span style={{ color: STEP_COLORS[i % STEP_COLORS.length] }}>{s.n}.</span> {s.title}
              </h3>
              <p className="mt-1.5 text-sm text-[#122A0E]/60">{s.desc}</p>
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


const FaqSection = () => (
  <section className="bg-[#122A0E] py-8 md:py-12" data-testid="faq-section">
    <div className="mx-auto max-w-3xl px-6">
      <Chapter label="FAQ" />
      <Reveal delay={0.1}>
        <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Common <span className="text-gold-gradient">Questions</span>
        </h2>
      </Reveal>
      <Reveal delay={0.2} className="mt-6">
        <Accordion type="single" collapsible className="w-full">
          {FAQ_GROUPS[0].items.slice(0, 5).map((f, i) => (
            <AccordionItem key={f.q} value={`home-faq-${i}`} className="border-white/15">
              <AccordionTrigger data-testid={`home-faq-q-${i}`} className="text-left font-heading text-sm md:text-base font-bold text-white hover:text-[#EFE35F] hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-white/65">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
      <Reveal delay={0.3} className="mt-6">
        <Link to="/faq" data-testid="faq-view-all" className="btn-outline">View All FAQs</Link>
      </Reveal>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="section-light relative overflow-hidden py-10 md:py-14" data-testid="final-cta">
    <div className="relative mx-auto max-w-3xl px-6 text-center">
      <Reveal delay={0.1}>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl lg:whitespace-nowrap font-extrabold tracking-tight text-[#122A0E]">
          Your Next Move<br className="lg:hidden" /> Starts <span className="acc-coral">Here.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mx-auto mt-3 max-w-md lg:max-w-none text-sm md:text-base text-[#122A0E]/70">
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
      <FaqSection />
      <FinalCTA />
    </>
  );
}
