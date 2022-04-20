import React, { Component } from 'react'
import PubSub from "pubsub-js"
// import axios from 'axios'

export default class Search extends Component {
	// 执行搜索  拿到数据
	search = async()=>{
		//获取用户的输入(连续解构赋值+重命名)
		// const {keyWordElement:{value:keyWord}} = this

		/* 谁想给人传东西,谁就发布消息 */

		// //发送请求前通知List更新状态
		PubSub.publish("xiaoxi_name",{isFirst:false,isLoading:true})

		//发送网络请求  

		/* axios.get(`/api1/search/users?q=${keyWord}`).then(
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
		) */

		// 使用fetch()发送
		// fetch()第一种
		/* fetch(`https://api.github.com/search/users?q=liuboshu`).then(
			(response)=>{
				console.log("联系服务器成功");//join()方法:是原型上的方法  返回promise
				return response.json()		// 返回的是promise实例对象
			},
			(error)=>{
				console.log('联系服务器失败',error);
				return new Promise();//
			}
		).then( 
			res => {console.log('获取数据成功',res)},
			err => {console.log('获取数据失败',err)}
		) */
		
		// fetch()第二种
		/* fetch(`https://api.github.com/search/users?q=liuboshu`).then(
			(response)=>{
				console.log("联系服务器成功");//join()方法:是原型上的方法  返回promise
				return response.json()		// 返回的是promise实例对象
			}
		).then( 
			res => {console.log('获取数据成功',res)}
		).catch(
			err =>{
				console.log(err);
			}
		) */

		/* 
			await表达式
			    1.await 必须写在async函数中
			    2.await 右侧的表达式一般为promise对象
			    3.awwit 返回的是promise成功的值
			    4.await 的promise失败了,就会抛出异常,需要通过try...catch捕获处理
			
			fetch:原生函数,不在使用XmlHttpRequest对象提交ajax请求
			老版浏览器可能不支持fetch
		
		*/
		
		// fetch()第三种
		try {
			// try里面写可能出错
			const response = await fetch(`https://api.github.com/search/users?q=liuboshu`);
			const data = await response.json();
			console.log(data)
			PubSub.publish("xiaoxi_name",{isLoading:false,users:data.items})
		} catch (error) {
			// catch写出错的 并且 带着错误过来 error
			console.log('请求出错',error)
			PubSub.publish("xiaoxi_name",{isLoading:false,err:error.message})
		}
		
		
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
