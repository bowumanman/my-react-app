import React, {Component} from 'react';
import {Button, Input, Form} from 'antd';
import B from '@/components/button';
import CommonService from '@/service/common';
import {observer, inject} from 'mobx-react';
const Item = Form.Item;
@inject('UserStore', 'CountStore')
@observer
class Show extends Component{
    componentDidMount() {
        console.log(this.props);
    }
    login = async () => {
        const params = {
            username: 'zhangsai',
            password: '123123',
            grant_type: 'password',
        }
        try {
            const res = await CommonService.login(params);
            this.props.UserStore.getUserInfo({token: res.access_token});
        }
        catch(err) {
            console.log(err, 'err');
        }
    }
    add = () => {
        this.props.CountStore.addCount();
    }
    jdd = () => {
        this.props.CountStore.jddCount();
    }
    render() {
        const {UserStore, CountStore} = this.props;
        return <div className="m-30">
            <div className="login-btn m-t-10 btn">Login</div>
            <B></B>
            <Button type="primary" danger onClick={this.login}>danger</Button>
            <i className="fa fa-home font-size-30"></i>
            <Form>
                <Item>
                    <Input value={UserStore.user.token} disabled={true} />
                </Item>
                <Item>
                    <Input value={CountStore.count} disabled={true} />
                </Item>
                <Item className="align-center">
                    <Button type="primary" size="small" onClick={this.add}>add 1</Button>
                    <Button type="primary" className="m-l-10" size="small" onClick={this.jdd}>jdd 1</Button>
                    <Button type="primary" className="m-l-10" size="small">{CountStore.total}</Button>
                    <Button type="primary" danger className="m-l-10" size="small">{CountStore.count}</Button>
                </Item>
            </Form>
        </div>
    }
}
export default Show;