import React, {Component} from 'react';
import {Button} from 'antd';
import B from '@/components/button';
import getUrl from '@/service/config';
import CommonService from '@/service/common';

class Show extends Component{
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
    render() {
        return <div className="m-30">
            <div className="login-btn m-t-10 btn">Login</div>
            <B></B>
            <Button type="primary" danger onClick={this.login}>danger</Button>
            <i className="fa fa-home font-size-30"></i>
        </div>
    }
}
export default Show;