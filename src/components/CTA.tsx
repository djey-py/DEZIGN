import React from 'react';
import { motion } from 'framer-motion';

export const CTA: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/4564013/pexels-photo-4564013.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-white mb-8"
          >
            Seu próximo ambiente merece <span className="italic">exclusividade</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-light mb-12"
          >
            Agende uma conversa e descubra como transformar seu projeto em uma experiência única, sofisticada e totalmente personalizada.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="bg-gradient-brand text-bg-main px-12 py-6 text-sm font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl shadow-primary/30">
              Solicitar Atendimento Exclusivo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
