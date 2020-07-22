import React, {Component} from 'react';
import {Button, Input, Form} from 'antd';
import CommonService from '@/service/common';
import {observer, inject} from 'mobx-react';
import {BoxInfoContext} from '@/context';
import Box from '@/components/box';
const Item = Form.Item;

@inject('UserStore', 'CountStore')
@observer
class Show extends Component{
    state = {
        boxInfo: {
            title: '1',
            paragraph: '2',
            text: '3'
        }
    }
    myRef = null;
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                boxInfo: {
                    title: 'Introduction',
                    paragraph: 'In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.',
                    text: 'uniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources of design and front-end development'
                }
            })
        }, 3000)
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
    setColor = () => {
        console.log(this.myRef);
        // this.myRef.setColor();
    }
    render() {
        const {UserStore, CountStore} = this.props;
        const {boxInfo} = this.state;
        return <div className="m-30">
            <Form>
                <Item label="Token：">
                    <Input value={UserStore.user.token} className="aaa" disabled={true} />
                </Item>
                <Item label="Count">
                    <Input value={CountStore.count} disabled={true} />
                </Item>
                <Item className="align-center">
                    <Button type="primary" onClick={this.login}>get Token</Button>
                    <Button type="primary" className="m-l-10" size="small" onClick={this.add}>Count add 1</Button>
                    <Button type="primary" className="m-l-10" size="small" onClick={this.jdd}>Count jdd 1</Button>
                    <Button type="primary" className="m-l-10" size="small">{CountStore.total}</Button>
                </Item>
                <BoxInfoContext.Provider value={boxInfo}>
                    <Button onClick={this.setColor}>改变Title颜色</Button>
                    <Box ref={(ref) => this.myRef = ref}></Box>
                </BoxInfoContext.Provider>
            </Form>
        </div>
    }
}
export default Show;