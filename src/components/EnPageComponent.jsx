'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight, Code, CheckCircle, MessageCircle, Mail, Calendar, Clock, Shield, TrendingUp, FileText, ChevronRight, MapPin, X, ExternalLink, Github, Star, Users, Zap, Briefcase, Play, Pause, Phone, Globe } from 'lucide-react'
import Image from 'next/image';
export const dynamic = 'force-static';

export default function EnDeveloperPortfolio() {
  const [isClient, setIsClient] = useState(false)
  const [activeTab, setActiveTab] = useState('startup')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
   
  const [formData, setFormData] = useState({
    projectDescription: '',
    budget: '',
    contact: '',
    name: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
console.log(formData)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contactEn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ projectDescription: '', budget: '', contact: '', name: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  useEffect(() => {
    setIsClient(true)
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: 'Europe/Moscow'
      })
      setCurrentTime(timeString)
    }
    
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  const portfolioItems = [
  {
  id: 5,
  title: "ViralBear — Video Content Management Platform",
  description: "Comprehensive system for video library management and RSS feed processing",
  shortDescription: "Automation of video content management and distribution workflows",
  tech: ["React", "Node.js", "MongoDB", "RSS Parser"],
  results: [
    { metric: "Video Processing", value: "50+", desc: "per day" },
    { metric: "Automation", value: "85%", desc: "of manual processes" },
    { metric: "Audience Reach", value: "+40%", desc: "through RSS distribution" }
  ],
  budget: "$1,300",
  timeline: "3 weeks",
  images: [
    "/projects/viralbear-1.png",
    "/projects/viralbear-2.webp", 
    "/projects/viralbear-3.png"
  ],
  features: [
    "Video file upload and processing",
    "Automatic RSS feed parsing",
    "Content library with tags and categories",
    "Content moderation system",
    "API for integration with other services"
  ],
  challenges: [
    "Handling large video files efficiently",
    "Parsing diverse RSS feed formats",
    "Performance optimization for media operations"
  ],
  liveUrl: "https://viralbear.media",
  githubUrl: null,
  category: "fullstack"
},
    {
      id: 2,
      title: "Content Management Platform", 
      description: "Scalable system for managing tariff plans and promotional campaigns",
      shortDescription: "Enterprise content management system for telecom operations",
      tech: ["Next.js", "Node.js", "MongoDB", "REST API"],
      results: [
        { metric: "Content Publishing", value: "5 minutes", desc: "for new tariffs" },
        { metric: "Automation", value: "100%", desc: "manual processes" },
        { metric: "Integration", value: "3 days", desc: "with existing systems" }
      ],
      budget: "$1,500",
      timeline: "3 weeks",
      images: [
        "/projects/mts-1.png",
        "/projects/mts-2.png",
        "/projects/mts-3.png"
      ],
      features: [
        "Excel data import & manual entry",
        "Discount and promotion system",
        "Content moderation workflow",
        "SEO-optimized interface"
      ],
      challenges: [
        "Complex business logic implementation",
        "Legacy system integration",
        "Data security compliance"
      ],
      liveUrl: "https://mts-s.ru",
      githubUrl: null,
      category: "fullstack"
    },
    {
      id: 3,
      title: "E-commerce Admin Dashboard",
      description: "Product catalog management system for online store",
      shortDescription: "Streamlined product management for e-commerce business",
      tech: ["Next.js", "Node.js", "MongoDB", "Cloudinary"],
      results: [
        { metric: "Product Setup", value: "70%", desc: "faster" },
        { metric: "Data Errors", value: "-85%", desc: "in catalog" },
        { metric: "Staff Training", value: "30 min", desc: "for new managers" }
      ],
      budget: "$950",
      timeline: "10 days",
      images: [
        "/projects/svb-en-1.png",
        "/projects/svb-en-2.png",
       
      ],
      features: [
        "Bulk product import/editing",
        "Image upload with auto-optimization",
        "Category & filter management",
        "Inventory & price control"
      ],
      challenges: [
        "Large media file handling",
        "Main system synchronization",
        "Non-technical user interface"
      ],
      liveUrl: "https://svb-shop.ru",
      githubUrl: null,
      category: "backend"
    }
  ]

  const experience = [
    {
      period: "2021 - Present",
      title: "Fullstack Developer",
      company: "Freelance",
      description: "Developing fullstack applications for clients across various industries. Specializing in React, Next.js and Node.js with focus on business results.",
      projects: "50+ completed projects",
      technologies: ["React/Next.js", "Node.js/Express", "MongoDB/PostgreSQL", "TypeScript", "REST API"]
    },
    {
      period: "2020 - 2021", 
      title: "Frontend Developer",
      company: "Career Start",
      description: "Learning modern technologies, first commercial projects. Focus on frontend development and client communication.",
      projects: "First 10+ projects",
      technologies: ["HTML/CSS/JS", "React", "REST API", "Git"]
    }
  ]

  const services = [
    {
      title: "Startup Package", 
      description: "Perfect for MVPs, landing pages, and small business applications",
      price: "from $800",
      duration: "1-2 weeks",
      features: ["Full-stack development", "Database design", "Deployment", "14-day support"],
      cta: "Discuss Project", 
      type: "startup",
      popular: true
    },
    {
      title: "Business Solutions",
      description: "Complete projects: from analysis to launch and maintenance",
      price: "from $1,500",
      duration: "3-4 weeks",
      features: ["Architecture planning", "Team coordination", "1-month warranty", "Technical documentation"],
      cta: "Book Slot",
      type: "business",
      popular: false
    },
    {
      title: "Enterprise Systems",
      description: "Complex CRM, management systems and scalable applications",
      price: "from $3,000",
      duration: "4-6 weeks",
      features: ["Advanced architecture", "API integration", "3-month support", "Performance optimization"],
      cta: "Schedule Call",
      type: "enterprise",
      popular: false
    }
  ]

  const workProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, define goals and create technical specification. Typically takes 1-2 days.",
      duration: "1-2 days"
    },
    {
      step: "02", 
      title: "Prototyping & Design",
      description: "Create interface prototype and system architecture. Get your approval before development.",
      duration: "2-3 days"
    },
    {
      step: "03",
      title: "Development & Updates",
      description: "Code development with regular demos (every 3-4 days). You see progress in real-time.",
      duration: "1-3 weeks"
    },
    {
      step: "04",
      title: "Testing & Delivery",
      description: "Thorough testing, training and final project delivery with documentation.",
      duration: "3-5 days"
    }
  ]

  const principles = [
    {
      icon: Shield,
      title: "50% Advance Payment",
      description: "Work with contract and result guarantee"
    },
    {
      icon: Calendar, 
      title: "3 Projects Monthly",
      description: "Focus on quality for each project"
    },
    {
      icon: Clock,
      title: "Clear Deadlines",
      description: "Strict adherence to agreed timelines"
    },
    {
      icon: TrendingUp,
      title: "Business Focus",
      description: "Solutions that save time and money"
    }
  ]

  const testimonials = [
    {
      name: "Michael Johnson, Product Manager",
      position: "Tech Startup",
      text: "Kenan developed a booking system for our photographer network. Excellent work! Clients can now self-schedule sessions, saving us 3-4 hours daily on coordination. Smooth integration and intuitive interface.",
      rating: 5,
      project: "Booking System for Photographers",
      platform: "Upwork",
      verified: true
    },
    {
      name: "Sarah Chen, CEO",
      position: "EdTech Company",
      text: "We built a learning management system for language school. Kenan implemented complex scheduling logic, student progress tracking and report generation. Reduced admin time by approximately 70%. Professional approach to challenging tasks!",
      rating: 5,
      project: "LMS for Language School",
      platform: "Direct",
      verified: true
    },
    {
      name: "David Martinez, CTO",
      position: "Media Company",
      text: "Kenan solved complex problems where others said 'impossible'. Implemented MRSS feed and Excel/XML generation system. Already 3 successful projects together. Highly recommended for non-trivial tasks.",
      rating: 5,
      project: "MRSS Feed & Reporting System",
      platform: "Upwork",
      verified: true
    }
  ]

  const stats = [
    { number: "50+", label: "completed projects" },
    { number: "94%", label: "client satisfaction" },
    { number: "2-3", label: "weeks average timeline" },
    { number: "24/7", label: "support in working hours" }
  ]

  const technologies = [
    { category: "Frontend", items: ["React/Next.js", "TypeScript", "Tailwind CSS", "Redux/Zustand"] },
    { category: "Backend", items: ["Node.js/Express", "Nest.js", "REST API", "GraphQL"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"] },
    { category: "Infrastructure", items: ["Docker", "AWS/Vercel", "CI/CD", "Nginx"] }
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Kenan</div>
              <div className="text-sm text-gray-600">Fullstack Developer</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-8">
            {['services', 'process', 'portfolio', 'experience', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm capitalize"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm flex items-center gap-2"
          >
            <Zap className="w-4 h-4" />
            Start Project
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-800">
              🚀 Available for new projects • UTC+3 {currentTime}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Fullstack Developer<br />
            <span className="text-blue-600">Focused on Business Results</span>
          </motion.h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            I build web applications that solve real business problems. From quick fixes to complex systems - 
            delivering solutions that save time and drive growth.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center gap-3 group"
            >
              <FileText className="w-5 h-5" />
              Start Your Project
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://t.me/Krivk7"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-400 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Message on Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Development Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your business needs and timeline
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              {services.map((service) => (
                <button 
                  key={service.type}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === service.type 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab(service.type)}
                >
                  {service.type === 'startup' && '🚀 Startup'}
                  {service.type === 'business' && '💼 Business'}  
                  {service.type === 'enterprise' && '🏢 Enterprise'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services
              .filter(service => service.type === activeTab)
              .map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 bg-white relative ${
                    service.popular ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                    <span className="text-gray-500 text-sm">/{service.duration}</span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors text-sm ${
                      service.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {service.cta}
                  </button>
                </motion.div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Development Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent workflow from initial discussion to project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <span className="text-blue-600 text-sm font-medium bg-blue-50 px-2 py-1 rounded">
                      {step.duration}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-gray-600">Modern tools for quality development</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((techCategory, index) => (
              <div key={techCategory.category} className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{techCategory.category}</h3>
                <div className="space-y-2">
                  {techCategory.items.map((tech, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg px-3 py-2">
                      <span className="text-gray-700 text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-gray-600">My journey in development</p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <span className="text-blue-600 font-medium text-sm bg-blue-50 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gray-900 font-medium">{exp.company}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded">
                        {exp.projects}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real projects with measurable business results for companies across different industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => openProjectModal(item)}
              >
                <div className="h-48 relative overflow-hidden">
                  {item.images && item.images.length > 0 ? (
                    <Image 
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
                      <div className="text-gray-400 text-sm">No image</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-1">
                      {item.tech.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.shortDescription}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      {item.timeline} • {item.budget}
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses worldwide across different platforms
            </p>
          </div>

          <div className="flex justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">U</span>
              </div>
              <span className="text-sm font-medium">Upwork</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
              <span className="text-sm font-medium">Fiverr</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-6 h-6 bg-blue-700 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">in</span>
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    {testimonial.verified && (
                      <Shield className="w-4 h-4 text-green-500" />
                    )}
                    <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full border">
                      {testimonial.platform}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 text-sm leading-relaxed">&quot;{testimonial.text}&quot;</p>

                <div className="mb-3">
                  <span className="text-xs font-medium text-gray-500">Project:</span>
                  <div className="text-sm font-medium text-gray-900">{testimonial.project}</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {testimonial.name.split(' ')[0][0]}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-xs text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Verified Professional</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">3+</div>
                  <div className="text-sm text-gray-600">years experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.8/5</div>
                  <div className="text-sm text-gray-600">average rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">94%</div>
                  <div className="text-sm text-gray-600">repeat business</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Principles</h2>
            <p className="text-gray-600">Professional approach to every project</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div key={principle.title} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{principle.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            I respond within 1 hour during business hours
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="bg-gray-800 rounded-2xl p-8 text-white text-left">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Telegram</div>
                    <a 
                      href="https://t.me/Krivk7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-200 text-sm"
                    >
                      @Krivk7
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Response Time</div>
                    <div className="text-gray-300 text-sm">1-2 hours during business hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Project Start</div>
                    <div className="text-gray-300 text-sm">Within 1-2 days</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Timezone</div>
                    <div className="text-gray-300 text-sm">UTC+3 (Flexible for calls)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Your Name *
                </label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Project Description *
                </label>
                <textarea 
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Describe your project in simple terms. Examples:
  'Need an e-commerce site with 100+ product catalog'
  'Looking for CRM to manage clients and orders'
  'Want to build a SaaS application for my business'"
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-lg text-sm resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Budget Range *
                </label>
                <select 
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Select budget range</option>
                  <option value="$500 - $1,000">$500 - $1,000</option>
                  <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                  <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Contact Info *
                </label>
                <input 
                  type="text" 
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Telegram @username or email"
                  required
                  className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-3 bg-green-900 border border-green-700 rounded-lg">
                  <p className="text-green-200 text-sm">Message sent! I&apos;ll contact you within 1 hour.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-900 border border-red-700 rounded-lg">
                  <p className="text-red-200 text-sm">Error sending message. Please contact me directly on Telegram.</p>
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-6 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Start Discussion
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold">Kenan</div>
                <div className="text-sm text-gray-400">Fullstack Developer</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center">
              <a 
                href="https://t.me/Krivk7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Telegram
              </a>
          
              <a 
                href="https://github.com/diaken2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <div className="text-gray-400">© 2024 Kenan. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedProject.title}
                      </h2>
                      <p className="text-gray-600">{selectedProject.description}</p>
                    </div>
                    <button
                      onClick={closeProjectModal}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    {selectedProject.images.map((img, index) => (
                      <div key={index} className="aspect-video relative rounded-lg overflow-hidden">
                        <Image 
                          src={img}
                          alt={`${selectedProject.title} - screenshot ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Business Results</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedProject.results.map((result, idx) => (
                        <div key={idx} className="text-center p-4 bg-gray-50 rounded-xl">
                          <div className="text-xl font-bold text-gray-900 mb-1">{result.value}</div>
                          <div className="text-xs text-gray-600 font-medium">{result.metric}</div>
                          <div className="text-xs text-gray-500 mt-1">{result.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <div className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-gray-200">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}