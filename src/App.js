import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
// import Button from 'antd/lib/button'
import {Button} from 'antd'
import 'antd/dist/antd.css'

//函数型组件传递props
function Welcome(props){
  return (
    <div>
      {/* 父传子 */}
      Hello, {props.name}
    </div>
  )
}


export default class App extends Component {
  //1.当需要状态时，需要构造函数
  constructor(props){
    super(props);

    //2.初始化状态
    this.state = {
      count:0,
      date: new Date()
    }
  }

  componentDidMount(){
    this.timer = setInterval(()=>{
      //3.更新状态 重新render
      this.setState({
        date: new Date(),
        count:this.state.count +1
      })

      //注意1：不能直接改状态
      //this.state.date=new Date();//错误
      
    },1000)
    //注意2：setState()是异步的 批量执行
    // this.setState({
    //   count:this.state.count+1
    // },()=>{
    //   console.log(this.state.count)
    // })

    //如果一个值依赖之前的状态或属性
    this.setState((prevState,prevProps)=>({
        count:prevState.count +1
    }),()=>{
      console.log(this.state.count)
    })
    
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  formatName(user){
    return user.firstName + ' ' + user.lastName; 
  }
  render() {
    const name = 'jerry';

    //jsx本身就是表达式
    const jsx = <p>hello!</p>;
    return (
      <div>
      {/* antd的试用 */}

      <Button type='danger'>button</Button>
        App组件
        {/* 表达式 */}
        <h1>{name}</h1>
        <p>{this.formatName({firstName:'ye',lastName:'jun'})}</p>
        {/* 属性 */}
        <img src={logo} style={{width:'100px'}} className='img' />
        {/* jsx也是表达式 */}
        {jsx}

        {/* 组件的属性传值:传入的属性是只读的 */}
        <Welcome name="Tom"></Welcome>   
        
        {/* 使用状态 */}
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
