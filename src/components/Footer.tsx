import React, { useState } from 'react';
import { Logo } from './Logo';
import {
  Instagram,
  Linkedin,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  X,
  ArrowUpRight,
} from 'lucide-react';

type ModalType = 'privacy' | 'terms' | null;

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de entrar em contacto com a DEZIGN e conhecer melhor os serviços de mobiliário e projetos personalizados.'
    );

    window.open(
      `https://wa.me/244935204868?text=${message}`,
      '_blank'
    );
  };

  const handleNewsletter = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail('');
  };

  return (
    <>
      <footer className="relative overflow-hidden border-t border-white/5 bg-bg-main pt-20 pb-10 sm:pt-24">
        {/* DECORAÇÃO */}
        <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[140px]" />

        <div className="container relative z-10 mx-auto px-5 sm:px-8 lg:px-12">
          {/* CONTEÚDO PRINCIPAL */}
          <div className="mb-20 grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr_1.2fr] lg:gap-12">
            {/* BRAND */}
            <div className="space-y-7">
              <Logo className="h-16 origin-left" />

              <p className="max-w-sm text-sm leading-relaxed text-gray-dark">
                Elevando o conceito de morar através do design autoral e da
                exclusividade. Mobiliário de alto padrão para espaços que
                refletem identidade, personalidade e precisão.
              </p>

              {/* REDES SOCIAIS */}
              <div className="flex gap-3">
                {/* INSTAGRAM */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    border
                    border-white/10
                    text-gray-dark
                    transition-all
                    duration-300
                    hover:border-primary/50
                    hover:bg-primary
                    hover:text-bg-main
                  "
                >
                  <Instagram size={17} />
                </a>

                {/* LINKEDIN */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    border
                    border-white/10
                    text-gray-dark
                    transition-all
                    duration-300
                    hover:border-primary/50
                    hover:bg-primary
                    hover:text-bg-main
                  "
                >
                  <Linkedin size={17} />
                </a>

                {/* WHATSAPP */}
                <button
                  onClick={handleWhatsApp}
                  aria-label="WhatsApp"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    border
                    border-white/10
                    text-gray-dark
                    transition-all
                    duration-300
                    hover:border-primary/50
                    hover:bg-primary
                    hover:text-bg-main
                  "
                >
                  <MessageCircle size={17} />
                </button>
              </div>
            </div>

            {/* NAVEGAÇÃO */}
            <div>
              <h4 className="mb-7 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                Navegação
              </h4>

              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-gray-dark transition-colors hover:text-white"
                  >
                    Início
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="#sobre"
                    className="group flex items-center gap-2 text-sm text-gray-dark transition-colors hover:text-white"
                  >
                    Sobre a Marca
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="#colecoes"
                    className="group flex items-center gap-2 text-sm text-gray-dark transition-colors hover:text-white"
                  >
                    Coleções
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="#personalizacao"
                    className="group flex items-center gap-2 text-sm text-gray-dark transition-colors hover:text-white"
                  >
                    Personalização
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="#contato"
                    className="group flex items-center gap-2 text-sm text-gray-dark transition-colors hover:text-white"
                  >
                    Contacto
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACTO */}
            <div>
              <h4 className="mb-7 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                Contacto
              </h4>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-primary"
                  />

                  <div>
                    <span className="block text-[9px] uppercase tracking-[0.2em] text-white/25">
                      Localização
                    </span>

                    <span className="mt-1 block text-sm text-gray-dark">
                      Luanda, Angola
                    </span>
                  </div>
                </li>

                <li>
                  <button
                    onClick={handleWhatsApp}
                    className="group flex items-start gap-4 text-left"
                  >
                    <Phone
                      size={18}
                      className="mt-0.5 shrink-0 text-primary"
                    />

                    <div>
                      <span className="block text-[9px] uppercase tracking-[0.2em] text-white/25">
                        Telefone
                      </span>

                      <span className="mt-1 block text-sm text-gray-dark transition-colors group-hover:text-white">
                        +244 935 204 868
                      </span>
                    </div>
                  </button>
                </li>

                <li>
                  <a
                    href="mailto:hello@dezign.ao"
                    className="group flex items-start gap-4"
                  >
                    <Mail
                      size={18}
                      className="mt-0.5 shrink-0 text-primary"
                    />

                    <div>
                      <span className="block text-[9px] uppercase tracking-[0.2em] text-white/25">
                        E-mail
                      </span>

                      <span className="mt-1 block text-sm text-gray-dark transition-colors group-hover:text-white">
                        hello@dezign.ao
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* NEWSLETTER */}
            <div>
              <h4 className="mb-7 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                Newsletter
              </h4>

              <p className="mb-6 max-w-xs text-sm leading-relaxed text-gray-dark">
                Receba novidades, lançamentos e referências do universo DEZIGN.
              </p>

              {!subscribed ? (
                <form
                  onSubmit={handleNewsletter}
                  className="flex border border-white/10 bg-bg-secondary transition-colors focus-within:border-primary/40"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Seu e-mail"
                    required
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      px-4
                      py-3
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-white/20
                    "
                  />

                  <button
                    type="submit"
                    className="
                      bg-primary
                      px-4
                      py-3
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-widest
                      text-bg-main
                      transition-all
                      hover:brightness-110
                    "
                  >
                    OK
                  </button>
                </form>
              ) : (
                <div className="border border-primary/20 bg-primary/5 px-4 py-4">
                  <p className="text-xs text-primary">
                    Obrigado. Em breve receberá novidades da DEZIGN.
                  </p>
                </div>
              )}

              <p className="mt-4 text-[9px] leading-relaxed text-white/20">
                Conteúdo exclusivo. Sem spam.
              </p>
            </div>
          </div>

          {/* LINHA FINAL */}
          <div className="border-t border-white/5 pt-8">
            <div className="flex flex-col gap-6 text-[9px] uppercase tracking-[0.2em] text-gray-dark md:flex-row md:items-center md:justify-between">
              {/* COPYRIGHT */}
              <p>
                © {new Date().getFullYear()} DEZIGN — Todos os direitos
                reservados.
              </p>

              {/* RESOLVATECH */}
              <p>
                Desenvolvido por{' '}
                <a
                  href="https://resolvatech.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 transition-colors hover:text-primary"
                >
                  ResolvaTech
                </a>
              </p>

              {/* LEGAL */}
              <div className="flex gap-6">
                <button
                  onClick={() => setActiveModal('privacy')}
                  className="transition-colors hover:text-white"
                >
                  Privacidade
                </button>

                <button
                  onClick={() => setActiveModal('terms')}
                  className="transition-colors hover:text-white"
                >
                  Termos
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAIS LEGAIS */}
      {activeModal && (
        <div
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            bg-black/80
            p-5
            backdrop-blur-md
          "
          onClick={() => setActiveModal(null)}
        >
          <div
            className="
              relative
              max-h-[85vh]
              w-full
              max-w-2xl
              overflow-y-auto
              border
              border-white/10
              bg-bg-secondary
              p-7
              sm:p-10
              lg:p-12
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* FECHAR */}
            <button
              onClick={() => setActiveModal(null)}
              className="
                absolute
                right-5
                top-5
                flex
                h-9
                w-9
                items-center
                justify-center
                border
                border-white/10
                text-white/50
                transition-all
                hover:border-primary/50
                hover:bg-primary
                hover:text-bg-main
              "
              aria-label="Fechar"
            >
              <X size={17} />
            </button>

            {/* PRIVACIDADE */}
            {activeModal === 'privacy' && (
              <div>
                <span className="text-[9px] uppercase tracking-[0.35em] text-primary">
                  DEZIGN
                </span>

                <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
                  Política de Privacidade
                </h2>

                <div className="my-7 h-px w-12 bg-primary" />

                <div className="space-y-6 text-sm leading-relaxed text-white/50">
                  <p>
                    A DEZIGN valoriza a privacidade dos seus clientes e
                    visitantes. As informações fornecidas através deste site
                    são utilizadas exclusivamente para responder a pedidos de
                    contacto, atendimento e informações sobre os nossos
                    serviços.
                  </p>

                  <p>
                    Os dados enviados através dos formulários de contacto ou
                    newsletter não serão vendidos ou utilizados para fins
                    incompatíveis com a finalidade para a qual foram
                    fornecidos.
                  </p>

                  <p>
                    Poderemos utilizar informações de contacto para responder
                    a solicitações, apresentar propostas, esclarecer dúvidas e
                    comunicar novidades relacionadas com os serviços da DEZIGN.
                  </p>

                  <p>
                    Ao utilizar este site, o visitante reconhece que nenhum
                    sistema de transmissão ou armazenamento de dados na
                    internet pode ser considerado absolutamente seguro.
                  </p>

                  <p className="text-white/25 text-xs">
                    Esta é uma versão informativa e genérica da política de
                    privacidade. Recomenda-se a revisão jurídica do documento
                    antes da publicação definitiva.
                  </p>
                </div>
              </div>
            )}

            {/* TERMOS */}
            {activeModal === 'terms' && (
              <div>
                <span className="text-[9px] uppercase tracking-[0.35em] text-primary">
                  DEZIGN
                </span>

                <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
                  Termos de Utilização
                </h2>

                <div className="my-7 h-px w-12 bg-primary" />

                <div className="space-y-6 text-sm leading-relaxed text-white/50">
                  <p>
                    Ao aceder e utilizar este website, o visitante concorda
                    com os presentes termos de utilização e compromete-se a
                    utilizar o conteúdo disponibilizado de forma responsável.
                  </p>

                  <p>
                    As imagens, textos, identidade visual e demais conteúdos
                    apresentados pertencem à DEZIGN ou são utilizados com a
                    devida autorização. A sua reprodução ou utilização
                    comercial sem autorização não é permitida.
                  </p>

                  <p>
                    As informações apresentadas sobre produtos, serviços,
                    materiais, acabamentos e projetos têm caráter
                    informativo. As especificações finais serão definidas
                    individualmente em cada projeto ou proposta comercial.
                  </p>

                  <p>
                    A DEZIGN reserva-se o direito de atualizar conteúdos,
                    serviços e informações deste website sempre que
                    necessário.
                  </p>

                  <p className="text-white/25 text-xs">
                    Estes termos têm caráter informativo e devem ser revistos
                    juridicamente antes da publicação definitiva.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};