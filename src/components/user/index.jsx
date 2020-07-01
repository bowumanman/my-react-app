/*
 * @Author: zhangsai
 * @Date: 2020-06-09 11:25:20
 * @Last Modified by: zhangsai
 * @Last Modified time: 2020-06-17 10:24:41
 * @Description: 描述
 */
import React, {Component} from 'react';
import {Input} from 'antd';
import {withRouter} from 'react-router-dom';
@withRouter
class User extends Component{
    state = {
        user: this.props.user
    }
    change = (e) => {
        console.log(e);
        this.setState({
            user: e.target.value
        })
    }
    render() {
        const {user} = this.state;
        return <Input value={user} onChange={this.change}  />
    }
}
export default User;