import React, { Component,PureComponent } from 'react';

const Comment = React.memo(({data}) =>{
    console.log(data)
    console.log('render')//会一直渲染浪费资源
    //shouldComponentUpdate
    
    return (
        <div>
            <p>{data.body}</p>
            <p>-----{data.author}</p>
        </div>
    );
})

// class Comment extends PureComponent {
//     // shouldComponentUpdate(nextProps) {
//     //     if(nextProps.data.body === this.props.data.body && nextProps.data.author === this.props.data.author){
//     //         return false;
//     //     }else{
//     //         return true;
//     //     }
//     // };
    
//     render() {
//         console.log('render');
//         return (
//             <div>
//                 <p>{this.props.data.body}</p>
//                 <p>-----{this.props.data.author}</p>
//             </div>
//         );
//     }
// }





export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments:[]
        }
    }
    
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                comments:[
                    {body:'react is very good',author:'fackbook'},
                    {body:'vue is very good',author:'youyuixi'}
                ]
            })
        }, 1000);
    }

    render() {
        return (
        <div> 
            {this.state.comments.map((c,i)=>(
                <Comment key={i} data={c} />
            ))}
        </div>
        );
    }
}
