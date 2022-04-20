import React, { Component } from 'react'

const detailDate = [
    {id:'01',conent:'我爱你,中国'},
    {id:'02',conent:'百灵鸟从蓝天飞过'},
    {id:'03',conent:'我爱你春天蓬勃的秧苗'}
]
export default class Detail extends Component {
    render() {
        console.log(this.props)
        // 接收params参数
        const  {id,title} = this.props.match.params;
        const findResult = detailDate.find((item)=>{
            return item.id === id
        })
        return (
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>conent:{findResult.conent}</li>
            </ul>
        )
    }
}
