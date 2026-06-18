import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Helena Bittencourt",
    role: "Arquiteta e Urbanista",
    text: "A DEZIGN superou todas as expectativas em meu último projeto residencial. A capacidade de personalizar acabamentos e o rigor técnico da entrega são incomparáveis no mercado atual.",
    avatar: "https://i.pravatar.cc/150?u=helena"
  },
  {
    name: "Ricardo Mendes",
    role: "Empresário",
    text: "Buscava exclusividade para meu escritório executivo e encontrei na DEZIGN não apenas móveis, mas uma verdadeira consultoria de design que elevou o status da empresa.",
    avatar: "https://i.pravatar.cc/150?u=ricardo"
  },
  {
    name: "Mariana Costa",
    role: "Designer de Interiores",
    text: "A atenção aos detalhes e a curadoria de materiais da DEZIGN permitem que eu entregue projetos autorais com a segurança de uma execução impecável.",
    avatar: "https://i.pravatar.cc/150?u=mariana"
  }
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" className="py-24 bg-bg-main overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-medium tracking-[0.4em] uppercase mb-4 block"
          >
            Vozes de Quem Confia
          </motion.span>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Quote className="absolute -top-10 -left-10 w-20 h-20 text-white/5 z-0" />
          
          <div className="relative z-10 min-h-[300px] flex flex-col items-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <p className="text-2xl md:text-3xl font-serif text-white italic mb-10 leading-relaxed">
                  "{testimonials[current].text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full grayscale border-2 border-primary/30"
                  />
                  <div className="text-left">
                    <h4 className="text-white font-bold">{testimonials[current].name}</h4>
                    <span className="text-gray-dark text-sm">{testimonials[current].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-12 gap-8">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center border border-white/10 text-white hover:border-primary hover:text-primary transition-all rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center border border-white/10 text-white hover:border-primary hover:text-primary transition-all rounded-full"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
