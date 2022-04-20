import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        sum:0
    }
    plus = ()=>{
        const { sum } = this.state;
        const { value } = this.sele;
        this.setState({sum:sum + Number(value)});
    }
    reduce = ()=>{
        const { sum } = this.state;
        const { value } = this.sele;
        this.setState({sum:sum - Number(value)});
    }
    evenNum = ()=>{
        const { sum } = this.state;
        const { value } = this.sele;
        if(sum % 2 !== 0){
            this.setState({sum:sum + Number(value)});
        }
    }
    asyncPlus = ()=>{
        const { sum } = this.state;
        const { value } = this.sele;
        setTimeout(()=>{
            this.setState({sum:sum + Number(value)});
        },1000)
    }
    render() {
        return (
            <div>
                <h1>显示的总和是:{this.state.sum}</h1>
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

