import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'system-gray': '#3B3A48',
        'system-light-gray': '#E6E9EC',
        'system-purple': '#7A40F2',
      },
    },
  },
  plugins: [],
};
export default config;
