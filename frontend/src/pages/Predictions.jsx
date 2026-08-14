import { Chapter, Reveal, DownloadButton, PageHero } from "../components/bits";
import { PhoneMockup } from "../components/PhoneMockup";
import { PREDICTION_STEPS } from "../data/content";
import { usePageMeta } from "../lib/meta";

export default function Predictions() {
  usePageMeta("Predictions — NextZGames", "Predict the outcome. Own the moment. Explore Predictions through the NextZGames mobile experience.");
  return (
    <>
      <PageHero
        chapter="PR"
        label="Predictions"
        title={<>Predict the Outcome. <span className="text-gold-gradient">Own the Moment.</span></>}
        sub="Follow the action and explore Predictions through the NextZGames mobile experience."
      >
        <Reveal delay={0.3} className="mt-6">
          <DownloadButton testid="predictions-page-download-btn" source="predictions_page" />
        </Reveal>
      </PageHero>

      <section className="section-light py-8 md:py-12" data-testid="predictions-steps-section">
        <div className="mx-auto max-w-6xl px-6">
          <Chapter n="01" label="How Predictions Work" tone="light" />
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-[#274A22]">
              Four Steps. <span className="gold-strong">One Moment.</span>
            </h2>
          </Reveal>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PREDICTION_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={0.07 * i}>
                <div className="card-light h-full p-5" data-testid={`predictions-step-${s.n}`}>
                  <span className="font-heading text-2xl font-extrabold gold-strong">{s.n}</span>
                  <h3 className="mt-3 font-heading text-base font-bold text-[#274A22]">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-[#274A22]/60">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.25} className="mt-6">
            <DownloadButton testid="predictions-steps-download-btn" source="predictions_steps" />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#31602C] py-8 md:py-12" data-testid="predictions-experience-section">
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <Chapter n="02" label="The Experience" />
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                From Event List <span className="text-gold-gradient">to Result</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-md text-sm md:text-base text-white/70">
                Browse available events, review prediction options, confirm your selection and follow the outcome — every step designed to be clear and fast on mobile.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-6">
              <DownloadButton testid="predictions-experience-download-btn" source="predictions_experience" />
            </Reveal>
          </div>
          <Reveal delay={0.15} className="relative mx-auto">
            <div className="pointer-events-none absolute inset-0 -m-14 rounded-full glow-gold" />
            <PhoneMockup screen="predictions" className="relative w-[220px] rotate-2" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
