import React from 'react';
import { FaRegMoon, FaHistory, FaGlobe } from 'react-icons/fa';

const PersonalCabinet = () => {
  const balance = 1000;
  const tariff = "Тариф 'Базовый'";
  const minutesLeft = 120;
  const maxMinutes = 500;
  const gbLeft = 10;
  const maxGb = 50;
  const smsCost = 3; // Стоимость SMS
  const unlimitedOptions = ['YouTube', 'Telegram']; // Список безлимитов
  const nextPayment = { amount: 500, date: '30 октября 2024' };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Баланс: {balance} руб.</h2>
      <button className="bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition-all mb-6">
        Пополнить
      </button>

      <div className="border rounded-lg p-6 mb-6 bg-gradient-to-r from-blue-300 to-purple-500 shadow-lg text-white">
        <p className="text-lg mb-2">
          <span className="font-bold text-2xl">Номер:</span>
          <span className="font-bold text-2xl text-yellow-300"> 1234567890</span>
        </p>
        <p className="text-lg mb-2">Тариф: {tariff}</p>
        <p className="text-lg mb-2">Остаток минут: {minutesLeft}/{maxMinutes}</p>
        <p className="text-lg mb-2">Остаток ГБ: {gbLeft}/{maxGb}</p>
        <p className="text-lg mb-2">Стоимость SMS: {smsCost} руб.</p>
        <p className="text-lg mb-2">
          Безлимиты: {unlimitedOptions.length > 2 ? `${unlimitedOptions.slice(0, 2).join(', ')} и еще ${unlimitedOptions.length - 2}` : unlimitedOptions.join(', ')}
        </p>
        <hr className="my-4 border-t border-white" />
        <p className="text-lg mb-2">
          {nextPayment.amount} руб за 30 дней.
        </p>
        <p className="text-md font-big mt-4">
          Дата списания: {nextPayment.date}
        </p>
        <button className="mt-4 bg-white text-blue-500 py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition-colors flex items-center justify-center">
          <FaRegMoon className="mr-2" /> Сменить тариф
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Докупить пакеты:</h3>
        <div className="grid grid-cols-2 gap-4">
          <button className="border p-4 rounded-lg shadow-lg bg-gradient-to-r from-pink-400 to-yellow-500 text-white font-bold hover:scale-105 transition-transform">
            50 минут за 150 руб
          </button>
          <button className="border p-4 rounded-lg shadow-lg bg-gradient-to-r from-purple-400 to-blue-500 text-white font-bold hover:scale-105 transition-transform">
            10 ГБ за 200 руб
          </button>
        </div>
      </div>

      {/* Добавлено заголовок для дополнительных опций */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Дополнительно:</h3>
        <div className="flex justify-between">
          <button className="flex items-center bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all">
            <FaGlobe className="mr-2" /> Роуминг
          </button>
          <button className="flex items-center bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all">
            <FaHistory className="mr-2" /> История операций
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalCabinet;
