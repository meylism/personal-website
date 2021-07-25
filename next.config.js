const path = require("path")
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'https://meylism.github.io/personal-website/' : '',
  basePath: isProd ? '/personal-website' : '',
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}
