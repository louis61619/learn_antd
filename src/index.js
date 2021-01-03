import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// 中文化
import 'moment/locale/zh-tw'

// import 'antd/dist/antd.css'
import 'antd/dist/antd.less'

import App from './comment/App'

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
