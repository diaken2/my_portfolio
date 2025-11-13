'use client'

import { motion } from 'framer-motion'
import { HolographicCard } from './HolographicCard'
import { Code, Palette, Zap, Rocket, Award, Globe } from 'lucide-react'

export function AboutSection() {
  const stats = [
    { number: "50+", label: "Завершенных проектов", icon: Rocket },
    { number: "3+", label: "Года опыта", icon: Award },
    { number: "99%", label: "Довольных клиентов", icon: Globe },
    { number: "47%", label: "Средний рост конверсии", icon: Zap }
  ]

  const skills = [
    { name: "Frontend Magic", level: 98, color: "from-cyan-400 to-blue-500" },
    { name: "AI Integration", level: 95, color: "from-purple-400 to-pink-500" },
    { name: "3D Graphics", level: 92, color: "from-green-400 to-cyan-500" },
    { name: "Blockchain", level: 88, color: "from-orange-400 to-red-500" },
    { name: "UX Alchemy", level: 96, color: "from-yellow-400 to-orange-500" }
  ]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl font-black text-center text-white mb-20"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            ОБО МНЕ
          </span>
        </motion.h2>

        {/* Основная информация */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <HolographicCard>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-6">Кенан Салахов</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Я - <span className="text-cyan-400 font-semibold">Digital Alchemist</span>, превращающий обычные идеи в экстраординарные цифровые произведения искусства. 
                  Моя миссия - создавать не просто функциональные продукты, а настоящие digital-шедевры, которые вызывают эмоции.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Специализируюсь на создании инновационных веб-решений, объединяющих передовые технологии с безупречным дизайном. 
                  Каждый мой проект - это уникальное путешествие в мир цифровых возможностей.
                </p>
              </div>
            </HolographicCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <HolographicCard key={stat.label} className="h-full">
                <div className="p-6 text-center">
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${
                    index === 0 ? 'text-cyan-400' :
                    index === 1 ? 'text-purple-400' :
                    index === 2 ? 'text-green-400' : 'text-orange-400'
                  }`} />
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              </HolographicCard>
            ))}
          </motion.div>
        </div>

        {/* Навыки с анимированными прогресс-барами */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <HolographicCard>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">МОИ СУПЕРСИЛЫ</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-semibold">{skill.name}</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1, duration: 1.5, type: "spring" }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <motion.div
                          animate={{ 
                            opacity: [0, 1, 0],
                            x: [-100, 100]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: index * 0.3
                          }}
                          className="absolute inset-0 bg-white/30 blur-sm"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </HolographicCard>
        </motion.div>
      </div>
    </section>
  )
}