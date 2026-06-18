import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Consultoria",
    description: "Iniciamos com uma conversa profunda para entender seus desejos, necessidades e estilo de vida."
  },
  {
    number: "02",
    title: "Curadoria",
    description: "Nossa equipe seleciona as melhores matérias-primas e conceitos de design para o seu projeto."
  },
  {
    number: "03",
    title: "Personalização",
    description: "Ajustamos cada detalhe, dimensão e acabamento para que a peça seja uma extensão da sua identidade."
  },
  {
    number: "04",
    title: "Produção",
    description: "Artesãos qualificados dão vida ao projeto com precisão técnica e cuidado meticuloso."
  },
  {
    number: "05",
    title: "Entrega",
    description: "Finalizamos com a montagem técnica e a entrega de um ambiente pronto para ser vivenciado."
  }
];

export const Customization: React.FC = () => {
  return (
    <section id="personalizacao" className="py-24 bg-bg-main relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.4em] uppercase mb-4 block"
          >
            A Jornada DEZIGN
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white max-w-3xl mx-auto"
          >
            Sua visão, nossa <span className="italic">maestria</span> técnica.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              <div className="mb-8 flex flex-col items-center md:items-start">
                <span className="text-6xl md:text-7xl font-serif text-white/5 font-bold mb-[-30px] transition-colors group-hover:text-primary/10">
                  {step.number}
                </span>
                <div className="w-12 h-[2px] bg-primary mb-6" />
                <h3 className="text-xl font-medium text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-dark leading-relaxed group-hover:text-gray-light transition-colors text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-transparent border border-primary text-primary px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-bg-main transition-all">
            Iniciar Meu Projeto Personalizado
          </button>
        </div>
      </div>
    </section>
  );
};
