const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const package = require('./package.json');

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

if (process.env.PUBLISHED) {
  const publicPath = `https://cdn.alpaca.dev/@alpaca-travel/graph-sdk@${package.version}/dist/`;
  config.output.publicPath = publicPath;
  console.log('Setting the public path to:', publicPath);
}

module.exports = config;
