'use client';

import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { Clock, Users, Wallet } from "lucide-react";



export default function StatsCards({ stats }) {
  const cards = [
    {
      title: 'Общий заработок',
      value: `${stats.totalEarned.toLocaleString('ru-RU')} ₽`,
      icon: Wallet,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      trend: '+24%',
      description: 'За всё время'
    },
    {
      title: 'Ожидает выплаты',
      value: `${stats.pendingPayout.toLocaleString('ru-RU')} ₽`,
      icon: Clock,
      color: 'bg-gradient-to-br from-amber-500 to-orange-600',
      trend: '3 заказа',
      description: 'Будет выплачено 15.05.2024'
    },
    {
      title: 'Привлечено клиентов',
      value: stats.totalClients.toString(),
      icon: Users,
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      trend: '+2',
      description: 'За этот месяц'
    },
    {
      title: 'Активные заказы',
      value: stats.activeOrders.toString(),
      icon: ArrowTrendingUpIcon,
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      trend: 'В работе',
      description: 'Ожидают оплаты/выполнения'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl ${card.color}`}>
              <card.icon className="h-6 w-6 text-white" />
            </div>
            <span className="px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
              {card.trend}
            </span>
          </div>
          
          <h3 className="text-sm font-medium text-gray-500 mb-1">{card.title}</h3>
          <p className="text-2xl font-bold text-gray-900">{card.value}</p>
          <p className="text-xs text-gray-400 mt-2">{card.description}</p>
        </div>
      ))}
    </div>
  );
}