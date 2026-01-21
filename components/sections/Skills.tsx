import { Code, Database, Cloud, Zap, Globe, Terminal } from 'lucide-react'
import { SKILLS } from '@/lib/constants'

const iconMap = {
  frontend: Code,
  backend: Database,
  devops: Cloud,
}

export default function Skills() {
  const skillsByCategory = {
    frontend: SKILLS.filter(s => s.category === 'frontend'),
    backend: SKILLS.filter(s => s.category === 'backend'),
    devops: SKILLS.filter(s => s.category === 'devops'),
  }

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto z-20 relative">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Tech Stack
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Technologies I work with to build amazing products
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {Object.entries(skillsByCategory).map(([category, skills]) => {
            const Icon = iconMap[category as keyof typeof iconMap]
            return (
              <div
                key={category}
                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold capitalize">{category}</h3>
                </div>
                <div className="space-y-3">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-indigo-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}