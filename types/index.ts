export interface Project {
  id: number
  title: string
  description: string
  longDescription?: string
  tech: string[]
  github?: string
  demo?: string
  image: string
  featured?: boolean
  category: 'web-app' | 'mobile' | 'e-commerce' | 'other'
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'devops'
  level: number
  icon?: string
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface NavigationItem {
  name: string
  href: string
}

export interface SocialLink {
  name: string
  url: string
  icon: any
}