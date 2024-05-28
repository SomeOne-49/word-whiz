import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '.75rem'
    },
    extend: {
      fontFamily: {
        baloo: ["var(--font-baloo)"],
      },
      colors: {
        primary: {
          DEFAULT: "#0279B2",
          light: "#BEEAFF",
          dark: "#80D6FF",
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
