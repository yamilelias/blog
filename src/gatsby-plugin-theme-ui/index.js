import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
  ...novelaTheme,
  initialColorMode: `dark`,
  colors: {
    ...novelaTheme.colors,
    primary: '#000',
    secondary: '#73737D',
    accent: '#2859B8',
    highlight: '#2859B8',
    grey: '#73737D',
    background: '#fff',
  },
};