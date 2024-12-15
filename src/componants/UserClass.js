import React from 'react';


class UserClass extends React.Component{
    constructor(props){
       super(props)
       this.state = {
        count :0,
       };
    }
    componentDidMount(){
        console.log("hello");  
    }
    render(){

        return (
            <div className="user-card">
            <h2>name : {this.props.name}</h2>
            <button onClick={()=>{
                this.setState ({
                    count: this.state.count + 1,
                })
            }}>incount</button>
            <h3>location india</h3>
            <h3>count:{this.state.count}</h3>
        </div>
        );
    };
};
export default UserClass