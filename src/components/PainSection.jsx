import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1]

const pains = [
  { icon: '◈', text: 'Você sabe exatamente o que precisa fazer — e não faz.' },
  { icon: '◈', text: 'Vive adiando a própria vida como se houvesse uma segunda chance garantida.' },
  { icon: '◈', text: 'Espera a motivação aparecer do nada, como se ela fosse bater na sua porta.' },
  { icon: '◈', text: 'Começa. Para. Se culpa. Promete recomeçar. E o ciclo continua.' },
  { icon: '◈', text: 'Se sente cansada, travada e frustrada consigo mesma — sem saber como sair.' },
  { icon: '◈', text: 'Vê o tempo passar e continua se devendo. De novo. E de novo.' },
]

function PainCard({ pain, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, ease: EASE, delay: (index % 2) * 0.08 }}
      className="group flex items-start gap-4 p-5 bg-bg-card border border-white/5 rounded-xl card-premium"
    >
      <span className="flex-shrink-0 text-accent text-lg leading-none mt-0.5 group-hover:scale-110 transition-transform duration-300">
        {pain.icon}
      </span>
      <p className="font-body text-ink-muted text-base leading-relaxed group-hover:text-ink transition-colors duration-350">
        {pain.text}
      </p>
    </motion.div>
  )
}

function ClosingPunch() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease: EASE }}
      className="relative max-w-2xl mx-auto text-center"
    >
      <div className="absolute -inset-8 bg-glow-teal-sm rounded-3xl blur-2xl" />
      <div className="relative p-8 border border-accent/15 rounded-2xl bg-bg-card/50 backdrop-blur-sm">
        <div className="w-8 h-0.5 bg-accent mx-auto mb-5" />
        <p className="font-heading font-bold text-xl md:text-2xl text-ink leading-snug">
          "Talvez o que esteja te faltando não seja{' '}
          <em className="not-italic text-shimmer">mais tempo</em>.<br />
          Seja parar de se enganar."
        </p>
      </div>
    </motion.div>
  )
}

export default function PainSection() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section className="relative bg-bg-alt">
      <div className="glow-line" />

      <div className="section-pad">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-12" ref={titleRef}>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Reconhece alguma dessas?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="section-title max-w-2xl mx-auto"
            >
              Você não está sem potencial.{' '}
              <span className="text-shimmer">Está presa no mesmo ciclo.</span>
            </motion.h2>
          </div>

          {/* Pain grid — 1 col mobile, 2 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            {pains.map((pain, i) => (
              <PainCard key={i} pain={pain} index={i} />
            ))}
          </div>

          {/* Closing punch */}
          <ClosingPunch />
        </div>
      </div>

      <div className="glow-line" />
    </section>
  )
}
