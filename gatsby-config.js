module.exports = {
  siteMetadata: {
    title: `Seguridad de la Información`,
    name: `Yamil Elías`,
    siteUrl: `https://yamilelias.github.io`,
    description: `Seguridad de la Información. Encuentra todo explicado de la manera sencilla.`,

    // important to set the main text that appears in the hero
    hero: {
      heading: `Seguridad de la Información. Encuentra todo explicado de la manera sencilla.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/yamilelias/`,
      },
      {
        name: `github`,
        url: `https://github.com/yamilelias`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/elyamilin`,
      },
      {
        name: `medium`,
        url: `https://medium.com/@yamilelias/`,
      },
    ],
  },
  plugins: [{
    resolve: '@narative/gatsby-theme-novela',
    options: {
      authorsPage: true,
    },
    }],
};