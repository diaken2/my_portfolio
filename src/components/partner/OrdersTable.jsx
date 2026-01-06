'use client';

import { 
  CheckCircleIcon,
  ClockIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

export default function OrdersTable({ orders }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'paid':
        return <CurrencyDollarIcon className="h-5 w-5 text-green-500" />;
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5 text-blue-500" />;
      case 'pending':
        return <ClockIcon className="h-5 w-5 text-amber-500" />;
      default:
        return <ClockIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPayoutStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-emerald-100 text-emerald-800';
      case 'processing':
        return 'bg-purple-100 text-purple-800';
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Заказ
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Клиент
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Сумма
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ваш %
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Заработок
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Статус
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Выплата
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {getStatusIcon(order.status)}
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900">{order.id}</div>
                    <div className="text-sm text-gray-500">{order.date}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{order.clientName}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {order.amount.toLocaleString('ru-RU')} ₽
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-3 py-1 text-xs font-bold bg-indigo-100 text-indigo-800 rounded-full">
                  {order.partnerPercent}%
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-bold text-green-700">
                  {order.partnerEarning.toLocaleString('ru-RU')} ₽
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                  {order.status === 'paid' ? 'Оплачен' : 
                   order.status === 'completed' ? 'Завершён' : 'В ожидании'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getPayoutStatusColor(order.payoutStatus)}`}>
                  {order.payoutStatus === 'paid' ? 'Выплачено' : 
                   order.payoutStatus === 'processing' ? 'В обработке' : 'Ожидает'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {orders.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <CurrencyDollarIcon className="h-12 w-12 mx-auto opacity-50" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Нет заказов</h3>
          <p className="text-gray-500 max-w-sm mx-auto">
            Привлекайте клиентов по вашей реферальной ссылке, и здесь появятся ваши первые заказы
          </p>
        </div>
      )}
    </div>
  );
}