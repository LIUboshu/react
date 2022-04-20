import React, { Component,lazy,Suspense } from 'react'

import { NavLink,Route,Routes } from "react-router-dom";

import Lazyload from "./Lazyload";

// import  About  from "./About";
// import  Home  from "./Home";

// 路由懒加载  写法
const About = lazy(()=>import('./About'));
const Home = lazy(()=>import('./Home'));



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
							{/* React中靠路由连接实现切换组件---编写路由连接 to里面:小写带杠不加点*/}
							<NavLink className="list-group-item" to="/about">About</NavLink>
							<NavLink className="list-group-item" to="/home">Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 这里是"react-router-dom":V6版本 */}
								{/* 注册路由 */}
								
								{/* 通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面 */}
								{/* <Suspense fallback={<h1>Loading...</h1>}> */}
								<Suspense fallback={<Lazyload/>}>
									<Routes>
										<Route path="/about" element={<About/>}/>
										<Route path="/home" element={<Home/>}/>
									</Routes>
								</Suspense>
								
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
		cnpm install react-router-dom@^5.2.0 --save


	路由基本使用
		1.明确好界面中的导航区/展示区
		2.导航区的a标签改为Link标签
			<Link to="/xxxx">Demo</Link>
		3.展示区写Route标签进行路径的匹配
			<Route path='/xxx' component={Demo}>
		4.<App>的最外包裹了一个<BrowserRouter>或<HashRouter>



	路由组件的lazyLoad 
		//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
		const Login = lazy(()=>import('@/pages/Login'))
		
		//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
		<Suspense fallback={<h1>loading.....</h1>}>
			<Switch>
				<Route path="/xxx" component={Xxxx}/>
				<Redirect to="/login"/>
			</Switch>
		</Suspense>
*/