import React, { Component } from 'react';
import UpdateComponent from '../higherorder/withCounter'
class Countincrem extends Component {
   
    render() {
        const {count,incrementcount} = this.props;
        return <button onClick={incrementcount}>submit{count} number</button>
              
             
        
    }
}

export default UpdateComponent(Countincrem)