import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { Logo } from "./Logo";

const COLS = [
  {
    title: "Product",
    links: [
      { to: "/poker", label: "Poker" },
      { to: "/predictions", label: "Predictions" },
      { to: "/promotions", label: "Promotions" },
      { to: "/download", label: "Download App" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about-us", label: "About Us" },
      { to: "/contact", label: "Contact" },
      { to: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Responsible Gaming",
    links: [{ to: "/responsible-gaming", label: "Responsible Gaming" }],
  },
  {
    title: "Legal",
    links: [
      { to: "/terms-and-conditions", label: "Terms & Conditions" },
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/payment-policy", label: "Payment Policy" },
      { to: "/promotion-terms", label: "Promotion Terms" },
    ],
  },
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/nextz_games/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61593105832190" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Twitter, label: "X", href: "#" },
];

export const Footer = () => (
  <footer data-testid="site-footer" className="relative bg-[#122A0E] border-t border-[#EFE35F]/15">
    <div className="h-[3px] w-full bg-gradient-to-r from-[#EFE35F] via-[#EFE35F]/50 to-transparent" />
    <div className="mx-auto max-w-6xl px-6 py-9 md:py-12">
      <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <Logo />
          <p className="mt-5 font-heading text-lg font-bold text-white">Poker. Predictions. Your Next Move.</p>
          <p className="mt-3 max-w-xs text-sm text-white/55">
            The official home of NextZGames — Poker and Predictions in one mobile experience.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                {...(href !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={label}
                data-testid={`social-${label.toLowerCase()}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-[#EFE35F] hover:text-[#EFE35F]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        {COLS.map((col) => (
          <div key={col.title}>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#EFE35F]">{col.title}</h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    data-testid={`footer-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    className="text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-9 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} NextZGames. All rights reserved.</p>
        <p className="max-w-xl">
          NextZGames involves real-money gaming and may be habit-forming or financially risky. Play responsibly.
          Only for users of legal age in permitted jurisdictions.
        </p>
      </div>
    </div>
  </footer>
);
