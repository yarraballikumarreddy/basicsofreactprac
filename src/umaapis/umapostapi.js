import React, { Component } from 'react'
import axios from 'axios';
class AddComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '1',
            name: 'Uma',
            roolnumber: '101'
        }
    }
    changeHandler = (event) => {
        this.setState({ [event.target.Perameters]: event.target.value })
    }
    GetID = event => {
        this.setState({ id: event.target.value })
    }
    GetName = event => {
        this.setState({ name: event.target.value })
    }
    GetRoolnumber = event => {
        this.setState({ roolnumber: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault();
        const user = {
            id: this.state.id,
            name: this.state.name,
            roolnumber: this.state.roolnumber

        };
        axios.post('http://localhost:8081/InseartData', user)
            .then(res => {
                console.log(res.data)
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Enter ID</label>
                                <input type="text" onChange={this.GetID} name="id" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Enter name</label>
                                <input type="text" onChange={this.GetName} name="name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Enter RoolNumber</label>
                                <input type="text" onChange={this.GetRoolnumber} name="roolnumber" className="form-control" />
                            </div>
                            <input type="submit" className="btn btn-primary btn-block" value="Submit" />
                            {/* <button type="submit" className="btn btn-primary btn-block">Add</button> */}

                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )

    }

}

export default AddComponent

