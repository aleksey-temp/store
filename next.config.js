const tsConfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  webpack: (config, options) => {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new tsConfigPathsWebpackPlugin())
    } else {
      config.resolve.plugins = [new tsConfigPathsWebpackPlugin()]
    }

    return config
  }
}
