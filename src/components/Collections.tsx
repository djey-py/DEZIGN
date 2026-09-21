import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import movelTvImage from '../assets/movel-tv.jpeg';
import aparadorImage from '../assets/aparador.jpeg';
import cozinhaImage from '../assets/cozinha.jpeg';
import cabeceiraImage from '../assets/cabeceira.jpeg';
import personalizadoImage from '../assets/personalizado.jpeg';
import salaImage from '../assets/sala.jpeg';

const collections = [
  {
    name: 'Móveis TV',
    category: 'Mobiliário',
    image: movelTvImage,
    description:
      'O centro da sala merece mais do que uma televisão. Criamos composições que transformam a parede TV no elemento de destaque do ambiente.',
    details:
      'Cada composição é desenvolvida para integrar televisão, iluminação, armazenamento e elementos decorativos numa solução visualmente equilibrada.',
    highlights: [
      'Design sob medida',
      'Integração de iluminação',
      'Soluções de armazenamento',
    ],
    size: 'large',
  },
  {
    name: 'Aparadores',
    category: 'Mobiliário',
    image: aparadorImage,
    description:
      'Peças que ocupam espaço com elegância e transformam paredes vazias em pontos de destaque.',
    details:
      'Aparadores desenhados para diferentes ambientes, combinando presença visual, funcionalidade e acabamentos que valorizam cada detalhe.',
    highlights: [
      'Design exclusivo',
      'Dimensões personalizadas',
      'Acabamentos premium',
    ],
    size: 'small',
  },
  {
    name: 'Cozinhas',
    category: 'Ambientes',
    image: cozinhaImage,
    description:
      'Uma cozinha pode ser funcional. Uma cozinha DEZIGN pode tornar-se parte da identidade da casa.',
    details:
      'Criamos cozinhas pensadas à medida do espaço e da rotina de cada cliente, combinando organização, ergonomia e uma linguagem visual sofisticada.',
    highlights: [
      'Projeto personalizado',
      'Aproveitamento inteligente',
      'Materiais e acabamentos selecionados',
    ],
    size: 'tall',
  },
  {
    name: 'Cabeceiras e Camas',
    category: 'Dormitórios',
    image: cabeceiraImage,
    description:
      'O quarto começa pela atmosfera. Criamos cabeceiras e camas que definem essa atmosfera.',
    details:
      'Proporção, textura, iluminação e conforto são combinados para criar uma peça central capaz de transformar completamente o ambiente.',
    highlights: [
      'Design personalizado',
      'Conforto e presença',
      'Detalhes e iluminação integrada',
    ],
    size: 'small',
  },
  {
    name: 'Espaços de Convivência',
    category: 'Ambientes',
    image: salaImage,
    description:
      'Ambientes pensados para fazer uma coisa essencial: fazer as pessoas quererem ficar.',
    details:
      'Criamos composições que equilibram conforto, circulação, funcionalidade e estética para transformar espaços de convivência em experiências.',
    highlights: [
      'Composição personalizada',
      'Conforto e funcionalidade',
      'Harmonia entre mobiliário e espaço',
    ],
    size: 'large',
  },
  {
    name: 'Projetos Personalizados',
    category: 'Exclusividade',
    image: personalizadoImage,
    description:
      'Quando o espaço não cabe numa solução pronta, criamos uma nova.',
    details:
      'Projetos desenvolvidos de raiz para clientes que procuram uma solução única para a sua residência, empresa, loja ou espaço comercial.',
    highlights: [
      'Projeto 100% personalizado',
      'Soluções residenciais e comerciais',
      'Acompanhamento do conceito ao acabamento',
    ],
    size: 'small',
  },
];

