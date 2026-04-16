import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1]

const includes = [
  { icon: '📖', text: 'Ebook digital completo — acesso imediato' },
  { icon: '⚡', text: 'Linguagem real, direta e sem enrolação' },
  { icon: '🔄', text: 'Material para reler sempre que sentir que está travando' },
  { icon: '💡', text: 'Conteúdo que funciona em qualquer fase da vida' },
  { icon: '🎯', text: 'Foco em ação, não em teoria motivacional vazia' },
]

export default function OfferSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="oferta" className="relative bg-bg-primary overflow-hidden">
      {/* Top ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-72 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(25,183,198,0.1) 0%, transparent 70%)' }}
      />

      <div className="section-pad">
        <div className="container-max">
          {/* Header */}
          <div ref={ref} className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Seu próximo passo
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="section-title max-w-2xl mx-auto"
            >
              Não precisa ser perfeito.{' '}
              <span className="text-shimmer">Só precisa acontecer.</span>
            </motion.h2>
          </div>

          {/* Offer card */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.85, ease: EASE, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden">
              {/* Glow border */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(25,183,198,0.35) 0%, transparent 45%, rgba(94,230,216,0.15) 100%)',
                  padding: '1px',
                }}
              />

              <div className="relative p-8 md:p-10 bg-bg-card border border-accent/22 rounded-3xl">
                {/* Ambient glow inside */}
                <div
                  className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none opacity-15"
                  style={{ background: 'radial-gradient(circle, rgba(25,183,198,0.7) 0%, transparent 70%)' }}
                />

                {/* Product badge */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center text-sm">
                    📖
                  </div>
                  <div>
                    <p className="font-heading font-bold text-ink text-sm">Vai Doer, Mas Vai Mudar.</p>
                    <p className="font-body text-ink-dim text-xs">Ebook Digital</p>
                  </div>
                </div>

                <div className="glow-line mb-6" />

                {/* What's included */}
                <p className="font-heading font-semibold text-ink-muted text-xs uppercase tracking-widest mb-4">
                  O que você recebe
                </p>
                <ul className="space-y-3 mb-8">
                  {includes.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.55, ease: EASE, delay: 0.35 + i * 0.07 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-base leading-none">{item.icon}</span>
                      <span className="font-body text-ink-muted text-sm">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="glow-line mb-6" />

                {/* Price */}
                <div className="text-center mb-6">
                  <p className="font-body text-ink-dim text-sm mb-1">Investimento</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="font-body text-ink-dim text-base">R$</span>
                    <span className="font-heading font-black text-5xl md:text-6xl text-shimmer">19</span>
                    <span className="font-heading font-black text-3xl text-accent">,90</span>
                  </div>
                  <p className="font-body text-ink-dim text-xs mt-1">pagamento único · sem renovação</p>
                </div>

                {/* CTA */}
                <a href="#checkout" className="btn-primary w-full text-center text-base group">
                  Quero Meu Ebook Agora
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>

                {/* Microcopy */}
                <div className="flex items-center justify-center gap-4 mt-4">
                  <span className="flex items-center gap-1.5 text-ink-dim text-xs font-body">
                    <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    Compra 100% segura
                  </span>
                  <span className="text-ink-dim/30">·</span>
                  <span className="text-ink-dim text-xs font-body">Acesso digital imediato</span>
                  <span className="text-ink-dim/30">·</span>
                  <span className="text-ink-dim text-xs font-body">Sem assinatura</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
