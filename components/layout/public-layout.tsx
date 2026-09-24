"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShieldCheck, X } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

const desktopLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Programs", "/academics"],
  ["Admissions", "/admissions"],
  ["News", "/news"],
  ["Contact", "/contact"],
];

const mobileLinks = [
  ...desktopLinks,
  ["Track Application", "/admissions/status"],
];

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand">
      <span className="brand-mark">
        <img src="/images/aspej-logo.jpg" alt="ASPEJ crest" />
      </span>
      <span>
        <strong>ASPEJ</strong>
        {!compact && <small>Education platform</small>}
      </span>
    </span>
  );
}

export function PublicHeader() {
  const [open, setOpen] = useState(false);
  const [animatingHref, setAnimatingHref] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleClick = useCallback((href: string) => {
    setAnimatingHref(href);
    setTimeout(() => setAnimatingHref(null), 600);
    setOpen(false);
  }, []);

  return (
    <header
      className={`site-header sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 transition-all duration-200 ${
        scrolled
          ? "shadow-[0_10px_25px_-18px_rgba(15,23,42,0.18)]"
          : "shadow-none"
      }`}
    >
      <div className="container">
        <div className="header-inner h-[76px]">
          <Link
            className="logo-button shrink-0"
            href="/"
            aria-label="ASPEJ home"
          >
            <Brand />
          </Link>

          <nav
            className="desktop-nav hidden lg:flex"
            aria-label="Primary navigation"
          >
            {desktopLinks.map(([label, href]) => {
              const isActive =
                pathname === href || pathname.startsWith(href + "/");
              const isAnimating = animatingHref === href;

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => handleClick(href)}
                  className={`nav-link${isActive ? " active" : ""}${isAnimating ? " clicking" : ""}`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions ml-auto hidden md:flex">
            <Link className="admin-link" href="/admissions/status">
              Track Application
            </Link>
            <Link className="button button-primary" href="/admissions/apply">
              Apply Now
            </Link>
          </div>

          <button
            className="mobile-menu ml-auto inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition-colors hover:border-sky-200 hover:text-sky-700 md:hidden"
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {open && (
        <>
          <button
            className="fixed inset-0 z-30 bg-slate-900/10 md:hidden"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
          />
          <aside
            className="fixed inset-x-0 top-[76px] z-40 border-b border-slate-200 bg-white shadow-[0_16px_32px_-20px_rgba(15,23,42,0.28)] md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="container py-4">
              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {mobileLinks.map(([label, href]) => {
                  const isActive =
                    pathname === href || pathname.startsWith(href + "/");
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-sky-50 text-sky-700"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span>{label}</span>
                    </Link>
                  );
                })}

                <div className="mt-3 space-y-2 border-t border-slate-200 pt-3">
                  <Link
                    className="button button-secondary w-full justify-center"
                    href="/admissions/status"
                    onClick={() => setOpen(false)}
                  >
                    Track Application
                  </Link>
                  <Link
                    className="button button-primary w-full justify-center"
                    href="/admissions/apply"
                    onClick={() => setOpen(false)}
                  >
                    Apply Now
                  </Link>
                </div>
              </nav>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}

export function PublicFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Brand />
          <p className="footer-copy">
            A clear, practical digital home for ASPEJ learners, families,
            educators, and administrators.
          </p>
          <span className="placeholder-label">
            Institutional content placeholder
          </span>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/about">About ASPEJ</Link>
          <Link href="/academics">Academics</Link>
          <Link href="/admissions">Admissions</Link>
        </div>
        <div>
          <h3>Resources</h3>
          <Link href="/news">News</Link>
          <Link href="/events">Events</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <p className="muted">Official contact details will be added here.</p>
          <Link href="/contact">View contact page</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 ASPEJ. Content placeholder.</span>
        <span>Built for clarity and access.</span>
      </div>
    </footer>
  );
}

export function PageFrame({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main className="inner-page">
      <div className="container">
        <div className="page-intro">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        {children}
      </div>
    </main>
  );
}

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicHeader />
      <div className="public-content">{children}</div>
      <PublicFooter />
    </>
  );
}

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`status status-${status.toLowerCase().replace(" ", "-")}`}>
      {status}
    </span>
  );
}

export function AdminButton({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a className="button button-primary" href={href}>
      {children}
    </a>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}

export function InternalPage({ children }: { children: React.ReactNode }) {
  return <PublicLayout>{children}</PublicLayout>;
}

export function HomeCard({
  href,
  title,
  description,
  signal = false,
}: {
  href: string;
  title: string;
  description: string;
  signal?: boolean;
}) {
  return (
    <Link className={`quick-link-card${signal ? " admissions-quick-link" : ""}`} href={href}>
      <strong>{signal && <span className="admissions-signal" aria-hidden="true"><i /><i /><i /></span>}{title}</strong>
      <small>{description}</small>
    </Link>
  );
}

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="empty-state">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export const applicationReference = "ASPEJ-260909-015";

export default PublicLayout;
