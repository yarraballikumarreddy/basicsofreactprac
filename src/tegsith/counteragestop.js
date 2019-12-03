import React, { Component } from 'react';

class Counteragestop extends Component {

state={
    name :"kumar reddy"
}
changename =()=>{

    this.setState({
name:"yarraballi"
    })
}

changenames =(newname)=>{

    this.setState({
name:newname
    })
}


changenameinput =(event)=>{

    this.setState({
name:event.target.value
    })
}

    render() {
        return (
            <div>
                <button onClick ={this.changename}>onclick </button>
                <button onClick ={()=>{this.changenames('hello kumar by annomus function')}} >onclick annomus func</button>
                <button onClick ={this.changenames.bind(this,'hello from bind func')} >onclick bind func</button>
                <input type = "text" onChange={this.changenameinput } placeholder={this.state.name} ></input>

                <h1>{this.state.name}</h1>
            </div>
        );
    }
}

export default Counteragestop;