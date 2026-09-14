import type { Program, Document, Application, NewsArticle, Event, GalleryImage } from '../types'

export const schoolInfo = {
  name: 'ASPEJ',
  fullName: 'Lycée du Lac Muhazi (ASPEJ)',
  tagline: 'Empowering learners through practical technical education.',
  description: 'A private TVET college in Muhazi Sector, Rwamagana District, Rwanda’s Eastern Province.',
  mission: 'Create a good learning environment which meets the Education, Training and Development expectations of our students.',
  vision: 'Empower and prepare students for the labour market and self-employment.',
  manager: 'MUREKATETE Alphonsine',
  phone: '+250 788 591 174',
  email: 'm_alphonsine@yahoo.fr',
  location: 'Muhazi Sector, Rwamagana District, Eastern Province, Rwanda',
}

export const programs: Program[] = [
  {
    id: 'prog-001',
    name: 'Masonry and Construction',
    description:
      'Develop practical skills in construction techniques, materials, measurements, building work, and workplace safety.',
    duration: 'L3–L5',
    requirement: 'See official admission requirements',
  },
  {
    id: 'prog-002',
    name: 'Accounting',
    description:
      'Prepare for finance and accounting roles through bookkeeping, financial records, and business numeracy.',
    duration: 'L3–L5',
    requirement: 'See official admission requirements',
  },
  {
    id: 'prog-003',
    name: 'Tourism',
    description:
      'Prepare for tourism and hospitality work through customer care, tourism services, reservations, communication, and entrepreneurship.',
    duration: 'L3–L5',
    requirement: 'See official admission requirements',
  },
  {
    id: 'prog-004',
    name: 'Networking and Internet Technologies',
    description:
      'Learn to install, configure, maintain, and troubleshoot computer networks and internet-related systems.',
    duration: 'L3–L5',
    requirement: 'See official admission requirements',
  },
  {
    id: 'prog-005',
    name: 'Computer System',
    description:
      'Get computer system skills and IT solutions.',
    duration: 'L4–L5',
    requirement: 'See official admission requirements',
  },
]

export const documents: Document[] = [
  { id: 'doc-001', name: 'Admission guide', detail: 'Official document placeholder', date: 'September 2026' },
  { id: 'doc-002', name: 'Fee structure', detail: 'Official document placeholder', date: 'September 2026' },
  {
    id: 'doc-003',
    name: 'Application requirements',
    detail: 'Official document placeholder',
    date: 'September 2026',
  },
]

export const applications: Application[] = [
  {
    id: 'ASPEJ-260908-014',
    name: 'John Doe',
    email: 'john.doe@example.com',
    program: 'Program placeholder',
    status: 'Under review',
    date: 'Sep 08, 2026',
  },
  {
    id: 'ASPEJ-260907-013',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    program: 'Program placeholder',
    status: 'Approved',
    date: 'Sep 07, 2026',
  },
  {
    id: 'ASPEJ-260906-012',
    name: 'Amina Hassan',
    email: 'amina@example.com',
    program: 'Program placeholder',
    status: 'Pending',
    date: 'Sep 06, 2026',
  },
  {
    id: 'ASPEJ-260905-011',
    name: 'Michael Otieno',
    email: 'michael@example.com',
    program: 'Program placeholder',
    status: 'Rejected',
    date: 'Sep 05, 2026',
  },
]

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-001',
    title: 'New Labs Open for IT Department',
    excerpt: 'ASPEJ has opened state-of-the-art computing facilities for hands-on network training.',
    content: 'Official news content will be added here.',
    date: 'Sep 08, 2026',
  },
  {
    id: 'news-002',
    title: 'Construction Program Graduates Land Jobs',
    excerpt: 'The latest cohort from our construction program has been placed with leading firms.',
    content: 'Official news content will be added here.',
    date: 'Sep 05, 2026',
  },
  {
    id: 'news-003',
    title: 'Tourism Program Partnership Announced',
    excerpt: 'ASPEJ partners with regional hospitality providers for student placements.',
    content: 'Official news content will be added here.',
    date: 'Sep 01, 2026',
  },
]

export const events: Event[] = [
  {
    id: 'event-001',
    title: 'Open Day 2026',
    date: 'October 15, 2026',
    description: 'Tour the campus, meet faculty, and learn about programs.',
  },
  {
    id: 'event-002',
    title: 'Application Deadline',
    date: 'November 30, 2026',
    description: 'Final submission date for 2027 intake applications.',
  },
  {
    id: 'event-003',
    title: 'Graduation Ceremony',
    date: 'December 10, 2026',
    description: 'Celebrate the achievements of our graduating class.',
  },
]

export const galleryImages: GalleryImage[] = [
  { id: 'img-001', title: 'ASPEJ campus', url: '/images/Pixabc.com_Compressed_to_100percent_aspejSchool.jpg' },
  { id: 'img-002', title: 'Computer lab', url: '/images/Pixabc.com_Compressed_to_100percent_computerlab.jpg' },
  { id: 'img-003', title: 'Learning together', url: '/images/Pixabc.com_Compressed_to_100percent_groupworkOfStudent.jpg' },
  { id: 'img-004', title: 'Practical technology', url: '/images/computer.jpg' },
  { id: 'img-005', title: 'Exam preparation', url: '/images/Pixabc.com_Compressed_to_100percent_duringExams.jpg' },
  { id: 'img-006', title: 'Student life', url: '/images/Pixabc.com_Compressed_to_100percent_stutendOfAspej.jpg' },
  { id: 'img-007', title: 'Community in motion', url: '/images/Pixabc.com_Compressed_to_100percent_tourismAspej.jpg' },
]
