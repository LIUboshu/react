import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import store from "./redux/store";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// subscribe专门订阅redux状态的更改
// 监测redux中状态的改变,如redux的状态发生了改变,那么重新渲染App组件
store.subscribe(()=>{
  ReactDOM.render(<App />,document.getElementById('root'));
})