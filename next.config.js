const path = require("path")

module.exports = {
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_PREFIX,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}
