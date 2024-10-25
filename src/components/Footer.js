import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-inner p-4 flex justify-around border-t border-gray-300 z-10">
      <button className="text-blue-500 hover:text-blue-600 transition-colors">Связь</button>
      <button className="text-blue-500 hover:text-blue-600 transition-colors">Деньги</button>
      <button className="text-blue-500 hover:text-blue-600 transition-colors">История</button>
      <button className="text-blue-500 hover:text-blue-600 transition-colors">Помощь</button>
    </footer>
  );
};

export default Footer;
