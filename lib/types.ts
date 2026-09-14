// School entity types
export type Program = {
  id: string
  name: string
  description: string
  duration: string
  requirement: string
}

export type Document = {
  id: string
  name: string
  detail: string
  date: string
}

export type ApplicationStatus = 'Pending' | 'Under review' | 'Approved' | 'Rejected'

export type Application = {
  id: string
  name: string
  email: string
  program: string
  status: ApplicationStatus
  date: string
}

export type NewsArticle = {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
}

export type Event = {
  id: string
  title: string
  date: string
  description: string
}

export type GalleryImage = {
  id: string
  title: string
  url: string
}

// Navigation and view types
export type PublicView =
  | 'home'
  | 'about'
  | 'academics'
  | 'admissions'
  | 'documents'
  | 'fees'
  | 'news'
  | 'events'
  | 'gallery'
  | 'contact'

export type ApplicantView = 'apply' | 'status'

export type AdminView = 'admin'

export type View = PublicView | ApplicantView | AdminView
