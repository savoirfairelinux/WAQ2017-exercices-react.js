const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * devServer
 *
 * @param  {Objects} options - options for webpack-dev-server
 * @return {Object} webpack-dev-server configuration object
 */
exports.devServer = function(options) {
  return {
    devServer: {
      // Enable history API fallback
      historyApiFallback: true,

      // Enable Hot Module Replacement
      hot: true,
      inline: true,

      // Display errors only
      stats: 'errors-only',

      // Parse host and port options
      host: options.host,
      port: options.port
    }
  };
};

/**
 * setupSass
 *
 * @param  {Object} paths for source folder
 * @return {Object} Webpack module loader config object
 */
 exports.setupCss = function(paths) {
   return {
     module: {
       loaders: [
         {
           test: /\.css$/,
           loaders: [
             'style',
             'css',
             'resolve-url'
           ],
           include: paths
         }
       ]
     }
   };
 };

/**
 * Minify config
 *
 * @return {Object} config
 */
 exports.minify = function() {
   return {
     plugins: [
       new webpack.optimize.UglifyJsPlugin({
         beautify: false,
         comments: false,
         compress: {
           warnings: false,
           drop_console: true
         },

         mangle: {
           except: ['$'],
           screw_ie8: true,
           keep_fname: true
         }
       })
     ]
   };
 };

/**
 * Define env variable
 *
 * @param  {String} key
 * @param  {String} value
 * @return {Set} set env variables
 */
exports.setFreeVariable = function(key, value) {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  };
};

/**
 * extractBundle - Split bundle (app.js / vendors)
 *
 * @param  {Object} options [description]
 * @return {Set} config
 */
exports.extractBundle = function(options) {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    entry: entry,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest']
      })
    ]
  };
};

/**
 * clean build dir before build
 *
 * @param  {String} path - path to clean
 * @return {Set} set option
 */
exports.clean = function(path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        root: process.cwd()
      })
    ]
  };
};

/**
 * extractCSS
 *
 * @param  {String} paths
 * @return {Set} module loader
 */
exports.extractCSS = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css'),
          include: paths
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('/assets/css/[name].[chunkhash].css')
    ]
  };
};

/**
 * setupBabelHot
 *
 * @param  {String} paths
 * @return {Set} module loader
 */
exports.setupBabel = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react'],
          exclude: /(node_modules|bower_components)/,
          include: paths
        }
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
  };
};

/**
 * setupBabelBuild
 *
 * @param  {String} paths
 * @return {Set} module loader
 */
exports.setupBabelBuild = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          loaders: ['babel?presets[]=es2015,presets[]=stage-0,presets[]=react'],
          exclude: /(node_modules|bower_components)/,
          include: paths
        }
      ]
    }
  };
};

/**
 * setupImage
 *
 * @param  {String} paths
 * @return {Set} module loader
 */
exports.setupImage = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.(jpg|png|gif|jpeg)$/,
          loaders: [
            'file?name=[path][name].[hash].[ext]&context=./app'
          ],
          include: paths
        },
        {
          test: /\.(svg)$/,
          loader: "file?name=[path][name].[ext]&context=./app"
        }
      ]
    }
  };
};

/**
 * setupFonts
 *
 * @param  {String} paths
 * @return {Set} module loader
 */
exports.setupFonts = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file?name=[path][name].[hash].[ext]&context=./app',
          include: paths
        }
      ]
    }
  };
};
