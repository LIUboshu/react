import React, { Component } from 'react'
import  About  from "./pages/About"; // 路由组件
import  Home  from "./pages/Home";	// 路由组件
import  Header  from "./component/Header";	// 一般组件
import MyNavlink from "./component/MyNavlink";
import { Route } from "react-router-dom";
import './App.css'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						{/* 一般组件 */}
						<Header a={1}/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* React中靠路由连接实现切换组件---编写路由连接 to里面:小写带杠不加点*/}
							{/* NavLink 自带className="active" */}
							{/* activeClassName   v6已经取消   active是默认选中的class名字,也可直接使用active    activeClassName也可以自定义active,例如;liuboshu当做active的名字 */}


							{/* <NavLink activeClassName="liuboshu" className="list-group-item" to="/about">About</NavLink>
							<NavLink activeClassName="liuboshu" className="list-group-item" to="/home">Home</NavLink> */}

							{/* 封装NavLink  <MyNavlink>Demo</MyNavlink>可以用this.props.children拿到*/}
							<MyNavlink to="/about" a={1} b={2}>About</MyNavlink>
							<MyNavlink to="/home">home</MyNavlink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 这里是"react-router-dom": "^5.2.0"版本   这里是V5写法---最新是V6 */}

								{/* 注册路由   路由组件*/}
								<Route path="/about" component={About}/>
								<Route path="/home" component={Home}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

/* 
	安装 react-router-dom
		npm install react-router-dom --save-dev
		ccnpm install react-router-dom@^5.2.0 --save


	路由基本使用
		1.明确好界面中的导航区/展示区
		2.导航区的a标签改为Link标签
			<Link to="/xxxx">Demo</Link>
		3.展示区写Route标签进行路径的匹配
			<Route path='/xxx' component={Demo}>
		4.<App>的最外包裹了一个<BrowserRouter>或<HashRouter>

	路由组件与一般组件
		1.写法不同
			一般组件:<Demo/>
			路由组件:<Route path:'/demo' component={Demo}>
		2.存放位置不同:
			一般组件存放在:component
			路由组件存放在:pages
		3.接收到的props不同:
			一般组件:写组件标签时传递了什么,就能接收到什么
			路由组件:接收到三个固定的属性
				history:
					go: ƒ go(n)
					goBack: ƒ goBack()
					goForward: ƒ goForward()
					push: ƒ push(path, state)
					replace: ƒ replace(path, state)
				location:
					pathname: "/home"
					search: ""
					state: undefined
				match:
					params: {}
					path: "/home"
					url: "/home"
	NavLink与封装过的MyNavlink
		1.NavLink可以实现路由连接的高亮,通过activeClassName指定样式名
		2.标签体内容是一个特殊的标签属性
		3.通过this.props.children可以获取标签内容	
*/