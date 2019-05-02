module.exports = {
  plugins: [
    'gatsby-plugin-less',
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/config`,
        name: 'config',
      }
    }
  ]
};
