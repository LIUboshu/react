import React, { Component } from 'react'
// import qs from "querystring";//直接引入无需下载

// 引入querystring库  里面有stringify和parse方法转换
// let obj = {name:"tom",age:18};
// console.log(qs.stringify(obj));// 'name=tom&age=18'
// let str = 'name=张三&age=28';
// console.log(qs.parse(str));//{name: "张三", age: "28"}

const detailDate = [
    {id:'01',conent:'我爱你,中国'},
    {id:'02',conent:'百灵鸟从蓝天飞过'},
    {id:'03',conent:'我爱你春天蓬勃的秧苗'}
]
export default class Detail extends Component {
    render() {
        console.log(this.props)

        // 接收params参数
        // const  {id,title} = this.props.match.params;

        // 接收search参数
        // const {search} = this.props.location;
        // // 引入querystring库  parse方法转换成对象
        // console.log(qs.parse(search));
        // const {id,title} = qs.parse(search.slice(1));// 去掉?

        // 接收state参数  清除浏览器后刷新拿到的是undefined,所以报错  加空对象
        const {id,title} = this.props.location.state || {};
        console.log(id,title)

        const findResult = detailDate.find((item)=>{
            return item.id === id
        }) || {}   // 同样道理  清除浏览器后刷新拿到的是undefined,所以报错
        return (
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>conent:{findResult.conent}</li>
            </ul>
        )
    }
}
