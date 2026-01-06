'use client';

import { useState } from 'react';
import { 
  LinkIcon, 
  QrCodeIcon, 
  ShareIcon, 
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon 
} from '@heroicons/react/24/outline';

export default function ReferralLink() {
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://mysite.com/partner/ivan123?ref=partner123';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(referralLink)}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  const shareLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Партнёрская программа',
          text: 'Присоединяйся к нашей партнёрской программе!',
          url: referralLink,
        });
      } catch (err) {
        console.error('Ошибка sharing:', err);
      }
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="space-y-6">
      {/* Основная ссылка */}
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <div className="relative">
            <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              readOnly
              value={referralLink}
              className="w-full pl-10 pr-24 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={copyToClipboard}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center px-4 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              {copied ? (
                <>
                  <ClipboardDocumentCheckIcon className="h-4 w-4 mr-2" />
                  Скопировано!
                </>
              ) : (
                <>
                  <ClipboardDocumentIcon className="h-4 w-4 mr-2" />
                  Копировать
                </>
              )}
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Поделитесь этой ссылкой с клиентами. Все заказы по ней будут автоматически закреплены за вами.
          </p>
        </div>
      </div>

      {/* QR-код и кнопки */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* QR код */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <QrCodeIcon className="h-5 w-5 text-gray-600" />
            <span className="font-medium text-gray-900">QR-код</span>
          </div>
          <div className="flex justify-center">
            <img 
              src={qrCodeUrl} 
              alt="QR Code" 
              className="h-32 w-32 border border-gray-300 rounded"
            />
          </div>
          <p className="text-xs text-gray-500 text-center mt-3">
            Сканируйте для быстрого перехода
          </p>
        </div>

        {/* Кнопки шаринга */}
        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={shareLink}
              className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ShareIcon className="h-5 w-5 mr-2 text-gray-700" />
              Поделиться
            </button>
            
            <button className="flex items-center justify-center p-3 border border-indigo-200 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>
            
            <button className="flex items-center justify-center p-3 border border-blue-200 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Twitter
            </button>
            
            <button className="flex items-center justify-center p-3 border border-red-200 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </button>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Готовые тексты для соцсетей</h4>
            <div className="space-y-2">
              <button className="w-full text-left p-2 text-sm bg-blue-50 text-blue-700 rounded border border-blue-100 hover:bg-blue-100">
                🚀 Я зарабатываю с партнёрской программы! Присоединяйся и получай до 50% с каждого заказа!
              </button>
              <button className="w-full text-left p-2 text-sm bg-green-50 text-green-700 rounded border border-green-100 hover:bg-green-100">
                💰 Отличная возможность дополнительного заработка! Проверено лично — выплаты регулярные!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}