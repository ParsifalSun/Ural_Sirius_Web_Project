import React from 'react';
import BottomNavigation from '../components/BottomNavigation';

const HistoryPage = () => {
  const historyData = [
    { time: '25.10.24 12:00', type: 'Пополнение', amount: '+500 ₽' },
    { time: '25.10.24 12:13', type: 'Отправка SMS', amount: '-3 ₽' },
    { time: '25.10.24 14:30', type: 'Перевод', amount: '-200 ₽' },
    { time: '25.10.24 16:15', type: 'Списание', amount: '-100 ₽' },
    { time: '25.10.24 17:00', type: 'Подключение тарифа', amount: '-150 ₽' },
    { time: '26.10.24 08:45', type: 'Пополнение', amount: '+1000 ₽' },
    { time: '26.10.24 09:30', type: 'Оплата за интернет', amount: '-750 ₽' },
    { time: '27.10.24 10:00', type: 'Отправка MMS', amount: '-5 ₽' },
    { time: '28.10.24 11:00', type: 'Перевод', amount: '-300 ₽' },
    { time: '28.10.24 15:30', type: 'Списание', amount: '-50 ₽' },
    { time: '29.10.24 09:00', type: 'Пополнение', amount: '+200 ₽' },
    { time: '30.10.24 10:00', type: 'Пополнение', amount: '+750 ₽' },
    { time: '30.10.24 12:00', type: 'Смена тарифа', amount: '-200 ₽' },
    { time: '31.10.24 14:00', type: 'Пополнение', amount: '+500 ₽' },
    { time: '01.11.24 15:00', type: 'Проверка баланса', amount: '0 ₽' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col">
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold">📃 История операций:</h2>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-300">
        <div className="p-4 bg-white rounded-lg">
          <table className="w-full table-auto bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Время</th>
                <th className="px-4 py-3 text-left font-medium">Тип операции</th>
                <th className="px-4 py-3 text-left font-medium">Деньги</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((entry, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'
                  } hover:bg-indigo-50 transition-colors duration-200`}
                >
                  <td className="border-b px-4 py-3">{entry.time}</td>
                  <td className="border-b px-4 py-3">{entry.type}</td>
                  <td className="border-b px-4 py-3 text-right font-semibold">
                    {entry.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-auto">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default HistoryPage;
