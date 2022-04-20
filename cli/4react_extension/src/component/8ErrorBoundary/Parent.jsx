import React, { Component } from 'react'
import Child from "./Child";

export default class Parent extends Component {
    state = {
        hasError:''// 用于标识子组件是否产生错误
    }
    // !!!!!!!!!!!!!!错误边界 只能在线上环境产生效果!!!!!!!!!!!!!!
    // 如果Parent组件的子组件出现了任何报错都会调用getDerivedStateFromError这个钩子,并携带错误信息
    static getDerivedStateFromError(error){
        console.log(error)
        return {
            hasError: error
        }
    }
    componentDidCatch() {
        // 统计页面的错误。发送请求发送到后台去
        console.log('此处统计错误,反馈给服务器,用于通知编码人员进行bug的解决');
    }
    render() {
        return (
            <div>
                <h2>我是Parent组件</h2>
                {this.state.hasError ? <h2>当前网络不稳定,稍后再试...</h2> : <Child />}
            </div>
        )
    }
}


/* 
    !!!!!!!!!!!!!!错误边界 只能在线上环境产生效果!!!!!!!!!!!!!!
    错误边界(Error boundary)：用来捕获后代组件错误，渲染出备用页面
    只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
    getDerivedStateFromError配合componentDidCatch
        // 生命周期函数，一旦后台组件报错，就会触发
        static getDerivedStateFromError(error) {
            console.log(error);
            // 在render之前触发
            // 返回新的state
            return {
                hasError: true,
            };
        }

        componentDidCatch(error, info) {
            // 统计页面的错误。发送请求发送到后台去
            console.log(error, info);
        }
*/

/* 
        #### 组件间的关系：
            - 父子组件
            - 兄弟组件（非嵌套组件）
            - 祖孙组件（跨级组件）
        通信方式：
            1.props：
                (1).children props
                (2).render props
            2.消息订阅-发布：
                pubs-sub、event等等
            3.集中式管理：
                redux、dva等等
            4.conText:
                生产者-消费者模式
        比较好的搭配方式：
            父子组件：props
            兄弟组件：消息订阅-发布、集中式管理
            祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多)

*/