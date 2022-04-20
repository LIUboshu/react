import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class MyNavlink extends Component {
    render() {
        console.log(this.props);
        return (
            // 这里只需要自结束 {...this.props}接收所有props,包括this.props.children
            <NavLink activeClassName="liuboshu" className="list-group-item" {...this.props}/>
        )
    }
}
 