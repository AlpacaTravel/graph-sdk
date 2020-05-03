const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const package = require('./package.json');

// Prefix the output with a path
const prefix = process.env.BUILD_HASH_PREFIX ? `dist/${process.env.BUILD_HASH_PREFIX}/` : '';
// Create a macro build hash
const chunkHash = process.env.BUILD_HASH_CHUNK ? `${process.env.BUILD_HASH_CHUNK}.` : '';

const config = {
  mode: 'production',
  entry: './src/webpack.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `${prefix}bundle.${chunkHash}js`,
    chunkFilename: `${prefix}[name].${chunkHash}js`,
    library: 'alpaca',
    libraryTarget: 'window',
    libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [new HtmlWebpackPlugin(), new ForkTsCheckerWebpackPlugin()],
};

if (process.env.PUBLISHED) {
  const publicPath = `https://cdn.alpaca.dev/@alpaca-travel/graph-sdk@${package.version}/dist/`;
  config.output.publicPath = publicPath;
  console.log('Setting the public path to:', publicPath);
}

module.exports = config;
