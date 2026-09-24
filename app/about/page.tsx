import { ArrowRight, BookOpen, GraduationCap, HeartHandshake, Target } from 'lucide-react'
import Link from 'next/link'
import { InternalPage } from '@/components/layout/public-layout'
import { programs, schoolInfo } from '@/lib/data/school'

export default function AboutPage() {
  return (
    <InternalPage>
      <main className="about-page">
        <div className="container">
          <section className="about-hero">
            <div className="about-hero-copy">
              <span className="eyebrow">About ASPEJ</span>
              <h1>Empowering young people through technical and vocational education.</h1>
              <p>
                {schoolInfo.fullName} is a private Technical Secondary School located in{' '}
                {schoolInfo.location}. The school has a long history of providing technical and
                vocational education to young people, with roots dating back to 1988.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/academics">
                  Explore programs <ArrowRight size={14} />
                </Link>
                <Link className="button button-secondary" href="/admissions/apply">
                  Apply now <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="about-hero-visual">
              <img
                src="/images/Pixabc.com_Compressed_to_100percent_aspejSchool.jpg"
                alt="ASPEJ campus"
              />
              <div className="admissions-hero-badge">
                <GraduationCap size={16} />
                <span>
                  <strong>Learning with purpose</strong>
                  <small>Skills for work and self-employment</small>
                </span>
              </div>
            </div>
          </section>

          <section className="about-purpose">
            <span className="eyebrow">Our history</span>
            <h2>A long-standing part of Rwanda’s technical education landscape.</h2>
            <p>
              Lycée du Lac Muhazi ASPEJ has been part of Rwanda’s technical education sector for
              decades. The school dates back to 1988 and has contributed to the education and
              development of young people through technical and vocational training. In 2017, the
              school reported having produced approximately 5,000 graduates with A2-level diplomas.
            </p>
          </section>

          <div className="about-values">
            <article>
              <BookOpen size={20} />
              <span className="eyebrow">Vision</span>
              <h2>Preparing learners for the future</h2>
              <p>{schoolInfo.vision}</p>
            </article>

            <article>
              <Target size={20} />
              <span className="eyebrow">Mission</span>
              <h2>Practical learning with purpose</h2>
              <p>{schoolInfo.mission}</p>
            </article>

            <article>
              <HeartHandshake size={20} />
              <span className="eyebrow">Community</span>
              <h2>Progress shared together</h2>
              <p>
                ASPEJ serves young people in Muhazi Sector and the wider community through practical
                education, student development, and opportunities that strengthen Rwanda’s growth.
              </p>
            </article>
          </div>

          <section className="about-leadership">
            <div>
              <span className="eyebrow">Technical & vocational education</span>
              <h2>Combining academic learning with practical skills.</h2>
            </div>
            <p>
              ASPEJ focuses on technical and vocational education that blends classroom learning with
              hands-on experience. The school’s accredited programs are offered at Levels 3, 4 and 5
              according to NESA records, supporting students with the knowledge and competencies
              needed for employment, self-employment, and further study.
            </p>
          </section>

          <section className="about-purpose" style={{ paddingTop: 20 }}>
            <span className="eyebrow">Programs</span>
            <h2>Practical pathways for different interests and goals.</h2>
            <p>
              Today, ASPEJ provides technical education and practical skills through programs in
              Building Construction, Tourism, and Networking &amp; Internet Technologies.
            </p>

            <div className="program-list" style={{ marginTop: 24 }}>
              {programs.map((program) => (
                <div key={program.id} className="program-row" style={{ padding: '18px 0' }}>
                  <div>
                    <h3 style={{ margin: '0 0 6px', fontSize: 18 }}>{program.name}</h3>
                    <p style={{ margin: 0 }}>{program.description}</p>
                  </div>
                  <dl style={{ margin: 0 }}>
                    <div>
                      <dt style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>Level</dt>
                      <dd style={{ margin: '4px 0 0' }}>{program.duration}</dd>
                    </div>
                  </dl>
                  <Link className="button button-secondary" href="/academics">
                    View program
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="about-purpose" style={{ paddingTop: 20 }}>
            <span className="eyebrow">Investing in better learning</span>
            <h2>Improving the learning environment for students and the community.</h2>
            <p>
              In 2017, the Association des Parents pour la Promotion de l’éducation des Jeunes
              (ASPEJ) implemented a classroom renovation project at Muhazi Lake Vocational School
              with funding from the Government of Japan through its Grant Assistance for Grass-Roots
              Human Security Projects. The project rehabilitated two school buildings containing 14
              classrooms and was designed to improve the learning environment for more than 800
              students.
            </p>
          </section>

          <section className="about-purpose" style={{ paddingTop: 20 }}>
            <span className="eyebrow">Key facts</span>
            <h2>Essential information about ASPEJ.</h2>

            <div className="about-fact-grid" style={{ marginTop: 24 }}>
              <div className="about-fact-item">
                <h3>School Name</h3>
                <p>{schoolInfo.fullName}</p>
              </div>
              <div className="about-fact-item">
                <h3>Location</h3>
                <p>{schoolInfo.location}</p>
              </div>
              <div className="about-fact-item">
                <h3>School Type</h3>
                <p>Private Technical Secondary School (TSS)</p>
              </div>

              <div className="about-fact-item">
                <h3>Boarding</h3>
                <p>Boarding school</p>
              </div>
              <div className="about-fact-item">
                <h3>Technical Programs</h3>
                <p>Building Construction; Tourism; Networking &amp; Internet Technologies</p>
              </div>
              <div className="about-fact-item">
                <h3>Accredited Levels</h3>
                <p>Level 3 Level 5</p>
              </div>

              <div className="about-fact-item">
                <h3>School History</h3>
                <p>Dating back to 1988</p>
              </div>
              <div className="about-fact-item">
                <h3>Community</h3>
                <p>Serving young people in Muhazi Sector and Rwanda’s wider development</p>
              </div>
              <div className="about-fact-item">
                <h3>Focus</h3>
                <p>Practical training and skills for work, further learning, and entrepreneurship</p>
              </div>
            </div>
          </section>

          <section className="section" style={{ paddingTop: 36, paddingBottom: 32 }}>
            <div className="container" style={{ width: '100%' }}>
              <div className="section-heading" style={{ marginBottom: 16 }}>
                <div>
                  <span className="eyebrow">Looking toward the future</span>
                  <h2>Discover ASPEJ.</h2>
                </div>
              </div>

              <div
                className="programs-next-step"
                style={{ gridTemplateColumns: '1fr auto auto', alignItems: 'center' }}
              >
                <p style={{ margin: 0 }}>
                  Learn more about our programs, admissions, and opportunities at Lycée du Lac
                  Muhazi ASPEJ.
                </p>
                <Link className="button button-secondary" href="/academics">
                  Explore programs
                </Link>
                <Link className="button button-primary" href="/admissions/apply">
                  Apply now <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </InternalPage>
  )
}
