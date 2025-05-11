'use client';
import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

const DevelopNotification = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Hide notification after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-6 right-6 z-50 w-80 sm:w-96">
      <div
        className="flex items-center justify-between bg-gradient-to-r from-white to-gray-50 shadow-xl rounded-xl p-4 border border-gray-200 transition-opacity duration-500 ease-out"
        role="alert"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div className="flex items-center">
          <AlertTriangle
            className="text-green-500 mr-3 animate-pulse"
            size={20}
            aria-hidden="true"
          />
          <span className="text-sm font-semibold text-gray-800">
            Some features are under conflictions and will be resolved sooon.
          </span>
        </div>
        <div className="relative w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-green-900 rounded-full"
            style={{
              width: '100%',
              animation: 'progress 5s linear forwards',
            }}
          />
        </div>
      </div>

      {/* CSS for progress bar animation */}
      <style jsx>{`
        @keyframes progress {
          0% {
            width: 100%;
          }
          100% {
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
};

export default DevelopNotification;