const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const parts = require('./libs/parts');
const pkg = require('./package.json');
const copyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  template: path.join(__dirname, 'app', 'index.ejs'),
  images: path.join(__dirname, 'app/assets/images'),
  fonts: path.join(__dirname, 'app/assets/fonts'),
  style: path.join(__dirname, 'app/assets/css', 'bootstrap.css'),
  build: path.join(__dirname, 'build')
};

const common = {
  // Wepack entry point
  entry: {
    app: path.join(__dirname, 'app', 'index.jsx'),
    style: PATHS.style,
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  }
};

var config;

switch (process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common,
      {
        devtool: 'source-map',
        output: {
          filename: '[name].[chunkhash].js',
          chunkFilename: '[chunkhash].js'
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: PATHS.template,
          title: 'Webpack Demo'
        }),
        new copyWebpackPlugin([
          {from: './app/assets/images', to: './assets/images'}
        ])
      ],
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.extractBundle({
        name: 'vendor',
        entries: common.entry.vendor
      }),
      parts.setupImage(PATHS.images),
      parts.setupFonts(PATHS.fonts),
      parts.setupBabelBuild(PATHS.app),
      parts.extractCSS(PATHS.app),
      parts.minify()
    );
    break;
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map',
        plugins: [
          new HtmlWebpackPlugin({
            template: PATHS.template,
            title: 'Webpack Demo',
            devMode: true
          })
        ],
      },
      parts.setupCss(PATHS.app),
      parts.setupImage(PATHS.images),
      parts.setupFonts(PATHS.fonts),
      parts.setupBabel(PATHS.app),
      parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
      })
    );
}

module.exports = validate(config);
