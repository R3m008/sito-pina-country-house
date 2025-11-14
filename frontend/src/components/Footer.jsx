import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Star } from 'lucide-react';
import { siteInfo } from '../mock';

export const Footer = () => {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/servizi', label: 'Servizi' },
    { path: '/camere', label: 'Le Camere' },
    { path: '/chi-siamo', label: 'Chi Siamo' },
    { path: '/blog', label: 'Blog' }
  ];

  return (
    <footer className="bg-stone-900 text-stone-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrizione */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
                <img
                src="/images/Logo.png"
                alt="Pina Country House Logo"
                className="w-24 h-24 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">Pina</span>
                <span className="text-sm text-emerald-400 font-medium">Country House</span>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Il tuo rifugio di pace e autenticità nella campagna italiana. Dove la tradizione incontra il comfort moderno.
            </p>
          </div>

          {/* Link rapidi */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Link Rapidi</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-stone-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Contatti</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteInfo.contact.phone}`}
                  className="flex items-start gap-3 text-stone-400 hover:text-emerald-400 transition-colors text-sm group"
                >
                  <Phone size={18} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{siteInfo.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteInfo.contact.email}`}
                  className="flex items-start gap-3 text-stone-400 hover:text-emerald-400 transition-colors text-sm group"
                >
                  <Mail size={18} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{siteInfo.contact.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-stone-400 text-sm">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span>{siteInfo.contact.address}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
                      {/*
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Seguici</h3>
            <div className="flex gap-4">
              <a
                href={siteInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:bg-emerald-700 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={siteInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:bg-emerald-700 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={siteInfo.social.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-stone-400 hover:bg-emerald-700 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="TripAdvisor"
              >
                <Star size={20} />
              </a>
            </div>
          </div>          */}
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-800 mt-8 pt-8 text-center">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Pina Country House. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};