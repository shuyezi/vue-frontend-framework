/**
 * Created by wsj40192 on 2017/4/27.
 */

/**
 * @name 基于fecth的接口请求入口
 * @doc https://github.com/github/fetch
 */

import 'whatwg-fetch';

/**
 *
 * @name POST
 * @param url | api请求的地址：默认是站内，设置autoPrefix:false可以访问第三方地址
 * @param settings
 * @constructor
 */
export const POST = (url, settings) => {
    let _settings = Object.assign({
        autoPrefix: true,
        headers: {
            'Content-Type': 'application/json'
        }
    }, settings, {
        method: 'POST',
        body: JSON.stringify(settings.data || {})
    });

    const reqUrl = _settings.autoPrefix ? `${JR.CONFIG.API_PREFIX}/${url}` : `${url}`;
    return fetch(reqUrl, _settings);
};