import React, {Component} from 'react';
import {Button, Input} from 'antd';
class Login extends Component{
    quit = () => {
        this.props.history.push('/login');
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return <div className="" >
            Home-Page
            <Button type="primary" onClick={this.quit}>注销</Button>
            <Input placeholder="" />
        </div>
    }
}
export default Login;