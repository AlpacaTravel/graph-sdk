const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Prefix the output with a path
const prefix = process.env.BUILD_HASH_PREFIX ? `dist/${process.env.BUILD_HASH_PREFIX}/` : '';
// Create a macro build hash
const chunkHash = process.env.BUILD_HASH_CHUNK ? `${process.env.BUILD_HASH_CHUNK}.` : '';

const config = {
  mode: 'production',
  entry: './src/webpack.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `${prefix}bundle.${chunkHash}js`,
    chunkFilename: `${prefix}[name].${chunkHash}js`,
    library: 'alpaca',
    libraryTarget: 'window',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        include: [/node_modules\/@alpaca-travel/],
        use: ['babel-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [new HtmlWebpackPlugin()],
};

module.exports = config;
