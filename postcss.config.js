const presetEnvOptions = {
  autoprefixer: {
    flexbox: 'no-2009',
  },
  stage: 3,
  features: {
    'custom-properties': false,
  },
};

module.exports = {
  plugins:
    process.env.NODE_ENV === 'development'
    ? 
      [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')(presetEnvOptions),
        require('cssnano')({preset: 'default'})
      ]
    :
      [
        'postcss-flexbugs-fixes',
        [ 'postcss-preset-env', presetEnvOptions ],
      ]
}