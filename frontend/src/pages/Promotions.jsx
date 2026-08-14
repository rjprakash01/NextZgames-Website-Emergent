import { Gift, Users, Zap, BadgeCheck, ListChecks, CalendarDays } from "lucide-react";
import { Reveal, DownloadButton, PageHero } from "../components/bits";
import { PROMOTIONS } from "../data/content";
import { usePageMeta } from "../lib/meta";

const PROMO_ICONS = { gift: Gift, users: Users, zap: Zap };

export default function Promotions() {
  usePageMeta("Promotions — NextZGames", "More reasons to play. Explore current NextZGames promotions for Poker and Predictions.");
  return (
    <>
      <PageHero
        chapter="%"
        label="Promotions"
        title={<>More Reasons <span className="text-gold-gradient">to Play</span></>}
        sub="Promotions live inside the NextZGames app. Download the app to participate in any active offer."
      />
      <section className="section-light py-16 md:py-24" data-testid="promotions-list">
        <div className="mx-auto max-w-5xl space-y-6 px-6">
          {PROMOTIONS.map((p, i) => {
            const Icon = PROMO_ICONS[p.icon];
            return (
              <Reveal key={p.slug} delay={0.05 * i}>
                <article
                  data-testid={`promotion-${p.slug}`}
                  className="card-light relative grid gap-6 overflow-hidden p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-8"
                >
                  <span className="icon-chip !h-14 !w-14 !rounded-2xl">
                    <Icon size={24} />
                  </span>
                  <div>
                    <h2 className="font-heading text-xl font-extrabold text-[#1f361d]">{p.title}</h2>
                    <p className="mt-2 max-w-xl text-sm text-[#1f361d]/65">{p.desc}</p>
                    <div className="mt-4 grid gap-2.5 text-xs text-[#1f361d]/55 sm:grid-cols-3">
                      <span className="flex items-start gap-2"><BadgeCheck size={14} className="mt-0.5 shrink-0 gold-strong" /> Eligibility: verified app accounts</span>
                      <span className="flex items-start gap-2"><ListChecks size={14} className="mt-0.5 shrink-0 gold-strong" /> {p.terms}</span>
                      <span className="flex items-start gap-2"><CalendarDays size={14} className="mt-0.5 shrink-0 gold-strong" /> Validity: {p.validity}</span>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <DownloadButton testid={`promo-download-${p.slug}`} source={`promo_${p.slug}`} label="Download App" />
                  </div>
                </article>
              </Reveal>
            );
          })}
          <Reveal delay={0.2}>
            <p className="text-xs text-[#1f361d]/45">
              Sample promotions shown for preview. Final offers, eligibility, validity and full terms will be published before launch. All promotions are subject to the Promotion Terms.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
