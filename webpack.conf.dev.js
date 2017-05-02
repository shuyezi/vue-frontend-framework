/**
 * Created by wsj40192 on 2017/4/26.
 */
const env = 'development';

require('babel-register');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CONFIG = require('./app/configs/conf.build').default[env];

const complier = require('./webpack.conf.base')['confComplie'];

module.exports = merge(complier(env), {
    entry: {
        app: [`webpack-dev-server/client?${CONFIG.host}:${CONFIG.port}`]
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: CONFIG.releaseDir,
        port: CONFIG.port,
        host: CONFIG.host.replace(/\/\//, "").replace(/http:/, ""),
        historyApiFallback: true,
        noInfo: false,
        hot: true,
        stats: 'minimal',
        publicPath: CONFIG.publicPath,
        proxy: {
            '/api/*': {
                target: `${CONFIG.host}:${CONFIG.apiPort}`,
                secure: false
            }
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(true)
        })
    ]
});