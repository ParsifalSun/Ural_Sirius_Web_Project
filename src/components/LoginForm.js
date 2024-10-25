import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //const num = parseInt(phoneNumber);
    if (phoneNumber.length === 10) {
      setErrorMessage('Номер введён правильно');
      onLogin(); // Вызов handleLogin в LoginPage при успешной проверке номера
    } else {
      setErrorMessage('Ошибка: Неверный номер');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        value={phoneNumber}
        onChange={handleChange}
        maxLength="10"
        placeholder="Введите номер"
        className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      />
      <p className="text-xs text-gray-500 mt-1">{errorMessage}</p>
      <button
        type="submit"
        className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition duration-200"
      >
        Вход
      </button>
    </form>
  );
};

export default LoginForm;
