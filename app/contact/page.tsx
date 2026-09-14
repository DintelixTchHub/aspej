import Link from 'next/link'
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react'
import { InternalPage } from '@/components/layout/public-layout'
import { schoolInfo } from '@/lib/data/school'

export default function ContactPage() {
  return (
    <InternalPage>
      <main className="contact-page"><div className="container"><section className="contact-hero"><div><span className="eyebrow">Contact ASPEJ</span><h1>Let’s start a useful conversation.</h1><p>Whether you are a future student, parent, educator, or partner, our team is ready to help you find the right next step.</p></div><Sparkles size={74} strokeWidth={1} /></section><div className="contact-intro"><span className="eyebrow">Reach the school</span><h2>Choose the channel that works for you.</h2></div>
        <div className="contact-grid">
          <div className="about-block">
            <MapPin size={16} />
            <h3>Visit the campus</h3>
            <p>{schoolInfo.location}.</p>
          </div>
          <div className="about-block">
            <Phone size={16} />
            <h3>Call the school</h3>
            <p><Link href={`tel:${schoolInfo.phone}`}>{schoolInfo.phone}</Link></p>
          </div>
          <div className="about-block">
            <Mail size={16} />
            <h3>Email the office</h3>
            <p><Link href={`mailto:${schoolInfo.email}`}>{schoolInfo.email}</Link></p>
          </div>
        </div>
        <div className="contact-form-card">
          <h2>Send a message</h2>
          <p>Fill out the form below and the ASPEJ office will respond to you directly.</p>
          <form className="contact-form" action="/contact" method="post">
            <div className="form-row">
              <label className="field"><span>Full name</span><input type="text" name="name" placeholder="Your full name" required /></label>
              <label className="field"><span>Email</span><input type="email" name="email" placeholder="you@example.com" required /></label>
            </div>
            <label className="field"><span>Subject</span><input type="text" name="subject" placeholder="How can we help?" required /></label>
            <label className="field"><span>Message</span><textarea name="message" rows={5} placeholder="Write your message here..." required /></label>
            <button className="button button-primary" type="submit"><Send size={14} /> Send message</button>
          </form>
        </div>
      </div></main>
    </InternalPage>
  )
}
