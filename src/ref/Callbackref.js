import React, { Component } from 'react';

class Callbackref extends Component {
    constructor(props){
        super(props)
       this.inputRef =React.createRef()
       //step 1 assign value to null form varable
       this.cbRef= null
       //step2 call back
       this.setcbRef = element => {
           
           this.cbRef=element
         
       }

    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    
    clickHandler1 =() =>{
        console.log("clickhandlaer" +"   "+this.setcbRef.value)
        alert(`"something you typed" ${this.setcbRef.element}`)
    }

    render() {
        return (
            <div>
               <h1> callback</h1>
                {/* step3 */}
               
                <input type ="text" ref={this.setcbRef}></input>
                <button onClick={this.clickHandler}> submit</button>
                <button onClick={this.clickHandler1}> submit1</button>
            </div>
        );
    }
}

export default Callbackref;