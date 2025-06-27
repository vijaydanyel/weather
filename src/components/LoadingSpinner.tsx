import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-white/60 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '0.8s'}}></div>
      </div>
      <p className="text-white/80 mt-4 text-lg">Getting weather data...</p>
    </div>
  );
};