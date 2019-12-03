import React ,{Component} from 'react';
class Message extends Component{
    constructor(){
        super()
        this.state = {message: "welcome vister ....to regnant"} 
    }
changeMessage(){
    this.setState({
        message:"THANK YOU KUMAR FOR SUBSCRIBING"
    })
}
 render(){
        return (
            <div>
        <h1>
            <button onClick={()=> this.changeMessage()}> subscribe..</button>
            ----vistors welcome here{this.state.message}./././.
        </h1>
        </div>
        )
    }
   
}
export default Message ;