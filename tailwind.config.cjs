module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        /* Footer blue — primary brand dark */
        blue: {
          50: '#eef2f8',
          100: '#d9e2f0',
          200: '#b3c5e0',
          300: '#7a9bc4',
          400: '#4a6f9a',
          500: '#2d4f7a',
          600: '#234063',
          700: '#1c3352',
          800: '#1a2f4a',
          900: '#1e3a8a',
          950: '#172554',
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        ink: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(180deg, rgba(23,37,84,0.88) 0%, rgba(10,10,10,0.75) 100%)',
      },
      boxShadow: {
        card: '0 4px 24px rgba(10, 10, 10, 0.06)',
        'card-hover': '0 12px 40px rgba(10, 10, 10, 0.1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
