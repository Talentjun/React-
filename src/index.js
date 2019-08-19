import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Lifecycle from './Lifecycle'
import CartSample from './CartSample';
import CommentList from './components/CommentList';
import Composition from './components/Composition';
import Hoc from './components/Hoc';
import Context from './components/Context';
import AntdText from './components/AntdText';
import KFormSample from './components/KFormSample';

//实际工作中只是渲染一次
//  ReactDOM.render(<Lifecycle/>,document.querySelector('#root')); 
//  ReactDOM.render(<CartSample title="react 购物车"/>,document.querySelector('#root')); 
// ReactDOM.render(<CommentList/>,document.querySelector('#root'));
// ReactDOM.render(<Composition/>,document.querySelector('#root'));
// ReactDOM.render(<Hoc stage="React"/>,document.querySelector('#root'));
// ReactDOM.render(<Context/>,document.querySelector('#root'));
// ReactDOM.render(<AntdText />,document.querySelector('#root'));
ReactDOM.render(<KFormSample />,document.querySelector('#root'));

//动态渲染

// function tick(){
//     ReactDOM.render(<h2>{new Date().toLocaleTimeString()}</h2>,document.querySelector('#root'))
// }

// setInterval(tick,1000)