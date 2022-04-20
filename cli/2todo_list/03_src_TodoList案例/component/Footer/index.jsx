import React, { Component } from 'react'

export default class Footer extends Component {
    // 全选
    handleCheckAll = (event)=>{
        this.props.selectAll(event.target.checked)
    }
    // eliminate清除已完成的
    eliminate = ()=>{
        this.props.eliminateTodo();
    }
    render() {
        const {todos} = this.props;
        // 已完成的个数
        const doneCount = todos.reduce((pre,cur)=>{
            return pre + (cur.done ? 1 : 0)
        },0)
        // 总数
        const total = todos.length;
        
        return (
            <div className="todo-footer">
                <label>
					<input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && todos.length !== 0?true:false}/>
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{total}
				</span>
				<button onClick={this.eliminate} style={{float:'right',marginTop:'-6px'}} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
