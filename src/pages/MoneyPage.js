import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import BottomNavigation from '../components/BottomNavigation';
import Header from '../components/Header'; // Импортируем Header
import { FaPlus, FaArrowRight, FaHistory } from 'react-icons/fa'; // Убедитесь, что у вас установлен react-icons
import { useNavigate } from 'react-router-dom'; // Импортируем хук навигации

const MoneyPage = () => {
  const [loading, setLoading] = useState(true);
  const [balance] = useState(1000.00);

  const navigate = useNavigate(); // Инициализируем навигацию

  useEffect(() => {
    setTimeout(() => setLoading(false), 200); // Задержка 2 секунды для демонстрации загрузки
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen flex flex-col">
      <Header /> {/* Добавили Header */}
      <div className="p-6 flex-grow"> {/* Обернули содержимое в flex-grow для адаптивности */}
        <h2 className="text-left text-2xl font-semibold mb-1">Общий баланс:</h2>
        <p className="text-left text-4xl font-bold mb-6">
          {balance.toFixed(2)} <span className="text-2xl">₽</span>
        </p>
        <div className="flex justify-around mb-6">
          <button className="flex items-center bg-green-500 text-white py-3 px-5 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105">
            <FaPlus className="mr-2" /> Пополнить
          </button>
          <button className="flex items-center bg-blue-500 text-white py-3 px-5 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
            <FaArrowRight className="mr-2" /> Перевести
          </button>
        </div>
        <div className="border rounded-lg p-6 bg-gradient-to-r from-purple-400 to-blue-400 shadow-lg text-white flex flex-col justify-between h-full">
          <p className="flex items-center mb-4">
            <span className="mr-2">💳</span> Автоплатеж
          </p>
          <p className="flex items-center mb-4">
            <span className="mr-2">⏳</span> Отсрочка платежа
          </p>
          <button
            className="flex items-center mt-4 bg-white text-blue-500 py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition-colors"
            onClick={() => navigate('/history')} // Переход на страницу истории операций
          >
            <FaHistory className="mr-2" /> История операций
          </button>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default MoneyPage;
