export const SITE_CONFIG = {
  name: 'Zentaichi',
  title: 'Full Stack Developer',
  description: 'Building exceptional digital experiences with modern web technologies',
  url: 'https://zentaichi.com',
  github: 'https://github.com/zentaichi',
  linkedin: 'https://linkedin.com/in/ernest-endrino-5893a12b4/',
  email: 'ernest.endrino@gmail.com',
}

export const SKILLS = [
  { name: 'React', category: 'frontend', level: 95 },
  { name: 'Next.js', category: 'frontend', level: 90 },
  { name: 'TypeScript', category: 'frontend', level: 90 },
  { name: 'Tailwind CSS', category: 'frontend', level: 95 },
  { name: 'Node.js', category: 'backend', level: 85 },
  { name: 'PostgreSQL', category: 'backend', level: 80 },
  { name: 'MongoDB', category: 'backend', level: 80 },
  { name: 'Prisma', category: 'backend', level: 85 },
  { name: 'Docker', category: 'devops', level: 75 },
  { name: 'AWS', category: 'devops', level: 70 },
  { name: 'Vercel', category: 'devops', level: 90 },
] as const

export const PROJECTS = [
  {
    id: 1,
    title: 'AI-Powered Analytics Platform',
    description: 'Real-time data visualization dashboard with Next.js 15 and PostgreSQL',
    longDescription: 'A comprehensive analytics platform built with modern web technologies...',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1.com',
    image: '/images/project1.jpg',
    featured: true,
    category: 'web-app',
  },
  {
    id: 2,
    title: 'E-Commerce Marketplace',
    description: 'Full-stack marketplace with payment integration and admin dashboard',
    longDescription: 'Modern e-commerce platform with Stripe integration...',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2.com',
    image: '/images/project2.jpg',
    featured: true,
    category: 'e-commerce',
  },
  {
    id: 3,
    title: 'Mobile App with Expo',
    description: 'Cross-platform mobile application with real-time features',
    longDescription: 'React Native application built with Expo...',
    tech: ['React Native', 'Expo', 'Clerk', 'Zustand', 'Sanity'],
    github: 'https://github.com/yourusername/project3',
    demo: 'https://project3.com',
    image: '/images/project3.jpg',
    featured: false,
    category: 'mobile',
  },
] as const

export const NAVIGATION = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
] as const