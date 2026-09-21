import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative w-full min-h-[calc(100svh-80px)] overflow-hidden flex items-center">
      {/* Background */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.pexels.com/photos/7535062/pexels-photo-7535062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
          alt="Ambiente Luxuoso"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/50 z-10" />
      </motion.div>

      {/* Conteúdo */}
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10 relative z-20 w-full pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28 lg:pt-32 lg:pb-32 xl:pt-36">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ opacity }}
          className="max-w-3xl"
        >
          <h1
            className="
              text-[2.5rem]
              leading-[1.05]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
              font-serif
              text-white
              mb-5
              sm:mb-6
              lg:mb-7
            "
          >
            Exclusividade transformada em{' '}
            <span className="italic">mobiliário</span>.
          </h1>

          <p
            className="
              text-base
              sm:text-lg
              md:text-xl
              text-gray-light
              mb-7
              sm:mb-8
              lg:mb-10
              leading-relaxed
              max-w-xl
            "
          >
            Projetos personalizados e móveis de alto padrão para ambientes
            que refletem sua identidade e status.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => {
                const message = encodeURIComponent(
                  'Olá! Gostaria de agendar uma consultoria para falar sobre um projeto de mobiliário personalizado. Gostaria de conhecer melhor as opções e possibilidades. Poderiam me ajudar?'
                );

                window.open(
                  `https://wa.me/244935204868?text=${message}`,
                  '_blank'
                );
              }}
              className="
                w-full
                sm:w-auto
                bg-gradient-brand
                text-bg-main
                px-7
                sm:px-8
                lg:px-10
                py-4
                sm:py-4.5
                lg:py-5
                text-xs
                sm:text-sm
                font-bold
                uppercase
                tracking-[0.15em]
                sm:tracking-widest
                hover:brightness-110
                transition-all
                shadow-xl
                shadow-primary/20
              "
            >
              Agendar Consultoria
            </button>

            <button
              onClick={() => {
                document.getElementById('colecoes')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
              className="
                w-full
                sm:w-auto
                border
                border-white/30
                text-white
                backdrop-blur-sm
                px-7
                sm:px-8
                lg:px-10
                py-4
                sm:py-4.5
                lg:py-5
                text-xs
                sm:text-sm
                font-bold
                uppercase
                tracking-[0.15em]
                sm:tracking-widest
                hover:bg-white
                hover:text-bg-main
                transition-all
              "
            >
              Conhecer Coleções
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="
          absolute
          bottom-6
          sm:bottom-8
          lg:bottom-10
          left-1/2
          -translate-x-1/2
          z-20
          flex
          flex-col
          items-center
        "
      >
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">
          Scroll
        </span>

        <div className="w-[1px] h-9 sm:h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{
              y: [0, 48],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-0 left-0 w-full h-1/3 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};