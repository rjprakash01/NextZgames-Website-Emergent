import { Chapter, Reveal, PageHero } from "../components/bits";
import { FAQ_GROUPS } from "../data/content";
import { usePageMeta } from "../lib/meta";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "../components/ui/accordion";

export default function Faq() {
  usePageMeta("FAQ — NextZGames", "Answers about NextZGames, Poker, Predictions, your account, payments and the app.");
  return (
    <>
      <PageHero
        chapter="FAQ"
        label="Help Centre"
        title={<>Questions? <span className="text-[#D4C942]">Answered.</span></>}
        sub="Everything about NextZGames, Poker, Predictions, accounts, payments and the app."
      />
      <section className="section-light py-24 md:py-32" data-testid="faq-groups">
        <div className="mx-auto max-w-4xl space-y-16 px-6">
          {FAQ_GROUPS.map((g, gi) => (
            <div key={g.group}>
              <Chapter n={`0${gi + 1}`} label={g.group} tone="light" />
              <Reveal delay={0.1} className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  {g.items.map((f, i) => (
                    <AccordionItem key={f.q} value={`${gi}-${i}`} className="border-[#284525]/15">
                      <AccordionTrigger
                        data-testid={`faq-q-${g.group.toLowerCase()}-${i}`}
                        className="text-left font-heading text-base font-bold text-[#1f361d] hover:text-[#A3962A] hover:no-underline"
                      >
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-[#1f361d]/65">{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
