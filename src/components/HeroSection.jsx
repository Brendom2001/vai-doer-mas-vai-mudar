import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import BookMockup from './BookMockup'

const EASE = [0.16, 1, 0.3, 1]

const bullets = [
  'Chega de esperar o momento perfeito',
  'Aprenda a agir mesmo sem motivação',
  'Recomece com constância, não com culpa',
]

const badges = [
  { icon: '⚡', text: 'Leitura rápida, forte e prática' },
  { icon: '📖', text: 'Ebook digital' },
  { icon: '🔓', text: 'Acesso imediato' },
]

export default function HeroSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const mockupParallaxY = useTransform(scrollYProgress, [0, 1], [0, 72])
  const contentParallaxY = useTransform(scrollYProgress, [0, 1], [0, 28])
  const bgParallaxY = useTransform(scrollYProgress, [0, 1], [0, 45])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-primary"
    >
      {/* Animated ambient background */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgParallaxY }}>
        <motion.div
          className="absolute -top-48 -right-32 w-[750px] h-[750px] rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.14, 0.22, 0.14] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: 'radial-gradient(circle, rgba(25,183,198,0.32) 0%, transparent 68%)' }}
        />
        <motion.div
          className="absolute -bottom-36 -left-24 w-[560px] h-[560px] rounded-full"
          animate={{ scale: [1, 1.07, 1], opacity: [0.07, 0.13, 0.07] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          style={{ background: 'radial-gradient(circle, rgba(94,230,216,0.22) 0%, transparent 70%)' }}
        />
        {/* Center ambient bloom */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-[0.035]"
          style={{ background: 'radial-gradient(ellipse, rgba(25,183,198,1) 0%, transparent 65%)' }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: 'radial-gradient(circle, #19B7C6 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Horizontal accent lines */}
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/8 to-transparent" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
      </motion.div>

      <div className="container-max section-pad relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Text content */}
          <motion.div className="order-2 lg:order-1" style={{ y: contentParallaxY }}>
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, ease: EASE, delay: 0.05 }}
              className="eyebrow"
            >
              Para mulheres que cansaram de se abandonar
            </motion.p>

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 36, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.05, ease: EASE, delay: 0.15 }}
              className="font-heading font-black text-ink leading-[1.0] mb-5"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
            >
              Vai Doer.<br />
              <span className="text-shimmer">Mas Vai</span><br />
              Mudar.
            </motion.h1>

            {/* Divider — draws left to right */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.75, ease: EASE, delay: 0.3 }}
              style={{ originX: 0 }}
              className="w-16 h-0.5 bg-accent mb-5"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.88, ease: EASE, delay: 0.38 }}
              className="font-body text-ink-muted text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Um ebook direto e intenso para te tirar da procrastinação, da auto sabotagem e da vida que você vive prometendo mudar.
            </motion.p>

            {/* Bullets — staggered reveal */}
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.09, delayChildren: 0.48 } },
              }}
              className="space-y-3 mb-8"
            >
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -18 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.62, ease: EASE } },
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </span>
                  <span className="font-body text-ink-muted text-base leading-snug">{b}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, ease: EASE, delay: 0.78 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {badges.map((b, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 bg-bg-card border border-white/8 rounded-full px-3 py-1.5 text-xs font-body text-ink-muted"
                >
                  <span>{b.icon}</span>
                  <span>{b.text}</span>
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: EASE, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a href="#checkout" className="btn-primary text-center group">
                Quero Começar Agora
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
              <a href="#checkout" className="btn-outline text-center">
                Ler e Sair da Estagnação
              </a>
            </motion.div>

            {/* Price note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.15 }}
              className="mt-4 text-ink-dim text-sm font-body"
            >
              Por apenas{' '}
              <span className="text-accent font-heading font-bold">R$ 19,90</span>{' '}
              · Compra 100% online · Acesso imediato
            </motion.p>
          </motion.div>

          {/* Right — Book mockup */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <BookMockup parallaxY={mockupParallaxY} />
          </div>
        </div>
      </div>

      {/* Bottom depth fade */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent pointer-events-none" />
    </section>
  )
}
