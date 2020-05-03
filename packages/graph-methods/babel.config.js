// babel.config.js
module.exports = {
  presets: [
    '@babel/typescript',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '2',
        targets: {
          node: '8',
          browsers: ['>0.2%', 'not dead', 'not ie < 11', 'not op_mini all'],
        },
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime', '@babel/proposal-class-properties'],
};
