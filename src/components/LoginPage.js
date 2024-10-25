import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import LoadingScreen from '../components/LoadingScreen';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/cabinet'); // Переход на личный кабинет после успешного входа
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-blue-300 to-purple-600">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg animate-fade-in">
          <Header />
          <div className="p-6">
            <h2 className="text-center text-gray-700 mb-4">Введите номер для входа:</h2>
            <LoginForm onLogin={handleLogin} />
            <div className="text-right mt-4 text-gray-400">
              <button className="text-sm text-gray-400 hover:text-gray-600">
                <span className="rounded-full border border-gray-400 p-1 mr-1">?</span>
                Помощь
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
