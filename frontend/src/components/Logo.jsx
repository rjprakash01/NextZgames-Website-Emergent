import { Link } from "react-router-dom";

export const Logo = ({ className = "h-9 md:h-10" }) => (
  <Link to="/" data-testid="brand-logo" className="flex items-center" aria-label="NextZGames home">
    <img
      src="/logo.png"
      alt="NextZGames"
      className={`${className} w-auto transition-transform duration-500 hover:scale-[1.03]`}
    />
  </Link>
);
