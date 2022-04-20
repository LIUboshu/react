import React, { Component } from 'react'
// 类型/必要性的限制 npm install --save prop-types
import PropTypes  from "prop-types";
import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends Component {
    // 对接收的props进行/类型/必要性的限制
    static propTypes = {
        todo:PropTypes.func.isRequired  // todo是一个函数 func isRequired代表必传
    }
    // 键盘事件的回调
    handleKeyUp  = (event) =>{
        if(event.target.value.trim() === ''){
            alert("输入不能为空");
            return
        }
        if(event.keyCode === 13){
            // console.log(event.target.value)
            // 这里为了让id不一样下载了 nanoid  npm install --save nanoid
            const addTodo = {id:nanoid(),name:event.target.value,done:false}
            this.props.todo(addTodo);
            event.target.value = ''
        }
        
    }
    render() {
        return (
            <div className='todo-header'>
                <input onKeyUp={this.handleKeyUp} type="text" placeholder='请输入你的任务名称,按回车键确认'/>
            </div>
        )
    }
}
