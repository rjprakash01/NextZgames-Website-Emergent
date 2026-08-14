import { Reveal, PageHero } from "../components/bits";
import { LEGAL_PAGES } from "../data/content";
import { usePageMeta } from "../lib/meta";

export default function Legal({ slug }) {
  const page = LEGAL_PAGES[slug];
  usePageMeta(`${page.title} — NextZGames`, page.intro);
  return (
    <>
      <PageHero chapter="§" label="Legal" title={page.title} sub={page.intro} />
      <section className="bg-[#1f361d] py-24 md:py-32" data-testid={`legal-${slug}`}>
        <div className="mx-auto max-w-3xl space-y-10 px-6">
          {page.sections.map((s, i) => (
            <Reveal key={s.h} delay={0.04 * i}>
              <div className="border-l border-[#D4C942]/30 pl-6">
                <h2 className="font-heading text-xl font-bold text-white">{s.h}</h2>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-white/65">{s.p}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.1}>
            <p className="text-xs text-white/40">
              This document is provided for information and will be reviewed and approved by legal counsel before public launch. Last updated: {new Date().getFullYear()}.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
