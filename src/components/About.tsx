import React from 'react';
import { motion } from 'framer-motion';
import showroomImage from '../assets/showroom.jpeg';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-bg-main">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="w-full lg:w-1/2 relative group"
>
  <div className="absolute -top-4 -left-4 w-32 h-32 border-l border-t border-primary/50 z-0" />

  <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r border-b border-primary/50 z-0" />

  <img
    src={showroomImage}
    alt="DEZIGN Showroom"
    className="w-full h-[600px] object-cover relative z-10 shadow-2xl"
  />
</motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary font-medium tracking-[0.4em] uppercase mb-4 block">
              Sobre a Marca
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Precisão em <span className="italic">cada detalhe</span>.
            </h2>
            <div className="space-y-6 text-lg text-gray-light leading-relaxed">
              <p>
                A DEZIGN nasceu para atender clientes que valorizam sofisticação, personalização e excelência. Não somos apenas uma loja de móveis; somos curadores de espaços que contam histórias.
              </p>
              <p>
                Cada projeto é desenvolvido para criar ambientes únicos, refletindo o estilo e a personalidade de quem os habita. Nossa busca incessante pela perfeição nos leva a selecionar apenas os melhores materiais e os designers mais visionários do mercado.
              </p>
              <p>
                Com anos de experiência no mercado de alto padrão, entendemos que o verdadeiro luxo reside na exclusividade e na atenção aos mínimos detalhes, transformando sua casa em uma obra de arte habitável.
              </p>
            </div>
            <button className="mt-10 border-b-2 border-primary pb-2 text-white font-bold tracking-widest uppercase text-xs hover:text-primary transition-colors">
              Conheça Nossa História
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
