import React, {Component} from 'react';
import {Button, List, InputItem, Toast} from 'antd-mobile';
import getUrl from '@/service/config';
import CommonService from '@/service/common';

class Show extends Component{
    state = {
        phoneError: false,
        phone: ''
    }
    componentDidMount() {
        console.log(this.props, getUrl());
    }
    login = async () => {
        const params = {
            username: 'zhangsai',
            password: '1231231',
            grant_type: 'password',
            id: '123123123'
        }
        try {
            const res = await CommonService.login(params, {itemId: '123123123'});
            console.log(res);
        }
        catch(err) {
            console.log(err, 'err');
        }

    }
    onChange = (value) => {
        if (value.trim().length !== 13) { // type = phone 有两个空格 所以位数为13
            this.setState({
                phoneError: true
            })
        } else {
            this.setState({
                phoneError: false
            })
        }
        this.setState({
            phone: value
        })
    }
    onErrorClick = () => {
        const {phoneError} = this.state;
        if (phoneError) {
            Toast.info('手机号码必须为11位数字');
        }
    }
    render() {
        const {phone, phoneError} = this.state;
        return <div className="m-30" style={{padding: '20px'}}>
            <List>
                <InputItem placeholder="请输入姓名" >姓名：</InputItem>
            </List>
            <List className="m-t-30">
                <InputItem placeholder="请输入年龄" >年龄：</InputItem>
            </List>
            <List className="m-t-30">
                <InputItem 
                    type="phone"
                    placeholder="请输入手机号码" 
                    error={phoneError}
                    value={phone}
                    onChange={this.onChange}
                    onErrorClick={this.onErrorClick}
                >手机号码：</InputItem>
            </List>
            <List className="m-t-30">
                <Button type="primary" onClick={this.login}>登录</Button>
            </List>

        </div>
    }
}
export default Show;