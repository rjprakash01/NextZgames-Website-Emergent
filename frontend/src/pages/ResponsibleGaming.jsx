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
        title={<>Play Smart. <span className="text-gold-gradient">Stay in Control.</span></>}
        sub="Gaming should always remain entertainment. Here is how we help you stay in control — and where to turn if you need support."
      />
      <section className="section-light py-8 md:py-12" data-testid="rg-items">
        <div className="mx-auto max-w-6xl px-6">
          <Chapter label="Our Commitment" tone="light" />
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={0.04 * i}>
                <div className="card-light h-full p-5" data-testid={`rg-card-${i}`}>
                  <span className="icon-chip !h-10 !w-10" style={{ background: ["#EFE35F", "#5EC8F2", "#FF7A59", "#9B7FE0", "#4ADE80", "#F2C94C", "#7ED3B2", "#E879A6"][i % 8], color: "#122A0E" }}><item.icon size={17} /></span>
                  <h3 className="mt-3 font-heading text-base font-bold text-[#122A0E]">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-[#122A0E]/60">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-7 rounded-2xl border border-[#0F4C44] bg-[#0F4C44] p-5 md:p-8" data-testid="rg-notice">
              <p className="font-heading text-lg font-bold text-white">Need a break?</p>
              <p className="mt-2 max-w-2xl text-sm text-white/65">
                If you feel your gaming is becoming a problem, contact our support team at{" "}
                <a href="mailto:support@nextzgames.com" data-testid="rg-support-email" className="text-[#EFE35F] underline underline-offset-4">
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
