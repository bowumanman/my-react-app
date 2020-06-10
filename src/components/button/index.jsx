/*
 * @Author: zhangsai
 * @Date: 2020-06-09 11:25:20
 * @Last Modified by: zhangsai
 * @Last Modified time: 2020-06-09 15:16:30
 * @Description: 描述
 */
import React, {Component} from 'react';
import style from './index.module.scss';
import {withRouter} from 'react-router-dom';
@withRouter
class Button extends Component{
    render() {
        console.log(this.props);
        return <div className={`${style.btn} ${style.bg} p-20 align-center`}>button</div>
    }
}
export default Button;