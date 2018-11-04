import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

export default {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'JetJedis',
            template: path.join(__dirname, 'src/index.html')
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        })
    ],
    stats: {
        colors: true
    },
    devServer: {
        port: 3000, // configuring port for localserver
        // publicPath: '/src/public',
        contentBase: './', // configuring from where content needs to be served
    },
    devtool: 'source-map'
};