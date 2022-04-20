/* 
    该文件专门用于暴露一个store对象,整个应用只有一个store对象
*/

// 引入createStore,专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware,combineReducers} from "redux";
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension';
// 引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk';
// 引入为Count组件服务的reducer
import countReducer from "./reducers/count";
// 引入Person
import perReducer from "./reducers/person";
// 多个reducer需要借助api组合在一起
const allReducer =  combineReducers({
    personList:perReducer,
    he:countReducer
    
})
// 暴露store
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)));