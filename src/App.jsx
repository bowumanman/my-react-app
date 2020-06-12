/*
 * @Author: zhangsai 
 * @Date: 2020-05-20 16:14:29 
 * @Last Modified by: zhangsai
 * @Last Modified time: 2020-06-09 14:28:38
 * @Discription: 入口文件 
 */
import React, {Component} from 'react';
import {Switch, Route, Router, HashRouter, Redirect, Link} from 'react-router-dom';
import router from './router';
import { createHashHistory } from "history";
import Home from './views/home-page';

const customHistory = createHashHistory();
class App extends Component{

  render() {
    return (
    <HashRouter>
      <Router history={customHistory} >
        <Link to="/show">show</Link>
        <br/>
        <Link to="/login">login</Link>
        <br />
        <Link to="/">home-page</Link>
        <Switch>
          {
            router.map((item, index) => {
              return <Route key={index} {...item}></Route>
            })
          }
          <Redirect to="/login" /> {/*重定向路由地址*/}
        </Switch>
      </Router>
    </HashRouter>
    )
  }
}

export default App;
