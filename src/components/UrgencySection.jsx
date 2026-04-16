import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1]

export default function UrgencySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative bg-bg-dark overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(25,183,198,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Geometric lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-accent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-accent" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-accent" />
      </div>

      <div className="section-pad">
        <div className="container-max">
          <div ref={ref} className="max-w-2xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-accent/30 rounded-full bg-accent/5"
            >
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-accent"
              />
              <span className="font-body text-accent text-xs uppercase tracking-widest">Urgência real</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 26, filter: 'blur(8px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
              className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-ink leading-tight mb-6"
            >
              Quanto mais você adia,{' '}
              <span className="text-shimmer">mais fortalece o ciclo.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="font-body text-ink-muted text-lg leading-relaxed mb-10 max-w-lg mx-auto"
            >
              Esperar o momento certo também é uma escolha. E quase sempre é a escolha que te mantém exatamente no mesmo lugar.
            </motion.p>

            {/* Visual emphasis */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.75, ease: EASE, delay: 0.32 }}
              className="relative mb-10"
            >
              <div className="p-5 bg-bg-card border border-white/5 rounded-2xl max-w-sm mx-auto">
                <div className="flex items-center justify-between text-center gap-4">
                  {[
                    { label: 'Hoje', state: 'Ciclo ativo', color: 'text-red-400' },
                    { label: '→', state: '', color: 'text-ink-dim' },
                    { label: 'Amanhã', state: 'Ciclo mais forte', color: 'text-red-500' },
                    { label: '→', state: '', color: 'text-ink-dim' },
                    { label: 'Agora', state: 'Você decide', color: 'text-accent' },
                  ].map((item, i) => (
                    <div key={i} className="flex-1">
                      <p className={`font-heading font-bold text-xs md:text-sm ${item.color}`}>{item.label}</p>
                      {item.state && (
                        <p className="font-body text-ink-dim text-[10px] mt-0.5 leading-tight">{item.state}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.a
              href="#checkout"
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="btn-primary text-base group"
            >
              Começar Agora
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-3 font-body text-ink-dim text-xs"
            >
              R$ 19,90 · Acesso digital imediato
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
