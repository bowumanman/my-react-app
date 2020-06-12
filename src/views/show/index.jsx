import React, {Component} from 'react';
import {Button} from 'antd';
import B from '@/components/button';
import getUrl from '@/service/config';

class Show extends Component{
    componentDidMount() {
        console.log(this.props, getUrl());
    }
    render() {
        return <div className="m-30">
            <div className="login-btn m-t-10 btn">Login</div>
            <B></B>
            <Button type="primary" danger>danger</Button>
            <i className="fa fa-home font-size-30"></i>
        </div>
    }
}
export default Show;