'use client';

import { useState, useEffect } from 'react';

import StatsCards from '../../../components/partner/StatsCard';
import ReferralLink from '../../../components/partner/ReferralLink';
import OrdersTable from '../../../components/partner/OrdersTable';
import BonusProgress from '../../../components/partner/BonusProgress';
import { ArrowRightEndOnRectangleIcon, ArrowTrendingUpIcon, Cog6ToothIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { ChartBar, Gift, Share, Wallet } from 'lucide-react';

export default function PartnerDashboard() {
  const [stats, setStats] = useState({
    totalEarned: 0,
    pendingPayout: 0,
    totalClients: 0,
    activeOrders: 0
  });
  
  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [partnerName, setPartnerName] = useState('');

  useEffect(() => {
    fetchPartnerData();
  }, []);

  const fetchPartnerData = async () => {
    try {
      setLoading(true);
      
      // Мок данные для примера
      setTimeout(() => {
        setStats({
          totalEarned: 148500,
          pendingPayout: 32500,
          totalClients: 12,
          activeOrders: 3
        });
        
        setRecentOrders([
          {
            id: 'ORD-001',
            date: '2024-05-15',
            clientName: 'Александр Иванов',
            amount: 75000,
            partnerPercent: 50,
            partnerEarning: 37500,
            status: 'paid',
            payoutStatus: 'pending'
          },
          {
            id: 'ORD-002',
            date: '2024-05-10',
            clientName: 'ООО "ТехноПро"',
            amount: 45000,
            partnerPercent: 25,
            partnerEarning: 11250,
            status: 'completed',
            payoutStatus: 'processing'
          },
          {
            id: 'ORD-003',
            date: '2024-05-05',
            clientName: 'Екатерина Смирнова',
            amount: 60000,
            partnerPercent: 50,
            partnerEarning: 30000,
            status: 'paid',
            payoutStatus: 'pending'
          }
        ]);
        
        setPartnerName('Иван Петров');
        setLoading(false);
      }, 800);
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Добро пожаловать, <span className="text-indigo-600">{partnerName}</span>!
              </h1>
              <p className="text-gray-500 mt-1">Партнёрский кабинет</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Cog6ToothIcon className="h-5 w-5 mr-2" />
                Настройки
              </button>
              <button className="flex items-center text-red-600 hover:text-red-800">
                <ArrowRightEndOnRectangleIcon className="h-5 w-5 mr-2" />
                Выйти
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Основная статистика */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Общая статистика</h2>
          <StatsCards stats={stats} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Левая колонка */}
          <div className="lg:col-span-2 space-y-8">
            {/* Реферальная ссылка */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Share className="h-5 w-5 mr-2 text-indigo-600" />
                  Ваша реферальная ссылка
                </h3>
                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  Активна
                </span>
              </div>
              <ReferralLink />
            </div>

            {/* Последние заказы */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <DocumentTextIcon className="h-5 w-5 mr-2 text-indigo-600" />
                  Последние заказы
                </h3>
                <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                  Вся история →
                </button>
              </div>
              <OrdersTable orders={recentOrders} />
            </div>
          </div>

          {/* Правая колонка */}
          <div className="space-y-8">
            {/* Прогресс бонусов */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <Gift className="h-5 w-5 mr-2 text-indigo-600" />
                Ваши бонусы
              </h3>
              <BonusProgress />
            </div>

            {/* Правила программы */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-sm border border-indigo-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 Правила программы</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5">✓</div>
                  <span className="ml-3 text-sm text-gray-700">
                    <span className="font-medium">50%</span> с первых двух заказов нового клиента
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5">✓</div>
                  <span className="ml-3 text-sm text-gray-700">
                    <span className="font-medium">25%</span> с последующих заказов
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5">✓</div>
                  <span className="ml-3 text-sm text-gray-700">
                    Минимальный заказ: <span className="font-medium">20,000 ₽</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5">⏱</div>
                  <span className="ml-3 text-sm text-gray-700">
                    Выплаты: <span className="font-medium">7-14 дней</span> после оплаты
                  </span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-indigo-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Уровень партнёра:</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold rounded-full">
                    ПРОФИ
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Следующий уровень при привлечении 20 клиентов
                </p>
              </div>
            </div>

            {/* Быстрые действия */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🚀 Быстрые действия</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-gray-50 border border-gray-200">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <ChartBar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">Статистика</p>
                      <p className="text-sm text-gray-500">Подробная аналитика</p>
                    </div>
                  </div>
                  <ArrowTrendingUpIcon className="h-5 w-5 text-gray-400" />
                </button>
                
                <button className="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-gray-50 border border-gray-200">
                  <div className="flex items-center">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Wallet className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900">Выплаты</p>
                      <p className="text-sm text-gray-500">История выплат</p>
                    </div>
                  </div>
                  <ArrowTrendingUpIcon className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}