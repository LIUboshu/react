/* 
    该文件专门为Count组件生成action对象
*/
import { INCREMENT,DECREMENT } from "../constant";
export const createIncrementAction = data =>({type:INCREMENT,data})
export const createDecrementAction = data =>({type:DECREMENT,data})

// 因为store调用return里面的函数,所以这里的store可以省略
export const createIncrementAsyncAction = (data,time) =>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}