import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Resort-inspired system
        abyss: '#04141d',      // deepest pool ink
        deep: '#072633',       // deep water
        marine: '#0b3a4a',     // pool wall
        teal: '#0f6d74',       // profundo turquoise
        aqua: '#3fb4b0',       // turquoise
        crystal: '#bfe9e6',    // crystal water light
        mist: '#e8f3f2',       // pale water
        travertine: '#e9e0d2', // stone
        sand: '#d9c8ad',       // warm sand
        stone: '#b9a888',      // natural stone
        gold: '#c39b57',       // discreet gold
        goldlite: '#e3c98d',
        ink: '#0a1418',
        cloud: '#f6f3ec',      // off-white
      },
      fontFamily: {
        serif: ['var(--font-editorial)', 'Georgia', 'serif'],
        sans: ['var(--font-modern)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.22em',
        wider2: '0.34em',
      },
      // Register non-default opacity steps so slash utilities (e.g. border-crystal/8) emit.
      opacity: {
        8: '0.08', 12: '0.12', 15: '0.15', 18: '0.18',
        45: '0.45', 55: '0.55', 65: '0.65', 85: '0.85',
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.16, 1, 0.3, 1)',
        water: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        shimmer: {
          '0%,100%': { transform: 'translate3d(0,0,0)', opacity: '0.5' },
          '50%': { transform: 'translate3d(2%,-1.5%,0)', opacity: '0.85' },
        },
        caustic: {
          '0%': { backgroundPosition: '0% 0%, 0% 0%' },
          '100%': { backgroundPosition: '120% 60%, -80% -40%' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        sheen: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 9s ease-in-out infinite',
        caustic: 'caustic 26s linear infinite alternate',
        floaty: 'floaty 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
