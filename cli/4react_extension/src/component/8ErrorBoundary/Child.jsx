import React, { Component } from 'react'

export default class Child extends Component {
    /* state = {
        users:[
            {id:'001',name:'Tom',age:18},
            {id:'002',name:'Jack',age:19},
            {id:'003',name:'peiqi',age:20}
        ]
    } */

    state = {
        users:'演示错误'
    }
    render() {
        return (
            <div>
                <h2>我只Child组件</h2>
                {
                    this.state.users.map(userObj=>{
                        return <h4 key={userObj.id}>{userObj.name}---{userObj.age}</h4>
                    })
                }
            </div>
        )
    }
}
