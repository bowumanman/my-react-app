/*
 * @Author: zhangsai
 * @Date: 2020-06-09 11:25:20
 * @Last Modified by: zhangsai
 * @Last Modified time: 2020-07-10 17:15:00
 * @Description: 描述
 */
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Typography} from 'antd';
// import {BoxInfoContext1} from '@/views/show';
import {BoxInfoContext} from '@/context';
const {Title, Paragraph, Text} = Typography;
@withRouter
class SmallBox extends Component{
    static contextType = BoxInfoContext;
    state = {
        color: 'black'
    }
    setRedColor = () => {
        this.setState({
            color: 'red'
        })
    }
    render() {
        const context = this.context;
        const {color} = this.state;
        console.log(context, 'context');
        return <Typography>
            <Title style={{color: color}}>{context.title}</Title>
            <Paragraph>{context.paragraph}</Paragraph>
            <Paragraph>
                <Text>{context.text}</Text>
            </Paragraph>
        </Typography>
    }
}
export default SmallBox;