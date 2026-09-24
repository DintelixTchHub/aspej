import Link from 'next/link'
import { Mail, MapPin, MessageSquareText, Phone, Send } from 'lucide-react'
import { InternalPage } from '@/components/layout/public-layout'
import { schoolInfo } from '@/lib/data/school'

export default function ContactPage() {
  return (
    <InternalPage>
      <main className="contact-page">
        <div className="container">
          <section className="contact-hero support-hero">
            <div>
              <span className="eyebrow">Application support</span>
              <h1 className='text-white'>Need help with your application?</h1>
              <p>
                Having trouble with your ASPEJ application? Our admissions team is available to help
                prospective students and parents with questions about the application process,
                required documents, programs, and other admission-related matters.
              </p>
            </div>
          </section>

          <section className="support-section">
            <span className="eyebrow">We can help you with</span>
            <h2>Support for every step of your application.</h2>
            <ul className="support-list">
              <li>Understanding the application process</li>
              <li>Choosing a suitable program</li>
              <li>Admission requirements</li>
              <li>Required documents</li>
              <li>Application form assistance</li>
              <li>Application status</li>
              <li>Correction of application information</li>
              <li>Fees and payment information</li>
              <li>Boarding information</li>
              <li>Other admission-related questions</li>
            </ul>
          </section>

          <section className="support-section support-section-compact">
            <div className="contact-intro" style={{ marginBottom: 24 }}>
              <span className="eyebrow">Contact application support</span>
              <h2>Reach the admissions team directly.</h2>
            </div>

            <div className="contact-grid">
              <div className="about-block">
                <Phone size={16} />
                <h3>Call or WhatsApp</h3>
                <p>
                  <Link href={`tel:${schoolInfo.phone}`}>{schoolInfo.phone}</Link>
                </p>
                <p>Available for application-related questions and assistance.</p>
              </div>

              <div className="about-block">
                <Mail size={16} />
                <h3>Email</h3>
                <p>
                  <Link href={`mailto:${schoolInfo.email}`}>{schoolInfo.email}</Link>
                </p>
                <p>For application support and admission inquiries.</p>
              </div>

              <div className="about-block">
                <MapPin size={16} />
                <h3>Admissions support</h3>
                <p>{schoolInfo.fullName}</p>
                <p>{schoolInfo.location}</p>
              </div>
            </div>
          </section>

          <div className="contact-form-card contact-support-form">
            <h2>Send an application support request</h2>
            <p>
              If you are unable to complete your application or have a question about your
              application, fill out the form below.
            </p>

            <form className="contact-form" action="/contact" method="post">
              <div className="form-row">
                <label className="field">
                  <span>Applicant&apos;s full name</span>
                  <input type="text" name="fullName" placeholder="Enter full name" required />
                </label>
                <label className="field">
                  <span>Application number</span>
                  <input type="text" name="applicationNumber" placeholder="Enter application number, if available" />
                </label>
              </div>

              <div className="form-row">
                <label className="field">
                  <span>Phone number</span>
                  <input type="tel" name="phone" placeholder="Enter phone number" required />
                </label>
                <label className="field">
                  <span>Email address</span>
                  <input type="email" name="email" placeholder="Enter email address" required />
                </label>
              </div>

              <label className="field">
                <span>Program applied for</span>
                <select name="program" defaultValue="">
                  <option value="" disabled>
                    Select program
                  </option>
                  <option value="Building Construction">Building Construction</option>
                  <option value="Tourism">Tourism</option>
                  <option value="Networking & Internet Technologies">Networking &amp; Internet Technologies</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="field">
                <span>What do you need help with?</span>
                <select name="issueType" defaultValue="">
                  <option value="" disabled>
                    Select an issue
                  </option>
                  <option value="Application process">Application process</option>
                  <option value="Required documents">Required documents</option>
                  <option value="Application status">Application status</option>
                  <option value="Payment">Payment</option>
                  <option value="Program information">Program information</option>
                  <option value="Personal information correction">Personal information correction</option>
                  <option value="Technical problem">Technical problem</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Describe your problem or question"
                  required
                />
              </label>

              <button className="button button-primary" type="submit">
                <Send size={14} /> Submit support request
              </button>
            </form>
          </div>

          <section className="support-section support-section-compact"
            style={{ paddingTop: 42 }}
          >
            <span className="eyebrow">Before you contact us</span>
            <h2>A few details can help us respond faster.</h2>
            <p className="support-note-text">
              To help us respond quickly, please provide your <strong>full name and application
              number</strong> when contacting the admissions team, if you already have one.
            </p>
            <p className="support-note-text support-note-text-muted">
              Please do not share your password or other confidential login information with anyone.
            </p>

            <div className="contact-grid" style={{ marginTop: 24 }}>
              <div className="about-block">
                <MessageSquareText size={16} />
                <h3>Admissions support</h3>
                <p>{schoolInfo.fullName}</p>
                <p>Muhazi Sector, Rwamagana District</p>
                <p>Eastern Province, Rwanda</p>
              </div>

              <div className="about-block">
                <Phone size={16} />
                <h3>Call admissions</h3>
                <p>
                  <Link href={`tel:${schoolInfo.phone}`}>{schoolInfo.phone}</Link>
                </p>
              </div>

              <div className="about-block">
                <MessageSquareText size={16} />
                <h3>WhatsApp admissions</h3>
                <p>
                  <Link href={`https://wa.me/250788591174`}>Chat on WhatsApp</Link>
                </p>
              </div>

              <div className="about-block">
                <Mail size={16} />
                <h3>Email admissions</h3>
                <p>
                  <Link href={`mailto:${schoolInfo.email}`}>{schoolInfo.email}</Link>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </InternalPage>
  )
}
