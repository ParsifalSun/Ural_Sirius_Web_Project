// src/components/LoadingScreen.js
import React from 'react';
import loadingGif from '../assets/loading.gif';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen overflow-hidden">
      <img
        src={loadingGif}
        alt="Loading..."
        className="h-full w-auto object-cover"
        style={{ height: '100vh', width: 'auto', objectPosition: '10% center' }} // Смещение вправо на 10%
      />
    </div>
  );
};

export default LoadingScreen;
