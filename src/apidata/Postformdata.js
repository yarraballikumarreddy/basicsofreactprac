import React, { Component } from "react";
import axios from 'axios';
class PostDataForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userid :"userid",
            title:"title",
            body :"body"
        }
    }
    changeHandler =(event) => {
        this.setState({[event.target.name] :event.target.value})
    }
submitHandler = e =>{
    e.preventDefault()
    console.log(this.state)

}
    render() {
        const { userid, title, body } = this.state
        return <div>
            <h1>posting data from form</h1>

            <form onSubmit ={this.submitHandler}>

                USERID :<input type="text"
                    name="userid"
                    value={userid}
                    onChange={this.changeHandler}>
                </input>
                TITLE: 
                <input type="text"
                 name="title"
                 onChange={this.changeHandler}
                 value={title}></input>
                BODY : 
                <input type="text"
                 name="body" 
                 onChange={this.changeHandler} 
                 value={body}>

                 </input>
                 <button type="submit">Submit</button>
            </form>
           
        </div>
    }
};
export default PostDataForm;