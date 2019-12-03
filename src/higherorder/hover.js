import React, { Component } from 'react';
import UpdateComponent from '../higherorder/withCounter'

class Hoverincrem extends Component {
constructor(props){
    super(props)
    this.state={
        count:0
    }
}


incrementcount =()=>{
    this.setState( (prevstate)=>{
         return {count:prevstate.count+1}
     }
     );
     console.log(this.state.count)
 }
    render() {
        
        const {count}=this.state;
        return (
            <div>
            

            <div>
                {this.props.name}
            <div className="text-primary">{count}kkk</div>
            <button onMouseOver={this.incrementcount}> mouseover{count} nuber</button>
        </div></div>
        );
    }
}

export default  UpdateComponent( Hoverincrem);