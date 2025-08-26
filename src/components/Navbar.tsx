import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, MessageCircle } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onNavigate?: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: 'about' },
    { name: 'Layanan', href: '/#services' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Kontak', href: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? isDarkMode 
          ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' 
          : 'bg-white/90 backdrop-blur-md border-b border-gray-200/50'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                JOKI TUGAS
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const isAbout = item.name === 'Tentang Kami' || item.href === 'about';
                const isHash = item.href.startsWith('/about');
                return (
                  <a
                    key={item.name}
                    href={isAbout || isHash ? '#' : item.href}
                    onClick={(e) => {
                      if (isAbout) {
                        e.preventDefault();
                        onNavigate?.('about');
                      } else if (isHash) {
                        e.preventDefault();
                        onNavigate?.(item.href.substring(1));
                      }
                    }}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-yellow-400 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Pesan Sekarang
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden ${
        isDarkMode ? 'bg-black/95' : 'bg-white/95'
      } backdrop-blur-md`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200/10">
          {navItems.map((item) => {
            const isAbout = item.name === 'Tentang Kami' || item.href === 'about';
            const isHash = item.href.startsWith('/about');
            return (
              <a
                key={item.name}
                href={isAbout || isHash ? '#' : item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-yellow-400 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
                onClick={(e) => {
                  setIsOpen(false);
                  if (isAbout) {
                    e.preventDefault();
                    onNavigate?.('about');
                  } else if (isHash) {
                    e.preventDefault();
                    onNavigate?.(item.href.substring(1));
                  }
                }}
              >
                {item.name}
              </a>
            );
          })}
          <div className="px-3 py-2">
            <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300">
              <span className="flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Pesan Sekarang
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;