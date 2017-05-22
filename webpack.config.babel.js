import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const LAUNCH_COMMAND = process.env.npm_lifecycle_event;
const isProduction = LAUNCH_COMMAND === 'production';
process.env.BABEL_ENV = LAUNCH_COMMAND;

const PATHS = {
    app: path.resolve(__dirname, 'app'),
    build: path.resolve(__dirname, 'build'),
};

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(PATHS.app, 'index.html'),
    filename: 'index.html',
    inject: 'body',
});

const productionPlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production'),
    },
});

const base = {
    entry: {
        'assets/js/bundle': path.join(PATHS.app, 'index.js'),
    },
    output: {
        path: PATHS.build,
        filename: '[name].js',
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, enforce: 'pre', use: 'eslint-loader' },
            { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.css$/, exclude: /node_modules/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
        ],
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
        ],
    },
};

const developmentConfig = {
    devtool: 'cheap-module-inline-source-map',
    devServer: {
        hot: true,
        inline: true,
        historyApiFallback: true,
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('assets/css/style.css'),
    ],
};

const productionConfig = {
    devtool: 'cheap-module-source-map',
    plugins: [
        HtmlWebpackPluginConfig,
        productionPlugin,
        new ExtractTextPlugin('assets/css/style.css'),
    ],
};

const config = isProduction ? productionConfig : developmentConfig;

export default { ...base, ...config };
