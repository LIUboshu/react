import React, { Component } from 'react'
import { connect } from "react-redux";
import { createIncrementAction } from "../../redux/actions/count";

// ui组件
class He extends Component {
    add = () =>{
        // 通知redux加1
        this.props.jiaHe(1)
    }
    render() {
        return (
            <div>
                <h1>当前求和:{this.props.he}</h1>
                <button onClick={this.add}>点我加1</button>
            </div>
        )
    }
}
// 容器组件     引入cnnect   操作状态永远离不开action
export default connect(
    state=>({he:state}),//映射状态
    {jiaHe:createIncrementAction}// 映射操作状态的方法
)(He)
