'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Логотип с именем */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              КС
            </div>
            <span className="text-xl font-bold text-gray-900">Кенан Салахов</span>
          </div>

          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Портфолио</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
            <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors">Процесс</a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-600 transition-colors">Отзывы</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Обсудить проект
            </button>
          </nav>

          {/* Мобильное меню */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 py-2">Портфолио</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 py-2">Услуги</a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 py-2">Процесс</a>
              <a href="#reviews" className="text-gray-700 hover:text-blue-600 py-2">Отзывы</a>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full">
                Обсудить проект
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}