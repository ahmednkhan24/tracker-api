const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'node_modules/swagger-ui-dist/'),
        to: 'node_modules/swagger-ui-dist',
        test: /\.(js|css|html|png)$/i,
        ignore: ['index.js', 'absolute-path.js', '*.map'],
      },
    ]),
  ],
  mode: 'production',
  target: 'node',
};
