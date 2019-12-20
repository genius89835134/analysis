const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
      }, {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
        }
      }],
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }, {
      test: /\.(png|jpg)$/,
      include: path.join(__dirname, 'public/assets'),
      loader: 'file-loader'
    }, {
      enforce: 'pre',
      test: /\.(js|jsx)?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    },
    { test: /\.(jpe?g|png|gif|svg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: path.join(__dirname, 'public', 'logo.svg')
    }),
  ],
  devServer: {
    port: dotenv.parsed.APP_PORT || 8003,
    host: dotenv.parsed.APP_HOST || 'localhost',
    inline: true,
    hot: true,
  },
};