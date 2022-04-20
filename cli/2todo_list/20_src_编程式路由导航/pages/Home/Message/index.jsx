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
    showPush = (id,title)=>{
        // 编程式路由跳转

        // push跳转 + 携带params参数
        // this.props.history.push(`/home/message/detail/${id}/${title}`);

        // push跳转 + search携带参数
        // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`);

        // push跳转 + state携带参数
        this.props.history.push('/home/message/detail',{id,title});
    }
    showReplace = (id,title)=>{
        // 编程式路由跳转

        // replace跳转 + 携带params参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`);

        // replace跳转 + search携带参数
        // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`);

        // replace跳转 + state携带参数
        this.props.history.replace('/home/message/detail',{id,title});
    }
    btnBack = ()=>{
        this.props.history.goBack();
    }
    btnForward = ()=>{
        this.props.history.goForward();
    }
    btnGo = ()=>{
        this.props.history.go(2)
    }
    render() {
        const {messageArr} = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj)=>{
                        return  (
                                    <li key={msgObj.id}>
                                        {/* 没有高亮效果用Link  有高亮效果使用NavLink*/}

                                        {/* 向路由组件传递 携带 params参数 */}
                                        {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                                        {/* 向路由组件传递 携带 search参数 */}
                                        {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                                        {/* 向路由组件传递 携带 state参数  to里面写的对象  还要写成pathname*/}
                                        {/* replace={true}替换栈顶(浏览器不留下痕迹,替换)   push是默认留下痕迹(压栈) */}
                                        <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>

                                        <button onClick={()=>{this.showPush(msgObj.id,msgObj.title)}}>push查看</button>&nbsp;&nbsp;
                                        <button onClick={()=>{this.showReplace(msgObj.id,msgObj.title)}}>replace查看</button>
                                    </li>
                                )
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
                <button onClick={this.btnBack}>回退goBack</button>
                <button onClick={this.btnForward}>前进goForward</button>
                <button onClick={this.btnGo}>go</button>
            </div>
        )
    }
}
