import { ArrowRight, ArrowUpRight, Camera, Images } from 'lucide-react'
import { InternalPage } from '@/components/layout/public-layout'
import { galleryImages } from '@/lib/data/school'

const galleryCategories = ['Campus', 'Learning', 'Community', 'Identity']

export default function GalleryPage() {
	return <InternalPage><main className="gallery-page"><div className="container"><section className="gallery-hero"><div className="gallery-hero-copy"><span className="eyebrow">Gallery / 2026 collection</span><h1>The places where possibility takes shape.</h1><p>A visual archive of ASPEJ spaces, practical learning, and the people who bring the school to life.</p><a className="button button-primary" href="#collection">Explore the collection <ArrowRight size={14} /></a></div><div className="gallery-hero-visual"><img src="/images/Pixabc.com_Compressed_to_100percent_aspejSchool.jpg" alt="ASPEJ campus" /><div className="admissions-hero-badge"><Images size={16} /><span><strong>ASPEJ in focus</strong><small>Campus, learning, and community</small></span></div></div></section><div id="collection">
		<div className="gallery-intro-row">
			<div className="gallery-count"><strong>08</strong><span>views into<br />ASPEJ life</span></div>
			<p>A portrait of the places, people, and practical learning that shape everyday life at Lycée du Lac Muhazi.</p>
			<div className="gallery-categories">{galleryCategories.map((category) => <span key={category}>{category}</span>)}</div>
		</div>
		<div className="gallery-grid">
			{galleryImages.map((image, index) => <article className={`gallery-card gallery-card-${index + 1}`} key={image.id}>
				<div className="gallery-placeholder"><img src={image.url} alt={image.title} /><span className="gallery-number">0{index + 1}</span></div>
				<div className="gallery-card-meta"><div><span className="eyebrow">{galleryCategories[index % galleryCategories.length]}</span><strong>{image.title}</strong></div><ArrowUpRight size={18} /></div>
			</article>)}
		</div>
		<div className="gallery-footnote"><Camera size={17} /><span>Have a school moment to share?</span><a href="mailto:m_alphonsine@yahoo.fr">Send it to the ASPEJ team <ArrowUpRight size={14} /></a></div></div></div></main></InternalPage>
}
