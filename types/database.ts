export interface AdminWhitelist {
  id: string
  email: string
  created_at: string
  updated_at: string
}

export interface Promotion {
  id: string
  studio_type: 'yoga' | 'pilates'
  title: string
  description?: string
  image_url?: string
  link_url?: string
  start_date?: string
  end_date?: string
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  studio_type: 'yoga' | 'pilates'
  title: string
  author: string
  date: string
  excerpt?: string
  full_content: string
  featured_image_url?: string
  created_at: string
  updated_at: string
}

export interface Instructor {
  id: string
  first_name: string
  last_name: string
  bio?: string
  photo_url?: string
  specializations: string[]
  certifications: string[]
  teaches_yoga: boolean
  teaches_pilates: boolean
  created_at: string
  updated_at: string
}

export interface ContactSubmission {
  id: string
  studio_type: 'yoga' | 'pilates'
  name: string
  email: string
  message: string
  created_at: string
}