import React from 'react';
import Banner from './components/Banner';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />
      <main className="max-w-4xl mx-auto px-5 py-10 md:px-6 md:py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
          Welcome to Our Website
        </h1>
        <p className="text-base text-gray-600 mb-4">
          This is a demo page to showcase the responsive banner above. The banner includes:
        </p>
        <ul className="ml-5 space-y-2">
          <li className="text-gray-600">• Responsive design that works on all devices (320px minimum)</li>
          <li className="text-gray-600">• Interactive hover effects</li>
          <li className="text-gray-600">• Close functionality</li>
          <li className="text-gray-600">• External link to finom.co</li>
          <li className="text-gray-600">• Built with React, TypeScript, and Tailwind CSS</li>
        </ul>
      </main>
    </div>
  );
};

export default App;
