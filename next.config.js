const path = require("path")

module.exports = {
  assetPrefix: process.env.NEXT_PUBLIC_PREFIX,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}
