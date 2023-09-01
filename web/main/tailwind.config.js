const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'fir-0': '#111827',
      'fir-1': '#1F2937',
      'fir-2': '#363F4B',
      'fir-3': '#4C545F',
      'sec-0': '#4C35DE',
      'sec-1': '#7764F2',
      'sec-2': '#9182F8',
      'sec-3': '#A69FFD',
      'err-0': '#DF3434',
      'err-1': '#F34B47',
      'err-2': '#FF645C',
      'err-3': '#FF7D71',
      'thi-0': '#DF3473',
      'thi-1': '#ED4583',
      'thi-2': '#FF5B97',
      'thi-3': '#FF708B',
      'fou-0': '#008B61',
      'fou-1': '#21A178',
      'fou-2': '#44B88F',
      'fou-3': '#67CFA6',
      'mac-0': '#E44B31',
      'mac-1': '#F4C455',
      'mac-2': '#468148',
      'con-0': '#FFFFFF',
      'con-1': '#8D92A1',
      ...defaultTheme.colors,
    },
    fontFamily: {
      main: 'work-sans',
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
