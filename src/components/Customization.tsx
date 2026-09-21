import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Consultoria',
    eyebrow: 'O primeiro contacto',
    description:
      'Tudo começa com uma conversa. Entendemos o espaço, a rotina, os desejos e aquilo que torna o seu projeto verdadeiramente seu.',
    detail: 'Escuta · Conceito · Direção',
  },
  {
    number: '02',
    title: 'Curadoria',
    eyebrow: 'A escolha dos detalhes',
    description:
      'Selecionamos materiais, texturas, proporções e soluções capazes de traduzir a visão do projeto numa linguagem sofisticada e coerente.',
    detail: 'Materiais · Texturas · Acabamentos',
  },
  {
    number: '03',
    title: 'Personalização',
    eyebrow: 'Feito para si',
    description:
      'Dimensões, cores, materiais e acabamentos são ajustados ao espaço. Nada precisa encaixar no seu ambiente — nós fazemos a peça encaixar.',
    detail: 'Medidas · Design · Identidade',
  },
  {
    number: '04',
    title: 'Produção',
    eyebrow: 'Onde a ideia ganha forma',
    description:
      'É aqui que o projeto deixa o papel. Cada detalhe é executado com precisão técnica, atenção ao acabamento e respeito pelo conceito original.',
    detail: 'Precisão · Técnica · Artesanato',
  },
  {
    number: '05',
    title: 'Entrega',
    eyebrow: 'O momento final',
    description:
      'A peça chega ao seu espaço e ganha o seu lugar. Montagem, ajustes e acabamento final para que tudo esteja pronto para ser vivido.',
    detail: 'Montagem · Ajustes · Experiência',
  },
];

export const Customization: React.FC = () => {
  return (
    <section
      id="personalizacao"
      className="relative overflow-hidden bg-bg-main py-24 sm:py-28 lg:py-36"
    >
      {/* BACKGROUND DECORATIVO */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[140px]" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[140px]" />

        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.025]" />
      </div>

      <div className="container relative z-10 mx-auto px-5 sm:px-8 lg:px-12">
        {/* HEADER */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20 items-end mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium tracking-[0.4em] uppercase text-[10px] sm:text-xs">
              A Jornada DEZIGN
            </span>

            <div className="mt-5 flex items-center gap-4">
              <span className="h-px w-12 bg-primary" />

              <span className="text-white/30 text-[9px] uppercase tracking-[0.3em]">
                Do conceito à realidade
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-white">
              Não criamos apenas
              <br />
              <span className="italic text-white/80">mobiliário.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm sm:text-base leading-relaxed text-white/40">
              Criamos peças que nascem de uma ideia, ganham forma através da
              técnica e encontram o seu lugar no espaço. Cada projeto segue
              uma jornada pensada para que o resultado final seja tão
              exclusivo quanto quem o idealizou.
            </p>
          </motion.div>
        </div>

        {/* LINHA DE PROGRESSO */}
        <div className="relative mb-16 lg:mb-24">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-white/10 md:block" />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute left-0 top-1/2 hidden h-px w-full origin-left bg-gradient-brand md:block"
          />

          <div className="relative grid grid-cols-5 gap-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 + index * 0.15,
                  duration: 0.5,
                }}
                className="flex justify-center"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-bg-main text-[9px] font-bold tracking-widest text-primary shadow-[0_0_30px_rgba(255,255,255,0.03)] sm:h-11 sm:w-11 sm:text-[10px]">
                  {step.number}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ETAPAS */}
        <div className="space-y-5 sm:space-y-6">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-80px',
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden border border-white/[0.08] bg-white/[0.015] transition-all duration-700 hover:border-primary/30 hover:bg-white/[0.035]"
            >
              {/* NÚMERO GIGANTE */}
              <div className="pointer-events-none absolute -right-2 -top-10 select-none font-serif text-[150px] font-bold leading-none text-white/[0.025] transition-all duration-700 group-hover:text-primary/[0.06] sm:text-[190px] lg:text-[230px]">
                {step.number}
              </div>

              <div className="relative grid gap-8 p-7 sm:p-9 md:grid-cols-[110px_1fr_1.1fr] md:items-center md:gap-10 lg:p-12">
                {/* NÚMERO */}
                <div className="relative">
                  <span className="text-primary font-serif text-4xl sm:text-5xl">
                    {step.number}
                  </span>

                  <div className="mt-3 h-px w-8 bg-primary transition-all duration-500 group-hover:w-16" />
                </div>

                {/* TÍTULO */}
                <div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-primary/70">
                    {step.eyebrow}
                  </span>

                  <h3 className="mt-2 font-serif text-3xl text-white sm:text-4xl lg:text-5xl">
                    {step.title}
                  </h3>
                </div>

                {/* DESCRIÇÃO */}
                <div>
                  <p className="max-w-xl text-sm leading-relaxed text-white/45 transition-colors duration-500 group-hover:text-white/65 sm:text-base">
                    {step.description}
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="h-px w-5 bg-primary/60 transition-all duration-500 group-hover:w-10" />

                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                      {step.detail}
                    </span>
                  </div>
                </div>
              </div>

              {/* LINHA INFERIOR ANIMADA */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-brand transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* FRASE FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-y border-white/[0.08] py-12 sm:py-16 lg:mt-32 lg:py-20"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="text-primary text-[9px] uppercase tracking-[0.35em]">
                O resultado
              </span>

              <h3 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                O seu espaço.
                <span className="italic text-white/50">
                  {' '}
                  A sua identidade.
                </span>
                <br />
                Uma peça que não existe igual.
              </h3>
            </div>

            <button
              onClick={() => {
                const message = encodeURIComponent(
                  'Olá! Gostaria de iniciar um projeto personalizado com a DEZIGN. Quero conhecer o processo e conversar sobre as possibilidades para o meu espaço.'
                );

                window.open(
                  `https://wa.me/244935204868?text=${message}`,
                  '_blank'
                );
              }}
              className="
                group
                flex
                w-fit
                items-center
                gap-5
                border
                border-primary/50
                px-7
                py-4
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-primary
                transition-all
                duration-500
                hover:bg-primary
                hover:text-bg-main
                sm:px-9
                sm:py-5
              "
            >
              <span>Iniciar meu projeto</span>

              <span className="text-lg transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </button>
          </div>
        </motion.div>

        {/* ASSINATURA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 flex items-center justify-between"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] text-white/20">
            DEZIGN
          </span>

          <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">
            Precisão em cada detalhe.
          </span>
        </motion.div>
      </div>
    </section>
  );
};