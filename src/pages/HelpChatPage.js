import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaDoorOpen } from 'react-icons/fa'; // Убедитесь, что у вас установлен react-icons

const HelpChatPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: "Мы можем решить любой вопрос. Просто напишите!", fromSupport: true },
  ]);
  const navigate = useNavigate();

  const sendMessage = () => {
    if (message.trim()) {
      // Добавляем новое сообщение в состояние
      setMessages((prevMessages) => [...prevMessages, { text: message, fromSupport: false }]);
      setMessage('');
    }
  };

  return (
    <div className="p-6 flex flex-col justify-between min-h-screen bg-gray-50">
      {/* Иконка выхода в личный кабинет */}
      <button
        onClick={() => navigate('/cabinet')}
        className="absolute top-4 right-4 p-2 bg-white rounded-lg shadow hover:bg-gray-100 transition-all"
      >
        <FaDoorOpen size={24} />
      </button>

      <div className="flex-grow overflow-y-auto mb-16">
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4 border border-gray-200">
          <h2 className="text-2xl font-semibold">Чат с поддержкой</h2>
          <p className="text-gray-600">Помогаем 24/7</p>
        </div>

        <div className="flex flex-col">
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 rounded-lg mb-2 ${msg.fromSupport ? 'bg-blue-100 self-start' : 'bg-gray-300 self-end'}`}>
              {msg.text}
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-50">
        <div className="flex items-center border-t pt-4">
          <button className="mr-4 text-gray-400">📎</button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Введите сообщение"
            className="flex-grow border border-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="ml-4 bg-blue-500 text-white rounded-full p-2 shadow-lg hover:bg-blue-600 transition-all"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpChatPage;
