import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Example: Add custom colors or spacing here
      colors: {
        primary: '#1D4ED8', // You can change or remove this
      },
    },
  },
  plugins: [],
}

export default config
