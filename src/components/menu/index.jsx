/*
 * @Author: zhangsai
 * @Date: 2020-06-09 11:25:20
 * @Last Modified by: zhangsai
 * @Last Modified time: 2020-07-09 15:38:56
 * @Description: 描述
 */
import React, {Component} from 'react';
import {Menu, NavBar} from 'antd-mobile';
import {withRouter} from 'react-router';
@withRouter
class MenuCell extends Component{
    state = {
        menu: [{
            label: 'Login',
            value: '/login'
        }, {
            label: 'Home',
            value: '/'
        }, {
            label: 'show',
            value: '/show'
        }],
        showMenu: false,
    }
    onClick = () => {
        const {showMenu} = this.state;
        this.setState({
            showMenu: !showMenu
        })
    }
    onChange = (val) => {
        this.props.history.push(val[0]);
        this.setState({
            showMenu: false
        })
    }
    render() {
        const {menu, showMenu} = this.state;
        return <div>
            <NavBar leftContent="Menu" onLeftClick={this.onClick} >
                {
                    // showMenu ? <ActivityIndicator style={{position: 'absolute', width: '100%'}} size="large"></ActivityIndicator> : ''
                }
            </NavBar>
            {
                showMenu ? <Menu
                level={1}
                data={menu}
                onChange={this.onChange}
                style={{position: 'absolute', width: '100%', zIndex: 9}}
                ></Menu>
                :
                ''
            }
        </div>
    }
}
export default MenuCell;