import Link from 'next/link'
import { ArrowRight, Check, ChevronRight, ClipboardCheck, GraduationCap, Sparkles } from 'lucide-react'
import { InternalPage } from '@/components/layout/public-layout'

const steps = ['Choose a program', 'Prepare requirements', 'Apply online', 'Application review', 'Admission decision']

export default function AdmissionsPage() {
	return (
		<InternalPage>
			<main className="admissions-page">
				<div className="container">
					<section className="admissions-hero">
						<div className="admissions-hero-copy">
							<span className="eyebrow">Admissions 2026</span>
							<h1>Start the next chapter with ASPEJ.</h1>
							<p>Choose a practical pathway, prepare your information, and submit an application with confidence.</p>
							<div className="admissions-hero-actions">
								<Link className="button button-primary" href="/admissions/apply">Start an application <ArrowRight size={14} /></Link>
								<Link className="text-button" href="/admissions/requirements">Check requirements <ChevronRight size={14} /></Link>
							</div>
						</div>
						<div className="admissions-hero-visual">
							<img src="/images/Pixabc.com_Compressed_to_100percent_groupworkOfStudent.jpg" alt="ASPEJ students working together" />
							<div className="admissions-hero-badge"><GraduationCap size={16} /><span><strong>Practical learning</strong><small>Skills for work and self-employment</small></span></div>
						</div>
					</section>

					<section className="admissions-journey">
						<div className="admissions-section-heading"><div><span className="eyebrow">Your journey</span><h2>Five clear steps to apply</h2></div><p>Official deadlines and requirements are content placeholders until confirmed by ASPEJ.</p></div>
						<div className="admission-steps">{steps.map((step, index) => <div className="admission-step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < steps.length - 1 && <ChevronRight className="step-arrow" size={14} />}</div>)}</div>
					</section>

					<section className="admissions-start-card">
						<div className="admissions-start-icon"><Sparkles size={20} /></div>
						<div><span className="eyebrow">Ready when you are</span><h2>Your application begins with a choice.</h2><p>The online application guides you through the information ASPEJ may request from applicants.</p></div>
						<Link className="button button-primary" href="/admissions/apply">Apply online <ArrowRight size={14} /></Link>
					</section>

					<section className="admissions-prep-grid">
						<div className="admissions-prep-card admissions-prep-card-featured"><div className="admissions-prep-card-heading"><span className="admissions-card-icon"><ClipboardCheck size={18} /></span><div><span className="eyebrow">Before you begin</span><h2>Prepare your details</h2></div></div><p>Having these details close by will make your application smoother and easier to complete.</p><ul className="check-list">{['Personal and contact information', 'Academic background', 'Program preference', 'Supporting document information'].map((item) => <li key={item}><Check size={14} /> {item}</li>)}</ul></div>
						<div className="admissions-prep-card admissions-requirements-card"><span className="eyebrow">Need the full checklist?</span><h2>Review official requirements first.</h2><p>Use the checklist to understand the documents and information to prepare before starting your application.</p><Link className="button button-secondary" href="/admissions/requirements">View requirements <ArrowRight size={14} /></Link></div>
					</section>
				</div>
			</main>
		</InternalPage>
	)
}
