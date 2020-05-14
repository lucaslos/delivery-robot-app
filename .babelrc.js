const env = process.env.BABEL_ENV || process.env.NODE_ENV;
const isDev = env === 'development';
const isProd = env === 'production';

module.exports = {
  presets: [
    '@babel/typescript',
    ['@babel/preset-react', { development: isDev }],
    ['@emotion/babel-preset-css-prop', { sourceMap: isDev }],
  ],
  plugins: [
    isDev && 'react-refresh/babel',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-class-properties',
    isProd && '@babel/plugin-transform-react-constant-elements',
  ].filter(Boolean),
};
