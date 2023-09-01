const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'main-0': '#303943',
      'main-1': '#F5F5F5',
      'main-2': '#FFFFFF',
      'sec-0': '#4FC1A6',
      'sec-1': '#2CDAB1',
      'sec-2': '#6AF3CA',
      'thi-0': '#FA6555',
      'thi-1': '#F7786B',
      'thi-2': '#FF8D82',
      'fou-0': '#429BED',
      'fou-1': '#58ABF6',
      'fou-2': '#77C4FE',
      'fit-0': '#F6C747',
      'fit-1': '#FFCE4B',
      'fit-2': '#FFDA5B',
      'six-0': '#7C538C',
      'six-1': '#9F5BBA',
      'six-2': '#A06EB4',
      'sev-0': '#B1736C',
      'sev-1': '#CA8179',
      'sev-2': '#D1938C',
      barbie: '#F38EB3',
      highlight: '#6C79DB',
      negative: '#FB6C6C',
      positive: '#4BC07A',
      ...defaultTheme.colors,
    },
    fontFamily: {
      main: 'circular-std',
    },
    extend: {
      spacing: {
        'content-y-offset': '50px',
        'page-lg': '100px',
        'page-md': '50px',
        'page-sm': '30px',
        'page-xs': '20px',
        ...defaultTheme.spacing,
      },
      screens: {
        xxs: '350px',
        xs: '450px',
        ...defaultTheme.screens,
        xl: '1700px',
      },
      opacity: {
        ghost: '0.2',
        semighost: '0.3',
        light: '0.4',
        medium: '0.6',
        semibold: '0.8',
        bold: '0.9',
        ...defaultTheme.opacity,
      },
    },
    letterSpacing: {
      ...defaultTheme.letterSpacing,
      widest: '.2em',
    },
  },
  plugins: [],
};
