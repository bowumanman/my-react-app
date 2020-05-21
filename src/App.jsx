/*
 * @Author: zhangsai 
 * @Date: 2020-05-20 16:14:29 
 * @Last Modified by: zhangsai
 * @Last Modified time: 2020-05-21 11:23:04
 * @Discription: 入口文件 
 */
import React, {Component} from 'react';
import {Switch, Route, Router, BrowserRouter, Link, Redirect} from 'react-router-dom';
import router from './router';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
class App extends Component{

  render() {
    return (
    <BrowserRouter>
      <Router history={customHistory} >
        <Link to="/login">login</Link><br />
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
    </BrowserRouter>
    )
  }
}

export default App;
