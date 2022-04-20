import React, { Component } from 'react'
import  About  from "./pages/About"; // 路由组件
import  Home  from "./pages/Home";	// 路由组件
import  Header  from "./component/Header";	// 一般组件
import MyNavlink from "./component/MyNavlink";
import { Route,Switch,Redirect } from "react-router-dom";
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
							{/* 封装NavLink  <MyNavlink>Demo</MyNavlink>可以用this.props.children拿到*/}
							<MyNavlink to="/about" a={1} b={2}>About</MyNavlink>
							{/* to="/home/a/b"   模糊匹配 */}
							<MyNavlink to="/home">home</MyNavlink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 这里是"react-router-dom": "^5.2.0"版本   这里是V5写法---最新是V6 */}

								{/* 注册路由   路由组件*/}
								{/* V6版本Switch已经被Routes替代 */}
								<Switch>
									{/* exact={true}严格匹配   不要随意开启严格匹配*/}
									<Route path="/about" component={About}/>
									<Route path="/home" component={Home}/>
									{/* Redirect 必须放在最后一行 */}
									{/* V6  重定向  写法 <Route path="*" element={<Navigate to="/about" />} /> */}
									<Redirect to='/about'/>
								</Switch>
								
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
	Switch的使用
		1.通过情况下,path和component是一一对应的关系
		2.Switch可以提高路由匹配效率(单一匹配)
	解决多级路径刷新页面样式丢失的问题
		1.public/index.html 中 引入样式时不写 ./ 写 / (常用)
		2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL%/ (常用)
		3.使用HashRouter
	路由的严格匹配与模糊匹配
		1.默认使用的是模糊匹配(简单记:[输入的路径]必须包含要[匹配的路径],且顺序要一致)
		2.开启严格匹配:<Route exact={true} path="/about" component={About}/>
		3.严格匹配不要随便开启,需要在开,有时候开启会导致无法继续匹配二级路由
	Redirect的使用
		1.一般写在所有路由注册的最下方,当所有路由都无法匹配时,跳转到Redirect指定的路由
		具体编码
			<Switch>
				<Route path="/about" component={About}/>
				<Route path="/home" component={Home}/>
				<Redirect to='/about'/>
			</Switch>
	嵌套路由
		1.注册子路由时要写上父(上一级)路由的path值
		2.路由的匹配时按照注册路由的顺序进行的
	向路由组件传递参数
		1.params参数
			路由链接(携带参数):<Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
			注册路由(声明接收):<Route path="/home/message/detail/:id/:title" component={Detail}/>
			接收单数:const  {id,title} = this.props.match.params;
		2.search参数
			路由链接(携带参数):<Link to={`/demo/test/?name=tom&age=18`}>详情</Link>
			注册路由(无需声明,正常注册即可)<Route path="/demo/test" component={Demo}>
			接收参数:const {search} = this.props.location;
			备注:获取到的search是urlencoded编码字符串,需要借助querystring解析,直接引入无需下载
		3.state参数(路由组件所独有的state)


*/