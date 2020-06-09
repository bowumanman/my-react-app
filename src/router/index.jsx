/*
 * @Author: zhangsai 
 * @Date: 2020-05-20 16:14:18 
 * @Last Modified by: zhangsai
 * @Last Modified time: 2020-06-09 16:09:06
 * @Discription: 路由文件 
 */
import React from 'react';
import Loadable from 'react-loadable'; // 路由分割
const loading = ({ error, pastDelay }) => {
    if (error) {
      return <div>Error!</div>; // 如果错误 则展示 错误页面 
    } else if (pastDelay) { // 避免组件加载闪烁
      return <div>Loading...</div>;
    } else {
      return null;
    }
};
const router = [
    {
        path: '/',
        exact: true,
        component: Loadable({
            loader: () => import('../views/home-page'),
            loading,
            delay: 200 // 如果组件在delay时间内没有加载成功, 则显示 loading 组件
        }),
    },
    {
        path: '/login',
        exact: true,
        component: Loadable({
            loader: () => import('../views/login'),
            loading,
            delay: 200
        }),
    },
    {
        path: '/show',
        exact: true,
        component: Loadable({
            loader: () => import('../views/show'),
            loading,
            delay: 200
        }),
    }
]
export default router;