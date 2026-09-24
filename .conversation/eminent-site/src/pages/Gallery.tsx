import { projects } from "../data/content";

export function Gallery() {
  return (
    <div>
      <section className="bg-eminent-blue-deep text-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h1 className="font-display text-4xl md:text-5xl font-semibold">Gallery &amp; Portfolio</h1>
          <p className="mt-4 max-w-xl text-white/75">
            A look at completed signage and branding projects across Lagos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <figure key={p.slug} className="border border-eminent-charcoal/10 overflow-hidden">
                <div className="aspect-[4/3] bg-eminent-mist flex items-center justify-center border-b border-dashed border-eminent-blue/40 text-center px-3 text-sm text-eminent-blue-dark">
                  <span>{p.name}<br />photo pending from client</span>
              </div>
              <figcaption className="p-5">
                <h2 className="font-display font-semibold text-eminent-charcoal">{p.name}</h2>
                <p className="text-sm text-eminent-charcoal/60 mt-1">{p.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-10 text-sm text-eminent-charcoal/50 text-center">
          More projects added as new work is completed.
        </p>
      </section>
    </div>
  );
}
