
import axios from 'axios';
import api from './common/api';
import {message} from 'antd';
// import store from '../store';
import qs from 'qs';
// import app from '../main';
import getUrl from './config';
// import router from '../router';
// const state = store.state;
const ax = axios.create({ baseURL: getUrl() });
ax.defaults.timeout = 3000; // 默认超时时间
ax.interceptors.request.use((config) => {
    // 如果是登录接 口
    if (config.url.indexOf(api.LOGIN.url) !== -1) {
        config.headers.Authorization = 'Basic Y21zOmNtcyMqY01zKiNAMjAxNw==';
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        config.data = qs.stringify(config.data);
    }
    // if (config.url.indexOf(api.LOGIN.url) === -1 && state.user.token !== undefined) {
    //     config.headers['X-Token'] = state.user.token.toString();
    //     config.headers.Authorization = 'Bearer ' + state.user.token.toString();
    //     config.headers.Accept = 'application/json';
    // }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 添加一个响应拦截器
ax.interceptors.response.use( (response) => {
    if (response.status === 200 && response.data.resCode !== undefined && response.data.resCode !== '0' && response.data.resCode !== 'cms-74') {// cms-74 天眼查的企业名称跟我们库里名称不一样 
        if (response.data.resCode === 'cvs-1001') {
            message.error('密码错误!');
        } else {
            message.error(response.data.resMsg);
        }
    }
    return response;
}, (err) => {
    if (err && err.response) {
        let msg = '';
        switch (err.response.status) {
            case 400:
                if (err.response.data.error_description) {
                    msg = err.response.data.error_description;
                }
                break;
            case 401:
                msg = '登陆过期，请重新登陆';
                // router.push({ name: 'login' });
                break;
            case 403:
                msg = '无权限访问当前资源';
                break;
            case 404:
                msg = '请求地址出错';
                break;
            case 405:
                msg = '不被允许的访问方法';
                break;
            case 408:
                msg = '请求超时';
                break;
            case 500:
                msg = '服务器内部错误';
                break;
            case 501:
                msg = '服务未实现';
                break;
            case 502:
                msg = '网关错误';
                break;
            case 503:
                msg = '服务不可用';
                break;
            case 504:
                msg = '网关超时';
                break;
            case 505:
                msg = 'HTTP版本不受支持';
                break;
            default:
        }
        message.error(msg);
    }
    return Promise.reject(err);
});

export default ax;