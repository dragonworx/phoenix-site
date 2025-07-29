export interface Promo {
  id: string
  studio_type: 'yoga' | 'pilates'
  title: string
  description: string
  image_url: string
  link_url: string
  start_date: string | null
  end_date: string | null
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  studio_type: 'yoga' | 'pilates'
  title: string
  author: string
  date: string
  excerpt: string
  full_content: string
  featured_image_url: string
  created_at: string
  updated_at: string
}

export interface Instructor {
  id: string
  first_name: string
  last_name: string
  bio: string
  photo_url: string
  specializations: string[]
  certifications: string[]
  studios: ('yoga' | 'pilates')[]
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

export interface AdminUser {
  id: string
  email: string
  google_id: string
  created_at: string
  last_login: string
}