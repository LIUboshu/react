/* 
    该文件专门为Count组件生成action对象
*/
import { INCREMENT,DECREMENT } from "./constant";

// import store from "./store";

// 第一种

/* function createIncrementAction (data){
    return {type:'increment',data}
}
function createDecrementAction (data){
    return {type:'decrement',data}
} */


// 第二种
/* const createIncrementAction = (data) =>{
    return {type:'increment',data}
}
const createDecrementAction = (data) =>{
    return {type:'decrement',data}
} */

// 第三种  返回对象外面加()   之后分别暴露
/* export const createIncrementAction = data =>({type:'increment',data})
export const createDecrementAction = data =>({type:'decrement',data}) */

// 第四种  返回对象外面加()   之后分别暴露   最终  这里都是同步的action,{}
// 同步action,就是指action的值为object类型的一般对象
export const createIncrementAction = data =>({type:INCREMENT,data})
export const createDecrementAction = data =>({type:DECREMENT,data})




// 异步action,就是指action的值为函数,异步action中一般会调用同步action,异步action不是必须要用的
/* export const createIncrementAsyncAction = (data,time) =>{
    return ()=>{
        setTimeout(()=>{
            store.dispatch({type:INCREMENT,data})
        },time)
    }
} */

/* export const createIncrementAsyncAction = (data,time) =>{
    return ()=>{
        setTimeout(()=>{
            store.dispatch(createIncrementAction(data))
        },time)
    }
} */

// 因为store调用return里面的函数,所以这里的store可以省略
export const createIncrementAsyncAction = (data,time) =>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}