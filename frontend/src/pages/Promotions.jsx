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
        title={<>More Reasons <span className="text-[#D4C942]">to Play</span></>}
        sub="Promotions live inside the NextZGames app. Download the app to participate in any active offer."
      />
      <section className="bg-[#1f361d] py-24 md:py-32" data-testid="promotions-list">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          {PROMOTIONS.map((p, i) => {
            const Icon = PROMO_ICONS[p.icon];
            return (
              <Reveal key={p.slug} delay={0.06 * i}>
                <article
                  data-testid={`promotion-${p.slug}`}
                  className="card-green relative grid gap-8 overflow-hidden p-8 md:grid-cols-[auto_1fr_auto] md:items-center md:p-10"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full glow-gold" />
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D4C942]/30 bg-[#D4C942]/10 text-[#D4C942]">
                    <Icon size={26} />
                  </span>
                  <div>
                    <h2 className="font-heading text-2xl font-extrabold text-white">{p.title}</h2>
                    <p className="mt-3 max-w-xl text-sm md:text-base text-white/65">{p.desc}</p>
                    <div className="mt-5 grid gap-3 text-xs text-white/55 sm:grid-cols-3">
                      <span className="flex items-start gap-2"><BadgeCheck size={14} className="mt-0.5 shrink-0 text-[#D4C942]" /> Eligibility: verified app accounts</span>
                      <span className="flex items-start gap-2"><ListChecks size={14} className="mt-0.5 shrink-0 text-[#D4C942]" /> {p.terms}</span>
                      <span className="flex items-start gap-2"><CalendarDays size={14} className="mt-0.5 shrink-0 text-[#D4C942]" /> Validity: {p.validity}</span>
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
            <p className="text-xs text-white/40">
              Sample promotions shown for preview. Final offers, eligibility, validity and full terms will be published before launch. All promotions are subject to the Promotion Terms.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
