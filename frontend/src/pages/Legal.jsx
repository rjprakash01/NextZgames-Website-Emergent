import { Reveal, PageHero } from "../components/bits";
import { LEGAL_PAGES } from "../data/content";
import { usePageMeta } from "../lib/meta";

export default function Legal({ slug }) {
  const page = LEGAL_PAGES[slug];
  usePageMeta(`${page.title} — NextZGames`, page.intro);
  return (
    <>
      <PageHero chapter="§" label="Legal" title={page.title} sub={page.intro} />
      <section className="section-light py-8 md:py-12" data-testid={`legal-${slug}`}>
        <div className="mx-auto max-w-3xl space-y-10 px-6">
          {page.sections.map((s, i) => (
            <Reveal key={s.h} delay={0.04 * i}>
              <div className="border-l border-[#9C8F22]/40 pl-6">
                <h2 className="font-heading text-xl font-bold text-[#1f361d]">{s.h}</h2>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-[#1f361d]/65">{s.p}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.1}>
            <p className="text-xs text-[#1f361d]/45">
              This document is provided for information and will be reviewed and approved by legal counsel before public launch. Last updated: {new Date().getFullYear()}.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
