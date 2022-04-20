/* 
    容器组件
        借助react-redux,需要安装cnpm install --save react-redux
    
*/

import React, { Component } from 'react'

// 引入connect用于连接ui组件与redux
import {connect} from 'react-redux';
// 引入action
import { 
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction 
} from "../../redux/actions/count";

class Count extends Component {
    state = {carName:'haha'};

   
    plus = ()=>{
        const { value } = this.sele;
        this.props.jia(Number(value));
    }
    reduce = ()=>{
        const { value } = this.sele;
        this.props.jian(Number(value));
    }
    evenNum = ()=>{
        const { value } = this.sele;
        if(this.props.count % 2 !== 0){
            this.props.jia(Number(value));
        }
    }
    // 异步加
    asyncPlus = ()=>{
        const { value } = this.sele;
        this.props.asyncJia(Number(value),1000);
    }
    render() {
        console.log('UI组件接收到的props是:',this.props);
        return (
            <div>
                <h2>这是Count组件,下方组件人数:{this.props.list.length}</h2>
                <h4>显示的总和是:{this.props.count}</h4>
                <select ref={c => this.sele = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.plus}>+</button>&nbsp;
                <button onClick={this.reduce}>-</button>&nbsp;
                <button onClick={this.evenNum}>奇数可以相加</button>&nbsp;
                <button onClick={this.asyncPlus}>异步相加</button>
            </div>
        )
    }
}
// 使用connect()()常见并暴露一个Count的容器组件
export default connect(
    state => ({count:state.he,list:state.personList}),
    // mapDispathToProps的简写,也可以以是一个对象
    // 通过react-redux调用dispatch
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        asyncJia:createIncrementAsyncAction
    }
)(Count)
