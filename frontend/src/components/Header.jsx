import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/servizi', label: 'Servizi' },
    { path: '/camere', label: 'Le Camere' },
    { path: '/chi-siamo', label: 'Chi Siamo' },
    { path: '/blog', label: 'Blog' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar with contacts */}
        <div className="hidden md:flex items-center justify-end py-2 text-sm text-stone-600 border-b border-stone-100">
          <div className="flex items-center gap-6">
            <a href="tel:+393283815813" className="flex items-center gap-2 hover:text-emerald-700 transition-colors">
              <Phone size={14} />
              <span>+39 328 381 5813</span>
            </a>
            <a href="mailto:info@pinacountryhouse.it" className="flex items-center gap-2 hover:text-emerald-700 transition-colors">
              <Mail size={14} />
              <span>info@pinacountryhouse.it</span>
            </a>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-stone-800 leading-tight">Pina</span>
              <span className="text-sm text-emerald-700 font-medium">Country House</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium transition-all duration-300 relative ${
                  isActive(item.path)
                    ? 'text-emerald-700'
                    : 'text-stone-700 hover:text-emerald-600'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-700 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="tel:+393283815813">
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white shadow-md hover:shadow-lg transition-all duration-300">
                Prenota Ora
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-emerald-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium py-2 transition-colors ${
                  isActive(item.path)
                    ? 'text-emerald-700 border-l-4 border-emerald-700 pl-4'
                    : 'text-stone-700 hover:text-emerald-600 pl-4'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+393283815813" className="w-full">
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white w-full mt-2">
                Prenota Ora
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};