// http请求
import axios from './axios';
import URITemplate from 'uri-templates';
//转换url key
const switchUrlKey = (url, query) => {
    const uriParams = {};
    for (const key of Object.keys(query)) {
        if (url.indexOf('{' + key + '}') !== -1) {
            uriParams[key] = query[key];
            delete query[key];
        }
    }
    return uriParams;
};
export default (methodApi, queryData, urlParam) => { // urlParam
    const method = Object.assign({}, methodApi);
    const query = Object.assign({}, queryData);
    let uriParams = {};
    //根据url对象进行 参数转换
    if (urlParam) {
        uriParams = switchUrlKey(method.url, urlParam);
    } else {
        uriParams = switchUrlKey(method.url, query);
    }
    method.url = new URITemplate(method.url).fill(uriParams);
    const option = Object.assign({ emulateJSON: false }, method);
    if (option.method.toLowerCase() === 'post' ||
        option.method.toLowerCase() === 'put' ||
        option.method.toLowerCase() === 'delete' ||
        option.method.toLowerCase() === 'patch') {
        option.data = Object.assign({}, query);
    } else {
        option.params = Object.assign({}, query);
    }
    return new Promise((resolve, reject) => {
        axios(option).then((res) => {
            if (res.status >= 200 && res.status < 300) {
                resolve(res.data);
            } else {
                reject(new Error(res.status.toString()));
            }
        }).catch(e => {
            reject(e);
        });
    });
};