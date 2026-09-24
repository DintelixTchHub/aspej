'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bell, CalendarDays, FileText, GalleryHorizontalEnd, LayoutDashboard, LogOut, Menu, Newspaper, ReceiptText, Settings, UploadCloud, Users, X } from 'lucide-react'
import { useState } from 'react'

const adminLinks = [
  { label: 'Overview', href: '/admin', icon: LayoutDashboard },
  { label: 'Applications', href: '/admin/applications', icon: FileText },
  { label: 'Babyeyi document', href: '/admin/babyeyi', icon: UploadCloud },
  { label: 'Fees structure', href: '/admin/fees', icon: ReceiptText },
  { label: 'News', href: '/admin/news', icon: Newspaper },
  { label: 'Events', href: '/admin/events', icon: CalendarDays },
  { label: 'Gallery', href: '/admin/gallery', icon: GalleryHorizontalEnd },
  { label: 'Messages', href: '/admin/messages', icon: Bell },
  { label: 'Users', href: '/admin/users', icon: Users },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
]

export function AdminSidebar({ open, close }: { open: boolean; close: () => void }) {
  const pathname = usePathname()

  return <><aside className={`admin-sidebar ${open ? 'is-open' : ''}`}><div className="admin-brand"><Link href="/admin"><span className="brand-mark"><img src="/images/aspej-logo.jpg" alt="ASPEJ crest" /></span><span><strong>ASPEJ</strong><small>Staff workspace</small></span></Link><button className="admin-close" onClick={close} aria-label="Close menu"><X size={18} /></button></div><nav className="admin-sidebar-nav">{adminLinks.map(({ label, href, icon: Icon }) => { const active = pathname === href || (href !== '/admin' && pathname.startsWith(`${href}/`)); return <Link key={href} href={href} onClick={close} aria-current={active ? 'page' : undefined}><Icon size={17} />{label}</Link> })}</nav><Link className="admin-exit" href="/"><LogOut size={16} /> Back to website</Link></aside>{open && <button className="admin-overlay" aria-label="Close menu" onClick={close} />}</>
}

export function AdminHeader({ onMenu }: { onMenu: () => void }) {
  return <header className="admin-header"><button className="admin-menu" onClick={onMenu} aria-label="Open admin navigation"><Menu size={20} /></button><div><span className="eyebrow">Staff workspace</span><h1>School operations</h1></div><div className="admin-user"><span className="admin-avatar">SA</span><span>School administrator</span></div></header>
}

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return <div className="admin-shell"><AdminSidebar open={open} close={() => setOpen(false)} /><div className="admin-content"><AdminHeader onMenu={() => setOpen(true)} /><main className="admin-main">{children}</main></div></div>
}

export function AdminStats({ items }: { items: Array<{ label: string; value: string; detail: string }> }) {
  return <div className="stats">{items.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong><small>{item.detail}</small></div>)}</div>
}

export function AdminPanel({ title, description, children, action }: { title: string; description?: string; children: React.ReactNode; action?: React.ReactNode }) {
  return <section className="admin-panel"><div className="panel-head"><div><h2>{title}</h2>{description && <p>{description}</p>}</div>{action}</div>{children}</section>
}
