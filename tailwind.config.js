/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#101C2A',      // Primary Deep Navy
          'navy-light': '#1A2D42',
          'navy-dark': '#0B131C',
          red: '#E31B23',       // Secondary / CTA Red
          'red-hover': '#C2131A',
          'red-light': '#FDF2F2',
          green: '#008A4B',     // Accent Green
          'green-light': '#E8F5E9',
          light: '#F5F7F9',     // Light Background
          charcoal: '#1F2933',  // Dark Text
          muted: '#616E7C',
          border: '#D9DEE3',    // Border
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(16, 28, 42, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(16, 28, 42, 0.16)',
        'red-glow': '0 4px 20px 0 rgba(227, 27, 35, 0.25)',
      },
    },
  },
  plugins: [],
};
