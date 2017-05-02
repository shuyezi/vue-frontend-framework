/**
 * Created by wsj40192 on 2017/4/27.
 */
import path from 'path';

const confBase = {
    appTitle: 'JR换乘',
    entryPath: [path.resolve(__dirname, "..", "index.js")],
    tplPath: path.resolve(__dirname, "..", "common", "layouts.html"),
    resolveAlias: {
        'utils': path.resolve(__dirname, '..', 'common', 'scripts', 'utils.js'),
        'request': path.resolve(__dirname, '..', 'common', 'scripts', 'request.js')
    },
    vendors: [
        path.resolve(__dirname, "..", "common", "scripts", "index.js"),
        'vue',
        'vue-router'
    ]
};

const confDev = Object.assign({}, confBase, {
    host: 'http://localhost',
    port: 9000,
    apiHost: 'http://api.localhost',
    apiPort: 8888,
    publicPath: './',
    releaseDir: 'release_dev',
    outputFilename: '[name]'
});

const confProd = Object.assign({}, confBase, {
    host: '//www.ly.com',
    port: 80,
    apiHost: '//api.ly.com',
    apiPort: 80,
    publicPath: 'http://xxx.cnd.com/static/',
    releaseDir: 'release',
    outputFilename: '[name].[chunkhash:10]'
});

export default {
    development: confDev,
    production: confProd
}