import React, { Component } from 'react'
import Count from "./component/Count";

export default class App extends Component {
    render() {
        return (
            <div>
                <Count/>
            </div>
        )
    }
}

/* 
    安装redux
        npm install redux
    
        一.去除Count组件自身的状态
        二.src下简历
            -redux文件夹
                -stors.js
                    -count_reducer.js
        三.store.js
            1>引入redux中的createStore函数,创建一个store
            2>createStore调用时要传入一个人为其服务的reducer
            3>暴露store对象
        四.count_reducer.js
            1>reducer的本质是一个函数,接收,preState.action,返回加工后的状态
            2>reducer有两个作用:初始化状态,加工状态
            3.reducer被第一次调用时,是store自动触发的,传递的preState是undefined
                传递的preState是undefined
                传递的action是:{type:'@@REDUX/INIT_a.2.b.4'}
        五.在index.js中监测store中状态的改变,一旦发生改变重新渲染<App/>
            备注:redux只负责管理状态,至于状态的改变驱动着页面的展示,要考我们自己写
        六.新增文件
            1.count_action.js 专门用于创建action对象
            2.constant.js 放置容易写错的type值


        安装中间件
            cnpm install --save redux-thunk
        七.redux异步action   (不是必须要写异步action)
            1.明确:延迟的动作不想交给组件自身,想交给action
            2.何时需要异步action:想要对状态进行操作,但是具体的数据靠异步任务返回
            3.具体编码
                1>安装中间件:cnpm install --save redux-thunk  并设置在store中.redux中引入applyMiddleware    代码:export default createStore(countReducer,applyMiddleware(thunk))
                2>创建action的函数不再返回一般对象,而是返回一个函数,该函数中写异步任务
                3>异步任务有结果后,分发一个同步的action去真正操作数据
            4.备注:异步action不是必须要写的,完全可以自己等待异步任务的结果了再去分发同步action
*/ 