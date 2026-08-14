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
        title={<>Predict the Outcome. <span className="text-[#D4C942]">Own the Moment.</span></>}
        sub="Follow the action and explore Predictions through the NextZGames mobile experience."
      >
        <Reveal delay={0.3} className="mt-8">
          <DownloadButton testid="predictions-page-download-btn" source="predictions_page" />
        </Reveal>
      </PageHero>

      <section className="section-light py-24 md:py-32" data-testid="predictions-steps-section">
        <div className="mx-auto max-w-7xl px-6">
          <Chapter n="01" label="How Predictions Work" tone="light" />
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1f361d]">
              Four Steps. <span className="gold-strong">One Moment.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PREDICTION_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={0.08 * i}>
                <div className="card-light h-full p-8" data-testid={`predictions-step-${s.n}`}>
                  <span className="font-heading text-4xl font-extrabold gold-strong">{s.n}</span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-[#1f361d]">{s.title}</h3>
                  <p className="mt-2 text-sm text-[#1f361d]/60">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.25} className="mt-12">
            <DownloadButton testid="predictions-steps-download-btn" source="predictions_steps" />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#284525] py-24 md:py-32" data-testid="predictions-experience-section">
        <span aria-hidden className="txt-outline-gold pointer-events-none absolute -top-6 left-0 select-none font-heading text-[15vw] font-extrabold leading-none opacity-30">PREDICT</span>
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <Chapter n="02" label="The Experience" />
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                From Event List <span className="text-[#D4C942]">to Result</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-base text-white/70">
                Browse available events, review prediction options, confirm your selection and follow the outcome — every step designed to be clear and fast on mobile.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-8">
              <DownloadButton testid="predictions-experience-download-btn" source="predictions_experience" />
            </Reveal>
          </div>
          <Reveal delay={0.15} className="relative mx-auto">
            <div className="pointer-events-none absolute inset-0 -m-16 rounded-full glow-gold" />
            <PhoneMockup screen="predictions" className="relative w-[250px] rotate-2" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
