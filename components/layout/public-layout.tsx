'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, ShieldCheck, X } from 'lucide-react'
import { useState, useCallback } from 'react'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Programs', '/academics'],
  ['Admissions', '/admissions'],
  ['Track application', '/admissions/status'],
  ['News & events', '/news'],
  ['Gallery', '/gallery'],
  ['Contact', '/contact'],
]

export function Brand({ compact = false }: { compact?: boolean }) {
  return <span className="brand"><span className="brand-mark"><img src="/images/aspej-logo.jpg" alt="ASPEJ crest" /></span><span><strong>ASPEJ</strong>{!compact && <small>Education platform</small>}</span></span>
}

export function PublicHeader() {
  const [open, setOpen] = useState(false)
  const [animatingHref, setAnimatingHref] = useState<string | null>(null)
  const pathname = usePathname()

  const handleClick = useCallback((href: string) => {
    setAnimatingHref(href)
    setTimeout(() => setAnimatingHref(null), 600)
  }, [])

  return <header className="site-header"><div className="container header-inner"><button className="mobile-menu" aria-label="Open navigation" onClick={() => setOpen(true)}><Menu size={21} /></button><Link className="logo-button" href="/"><Brand /></Link><nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => { const isActive = pathname === href || pathname.startsWith(href + '/'); const isAnimating = animatingHref === href; return <Link className={`nav-link${isActive ? ' active' : ''}${isAnimating ? ' clicking' : ''}`} key={href} href={href} onClick={() => handleClick(href)}>{label}</Link> })}</nav><div className="header-actions"><Link className="button button-primary" href="/admissions/apply">Apply now</Link><Link className="admin-link" href="/admin/login"><ShieldCheck size={16} /> Staff login</Link></div></div>{open && <><button className="drawer-backdrop" aria-label="Close navigation" onClick={() => setOpen(false)} /><aside className="mobile-drawer" role="dialog" aria-modal="true"><div className="drawer-head"><Brand compact /><button onClick={() => setOpen(false)} aria-label="Close navigation"><X size={21} /></button></div>{links.map(([label, href]) => <Link className="drawer-link" key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="button button-primary drawer-apply" href="/admissions/apply">Apply now</Link></aside></>}</header>
}

export function PublicFooter() {
  return <footer className="site-footer"><div className="container footer-grid"><div className="footer-intro"><Brand /><p className="footer-copy">A clear, practical digital home for ASPEJ learners, families, educators, and administrators.</p><span className="placeholder-label">Institutional content placeholder</span></div><div><h3>Explore</h3><Link href="/about">About ASPEJ</Link><Link href="/academics">Academics</Link><Link href="/admissions">Admissions</Link></div><div><h3>Resources</h3><Link href="/news">News</Link><Link href="/events">Events</Link><Link href="/gallery">Gallery</Link></div><div><h3>Contact</h3><p className="muted">Official contact details will be added here.</p><Link href="/contact">View contact page</Link></div></div><div className="container footer-bottom"><span>© 2026 ASPEJ. Content placeholder.</span><span>Built for clarity and access.</span></div></footer>
}

export function PageFrame({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return <main className="inner-page"><div className="container"><div className="page-intro"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div>{children}</div></main>
}

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return <><PublicHeader />{children}<PublicFooter /></>
}

export function StatusBadge({ status }: { status: string }) {
  return <span className={`status status-${status.toLowerCase().replace(' ', '-')}`}>{status}</span>
}

export function AdminButton({ children, href = '#' }: { children: React.ReactNode; href?: string }) {
  return <a className="button button-primary" href={href}>{children}</a>
}

export function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{description && <p>{description}</p>}</div>
}

export function InternalPage({ children }: { children: React.ReactNode }) {
  return <PublicLayout>{children}</PublicLayout>
}

export function HomeCard({ href, title, description }: { href: string; title: string; description: string }) {
  return <Link className="quick-link-card" href={href}><strong>{title}</strong><small>{description}</small></Link>
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return <div className="empty-state"><h3>{title}</h3><p>{description}</p></div>
}

export const applicationReference = 'ASPEJ-260909-015'

export default PublicLayout

