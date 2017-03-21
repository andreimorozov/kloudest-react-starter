var path = require('path');

module.exports = {
    context: path.resolve('src'),
    entry: ['./app'],
    output: {
        path: path.resolve('build/'),
        publicPath: '/public/assets/',
        filename: 'bundle.js'
    },
    watch: true,
    devServer: {
        contentBase: 'public'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                use: [
                    { loader: 'source-map-loader' }
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'ts-loader' }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.tsx', '.ts', '.js']
    }
};