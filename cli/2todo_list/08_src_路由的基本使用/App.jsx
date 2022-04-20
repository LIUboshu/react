import React, { Component } from 'react'
import  About  from "./component/About";
import  Home  from "./component/Home";
import { Link,Route } from "react-router-dom";

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* <a className="list-group-item active" href="./about.html">About</a>
							<a className="list-group-item" href="./home.html">Home</a> */}

							{/* React中靠路由连接实现切换组件---编写路由连接 to里面:小写带杠不加点*/}
							<Link className="list-group-item active" to="/about">About</Link>
							<Link className="list-group-item" to="/home">Home</Link>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 这里是"react-router-dom": "^5.2.0"版本   这里是V5写法---最新是V6 */}

								{/* 注册路由 */}
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
*/

