# 🚀 Modern Developer Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A cutting-edge portfolio website showcasing modern web development skills with stunning animations and optimal performance.**

[Live Demo](https://yoursite.com) · [Report Bug](https://github.com/yourusername/portfolio/issues) · [Request Feature](https://github.com/yourusername/portfolio/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

This portfolio is a modern, high-performance web application built with Next.js 15 and TypeScript. It demonstrates advanced web development capabilities including:

- **Responsive Design**: Flawless experience across all devices
- **Interactive Animations**: Smooth, engaging user interactions
- **Performance Optimized**: Lighthouse score of 95+
- **SEO Ready**: Built-in metadata and Open Graph support
- **Type-Safe**: Full TypeScript implementation
- **Modern UI/UX**: Clean, professional design with glassmorphism effects

### Why This Portfolio?

Unlike traditional portfolios, this project showcases:
- ✅ Production-ready code architecture
- ✅ Industry best practices
- ✅ Scalable component structure
- ✅ Modern animation techniques
- ✅ Optimal performance patterns

---

## ✨ Features

### 🎨 **Design & UI**
- **Glassmorphism Effects** - Modern, frosted glass UI components
- **Particle Network Background** - Interactive animated canvas
- **Cursor Glow Effect** - Dynamic radial gradient following cursor
- **Smooth Scroll Navigation** - Seamless section transitions
- **Gradient Text Animations** - Eye-catching typography
- **Responsive Grid Layouts** - Mobile-first design approach

### ⚡ **Performance**
- **Server-Side Rendering** - Fast initial page loads
- **Code Splitting** - Optimized bundle sizes
- **Image Optimization** - Next.js Image component
- **Lazy Loading** - Components loaded on demand
- **Efficient Animations** - GPU-accelerated transforms

### 🛠️ **Developer Experience**
- **TypeScript** - Full type safety
- **ESLint & Prettier** - Consistent code formatting
- **Component Library** - Reusable UI components
- **State Management** - Zustand for lightweight state
- **Form Validation** - Zod schema validation

---

## 🔧 Tech Stack

### Core Framework
| Technology | Purpose | Version |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | React Framework | 15.x |
| [React](https://react.dev/) | UI Library | 19.x |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety | 5.x |

### Styling & Animation
| Technology | Purpose | Version |
|------------|---------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS | 3.4.x |
| [Framer Motion](https://www.framer.com/motion/) | Animations | 11.x |
| [Lucide React](https://lucide.dev/) | Icon Library | Latest |

### State & Validation
| Technology | Purpose | Version |
|------------|---------|---------|
| [Zustand](https://github.com/pmndrs/zustand) | State Management | 4.5.x |
| [Zod](https://zod.dev/) | Schema Validation | 3.x |

### Development Tools
| Tool | Purpose |
|------|---------|
| pnpm | Package Manager |
| ESLint | Code Linting |
| Prettier | Code Formatting |
| PostCSS | CSS Processing |

### Optional Integrations
- **Sanity / Contentful** - Headless CMS
- **Resend** - Email API
- **Vercel Analytics** - Web Analytics

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17 or later ([Download](https://nodejs.org/))
- **pnpm** 8.0 or later (recommended)
  ```bash
  npm install -g pnpm
  ```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration (see [Environment Variables](#environment-variables))

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Email Service (Optional - for contact form)
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your.email@example.com

# CMS (Optional - choose one)
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token

# Contentful
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_token

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   └── api/                     # API routes (optional)
│       └── contact/
│           └── route.ts
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/                # Page sections
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── effects/                 # Visual effects
│       ├── ParticleNetwork.tsx
│       └── CursorGlow.tsx
├── lib/                         # Utility functions
│   ├── utils.ts                 # Helper functions
│   ├── constants.ts             # App constants
│   └── sanity/                  # CMS integration (optional)
│       └── client.ts
├── store/                       # State management
│   └── useStore.ts              # Zustand store
├── types/                       # TypeScript definitions
│   └── index.ts
├── public/                      # Static assets
│   ├── images/
│   └── fonts/
├── .env.local                   # Environment variables
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

### Key Directories Explained

- **`app/`** - Next.js 15 App Router with file-based routing
- **`components/`** - Modular, reusable React components organized by type
- **`lib/`** - Business logic, utilities, and external integrations
- **`store/`** - Centralized state management with Zustand
- **`types/`** - TypeScript type definitions and interfaces

---

## 💻 Usage

### Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Format code
pnpm format

# Type check
pnpm type-check
```

### Component Usage

#### Using the Button Component

```tsx
import Button from '@/components/ui/Button'

export default function Example() {
  return (
    <Button variant="primary" size="lg">
      Click Me
    </Button>
  )
}
```

#### Using the Card Component

```tsx
import Card from '@/components/ui/Card'

export default function Example() {
  return (
    <Card variant="glass">
      <h3>Card Title</h3>
      <p>Card content goes here</p>
    </Card>
  )
}
```

---

## 🎨 Customization

### Updating Personal Information

Edit `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your Description',
  url: 'https://yoursite.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  email: 'your.email@example.com',
}
```

### Adding Skills

Update the `SKILLS` array in `lib/constants.ts`:

```typescript
export const SKILLS = [
  { name: 'React', category: 'frontend', level: 95 },
  { name: 'Your Skill', category: 'backend', level: 85 },
  // Add more skills...
]
```

### Adding Projects

Update the `PROJECTS` array in `lib/constants.ts`:

```typescript
export const PROJECTS = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Short description',
    tech: ['React', 'Node.js'],
    github: 'https://github.com/...',
    demo: 'https://demo.com',
    image: '/images/project.jpg',
    featured: true,
    category: 'web-app',
  },
  // Add more projects...
]
```

### Customizing Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        600: '#your-color',
        // Add more shades...
      },
    },
  },
}
```

### Modifying Animations

Adjust animation settings in `tailwind.config.ts`:

```typescript
animation: {
  'custom': 'custom-animation 3s ease-in-out infinite',
},
keyframes: {
  'custom-animation': {
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.1)' },
  },
}
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` triggers a new deployment
   - Preview deployments for pull requests

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
pnpm build

# Deploy
netlify deploy --prod
```

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- **AWS Amplify**
- **Railway**
- **Render**
- **DigitalOcean App Platform**

---

## 📊 Performance

This portfolio is optimized for maximum performance:

### Lighthouse Scores (Target)

| Metric | Score |
|--------|-------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

### Key Optimizations

- ✅ **Image Optimization** - Next.js Image component with WebP format
- ✅ **Code Splitting** - Automatic route-based splitting
- ✅ **Tree Shaking** - Removes unused code
- ✅ **Minification** - Production builds are minified
- ✅ **Caching** - Static assets cached with optimal headers
- ✅ **Font Optimization** - Next.js font optimization
- ✅ **CSS Optimization** - Tailwind CSS purging

### Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Specify width and height
   - Use `priority` for above-fold images

2. **Lazy Load Components**
   ```tsx
   const Component = dynamic(() => import('./Component'), {
     loading: () => <p>Loading...</p>
   })
   ```

3. **Use Server Components**
   - Default in Next.js 15 App Router
   - Reduces client-side JavaScript

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Coding Standards

- Follow the existing code style
- Use TypeScript for all new code
- Add comments for complex logic
- Update documentation as needed
- Write meaningful commit messages

### Reporting Bugs

Please use the [issue tracker](https://github.com/yourusername/portfolio/issues) to report bugs. Include:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 📧 Contact

**Your Name** - Full Stack Developer

- 🌐 Website: [yoursite.com](https://yoursite.com)
- 💼 LinkedIn: [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
- 🐙 GitHub: [github.com/yourusername](https://github.com/yourusername)
- 📧 Email: your.email@example.com
- 🐦 Twitter: [@yourusername](https://twitter.com/yourusername)

**Project Link:** [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

## 🙏 Acknowledgments

### Resources & Inspiration

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Examples](https://www.framer.com/motion/)
- [Vercel Design System](https://vercel.com/design)

### Tools & Libraries

- **Next.js** - The React framework for production
- **Tailwind CSS** - For rapid UI development
- **Lucide Icons** - Beautiful, consistent icons
- **Vercel** - For seamless deployment
- **TypeScript** - For type-safe code

### Community

Special thanks to:
- The Next.js team for an amazing framework
- The Tailwind CSS team for revolutionizing CSS
- The open-source community for continuous inspiration
- All contributors who help improve this project

---

## 📈 Roadmap

Future enhancements planned:

- [ ] Dark/Light mode toggle
- [ ] Blog section with MDX support
- [ ] Testimonials section
- [ ] Project case studies with detailed pages
- [ ] Multi-language support (i18n)
- [ ] Advanced animations with Three.js
- [ ] Integration with CMS (Sanity/Contentful)
- [ ] RSS feed generation
- [ ] Newsletter subscription
- [ ] Performance monitoring dashboard

---

## 📱 Browser Support

This portfolio is tested and supported on:

| Browser | Version |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |

### Mobile Browsers

- iOS Safari 14+
- Chrome Android Latest
- Samsung Internet Latest

---

## 🎓 Learning Resources

If you're new to the technologies used:

### Next.js
- [Next.js Learn Course](https://nextjs.org/learn)
- [Next.js Documentation](https://nextjs.org/docs)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

### Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### React
- [React Documentation](https://react.dev/)
- [React Patterns](https://reactpatterns.com/)

---

<div align="center">

**⭐ If you found this helpful, please give it a star!**

Made with ❤️ by [Zentaichi](https://github.com/yourusername)

[Back to Top](#-modern-developer-portfolio)

</div>