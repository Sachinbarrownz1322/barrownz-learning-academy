/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#2563eb', // refined primary royal blue from logo
          600: '#1d4ed8', // deep royal blue
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#0f172a',
          navy: '#0b1329', // ultra-premium deep navy header/footer
          slate: '#0f172a',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // bright energetic orange from logo & CTA
          600: '#ea580c',
          700: '#c2410c',
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          muted: '#64748b',
          dark: '#0f172a',
          card: '#ffffff',
        }
      },
      boxShadow: {
        'premium': '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.04)',
        'premium-hover': '0 20px 35px -5px rgba(37, 99, 235, 0.12), 0 10px 10px -5px rgba(15, 23, 42, 0.04)',
        'glow-brand': '0 0 25px -3px rgba(37, 99, 235, 0.35)',
        'glow-accent': '0 0 25px -3px rgba(249, 115, 22, 0.35)',
        'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      fontFamily: {
        sans: ['var(--font-ibm-plex-serif)', '"IBM Plex Serif"', 'serif'],
        serif: ['var(--font-ibm-plex-serif)', '"IBM Plex Serif"', 'serif'],
      }
    },
  },
  plugins: [],
};
