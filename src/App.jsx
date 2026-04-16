import { motion, useScroll, useTransform } from 'framer-motion'
import HeroSection from './components/HeroSection'
import PainSection from './components/PainSection'
import NotForEveryoneSection from './components/NotForEveryoneSection'
import InsideBookSection from './components/InsideBookSection'
import TransformationSection from './components/TransformationSection'
import ImpactQuotesSection from './components/ImpactQuotesSection'
import OfferSection from './components/OfferSection'
import AuthorSection from './components/AuthorSection'
import UrgencySection from './components/UrgencySection'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'
import MobileStickyCTA from './components/MobileStickyCTA'

/* Desktop floating CTA — appears after scrolling past hero */
function DesktopFloatingCTA() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [520, 720], [0, 1])
  const y = useTransform(scrollY, [520, 720], [10, 0])

  return (
    <motion.div
      style={{ opacity, y, pointerEvents: 'auto' }}
      className="fixed top-5 right-5 z-50 hidden lg:block"
    >
      <a
        href="#checkout"
        className="group flex items-center gap-3 px-4 py-2.5 rounded-xl font-heading font-semibold text-sm text-ink"
        style={{
          background: 'rgba(18,26,46,0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(25,183,198,0.2)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(25,183,198,0.06)',
          transition: 'border-color 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s cubic-bezier(0.16,1,0.3,1), transform 0.3s cubic-bezier(0.16,1,0.3,1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(25,183,198,0.5)'
          e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.55), 0 0 24px rgba(25,183,198,0.12)'
          e.currentTarget.style.transform = 'translateY(-1px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(25,183,198,0.2)'
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(25,183,198,0.06)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        <span className="text-accent font-heading font-bold text-xs">R$ 19,90</span>
        <span className="w-px h-3.5 bg-white/12" />
        <span>Quero o Ebook</span>
        <svg
          className="w-3.5 h-3.5 text-accent transition-transform duration-300 group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </motion.div>
  )
}

export default function App() {
  return (
    <div className="relative bg-bg-primary text-ink font-body overflow-x-clip">
      {/* Mobile sticky CTA */}
      <MobileStickyCTA />

      {/* Desktop floating CTA */}
      <DesktopFloatingCTA />

      {/* Page sections */}
      <HeroSection />
      <PainSection />
      <NotForEveryoneSection />
      <InsideBookSection />
      <TransformationSection />
      <ImpactQuotesSection />
      <OfferSection />
      <AuthorSection />
      <UrgencySection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
