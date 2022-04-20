import React, { Component } from 'react'


export default class Count extends Component {
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
        // setTimeout(()=>{
            // store.dispatch(createIncrementAsyncAction(Number(value),1000))
        // },1000)
    }
    render() {
        console.log('UI组件接收到的props是:',this.props);
        return (
            <div>
                <h1>显示的总和是:{this.props.count}</h1>
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

