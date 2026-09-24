import { FormEvent, useState } from "react";
import { company, quoteServiceTypes } from "../data/content";

// Swap this for the client's real Formspree (or Web3Forms) endpoint before launch.
// Sign up at https://formspree.io, create a form pointed at
// eminentsignsandcraft@gmail.com, and paste the endpoint URL here.
const FORM_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_REAL_ID";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <section className="bg-eminent-blue-deep text-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h1 className="font-display text-4xl md:text-5xl font-semibold">Get a Quote</h1>
          <p className="mt-4 max-w-xl text-white/75">
            Tell us about your project and we'll get back to you with pricing and next steps.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 grid lg:grid-cols-5 gap-12">
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
          <Field label="Name / Project Name" name="name" required />

          <div>
            <label className="block text-sm font-semibold text-eminent-charcoal mb-1.5">
              Service Type
            </label>
            <select
              name="service_type"
              required
              className="w-full border border-eminent-charcoal/20 px-4 py-3 text-sm focus:border-eminent-blue outline-none"
            >
              <option value="">Select a service</option>
              {quoteServiceTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <Field label="Budget Range" name="budget_range" placeholder="e.g. ₦200,000 – ₦500,000" />

          <div>
            <label className="block text-sm font-semibold text-eminent-charcoal mb-1.5">
              Project Description
            </label>
            <textarea
              name="description"
              required
              rows={5}
              className="w-full border border-eminent-charcoal/20 px-4 py-3 text-sm focus:border-eminent-blue outline-none"
              placeholder="Tell us what you need — location, size, timeline, anything else useful."
            />
          </div>

          <Field label="Phone or Email" name="contact" required placeholder="How should we reach you?" />

          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-sm bg-eminent-blue px-8 py-3.5 font-semibold text-white hover:bg-eminent-blue-dark transition disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Request"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-green-700">Thanks — your request has been sent. We'll be in touch soon.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700">
              Something went wrong. Please try again, or reach us directly on WhatsApp below.
            </p>
          )}
        </form>

        <div className="lg:col-span-2 space-y-6">
          <div className="border border-eminent-charcoal/10 p-7">
            <h2 className="font-display font-semibold text-eminent-charcoal mb-4">Direct Contact</h2>
            <ul className="space-y-3 text-sm text-eminent-charcoal/75">
              <li>{company.address}</li>
              <li>{company.phone1} / {company.phone2}</li>
              <li>{company.email}</li>
              <li>{company.hours}</li>
            </ul>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              className="mt-5 inline-block rounded-sm bg-eminent-gold px-6 py-2.5 text-sm font-semibold text-eminent-ink hover:brightness-95 transition"
            >
              Message on WhatsApp
            </a>
          </div>

          <div className="border border-eminent-charcoal/10 overflow-hidden h-64">
            <iframe
              title="Eminent Signs & Craft Services location"
              className="h-full w-full"
              loading="lazy"
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-eminent-charcoal mb-1.5">{label}</label>
      <input
        type="text"
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full border border-eminent-charcoal/20 px-4 py-3 text-sm focus:border-eminent-blue outline-none"
      />
    </div>
  );
}
