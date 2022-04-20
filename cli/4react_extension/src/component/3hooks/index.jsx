import React from 'react'
import ReactDOM from "react-dom";

// 类式组件
/* class Demo extends React.Component {
    state = {
        count:0
    }
    myRef = React.createRef();
    add = ()=>{
        // const {count} = this.state;
        // this.setState({count:count+1})

        this.setState((state)=>{
            return {count:state.count + 1}
        })
    }
    // 卸载组件
    unMount = ()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById("root"))
    }
    show = ()=>{
        alert(this.myRef.current.value)
    }
    componentDidMount(){
        this.time = setInterval(()=>{
            // 新状态依赖原状态 用函数形式
            this.setState(state=>({count:state.count + 1}))
        },1000)
    }
    // 将要卸载组件   清除定时器
    componentWillUnmount(){
        clearInterval(this.time);
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.myRef}/>
                <h1>当前求和:{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.unMount}>卸载组件</button>
                <button onClick={this.show}>点击提示数据</button>
            </div>
        )
    }
} */

// 函数式组件  rfce
function Demo(){
    // const [状态,方法] = React.useState(状态);// 返回的是一个数组,结构数组
    const [count,setCount] = React.useState(0);
    const [name,setName] = React.useState('Tom');
    const myRef = React.useRef();
    // 点我加1
    // function add(){
    //     setCount(count + 1)
    // }
    let add = ()=>{
        // setCount(count+1);//第一种写法
        // 第二种写法
        setCount((count)=>{
            return count + 1
        })
    }
    // 修改名字
    function changeName(){
        setName('Jack')
    }
    // 卸载组件
    function unMount(){
        ReactDOM.unmountComponentAtNode(document.getElementById("root"))
    }
    // 点击显示输入框的内容
    function show(){
        alert(myRef.current.value);
    }
    React.useEffect(()=>{
        // 这个函数不仅在组件挂载的时候执行,更新的时候也执行
        // 这里相当于componentDidMount或者componentDidUpdate取决于React.useEffect的第二个参数
        let time = setInterval(()=>{
            setCount(count=> count + 1)
        },1000)
        // 这里返回的函数 相当于componentWillUnmount
        return ()=>{
            clearInterval(time)
        }
    },[])// 第二参数是数组[]    空数组:全都不监测  第二个参数不写:全都检测  [count]代表只检测count
    return(
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和:{count}</h2>
            <h2>我的名字是:{name}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={changeName}>修改名字</button>
            <button onClick={unMount}>卸载组件</button>
            <button onClick={show}>点击提示数据</button>
        </div>
    )
}


export default Demo

/* 
    (1). State Hook: React.useState()
    (2). Effect Hook: React.useEffect()
    (3). Ref Hook: React.useRef()

    State Hook
        (1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
        (2). 语法: const [xxx, setXxx] = React.useState(initValue)  
        (3). useState()说明:
                参数: 第一次初始化指定的值在内部作缓存
                返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
        (4). setXxx()2种写法:
                setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
                setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
    Effect Hook
        (1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
        (2). React中的副作用操作:
                发ajax请求数据获取
                设置订阅 / 启动定时器
                手动更改真实DOM
        (3). 语法和说明: 
                useEffect(() => { 
                // 在此可以执行任何带副作用操作
                return () => { // 在组件卸载前执行
                    // 在此做一些收尾工作, 比如清除定时器/取消订阅等
                }
                }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
            
        (4). 可以把 useEffect Hook 看做如下三个函数的组合
                componentDidMount()
                componentDidUpdate()
                componentWillUnmount() 
    Ref Hook
        (1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
        (2). 语法: const refContainer = React.useRef()
        (3). 作用:保存标签对象,功能与React.createRef()一样
*/
/* import React from 'react'

function index() {
    return (
        <div>
            
        </div>
    )
}

export default index
 */

// rfce  函数快捷键