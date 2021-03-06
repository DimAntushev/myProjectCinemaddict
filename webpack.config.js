path = require('path');
const MomentModuleLocalPlugin = require('moment-locales-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'public',
    watchContentBase: true
  },
  plugins: [
    new MomentModuleLocalPlugin()
  ]
};
