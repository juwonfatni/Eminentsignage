import { Link } from "react-router-dom";
import { about, company, projects, services } from "../data/content";

export function Home() {
  const highlightServices = services.slice(0, 6);
  const featured = projects.slice(0, 3);

  return (
    <div>
      {/* Hero — angled panel, signage-edge motif */}
      <section className="relative overflow-hidden bg-diagonal-cut text-white">
        <div className="edge-cut-bottom absolute inset-0 -z-10 bg-diagonal-cut" />
        <div className="mx-auto max-w-6xl px-5 pt-20 pb-28 md:pt-28 md:pb-40">
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] max-w-2xl">
            Signage and branding built to make your business impossible to ignore.
          </h1>
          <p className="mt-6 max-w-xl text-white/80 text-lg">
            {about.intro}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-sm bg-eminent-gold px-7 py-3.5 font-semibold text-eminent-ink hover:brightness-95 transition"
            >
              Get a Quote
            </Link>
            <Link
              to="/gallery"
              className="rounded-sm border border-white/40 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-eminent-charcoal/10">
        <div className="mx-auto max-w-6xl px-5 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Stat value={`${company.yearsActive}+`} label="Years of Experience" />
          <Stat value={`${projects.length}+`} label="Projects Completed" />
          <Stat value="8" label="Core Services" />
          <Stat value="100%" label="On-Site Installation" />
        </div>
      </section>

      {/* Services highlight */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-eminent-charcoal">
            What we build
          </h2>
          <Link to="/services" className="text-eminent-blue font-semibold hover:underline whitespace-nowrap">
            All services
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-eminent-charcoal/10 border border-eminent-charcoal/10">
          {highlightServices.map((s) => (
            <div key={s.slug} className="bg-white p-7">
              <h3 className="font-display text-xl font-semibold text-eminent-charcoal mb-2">
                {s.name}
              </h3>
              <p className="text-sm text-eminent-charcoal/70 leading-relaxed">{s.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-eminent-mist">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex items-end justify-between gap-6 mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-eminent-charcoal">
              Recent work
            </h2>
            <Link to="/gallery" className="text-eminent-blue font-semibold hover:underline whitespace-nowrap">
              Full gallery
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((p) => (
              <div key={p.slug} className="bg-white border border-eminent-charcoal/10 overflow-hidden group">
                <div className="aspect-[4/3] bg-eminent-mist flex items-center justify-center border-b border-dashed border-eminent-blue/40 text-center px-3 text-sm text-eminent-blue-dark">
                  <span>{p.name}<br />photo pending from client</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-eminent-charcoal">{p.name}</h3>
                  <p className="text-sm text-eminent-charcoal/60 mt-1">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-eminent-charcoal max-w-xl mx-auto">
          Have a project in mind? Let's put your brand where it can't be missed.
        </h2>
        <Link
          to="/contact"
          className="inline-block mt-8 rounded-sm bg-eminent-blue px-8 py-3.5 font-semibold text-white hover:bg-eminent-blue-dark transition"
        >
          Get a Quote
        </Link>
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl font-semibold text-eminent-blue">{value}</div>
      <div className="text-xs md:text-sm text-eminent-charcoal/60 mt-1">{label}</div>
    </div>
  );
}
