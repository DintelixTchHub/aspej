import Link from "next/link";
import { ArrowRight, Bell, GraduationCap, ShieldCheck } from "lucide-react";
import {
  PublicLayout,
  HomeCard,
  SectionTitle,
} from "@/components/layout/public-layout";
import { events, newsArticles, programs, schoolInfo } from "@/lib/data/school";

const programImages: Record<string, { src: string; alt: string }> = {
  "prog-001": {
    src: "/images/MasonryandConstruction.jpg",
    alt: "ASPEJ campus and grounds",
  },
  "prog-002": {
    src: "/images/accounting.jpg",
    alt: "ASPEJ students working during an exam",
  },
  "prog-003": {
    src: "/images/Pixabc.com_Compressed_to_100percent_tourismAspej.jpg",
    alt: "ASPEJ tourism students learning together",
  },
  "prog-004": {
    src: "/images/Pixabc.com_Compressed_to_100percent_computerlab.jpg",
    alt: "ASPEJ students in a computer lab",
  },
   "prog-005": {
    src: "/images/computer.jpg",
    alt: "ASPEJ students in a computer lab",
  },
};

export default function HomePage() {
  return (
    <PublicLayout>
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">ASPEJ — Practical Education for Your Future</span>
              <h1>Build the skills to learn, work, and grow.</h1>
              <p>
                ASPEJ offers practical technical education in tourism,
                building construction, accounting, networking, and computer
                systems—helping students prepare for further study and the world
                of work.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary admissions-signal-button" href="/admissions">
                  <span className="admissions-signal" aria-hidden="true"><i /><i /><i /></span>
                  Apply Now <ArrowRight size={14} />
                </Link>
                <Link className="button button-secondary" href="/academics">
                  Explore Programs
                </Link>
              </div>
              <p className="hero-note">
                <ShieldCheck size={14} /> Practical, accessible learning for
                students, families, and future careers.
              </p>
            </div>
            <div className="school-visual">
              <img
                src="/images/Pixabc.com_Compressed_to_100percent_aspejSchool.jpg"
                alt="ASPEJ campus in Rwamagana District"
              />
              <div className="visual-label">
                <span className="visual-icon">
                  <GraduationCap size={14} />
                </span>
                <div>
                  <strong>Lycée du Lac Muhazi</strong>
                  <small>ASPEJ campus, Rwamagana District</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="notice-strip">
          <div className="container notice-inner">
            <Bell size={14} />
            <span>
              <strong>New to ASPEJ?</strong> Start with the admissions guide and
              application requirements.
            </span>
            <Link href="/admissions/requirements">
              View requirements <ArrowRight size={13} />
            </Link>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Start here"
              title="Find the information you need"
              description="Simple routes to the most important parts of the ASPEJ experience."
            />
            <div className="quick-links">
              <HomeCard
                href="/academics"
                title="Academics"
                description="Explore programs and departments."
              />
              <HomeCard
                href="/admissions"
                title="Admissions"
                description="Understand the application process."
                signal
              />
              <HomeCard
                href="/news"
                title="School news"
                description="Read the latest school updates."
              />
            </div>
          </div>
        </section>
        <section className="section section-muted">
          <div className="container split-section">
            <div>
              <span className="eyebrow">A practical foundation</span>
              <h2>Learning connected to real needs.</h2>
              <p className="lead">
                ASPEJ provides technical and vocational education that prepares
                young people for employment, self-employment, and further
                education.
              </p>
              <Link className="text-button" href="/about">
                Discover our purpose <ArrowRight size={13} />
              </Link>
            </div>
            <div className="principles">
              <div>
                <strong>01</strong>
                <p>
                  <b>Relevant skills.</b>
                  <br />
                  Learning designed around practical competencies.
                </p>
              </div>
              <div>
                <strong>02</strong>
                <p>
                  <b>Professional values.</b>
                  <br />
                  Confidence, creativity, and problem-solving.
                </p>
              </div>
              <div>
                <strong>03</strong>
                <p>
                  <b>Shared progress.</b>
                  <br />A community built for students and families.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionTitle
              eyebrow="From ASPEJ"
              title="Latest updates"
              description="A preview of news and upcoming school moments."
            />
            <div className="news-grid">
              <article className="news-feature">
                <span className="eyebrow">{newsArticles[0].date}</span>
                <h3>{newsArticles[0].title}</h3>
                <p>{newsArticles[0].excerpt}</p>
                <Link className="text-button" href="/news">
                  Read school news <ArrowRight size={13} />
                </Link>
              </article>
              <div className="event-list">
                {events.map((event) => (
                  <div key={event.id}>
                    <span>{event.date}</span>
                    <strong>{event.title}</strong>
                    <small>{event.description}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section section-muted">
          <div className="container">
            <SectionTitle
              eyebrow="Programs"
              title="Build skills for what comes next"
              description="Explore the technical pathways currently represented in this prototype."
            />
            <div className="program-card-grid">
              {programs.map((program) => {
                const image = programImages[program.id];

                return (
                  <article className="program-card" key={program.id}>
                    <div className="program-card-image">
                      <img src={image.src} alt={image.alt} />
                      <span>{program.duration}</span>
                    </div>
                    <div className="program-card-body">
                      <span className="eyebrow">Technical pathway</span>
                      <h3>{program.name}</h3>
                      <p>{program.description}</p>
                      <Link className="text-button" href="/academics">
                        View program <ArrowRight size={13} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}
