/**
 * Created by wsj40192 on 2017/4/26.
 */

import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

import CONFIGS from './app/configs/conf.build';

export const confComplie = (env) => {
    const CONFIG = CONFIGS[env];
    const extractLess = new ExtractTextPlugin({
        filename: CONFIG.outputFilename + '.css'
    });
    const conf = {
        entry: {
            app: CONFIG.entryPath,
            vendor: CONFIG.vendors
        },
        output: {
            path: path.resolve(__dirname, CONFIG.releaseDir),
            filename: CONFIG.outputFilename + '.js',
            publicPath: CONFIG.publicPath
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            less: 'less-loader',
                            css: ExtractTextPlugin.extract({
                                fallback: "style-loader",
                                use: "css-loader"
                            }),
                            js: 'babel-loader',
                        }
                    }
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.less$/,
                    use: extractLess.extract({
                        use: [{
                            loader: "css-loader"
                        }, {
                            loader: "less-loader"
                        }],
                        fallback: "style-loader"
                    })
                },
                {
                    test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                    exclude: /favicon\.png$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'images/[name].[hash:10].[ext]'
                        }
                    }]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(CONFIG.releaseDir, {
                verbose: true,
                dry: false
            }),
            //定义全局变量
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(env),
                'JR.CONFIG': JSON.stringify({
                    ENV: env,
                    HOST: CONFIG.host + ':' + CONFIG.port,
                    API_PREFIX: CONFIG.apiHost + ':' + CONFIG.apiPort,
                    CDN_PREFIX: CONFIG.publicPath
                })
            }),
            //自动import模块
            new webpack.ProvidePlugin({
                'JR.Request': 'request',
                'JR.Utils': 'utils'
            }),
            //抽公共
            new webpack.optimize.CommonsChunkPlugin({
                name: "vendor",
                filename: CONFIG.outputFilename + '.js'
            }),
            //生成html入口
            new HtmlWebpackPlugin({
                title: CONFIG.appTitle,
                template: './app/common/layouts.html',
                chunksSortMode: 'dependency',
                inject: true
            }),
            //生成样式文件
            extractLess
        ],
        resolve: {
            extensions: ['.js', '.vue','.less'],
            alias: CONFIG.resolveAlias
        }
    }
    return conf;
}