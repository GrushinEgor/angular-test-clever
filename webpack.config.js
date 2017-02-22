const debug = process.env.NODE_ENV !== "production",
    webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const bourbon = require('bourbon').includePaths,
    neat = require('bourbon-neat').includePaths



const nodeExcludeRegExp = /(node_modules|bower_components)/;

const context = path.join(__dirname, 'src');

module.exports = {
    context,
    devtool: debug ? "inline-sourcemap" : null,
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        './index.js'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: nodeExcludeRegExp,
                loader: 'ng-annotate-loader!babel-loader'
            },
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader', use: [
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [bourbon, neat]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    output: {
        path: context,
        filename: "app.min.js",
    },
    plugins: (debug ? [] : [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
        ])
        .concat([
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                }
            }),
            new webpack.HotModuleReplacementPlugin(),
            new ExtractTextPlugin({
                filename: 'app.min.css',
                allChunks: true
            })
        ]),
};