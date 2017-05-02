/**
 * Created by wsj40192 on 2017/4/27.
 * @name 工具类
 * @usage 全局直接调用，如：Utils.xxx
 */

/**
 *
 * @name 判断对象的类型是否与给出的类型符合
 * @param type | {String} 类型名称：Function, String...
 * @param obj | 检验的对象
 * @returns {boolean}
 */
export const isType = (type, obj) => {
    let _type = type.substring(0,1).toUpperCase() + type.substring(1, type.length);
    return Object.prototype.toString.call(obj) === '[object ' + _type + ']';
}

/**
 * @name 去除字符串首尾空格
 * @param str | 给定的字符串
 */
export const trim = str => str.replace(/(^\s*)|(\s*$)/g, '');

/**
 * @name 判断对象是否为空
 * @param obj | 给定对象
 * @returns {boolean}
 */
export const isEmptyObject = obj=>{
    if(typeof obj != 'object') throw new Error(`${obj} is not a object`);
    for (let i in obj){
        return false;
    }
    return true;
}

/**
 * @name 移动端类型判断
 * @type {{isTrident: boolean, isPresto: boolean, isWebKit: boolean, isGecko: boolean, isMobile: boolean, isIos: boolean, isAndroid: boolean, isIPhone: boolean, isIPad: boolean, isWebApp: boolean, isWx: boolean, wxVersion}}
 */
export const browser = {
    isTrident: navigator.userAgent.indexOf("Trident") > -1, //IE内核
    isPresto: navigator.userAgent.indexOf("Presto") > -1, //opera内核
    isWebKit: navigator.userAgent.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
    isGecko: navigator.userAgent.indexOf("Gecko") > -1 && navigator.userAgent.indexOf("KHTML") == -1, //火狐内核
    isMobile: !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
    isIos: !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    isAndroid: navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Linux") > -1, //android终端或者uc浏览器
    isIPhone: navigator.userAgent.indexOf("iPhone") > -1 , //是否为iPhone或者QQHD浏览器
    isIPad: navigator.userAgent.indexOf("iPad") > -1, //是否iPad
    isWebApp: navigator.userAgent.indexOf("Safari") == -1, //是否web应该程序，没有头部与底部
    isWx: navigator.userAgent.indexOf("MicroMessenger") > -1, //是否微信
    wxVersion: (function(){ //微信版本
        let uaParams = navigator.userAgent.split(" ")
        let v = 'Dear, You Are Not In WeChat'
        for(let i in uaParams){
            if(uaParams[i].indexOf('MicroMessenger') > -1) v = uaParams[i].split("/")[1]
        }
        return v
    })()
}