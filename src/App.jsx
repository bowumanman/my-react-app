/*
 * @Author: zhangsai 
 * @Date: 2020-05-20 16:14:29 
 * @Last Modified by: zhangsai
 * @Last Modified time: 2020-06-15 17:39:36
 * @Discription: 入口文件 
 */
import React, {Component} from 'react';
import {Switch, Route, Router, HashRouter, Redirect, Link} from 'react-router-dom';
import router from './router';
import { createHashHistory } from "history";
const customHistory = createHashHistory();
class App extends Component{

  render() {
    return (
    <HashRouter>
      {/* HashRouter 不需要服务器配置，在URL生成一个哈希来跟踪状态，通常在测试环境使用，也可以作为发布环境使用 
        为什么browserHistory需要服务端配置 因为真实URL其实是指向服务器资源，比如我们经常使用的API接口，也是一个真实URL的资源路径，当通过真实URL访问网站的时候，第一次访问的是网站的域名，这个时候可以正常加载我们的网站js等文件，而用户手动刷新网页时，由于路径是指向服务器的真实路径，服务器端没有做路由配置，就会导致资源不存在，用户访问的资源不存在，返回给用户的是404错误。
        通过hashHistory来生成的URL就不会出现这样的问题，因为他不是指向真实的路由
      */}
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
