import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/constants/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    extend: {
      colors: {
        gray100: '#f8f9fa',
        gray200: '#e9ecef',
        gray300: '#dee2e6',
        gray400: '#ced4da',
        gray500: '#adb5bd',
        gray600: '#6c757d',
        gray700: '#495057',
        gray800: '#343a40',
        gray900: '#212529',
        yellow: '#ffbe0b',
        orange: '#fb5607',
        red: '#ff006e',
        purple: '#8338ec',
        blue: '#3a86ff',
      },
      fontSize: {
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '40': '40px',
      },
    },
  },
  plugins: [],
};
export default config;
