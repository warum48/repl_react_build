const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const StylelintPlugin = require('stylelint-webpack-plugin');
const StylintWebpackPlugin = require('stylint-webpack-plugin');
const ErrorLoggerPlugin = require('error-logger-webpack-plugin');
const getFilesFromDir = require('./config/files');
const PAGE_DIR = path.join('src', 'pages', path.sep); //about path sep https://www.examplefiles.net/cs/1062401
var WebpackBundleSizeAnalyzerPlugin =
  require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const htmlPlugins = getFilesFromDir(PAGE_DIR, ['.html']).map((filePath) => {
  const fileName = filePath.replace(PAGE_DIR, '');
  return new HtmlWebPackPlugin({
    chunks: [fileName.replace(path.extname(fileName), ''), 'vendor'],
    template: filePath,
    filename: fileName,
  });
});
const entry = getFilesFromDir(PAGE_DIR, ['.js']).reduce((obj, filePath) => {
  const entryChunkName = filePath
    .replace(path.extname(filePath), '')
    .replace(PAGE_DIR, '');
  obj[entryChunkName] = `./${filePath}`;
  return obj;
}, {});
module.exports = (env, argv) => ({
  entry: entry,
  output: {
    //path: path.join(__dirname, "build"), //without this builds to dist by default
    filename: '[name].[fullhash:4].js',
    clean: true,
  },
  //devtool: 'cheap-module-eval-source-map',
  //mode: "development",
  //devtool: 'eval-cheap-module-source-map', //!!!!!!!!!!!!!
  stats: {
    children: true, //print error line numbers
  },
  //devtool: 'cheap-module-eval-source-map', //devtool: 'eval-source-map',
  //devtool: argv.mode === 'production' ? false : 'eval-source-maps', //"^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$".
  plugins: [
    ...htmlPlugins,
    //new ErrorLoggerPlugin({verbose: false}), //kills children error logs
    new StylintWebpackPlugin({
      files: 'src/pages',
      reporter: 'stylint-stylish',
      reporterOptions: {
        verbose: true,
      },
      config: 'stylint.json',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
        { from: 'src/root', to: '' },
        //{ from: 'src/api', to: 'api' },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: './styles.css',
      //filename: "[name].css",
      chunkFilename: 'id.css',
    }), /////!!!!!!!!!!!!!enable this
    //new WebpackBundleSizeAnalyzerPlugin('./reports/plain-report.txt')
    //new BundleAnalyzerPlugin()
    /*new StylintWebpackPlugin({
            files: 'src/pages',
            reporter: 'stylint-stylish',
            reporterOptions: {
                verbose: true,
            },
            config:"stylint.json",
        })*/
    /*new StylelintPlugin(
            {
            extensions:["styl"],
              plugins: [
                // add this plugin here:
                "stylelint-plugin-stylus"
              ],
              defaultSeverity: "warning",
              extends: "stylelint-plugin-stylus/recommended",
              rules: {
                // add rules settings here, such as:
                "stylus/declaration-colon": "always", //"never",
                "stylus/pythonic": "always",
                "stylus/selector-list-comma": "always",
                "stylus/semicolon": "always",
                "stylus/single-line-comment": "always",
              }
            }
            
            )*/
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    disableHostCheck: true,
    host: '0.0.0.0', //https://stackoverflow.com/questions/43619644/i-am-getting-an-invalid-host-header-message-when-connecting-to-webpack-dev-ser
    //hmr: {
      port: 443,
    //}
    //open: true,
    //port: 3000,
    historyApiFallback: true,
    //!!host: "dev.nahab.info",
    //hot: true,
    publicPath: '/',
    socket: 'socket',
    /*clientLogLevel: 'debug',
        overlay: {
          warnings: false,
          errors: true,
        },*/ // nothing changes
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src', 'components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },

      {
        test: /\.styl$/,
        use: [
          'style-loader',

          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              //publicPath: '/public/path/to/',
              esModule: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },

          {
            loader: 'stylus-loader',
            options: {
              sourceMap: true,
            },
          },
        ],

        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // does it smth or no??
      },
      /*{
                test: /\.pug/,
                use: ['html-loader', 'pug-html-loader'],
                include: [
                    path.resolve(__dirname, "src","pages","includes")
                ],
                  //options: {
                    // options to pass to the compiler same as: https://pugjs.org/api/reference.html
                  //  data: {} // set of data to pass to the pug render.
                  //}
                },*/
      {
        test: /\.(ttf|eot|svg|png|jpe?g|gif|woff(2)?)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              //name: './assets/img/[name].[ext]',
              name: './assets/[path][name].[ext]',
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
});
//https://stackoverflow.com/questions/50416293/webpack-minicssextractplugin-doesnt-extract-file
//https://dev-qa.com/505900/managed-to-make-friends-with-webpack-4-stylus
//https://github.com/webpack/webpack/issues/12558
//https://stackoverflow.com/questions/31191884/set-up-webpack-to-run-locally-on-a-custom-domain-over-https
//https://github.com/webpack/webpack-dev-server/issues/1381
//https://stackoverflow.com/questions/37174721/webpack-dev-server-how-to-get-error-line-numbers-of-orignal-files

//https://www.npmjs.com/package/stylelint-plugin-stylus
//https://github.com/SimenB/stylint
