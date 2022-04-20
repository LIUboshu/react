import React from "react";
// 样式的模块化   第一种
// 如果两个css名字的一样   用less  或者给文件添加module
import hello from './Hello.module.css';

// 样式的模块化   第二种 可以用less
//import './Hello.module.css';

// 创建并暴露Hello组件
export default class Hello extends React.Component{
    render(){
        return(
            <h1 className={hello.title}>Hello,React</h1>
            // <h1 className="title">Hello,React</h1>
        )
    }
}