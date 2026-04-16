import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1]

const quotes = [
  {
    text: 'Ninguém vai vir te salvar.',
    sub: 'E essa é a melhor notícia que você vai receber hoje.',
    size: 'lg',
  },
  {
    text: 'Quem espera estar pronta, nunca começa.',
    sub: 'A prontidão é uma ilusão que o medo criou pra você.',
    size: 'md',
  },
  {
    text: 'Você vive se preparando pra viver, mas não vive nunca.',
    sub: null,
    size: 'md',
  },
  {
    text: 'Faz por ti. Mesmo que ninguém veja.',
    sub: 'Especialmente quando ninguém vê.',
    size: 'lg',
  },
  {
    text: 'A motivação é visita. A disciplina é aluguel.',
    sub: 'Uma aparece quando quer. A outra você paga todo dia.',
    size: 'md',
  },
  {
    text: 'Vai doer, mas vai mudar.',
    sub: 'E você vai agradecer por não ter desistido.',
    size: 'xl',
    featured: true,
  },
]

const sizeMap = {
  md: { text: 'text-xl md:text-2xl', sub: 'text-sm md:text-base' },
  lg: { text: 'text-2xl md:text-3xl', sub: 'text-sm md:text-base' },
  xl: { text: 'text-3xl md:text-4xl lg:text-5xl', sub: 'text-base md:text-lg' },
}

function QuoteCard({ quote, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-55px' })
  const col = index % 3
  const delay = col * 0.1

  if (quote.featured) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40, scale: 0.97, filter: 'blur(10px)' }}
        animate={inView ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.9, ease: EASE, delay: 0.05 }}
        className="relative col-span-1 md:col-span-2 lg:col-span-3"
      >
        {/* Large ambient glow behind featured */}
        <div
          className="absolute -inset-12 rounded-3xl blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(25,183,198,0.12) 0%, transparent 65%)' }}
        />

        <div className="relative p-10 md:p-14 lg:p-16 rounded-2xl border border-accent/35 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(25,183,198,0.08) 0%, rgba(18,26,46,0.95) 50%, rgba(18,26,46,0.95) 100%)',
          }}
        >
          {/* Top accent */}
          <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          {/* Bottom accent */}
          <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-accent/25 rounded-tl-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-accent/25 rounded-br-2xl pointer-events-none" />

          {/* Quote mark */}
          <div
            className="font-heading font-black text-[6rem] leading-none absolute top-4 left-8 pointer-events-none select-none"
            style={{ color: 'rgba(25,183,198,0.09)' }}
            aria-hidden="true"
          >
            "
          </div>

          <div className="relative">
            <p className={`font-heading font-black text-shimmer leading-tight mb-5 ${sizeMap.xl.text}`}>
              {quote.text}
            </p>
            {quote.sub && (
              <p className={`font-body text-ink-muted ${sizeMap.xl.sub} max-w-lg mx-auto leading-relaxed`}>
                {quote.sub}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, scale: 0.96, filter: 'blur(6px)' }}
      animate={inView ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.72, ease: EASE, delay }}
      className="group relative p-7 md:p-8 rounded-2xl border border-white/5 bg-bg-card cursor-default overflow-hidden card-premium"
    >
      {/* Opening quote mark */}
      <div
        className="absolute top-4 left-5 font-heading font-black text-5xl leading-none pointer-events-none select-none"
        style={{ color: 'rgba(25,183,198,0.1)' }}
        aria-hidden="true"
      >
        "
      </div>

      <div className="pt-5">
        <p
          className={`font-heading font-black text-ink leading-tight mb-3 ${sizeMap[quote.size].text} group-hover:text-shimmer transition-all duration-500`}
        >
          {quote.text}
        </p>
        {quote.sub && (
          <p className={`font-body text-ink-dim ${sizeMap[quote.size].sub} leading-relaxed group-hover:text-ink-muted transition-colors duration-350`}>
            {quote.sub}
          </p>
        )}
      </div>

      {/* Bottom reveal line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
    </motion.div>
  )
}

export default function ImpactQuotesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative bg-bg-alt overflow-hidden">
      <div className="glow-line" />

      {/* Background glows */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ opacity: 0.08, background: 'radial-gradient(circle, rgba(25,183,198,0.5) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(94,230,216,0.5) 0%, transparent 70%)' }}
      />

      <div className="section-pad">
        <div className="container-max">
          {/* Header */}
          <div ref={ref} className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              Trechos que esse ebook vai jogar na sua cara
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="section-title max-w-2xl mx-auto"
            >
              Algumas{' '}
              <span className="text-shimmer">verdades incômodas</span>{' '}
              que você precisa ouvir.
            </motion.h2>
          </div>

          {/* Quotes grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {quotes.map((quote, i) => (
              <QuoteCard key={i} quote={quote} index={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="glow-line" />
    </section>
  )
}
