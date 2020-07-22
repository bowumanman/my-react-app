/*
 * @Author: zhangsai
 * @Date: 2020-06-09 11:25:20
 * @Last Modified by: zhangsai
 * @Last Modified time: 2020-07-10 16:03:43
 * @Description: 描述
 */
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import SmallBox from '../small-box';
@withRouter
class Box extends Component{
    render() {
        return <div>
            <SmallBox></SmallBox>
        </div>
    }
}
export default Box;