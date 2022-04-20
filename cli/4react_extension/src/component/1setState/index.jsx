import React, { Component } from 'react'

export default class Count extends Component {
    add = () =>{
        // 第一种写法    对象式的setState

        /* 
        // 1.获取原来的count值
        const {count} = this.state;
        // 2.更新状态   setState调完之后引起的后续动作是异步的   函数可选
        this.setState({count:count+1},()=>{
            // 这里 状态和render已经更新完
            console.log(this.state.count)//1
        });
        // console.log(this.state.count)// 0
        */

        // 第二种写法   函数式setState

        this.setState((state,props)=>{
            console.log(state)
            console.log(props)
            return {count:state.count + 1}
        },()=>{
            console.log(this.state.count)
        })
        console.log(this.state.count)
    }
    state = {
        count:0
    }
    render() {
        return (
            <div>
                <h2>求和总数是:{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}
/* 
setState更新状态的2种写法
    (1). setState(stateChange, [callback])------对象式的setState
            1.stateChange为状态改变对象(该对象可以体现出状态的更改)
            2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
					
	(2). setState(updater, [callback])------函数式的setState
            1.updater为返回stateChange对象的函数。
            2.updater可以接收到state和props。
            4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
    总结:
		1.对象式的setState是函数式的setState的简写方式(语法糖)
		2.使用原则：
				(1).如果新状态不依赖于原状态 ===> 使用对象方式
				(2).如果新状态依赖于原状态 ===> 使用函数方式
				(3).如果需要在setState()执行后获取最新的状态数据, 
					要在第二个callback函数中读取



*/