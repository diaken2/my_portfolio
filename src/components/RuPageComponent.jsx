"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight, Code, CheckCircle, MessageCircle, Mail, Calendar, Clock, Shield, TrendingUp, FileText, ChevronRight, MapPin, X, ExternalLink, Github, Star, Users, Zap, Briefcase, Play, Pause, Phone } from 'lucide-react'
import Image from 'next/image';
// app/layout.js или в твоей странице
export const dynamic = 'force-static';

 
export default function RuPageComponent() {
  const [isClient, setIsClient] = useState(false)
  const [activeTab, setActiveTab] = useState('budget')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  
  const [formData, setFormData] = useState({
    projectDescription: '',
    budget: '',
    contact: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

 const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  setSubmitStatus(null)

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (response.ok) {
      setSubmitStatus('success')
      setFormData({ projectDescription: '', budget: '', contact: '' })
    } else {
      setSubmitStatus('error')
      console.error('Server error:', data.message)
    }
  } catch (error) {
    console.error('Network error:', error)
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
      const timeString = now.toLocaleTimeString('ru-RU', { 
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
      id: 1,
      title: "Система управления тарифами для телеком-проекта",
      description: "Админ-панель для загрузки и управления тарифными планами",
      shortDescription: "Разработка системы автоматизации загрузки тарифов через Excel",
      tech: ["Next.js", "Express.js", "MongoDB", "Excel Parser"],
      results: [
        { metric: "Автоматизация", value: "90%", desc: "ручных процессов" },
        { metric: "Время обработки", value: "5 мин", desc: "вместо 1 часа" },
        { metric: "Срок разработки", value: "2 недели", desc: "от ТЗ до сдачи" }
      ],
      budget: "45 000 ₽",
      timeline: "2 недели",
      images: [
        "/projects/rtk-1.png",
        "/projects/rtk-2.png", 
        "/projects/rtk-3.png"
      ],
      features: [
        "Парсинг Excel файлов с тарифами",
        "CRUD операции для управления данными",
        "Валидация и обработка данных",
        "Интуитивный интерфейс админ-панели"
      ],
      challenges: [
        "Обработка сложных структур Excel",
        "Синхронизация данных в реальном времени",
        "Оптимизация производительности"
      ],
      liveUrl: "https://telecom-rtk.ru",
      githubUrl: null,
      category: "fullstack",
      note: "Проект выполнен через субподрядчика для телеком-сегмента"
    },
    {
      id: 2,
      title: "Платформа управления контентом", 
      description: "Система для управления тарифными планами и промо-акциями",
      shortDescription: "Разработка масштабируемой системы управления контентом",
      tech: ["Next.js", "Node.js", "MongoDB", "REST API"],
      results: [
        { metric: "Публикация", value: "5 минут", desc: "новых тарифов" },
        { metric: "Автоматизация", value: "100%", desc: "ручных процессов" },
        { metric: "Интеграция", value: "3 дня", desc: "с существующей системой" }
      ],
      budget: "55 000 ₽",
      timeline: "3 недели",
      images: [
        "/projects/mts-1.png",
        "/projects/mts-2.png",
        "/projects/mts-3.png"
      ],
      features: [
        "Загрузка данных через Excel и ручной ввод",
        "Система скидок и промо-акций",
        "Модерация контента перед публикацией",
        "SEO-оптимизированный интерфейс"
      ],
      challenges: [
        "Реализация сложной бизнес-логики",
        "Интеграция с существующей инфраструктурой",
        "Обеспечение безопасности данных"
      ],
      liveUrl: "https://mts-s.ru",
      githubUrl: null,
      category: "fullstack",
      note: "Проект реализован через дилера для телеком-компании"
    },
    {
      id: 3,
      title: "SVB Shop — Админ-панель управления товарами",
      description: "Система управления каталогом товаров для интернет-магазина",
      shortDescription: "Упрощение процессов управления товарной базой для e-commerce",
      tech: ["Next.js", "Node.js", "MongoDB", "Cloudinary"],
      results: [
        { metric: "Добавление товаров", value: "70%", desc: "быстрее" },
        { metric: "Ошибки данных", value: "-85%", desc: "в каталоге" },
        { metric: "Обучение", value: "30 минут", desc: "новых менеджеров" }
      ],
      budget: "35 000 ₽",
      timeline: "10 дней",
      images: [
        "/projects/svb-1.png",
        "/projects/svb-2.png",
        "/projects/svb-3.png"
      ],
      features: [
        "Массовое добавление и редактирование товаров",
        "Загрузка изображений с автоматической оптимизацией",
        "Система категорий и фильтров",
        "Управление остатками и ценами",
        "История изменений товаров"
      ],
      challenges: [
        "Обработка большого количества медиа-файлов",
        "Синхронизация с основной системой магазина",
        "Создание интуитивного интерфейса для нетехнических пользователей"
      ],
      liveUrl: "https://svb-shop.ru",
      githubUrl: null,
      category: "backend"
    },
    {
      id: 4,
      title: "CRM система для китайской компании",
      description: "Корпоративная система учета с заменой Excel таблиц",
      shortDescription: "Перевод бизнес-процессов с Excel на современную CRM платформу",
      tech: ["React", "Node.js", "PostgreSQL", "JWT Auth"],
      results: [
        { metric: "Ошибки данных", value: "-92%", desc: "по сравнению с Excel" },
        { metric: "Формирование отчетов", value: "5 мин", desc: "вместо 20 минут" },
        { metric: "Коллаборация", value: "+60%", desc: "между отделами" }
      ],
      budget: "75 000 ₽",
      timeline: "4 недели",
      images: [
        "/projects/ndn-1.jpg",
        "/projects/ndn-2.jpg",
      ],
      features: [
        "Система ролей и разрешений",
        "Импорт/экспорт данных из Excel",
        "Ведение истории изменений",
        "Автоматические уведомления",
        "Дашборды с аналитикой в реальном времени"
      ],
      challenges: [
        "Многоязычная поддержка (китайский/русский)",
        "Сложная система прав доступа",
        "Миграция данных из legacy систем"
      ],
      liveUrl: null,
      githubUrl: null,
      category: "crm"
    },
    {
      id: 5,
      title: "ViralBear — Платформа управления видеоконтентом",
      description: "Комплексная система для работы с видео библиотекой и RSS фидами",
      shortDescription: "Автоматизация процессов управления видеоконтентом и дистрибуции",
      tech: ["React", "Node.js", "MongoDB", "RSS Parser"],
      results: [
        { metric: "Обработка видео", value: "50+", desc: "в день" },
        { metric: "Автоматизация", value: "85%", desc: "процессов" },
        { metric: "Охват аудитории", value: "+40%", desc: "через RSS" }
      ],
      budget: "48 000 ₽",
      timeline: "3 недели",
      images: [
        "/projects/viralbear-1.png",
        "/projects/viralbear-2.webp",
        "/projects/viralbear-3.png"
      ],
      features: [
        "Загрузка и обработка видео файлов",
        "Автоматический парсинг RSS фидов",
        "Библиотека контента с тегами и категориями",
        "Система модерации контента",
        "API для интеграции с другими сервисами"
      ],
      challenges: [
        "Обработка больших видео файлов",
        "Парсинг разноформатных RSS фидов",
        "Оптимизация производительности при работе с медиа"
      ],
      liveUrl: "https://viralbear.media",
      githubUrl: null,
      category: "fullstack"
    },
    {
      id: 6,
      title: "Языковая платформа — Админ-панель и система уроков",
      description: "Полнофункциональная образовательная платформа с системой управления контентом",
      shortDescription: "Разработка админ-панели и системы уроков для языковой школы",
      tech: ["Next.js", "Node.js", "MongoDB", "Express.js"],
      results: [
        { metric: "Автоматизация", value: "85%", desc: "учебных процессов" },
        { metric: "Создание урока", value: "5 минут", desc: "вместо 30 минут" },
        { metric: "Ошибки данных", value: "-90%", desc: "при управлении контентом" }
      ],
      budget: "65 000 ₽",
      timeline: "3 недели",
      images: [
        "/projects/language-1.png",
        "/projects/language-2.png", 
        "/projects/language-3.png",
        "/projects/language-4.png"
      ],
      features: [
        "Создание и управление уроками через админ-панель",
        "Система фильтров по темам и уровням сложности", 
        "Загрузка контента из разных источников",
        "Автоматическая проверка переводов",
        "Гибкая система настройки уроков"
      ],
      challenges: [
        "Интеграция разных источников данных",
        "Создание универсальной системы фильтрации",
        "Оптимизация производительности при большом объеме контента"
      ],
      liveUrl: "https://learn-lng-client-bice.vercel.app",
      githubUrl: null,
      category: "fullstack"
    }
  ]

  const experience = [
    {
      period: "2021 - Настоящее время",
      title: "Fullstack Developer",
      company: "Фриланс",
      description: "Разработка fullstack-приложений для клиентов из разных отраслей. Специализация на React, Next.js и Node.js.",
      projects: "50+ завершенных проектов",
      technologies: ["React/Next.js", "Node.js/Express", "MongoDB/PostgreSQL", "TypeScript"]
    },
    {
      period: "2020 - 2021", 
      title: "Frontend Developer",
      company: "Начало карьеры",
      description: "Изучение современных технологий, первые коммерческие проекты. Фокус на фронтенд разработке.",
      projects: "Первые 10+ проектов",
      technologies: ["HTML/CSS/JS", "React", "REST API"]
    }
  ]

  const services = [
    {
      title: "Мини-проекты", 
      description: "Несложные веб-приложения, лендинги, боты",
      price: "от 30 000 ₽",
      duration: "7-14 дней",
      features: ["Full-stack разработка", "База данных", "Деплой", "Гарантия 14 дней"],
      cta: "Обсудить проект", 
      type: "budget",
      popular: true
    },
    {
      title: "Комплексные проекты",
      description: "Полный цикл: от анализа до запуска и поддержки",
      price: "от 50 000 ₽",
      duration: "3-4 недели",
      features: ["Проектирование архитектуры", "Команда разработки", "Гарантия 1 месяц", "Техническая документация"],
      cta: "Забронировать слот",
      type: "premium",
      popular: false
    }
  ]

  const workProcess = [
    {
      step: "01",
      title: "Обсуждение проекта",
      description: "Анализируем задачу, определяем цели и составляем ТЗ. Обычно занимает 1-2 дня.",
      duration: "1-2 дня"
    },
    {
      step: "02", 
      title: "Прототипирование",
      description: "Создаем прототип интерфейса и архитектуры. Согласовываем с клиентом.",
      duration: "2-3 дня"
    },
    {
      step: "03",
      title: "Разработка",
      description: "Пишем код с регулярными демо (раз в 3-4 дня). Вы сразу видите прогресс.",
      duration: "1-3 недели"
    },
    {
      step: "04",
      title: "Тестирование и сдача",
      description: "Тщательное тестирование, обучение использованию и финальная сдача проекта.",
      duration: "3-5 дней"
    }
  ]

  const principles = [
    {
      icon: Shield,
      title: "Предоплата 50%",
      description: "Работаю по договору с гарантией результата"
    },
    {
      icon: Calendar, 
      title: "3 проекта в месяц",
      description: "Фокус на качестве каждого проекта"
    },
    {
      icon: Clock,
      title: "Четкие сроки",
      description: "Соблюдаю согласованные дедлайны"
    }
  ]

  const testimonials = [
    {
      name: "Екатерина Мироненко, менеджер",
      position: "PlanQo",
      text: "Кенан разработал для нас систему онлайн-бронирования для фотографов с календарем записи. Отличная работа! Клиенты теперь могут самостоятельно выбирать время съемки, а мы экономим 3-4 часа в день на координации. Интерфейс интуитивный, интеграция прошла гладко.",
      rating: 5,
      project: "Система онлайн-бронирования для фотографов",
      platform: "Прямой заказ",
      verified: true
    },
    {
      name: "Мария Ковалева, CEO",
      position: "EduTech Pro",
      text: "Разработали систему автоматизации учебного процесса для языковой школы. Кенан реализовал сложную логику расписаний, прогресса студентов и генерации отчетов. Сократили время на администрирование примерно на 70%. Профессиональный подход к сложным задачам!",
      rating: 5,
      project: "Система автоматизации для языковой школы",
      platform: "Weblancer",
      verified: true
    },
    {
      name: "Максим Набиуллин, product manager",
      position: "Стартап в EdTech",
      text: "Кенан хорошо разбирается в React + TypeScript. Выполнил все по ТЗ и договоренностям, оставил развернутые комментарии в коде. Заказ сдан в срок, рекомендую для сложных веб-приложений.",
      rating: 5,
      project: "Веб-приложение для образования", 
      platform: "Кворк",
      verified: true
    },
    {
      name: "Владислав Иванов, CTO",
      position: "Медиа-компания",
      text: "Реализовали MRSS feed и систему генерации Excel/XML. Кенан решает нетривиальные задачи - там, где другие говорили 'невозможно', он находил решение. Уже 3 успешных проекта вместе.",
      rating: 5,
      project: "MRSS feed + генерация отчетов",
      platform: "Weblancer", 
      verified: true
    },
    {
      name: "Павел Миловидов, студент",
      position: "Учебный проект",
      text: "Заказывал приложение для школьного проекта. Кенан не только сделал работу, но и расписал инструкцию, помог с созданием APK файла. Были мелкие правки после сдачи, но всё быстро исправил. Очень помог с реализацией идеи!",
      rating: 5,
      project: "Мобильное приложение",
      platform: "Кворк",
      verified: true
    },
    {
      name: "Евгений Сайчик, автобизнес",
      position: "Сервис подбора автозапчастей", 
      text: "Сделал форму определения авто по VIN-номеру. Все быстро и качественно! Система работает без сбоев, интегрировалась с нашими базами данных. Рекомендую для автоматизации бизнес-процессов.",
      rating: 5,
      project: "VIN-декодер",
      platform: "Weblancer",
      verified: true
    },
    {
      name: "Анна Петрова, маркетолог",
      position: "Интернет-магазин",
      text: "Разрабатывали кастомную CRM. Сначала были небольшие сложности с коммуникацией из-за разницы во времени, но в итоге всё наладили. Результатом довольны - система работает стабильно.",
      rating: 5,
      project: "Кастомная CRM система",
      platform: "Прямой заказ",
      verified: true
    }
  ]

  const stats = [
    { number: "50+", label: "завершенных проектов" },
    { number: "94%", label: "клиентов рекомендуют" },
    { number: "2-3", label: "недели средний срок" },
    { number: "24/7", label: "поддержка в рабочее время" }
  ]

  const technologies = [
    { category: "Frontend", items: ["React/Next.js", "TypeScript", "Tailwind CSS", "Redux/Zustand"] },
    { category: "Backend", items: ["Node.js/Express", "Nest.js", "REST API", "GraphQL"] },
    { category: "Базы данных", items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"] },
    { category: "Инфраструктура", items: ["Docker", "AWS/Vercel", "CI/CD", "Nginx"] }
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
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Кенан</div>
              <h1 className="text-sm text-gray-600">Fullstack разработчик в Москве | Кенан</h1>
            </div>
          </div>

          <nav className="hidden md:flex gap-8">
            {['services', 'process', 'portfolio', 'experience', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm"
              >
                {item === 'services' ? 'Услуги' : 
                 item === 'process' ? 'Процесс' :
                 item === 'portfolio' ? 'Кейсы' :
                 item === 'experience' ? 'Опыт' :
                 item === 'testimonials' ? 'Отзывы' : 'Контакты'}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm flex items-center gap-2"
          >
            <Zap className="w-4 h-4" />
            Обсудить проект
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-800">
              🚀 Свободен для новых проектов • Москва {currentTime}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Fullstack разработчик<br />
            <span className="text-gray-600">с фокусом на результате</span>
          </motion.h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            От быстрых правок до сложных систем. Создаю решения, которые экономят время и деньги бизнеса.
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
              className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center gap-3 group"
            >
              <FileText className="w-5 h-5" />
              Обсудить проект
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://t.me/Krivk7"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-blue-50 border-y border-blue-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">
            💡 Прозрачные цены без переплат
          </h3>
          <p className="text-blue-700 text-sm max-w-2xl mx-auto">
            Работаю напрямую, без менеджеров и агентств. Вы платите за код, а не за аренду офиса в центре Москвы.
          </p>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Форматы работы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий вариант под ваши задачи и бюджет
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button 
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'budget' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('budget')}
              >
                🚀 Быстрый старт
              </button>
              <button 
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'premium' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('premium')}
              >
                💼 Комплексные решения  
              </button>
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
                        Самый популярный
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-gray-700" />
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
                        ? 'bg-blue-500 text-white hover:bg-blue-600' 
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Процесс работы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Прозрачный процесс от обсуждения до сдачи проекта
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Технологии</h2>
            <p className="text-gray-600">Современный стек для качественной разработки</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Опыт работы</h2>
            <p className="text-gray-600">Мой путь в разработке</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Реализованные проекты</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Кейсы с измеримыми бизнес-результатами для компаний из разных отраслей
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
                      <div className="text-gray-400 text-sm">Нет изображения</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Более 20 довольных клиентов на разных платформах
            </p>
          </div>

          <div className="flex justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">К</span>
              </div>
              <span className="text-sm font-medium">Kwork</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">W</span>
              </div>
              <span className="text-sm font-medium">Weblancer</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">П</span>
              </div>
              <span className="text-sm font-medium">Прямые заказы</span>
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
                    {testimonial.rating < 5 && (
                      [...Array(5 - testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gray-200 text-gray-200" />
                      ))
                    )}
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
                  <span className="text-xs font-medium text-gray-500">Проект:</span>
                  <div className="text-sm font-medium text-gray-900">{testimonial.project}</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {testimonial.name.split(' ')[0].split('')[0][0]}
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Проверенный исполнитель</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">3+</div>
                  <div className="text-sm text-gray-600">года опыта</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">заказов</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.8/5</div>
                  <div className="text-sm text-gray-600">средний рейтинг</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">94%</div>
                  <div className="text-sm text-gray-600">положительных отзывов</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Принципы работы</h2>
            <p className="text-gray-600">Профессиональный подход к каждому проекту</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={principle.title} className="text-center">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
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
    <h2 className="text-3xl font-bold mb-4">Готовы начать проект?</h2>
    <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
      Отвечаю в течение 1 часа в рабочее время
    </p>

    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Контактная информация */}
      <div className="bg-gray-800 rounded-2xl p-8 text-white text-left">
        <h3 className="text-2xl font-bold mb-6">Контакты</h3>
        
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
              <div className="font-semibold">Время ответа</div>
              <div className="text-gray-300 text-sm">1-2 часа в рабочее время</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold">Начало проекта</div>
              <div className="text-gray-300 text-sm">В течение 1-2 дней</div>
            </div>
          </div>
        </div>
      </div>

      {/* Форма */}
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Описание проекта *
          </label>
          <textarea 
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Опишите задачу простыми словами. Например: 
  'Нужен интернет-магазин с каталогом 100+ товаров'
  'Требуется CRM для учета клиентов и заказов"
            rows={4}
            required
            className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-lg text-sm resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Бюджет *
          </label>
          <select 
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="" className="text-white-400">Выберите диапазон</option>
            <option value="до 25 000 ₽" className="text-white-900">до 30 000 ₽</option>
            <option value="25 000 - 50 000 ₽" className="text-white-900">30 000 - 50 000 ₽</option>
            <option value="50 000 - 100 000 ₽" className="text-white-900">50 000 - 100 000 ₽</option>
            <option value="100 000 ₽+" className="text-white-900">100 000 ₽+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Контакты для связи *
          </label>
          <input 
            type="text" 
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Telegram @username или email"
            required
            className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
          />
        </div>

        {/* Сообщения о статусе */}
        {submitStatus === 'success' && (
          <div className="p-3 bg-green-900 border border-green-700 rounded-lg">
            <p className="text-green-200 text-sm">Сообщение отправлено! Свяжусь с вами в течение 1 часа.</p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="p-3 bg-red-900 border border-red-700 rounded-lg">
            <p className="text-red-200 text-sm">Ошибка при отправке. Пожалуйста, напишите мне напрямую в Telegram.</p>
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
              Отправка...
            </>
          ) : (
            <>
              <Zap className="w-5 h-5" />
              Обсудить проект
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
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold">Кенан </div>
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
                href="https://kwork.ru/user/diaken"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <Star className="w-4 h-4" />
                Kwork
              </a>
              <a 
                href="https://www.weblancer.net/users/DiaKen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                Weblancer
              </a>
              <div className="text-gray-400">© 2024</div>
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
                      {selectedProject.note && (
                        <div className="mt-2 p-2 bg-blue-50 rounded-lg">
                          <p className="text-blue-700 text-sm">ℹ️ {selectedProject.note}</p>
                        </div>
                      )}
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
                          alt={`${selectedProject.title} - скриншот ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Технологии</h3>
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
                    <h3 className="text-lg font-semibold mb-3">Результаты</h3>
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
                    <h3 className="text-lg font-semibold mb-3">Ключевые функции</h3>
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
                        className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Посмотреть сайт
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Кенан ",
      "jobTitle": "Fullstack Developer",
      "description": "Fullstack разработчик с фокусом на результате",
      "url": "https://твой-домен.ru",
      "sameAs": [
        "https://kwork.ru/user/diaken",
        "https://www.weblancer.net/users/DiaKen"
      ],
      "knowsAbout": [
        "React", "Next.js", "Node.js", "MongoDB", "PostgreSQL"
      ]
    })
  }}
/>
    </div>
  )
}