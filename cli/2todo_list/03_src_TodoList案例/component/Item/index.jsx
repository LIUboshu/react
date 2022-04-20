import React, { Component } from 'react'
import './index.css'


export default class Item extends Component {
	// 鼠标移入移出的标识
	state={
		mouse:false
	}
	// 鼠标移入移出的回调
	handleMouse = (flag)=>{
		return () =>{
			this.setState({mouse:flag});
		}
	}
	// 勾选/取消勾选某一个todo的回调
	handleCheck = (id)=>{
		const {updateTodo} = this.props;
		return (event)=>{
			console.log(id,event.target.checked);// 当前item的id done的值true或者false
			updateTodo(id,event.target.checked)
			// console.log(this.props)
		}
	}
	// 删除某一个todo的回调
	handleDelete = (id) =>{
		// console.log(id)
		// 这里的confirm要加window
		if(window.confirm('你确定要删除吗?')){
			this.props.deleteTodo(id);
		}
	}
    render() {
		const {id,name,done} = this.props;
		const {mouse} = this.state;
        return (
            <li style={{backgroundColor:mouse ? "#ccc" : 'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} className='todo-footer'>
				<label>
					{
						// defaultChecked只在初次渲染时生效，更新时不受控制
					}
					<input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
					<span>{name}</span>
				</label>
				<button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse ? 'block' : 'none'}}>删除</button>
			</li>
        )
    }
}
