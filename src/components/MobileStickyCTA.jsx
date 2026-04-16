import { motion, useScroll, useTransform } from 'framer-motion'

export default function MobileStickyCTA() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [250, 420], [0, 1])
  const y = useTransform(scrollY, [250, 420], [16, 0])

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden mobile-sticky"
    >
      <div
        className="px-4 pt-3 pb-3"
        style={{
          background: 'linear-gradient(to top, rgba(6,9,20,0.97) 0%, rgba(6,9,20,0.90) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(25,183,198,0.18)',
          boxShadow: '0 -12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(25,183,198,0.04)',
        }}
      >
        <div className="flex items-center gap-3">
          {/* Price */}
          <div className="flex-shrink-0">
            <p className="font-body text-ink-dim text-[10px] leading-none mb-0.5">apenas</p>
            <p className="font-heading font-black text-accent text-lg leading-none">R$ 19,90</p>
          </div>

          {/* Divider */}
          <div className="w-px h-9 bg-white/8" />

          {/* CTA button */}
          <a
            href="#checkout"
            className="btn-primary flex-1 text-sm py-3 text-center group"
          >
            Quero Começar Agora
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
