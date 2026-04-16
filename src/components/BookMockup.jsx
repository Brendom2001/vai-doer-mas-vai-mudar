import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function BookMockup({ parallaxY = 0 }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotX = useSpring(useTransform(mouseY, [-500, 500], [5, -5]), {
    stiffness: 55,
    damping: 22,
    mass: 0.8,
  })
  const rotY = useSpring(useTransform(mouseX, [-500, 500], [-8, 8]), {
    stiffness: 55,
    damping: 22,
    mass: 0.8,
  })

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover)')
    if (!mq.matches) return

    const handleMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  return (
    <div className="flex items-center justify-center select-none">
      <motion.div
        initial={{ opacity: 0, rotateY: 42, x: 32, filter: 'blur(12px)' }}
        animate={{ opacity: 1, rotateY: 0, x: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        style={{ y: parallaxY }}
        className="relative gpu"
      >
        {/* Outer animated glow bloom */}
        <motion.div
          className="absolute -inset-12 rounded-full pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.45, 0.72, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(25,183,198,0.2) 0%, transparent 65%)' }}
        />
        {/* Secondary halo */}
        <motion.div
          className="absolute -inset-6 rounded-full pointer-events-none"
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.38, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ background: 'radial-gradient(ellipse, rgba(94,230,216,0.12) 0%, transparent 70%)' }}
        />

        {/* Book with float + mouse tilt */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px',
            rotateX: rotX,
            rotateY: rotY,
          }}
          className="relative"
        >
          {/* Book spine */}
          <div
            className="absolute left-0 top-0 bottom-0 w-5 rounded-l-md"
            style={{
              background: 'linear-gradient(to right, #04080F, #0A1020)',
              transform: 'rotateY(-90deg) translateZ(10px)',
              transformOrigin: 'right center',
              boxShadow: 'inset -2px 0 8px rgba(0,0,0,0.8)',
            }}
          >
            <div className="flex items-center justify-center h-full">
              <span
                className="writing-vertical text-[7px] font-heading font-bold text-accent/60 tracking-[0.3em] uppercase"
                style={{ writingMode: 'vertical-rl' }}
              >
                Vai Doer, Mas Vai Mudar.
              </span>
            </div>
          </div>

          {/* Book cover */}
          <div
            className="relative w-52 md:w-64 h-72 md:h-[352px] rounded-r-xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0F1728 0%, #0B1020 50%, #060914 100%)',
              boxShadow:
                '6px 10px 56px rgba(0,0,0,0.88), 0 0 90px rgba(25,183,198,0.18), inset -1px 0 0 rgba(255,255,255,0.05)',
              border: '1px solid rgba(25,183,198,0.15)',
              minHeight: '288px',
            }}
          >
            {/* Decorative top accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-[0.85]" />

            {/* Abstract geometric decoration */}
            <div className="absolute top-4 right-4 w-24 h-24 opacity-10">
              <div className="absolute inset-0 border border-accent rounded-full" />
              <div className="absolute inset-3 border border-accent-soft rounded-full" />
              <div className="absolute inset-6 border border-accent rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
              </div>
            </div>

            {/* Cover content */}
            <div className="absolute inset-0 flex flex-col p-5 md:p-6">
              <div className="mb-3">
                <span className="inline-block text-[9px] font-body font-semibold text-accent uppercase tracking-[0.25em] border border-accent/30 rounded px-2 py-0.5">
                  Ebook Digital
                </span>
              </div>
              <div className="w-8 h-0.5 bg-accent mb-4" />
              <div className="flex-1">
                <h3
                  className="font-heading font-black text-ink leading-[1.05] mb-1"
                  style={{ fontSize: 'clamp(1.3rem, 4vw, 1.65rem)' }}
                >
                  Vai Doer,
                </h3>
                <h3
                  className="font-heading font-black leading-[1.05] mb-1 text-shimmer"
                  style={{ fontSize: 'clamp(1.3rem, 4vw, 1.65rem)' }}
                >
                  Mas Vai
                </h3>
                <h3
                  className="font-heading font-black text-ink leading-[1.05]"
                  style={{ fontSize: 'clamp(1.3rem, 4vw, 1.65rem)' }}
                >
                  Mudar.
                </h3>
              </div>
              <div>
                <div className="glow-line mb-3" />
                <div className="flex items-center justify-between">
                  <span className="text-ink-muted text-[10px] font-body font-medium tracking-wide">
                    Laura Ferreira
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <div className="w-1 h-1 rounded-full bg-accent-soft" />
                    <div className="w-1 h-1 rounded-full bg-accent/40" />
                  </div>
                </div>
              </div>
            </div>

            {/* Texture overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)',
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          </div>

          {/* Drop shadow beneath book */}
          <div
            className="absolute -bottom-2 left-2 right-2 h-5 rounded-b-xl"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.35), transparent)',
              filter: 'blur(8px)',
            }}
          />
        </motion.div>

        {/* Price badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -bottom-4 -right-4 bg-accent text-bg-dark font-heading font-black text-sm px-3 py-1.5 rounded-xl shadow-glow z-10"
        >
          R$ 19,90
        </motion.div>
      </motion.div>
    </div>
  )
}
