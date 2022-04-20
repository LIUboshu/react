import React, { Component } from 'react'
import  axios  from "axios";

export default class App extends Component {
    getStudenData = ()=>{
        axios({
            method:"get",
            url:"http://localhost:3000/api1/students"
        }).then(response=>{
            console.log(response);
        }).catch(reason=>{
            console.log(reason);//参数出了问题
        })
    }
    getCarData = ()=>{
        axios({
            method:"get",
            url:"http://localhost:3000/api2/cars"
        }).then(response=>{
            console.log(response);
        }).catch(reason=>{
            console.log(reason);//参数出了问题
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudenData}>点我获取学生信息</button>
                <button onClick={this.getCarData}>点我获取汽车信息</button>
            </div>
        )
    }
}
/* 
配置代理   proxy  解决跨域
    需要启动代理服务器   这里用作演示
    !!!!!!!!!!!!必须!!!!!!!!!!!!!! 配置setupProxy.js文件
        命令:
            node server1.js
            node server2.js

*/