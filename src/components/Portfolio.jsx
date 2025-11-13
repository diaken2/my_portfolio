'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { HolographicCard } from './HolographicCard'
import { ExternalLink, Github, Eye } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "QUANTUM CRM",
    description: "Интеллектуальная CRM система с AI-ассистентом",
    fullDescription: "Революционная CRM платформа, использующая машинное обучение для прогнозирования продаж и автоматизации процессов. Увеличила конверсию клиентов на 67%",
    image: "/project1.jpg",
    tags: ["Next.js", "AI", "TensorFlow", "WebGL"],
    liveUrl: "#",
    githubUrl: "#",
    features: ["AI-аналитика", "3D визуализация", "Real-time дашборд"],
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    id: 2,
    title: "NEURO SHOP",
    description: "Интернет-магазин с нейро-интерфейсом",
    fullDescription: "E-commerce платформа с адаптивным интерфейсом, который подстраивается под поведение пользователя. Увеличила средний чек на 43%",
    image: "/project2.jpg",
    tags: ["React", "Node.js", "MongoDB", "Three.js"],
    liveUrl: "#",
    githubUrl: "#",
    features: ["AR примерка", "Голосовые команды", "Blockchain платежи"],
    gradient: "from-purple-400 to-pink-500"
  },
  {
    id: 3,
    title: "COSMOS DASH",
    description: "Интерактивный дашборд для анализа Big Data",
    fullDescription: "Мощная аналитическая платформа с 3D визуализацией данных в реальном времени. Обрабатывает 1M+ запросов в секунду",
    image: "/project3.jpg",
    tags: ["Vue.js", "D3.js", "WebSocket", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    features: ["3D графика", "Real-time обновления", "ML предсказания"],
    gradient: "from-green-400 to-cyan-500"
  },
  {
    id: 4,
    title: "CYBER BANK",
    description: "Банковское приложение с blockchain",
    fullDescription: "Модерное банковское решение с повышенной безопасностью и мгновенными транзакциями. Снизило операционные затраты на 35%",
    image: "/project4.jpg",
    tags: ["React Native", "Blockchain", "Web3", "Solidity"],
    liveUrl: "#",
    githubUrl: "#",
    features: ["Biometric auth", "Smart contracts", "Crypto payments"],
    gradient: "from-orange-400 to-red-500"
  }
]

export function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.2, type: "spring" }}
            whileHover={{ y: -10 }}
            className="cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <HolographicCard className="h-full">
              <div className="p-8 h-full">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center`}>
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Project Image Placeholder */}
                <div className={`h-48 bg-gradient-to-r ${project.gradient} rounded-2xl mb-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">🚀</div>
                      <div className="text-sm">3D Preview</div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-cyan-300">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </HolographicCard>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <HolographicCard>
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <p className="text-xl text-gray-300">{selectedProject.description}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className={`h-64 bg-gradient-to-r ${selectedProject.gradient} rounded-2xl mb-6`} />
                    <div className="flex gap-4">
                      <button className="flex-1 bg-cyan-500 text-white py-3 rounded-xl font-semibold hover:bg-cyan-600 transition-colors flex items-center justify-center gap-2">
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </button>
                      <button className="flex-1 bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition-colors flex items-center justify-center gap-2">
                        <Github className="w-5 h-5" />
                        Code
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">О проекте</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.fullDescription}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Технологии</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Функции</h4>
                        <ul className="space-y-2">
                          {selectedProject.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-cyan-300">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </HolographicCard>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}