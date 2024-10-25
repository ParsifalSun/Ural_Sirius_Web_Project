import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">ТЕЛЕКОМ</h1>
      <button className="text-white p-2"> {/* Иконка меню в правом верхнем углу */}
        ☰
      </button>
    </header>
  );
};

export default Header;
