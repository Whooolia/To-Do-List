const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const precss = require('precss');

module.exports = {
  entry: [
    "./src/index.js", 
    'font-awesome/scss/font-awesome.scss'
  ],
  devServer: {
    contentBase: "./dist"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new ExtractTextPlugin('main.css')
  ],
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/, 
      use: {
        loader: "babel-loader"
      }
    },
    {
      test :/\.css$/,
      use: [ "style-loader", "css-loader"]
    },
    {
      test: /\.(scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          {
            loader: "css-loader"
          }, {
            loader: "postcss-loader",
            options: {
              plugins() {
                return precss;
              }
            }
          }, {
            loader: "sass-loader"
          }
        ]
      })
    },
    {
      test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'url-loader?limit=10000',
    },
    {
      test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      use: 'file-loader',
    },
    // font-awesome
    {
      test: /font-awesome\.config\.js/,
      use: [
        { loader: 'style-loader' },
        { loader: 'font-awesome-loader' }
      ]
    },
    ] 
  }
};

