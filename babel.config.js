const path = require('path')

module.exports = function (api) {
  api.cache(true)

  const presets = ['module:metro-react-native-babel-preset']
  const plugins = [
    'lodash',
    'ramda',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '@Components': './App/UI/Components',
          '@Containers': './App/UI/Containers',
          '@Screens': './App/UI/Screens',
          '@Store': './App/Store',
          '@Navigation': './App/UI/Navigation',
          '@Styles': './App/UI/Styles',

          react: require.resolve('react', {
            paths: [path.join(__dirname, './')],
          }),
          '^react-native$': require.resolve(`react-native`, {
            paths: [path.join(__dirname, './')],
          }),
          '^react-native/(.+)': ([, name]) =>
            require.resolve(`react-native/${name}`, {
              paths: [
                path.join(__dirname, './'),
              ],
            }),
          'react-native-svg': require.resolve('react-native-svg', {
            paths: [path.join(__dirname, './')],
          }),
        },
        extensions: ['.js', '.ts', '.tsx'],
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
}
