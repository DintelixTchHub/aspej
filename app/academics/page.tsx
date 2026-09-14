import Link from 'next/link'
import { ArrowRight, BookOpen, Check, Clock3, Sparkles } from 'lucide-react'
import { InternalPage, PageFrame } from '@/components/layout/public-layout'
import { programs } from '@/lib/data/school'

const programImages = [
	'/images/MasonryandConstruction.jpg',
	'/images/accounting.jpg',
	'/images/Pixabc.com_Compressed_to_100percent_tourismAspej.jpg',
	'/images/Pixabc.com_Compressed_to_100percent_computerlab.jpg',
	'/images/computer.jpg',
]

export default function AcademicsPage() {
	return <InternalPage>
		<main className="programs-page">
			<div className="container">
				<section className="programs-hero">
					<div>
						<span className="eyebrow">Academics / 2026</span>
						<h1>Choose the skill set that moves you forward.</h1>
						<p>Practical technical education for ambitious learners ready to build useful skills, meaningful work, and a confident next step.</p>
						<div className="programs-hero-actions">
							<Link className="button button-primary" href="/admissions/apply">Start an application <ArrowRight size={14} /></Link>
							<Link className="text-button" href="/admissions">See admissions <ArrowRight size={13} /></Link>
						</div>
					</div>
					<div className="programs-hero-note">
						<Sparkles size={19} />
						<strong>Five pathways</strong>
						<span>Built around practical learning and future opportunity.</span>
					</div>
				</section>

				<section className="programs-catalog" aria-labelledby="program-catalog-title">
					<div className="programs-section-heading">
						<div>
							<span className="eyebrow">The catalogue</span>
							<h2 id="program-catalog-title">Learning with a destination.</h2>
						</div>
						<p>Explore the pathways currently represented in the ASPEJ prototype. Official curriculum information will be added as it is confirmed.</p>
					</div>
					<div className="program-catalog-grid">
						{programs.map((program, index) => <article className="program-feature-card" key={program.id}>
							<div className="program-feature-image">
								<img src={programImages[index]} alt={`${program.name} at ASPEJ`} />
								<span>{String(index + 1).padStart(2, '0')}</span>
							</div>
							<div className="program-feature-body">
								<div className="program-feature-meta"><span><Clock3 size={13} /> {program.duration}</span><span>Technical pathway</span></div>
								<h3>{program.name}</h3>
								<p>{program.description}</p>
								<div className="program-feature-footer"><span><Check size={14} /> Entry guidance available</span><Link href="/admissions/apply" aria-label={`Apply for ${program.name}`}><ArrowRight size={17} /></Link></div>
							</div>
						</article>)}
					</div>
				</section>

				<section className="programs-next-step">
					<div><BookOpen size={21} /><div><span className="eyebrow">Your next step</span><h2>Ready to find your place?</h2></div></div>
					<p>Review the admissions process, prepare your documents, and take the first step toward your chosen pathway.</p>
					<Link className="button button-secondary" href="/admissions">View admissions <ArrowRight size={14} /></Link>
				</section>
			</div>
		</main>
	</InternalPage>
}
