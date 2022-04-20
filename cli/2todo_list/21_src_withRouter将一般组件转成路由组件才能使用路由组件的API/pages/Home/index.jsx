import React, { Component } from 'react'
import MyNavlink from "../../component/MyNavlink";
import News from "./News";
import Message from "./Message";
import { Route,Switch,Redirect } from "react-router-dom";

export default class Home extends Component {
    render() {
        // console.log("Home组件的props",this.props);
        return (
            <div>
              <h2>Home组件内容</h2>
              <div>
                <ul className="nav nav-tabs">
                  <li>
                    <MyNavlink to='/home/news'>News</MyNavlink>
                  </li>
                  <li>
                    <MyNavlink to="/home/message">Message</MyNavlink>
                  </li>
                </ul>
                <div>
                    {/* 注册路由 */}
                    <Switch>
                        <Route path="/home/news" component={News}/>
                        <Route path="/home/message" component={Message}/>
                        <Redirect to="/home/news"/>
                    </Switch>
                    
                </div>
              </div>
            </div>
        )
    }
}
