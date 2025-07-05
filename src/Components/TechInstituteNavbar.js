import React, { useState } from 'react';
import logo from './logo-3.png';

function TechInstituteNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Global Tech Institute of Management"
              className="h-10"
            />
          </div>

          {/* Desktop phone link */}
          <div className="hidden sm:flex">
            <a
              href="tel:+919599606497"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              📞 +91 95996 06497
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {isOpen ? (
                <span className="text-2xl">✕</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile phone link */}
      {isOpen && (
        <div className="sm:hidden px-4 pt-2 pb-4">
          <a
            href="tel:+919599606497"
            className="block text-gray-700 hover:text-blue-600 font-medium"
          >
            📞 +91 95996 06497
          </a>
        </div>
      )}
    </nav>
  );
}

export default TechInstituteNavbar;
