module.exports = {
  siteMetadata: {
    title: `Novela by Narative`,
    name: `Narative`,
    siteUrl: `https://gatsby-theme-novela.netlify.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,

    // important to set the main text that appears in the hero
    hero: {
      heading: `Seguridad de la Información. Encuentra todo explicado de la manera más sencilla.`,
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
        name: `medium`,
        url: `https://twitter.com/elyamilin`,
      },
      {
        name: `twitter`,
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