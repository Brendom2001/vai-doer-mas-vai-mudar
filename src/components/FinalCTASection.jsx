import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1]

export default function FinalCTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative bg-bg-primary overflow-hidden pb-32 md:pb-24">
      {/* Dramatic layered glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.06, 1], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(ellipse, rgba(25,183,198,0.6) 0%, transparent 65%)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(ellipse, rgba(94,230,216,0.7) 0%, transparent 70%)' }}
      />

      {/* Top accent line */}
      <div className="glow-line" />

      <div className="section-pad">
        <div className="container-max">
          <div ref={ref} className="max-w-3xl mx-auto text-center">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Você chegou até aqui
            </motion.p>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 32, filter: 'blur(10px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              className="font-heading font-black text-ink leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Você não precisa de mais uma promessa.{' '}
              <span className="text-shimmer">Precisa de um ponto de virada.</span>
            </motion.h2>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.22 }}
              className="font-body text-ink-muted text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
            >
              Se esse ebook te incomodou só pela página, imagine o que ele pode fazer quando você ler de verdade.
            </motion.p>

            {/* CTA block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: EASE, delay: 0.32 }}
              className="flex flex-col items-center gap-4"
            >
              <a
                href="#checkout"
                className="btn-primary text-lg px-12 py-5 w-full sm:w-auto group"
              >
                Quero Começar Agora
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              <p className="font-body text-ink-dim text-sm">
                R$ 19,90 · Ebook digital · Acesso imediato
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap justify-center gap-4 mt-1">
                {[
                  { icon: '🔒', text: 'Compra segura' },
                  { icon: '📲', text: 'Entrega digital' },
                  { icon: '♾️', text: 'Acesso permanente' },
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-ink-dim text-xs font-body">
                    <span>{item.icon}</span>
                    {item.text}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Decorative bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.55 }}
              className="mt-16 flex items-center gap-4 justify-center"
            >
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-accent/20 max-w-[120px]" />
              <p className="font-heading font-black text-accent/35 text-sm italic tracking-wide">
                Vai Doer, Mas Vai Mudar.
              </p>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-accent/20 max-w-[120px]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
