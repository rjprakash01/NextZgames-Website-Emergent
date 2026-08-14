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
        title={<>Built for the <span className="text-gold-gradient">Next Generation</span> of Players</>}
        sub="NextZGames is a digital gaming brand focused on creating engaging Poker and Predictions experiences through a modern mobile platform."
      />
      <section className="section-light py-8 md:py-12" data-testid="about-pillars">
        <div className="mx-auto max-w-6xl px-6">
          <Chapter n="01" label="What We Combine" tone="light" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={0.06 * i}>
                <div className="card-light h-full p-5" data-testid={`about-pillar-${i}`}>
                  <span className="icon-chip"><p.icon size={18} /></span>
                  <h3 className="mt-4 font-heading text-base font-bold text-[#1f361d]">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-[#1f361d]/60">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#284525] py-8 md:py-12" data-testid="about-vision">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2">
          <Reveal>
            <div className="card-green h-full border-l-4 !border-l-[#E8DC6A] p-8" data-testid="about-vision-card">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E8DC6A]">Vision</span>
              <p className="mt-3 font-heading text-xl font-bold leading-snug text-white">
                To build a trusted and exciting destination for modern players.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="card-green h-full border-l-4 !border-l-[#E8DC6A] p-8" data-testid="about-mission-card">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E8DC6A]">Mission</span>
              <p className="mt-3 font-heading text-xl font-bold leading-snug text-white">
                To create engaging, accessible and responsible digital gaming experiences through technology.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="mt-6 text-center">
          <DownloadButton testid="about-download-btn" source="about" />
        </Reveal>
      </section>
    </>
  );
}
