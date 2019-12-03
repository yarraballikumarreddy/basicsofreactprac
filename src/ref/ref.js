import React, { Component } from 'react';

class Refcom extends Component {
    //step 1
    constructor(props){
        super (props)
         this.inputRef =React.createRef()

    }
//step3
    componentDidMount(){
        this.inputRef.current.focus()
    }
    clickHandler =() =>{
        console.log("clickhandlaer" +"   "+this.inputRef.current.value)
        alert(`"something you typed" ${this.inputRef.current.value}`)
    }

    render() {
        return (
            <div>
                {/* step2 */}
               input: <input ref={this.inputRef} type="text"></input>
               <button onClick={this.clickHandler}> submit</button>
            </div>
        );
    }
}

export default Refcom