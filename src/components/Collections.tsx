import React from 'react';
import { motion } from 'framer-motion';

const collections = [
  {
    name: 'Living',
    image:
      'https://images.pexels.com/photos/7195577/pexels-photo-7195577.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2000',
    refs: ['Sofás autorais', 'Iluminação indireta', 'Madeira natural'],
  },
  {
    name: 'Jantar',
    image:
      'https://images.pexels.com/photos/7195559/pexels-photo-7195559.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2000',
    refs: ['Mesa em mármore', 'Pendentes modernos', 'Cadeiras premium'],
  },
  {
    name: 'Dormitórios',
    image:
      'https://images.pexels.com/photos/7535062/pexels-photo-7535062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2000',
    refs: ['Cabeceiras estofadas', 'Iluminação quente', 'Rouparia sob medida'],
  },
  {
    name: 'Escritórios',
    image:
      'https://images.pexels.com/photos/7195535/pexels-photo-7195535.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2000',
    refs: ['Mesas executivas', 'Painéis amadeirados', 'Ergonomia premium'],
  },
  {
    name: 'Áreas Gourmet',
    image:
      'https://images.pexels.com/photos/27945011/pexels-photo-27945011.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2000',
    refs: ['Bancadas em pedra', 'Churrasqueira moderna', 'Integração externa'],
  },
];

export const Collections: React.FC = () => {
  return (
    <section id="colecoes" className="bg-bg-secondary">

      {/* Header da Section */}
      <div className="py-24 px-6 md:px-20 max-w-6xl">
        <span className="text-primary font-medium tracking-[0.4em] uppercase mb-4 block">
          Nossas Coleções
        </span>

        <h2 className="text-4xl md:text-6xl font-serif text-white max-w-3xl">
          Curadoria <span className="italic">exclusiva</span> para cada ambiente.
        </h2>
      </div>

      {collections.map((item, index) => (
        <div
          key={index}
          className="group relative h-screen w-full overflow-hidden"
        >
          {/* IMAGEM HERO */}
          <motion.img
            src={item.image}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* OVERLAY PARA LEGIBILIDADE */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />

          {/* CONTEÚDO PRINCIPAL */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20">
            <span className="text-primary tracking-[0.4em] uppercase text-xs mb-6">
              Coleção
            </span>

            <h3 className="text-5xl md:text-7xl font-serif text-white mb-8">
              {item.name}
            </h3>

            <button className="border border-white/30 text-white px-8 py-4 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all w-fit">
              Explorar Ambiente
            </button>
          </div>

          {/* PAINEL DE REFERÊNCIAS (Hover) */}
          <div className="absolute top-0 right-0 h-full w-full md:w-1/3 bg-black/90 backdrop-blur-lg transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 z-20 flex flex-col justify-center px-10">
            <h4 className="text-white font-serif text-2xl mb-8">
              Referências
            </h4>

            <ul className="space-y-6">
              {item.refs.map((ref, i) => (
                <li
                  key={i}
                  className="text-white/80 uppercase tracking-widest text-xs border-b border-white/10 pb-4"
                >
                  {ref}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};