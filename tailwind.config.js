/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: '#d4d4d4',
        bg: '#1e1e1e',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        dash: 'dash 1.5s ease-in-out infinite',
        rotate: 'rotate 2s linear infinite',
      },
      keyframes: {
        dash: {
          '0%': {
            strokeDasharray: '1, 200',
            strokeDashoffset: '0',
          },
          '50%': {
            strokeDasharray: '90, 200',
            strokeDashoffset: '-35px',
          },
          '100%': {
            strokeDashoffset: '-125px',
          },
        },
        rotate: {
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
