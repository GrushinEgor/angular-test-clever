const debug = process.env.NODE_ENV !== "production",
    webpack = require('webpack'),
    path =  require('path');



const context = path.join(__dirname, 'src');

module.exports = {
    context,
    devtool: debug ? "inline-sourcemap" : null,
    entry: './app.js',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    }, 
    output: {
        path: context, 
        filename: "app.min.js",
    },
    plugins: debug ? [] : [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
        ],
};