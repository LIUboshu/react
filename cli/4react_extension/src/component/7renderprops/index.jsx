import React, { Component } from 'react'
import './index.css'

// children props 写法
/* export default class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                <A>
                    <B />
                </A>
            </div>
        )
    }
}
class A extends Component {
    state = {
        name:'Tom'
    }
    render() {
        console.log(this.props);//{children: " "}
        return (
            <div className='a'>
                <h3>我是A组件</h3>
                {this.props.children}
            </div>
        )
    }
}
class B extends Component {
    render() {
        console.log('B-render')
        return (
            <div className='b'>
                <h3>我是B组件,{this.props.name}</h3>
            </div>
        )
    }
} */


// render props写法
// import  C  from "../1setState";
export default class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                {/* <A render={()=>{
                    return <B/>
                }} /> */}
                {/* 通过render props,给B组件传递props参数 */}
                <A render={(name)=><B name={name}/>} />
                {/* <A render={(name)=><C name={name}/>} /> */}
            </div>
        )
    }
}
class A extends Component {
    state = {
        name:'Tom'
    }
    render() {
        const {name} = this.state;
        console.log(this.props);//{render: ƒ}
        return (
            <div className='a'>
                <h3>我是A组件</h3>
                {/* 这里好比VUE的插槽,预留的位置 */}
                {this.props.render(name)}
                {/* 这里的this.props.render(参数需要时传) 必须调用render()返回的是<B/> 给<B/>传  A组件的state,name*/}
            </div>
        )
    }
}
class B extends Component {
    render() {
        console.log('B-render')
        return (
            <div className='b'>
                {/* 这个通过this.props拿到A组件的state里面的name */}
                <h3>我是B组件,{this.props.name}</h3>
            </div>
        )
    }
}


/* 
    Vue中: 
        使用slot技术, 也就是通过组件标签体传入结构  <A><B/></A>
    React中:
        使用children props: 通过组件标签体传入结构
        使用render props: 通过组件标签属性传入结构,而且可以携带数据，一般用render函数属性
    children props
        <A>
            <B>xxxx</B>
        </A>
        {this.props.children}
        问题: 如果B组件需要A组件内的数据, ==> 做不到 
    render props
        <A render={(data) => <C data={data}></C>}></A>
        A组件: {this.props.render(内部state数据)}
        C组件: 读取A组件传入的数据显示 {this.props.data}
*/