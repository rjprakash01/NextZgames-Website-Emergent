import { Link } from "react-router-dom";

export const Logo = ({ className = "h-8 md:h-9" }) => (
  <Link to="/" data-testid="brand-logo" className="flex items-center" aria-label="NextZGames home">
    <span className="rounded-xl bg-[#254F1F] px-3 py-2 shadow-[0_6px_18px_rgba(37,79,31,0.3)]">
      <img
        src="/logo.png"
        alt="NextZGames"
        className={`${className} w-auto transition-transform duration-500 hover:scale-[1.03]`}
      />
    </span>
  </Link>
);
