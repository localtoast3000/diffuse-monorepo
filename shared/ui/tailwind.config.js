const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = (paths) => {
  const buildContentPaths = () => {
    if (paths.length > 0) return paths.map((path) => `${path}/**/*.{js,ts,jsx,tsx,mdx}`);
    return [];
  };

  return {
    content: [...buildContentPaths(paths)],
    theme: {
      colors: {
        first: '#B99F6D',
        second: '#1E1E1E',
        third: '#2F2F2F5',
        contrast: '#FFFFFF',
        highlight: '#ffffff',
        error: '#d5515b',
        error2: '#d87d84',
        greyout: '#C0C0C0',
        greyout2: '#7b7b7b',
        greyout3: '#999999',
        'transparent-dark': '#002c412c',
        'transparent-light': '#f9f7f24a',
        'transparent-black': '#33333356',
        ...defaultTheme.colors,
      },
      fontFamily: {
        special: 'post-no-bills-columbo',
        body: 'inter',
      },
      screens: {
        xxs: '350px',
        xs: '450px',
        ...defaultTheme.screens,
        xl: '1700px',
      },
      spacing: {
        'content-y-offset': '50px',
        'page-lg': '100px',
        'page-md': '50px',
        'page-sm': '30px',
        'page-xs': '20px',
        ...defaultTheme.spacing,
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
      extend: {},
    },
    plugins: [require('daisyui')],
  };
};
