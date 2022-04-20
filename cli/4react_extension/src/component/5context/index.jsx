
// 一种组件间通信方式,常用于[祖组件]与[后代组件]间通信
import React, { Component } from 'react'
import "./index.css";

// 创建Context容器对象：
const MyContext = React.createContext();
// 解构MyContext
const {Provider,Consumer} = MyContext;

export default class A extends Component {
    state = {
        username:'Tom',
        age:18
    }
    render() {
        const {username,age} = this.state;
        return (
            <div className='parent'>
                <h3>我是A组件</h3>
                <h4>我的用户名是:{username}</h4>
                {/* Provider 里面的value属性名不能改变 */}
                <Provider value={{username,age}}>
                    <B usname={username}/>
                </Provider>
                {/* <B usname={this.state.username}/> */}
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div className='child'>
                <h3>我是B组件</h3>
                {/* 子组件和父组件之间通过props传递数据 */}
                <h4>从A组件接收到的用户名是:{this.props.usname}</h4>
                <C/>
            </div>
        )
    }
}
// 类组件
class C extends Component {
    static contextType = MyContext  // 声明接收context
    render() {
        console.log(this);//props: {…}, context: {…}, refs: {…} state   C组件的实例对象
        const {username,age} = this.context;
        return (
            <div className='grand'>
                <h3>我是C组件</h3>
                <h4>从A组件接收到的用户名是:{username},年龄是:{age}</h4>
                <D/>
            </div>
        )
    }
}
// 函数组件
function D (){
    return (
        <div className='grands'>
            <h3>我是D组件</h3>
            <h4>从A组件接收到的用户名是:
                <Consumer>
                    {
                        value =>{
                            console.log(value);//{username: "Tom", age: 18}
                            return `${value.username},年龄是:${value.age}`
                        }
                    }
                </Consumer>
            </h4>
        </div>
    )
}

/* 
    Context
        一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信
        1) 创建Context容器对象：
            const XxxContext = React.createContext()  
            
        2) 渲染子组时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：
            <xxxContext.Provider value={数据}>
                子组件
            </xxxContext.Provider>
            
        3) 后代组件读取数据：

            //第一种方式:仅适用于类组件 
            static contextType = xxxContext  // 声明接收context
            this.context // 读取context中的value数据
            
            //第二种方式: 函数组件与类组件都可以
            <xxxContext.Consumer>
                {
                value => ( // value就是context中的value数据
                    要显示的内容
                )
                }
            </xxxContext.Consumer>
            
    注意:在应用开发中一般不用context, 一般都用它的封装react插件

*/