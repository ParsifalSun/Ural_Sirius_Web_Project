import React from 'react';
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-around p-3">
      <Link to="/cabinet" className="text-blue-500">Связь</Link>
      <Link to="/money" className="text-blue-500">Деньги</Link>
      <Link to="/history" className="text-blue-500">История</Link>
      <Link to="/help" className="text-blue-500">Помощь</Link>
    </div>
  );
};

export default BottomNavigation;
