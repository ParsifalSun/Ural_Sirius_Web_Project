import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-blue-300 to-purple-600">
      <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-white"></div>
    </div>
  );
};

export default LoadingScreen;
