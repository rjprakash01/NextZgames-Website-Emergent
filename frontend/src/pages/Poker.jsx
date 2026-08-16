import { Chapter, Reveal, PageHero } from "../components/bits";
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
        sub="A professional real-money poker experience featuring NL Hold’em, PLO4, PLO5, PLO6, Double Board and Bomb Pots, alongside Cash Games and Tournaments — built for smooth gameplay, secure transactions, and players who take their game seriously."
      />

      <section className="section-light py-8 md:py-12" data-testid="poker-lobby-section">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 lg:grid-cols-2">
          <Reveal className="relative order-2 mx-auto lg:order-1">
            <img src="/poker-tables.jpg" alt="NextZGames Poker lobby — cash game tables" loading="lazy" className="relative w-[240px] md:w-[280px] rounded-[1.8rem] border border-[#122A0E]/15 shadow-[0_30px_60px_rgba(24,43,23,0.25)]" />
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
                <div className="h-full rounded-2xl bg-white p-5" data-testid={`poker-page-feature-${i}`}>
                  <h3 className="font-heading text-base font-bold text-black">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-black/70">{f.desc}</p>
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
                Every hand is a new opportunity to read the table, trust your strategy, and make the right move. Play with confidence, manage your stack, and make every decision count.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="relative mx-auto">
            <PhoneMockup image="/poker-decision.jpg" alt="NextZGames Poker table — every decision matters" className="relative w-[220px]" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
