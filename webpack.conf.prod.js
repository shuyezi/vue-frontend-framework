/**
 * Created by wsj40192 on 2017/4/26.
 */
const env = 'production';


require('babel-register');
const merge = require('webpack-merge');
const webpack = require('webpack');

const complier = require('./webpack.conf.base')['confComplie'];

module.exports = merge(complier(env), {
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        //压缩
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                warnings: false,
                drop_console: false,
                screw_ie8: true
            },
            comments: false,
            except: ["$super", "$", "exports", "require"]
        })
    ]
});