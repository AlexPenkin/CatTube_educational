const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';


module.exports = {
    entry: path.resolve(`${__dirname}/index.js`),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../server/public/dist'),
        publicPath: '/'
    },
    devServer: {
        publicPath: '/dist',
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [{
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: __dirname,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            'react',
                            'latest', ['es2015']
                        ],
                        plugins: [
                            'transform-object-rest-spread',
                            'transform-es2015-destructuring'
                        ]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                  'file-loader', {
                    loader: 'image-webpack-loader',
                    options: {
                      gifsicle: {
                        interlaced: false,
                      },
                      optipng: {
                        optimizationLevel: 7,
                      },
                      pngquant: {
                        quality: '65-90',
                        speed: 4
                      },
                      mozjpeg: {
                        progressive: true,
                        quality: 65
                      },
                      // Specifying webp here will create a WEBP version of your JPG/PNG images
                      webp: {
                        quality: 75
                      }
                    }
                  }
                ]
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new ExtractTextPlugin("styles.css")
    ]
};