const debug = process.env.NODE_ENV !== "production",
    webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeExcludeRegExp = /(node_modules|bower_components)/;

const context = path.join(__dirname, 'src');

module.exports = {
    context,
    devtool: debug ? "inline-sourcemap" : null,
    entry: [   
        'webpack-dev-server/client?http://localhost:3000',
        './app.js'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: nodeExcludeRegExp,
                loader: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
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
            new webpack.HotModuleReplacementPlugin(),
            new ExtractTextPlugin({
                filename: 'app.min.css',
                allChunks: true
            })
        ]),
};