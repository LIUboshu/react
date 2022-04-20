import React, { Component } from 'react'
import PubSub from "pubsub-js"
import axios from 'axios'

export default class Search extends Component {
	// 执行搜索  拿到数据
	search = ()=>{
		/* // 发布消息  例子
		PubSub.publish("xiaoxi_name",{name:'tom',age:18}) */


		// 获取用户输入
		// console.log(this.keyWordElement.value)
		//获取用户的输入(连续解构赋值+重命名)
		const {keyWordElement:{value:keyWord}} = this

		/* 谁想给人传东西,谁就发布消息 */

		// //发送请求前通知List更新状态
		PubSub.publish("xiaoxi_name",{isFirst:false,isLoading:true})

		//发送网络请求  
		axios.get(`/api1/search/users?q=${keyWord}`).then(
		// axios.get(`https://api.github.com/search/users?q=liuboshu`).then(
			response => {
				//请求成功后通知List更新状态   发布消息
				PubSub.publish("xiaoxi_name",{isLoading:false,users:response.data.items})
				// console.log(response.data)
			},
			error => {
				//请求失败后通知List更新状态
				PubSub.publish("xiaoxi_name",{isLoading:false,err:error.message})
			}
		)
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
					<button onClick={this.search}>搜索</button>
				</div>
			</section>
		)
	}
}
