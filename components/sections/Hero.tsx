'use client'

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center z-20">
        <div className="inline-block mb-6 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300 text-sm backdrop-blur-sm">
          ✨ Available for freelance work
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent">
          Full Stack Developer
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences with modern web technologies.
          Specialized in <span className="text-indigo-400 font-semibold">React</span>, 
          <span className="text-indigo-400 font-semibold"> Next.js</span>, and 
          <span className="text-indigo-400 font-semibold"> TypeScript</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-indigo-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-indigo-500/50 rounded-full font-semibold hover:bg-indigo-500/10 transition-all"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-indigo-500/20 hover:border-indigo-400 transition-all hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-indigo-500/20 hover:border-indigo-400 transition-all hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-indigo-500/20 hover:border-indigo-400 transition-all hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
