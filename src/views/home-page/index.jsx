import React, {Component} from 'react';
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
        </div>
    }
}
export default Login;