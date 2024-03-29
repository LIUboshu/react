

import { ADD_PERSON } from "../constant";
// 初始化人的列表
const initState = [{id:"001",name:'tom',age:18}]
const personReducer = (preState = initState,action) =>{
    const {type,data} = action;
    switch (type) {
        case ADD_PERSON:
            // preState.unshift(data)//此处不可以这样写,这样会导致preState被改写了,personReducer就不是纯函数了
            return [data,...preState];
        default:
            return preState;
    }
}
export default personReducer;

/* export default function personReducer (preState = initState,action){
    const {type,data} = action;
    switch (type) {
        case ADD_PERSON:
            return [data,...preState];
    
        default:
            return preState;
    }
} */