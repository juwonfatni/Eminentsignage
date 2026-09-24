import { Link } from "react-router-dom";
import { services } from "../data/content";

export function Services() {
  return (
    <div>
      <section className="bg-eminent-blue-deep text-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h1 className="font-display text-4xl md:text-5xl font-semibold">Services &amp; Signage Types</h1>
          <p className="mt-4 max-w-xl text-white/75">
            From first concept to final install, every project is handled in-house —
            design, fabrication, installation, and the maintenance that keeps it looking right.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className="border border-eminent-charcoal/10 p-7 flex gap-5 hover:border-eminent-blue/40 transition-colors"
            >
              <span className="font-display text-2xl text-eminent-gold font-semibold shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold text-eminent-charcoal mb-2">{s.name}</h2>
                <p className="text-sm text-eminent-charcoal/70 leading-relaxed">{s.blurb}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-eminent-mist border border-eminent-charcoal/10 p-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-eminent-charcoal">
            Pricing is quoted per project
          </h2>
          <p className="mt-2 text-eminent-charcoal/70 max-w-md mx-auto">
            Materials, size, and finish all affect cost — tell us what you need and we'll put together a quote.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-6 rounded-sm bg-eminent-blue px-7 py-3 font-semibold text-white hover:bg-eminent-blue-dark transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
