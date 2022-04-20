// 多种暴露方式
import React ,{ Component }from "react";
import './App.css';
import Hello from "./Component/Hello/Hello";
import Welcome from "./Component/Welcome/Welcome.jsx";

// 创建外壳组件  这里用class创建组件
class App extends Component{
  render(){
    return(
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}
// 暴露app组件
export default App