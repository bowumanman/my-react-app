import React, {Component} from 'react';
import {Button, Form, Input, Spin} from 'antd';
import B from '@/components/button';
import CommonService from '@/service/common';
import {getUserInfo, deleteUserInfo, addCount, reduceCount} from '@/action';
import {connect} from 'react-redux';
import store from '@/store';
import User from '@/components/user';
const mapStoreToProps = (state) => {
    return {
        token: state.user.token,
        counts: state.count,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCount: () => dispatch(addCount()),
        reduceCount: () => dispatch(reduceCount()),
        deleteUserInfo: () => dispatch(deleteUserInfo()),
        getUserInfo: (token) => dispatch(getUserInfo(token))
    }
}
@connect(mapStoreToProps, mapDispatchToProps)
class Show extends Component{
    state = {
        userList: ['zhangsan', 'lisi', 'wangwu', 'zhaoliu'],
        loading: false,
    }
    componentDidMount() {
    }
    login = async () => {
        const params = {
            username: 'zhangsai',
            password: '123123',
            grant_type: 'password',
        }
        try {
            const res = await CommonService.login(params);
            this.props.getUserInfo({token: res.access_token})
        }
        catch(err) {
            console.log(err, 'err');
        }
    }
    deleteToken = () => {
        this.props.deleteUserInfo();
    }
    getToken = () => {
        console.log(this.props.token);
    }
    addCount = () => {
        setTimeout(() => {
            this.props.addCount();
            // store.dispatch(addCount());
        }, 3000)
    }
    reduceCount = () => {
        setTimeout(() => {
            this.props.reduceCount();
            // store.dispatch(reduceCount());
        }, 3000)
    }
    upload = () => {
        this.setState({
            loading: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    loading: false
                })
            }, 1000)
        })
    }
    render() {
        const {counts, token} = this.props;
        const {userList, loading} = this.state;
        return <Spin spinning={loading}><div className="m-30">
            <div className="login-btn m-t-10 btn">Login</div>
            <B count={counts.count}></B>
            <Button type="primary" onClick={this.login}>Login</Button>
            <br />
            <Button type="primary" onClick={this.deleteToken}>delete Token</Button>
            <br />
            <Button type="primary" onClick={this.getToken}>get Token</Button>
            <Form className="m-t-20 p-20" style={{maxWidth: '900px', background: '#efefef'}}>
                <Form.Item label="token：">
                    <Input disabled={true} value={token} />
                </Form.Item>
                <Form.Item label="计数：">
                    <Input disabled={true} value={counts.count} />
                    {store.getState().count.count}
                </Form.Item>
                <Form.Item className="align-center">
                    <Button type="primary" size="mini" onClick={this.addCount}>加1</Button>
                    <Button type="primary" size="mini" onClick={this.reduceCount} className="m-l-10">减1</Button>
                    <Button type="info" size="mini" onClick={this.upload}  className="m-l-10">刷新</Button>
                </Form.Item>
                {
                    userList.map(user => {
                        return <Form.Item label="用户名：" key={user}>
                                <User user={user} />
                        </Form.Item>
                    })
                }
            </Form>
        </div>
        </Spin>
    }
}
export default Show;