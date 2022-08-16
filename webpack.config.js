const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const rules = {
  js: {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  image: {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'content/assets/[hash].[ext]',
        },
      },
    ],
  },
  svg: {
    test: /\.svg$/,
    use: [
      {
        loader: 'raw-loader',
      },
    ],
  },
  html: {
    test: /\.html$/,
    use: [
      {
        loader: 'html-loader',
        options: { minimize: true },
      },
    ],
  },
  css: {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  },
};

module.exports = {
  mode,
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/template.html'),
      title: 'MTest',
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [rules.js, rules.image, rules.css],
  },
};
