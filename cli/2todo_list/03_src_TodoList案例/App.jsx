import React, { Component } from 'react'
import "./App.css";
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";


export default class App extends Component {
    // todo用于添加一个todos,接收参数是todos对象
    todo = (todoObj)=>{
        // 获取原todos
        const {todos} = this.state;
        // 追加一个todo
        const newTodos = [todoObj,...todos];
        // 更新状态
        this.setState({todos:newTodos})
    }
    // updateTodo用于更新一个todo对象
    updateTodo = (id,done)=>{
        // 获取状态中的todos
        const {todos} = this.state;
        // map遍历 找到指定项 指定属性修改
        // 匹配处理数据
        const newTodos = todos.map((item)=>{
            if(item.id === id){
                // {...item,done:done}  后面的done 会修改done的值  简写{...item,done}
                return {...item,done:done}
            }else{
                // 如果没有匹配上  直接返回之前的
                return item
            }
        })
        // 将新的数据传进去
        this.setState({todos:newTodos})
    }
    // deleteTodo用于删除一个todo对象
    deleteTodo = (id)=>{
        const {todos} = this.state;
        const newTodos = todos.filter((todoObj)=>{
                // 把不等于的返回  如果等于就过滤掉
                return todoObj.id !== id
        })
        
        // 更新状态
        this.setState({todos:newTodos})
    }
    // 全选
    selectAll = (done)=>{
        const {todos} = this.state;
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done:done}
        })
        this.setState({todos:newTodos})
    }
    // 清除已完成的
    eliminateTodo = ()=>{
        const {todos} = this.state;
        const newEliminate = todos.filter((todoObj)=>{
            return todoObj.done !== true
        })
        this.setState({todos:newEliminate})
    }
    // 初始化状态
    // 状态在哪里,操作状态的方法就在那里
    state = {
        todos:[
            {id:'001',name:'Vue',done:true},
            {id:'002',name:'React',done:true},
            {id:'003',name:'Angular',done:false},
            {id:'004',name:'JavaScript',done:true}
        ]
    }
    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
				<div className="todo-wrap">
					<Header todo={this.todo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} selectAll={this.selectAll} eliminateTodo={this.eliminateTodo}/>
				</div>
			</div>
        )
    }
}

/* 
    1.拆分组件/实现静态组件,注意:className  style的写法
    2.动态初始化列表,如果确定将数据放在哪个组件的state中
        1>某个组件使用:放在其自身的state中
        2>某些组件使用:放在他们共同的父组件state中(官方称此操作为:状态提升)
    3.关于父子之间通信
        1> 父组件 给 子组件 传递数据:通过props传递
        2> 子组件 给 父组件 传递数据:通过props传递,要求父组件提前给子组件传递一个函数
    4.注意defaultChecked 和 checked的区别,类似的还有defaultValue 和 value
    5.状态在哪里,操作状态的方法就在那里

    cnpm install nanoid   设置动态 id
*/
