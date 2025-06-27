import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-red-500/20 backdrop-blur-md rounded-2xl p-6 border border-red-500/30 text-center">
        <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-white mb-2">Oops! Something went wrong</h3>
        <p className="text-white/80 text-sm mb-4">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-6 py-2 bg-red-500/30 hover:bg-red-500/40 text-white rounded-lg 
                     transition-colors duration-200 border border-red-500/50"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};