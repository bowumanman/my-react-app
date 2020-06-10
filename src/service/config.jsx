export default (type = process.env.REACT_APP_ENV) => {
    let url = '';
    switch (type) {
        case 'development': // 开发环境
            url = 'http://dev.cvsource.com.cn:9005';
            break;
        case 'test': // 测试环境
            url = 'http://test.cvsource.com.cn:9005';
            break;
        case 'feature': //  feature环境
            url = 'http://feature.cvsource.com.cn:9005';
            break;
        case 'pre-release': //  仿真/预生产环境
            url = 'https://checking.cvsource.com.cn:6445';
            break;    
        case 'production': // 正式环境
            url = 'https://api.cvsource.com.cn'; // 正式环境
            break;
        default: url = 'https://api.cvsource.com.cn';
    }
    return url;
};