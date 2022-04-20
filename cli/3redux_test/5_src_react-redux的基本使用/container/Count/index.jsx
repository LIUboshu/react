/* 
    容器组件
        借助react-redux,需要安装cnpm install --save react-redux
    
*/
// 引入Count的UI组件
import CountUI from "../../component/Count";

/* 
    // 引入redux,也就是引入store读取状态,更新状态都能做
    // 需要在上一层(App.jsx)引入store,通过props的形式传入(框架就是这么设计的)
    import store from "../../redux/store"; 
*/

// 引入connect用于连接ui组件与redux
import {connect} from 'react-redux';
// 引入action
import { 
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction 
} from "../../redux/count_action";

/* 
    1.mapStateToProps函数返回的是一个对象
    2.返回的对象中的key就作为传递给UI组件的props的key,value就作为传递给ui组件props的value
    3.mapStateToProps用于传递状态
*/
function mapStateToProps(state){
    return {count:state}
}
/* 
    1.mapDispatchToProps函数返回的是一个对象
    2.返回的对象中的key就作为传递给UI组件的props的key,value就作为传递给ui组件props的value
    3.mapDispatchToProps用于传递状态
*/
function mapDispatchToProps(dispatch){
    return {
        jia:data=>dispatch(createIncrementAction(data)),
        jian:(data)=>{
            dispatch(createDecrementAction(data))
        },
        asyncJia:(data,time)=>{
            dispatch(createIncrementAsyncAction(data,time))
        }
    }
}


// 使用connect()()创建并暴露一个Count的容器组件

// connect(redux中所保存的状态(函数),用于操作状态的方法(函数))(要建立关系的ui组件)

// 页面渲染的是容器组件,容器组件渲染后子组件(ui组件)也就渲染出来了
// App.jsx需要引入容器组件Count
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
