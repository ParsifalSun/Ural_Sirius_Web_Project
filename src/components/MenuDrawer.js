import React, { useState } from 'react';

const MenuDrawer = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="absolute right-4 top-4 p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-300"
      >
        ☰
      </button>
      <div
        className={`fixed left-0 top-0 h-full bg-white w-64 shadow-lg p-6 z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <nav>
          {/* Безопасность */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Безопасность</h3>
            <ul>
              <li className="py-2 hover:text-blue-500 cursor-pointer">Личные данные</li>
              <li className="py-2 hover:text-blue-500 cursor-pointer">История</li>
              <li className="py-2 hover:text-blue-500 cursor-pointer">Помощь</li>
            </ul>
          </div>
          <hr className="border-gray-300 my-2" />

          {/* Связь */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Связь</h3>
            <ul>
              <li className="py-2 hover:text-blue-500 cursor-pointer">Смена номера</li>
              <li className="py-2 hover:text-blue-500 cursor-pointer">Карта покрытия</li>
              <li className="py-2 hover:text-blue-500 cursor-pointer">Заказать SIM-карту</li>
            </ul>
          </div>
          <hr className="border-gray-300 my-2" />

          {/* Приложение */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Приложение</h3>
            <ul>
              <li className="py-2 hover:text-blue-500 cursor-pointer">Настройки приложения</li>
            </ul>
          </div>
          <hr className="border-gray-300 my-2" />

          {/* Кнопка выхода */}
          <div className="mt-4">
            <button
              onClick={onLogout}
              className="w-full text-red-500 font-medium hover:text-red-600 cursor-pointer py-2"
            >
              Выйти из приложения
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MenuDrawer;
