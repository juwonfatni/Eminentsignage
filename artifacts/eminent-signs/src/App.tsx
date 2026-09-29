import { type CSSProperties, type FormEvent, type ReactNode, useEffect, useState } from 'react';
import { ArrowUpRight, Clock3, Mail, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Link, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();
const whatsappNumber = '2348138830733';
const whatsappLink = `https://wa.me/${whatsappNumber}`;
const businessAddress = '2, Omoniyi Street, Mushin, Lagos, Nigeria';
const directionsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessAddress)}`;

const services = [
  ['01', 'Interior Signage', 'Custom indoor signage that reflects your brand identity — reception displays, directional signs, and wall graphics that turn your workspace into a branded experience.'],
  ['02', 'Exterior Signage', 'Eye-catching outdoor signage built to command attention and withstand the elements, keeping your business visible around the clock.'],
  ['03', 'Office Branding', 'Complete office transformation through cohesive branding elements — wall décor, signage, and visual touches that reinforce your identity.'],
  ['04', 'Front Store Signage', 'Storefront signs designed to make a strong first impression, drawing foot traffic and giving your business a professional presence.'],
  ['05', 'Fabrication', 'Precision craftsmanship creating custom signage and branding materials — built to spec, built to last, with materials suited to each project.'],
  ['06', 'Installation', 'Professional, safe, and efficient installation of all signage and branding materials, handled start to finish by our skilled team.'],
  ['07', 'Signage Maintenance', 'Ongoing care and repair services that keep your signage looking sharp and functioning properly, protecting your investment.'],
  ['08', 'General Printing', 'Full-service printing support for branding materials and marketing collateral, tailored to your specifications.'],
] as const;

const projects = [
  { name: 'FLM', description: 'Signage and branding project completed for FLM.', a: '#062f52', b: '#168fe4' },
  { name: 'Sonmade Luxury', description: 'Signage and branding project completed for Sonmade Luxury.', a: '#373435', b: '#b17900' },
  { name: 'Savalani', description: 'Signage and branding project completed for Savalani.', a: '#054c8a', b: '#fcb61a' },
  { name: 'Distinct Fabrics', description: 'Signage and branding project completed for Distinct Fabrics.', a: '#3c4f60', b: '#0171ce' },
  { name: 'Goldenpenny Café', description: 'Signage and branding project completed for Goldenpenny Café.', a: '#7b4e25', b: '#fcb61a' },
];

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <span className={`brand ${footer ? 'brand-footer' : ''}`} data-testid={footer ? 'brand-footer' : 'brand-header'}>
      <img className="brand-logo" src={`${import.meta.env.BASE_URL}eminent-logo.jpg`} alt="Eminent Signs & Craft Services" />
    </span>
  );
}

function PageMeta({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = `${title} | Eminent Signs & Craft Services`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description]);
  return null;
}

function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const links = [
    ['/', 'Home', 'link-nav-home'],
    ['/services', 'Services', 'link-nav-services'],
    ['/gallery', 'Gallery', 'link-nav-gallery'],
    ['/about', 'About', 'link-nav-about'],
    ['/contact', 'Contact', 'link-nav-contact'],
  ];
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="wrap nav-row">
        <Link href="/" className="brand" onClick={close} aria-label="Eminent Signs and Craft Services home" data-testid="link-brand-home">
          <Logo />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([href, label, testId]) => (
            <Link key={href} href={href} className={location === href ? 'active' : ''} aria-current={location === href ? 'page' : undefined} data-testid={testId}>{label}</Link>
          ))}
          <Link href="/contact" className="btn btn-blue" data-testid="link-header-quote">Get a Quote <ArrowUpRight size={15} /></Link>
        </nav>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} data-testid="button-mobile-menu">
          {open ? <X size={24} /> : <Menu size={25} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([href, label, testId]) => (
            <Link key={href} href={href} onClick={close} aria-current={location === href ? 'page' : undefined} data-testid={`${testId}-mobile`}>{label}</Link>
          ))}
          <Link href="/contact" className="btn btn-blue" onClick={close} data-testid="link-mobile-quote">Get a Quote <ArrowUpRight size={15} /></Link>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="Eminent Signs and Craft Services home" data-testid="link-footer-home"><Logo footer /></Link>
          <p>...it can only get better</p>
          <p>RC: 7186990</p>
        </div>
        <div>
          <h2>Navigate</h2>
          <ul className="footer-list">
            <li><Link href="/services" data-testid="link-footer-services">Services</Link></li>
            <li><Link href="/gallery" data-testid="link-footer-gallery">Gallery</Link></li>
            <li><Link href="/about" data-testid="link-footer-about">About Us</Link></li>
            <li><Link href="/contact" data-testid="link-footer-contact">Get a Quote</Link></li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul className="footer-list">
            <li>2, Omoniyi Street, Mushin, Lagos</li>
            <li><a href="tel:+2348138830733" data-testid="link-footer-phone">0813 883 0733</a> / <a href="tel:+2347013334512" data-testid="link-footer-phone-secondary">0701 333 4512</a></li>
            <li><a href="mailto:eminentsignsandcraft@gmail.com" data-testid="link-footer-email">eminentsignsandcraft@gmail.com</a></li>
            <li>Mon–Sat, 8am–6pm</li>
          </ul>
        </div>
        <div>
          <h2>Follow</h2>
          <ul className="footer-list">
            <li><a href="https://instagram.com/eminent_signs_craft_services" target="_blank" rel="noopener noreferrer" data-testid="link-footer-instagram">Instagram: @eminent_signs_craft_services</a></li>
            <li><a href="https://tiktok.com/@eminent_signs_craft" target="_blank" rel="noopener noreferrer" data-testid="link-footer-tiktok">TikTok: @eminent_signs_craft</a></li>
            <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" data-testid="link-footer-whatsapp">WhatsApp: 0813 883 0733</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Eminent Signs &amp; Craft Services. ...it can only get better</div>
    </footer>
  );
}

function Shell({ children }: { children: ReactNode }) {
  return <div className="site-shell"><Header /><main>{children}</main><Footer /></div>;
}

function SubHero({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="subhero"><div className="wrap subhero-inner"><div className="eyebrow" style={{ color: 'var(--gold)' }}>{eyebrow}</div><h1>{title}</h1><p>{children}</p></div></section>;
}

function ServiceCards({ full = false }: { full?: boolean }) {
  if (full) {
    return <div className="service-grid-full">{services.map(([num, title, body]) => <article className="service-card-full" key={num} data-testid={`card-service-${num}`}><span className="service-num">{num}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}</div>;
  }
  return <div className="service-grid">{services.slice(0, 6).map(([num, title, body]) => <article className="service-card" key={num} data-testid={`card-home-service-${num}`}><span className="card-index">{num}</span><h3>{title}</h3><p>{body}</p></article>)}</div>;
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const style = { '--thumb-a': project.a, '--thumb-b': project.b } as CSSProperties;
  return <article className="project-card" data-testid={`card-project-${index}`}><div className="project-thumb" style={style}><span className="thumb-label">{project.name}</span><span className="photo-pending">Project photo pending</span></div><div className="project-body"><h3>{project.name}</h3><p>{project.description}</p></div></article>;
}

function Home() {
  return <>
    <PageMeta title="Signage & Branding in Lagos" description="Eminent Signs & Craft Services creates premium signage, branding, fabrication and installation solutions for businesses across Lagos." />
    <section className="hero">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <div className="eyebrow" style={{ color: 'var(--gold)' }}>Lagos signage &amp; craft services</div>
          <h1>Signage and branding built to make your business impossible to ignore.</h1>
          <p>A premium branding and craft agency dedicated to helping businesses make a lasting impression through exceptional signage and branding.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-gold" data-testid="link-hero-quote">Get a Quote <ArrowUpRight size={16} /></Link>
            <Link href="/gallery" className="btn btn-outline" data-testid="link-hero-gallery">See Our Work</Link>
          </div>
        </div>
        <div className="hero-stamp" aria-hidden="true">MAKE YOUR<br />MARK<br /><span>EST. LAGOS</span></div>
      </div>
      <div className="hero-angle" aria-hidden="true" />
    </section>
    <section className="stats" aria-label="Company highlights">
      <div className="wrap stats-grid">
        {[['4+', 'Years of Experience'], ['20+', 'Projects Completed'], ['10+', 'Core Services'], ['100%', 'On-Site Installation']].map(([value, label]) => <div key={label} data-testid={`stat-${label.toLowerCase().replaceAll(' ', '-')}`}><div className="stat-value">{value}</div><div className="stat-label">{label}</div></div>)}
      </div>
    </section>
    <section className="section wrap" aria-labelledby="what-we-build">
      <div className="section-head"><div><div className="eyebrow">The Eminent standard</div><h2 id="what-we-build">What we build</h2></div><Link href="/services" className="text-link" data-testid="link-all-services">All services <ArrowUpRight size={14} /></Link></div>
      <ServiceCards />
    </section>
    <section className="bg-mist" aria-labelledby="recent-work">
      <div className="section wrap"><div className="section-head"><div><div className="eyebrow">Selected work</div><h2 id="recent-work">Recent work</h2></div><Link href="/gallery" className="text-link" data-testid="link-full-gallery">Full gallery <ArrowUpRight size={14} /></Link></div><div className="project-grid">{projects.slice(0, 3).map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div></div>
    </section>
    <section className="cta wrap" aria-labelledby="home-cta"><div className="eyebrow">Start a conversation</div><h2 id="home-cta">Have a project in mind? Let&apos;s put your brand where it can&apos;t be missed.</h2><Link href="/contact" className="btn btn-blue" data-testid="link-cta-quote">Get a Quote <ArrowUpRight size={16} /></Link></section>
  </>;
}

function Services() {
  return <>
    <PageMeta title="Signage & Branding Services" description="Explore Eminent Signs & Craft Services for interior and exterior signage, office branding, fabrication, installation, maintenance and printing in Lagos." />
    <SubHero eyebrow="What we do" title="Services & Signage Types">From first concept to final install, every project is handled in-house — design, fabrication, installation, and the maintenance that keeps it looking right.</SubHero>
    <section className="section wrap" aria-labelledby="services-catalogue"><h2 id="services-catalogue" className="sr-only">Our service catalogue</h2><ServiceCards full /><div className="bg-mist" style={{ marginTop: '3.75rem', padding: '2.4rem 1.5rem', textAlign: 'center', border: '1px solid rgba(6,47,82,.12)' }}><div className="eyebrow">Project pricing</div><h2 style={{ margin: '.65rem 0 0', color: 'var(--charcoal)', fontFamily: 'Rajdhani', fontSize: '1.8rem' }}>Pricing is quoted per project</h2><p style={{ maxWidth: 440, margin: '.65rem auto 0', color: 'var(--muted-foreground)', lineHeight: 1.5 }}>Materials, size, and finish all affect cost — tell us what you need and we&apos;ll put together a quote.</p><Link href="/contact" className="btn btn-blue" style={{ marginTop: '1.3rem' }} data-testid="link-services-quote">Get a Quote <ArrowUpRight size={16} /></Link></div></section>
  </>;
}

function Gallery() {
  return <>
    <PageMeta title="Gallery & Portfolio" description="View completed signage and branding projects by Eminent Signs & Craft Services across Lagos, including FLM, Sonmade Luxury, Savalani and more." />
    <SubHero eyebrow="Our work" title="Gallery & Portfolio">A look at completed signage and branding projects across Lagos.</SubHero>
    <section className="section wrap" aria-labelledby="portfolio-grid"><h2 id="portfolio-grid" className="sr-only">Completed projects</h2><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div><p className="portfolio-note">More projects added as new work is completed.</p></section>
  </>;
}

function About() {
  return <>
    <PageMeta title="About Eminent Signs & Craft Services" description="Learn about Eminent Signs & Craft Services, a Lagos signage and branding agency led by Rasaq Adeshina and built around craft, reliability and lasting visual solutions." />
    <SubHero eyebrow="The people behind the work" title="About Us">A premium branding and craft agency dedicated to helping businesses make a lasting impression through exceptional signage and branding.</SubHero>
    <section className="section wrap about-grid" aria-label="Our mission and vision">
      <article className="about-card"><div className="eyebrow">Why we show up</div><h2>Our Mission</h2><p>Our mission is to transform ideas into impactful visual experiences through exceptional signage, creative branding, and quality craftsmanship, while delivering reliable, professional, and lasting solutions that help businesses stand out.</p></article>
      <article className="about-card"><div className="eyebrow" style={{ color: '#c48700' }}>Where we are going</div><h2>Our Vision</h2><p>To become a leading and trusted signage and branding company, recognized for creativity, exceptional craftsmanship, innovation, and excellence in delivering visual solutions that make brands stand out.</p></article>
    </section>
    <section className="bg-mist" aria-labelledby="team-heading"><div className="section wrap"><div className="eyebrow">People of Eminent</div><h2 id="team-heading" style={{ margin: '.55rem 0 1.5rem', color: 'var(--charcoal)', fontFamily: 'Rajdhani', fontSize: '2.2rem' }}>The Team</h2><article className="team-card" data-testid="card-team-rasaq"><div className="avatar" aria-hidden="true">RA</div><div><h3>Rasaq Adeshina</h3><p className="team-role">CEO</p><p>Leading Eminent Signs &amp; Craft Services with 4+ years of hands-on experience in signage, branding, and craft services across Lagos.</p></div></article></div></section>
    <div className="registration">RC: 7186990</div>
  </>;
}

function Contact() {
  const [form, setForm] = useState({ name: '', service: '', budget: '', description: '', contact: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState('');
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = 'Please enter your name or project name.';
    if (!form.service) next.service = 'Please choose a service.';
    if (!form.description.trim()) next.description = 'Please tell us a little about the project.';
    if (!form.contact.trim()) next.contact = 'Please add a phone number or email.';
    setErrors(next);
    if (Object.keys(next).length) return;
    const message = `Hello Eminent Signs & Craft Services, I would like a quote.%0A%0AName / Project: ${encodeURIComponent(form.name)}%0AService: ${encodeURIComponent(form.service)}%0ABudget: ${encodeURIComponent(form.budget || 'Not specified')}%0ADescription: ${encodeURIComponent(form.description)}%0APhone or Email: ${encodeURIComponent(form.contact)}`;
    setNotice('WhatsApp is opening with your request. Please tap Send in WhatsApp to submit it to Eminent.');
    window.open(`${whatsappLink}?text=${message}`, '_blank', 'noopener,noreferrer');
  };
  return <>
    <PageMeta title="Request a Signage Quote" description="Tell Eminent Signs & Craft Services about your signage or branding project in Lagos and request a project quote through WhatsApp." />
    <SubHero eyebrow="Let&apos;s make it visible" title="Get a Quote">Tell us about your project and we&apos;ll get back to you with pricing and next steps.</SubHero>
    <section className="section wrap contact-grid">
      <div>
        <div className="eyebrow">Project brief</div>
        <h2 style={{ margin: '.55rem 0 0', color: 'var(--charcoal)', fontFamily: 'Rajdhani', fontSize: '2.5rem', lineHeight: .95 }}>Tell us what you&apos;re building.</h2>
        <p className="form-intro">Share the essentials below. When you submit, we&apos;ll open a prefilled WhatsApp message — you must tap Send in WhatsApp for us to receive it.</p>
        <form onSubmit={submit} noValidate data-testid="form-quote-request">
          <div className="field"><label htmlFor="quote-name">Name / Project Name</label><input id="quote-name" value={form.name} onChange={(event) => update('name', event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'quote-name-error' : undefined} data-testid="input-quote-name" />{errors.name && <p className="field-error" id="quote-name-error">{errors.name}</p>}</div>
          <div className="field"><label htmlFor="quote-service">Service Type</label><select id="quote-service" value={form.service} onChange={(event) => update('service', event.target.value)} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? 'quote-service-error' : undefined} data-testid="select-quote-service"><option value="">Select a service</option><option>Interior Signage</option><option>Exterior Signage</option><option>Office Branding</option><option>Front Store Signage</option><option>Fabrication</option><option>Installation</option><option>Maintenance</option><option>General Printing</option></select>{errors.service && <p className="field-error" id="quote-service-error">{errors.service}</p>}</div>
          <div className="field"><label htmlFor="quote-budget">Budget Range <span style={{ color: 'var(--muted-foreground)', fontWeight: 400 }}>(optional)</span></label><input id="quote-budget" value={form.budget} onChange={(event) => update('budget', event.target.value)} placeholder="e.g. ₦200,000 – ₦500,000" data-testid="input-quote-budget" /></div>
          <div className="field"><label htmlFor="quote-description">Project Description</label><textarea id="quote-description" rows={5} value={form.description} onChange={(event) => update('description', event.target.value)} placeholder="Tell us what you need — location, size, timeline, anything else useful." aria-invalid={Boolean(errors.description)} aria-describedby={errors.description ? 'quote-description-error' : undefined} data-testid="textarea-quote-description" />{errors.description && <p className="field-error" id="quote-description-error">{errors.description}</p>}</div>
          <div className="field"><label htmlFor="quote-contact">Phone or Email</label><input id="quote-contact" value={form.contact} onChange={(event) => update('contact', event.target.value)} placeholder="How should we reach you?" aria-invalid={Boolean(errors.contact)} aria-describedby={errors.contact ? 'quote-contact-error' : undefined} data-testid="input-quote-contact" />{errors.contact && <p className="field-error" id="quote-contact-error">{errors.contact}</p>}</div>
          <button type="submit" className="btn btn-blue" data-testid="button-submit-quote">Open WhatsApp <MessageCircle size={16} /></button>
          {notice && <p className="form-note" role="status" data-testid="status-whatsapp-instruction">{notice}</p>}
        </form>
      </div>
      <aside className="info-stack" aria-label="Direct contact details">
        <div className="info-card"><h2>Direct Contact</h2><ul className="info-list"><li><MapPin size={16} /><span>2, Omoniyi Street, Mushin, Lagos, Nigeria</span></li><li><Phone size={16} /><span><a href="tel:+2348138830733" data-testid="link-contact-phone">0813 883 0733</a> / <a href="tel:+2347013334512" data-testid="link-contact-phone-secondary">0701 333 4512</a></span></li><li><Mail size={16} /><a href="mailto:eminentsignsandcraft@gmail.com" data-testid="link-contact-email">eminentsignsandcraft@gmail.com</a></li><li><Clock3 size={16} /><span>Monday – Saturday, 8am – 6pm</span></li></ul><a className="btn btn-gold" href={whatsappLink} target="_blank" rel="noopener noreferrer" data-testid="link-contact-whatsapp">Message on WhatsApp <MessageCircle size={16} /></a></div>
        <div className="map-box"><iframe title="Map showing Eminent Signs & Craft Services in Mushin, Lagos" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(businessAddress)}&output=embed`} /><a className="map-directions" href={directionsLink} target="_blank" rel="noopener noreferrer">Open directions in Google Maps</a></div>
      </aside>
    </section>
  </>;
}

function Router() {
  return <RoutedErrorBoundary><Switch><Route path="/" component={Home} /><Route path="/services" component={Services} /><Route path="/gallery" component={Gallery} /><Route path="/about" component={About} /><Route path="/contact" component={Contact} /><Route component={NotFound} /></Switch></RoutedErrorBoundary>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Shell><Router /></Shell></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;