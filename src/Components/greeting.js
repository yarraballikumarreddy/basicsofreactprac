import React from 'react';
//  function Greet(){
//      return <h1>hello yarra balli kumar reddy</h1>
//  }

const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1> hi !!!!{props.name} surname{props.surname} welcome to react</h1>
            {props.children}
        </div>
    )
}
export default Greet;
export const Hello = (props) => {
    var a=2,b=8
    var x = props.a + props.b
    var y = a * b
    
    return (
        <div>
            <h1> {x} </h1>
            <h1>welcome to }</h1> {y}</div>
        
    )
}
