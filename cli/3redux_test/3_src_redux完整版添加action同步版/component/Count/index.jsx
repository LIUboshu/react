import React, { Component } from 'react'
// 引入store,用于获取redux中保存的状态
import store from "../../redux/store";
// 引入actionCreator,专门用于创建action对象
import { createIncrementAction,createDecrementAction } from "../../redux/count_action";

export default class Count extends Component {
    state = {carName:'haha'};

    /* componentDidMount(){
        // 监测redux中状态的变化,只要变化,就调用render
        // subscribe专门订阅redux状态的更改
        store.subscribe(()=>{
            this.setState({});// 更新react状态,重新调用render,就刷新
        })
        // 之后会有个react-redux,就是链接redux和react,可以实现响应式更新
    } */

    plus = ()=>{
        const { value } = this.sele;
        store.dispatch(createIncrementAction(Number(value)))
    }
    reduce = ()=>{
        const { value } = this.sele;
        store.dispatch(createDecrementAction(Number(value)))
    }
    evenNum = ()=>{
        const  sum  = store.getState();
        const { value } = this.sele;
        if(sum % 2 !== 0){
            store.dispatch(createIncrementAction(Number(value)))
        }
    }
    asyncPlus = ()=>{
        const { value } = this.sele;
        setTimeout(()=>{
            store.dispatch(createIncrementAction(Number(value)))
        },1000)
    }
    render() {
        return (
            <div>
                <h1>显示的总和是:{store.getState()}</h1>
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

