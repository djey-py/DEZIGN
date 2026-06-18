import React from 'react';
import { motion } from 'framer-motion';

const collections = [
  {
    name: 'Living',
    image: 'https://images.pexels.com/photos/7195577/pexels-photo-7195577.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    size: 'col-span-1 md:col-span-2 row-span-1'
  },
  {
    name: 'Jantar',
    image: 'https://images.pexels.com/photos/7195559/pexels-photo-7195559.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600',
    size: 'col-span-1 row-span-1'
  },
  {
    name: 'Dormitórios',
    image: 'https://images.pexels.com/photos/7535062/pexels-photo-7535062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600',
    size: 'col-span-1 row-span-1'
  },
  {
    name: 'Escritórios',
    image: 'https://images.pexels.com/photos/7195535/pexels-photo-7195535.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    size: 'col-span-1 md:col-span-2 row-span-1'
  },
  {
    name: 'Áreas Gourmet',
    image: 'https://images.pexels.com/photos/27945011/pexels-photo-27945011.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    size: 'col-span-1 md:col-span-3 row-span-1'
  }
];

export const Collections: React.FC = () => {
  return (
    <section id="colecoes" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium tracking-[0.4em] uppercase mb-4 block"
            >
              Nossas Coleções
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-white"
            >
              Curadoria <span className="italic">exclusiva</span> para cada ambiente.
            </motion.h2>
          </div>
          <button className="text-white border border-white/20 px-8 py-4 uppercase text-xs font-bold tracking-widest hover:bg-white hover:text-bg-main transition-all">
            Ver Todas
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {collections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${item.size} group relative overflow-hidden cursor-pointer shadow-2xl`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  Explorar
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-white">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
