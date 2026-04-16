import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1]

const chapters = [
  {
    number: '01',
    title: 'A verdade que você evita',
    desc: 'Entenda por que o medo, o conforto e a desculpa travam a vida que você diz querer — e como parar de se enganar com isso.',
    accent: '#19B7C6',
  },
  {
    number: '02',
    title: 'O ciclo que te prende',
    desc: 'Descubra como a repetição do automático vai te empobrecendo por dentro e tornando o conformismo cada vez mais fácil.',
    accent: '#5EE6D8',
  },
  {
    number: '03',
    title: 'Ser a chata que se escolhe',
    desc: 'Aprenda a dizer não, bancar sua paz e parar de viver para agradar quem nem vai aparecer quando você precisar.',
    accent: '#19B7C6',
  },
  {
    number: '04',
    title: 'Não era preguiça. Era exaustão.',
    desc: 'Saia da sobrecarga emocional e encontre direção em vez de continuar se anestesiando com o que não te alimenta.',
    accent: '#5EE6D8',
  },
  {
    number: '05',
    title: 'O que você faz quando ninguém está vendo?',
    desc: 'Construa disciplina real, sem depender de aplauso, validação ou plateia. O que você escolhe na sombra define o que você vira.',
    accent: '#19B7C6',
  },
  {
    number: '06',
    title: 'Constância antes da força',
    desc: 'Pare de esperar virar outra pessoa para começar. É exatamente o começo imperfeito que te transforma no caminho.',
    accent: '#5EE6D8',
  },
]

function ChapterCard({ chapter, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-55px' })
  const col = index % 3

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.68, ease: EASE, delay: col * 0.1 }}
      className="group card-base card-premium p-6 flex flex-col gap-4 cursor-default"
    >
      {/* Chapter number + accent line */}
      <div className="flex items-center justify-between">
        <span
          className="font-heading font-black text-4xl leading-none"
          style={{
            color: `${chapter.accent}35`,
          }}
        >
          {chapter.number}
        </span>
        <motion.div
          className="h-px transition-all duration-500"
          style={{ backgroundColor: chapter.accent, width: '32px' }}
          whileHover={{ width: '64px' }}
        />
      </div>

      {/* Title */}
      <h3 className="font-heading font-bold text-lg text-ink leading-tight group-hover:text-shimmer transition-all duration-400">
        {chapter.title}
      </h3>

      {/* Description */}
      <p className="font-body text-ink-muted text-sm leading-relaxed flex-1 group-hover:text-ink/75 transition-colors duration-350">
        {chapter.desc}
      </p>

      {/* Bottom accent reveal on hover */}
      <div
        className="h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(to right, ${chapter.accent}60, transparent)` }}
      />
    </motion.div>
  )
}

export default function InsideBookSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative bg-bg-alt overflow-hidden">
      <div className="glow-line" />

      {/* Background ambient */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ opacity: 0.08, background: 'radial-gradient(circle, rgba(25,183,198,0.06) 0%, transparent 70%)' }}
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
              O que você vai encarar aqui dentro
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="section-title max-w-2xl mx-auto"
            >
              Cada capítulo foi escrito para{' '}
              <span className="text-shimmer">te incomodar do jeito certo.</span>
            </motion.h2>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {chapters.map((chapter, i) => (
              <ChapterCard key={i} chapter={chapter} index={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="glow-line" />
    </section>
  )
}
