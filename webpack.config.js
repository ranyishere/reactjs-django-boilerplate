const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const postCssPlugins = [
  require('postcss-import'),
  require('postcss-url'),
  require('postcss-filter-gradient'),
  require('postcss-cssnext'),
  require('postcss-extend')
];

module.exports = {
  entry: {
    index: [
	    'isomorphic-fetch',
	    './static/js/src/index.js',
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve('static/js/src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
            presets: ['@babel/react', '@babel/env']
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                camelCase: true,
                importLoaders: 1,
                localIdentName: '[name]-[local]-[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => postCssPlugins
              }
            },
            {
              loader: 'sass-loader',
              options: {
              plugins: 
                new ExtractTextPlugin('./static/css/main.sass')
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'static/js/build'),
    filename: 'main.js',
    library: 'partSmart',
    libraryTarget: 'var'
  }
};
