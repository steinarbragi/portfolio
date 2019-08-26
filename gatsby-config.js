module.exports = {
  pathPrefix: `/mini-gatsbyv2-material-kit-react`,
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `steinar.io`,
    // Default title of the page
    siteTitleAlt: `steinar.io - Web & Mobile development`,
    // Can be used for e.g. JSONLD
    siteHeadline: `steinar.io - Web & Mobile development`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://steinar.io`,
    // Used for SEO
    siteDescription: `steinar.io - I create web and mobile experiences for the next generation of consumer-facing companies.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/sbanndoom.jpg`,
    // Twitter Handle
    author: `@steinarbragi`
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-material-ui',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Steinar Bragi Sigurðarson',
        description: `Web and Mobile developer`,
        short_name: 'steinar',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],      },
    },
  ],
}