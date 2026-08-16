import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CreditCard, Scale, ArrowRight, ArrowUpRight,
  Lock, Clock, Handshake, Headset, HandCoins,
} from "lucide-react";
import { Chapter, Reveal, DownloadButton } from "../components/bits";
import {
  POKER_FEATURES, PREDICTION_STEPS,
  PROMOTIONS, FAQ_GROUPS,
} from "../data/content";
import { track } from "../lib/track";
import { usePageMeta } from "../lib/meta";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "../components/ui/accordion";

const STEP_COLORS = ["#8C7A0F", "#0E7C6B", "#D65A3A", "#6A4FA3"];
const HOME_STEPS = [
  { n: 1, title: "Download", desc: "Get the official NextZGames app — fast and free." },
  { n: 2, title: "Register", desc: "Create your account in just a few simple steps." },
  { n: 3, title: "Explore", desc: "Discover poker and live prediction events." },
  { n: 4, title: "Play", desc: "Choose your game, make your move, and play your way." },
];


const HERO_SLIDES = [
  { desktop: "/hero-desktop-v2.jpg", mobile: "/hero-mobile.jpg" },
  { desktop: "/hero-desktop2.jpg", mobile: "/hero-mobile2.jpg" },
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % HERO_SLIDES.length), 3000);
    return () => clearInterval(id);
  }, [index]);
  return (
    <div className="relative overflow-hidden" data-testid="hero-carousel">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {HERO_SLIDES.map((s, i) => (
          <div key={i} className="w-full shrink-0">
            <picture>
              <source media="(min-width: 768px)" srcSet={s.desktop} />
              <img
                src={s.mobile}
                alt="The Thrill of Poker & Predictions — NextZGames app"
                data-testid={`hero-slide-${i}`}
                className="block h-auto w-full md:h-[78vh] md:object-cover md:object-top"
              />
            </picture>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show hero slide ${i + 1}`}
            data-testid={`hero-carousel-dot-${i}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-[#D4C942]" : "w-2 bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
};

const Hero = () => (
  <section data-testid="hero-section" className="relative overflow-hidden bg-[#0B1D08] pt-[72px]">
    <HeroCarousel />
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

const POKER_SLIDES = ["/poker-slide-1.jpg", "/poker-slide-2.jpg", "/poker-slide-3.jpg"];

const PokerCarousel = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % POKER_SLIDES.length), 3000);
    return () => clearInterval(id);
  }, [index]);
  return (
    <div className="relative w-[240px] md:w-[280px] overflow-hidden rounded-[1.8rem] border border-white/15 shadow-[0_30px_60px_rgba(0,0,0,0.45)]" data-testid="poker-carousel">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {POKER_SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`NextZGames Poker app screen ${i + 1}`}
            loading="lazy"
            className="w-full shrink-0 object-cover"
            style={{ aspectRatio: "400 / 806" }}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {POKER_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show poker screen ${i + 1}`}
            data-testid={`poker-carousel-dot-${i}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-5 bg-[#D4C942]" : "w-1.5 bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};


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
              From NL Hold’em to PLO4, PLO5 and PLO6, experience a wide range of poker formats including Double Board, Bomb Pots, Cash Games and Tournaments — all designed for players who want more action, more variety, and more ways to play.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-5 flex flex-wrap gap-3">
            <Link to="/poker" data-testid="poker-section-explore-btn" onClick={() => track("cta_click", { source: "home_poker" })} className="inline-flex items-center gap-2 rounded-full bg-[#D4C942] px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#e2d84f]">Explore Poker</Link>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="relative mx-auto">
          <PokerCarousel />
        </Reveal>
      </div>
      <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        {POKER_FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={0.07 * i}>
            <div className="border-t-2 border-[#D4C942] pt-4" data-testid={`poker-feature-${i}`}>
              <h3 className="font-heading text-base font-bold text-white">{f.title}</h3>
              <p className="mt-1.5 text-sm text-white/60">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.15} className="mt-7 text-center">
        <p className="font-heading text-lg md:text-xl font-bold text-white">Ready for the table?</p>
        <div className="mt-4">
          <DownloadButton testid="poker-ready-download-btn" source="poker_ready" label="Download NextZGames App" />
        </div>
      </Reveal>
    </div>
  </section>
);

const PRED_SLIDES = ["/pred-slide-1.jpg", "/pred-slide-2.jpg"];

const PredictionsCarousel = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % PRED_SLIDES.length), 3000);
    return () => clearInterval(id);
  }, [index]);
  return (
    <div className="relative w-[240px] md:w-[280px] overflow-hidden rounded-[1.8rem] border border-[#122A0E]/15 shadow-[0_30px_60px_rgba(24,43,23,0.25)]" data-testid="predictions-carousel">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {PRED_SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`NextZGames Predictions app screen ${i + 1}`}
            loading="lazy"
            className="w-full shrink-0 object-cover object-top"
            style={{ aspectRatio: "400 / 800" }}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {PRED_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show predictions screen ${i + 1}`}
            data-testid={`predictions-carousel-dot-${i}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-5 bg-[#D4C942]" : "w-1.5 bg-[#122A0E]/30"}`}
          />
        ))}
      </div>
    </div>
  );
};


