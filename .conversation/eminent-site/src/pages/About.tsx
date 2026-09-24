import { Link } from "react-router-dom";
import { about, company } from "../data/content";

export function About() {
  return (
    <div>
      <section className="bg-eminent-blue-deep text-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h1 className="font-display text-4xl md:text-5xl font-semibold">About Us</h1>
          <p className="mt-4 max-w-xl text-white/75">{about.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 grid md:grid-cols-2 gap-12">
        <div className="border border-eminent-charcoal/10 p-8">
          <h2 className="font-display text-2xl font-semibold text-eminent-blue mb-3">Our Mission</h2>
          <p className="text-eminent-charcoal/75 leading-relaxed">{about.mission}</p>
        </div>
        <div className="border border-eminent-charcoal/10 p-8">
          <h2 className="font-display text-2xl font-semibold text-eminent-gold mb-3">Our Vision</h2>
          <p className="text-eminent-charcoal/75 leading-relaxed">{about.vision}</p>
        </div>
      </section>

      <section className="bg-eminent-mist">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-eminent-charcoal mb-6">
            The Team
          </h2>
          <div className="bg-white border border-eminent-charcoal/10 p-8 flex flex-col sm:flex-row items-start gap-6">
            <div className="h-24 w-24 rounded-full bg-eminent-blue/10 flex items-center justify-center text-eminent-blue font-display text-2xl font-semibold shrink-0">
              RA
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-eminent-charcoal">Rasaq Adeshina</h3>
              <p className="text-eminent-gold text-sm font-semibold mb-2">CEO</p>
              <p className="text-sm text-eminent-charcoal/70">
                Leading Eminent Signs &amp; Craft Services with {company.yearsActive}+ years of hands-on
                experience in signage, branding, and craft services across Lagos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 text-center">
        <p className="text-sm text-eminent-charcoal/50">{company.rc}</p>
      </section>
    </div>
  );
}
