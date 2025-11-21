export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B447C3',
        'primary-light': '#5bcefa',
      },
      animation: {
        'pop': 'pop 0.4s ease-out',
        'fall-in': 'fallIn 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.05) forwards',
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(0)' },
          '60%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        fallIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100vh) scale(0.8)',
          },
          '60%': {
            opacity: '1',
            transform: 'translateY(10px) scale(1.05)',
          },
          '80%': {
            transform: 'translateY(-10px) scale(0.95)',
          },
          '90%': {
            transform: 'translateY(5px) scale(1.02)',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
