// 引入react核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom';
import './index.css';
// 引入App组件
import App from './App';
// reportWebVitals用于记录页面性能
import reportWebVitals from './reportWebVitals';
// <React.StrictMode>能检查app和app所有子组件写的东西是否合理
// 渲染 App到页面
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
