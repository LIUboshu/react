import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        console.log("Home组件的props",this.props);
        return (
            <div>
                Home
            </div>
        )
    }
}
