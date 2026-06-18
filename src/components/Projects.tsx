import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Residência Aurora",
    category: "Residencial de Alto Padrão",
    image: "https://images.pexels.com/photos/6758247/pexels-photo-6758247.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Executive Office Plaza",
    category: "Corporativo Premium",
    image: "https://images.pexels.com/photos/7195535/pexels-photo-7195535.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    span: "col-span-1 row-span-1"
  },
  {
    title: "Loft Contemporâneo",
    category: "Apartamento Sofisticado",
    image: "https://images.pexels.com/photos/6758354/pexels-photo-6758354.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800",
    span: "col-span-1 row-span-1"
  },
  {
    title: "Showroom Conceito",
    category: "Varejo de Luxo",
    image: "https://images.pexels.com/photos/7587743/pexels-photo-7587743.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    span: "md:col-span-2 md:row-span-1"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.4em] uppercase mb-4 block"
          >
            Portfólio de Impacto
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white mb-6"
          >
            Projetos que definem o <span className="italic">luxo</span> moderno.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${project.span} relative group overflow-hidden bg-bg-main shadow-2xl`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-bg-main/0 group-hover:bg-bg-main/60 transition-colors duration-500 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100">
                <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-serif text-white">
                  {project.title}
                </h3>
                <button className="mt-4 text-white text-xs border-b border-white w-fit pb-1 hover:text-primary hover:border-primary transition-colors">
                  Ver Projeto
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
