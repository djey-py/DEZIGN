import React from 'react';
import { motion } from 'framer-motion';
import { Award, Feather, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Exclusividade",
    description: "Peças selecionadas e personalizadas para criar ambientes verdadeiramente únicos."
  },
  {
    icon: <Feather className="w-10 h-10 text-primary" />,
    title: "Design Sofisticado",
    description: "Estética contemporânea e atemporal que transcende tendências passageiras."
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Atendimento Consultivo",
    description: "Uma experiência personalizada e atenciosa desde o primeiro contato até a entrega final."
  },
  {
    icon: <Sparkles className="w-10 h-10 text-primary" />,
    title: "Acabamentos Premium",
    description: "Utilizamos apenas materiais nobres e técnicas de alta marcenaria para qualidade superior."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.4em] uppercase mb-4 block"
          >
            Diferenciais DEZIGN
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white"
          >
            Cada detalhe é pensado para ser único.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="p-8 bg-bg-main border border-white/5 hover:border-primary/30 transition-all group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-white mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-dark leading-relaxed group-hover:text-gray-light transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
