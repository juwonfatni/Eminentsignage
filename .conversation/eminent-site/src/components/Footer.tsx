import { Link } from "react-router-dom";
import { LogoMark } from "./LogoMark";
import { company } from "../data/content";

export function Footer() {
  return (
    <footer className="bg-eminent-blue-deep text-white/80">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <LogoMark className="h-8 w-8" />
            <span className="font-display font-semibold text-white">EMINENT</span>
          </div>
          <p className="text-sm text-white/60">{company.tagline}</p>
          <p className="text-xs text-white/40 mt-3">{company.rc}</p>
        </div>

        <div>
          <h3 className="text-white font-display text-sm tracking-wide mb-3">Navigate</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-eminent-gold">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-eminent-gold">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-eminent-gold">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-eminent-gold">Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-display text-sm tracking-wide mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>{company.address}</li>
            <li>{company.phone1} / {company.phone2}</li>
            <li>{company.email}</li>
            <li>{company.hours}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-display text-sm tracking-wide mb-3">Follow</h3>
          <ul className="space-y-2 text-sm">
            <li><a href={company.instagram} className="hover:text-eminent-gold">Instagram</a></li>
            <li><a href={company.tiktok} className="hover:text-eminent-gold">TikTok</a></li>
            <li>
              <a href={`https://wa.me/${company.whatsapp}`} className="hover:text-eminent-gold">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {company.name}. {company.tagline}
      </div>
    </footer>
  );
}
