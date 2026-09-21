import React from 'react';
import { motion } from 'framer-motion';

export const CTA: React.FC = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Olá! Conheci o trabalho da DEZIGN através do site e gostaria de solicitar um atendimento exclusivo. Tenho interesse em desenvolver um projeto de mobiliário personalizado.'
    );

    window.open(
      `https://wa.me/244935204868?text=${message}`,
      '_blank'
    );
  };

  return (
    <section
      id="contato"
      className="relative min-h-[80vh] overflow-hidden bg-bg-secondary flex items-center"
    >
      {/* IMAGEM DE FUNDO */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4564013/pexels-photo-4564013.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
          alt="Ambiente DEZIGN"
          className="h-full w-full object-cover scale-105"
        />

        {/* CAMADAS DE CONTRASTE */}
        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30" />

        <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-black/30" />
      </div>

      {/* ELEMENTOS DECORATIVOS */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute right-0 top-0 h-full w-px bg-white/10" />

        <div className="absolute bottom-0 left-1/4 h-px w-1/2 bg-gradient-brand opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          {/* CONTEÚDO PRINCIPAL */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl"
          >
            {/* LABEL */}
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-primary" />

              <span className="text-[9px] uppercase tracking-[0.4em] text-primary sm:text-[10px]">
                O próximo passo
              </span>
            </div>

            {/* TÍTULO */}
            <h2 className="font-serif text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              O espaço é seu.
              <br />
              <span className="italic text-white/70">
                A assinatura também.
              </span>
            </h2>

            {/* LINHA */}
            <div className="my-8 h-px w-20 bg-primary" />

            {/* TEXTO */}
            <p className="max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg lg:text-xl">
              Conte-nos o que imagina. A partir daí, transformamos ideias,
              necessidades e referências numa solução criada para o seu
              espaço — com identidade, precisão e atenção a cada detalhe.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={handleWhatsApp}
                className="
                  group
                  inline-flex
                  w-fit
                  items-center
                  gap-5
                  bg-gradient-brand
                  px-7
                  py-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-bg-main
                  shadow-2xl
                  shadow-primary/20
                  transition-all
                  duration-500
                  hover:brightness-110
                  sm:px-9
                  sm:py-5
                "
              >
                <span>Solicitar Atendimento</span>

                <span className="text-lg transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </button>

              {/* <button
                onClick={() => {
                  document
                    .getElementById('colecoes')
                    ?.scrollIntoView({
                      behavior: 'smooth',
                    });
                }}
                className="
                  group
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  border
                  border-white/20
                  px-7
                  py-4
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-white/70
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:border-white/50
                  hover:text-white
                  sm:px-9
                  sm:py-5
                "
              >
                <span>Ver portfólio</span>

                <span className="transition-transform duration-500 group-hover:translate-y-1">
                  ↓
                </span>
              </button> */}
            </div>
          </motion.div>

          {/* BLOCO LATERAL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="border-l border-white/20 pl-10">
              <span className="text-[9px] uppercase tracking-[0.35em] text-primary">
                DEZIGN
              </span>

              <p className="mt-5 font-serif text-2xl leading-relaxed text-white/80">
                “Precisão em cada detalhe.”
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-[9px] text-primary">01</span>

                  <span className="h-px w-8 bg-white/20" />

                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                    Design personalizado
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[9px] text-primary">02</span>

                  <span className="h-px w-8 bg-white/20" />

                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                    Materiais selecionados
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[9px] text-primary">03</span>

                  <span className="h-px w-8 bg-white/20" />

                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                    Produção sob medida
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ASSINATURA INFERIOR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-20 flex items-center justify-between border-t border-white/10 pt-6"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] text-white/25">
            Mobiliário de alto padrão
          </span>

          <span className="text-[8px] uppercase tracking-[0.4em] text-white/25">
            Luanda · Angola
          </span>
        </motion.div>
      </div>
    </section>
  );
};