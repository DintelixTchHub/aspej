import Link from 'next/link'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { InternalPage } from '@/components/layout/public-layout'
import { schoolInfo } from '@/lib/data/school'

const programmeFees = [
  ['Building Construction', 'Level 3'],
  ['Building Construction', 'Level 4'],
  ['Building Construction', 'Level 5'],
  ['Tourism', 'Level 3'],
  ['Tourism', 'Level 4'],
  ['Tourism', 'Level 5'],
  ['Networking & Internet Technologies', 'Level 3'],
  ['Networking & Internet Technologies', 'Level 4'],
  ['Networking & Internet Technologies', 'Level 5'],
]

const includedCosts = [
  'School uniform',
  'Learning materials',
  'Boarding',
  'Meals',
  'Practical training',
  'Examination-related requirements',
  'Student identification and other school requirements',
]

const confirmationItems = [
  'Current fees for your programme and level',
  'Boarding or day-school charges',
  'Required school materials',
  'Payment deadlines',
  'Official payment account/details',
  'Any applicable additional charges',
]

export default function FeesPage() {
  return (
    <InternalPage>
      <main className="fees-page">
        <div className="container">
          <section className="fees-hero">
            <div>
              <span className="eyebrow">Admissions information</span>
              <h1>ASPEJ School Fees</h1>
              <p>Lycée du Lac Muhazi - ASPEJ provides technical and vocational education through a range of programmes. School fees may vary depending on the programme, level of study, and applicable school arrangements.</p>
            </div>
            <div className="fees-hero-note">
              <strong>Need the current amount?</strong>
              <span>Contact the ASPEJ Admissions Office before making any payment.</span>
            </div>
          </section>

          <section className="fees-section" aria-labelledby="programme-fees-title">
            <div className="fees-section-heading">
              <div>
                <span className="eyebrow">Programme fees</span>
                <h2 id="programme-fees-title">Fees by programme and level</h2>
              </div>
              <p>Tuition and other fees are confirmed by the Admissions Office for each student.</p>
            </div>
            <div className="fees-table-wrap">
              <table className="fees-table">
                <thead>
                  <tr><th>Programme</th><th>Level</th><th>Tuition / term</th><th>Other fees</th></tr>
                </thead>
                <tbody>
                  {programmeFees.map(([programme, level]) => <tr key={`${programme}-${level}`}><td>{programme}</td><td>{level}</td><td>Contact Admissions</td><td>Contact Admissions</td></tr>)}
                </tbody>
              </table>
            </div>
          </section>

          <section className="fees-content-grid">
            <div className="fees-section fees-list-section">
              <span className="eyebrow">Planning your costs</span>
              <h2>What may be included</h2>
              <p>Depending on the programme and school arrangements, students may have additional costs related to:</p>
              <ul className="check-list">{includedCosts.map((item) => <li key={item}><span aria-hidden="true">+</span>{item}</li>)}</ul>
              <p className="fees-muted">The exact applicable costs should be confirmed with the school before payment.</p>
            </div>

            <div className="fees-section fees-list-section">
              <span className="eyebrow">Before payment</span>
              <h2>How to confirm your fees</h2>
              <p>Contact the ASPEJ Admissions Office to confirm:</p>
              <ol className="fees-numbered-list">{confirmationItems.map((item, index) => <li key={item}><span>{index + 1}</span>{item}</li>)}</ol>
            </div>
          </section>

          <section className="fees-support-banner">
            <div>
              <span className="eyebrow">Need help?</span>
              <h2>Questions about fees or payment?</h2>
              <p>If you are applying to ASPEJ and need assistance understanding the fees, contact our Application Support team.</p>
            </div>
            <div className="fees-support-actions">
              <Link className="button button-primary" href="/contact">Contact Application Support <ArrowRight size={14} /></Link>
              <a className="button button-secondary" href={`tel:${schoolInfo.phone}`}><Phone size={14} /> Call Admissions</a>
              <a className="button button-secondary" href="https://wa.me/250788591174"><MessageCircle size={14} /> WhatsApp Admissions</a>
            </div>
          </section>
        </div>
      </main>
    </InternalPage>
  )
}
