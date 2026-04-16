import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1]

const phrases = [
  { prefix: 'Mais', highlight: 'ação' },
  { prefix: 'Menos', highlight: 'promessa' },
  { prefix: 'Mais', highlight: 'constância' },
  { prefix: 'Menos', highlight: 'culpa' },
  { prefix: 'Mais', highlight: 'coragem prática' },
  { prefix: 'Menos', highlight: 'autoabandono' },
]

const transformations = [
  { before: 'Promessas que nunca saem do lugar', after: 'Ação, mesmo que imperfeita' },
  { before: 'Confusão mental e excesso de pensamento', after: 'Clareza e direção real' },
  { before: 'Culpa por não ter feito', after: 'Constância que não depende de humor' },
  { before: 'Desculpa elegante e justificativa', after: 'Responsabilidade sem autopunição' },
  { before: 'Autoabandono disfarçado de cansaço', after: 'Autocuidado que não é pausa, é escolha' },
  { before: 'Espera pela coragem perfeita', after: 'Coragem prática no mundo real' },
]

/* ── Phrases block — scroll-triggered, sem sticky ── */
function PhrasesBlock() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="section-pad pb-0">
      <div className="container-max">
        <p className="eyebrow text-center mb-10">O que muda depois dessa leitura</p>

        {/* Two-column phrase grid on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 max-w-3xl mx-auto">
          {phrases.map((phrase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.07 }}
              className="flex items-baseline gap-3"
            >
              <span className="font-heading font-black text-ink-dim/45 text-xl md:text-2xl flex-shrink-0 w-16 text-right">
                {phrase.prefix}
              </span>
              <span className="font-heading font-black text-shimmer text-2xl md:text-3xl">
                {phrase.highlight}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Before/after row ── */
function TransformRow({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-45px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, ease: EASE, delay: index * 0.07 }}
      className="group grid grid-cols-[1fr,auto,1fr] items-center gap-3 md:gap-6 py-4 border-b border-white/5 last:border-0"
    >
      {/* Before */}
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-1 h-10 rounded-full bg-ink-dim/25" />
        <p className="font-body text-ink-dim text-sm md:text-base leading-snug line-through decoration-ink-dim/35">
          {item.before}
        </p>
      </div>

      {/* Arrow */}
      <div className="flex-shrink-0 flex flex-col items-center gap-1">
        <div className="w-px h-4 bg-gradient-to-b from-ink-dim/15 to-accent/55" />
        <svg
          className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>

      {/* After */}
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-1 h-10 rounded-full bg-accent group-hover:shadow-glow-xs transition-all duration-350" />
        <p className="font-body text-ink text-sm md:text-base leading-snug font-medium group-hover:text-accent-soft transition-colors duration-350">
          {item.after}
        </p>
      </div>
    </motion.div>
  )
}

export default function TransformationSection() {
  const tableHeaderRef = useRef(null)
  const tableHeaderInView = useInView(tableHeaderRef, { once: true, margin: '-80px' })
  const subRef = useRef(null)
  const subInView = useInView(subRef, { once: true, margin: '-60px' })

  return (
    <section className="relative bg-bg-primary">
      {/* Ambient center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ opacity: 0.08, background: 'radial-gradient(ellipse, rgba(25,183,198,0.35) 0%, transparent 70%)' }}
      />

      {/* Phrases block */}
      <PhrasesBlock />

      {/* Divider */}
      <div className="glow-line mt-12" />

      {/* Before/after transformation table */}
      <div className="section-pad">
        <div className="container-max">
          {/* Table header */}
          <div ref={tableHeaderRef} className="text-center mb-3">
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={tableHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE }}
              className="section-title max-w-3xl mx-auto mb-4"
            >
              Não porque a vida fica fácil.{' '}
              <span className="text-shimmer">Porque você para de se abandonar.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={tableHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="font-body text-ink-muted text-base md:text-lg max-w-xl mx-auto"
            >
              Essa leitura não promete transformação da noite pro dia. Ela te dá o empurrão que você precisava para parar de fingir que tá tudo bem.
            </motion.p>
          </div>

          {/* Table */}
          <div className="max-w-3xl mx-auto mt-12">
            {transformations.map((item, i) => (
              <TransformRow key={i} item={item} index={i} />
            ))}
          </div>

          {/* Footnote */}
          <motion.div
            ref={subRef}
            initial={{ opacity: 0, y: 16 }}
            animate={subInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="text-center mt-12"
          >
            <p className="font-body text-ink-dim text-sm italic">
              * Os resultados dependem de você se permitir desconforto. Essa é a condição.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
