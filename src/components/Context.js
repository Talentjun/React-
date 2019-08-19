import React, { Component } from 'react';

//创建上下文
const Context = React.createContext();

const store = {
    name: '开课吧',
    sayHi(){
        console.log(this.name);
    }
}

export default class ContextSample extends Component {
  render() {
    return <Context.Provider value ={store} >
        <div>
            {/* 获取数据 */}
            <Context.Consumer>
                {/* 必须内嵌一个函数 这里的value就是上面的store */}
                {value => <div onClick={()=>value.sayHi()}>{value.name}</div>}
            </Context.Consumer>
        </div>
      </Context.Provider>;
  }
}
