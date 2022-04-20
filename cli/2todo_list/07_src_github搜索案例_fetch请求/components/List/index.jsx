import React, { Component } from 'react'
import PubSub from "pubsub-js"
import './index.css'

export default class List extends Component {
	state = { //初始化状态
		users:[], //users初始值为数组
		isFirst:true, //是否为第一次打开页面
		isLoading:false,//标识是否处于加载中
		err:'',//存储请求相关的错误信息
	}
	/* 谁接收东西谁在componentDidMount里面订阅消息 */
	// 组件一挂载页面就 接收  订阅
	componentDidMount(){
		// 订阅
		this.token = PubSub.subscribe('xiaoxi_name', (msg,data)=>{
			// console.log(msg);// msg 必须携带, msg可以告诉调用的事哪个订阅,在多个订阅使用用一个方法的时候用
			// console.log(data);
			// 修改
			this.setState(data)
		});
	}
	// 组件卸载时
	componentWillUnmount(){
		// 取消订阅
		PubSub.unsubscribe(this.token);
	}
	render() {
		const {users,isFirst,isLoading,err} = this.state
		return (
			<div className="row">
				{
					isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> : 
					isLoading ? <h2>Loading......</h2> : 
					err ? <h2 style={{color:'red'}}>{err}</h2> :
					users.map((userObj)=>{
						return (
							<div key={userObj.id} className="card">
								<a rel="noreferrer" href={userObj.html_url} target="_blank">
									<img alt="head_portrait" src={userObj.avatar_url} style={{width:'100px'}}/>
								</a>
								<p className="card-text">{userObj.login}</p>
							</div>
						)
					})
				}
			</div>
		)
	}
}
