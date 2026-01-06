'use client';

import { GiftIcon, TrophyIcon, StarIcon } from '@heroicons/react/24/outline';

export default function BonusProgress() {
  const bonuses = [
    {
      title: 'Бонус за 5 клиентов',
      description: '+5,000 ₽ за каждые 5 новых клиентов',
      progress: 60,
      current: 3,
      target: 5,
      reward: '5,000 ₽',
      icon: GiftIcon,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      title: 'Уровень ПРОФИ',
      description: 'Повышение ставки до 30% на все заказы',
      progress: 40,
      current: 8,
      target: 20,
      reward: '30% ставка',
      icon: TrophyIcon,
      color: 'bg-gradient-to-r from-amber-500 to-orange-500'
    },
    {
      title: 'Бонус за оборот',
      description: 'Дополнительно 10% при обороте от 500,000 ₽',
      progress: 30,
      current: 150,
      target: 500,
      unit: 'тыс. ₽',
      reward: '+10% бонус',
      icon: StarIcon,
      color: 'bg-gradient-to-r from-blue-500 to-cyan-500'
    }
  ];

  return (
    <div className="space-y-6">
      {bonuses.map((bonus, index) => (
        <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
          <div className="flex items-start space-x-4">
            <div className={`p-3 rounded-lg ${bonus.color}`}>
              <bonus.icon className="h-6 w-6 text-white" />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">{bonus.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{bonus.description}</p>
                </div>
                <span className="px-3 py-1 text-sm font-bold bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full">
                  {bonus.reward}
                </span>
              </div>
              
              {/* Прогресс-бар */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Прогресс: {bonus.current}/{bonus.target} {bonus.unit || 'клиентов'}</span>
                  <span className="font-medium">{bonus.progress}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${bonus.color} transition-all duration-500`}
                    style={{ width: `${bonus.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}