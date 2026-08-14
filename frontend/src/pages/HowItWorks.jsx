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
        title={<>Getting Started <span className="text-[#D4C942]">Is Simple</span></>}
        sub="Five steps separate you from your first game. The entire experience happens inside the NextZGames app."
      />
      <section className="section-light py-24 md:py-32" data-testid="steps-section">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative space-y-14 before:absolute before:bottom-6 before:left-[27px] before:top-6 before:w-px before:bg-[#A3962A]/30 md:before:left-[35px]">
            {HOW_IT_WORKS_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={0.08 * i}>
                <div className="relative flex gap-8 md:gap-12" data-testid={`how-page-step-${s.n}`}>
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#284525] bg-[#284525] font-heading text-lg font-extrabold text-[#D4C942] shadow-[0_12px_30px_rgba(24,43,23,0.25)] md:h-[72px] md:w-[72px] md:text-2xl">
                    {s.n}
                  </span>
                  <div className="pt-2">
                    <h2 className="font-heading text-2xl font-extrabold text-[#1f361d]">{s.title}</h2>
                    <p className="mt-2 max-w-lg text-sm md:text-base text-[#1f361d]/65">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-16">
            <DownloadButton testid="how-page-download-btn" source="how_it_works" className="!px-10 !py-5 !text-sm" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
