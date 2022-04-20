import React, { Component } from 'react'
import Detail from "./Detail";
import { Link,Route } from "react-router-dom";

export default class Message extends Component {
    // 初始化状态
    state = {
        messageArr:[
            {id:'01',title:'消息1'},
            {id:'02',title:'消息2'},
            {id:'03',title:'消息3'}
        ]

        
    }
    render() {
        const {messageArr} = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj)=>{
                        return <li key={msgObj.id}>
                                    {/* 没有高亮效果用Link  有高亮效果使用NavLink*/}

                                    {/* 向路由组件传递 携带 params参数 */}
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                                    {/* 向路由组件传递 携带 search参数 */}
                                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                                    {/* 向路由组件传递 携带 state参数  to里面写的对象  还要写成pathname*/}
                                    <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
                                </li>
                        })
                    }
                </ul>
                <hr />
                {/* 只有一个不需要包Switch   注册路由*/}

                {/* 声明接收params参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

                {/* search参数无需声明接收,正常注册路由即可 */}
                {/* <Route path="/home/message/detail" component={Detail}/> */}

                {/* state参数无需声明接收,正常注册路由即可 */}
                <Route path="/home/message/detail" component={Detail}/>
            </div>
        )
    }
}
