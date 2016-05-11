var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

var common = {
  entry:{
    app:['./app/app.js']
  },
  output: {
    filename: '[name].js',
    publicPath: '/static/',
    path:PATHS.build,
    libraryTarget: 'umd'
  },
  externals: {
   angular: 'angular',
  //  'jquery-ui/datepicker': 'jquery-ui/datepicker',
  //  jquery: {
  //    root: 'jQuery',
  //    commonjs: 'jquery',
  //    commonjs2: 'jquery',
  //    amd: 'jquery',
  //  },
 },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    new HtmlWebpackPlugin({
     template: './app/index.html',
       inject: 'body'
   }),
   new ExtractTextPlugin("[name].css")
  ],
  module: {
    loaders: [
      {
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      },
      include: path.join(__dirname, '.')
    },
    // { test: /\.css$/,
    //   loader: 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]'
    //   // loader: "style-loader!css-loader"
    // },
    { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap") },
    {
      // HTML LOADER
      // Reference: https://github.com/webpack/raw-loader
      // Allow loading html through js
      test: /\.html$/,
      loader: 'raw'
    }]
  }
};

if(TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        entry:{
          app:['webpack/hot/dev-server',
             'webpack-dev-server/client?http://localhost:8080']
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
        devtool: "source-map",
        devServer: {
          hot: true
        }

    })
}

if(TARGET === 'build') {
    module.exports = merge(common, {

    })
}
