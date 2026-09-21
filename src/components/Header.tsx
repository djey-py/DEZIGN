import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Coleções', href: '#colecoes' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Personalização', href: '#personalizacao' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-bg-main/90 backdrop-blur-md py-2 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <Logo className={isScrolled ? 'scale-75 origin-left transition-transform duration-500' : 'transition-transform duration-500'} />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium tracking-widest uppercase text-gray-light hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
  <button
    onClick={() => {
      const message = encodeURIComponent(
        'Olá! Gostaria de solicitar um atendimento exclusivo. Tenho interesse em conhecer melhor as soluções de mobiliário e gostaria de receber mais informações.'
      );

      window.open(
        `https://wa.me/244935204868?text=${message}`,
        '_blank'
      );
    }}
    className="bg-gradient-brand text-bg-main px-5 py-2.5 rounded-none text-[11px] font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-primary/20"
  >
    Solicitar Atendimento
  </button>
</div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-bg-main z-40 flex flex-col items-center justify-center p-6 lg:hidden"
          >
            <button
              className="absolute top-8 right-6 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center space-y-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-light tracking-[0.2em] uppercase text-white hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
  onClick={() => {
    const message = encodeURIComponent(
      'Olá! Gostaria de solicitar um atendimento exclusivo. Tenho interesse em conhecer melhor as soluções de mobiliário e gostaria de receber mais informações.'
    );

    window.open(
      `https://wa.me/244935204868?text=${message}`,
      '_blank'
    );
  }}
  className="bg-gradient-brand text-bg-main px-6 py-3 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all"
>
  Solicitar Atendimento Exclusivo
</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
