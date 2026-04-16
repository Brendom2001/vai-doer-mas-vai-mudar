import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1]

const notCards = [
  {
    label: 'Não é fórmula mágica',
    desc: 'Nada aqui vai resolver sua vida em 7 passos com um mindset de abundância.',
  },
  {
    label: "Não é 'acredite em você'",
    desc: 'Sem autoajuda vazia, afirmações no espelho ou frases para o Instagram.',
  },
  {
    label: 'Não é leitura confortável',
    desc: 'Você vai sentir desconforto. Essa é exatamente a função dessa leitura.',
  },
  {
    label: 'Não é um manual perfeito',
    desc: 'Não existe vida perfeita esperando no final. Existe uma versão mais honesta de você.',
  },
]

function NotCard({ card, index, parentInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      animate={parentInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, ease: EASE, delay: 0.12 + index * 0.1 }}
      className="group relative p-6 bg-bg-card border border-white/5 rounded-2xl overflow-hidden card-premium"
    >
      {/* Strike bar */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center transition-all duration-350 group-hover:bg-red-500/15 group-hover:border-red-500/50">
          <svg
            className="w-2.5 h-2.5 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <p className="font-heading font-bold text-ink text-base">{card.label}</p>
      </div>
      <p className="font-body text-ink-muted text-sm leading-relaxed pl-8 group-hover:text-ink/80 transition-colors duration-350">
        {card.desc}
      </p>

      {/* Hover background layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-2xl border border-red-500/0 group-hover:border-red-500/15 transition-all duration-400 pointer-events-none" />
    </motion.div>
  )
}

export default function NotForEveryoneSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const contrastRef = useRef(null)
  const contrastInView = useInView(contrastRef, { once: true, margin: '-60px' })

  return (
    <section className="relative bg-bg-primary overflow-hidden">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none opacity-60"
        style={{ background: 'radial-gradient(ellipse at top, rgba(25,183,198,0.05) 0%, transparent 70%)' }}
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
              Deixa eu ser direta
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="section-title"
            >
              Isso aqui não é{' '}
              <span className="text-shimmer">motivação fofinha.</span>
            </motion.h2>
          </div>

          {/* NOT cards — staggered scale+fade */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            {notCards.map((card, i) => (
              <NotCard key={i} card={card} index={i} parentInView={inView} />
            ))}
          </div>

          {/* Contrast block */}
          <motion.div
            ref={contrastRef}
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={contrastInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: EASE }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute -inset-8 bg-glow-teal rounded-3xl blur-2xl opacity-45" />
            <div className="relative bg-gradient-to-br from-accent/10 via-bg-card to-bg-card border border-accent/25 rounded-2xl p-8 md:p-10 text-center">
              <div className="flex items-center gap-3 justify-center mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-accent/40" />
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-2 h-2 rounded-full bg-accent"
                />
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-accent/40" />
              </div>

              <p className="font-heading font-black text-xl md:text-2xl lg:text-3xl text-ink leading-tight">
                É um{' '}
                <span className="text-shimmer">choque de realidade</span>{' '}
                para quem cansou de prometer e não cumprir.
              </p>

              <div className="flex items-center gap-3 justify-center mt-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-accent/40" />
                <div className="w-2 h-2 rounded-full bg-accent-soft" />
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-accent/40" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
