import { Reveal, DownloadButton, PageHero } from "../components/bits";
import { HOW_IT_WORKS_STEPS } from "../data/content";
import { usePageMeta } from "../lib/meta";

export default function HowItWorks() {
  usePageMeta("How It Works — NextZGames", "Getting started is simple: download the app, register, explore Poker or Predictions, and play.");
  return (
    <>
      <PageHero
        chapter="?"
        label="How It Works"
        title={<>Getting Started <span className="text-[#122A0E]">Is Simple</span></>}
        sub="From download to your first game in five simple moves — here is exactly what happens at each step, all inside the NextZGames app."
      />
      <section className="section-light py-8 md:py-12" data-testid="steps-section">
        <div className="mx-auto max-w-3xl px-6">
          <div className="relative space-y-10 before:absolute before:bottom-5 before:left-[23px] before:top-5 before:w-px before:bg-[#E3B84A]/30">
            {HOW_IT_WORKS_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={0.06 * i}>
                <div className="relative flex gap-6 md:gap-8" data-testid={`how-page-step-${s.n}`}>
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#122A0E] bg-[#122A0E] font-heading text-base font-extrabold text-[#E3B84A] shadow-[0_10px_24px_rgba(24,43,23,0.25)]">
                    {s.n}
                  </span>
                  <div className="pt-1.5">
                    <h2 className="font-heading text-xl font-extrabold text-[#122A0E]">{s.title}</h2>
                    <p className="mt-1.5 max-w-lg text-sm text-[#122A0E]/65">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-6">
            <DownloadButton testid="how-page-download-btn" source="how_it_works" className="!px-9 !py-4 !text-sm" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
