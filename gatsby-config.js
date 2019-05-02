module.exports = {
  plugins: [
    'gatsby-plugin-less',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/config`,
        name: 'markdown-pages',
      }
    },
    'gatsby-transformer-remark'
  ]
};
