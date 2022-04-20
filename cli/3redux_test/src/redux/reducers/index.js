/* 
    该文件用于汇总所有的reducer为一个总的reducer
*/

import {combineReducers} from "redux";

// 引入为Count组件服务的reducer
import count from "./count";
// 引入Person组件服务的reducer
import perReducer from "./person";

// 多个reducer需要借助api组合在一起
// 汇总所有的reducer变为一个总的reducer
export default  combineReducers({
    personList:perReducer,
    count
    // count:count
})