const PredictionsSection = () => (
  <section className="section-light relative overflow-hidden py-8 md:py-12" data-testid="predictions-section">
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <Reveal delay={0.15} className="relative order-2 mx-auto lg:order-1">
          <PredictionsCarousel />
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
            <div className="border-t-2 border-[#D4C942] pt-4" data-testid={`prediction-step-${s.n}`}>
              <h3 className="font-heading text-base font-bold text-[#122A0E]">{s.title}</h3>
              <p className="mt-1.5 text-sm text-[#122A0E]/60">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const WHY_MOBILE = [
  { Icon: Scale, title: "Fair Play, Always", desc: "Transparent gameplay and fair outcomes, because trust comes first." },
  { Icon: Lock, title: "Your Data, Protected", desc: "Strong security measures keep your personal and account information protected." },
  { Icon: CreditCard, title: "Secure Transactions", desc: "Safe, encrypted payments and withdrawals designed to keep your money secure." },
  { Icon: Clock, title: "Fast Withdrawals", desc: "Get access to your winnings with quick and hassle-free withdrawals." },
  { Icon: Handshake, title: "Built on Trust", desc: "A platform designed around transparency, security, and responsible play." },
  { Icon: Headset, title: "24/7 Player Support", desc: "Need help? Our support team is available around the clock, whenever you need us." },
];

const WHY_DESKTOP = [
  { Icon: ShieldCheck, title: "Fair Play, Always", desc: "Transparent gameplay and fair outcomes, because trust comes first." },
  { Icon: Lock, title: "Your Data, Protected", desc: "Strong security measures keep your personal and account information protected." },
  { Icon: CreditCard, title: "Secure Transactions", desc: "Safe, encrypted payments and withdrawals designed to keep your money secure." },
  { Icon: HandCoins, title: "Fast Withdrawals", desc: "Get access to your winnings with quick and hassle-free withdrawals." },
  { Icon: Handshake, title: "Built on Trust", desc: "A platform designed around transparency, security, and responsible play." },
  { Icon: Headset, title: "24/7 Player Support", desc: "Need help? Our support team is available around the clock, whenever you need us." },
];

const WhySection = () => (
  <section className="bg-[#122A0E] py-9 md:py-12" data-testid="why-section">
    {/* MOBILE ONLY — Play with Confidence */}
    <div className="md:hidden px-6" data-testid="why-mobile">
      <h2 className="text-center font-heading text-3xl font-extrabold tracking-tight text-white">
        Play with Confidence
      </h2>
      <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-11">
        {WHY_MOBILE.map(({ Icon, title, desc }, i) => (
          <Reveal key={title} delay={0.05 * i}>
            <div className="flex flex-col items-center text-center" data-testid={`why-mobile-card-${i}`}>
              <Icon size={46} strokeWidth={1.4} className="text-[#EFE35F]" />
              <h3 className="mt-4 font-heading text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>

    {/* DESKTOP ONLY — Why Players Trust NextZGames */}
    <div className="hidden md:block mx-auto max-w-5xl px-6">
      <Reveal delay={0.1}>
        <h2 className="text-center font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
          Why Players Trust <span className="text-gold-gradient">NextZGames</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid grid-cols-3 gap-x-10 gap-y-14">
        {WHY_DESKTOP.map(({ Icon, title, desc }, i) => (
          <Reveal key={title} delay={0.05 * i}>
            <div className="flex flex-col items-center text-center px-2" data-testid={`why-card-${i}`}>
              <Icon size={52} strokeWidth={1.5} className="text-[#EFE35F]" />
              <h3 className="mt-5 font-heading text-xl font-bold text-white">{title}</h3>
              <p className="mt-2.5 max-w-[16rem] text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          </Reveal>
        ))}
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

const PromoDefs = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <linearGradient id="promoGold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#F6E98A" />
        <stop offset="0.5" stopColor="#E7C64B" />
        <stop offset="1" stopColor="#B8901F" />
      </linearGradient>
      <linearGradient id="promoBoxGreen" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#22662a" />
        <stop offset="1" stopColor="#0f3c17" />
      </linearGradient>
    </defs>
  </svg>
);

const WelcomeDecor = () => (
  <div className="pointer-events-none absolute inset-y-0 right-0 w-3/5 overflow-hidden">
    <div className="absolute right-2 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-[#EFE35F]/20 blur-3xl" />
    {/* faint card suits */}
    <span className="absolute right-6 top-4 select-none text-2xl leading-none text-[#EFE35F]/10">&#9824; &#9827;</span>
    <span className="absolute right-16 top-10 select-none text-lg leading-none text-[#EFE35F]/10">&#9829; &#9830;</span>
    {/* gift box + coins */}
    <svg viewBox="0 0 140 120" className="absolute bottom-1 right-3 h-[85%] w-auto drop-shadow-[0_10px_18px_rgba(0,0,0,0.4)]">
      {/* podium */}
      <ellipse cx="70" cy="104" rx="60" ry="10" fill="url(#promoGold)" opacity="0.18" />
      {/* box body */}
      <rect x="42" y="52" width="56" height="46" rx="4" fill="url(#promoBoxGreen)" stroke="url(#promoGold)" strokeWidth="1.2" />
      {/* lid */}
      <rect x="36" y="42" width="68" height="14" rx="4" fill="url(#promoBoxGreen)" stroke="url(#promoGold)" strokeWidth="1.2" />
      {/* vertical ribbon */}
      <rect x="65" y="42" width="10" height="56" fill="url(#promoGold)" />
      {/* horizontal ribbon */}
      <rect x="36" y="46" width="68" height="6" fill="url(#promoGold)" opacity="0.9" />
      {/* bow */}
      <path d="M70 42 C58 24, 38 28, 50 40 C56 45, 66 43, 70 42 Z" fill="url(#promoGold)" />
      <path d="M70 42 C82 24, 102 28, 90 40 C84 45, 74 43, 70 42 Z" fill="url(#promoGold)" />
      <circle cx="70" cy="41" r="4.5" fill="url(#promoGold)" />
      {/* coins */}
      <g transform="translate(104,74)">
        <ellipse cx="0" cy="18" rx="16" ry="6" fill="url(#promoGold)" />
        <ellipse cx="0" cy="14" rx="16" ry="6" fill="#0f3c17" stroke="url(#promoGold)" strokeWidth="1.4" />
        <ellipse cx="0" cy="10" rx="16" ry="6" fill="url(#promoGold)" />
        <ellipse cx="0" cy="6" rx="16" ry="6" fill="#0f3c17" stroke="url(#promoGold)" strokeWidth="1.4" />
        <text x="0" y="9" textAnchor="middle" fontSize="7" fontWeight="700" fill="#EFE35F">NZ</text>
      </g>
    </svg>
  </div>
);

const ReferDecor = () => (
  <div className="pointer-events-none absolute inset-y-0 right-0 w-3/5 overflow-hidden">
    <div className="absolute right-4 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-[#EFE35F]/20 blur-3xl" />
    <svg viewBox="0 0 150 120" className="absolute bottom-1 right-1 h-[92%] w-auto drop-shadow-[0_10px_18px_rgba(0,0,0,0.4)]">
      {/* connecting lines */}
      <g stroke="url(#promoGold)" strokeWidth="1.2" opacity="0.55">
        <line x1="70" y1="60" x2="34" y2="30" />
        <line x1="70" y1="60" x2="112" y2="26" />
        <line x1="70" y1="60" x2="40" y2="96" />
        <line x1="70" y1="60" x2="116" y2="92" />
      </g>
      {/* small nodes with person glyphs */}
      {[[34,30,10],[112,26,10],[40,96,10],[116,92,10]].map(([cx,cy,r],idx)=>(
        <g key={idx}>
          <circle cx={cx} cy={cy} r={r} fill="#0f3c17" stroke="url(#promoGold)" strokeWidth="1.6" />
          <circle cx={cx} cy={cy-2.5} r="2.6" fill="url(#promoGold)" />
          <path d={`M${cx-4.5} ${cy+5.5} a4.5 4.5 0 0 1 9 0 Z`} fill="url(#promoGold)" />
        </g>
      ))}
      {/* central node */}
      <circle cx="70" cy="60" r="18" fill="#0f3c17" stroke="url(#promoGold)" strokeWidth="2.2" />
      <circle cx="70" cy="55" r="5" fill="url(#promoGold)" />
      <path d="M62 70 a8 8 0 0 1 16 0 Z" fill="url(#promoGold)" />
      {/* coins */}
      <g transform="translate(120,78)">
        <ellipse cx="0" cy="14" rx="15" ry="5.5" fill="url(#promoGold)" />
        <ellipse cx="0" cy="10" rx="15" ry="5.5" fill="#0f3c17" stroke="url(#promoGold)" strokeWidth="1.4" />
        <ellipse cx="0" cy="6" rx="15" ry="5.5" fill="url(#promoGold)" />
        <text x="0" y="9" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#EFE35F">NZ</text>
      </g>
    </svg>
  </div>
);

const PROMO_THEMES = {
  "welcome-boost": WelcomeDecor,
  "refer-and-earn": ReferDecor,
};

const PromotionsSection = () => (
  <section className="section-light py-10 md:py-14" data-testid="promotions-section">
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
        <div>
          <Chapter label="Promotions" tone="light" />
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-[#122A0E]">
              More Reasons <span className="acc-coral">to Play</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <Link to="/promotions" data-testid="promotions-view-all" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#6A4FA3]">
            View all promotions
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>

      <PromoDefs />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {PROMOTIONS.map((p, i) => {
          const Decor = PROMO_THEMES[p.slug];
          return (
            <Reveal key={p.slug} delay={0.07 * i}>
              <div
                className="group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-[1.25rem] p-6 shadow-[0_20px_45px_rgba(10,31,8,0.35)]"
                style={{ background: "radial-gradient(120% 130% at 88% 45%, #1c4a1e 0%, #103312 42%, #0a2109 100%)" }}
                data-testid={`promo-card-${p.slug}`}
              >
                <span className="absolute inset-x-0 top-0 z-10 h-1 bg-[#D4C942]" />
                {Decor ? <Decor /> : null}
                {/* mobile-only scrim so text stays clean over artwork */}
                <div className="absolute inset-0 z-[5] bg-[linear-gradient(to_right,#0a2109_0%,#0a2109_58%,rgba(10,33,9,0.55)_78%,transparent_100%)] md:hidden" />
                <div className="relative z-10 flex h-full flex-col">
                  <span className="self-start rounded-full border border-[#D4C942]/40 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#EFE35F]">
                    {p.validity}
                  </span>
                  <h3 className="mt-6 max-w-[62%] font-heading text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-2 max-w-[58%] flex-1 text-sm leading-relaxed text-white/70">{p.desc}</p>
                  <Link
                    to="/promotions"
                    data-testid={`promo-view-${p.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#EFE35F]"
                  >
                    View Promotion
                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-6 text-center text-xs text-[#122A0E]/40 sm:text-left">Sample promotions shown for preview. Final offers, eligibility and terms will be published before launch.</p>
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
      <PromotionsSection />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
