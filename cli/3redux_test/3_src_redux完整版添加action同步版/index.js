import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import store from "./redux/store";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// subscribe专门订阅redux状态的更改
store.subscribe(()=>{
  ReactDOM.render(<App />,document.getElementById('root'));
})