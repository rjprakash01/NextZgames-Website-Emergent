import { ShieldAlert, Timer, Wallet, Ban, UserX, LifeBuoy, CalendarCheck, Scale } from "lucide-react";
import { Chapter, Reveal, PageHero } from "../components/bits";
import { usePageMeta } from "../lib/meta";

const ITEMS = [
  { icon: CalendarCheck, title: "Age Requirements", desc: "NextZGames is strictly for users who meet the legal age requirement in their jurisdiction. Verification is enforced inside the app." },
  { icon: ShieldAlert, title: "Understand the Risks", desc: "Real-money gaming involves financial risk and can be habit-forming. Treat it as entertainment, never as a source of income." },
  { icon: Wallet, title: "Set Personal Limits", desc: "Decide a budget before you play and stick to it. Deposit and play limits are available through account controls in the app." },
  { icon: Timer, title: "Take Breaks", desc: "Step away regularly. If play stops being fun, it is time to pause." },
  { icon: Ban, title: "Never Chase Losses", desc: "Losses are part of gaming. Trying to win back losses leads to bigger risks — walk away instead." },
  { icon: Scale, title: "Account Controls", desc: "The app provides controls to help you manage your play, including limits and cool-down options." },
  { icon: UserX, title: "Self-Exclusion", desc: "Where applicable, you can request self-exclusion from the platform by contacting support." },
  { icon: LifeBuoy, title: "Support Resources", desc: "If gaming is affecting your life, reach out to our support team through the Contact page or a professional support organisation in your region." },
];

export default function ResponsibleGaming() {
  usePageMeta("Responsible Gaming — NextZGames", "Play responsibly. Learn about limits, breaks, account controls and support at NextZGames.");
  return (
    <>
      <PageHero
        chapter="RG"
        label="Responsible Gaming"
        title={<>Play Smart. <span className="text-[#D4C942]">Stay in Control.</span></>}
        sub="Gaming should always remain entertainment. Here is how we help you stay in control — and where to turn if you need support."
      />
      <section className="bg-[#1f361d] py-24 md:py-32" data-testid="rg-items">
        <div className="mx-auto max-w-7xl px-6">
          <Chapter n="01" label="Our Commitment" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={0.05 * i}>
                <div className="card-green h-full p-7" data-testid={`rg-card-${i}`}>
                  <item.icon size={20} className="text-[#D4C942]" />
                  <h3 className="mt-4 font-heading text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-14 rounded-2xl border border-[#D4C942]/30 bg-[#284525] p-8 md:p-10" data-testid="rg-notice">
              <p className="font-heading text-lg font-bold text-white">Need a break?</p>
              <p className="mt-3 max-w-2xl text-sm text-white/65">
                If you feel your gaming is becoming a problem, contact our support team at{" "}
                <a href="mailto:support@nextzgames.com" data-testid="rg-support-email" className="text-[#D4C942] underline underline-offset-4">
                  support@nextzgames.com
                </a>{" "}
                to discuss limits, cool-downs or self-exclusion. This page will be updated with region-specific support resources before launch.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
