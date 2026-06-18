import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.pexels.com/photos/7535062/pexels-photo-7535062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
          alt="Ambiente Luxuoso"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ opacity }}
          className="max-w-3xl"
        >
          <span className="text-primary font-medium tracking-[0.4em] uppercase mb-4 block">
            Luxo Contemporâneo
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1]">
            Exclusividade transformada em <span className="italic">mobiliário</span>.
          </h1>
          <p className="text-xl text-gray-light mb-10 leading-relaxed max-w-xl">
            Projetos personalizados e móveis de alto padrão para ambientes que refletem sua identidade e status.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-brand text-bg-main px-10 py-5 text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-primary/20">
              Agendar Consultoria
            </button>
            <button className="border border-white/30 text-white backdrop-blur-sm px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-bg-main transition-all">
              Conhecer Coleções
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{
              y: [0, 48],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-full h-1/3 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};
