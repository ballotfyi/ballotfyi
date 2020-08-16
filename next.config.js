/**
 * raw-loader included to import css into pages/_document.js for AMP to work
*/
module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        use: 'raw-loader'
      }
    )
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          cache: false,
        }
      })
    }
    return config
  },
}