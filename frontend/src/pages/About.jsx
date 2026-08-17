import { Chapter, Reveal, PageHero } from "../components/bits";
import { usePageMeta } from "../lib/meta";

export default function About() {
  usePageMeta("About Us — NextZGames", "NextZGames is a digital gaming brand built for the next generation of players.");
  return (
    <>
      <PageHero
        chapter="NZ"
        label="About Us"
        title={<>Built for the <span className="text-gold-gradient">Next Generation</span> of Players</>}
        sub="We are a team of gamers, engineers and designers building a real-money gaming experience that is fast, fair and genuinely enjoyable."
      />
      <section className="section-light py-8 md:py-12" data-testid="about-pillars">
        <div className="mx-auto max-w-3xl px-6">
          <Chapter label="Who We Are" tone="light" />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-sm md:text-base leading-relaxed text-[#122A0E]/75">
              <p>NextZGames is a technology-driven real-money gaming platform built to deliver secure, transparent, and reliable experiences across Poker and Predictions. We combine modern technology, real-money gaming expertise, and a player-first approach to create a platform designed around what matters most — security, fair play, transparency, and trust.</p>
              <p>Our focus goes beyond providing games. We build the technology and infrastructure that power a dependable real-money gaming experience, with strong emphasis on secure account management, protected player data, secure transactions, reliable withdrawals, and seamless gameplay. Every part of the platform is designed to provide players with a clear and consistent experience, from accessing games to managing their funds.</p>
              <p>Security is at the core of NextZGames. We take the protection of player information and financial transactions seriously and continuously work to strengthen the systems and processes that safeguard them. At the same time, we believe transparency is essential to building long-term trust. Players should have clear information, straightforward processes, and an experience where they know what to expect.</p>
              <p>Fair play is equally important to us. We are committed to creating a gaming environment built around fairness, integrity, and responsible participation. Our technology and platform processes are designed to support a reliable gaming experience while giving players confidence in the platform they choose to play on.</p>
              <p>From NL Hold’em, PLO4, PLO5, PLO6, Double Board and Bomb Pots to a growing range of prediction experiences, NextZGames brings technology and real-money gaming together on one platform. We continuously improve our products, infrastructure, security, and player support to meet the evolving expectations of modern players.</p>
              <p>Our vision is simple: to build a real-money gaming platform that players can use with confidence — where technology delivers performance, security protects what matters, transparency builds trust, and fair play remains at the centre of the experience.</p>
              <p className="font-heading text-lg font-bold text-[#122A0E]">Secure. Transparent. Fair. Built on Trust.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
