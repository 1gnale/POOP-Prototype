// babel.config.js
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-react', // Agrega soporte para JSX
  ],
  plugins: [
    // Lista de plugins aquí. Si decides no usar '@babel/preset-react', agrega '@babel/plugin-syntax-jsx'.
  ],
};