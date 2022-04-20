/* 
    该文件专门为Count组件生成action对象
*/
import { INCREMENT,DECREMENT } from "./constant";
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

// 第四种  返回对象外面加()   之后分别暴露   最终
export const createIncrementAction = data =>({type:INCREMENT,data})
export const createDecrementAction = data =>({type:DECREMENT,data})