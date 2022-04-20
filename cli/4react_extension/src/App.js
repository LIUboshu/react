import React, { Component } from 'react'
// import Count from "./component/1setState";
// import  Demo  from "./component/2lazyLoad";
// import  Demo  from "./component/3hooks";
// import  Demo  from "./component/4Fragment";
// import  Demo  from "./component/5context";
// import  Demo  from "./component/6optimize";
// import  Demo  from "./component/7renderprops";
import  Demo  from "./component/8ErrorBoundary/Parent";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Count s={"张三"}/> */}
        <Demo/>
      </div>
    )
  }
}
