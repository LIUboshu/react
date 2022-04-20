import React, { PureComponent } from 'react'
import "./index.css";

export default class Parent extends PureComponent {
    state={
        carName:"奔驰C63"
    }
    changeCar = ()=>{
        this.setState({carName:'迈巴赫'})
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(this.props,this.state);
    //     console.log(nextProps,nextState);
    //     return !this.state.carName === nextState.carName
    // }
    render() {
        console.log('Parent---render');
        const {carName} = this.state;
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                <h4>我的车是:{carName}</h4>
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName={'固定的车'}/>
            </div>
        )
    }
}
class Child extends PureComponent {
    /* shouldComponentUpdate(nextProps,nextState){
        console.log(this.props,this.state);
        console.log(nextProps,nextState);
        return !this.state.carName === nextState.carName
    } */
    render() {
        console.log('child---render');
        return (
            <div className='child'>
                <h3>我是Child组件</h3>
                <span>我接到的车是:{this.props.carName}</span>
            </div>
        )
    }
}

/* 
    Component的2个问题 
        1. 只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低
        2. 只当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低
    效率高的做法
        只有当组件的state或props数据发生改变时才重新render()
    原因
        Component中的shouldComponentUpdate()总是返回true
    解决
        办法1: 
            重写shouldComponentUpdate()方法
            比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false
        办法2:  
            使用PureComponent
            PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
            注意: 
                只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false  
                不要直接修改state数据, 而是要产生新数据
        项目中一般使用PureComponent来优化
*/  