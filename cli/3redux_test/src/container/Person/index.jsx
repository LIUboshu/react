import React, { Component } from 'react'
import { nanoid } from "nanoid";
import { connect } from 'react-redux';
import { createPersonAction } from "../../redux/actions/person";
class Person extends Component {
    addPerson = () =>{
        const name = this.nameNode.value;
        const age = this.nameAge.value;
        const personObj = {id:nanoid(),name,age}
        this.props.jiaren(personObj);
        this.nameNode.value = '';
        this.nameAge.value = '';
    }
    render() {
        return (
            <div>
                <h2>这是Person组件,上面的组件总和是:{this.props.count}</h2>
                <input ref={c => this.nameNode = c}type="text" placeholder='请输入名字'/>
                <input ref={c => this.nameAge = c}type="number" placeholder='请输入年龄'/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map((item)=>{
                            return <li key={item.id}>{item.name}--{item.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        persons:state.personList,
        count:state.count
    }),
    {jiaren:createPersonAction}
)(Person)
