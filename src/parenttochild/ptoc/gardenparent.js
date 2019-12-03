import React, { Component } from 'react';
//  import Children from './child'
import Parent from './parent';


class GParent extends Component {

    state={
        title:'titleplacehllllllllllolder'
    }
    changetheworld =(newTitle)=>{
        this.setState({title:newTitle})
    }
    dowhathever =(newTitle)=>{
        this.setState({title:newTitle})
    }
    render() {
        return (
            <div>
                <Parent dowhathever={this.changetheworld.bind(this ,'knewtitile')} title={this.state.title}/>
                <Parent changetheworldevent={this.changetheworld.bind(this ,'sibling')} title={this.state.title}></Parent>
            </div>
        );
    }
}

export default GParent;