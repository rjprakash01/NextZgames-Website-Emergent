import { Link } from "react-router-dom";
import { Chapter, Reveal, DownloadButton, PageHero } from "../components/bits";
import { PhoneMockup } from "../components/PhoneMockup";
import { POKER_FEATURES } from "../data/content";
import { usePageMeta } from "../lib/meta";

export default function Poker() {
  usePageMeta("Poker — NextZGames", "Experience Poker like never before — a mobile-first Poker experience inside the NextZGames app.");
  return (
    <>
      <PageHero
        chapter="P"
        label="Poker"
        title={<>Experience Poker <span className="text-gold-gradient">Like Never Before</span></>}
        sub="From strategy to every decision at the table, discover a Poker experience designed for the mobile generation."
      >
        <Reveal delay={0.3} className="mt-6 flex flex-wrap gap-3">
          <DownloadButton testid="poker-page-download-btn" source="poker_page" />
          <Link to="/how-it-works" data-testid="poker-page-how-btn" className="btn-outline">How It Works</Link>
        </Reveal>
      </PageHero>

      <section className="section-light py-16 md:py-24" data-testid="poker-lobby-section">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal className="relative order-2 mx-auto lg:order-1">
            <div className="pointer-events-none absolute inset-0 -m-14 rounded-full glow-gold" />
            <PhoneMockup screen="poker" className="relative w-[220px] rotate-2" />
          </Reveal>
          <div className="order-1 lg:order-2">
            <Chapter n="01" label="The Lobby" tone="light" />
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1f361d]">
                Find Your Table <span className="gold-strong">in Seconds</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-md text-sm md:text-base text-[#1f361d]/65">
                Browse available Poker formats, check blinds and open seats, and join the table that fits your game — all from the lobby inside the app.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#1f361d] py-16 md:py-24" data-testid="poker-features-section">
        <div className="mx-auto max-w-6xl px-6">
          <Chapter n="02" label="Features" />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {POKER_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={0.07 * i}>
                <div className="card-green h-full p-6" data-testid={`poker-page-feature-${i}`}>
                  <span className="font-heading text-[11px] font-bold tracking-[0.3em] text-[#D4C942]">0{i + 1}</span>
                  <h3 className="mt-3 font-heading text-base font-bold text-white">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-white/60">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light relative overflow-hidden py-16 md:py-24" data-testid="poker-table-section">
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <Chapter n="03" label="The Table" tone="light" />
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1f361d]">
                Every Decision, <span className="gold-strong">In Your Hands</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-md text-sm md:text-base text-[#1f361d]/65">
                A clean, responsive table interface built for focus — your cards, the pot and your actions always front and centre.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="relative mx-auto">
            <div className="pointer-events-none absolute inset-0 -m-14 rounded-full glow-gold" />
            <PhoneMockup screen="table" className="relative w-[220px] -rotate-2" />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#284525] py-16 text-center" data-testid="poker-cta">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-white">Ready for the table?</h2>
          </Reveal>
          <Reveal delay={0.15} className="mt-6">
            <DownloadButton testid="poker-final-download-btn" source="poker_page_bottom" label="Download the NextZGames App" className="!px-9 !py-4 !text-sm" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
