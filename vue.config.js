const path = require("path");
const webpack = require("webpack");

module.exports = {
  // Needs to be '' so that the built html file doesn't output asset filenames with a forward slash.
  publicPath: '',
  productionSourceMap: false,
  css: {
    extract: false
  },
  chainWebpack: config => {
    // https://blog.chachay.org/2020/05/vue-cli-single-html-file.html
    config
        .plugin('inline-source')
        .use(require('html-webpack-inline-source-plugin'))
    config
        .module
        .rule('images')
        .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, { limit: 10240 }))
    config
        .plugin('html')
        .tap(args => {
          args[0].inlineSource = '.(css)$'
          return args
        })
  },
  configureWebpack: {
    plugins: [new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'windows.jQuery': 'jquery',
    })],
    devtool: "source-map",
    optimization: {
      minimize: false
    },
    resolve: {
      alias: {
        // ref: https://blog.hrendoh.com/using-jquery-ui-in-vue-typescript-project/
        // bind version of jquery-ui
        "jquery-ui": "jquery-ui-dist/jquery-ui.js",
        "jquery-ui-css": "jquery-ui-dist/jquery-ui.css",
        // bind to modules;
        modules: path.join(__dirname, "node_modules")
      }
    },
    output: {
      // The filenames need to have a ./ otherwise Electron won't be able to find the files.
      filename: './[name].js',
      chunkFilename: './[name].js',
    },
  },
}