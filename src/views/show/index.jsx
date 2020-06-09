import React, {Component} from 'react';
import {Button} from 'antd';
import B from '../../components/button';
import img from '../../assets/images/img.jpg';
export default class Show extends Component{
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return <div className="m-30">
            <div className="login-btn m-t-10 btn">Login</div>
            <B></B>
            <Button type="primary" danger>危险按钮</Button>
            <img src={img} alt="一张图片" />
            <i className="fa fa-home font-size-30"></i>
        </div>
    }
}