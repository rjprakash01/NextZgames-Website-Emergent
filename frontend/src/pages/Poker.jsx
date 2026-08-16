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
        sub="Cash games, tournaments and classic formats at every stake — a poker room engineered for the way the mobile generation thinks, reads and plays."
      >
        <Reveal delay={0.3} className="mt-6 flex flex-wrap gap-3">
          <DownloadButton testid="poker-page-download-btn" source="poker_page" />
          <Link to="/how-it-works" data-testid="poker-page-how-btn" className="btn-outline">How It Works</Link>
        </Reveal>
      </PageHero>

      <section className="section-light py-8 md:py-12" data-testid="poker-lobby-section">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 lg:grid-cols-2">
          <Reveal className="relative order-2 mx-auto lg:order-1">
            <img src="/creative-poker.jpg" alt="NextZGames Poker lobby — cash games and tournaments" loading="lazy" className="relative w-[240px] md:w-[280px] rounded-[1.8rem] border border-[#122A0E]/15 rotate-2 shadow-[0_30px_60px_rgba(24,43,23,0.25)]" />
          </Reveal>
          <div className="order-1 lg:order-2">
            <Chapter label="The Lobby" tone="light" />
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-[#122A0E]">
                Find Your Table <span className="gold-strong">in Seconds</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-3 max-w-md text-sm md:text-base text-[#122A0E]/65">
                Browse available Poker formats, check blinds and open seats, and join the table that fits your game — all from the lobby inside the app.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#122A0E] py-8 md:py-12" data-testid="poker-features-section">
        <div className="mx-auto max-w-6xl px-6">
          <Chapter label="Features" />
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {POKER_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={0.07 * i}>
                <div className="card-green h-full p-5" data-testid={`poker-page-feature-${i}`}>
                  <h3 className="font-heading text-base font-bold text-white">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-white/60">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light relative overflow-hidden py-8 md:py-12" data-testid="poker-table-section">
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 lg:grid-cols-2">
          <div>
            <Chapter label="The Table" tone="light" />
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-[#122A0E]">
                Every Decision, <span className="gold-strong">In Your Hands</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-3 max-w-md text-sm md:text-base text-[#122A0E]/65">
                A clean, responsive table interface built for focus — your cards, the pot and your actions always front and centre.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="relative mx-auto">
            <PhoneMockup screen="table" className="relative w-[220px] -rotate-2" />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#122A0E] py-16 text-center" data-testid="poker-cta">
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
