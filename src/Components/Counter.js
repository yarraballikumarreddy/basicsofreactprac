import React, { Component } from 'react';
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment() {
        // this.state.count=this.state.count+1
        // console.log(this.state.count)

        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     },
        //     () => {console.log("callback value"+this.state.count)} // callback value

        // )
        // console.log(this.state.count) //syncarnous value

        this.setState((prevsstate, props) =>
            (
                {
                    count: prevsstate.count + 1
                }
            ), () => { console.log("callback value" + this.state.count) } // callback value
        )
        console.log(this.state.count)
    }
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }


    render() {
        return (
            <div>
                Counter ---{this.state.count}
                {/* <button onClick={() => this.increment()}> INCREMENT</button> */}
                <button onClick={() => this.incrementFive()}> INCREMENTFive</button>
            </div>
        )
    }
}
export default Counter;