export const Collections: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState<
    (typeof collections)[number] | null
  >(null);

  return (
    <section
      id="colecoes"
      className="bg-bg-secondary py-20 sm:py-24 lg:py-32"
    >
      {/* INTRO */}
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 mb-14 sm:mb-16 lg:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-primary font-medium tracking-[0.35em] uppercase text-[10px] sm:text-xs">
            O nosso portfólio
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mt-4 leading-[1.05]">
            Peças que definem
            <span className="italic"> espaços.</span>
          </h2>

          <p className="text-white/50 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mt-6">
            Mobiliário de alto padrão desenvolvido para ambientes que
            valorizam materiais, proporção e personalidade. Da concepção ao
            acabamento, cada peça é pensada para fazer parte do espaço.
          </p>
        </motion.div>
      </div>

      {/* MASONRY */}
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 lg:gap-6">
          {collections.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              onClick={() => setSelectedCollection(item)}
              className="group relative mb-4 sm:mb-5 lg:mb-6 break-inside-avoid overflow-hidden bg-black cursor-pointer"
            >
              <div
                className={`
                  relative overflow-hidden
                  ${
                    item.size === 'large'
                      ? 'aspect-[4/5]'
                      : item.size === 'tall'
                        ? 'aspect-[3/4]'
                        : 'aspect-[4/5]'
                  }
                `}
              >
                {/* IMAGEM */}
                <img
                  src={item.image}
                  alt={item.name}
                  loading={index > 1 ? 'lazy' : 'eager'}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* GRADIENTE */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/85
                    via-black/20
                    to-transparent
                    opacity-80
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />

                {/* BORDA */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-primary/40 transition-colors duration-500" />

                {/* CONTEÚDO */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                  <span className="text-primary uppercase tracking-[0.3em] text-[9px] sm:text-[10px]">
                    {item.category}
                  </span>

                  <h3 className="text-white font-serif text-2xl sm:text-3xl mt-2">
                    {item.name}
                  </h3>

                  <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-700 ease-out">
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed mt-3 max-w-sm">
                      {item.description}
                    </p>

                    <div className="mt-4 flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/80">
                      <span>Ver detalhes</span>

                      <span className="w-8 group-hover:w-14 h-px bg-primary transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* FECHO */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-5 sm:px-8 lg:px-12 mt-16 sm:mt-20"
      >
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <p className="text-white/40 text-xs sm:text-sm">
            Uma seleção do universo DEZIGN.
          </p>

          <button
            onClick={() => {
              const message = encodeURIComponent(
                'Olá! Gostaria de conhecer melhor o portfólio da DEZIGN e saber mais sobre os projetos de mobiliário de alto padrão.'
              );

              window.open(
                `https://wa.me/244935204868?text=${message}`,
                '_blank'
              );
            }}
            className="
              w-fit
              border
              border-primary/40
              text-primary
              px-6
              py-3
              text-[10px]
              uppercase
              tracking-[0.25em]
              hover:bg-primary
              hover:text-bg-main
              transition-all
            "
          >
            Falar sobre um projeto
          </button>
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCollection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10"
            onClick={() => setSelectedCollection(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{
                duration: 0.45,
                ease: 'easeOut',
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden bg-bg-secondary border border-white/10"
            >
              {/* BOTÃO FECHAR */}
              <button
                onClick={() => setSelectedCollection(null)}
                className="
                  absolute
                  top-5
                  right-5
                  z-30
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  border
                  border-white/20
                  bg-black/40
                  backdrop-blur-md
                  text-white
                  hover:bg-white
                  hover:text-black
                  transition-all
                "
                aria-label="Fechar"
              >
                <span className="text-xl leading-none">×</span>
              </button>

              <div className="grid lg:grid-cols-2 max-h-[90vh] overflow-y-auto">
                {/* IMAGEM */}
                <div className="relative min-h-[320px] sm:min-h-[450px] lg:min-h-[650px]">
                  <img
                    src={selectedCollection.image}
                    alt={selectedCollection.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                  <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                    <span className="text-primary text-[9px] sm:text-[10px] uppercase tracking-[0.35em]">
                      {selectedCollection.category}
                    </span>
                  </div>
                </div>

                {/* CONTEÚDO */}
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <span className="text-primary uppercase tracking-[0.35em] text-[10px] mb-5">
                    DEZIGN — {selectedCollection.category}
                  </span>

                  <h3 className="text-white font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                    {selectedCollection.name}
                  </h3>

                  <div className="w-14 h-px bg-primary my-7" />

                  <p className="text-white text-lg sm:text-xl font-serif leading-relaxed">
                    {selectedCollection.description}
                  </p>

                  <p className="text-white/50 text-sm sm:text-base leading-relaxed mt-6">
                    {selectedCollection.details}
                  </p>

                  {/* DIFERENCIAIS */}
                  <div className="mt-8 space-y-3">
                    {selectedCollection.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-3 text-white/70 text-xs sm:text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-10">
                    <button
                      onClick={() => {
                        const message = encodeURIComponent(
                          `Olá! Vi o portfólio da DEZIGN e tenho interesse em ${selectedCollection.name}. Gostaria de saber mais sobre esta solução e conhecer as possibilidades de personalização.`
                        );

                        window.open(
                          `https://wa.me/244935204868?text=${message}`,
                          '_blank'
                        );
                      }}
                      className="
                        group/btn
                        inline-flex
                        items-center
                        gap-4
                        bg-gradient-brand
                        text-bg-main
                        px-7
                        py-4
                        text-[10px]
                        sm:text-xs
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        hover:brightness-110
                        transition-all
                      "
                    >
                      Quero esta solução

                      <span className="text-lg transition-transform group-hover/btn:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>

                  <p className="text-white/25 text-[9px] uppercase tracking-[0.25em] mt-5">
                    Atendimento personalizado
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};