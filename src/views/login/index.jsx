import React, {Component} from 'react';
export default class Login extends Component{
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return <div className="m-30">
            Login
        </div>
    }
}