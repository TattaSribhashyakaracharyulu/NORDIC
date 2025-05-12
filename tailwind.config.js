/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
        secondary: '#6366f1',
        accent: '#f59e0b',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.primary.700'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [],
};