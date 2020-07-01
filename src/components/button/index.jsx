/*
 * @Author: zhangsai
 * @Date: 2020-06-09 11:25:20
 * @Last Modified by: zhangsai
 * @Last Modified time: 2020-06-17 10:24:41
 * @Description: 描述
 */
import React, {Component} from 'react';
import style from './index.module.scss';
import {withRouter} from 'react-router-dom';
@withRouter
class Button extends Component{
    state = {
        counts: this.props.count
    }
    render() {
        const {counts} = this.state;
        const {count} = this.props;
        return <div className={`${style.btn} ${style.bg} p-20`} style={{width: '100px'}}>{counts}/{count}</div>
    }
}
export default Button;