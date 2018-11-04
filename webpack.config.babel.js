import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin'

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
        }),
        new CopyWebpackPlugin([
            { from: './node_modules/bootstrap/dist/css/*', to: './' },
            { from: './node_modules/font-awesome/css/*', to: './' },
            { from: './node_modules/font-awesome/fonts/*', to: './' },
            { from: './node_modules/toastr/build/*', to: './' },
            { from: './node_modules/jquery/dist/*', to: './' },
            { from: './node_modules/jquery/dist/*', to: './' },
            { from: './node_modules/popper.js/dist/umd/*', to: './' },
            { from: './node_modules/chartist-plugin-legend/*', to: './' },
            { from: './bower_components/chartist/dist/*', to: './' },
            { from: './src/app/pages/*', to: './' },
            { from: './src/app/parts/*', to: './' },
            { from: './src/styles.css', to: './src' },
            // { from: '**/*', to: '/absolute/path/to/dest/' }
        ], {})
    ],
    stats: {
        colors: true
    },
    devServer: {
        port: 3000, // configuring port for localserver
        publicPath: '/',
        contentBase: './', // configuring from where content needs to be served
    },
    devtool: 'source-map'
};