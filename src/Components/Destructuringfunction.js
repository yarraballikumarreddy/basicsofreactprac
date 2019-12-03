import React from 'react';

// two way Destructuring props
const Destructuring = (props) => { 
    
    // 1.  functional parameter remove props and add({name,surname})   
   // 2. function body const {name,surname}=props
   const{name,surname}=props
    console.log(name,surname)
    return (
        <div>
            {/* change props.name =name ..etc */}
            <h1> hi !!!!{name} surname{surname} welcome to react</h1>
            {/* {props.children} */}
        </div>
    )
}

export default Destructuring;
