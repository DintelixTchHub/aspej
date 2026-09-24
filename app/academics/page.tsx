import Link from 'next/link'
import { ArrowRight, BookOpen, Check, Clock3 } from 'lucide-react'
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
						<span className="eyebrow">OUR PROGRAMS</span>
						<h1>Explore Our Programs</h1>
						<p>ASPEJ offers practical programs that help students build useful skills, strengthen their confidence, and prepare for further study or work.</p>
						<div className="programs-hero-actions">
							<Link className="button button-primary" href="/admissions/apply">Apply Now <ArrowRight size={14} /></Link>
							<Link className="text-button" href="/admissions">View admissions <ArrowRight size={13} /></Link>
						</div>
					</div>
					<div className="programs-hero-note">
						<strong>5 practical pathways</strong>
						<span>Aligned with real learning needs and future opportunities.</span>
					</div>
				</section>

				<section className="programs-catalog" aria-labelledby="program-catalog-title">
					<div className="programs-section-heading">
						<div>
							<span className="eyebrow">PROGRAM CATALOGUE</span>
							<h2 id="program-catalog-title">Choose a path that fits your interests.</h2>
						</div>
						<p>Each program is designed to help learners build practical knowledge and prepare for meaningful study and work.</p>
					</div>
					<div className="program-catalog-grid">
						{programs.map((program, index) => (
							<article className="program-feature-card" key={program.id}>
								<div className="program-feature-image">
									<img src={programImages[index]} alt={`${program.name} at ASPEJ`} />
									<span>{String(index + 1).padStart(2, '0')}</span>
								</div>
								<div className="program-feature-body">
									<div className="program-feature-meta">
										<span><Clock3 size={13} /> {program.duration}</span>
										<span>Program</span>
									</div>
									<h3>{program.name}</h3>
									<p>{program.description}</p>
									<div className="program-feature-footer">
										<span><Check size={14} /> Simple application process</span>
										<Link href="/admissions/apply" aria-label={`Apply for ${program.name}`}>
											<ArrowRight size={17} />
										</Link>
									</div>
								</div>
							</article>
						))}
					</div>
				</section>

				<section className="programs-next-step">
					<div>
						<BookOpen size={21} />
						<div>
							<span className="eyebrow">READY TO APPLY?</span>
							<h2>Ready to find your place?</h2>
						</div>
					</div>
					<p>Choose your program and start your application online.</p>
					<Link className="button button-primary" href="/admissions/apply">Apply Now <ArrowRight size={14} /></Link>
				</section>
			</div>
		</main>
	</InternalPage>
}
