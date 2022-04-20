/* 
    初始化和加工状态
    1.该文件适用于创建一个为Count组件服务的reducer,reducer的本质就是一个函数
    2.reducer函数会接到两个参数,分别为:之前的状态(preState),动作对象(action)
*/
import { INCREMENT,DECREMENT } from "./constant";
const initState = 0;
export default function countReducer(preState =  initState,action){
    console.log(preState,action);// undefined,{type: "@@redux/INIT2.k.j.r.e.s"}

    /* if(preState === undefined){
        // preState等于undefined的时候是初始化,需要提供初始值
        preState = 0
    } */

    // 从action对象中获取:type,data
    const {type,data} = action;
    // 这里写switch判断
    // 根据type决定如何加工数据
    
    /* switch (type) {
        case 'increment':
            return preState + data    
        case 'decrement':
            return preState - data   
        default:
            return preState;
    } */

    switch (type) {
        case INCREMENT:
            return preState + data    
        case DECREMENT:
            return preState - data   
        default:
            return preState;
    }
}