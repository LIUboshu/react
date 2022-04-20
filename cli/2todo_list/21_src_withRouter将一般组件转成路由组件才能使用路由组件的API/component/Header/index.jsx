import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Header extends Component {
    btnBack = ()=>{
        // 要想使用路由组件的API必须引入withRouter
        this.props.history.goBack();
    }
    btnForward = ()=>{
        this.props.history.goForward();
    }
    btnGo = ()=>{
        this.props.history.go(2)
    }
    render() {
        console.log("Header组件的props",this.props);
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.btnBack}>回退goBack</button>
                <button onClick={this.btnForward}>前进goForward</button>
                <button onClick={this.btnGo}>go</button>
            </div>
        )
    }
}
// 暴露的是withRouter函数调用的返回值
export default withRouter(Header);

// withRouter可以加工一般组件,让一般组件具备路由组件所特有的API
// withRouter的返回值是一个新的组件
