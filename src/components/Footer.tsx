import React from 'react';
import { Logo } from './Logo';
import { Instagram, Linkedin, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-main pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Col */}
          <div className="space-y-8">
            <Logo className="h-16 origin-left" />
            <p className="text-gray-dark leading-relaxed">
              Elevando o conceito de morar através do design autoral e da exclusividade absoluta. Mobiliário de alto padrão para quem não abre mão da excelência.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-dark hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-dark hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-dark hover:text-primary transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-dark hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-dark hover:text-white transition-colors">Sobre a Marca</a></li>
              <li><a href="#colecoes" className="text-gray-dark hover:text-white transition-colors">Coleções</a></li>
              <li><a href="#projetos" className="text-gray-dark hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#personalizacao" className="text-gray-dark hover:text-white transition-colors">Personalização</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Contato</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-dark">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>Av. Faria Lima, 4500 - Itaim Bibi, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-4 text-gray-dark">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+55 (11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-4 text-gray-dark">
                <Mail size={20} className="text-primary shrink-0" />
                <span>contato@dezign.com.br</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Action Col */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">Newsletter</h4>
            <p className="text-gray-dark text-sm mb-6">Receba lançamentos exclusivos e tendências de design.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-bg-secondary border-none px-4 py-3 text-white text-sm focus:ring-1 focus:ring-primary outline-none w-full"
              />
              <button className="bg-primary text-bg-main px-4 py-3 font-bold text-xs uppercase">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-dark tracking-widest uppercase">
          <p>© 2026 DEZIGN - Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
