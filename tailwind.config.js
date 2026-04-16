/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0B1020',
          card: '#121A2E',
          alt: '#0F1728',
          dark: '#060914',
        },
        accent: {
          DEFAULT: '#19B7C6',
          soft: '#5EE6D8',
          dim: '#0E8C99',
        },
        ink: {
          DEFAULT: '#F5F7FB',
          muted: '#B7C0D4',
          dim: '#6B7A99',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'glow-teal': 'radial-gradient(ellipse at center, rgba(25,183,198,0.15) 0%, transparent 70%)',
        'glow-teal-sm': 'radial-gradient(ellipse at center, rgba(25,183,198,0.08) 0%, transparent 60%)',
        'hero-grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'glow': '0 0 40px rgba(25,183,198,0.25)',
        'glow-sm': '0 0 20px rgba(25,183,198,0.15)',
        'glow-lg': '0 0 80px rgba(25,183,198,0.2)',
        'glow-xs': '0 0 12px rgba(25,183,198,0.12)',
        'card': '0 4px 32px rgba(0,0,0,0.4)',
        'card-hover': '0 12px 56px rgba(0,0,0,0.65), 0 0 0 1px rgba(25,183,198,0.08)',
        'floating': '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(25,183,198,0.1)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(15deg)' },
          '50%': { transform: 'translateY(-12px) rotate(15deg)' },
        },
        pulse_glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(25,183,198,0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(25,183,198,0.45)' },
        },
        ambientDrift: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%': { transform: 'translate(18px, -14px) scale(1.04)' },
          '50%': { transform: 'translate(-8px, 20px) scale(0.97)' },
          '75%': { transform: 'translate(-16px, -8px) scale(1.02)' },
        },
        ambientDriftAlt: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-20px, 12px) scale(1.05)' },
          '66%': { transform: 'translate(12px, -18px) scale(0.96)' },
        },
        btnPulse: {
          '0%, 100%': { boxShadow: '0 0 24px rgba(25,183,198,0.22), 0 4px 16px rgba(0,0,0,0.3)' },
          '50%': { boxShadow: '0 0 52px rgba(25,183,198,0.44), 0 4px 20px rgba(0,0,0,0.35)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        float: 'float 6s ease-in-out infinite',
        pulse_glow: 'pulse_glow 3s ease-in-out infinite',
        ambientDrift: 'ambientDrift 22s ease-in-out infinite',
        ambientDriftAlt: 'ambientDriftAlt 28s ease-in-out infinite',
        btnPulse: 'btnPulse 3s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '350': '350ms',
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
