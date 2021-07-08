module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif', 'ui-sans-serif'],
    },
    backgroundSize: {
      'auto-full': 'auto 100%',
    },
    backgroundPosition: {
      half: '50%',
    },
    extend: {
      colors: {
        primary: {
          light: '#4e6baf',
          DEFAULT: '#1f46a1',
          dark: '#0d3aa3',
        },
        secondary: '#ff552b',
        mute: '#929191',
      },
      // backgroundImage: (theme) => ({
      //   hero: "url('/xl-hero-desktop_2021.webp')",
      // }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
