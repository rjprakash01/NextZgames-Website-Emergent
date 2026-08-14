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
        title={<>Getting Started <span className="text-gold-gradient">Is Simple</span></>}
        sub="Five steps separate you from your first game. The entire experience happens inside the NextZGames app."
      />
      <section className="section-light py-8 md:py-12" data-testid="steps-section">
        <div className="mx-auto max-w-3xl px-6">
          <div className="relative space-y-10 before:absolute before:bottom-5 before:left-[23px] before:top-5 before:w-px before:bg-[#9C8F22]/30">
            {HOW_IT_WORKS_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={0.06 * i}>
                <div className="relative flex gap-6 md:gap-8" data-testid={`how-page-step-${s.n}`}>
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#284525] bg-[#284525] font-heading text-base font-extrabold text-[#E8DC6A] shadow-[0_10px_24px_rgba(24,43,23,0.25)]">
                    {s.n}
                  </span>
                  <div className="pt-1.5">
                    <h2 className="font-heading text-xl font-extrabold text-[#1f361d]">{s.title}</h2>
                    <p className="mt-1.5 max-w-lg text-sm text-[#1f361d]/65">{s.desc}</p>
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
