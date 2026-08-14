import { Cpu, Gamepad2, PenTool, HeartHandshake } from "lucide-react";
import { Chapter, Reveal, DownloadButton, PageHero } from "../components/bits";
import { usePageMeta } from "../lib/meta";

const PILLARS = [
  { icon: Cpu, title: "Technology", desc: "A modern mobile platform built for speed and reliability." },
  { icon: Gamepad2, title: "Gaming", desc: "Poker and Predictions crafted around real player behaviour." },
  { icon: PenTool, title: "Design", desc: "Clean, premium interfaces that stay out of the way of the game." },
  { icon: HeartHandshake, title: "Player Experience", desc: "Support, security and responsible play at the core." },
];

export default function About() {
  usePageMeta("About Us — NextZGames", "NextZGames is a digital gaming brand built for the next generation of players.");
  return (
    <>
      <PageHero
        chapter="NZ"
        label="About Us"
        title={<>Built for the <span className="text-[#D4C942]">Next Generation</span> of Players</>}
        sub="NextZGames is a digital gaming brand focused on creating engaging Poker and Predictions experiences through a modern mobile platform."
      />
      <section className="bg-[#1f361d] py-24 md:py-32" data-testid="about-pillars">
        <div className="mx-auto max-w-7xl px-6">
          <Chapter n="01" label="What We Combine" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={0.08 * i}>
                <div className="card-green h-full p-8" data-testid={`about-pillar-${i}`}>
                  <p.icon size={22} className="text-[#D4C942]" />
                  <h3 className="mt-5 font-heading text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#284525] py-24 md:py-32" data-testid="about-vision">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <Reveal>
            <div className="card-green h-full border-l-4 !border-l-[#D4C942] p-10" data-testid="about-vision-card">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4C942]">Vision</span>
              <p className="mt-4 font-heading text-2xl font-bold leading-snug text-white">
                To build a trusted and exciting destination for modern players.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="card-green h-full border-l-4 !border-l-[#D4C942] p-10" data-testid="about-mission-card">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4C942]">Mission</span>
              <p className="mt-4 font-heading text-2xl font-bold leading-snug text-white">
                To create engaging, accessible and responsible digital gaming experiences through technology.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="mt-16 text-center">
          <DownloadButton testid="about-download-btn" source="about" />
        </Reveal>
      </section>
    </>
  );
}
