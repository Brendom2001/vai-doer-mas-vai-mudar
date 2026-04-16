import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AuthorSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative bg-bg-alt overflow-hidden">
      <div className="glow-line" />

      <div className="section-pad">
        <div className="container-max">
          <div
            ref={ref}
            className="max-w-3xl mx-auto"
          >
            {/* Layout */}
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
              {/* Avatar placeholder — abstract, editorial */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex-shrink-0 mx-auto md:mx-0"
              >
                <div className="relative w-24 h-24 md:w-28 md:h-28">
                  {/* Glow ring */}
                  <div className="absolute -inset-2 rounded-full bg-glow-teal-sm blur-xl opacity-60" />
                  {/* Avatar circle */}
                  <div className="relative w-full h-full rounded-full bg-bg-card border border-accent/20 flex items-center justify-center overflow-hidden">
                    {/* Abstract pattern inside */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-accent rounded-full" />
                      <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-accent-soft rounded-full" />
                    </div>
                    <span className="font-heading font-black text-2xl text-accent z-10">LF</span>
                  </div>
                </div>
              </motion.div>

              {/* Text content */}
              <div className="flex-1">
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="eyebrow"
                >
                  Escrito por quem já viveu isso na pele
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-heading font-black text-2xl md:text-3xl text-ink mb-4"
                >
                  Laura Ferreira
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="space-y-3"
                >
                  <p className="font-body text-ink-muted text-base leading-relaxed">
                    O <em className="not-italic font-semibold text-ink">"Vai Doer, Mas Vai Mudar."</em> nasceu da vivência real de quem entendeu que mudança não começa com motivação perfeita — começa com verdade, desconforto e decisão.
                  </p>
                  <p className="font-body text-ink-muted text-base leading-relaxed">
                    Não é um texto montado para parecer bonito. É um chamado para agir. Para quem está cansada de prometer e continuar no mesmo lugar.
                  </p>
                </motion.div>

                {/* Signature line */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="mt-6 flex items-center gap-3"
                >
                  <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent max-w-[60px]" />
                  <span className="font-heading font-semibold text-accent text-sm italic">
                    — Laura Ferreira
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glow-line" />
    </section>
  )
}
