/* 
    容器组件
        借助react-redux,需要安装cnpm install --save react-redux
    
*/

import React, { Component } from 'react'

/* 
    // 引入redux,也就是引入store读取状态,更新状态都能做
    // 需要在上一层(App.jsx)引入store,通过props的形式传入(框架就是这么设计的)
    import store from "../../redux/store"; 
*/

// 引入connect用于连接ui组件与redux
import {connect} from 'react-redux';
// 引入action
import { 
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction 
} from "../../redux/count_action";

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

/* 
    1.mapStateToProps函数返回的是一个对象
    2.返回的对象中的key就作为传递给UI组件的props的key,value就作为传递给ui组件props的value
    3.mapStateToProps用于传递状态
*/
/* function mapStateToProps(state){
    return {count:state}
} */

// mapStateToProps的一般写法
/* const mapStateToProps = state => ({count:state}) */



/* 
    1.mapDispatchToProps函数返回的是一个对象
    2.返回的对象中的key就作为传递给UI组件的props的key,value就作为传递给ui组件props的value
    3.mapDispatchToProps用于传递状态
*/
/* function mapDispatchToProps(dispatch){
    return {
        jia:data=>dispatch(createIncrementAction(data)),
        jian:(data)=>{
            dispatch(createDecrementAction(data))
        },
        asyncJia:(data,time)=>{
            dispatch(createIncrementAsyncAction(data,time))
        }
    }
} */
// mapDispatchToProps的一般写法
/* const mapDispatchToProps = dispatch =>({
    jia:data=>dispatch(createIncrementAction(data)),
    jian:(data)=>{
        dispatch(createDecrementAction(data))
    },
    asyncJia:(data,time)=>{
        dispatch(createIncrementAsyncAction(data,time))
    }
}) */


// 使用connect()()创建并暴露一个Count的容器组件

// connect(redux中所保存的状态(函数),用于操作状态的方法(函数))(要建立关系的ui组件)

// 页面渲染的是容器组件,容器组件渲染后子组件(ui组件)也就渲染出来了
// App.jsx需要引入容器组件Count

/* export default connect(mapStateToProps,mapDispatchToProps)(CountUI) */

export default connect(
    state => ({count:state}),
    // mapDispatchToProps的一般写法
    /* dispatch =>({
        jia:data=>dispatch(createIncrementAction(data)),
        jian:(data)=>{
            dispatch(createDecrementAction(data))
        },
        asyncJia:(data,time)=>{
            dispatch(createIncrementAsyncAction(data,time))
        }
    }) */

    // mapDispathToProps的简写,也可以以是一个对象
    // 通过react-redux调用dispatch
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        asyncJia:createIncrementAsyncAction
    }
)(Count)
