import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LogoMark } from "./LogoMark";
import { company } from "../data/content";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm tracking-wide transition-colors ${
      isActive ? "text-eminent-blue font-semibold" : "text-eminent-charcoal hover:text-eminent-blue"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-eminent-charcoal/10">
      <div className="mx-auto max-w-6xl px-5 h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark className="h-9 w-9" />
          <span className="font-display font-semibold text-lg leading-tight text-eminent-charcoal">
            EMINENT
            <span className="block text-[0.6rem] tracking-[0.2em] font-body font-normal text-eminent-blue">
              SIGNS &amp; CRAFT SERVICES
            </span>
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="rounded-sm bg-eminent-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-eminent-blue-dark transition-colors"
          >
            Get a Quote
          </NavLink>
        </nav>

        <button
          className="md:hidden p-2 text-eminent-charcoal"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-eminent-charcoal/10 bg-white px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="rounded-sm bg-eminent-blue px-5 py-2.5 text-sm font-semibold text-white text-center"
          >
            Get a Quote
          </NavLink>
          <a href={`tel:${company.phone1.replace(/\s/g, "")}`} className="text-sm text-eminent-charcoal/70">
            Call {company.phone1}
          </a>
        </nav>
      )}
    </header>
  );
}
