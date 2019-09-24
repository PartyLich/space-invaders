// Imports: Dependencies
const path = require('path');
// const htmlWebpackPlugin = require('html-webpack-plugin')
// require('@babel/register');

// Webpack Configuration
const config = {
  // Entry
  entry: {
    spaceInvaders: './src/space-invaders.js',
    engine: './src/systems/engine.js',
    graphics: './src/systems/graphics.js',
    // physics: './src/systems/physics.js',
    collision: './src/systems/collision.js',
    invaderAi: './src/systems/invaderAi.js',
  },
  // Output
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  // Loaders
  module: {
    rules: [
      // JavaScript/JSX Files
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|jshaml)$/,
        use: ['file-loader'],
      },
    ],
  },
  // Plugins
  plugins: [],

  // OPTIONAL
  // Reload On File Change
  // watch: true,
  // Development Tools (Map Errors To Source File)
  devtool: 'source-map',
};

// Exports
module.exports = config;
