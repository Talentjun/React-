/* import React, { Component } from 'react';

function Kaikeba(props){
    return(
        <div>{props.stage} - {props.name}</div>
    )
}

//高阶组件 实际是一个函数

const withName = Comp =>{//Comp是接收进来的组件

    //重写组件的生命周期

    class NewComponent extends Component{
        componentDidMount(){
            console.log('do something');
        }
        render(){
            return <Comp {...this.props} name="高阶组件使用的介绍"/>
        }
    }
    //假设通过某种特殊手段获取本节课的名字
    //对传进来的组件进行扩展并且返回 return是另外的一个函数型的组件
    return NewComponent;
    
}

const withLog = Comp =>{
    console.log(Comp.name +'渲染了');
    return props=><Comp {...props} />
}

export default withLog(withName(Kaikeba)) */

import React, { Component } from 'react';

//高阶组件 实际是一个函数

const withName = Comp =>{//Comp是接收进来的组件

    //重写组件的生命周期

    class NewComponent extends Component{
        componentDidMount(){
            console.log('do something');
        }
        render(){
            return <Comp {...this.props} name="高阶组件使用的介绍"/>
        }
    }
    //假设通过某种特殊手段获取本节课的名字
    //对传进来的组件进行扩展并且返回 return是另外的一个函数型的组件
    return NewComponent;
    
}

const withLog = Comp =>{
    console.log(Comp.name +'渲染了');
    return props=><Comp {...props} />
}
@withName
@withLog
class Kaikeba extends Component{
    render(){
        return(
            <div>
                {this.props.stage} - {this.props.name}
            </div>
        )
    }
    
}
export default Kaikeba;

